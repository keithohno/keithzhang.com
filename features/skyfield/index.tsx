import { useEffect, useState } from "react";
import { mat4, vec3 } from "gl-matrix";
import styled from "@emotion/styled";

import { loadShaderProgram } from "../shader";
import { useStarfield } from "./context";
import { useGl } from "./hooks";

const RADIUS = 4.0;

const initBuffers = async (gl: WebGLRenderingContext) => {
  // fetch binary data
  let positionData: number[] = [];
  let sizeData: number[] = [];
  let colorData: number[] = [];
  const res = await (await (await fetch("BSC5ra-small")).blob()).arrayBuffer();
  for (let i = 0; i < res.byteLength; i += 19) {
    let floats = new Float64Array(res.slice(i, i + 16));
    positionData.push(RADIUS * Math.cos(floats[0]) * Math.cos(floats[1]));
    positionData.push(RADIUS * Math.sin(floats[0]) * Math.cos(floats[1]));
    positionData.push(RADIUS * Math.sin(floats[1]));
    let sizes = new Int16Array(res.slice(i + 16, i + 18));
    sizeData.push((sizes[0] - 610) / 6);
    // color by stellar classification
    switch (new Uint8Array(res.slice(i + 18, i + 19))[0]) {
      case 77:
        colorData.push(1.0, 0.5, 0.3);
        break;
      case 75:
        colorData.push(1.0, 0.7, 0.4);
        break;
      case 71:
        colorData.push(1.0, 0.8, 0.7);
        break;
      case 70:
        colorData.push(0.9, 0.9, 0.9);
        break;
      case 65:
        colorData.push(0.7, 0.8, 1.0);
        break;
      case 66:
        colorData.push(0.4, 0.7, 1.0);
        break;
      case 79:
        colorData.push(0.2, 0.4, 1.0);
        break;
      case 83:
      case 67:
        colorData.push(1.0, 0.3, 0.2);
        break;
      case 87:
        colorData.push(1.0, 1.0, 1.0);
        break;
      default:
        colorData.push(0.9, 0.9, 0.9);
    }
  }

  // load data into buffers
  const positions = gl.createBuffer()!;
  gl.bindBuffer(gl.ARRAY_BUFFER, positions);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(positionData),
    gl.STATIC_DRAW
  );
  const sizes = gl.createBuffer()!;
  gl.bindBuffer(gl.ARRAY_BUFFER, sizes);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sizeData), gl.STATIC_DRAW);
  const colors = gl.createBuffer()!;
  gl.bindBuffer(gl.ARRAY_BUFFER, colors);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);
  return { positions, sizes, colors };
};

function drawScene(
  gl: WebGLRenderingContext,
  uniforms: any,
  buffer: { positions: WebGLBuffer; sizes: WebGLBuffer; colors: WebGLBuffer },
  orientation: mat4,
  zOffset: number
) {
  gl.clearColor(0.0, 0.0, 0.0, 0.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // perspective matrix
  const fov = (50 * Math.PI) / 180;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const projectionMatrix = mat4.create();
  const nearClippingPlane = 0.1;
  const farClippingPlane = 100.0;
  mat4.perspective(
    projectionMatrix,
    fov,
    aspect,
    nearClippingPlane,
    farClippingPlane
  );

  // view matrix
  const viewMatrix = mat4.create();
  mat4.translate(viewMatrix, viewMatrix, [0.0, 0.0, -zOffset]);

  // set uniforms
  gl.uniformMatrix4fv(uniforms.uProjection, false, projectionMatrix);
  gl.uniformMatrix4fv(uniforms.uView, false, viewMatrix);
  gl.uniformMatrix4fv(uniforms.uModel, false, orientation);

  // format of position buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer.positions);
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(0);

  // format of size buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer.sizes);
  gl.vertexAttribPointer(1, 1, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(1);

  // format of size buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer.colors);
  gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(2);

  // draw
  gl.drawArrays(gl.POINTS, 0, 2000);
}

const Skyfield: React.FC = () => {
  const { gl } = useGl("canvas");
  const [uniforms, setUniforms] = useState<any>();
  const [buffers, setBuffers] = useState<{
    positions: WebGLBuffer;
    sizes: WebGLBuffer;
    colors: WebGLBuffer;
  }>();

  const { rotAxisX, rotAxisY, rotAxisZ, rotPerMs, zOffset } = useStarfield();
  const [orientation, setOrientation] = useState<mat4>(mat4.create());

  const [tPrev, setTPrev] = useState<DOMHighResTimeStamp>(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    requestAnimationFrame((tNow: any) => {
      let dt = tNow - tPrev;
      if (dt > 10) {
        setTPrev(tNow);
        rotate(dt * rotPerMs);
      }
    });
  }, [timer]);

  useEffect(() => {
    setInterval(() => {
      setTimer((p) => p + 1);
    }, 10);
  }, []);

  const rotate = (rotAmount: number) => {
    // calculate rotation matrix
    const rotMat = mat4.create();
    const rotAxis = vec3.fromValues(rotAxisX, rotAxisY, rotAxisZ);
    mat4.fromRotation(rotMat, rotAmount, rotAxis);

    // mutate orientation
    const newOrientation = mat4.create();
    mat4.multiply(newOrientation, rotMat, orientation);
    setOrientation(newOrientation);
  };

  useEffect(() => {
    if (!gl) return;

    // buffer init
    initBuffers(gl).then((res) => {
      setBuffers(res);
    });
  }, [gl]);

  useEffect(() => {
    if (!gl) return;

    // shaders
    const vsSource = `
      attribute vec4 aPosition;
      attribute float aSize;
      attribute vec3 aColor;
      
      varying lowp vec3 vColor;
  
      uniform mat4 uModel;
      uniform mat4 uView;
      uniform mat4 uProjection;
  
      void main() {
        gl_Position = uProjection * uView * uModel * aPosition;
        gl_PointSize = aSize;
        vColor = aColor;
      }
    `;
    const fsSource = `
      precision lowp float;

      varying lowp vec3 vColor;

      void main() {
        vec2 xy_norm = 2.0 * gl_PointCoord - 1.0;
        float r2 = dot(xy_norm, xy_norm);
        if (r2 > 1.0) {
          discard;
        }
        gl_FragColor = vec4(vColor, 0.7 / (r2 * 45.0 + 0.5));
      }
    `;

    const shaderProgram = loadShaderProgram(gl, vsSource, fsSource);
    if (!shaderProgram) return;

    // shader uniform locations
    setUniforms({
      uProjection: gl.getUniformLocation(shaderProgram, "uProjection"),
      uModel: gl.getUniformLocation(shaderProgram, "uModel"),
      uView: gl.getUniformLocation(shaderProgram, "uView"),
    });

    // enable alpha
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  }, [gl]);

  // rerender on every orientation change
  useEffect(() => {
    if (!gl || !buffers) return;
    drawScene(gl, uniforms, buffers, orientation, zOffset);
  }, [orientation, buffers]);

  return (
    <>
      <Background>
        <canvas id="canvas" />
      </Background>
    </>
  );
};

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  background-image: linear-gradient(black, #07182a);
`;

export default Skyfield;
