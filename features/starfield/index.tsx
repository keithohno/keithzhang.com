import { useEffect, useRef, useState } from "react";
import { mat4, vec3 } from "gl-matrix";
import styled from "@emotion/styled";

import { loadShaderProgram } from "./shaders";
import { useStarfield } from "./context";
import { useGl } from "./hooks";
import { parseStarData } from "./utils";

const initBuffers = async (gl: WebGLRenderingContext) => {
  // fetch and parse binary data
  const starDataRaw = await (
    await (await fetch("BSC5ra-small")).blob()
  ).arrayBuffer();
  const { starCount, positionData, sizeData, colorData } =
    parseStarData(starDataRaw);

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
  return { starCount, positions, sizes, colors };
};

function drawScene(
  gl: WebGLRenderingContext,
  uniforms: any,
  buffer: { positions: WebGLBuffer; sizes: WebGLBuffer; colors: WebGLBuffer },
  starCount: number,
  orientation: mat4,
  offsets: vec3,
  fov: number
) {
  gl.clearColor(0.0, 0.0, 0.0, 0.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // perspective matrix
  const aspect = gl.canvas.width / gl.canvas.height;
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
  mat4.translate(viewMatrix, viewMatrix, offsets);

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

  // format of color buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer.colors);
  gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(2);

  // draw
  gl.drawArrays(gl.POINTS, 0, starCount);
}

const Starfield: React.FC = () => {
  const { gl } = useGl("canvas");
  const [uniforms, setUniforms] = useState<any>();
  const [buffers, setBuffers] = useState<{
    positions: WebGLBuffer;
    sizes: WebGLBuffer;
    colors: WebGLBuffer;
  }>();
  const [starCount, setStarCount] = useState<number>(0);

  const {
    rotAxisX,
    rotAxisY,
    rotAxisZ,
    offsetX,
    offsetY,
    offsetZ,
    sqrtRotPerMs,
    fov,
  } = useStarfield();
  const [orientation, setOrientation] = useState<mat4>(mat4.create());

  const [tPrev, setTPrev] = useState<DOMHighResTimeStamp>(0);

  const frame = useRef(0);
  const animate = (tNow: any) => {
    let dt = tNow - tPrev;
    if (dt > 10) {
      setTPrev(tNow);
      rotate(dt * sqrtRotPerMs ** 2);
    }
    frame.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [tPrev]);

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
    initBuffers(gl).then(({ starCount, positions, sizes, colors }) => {
      setBuffers({ positions, sizes, colors });
      setStarCount(starCount);
    });
  }, [gl]);

  useEffect(() => {
    if (!gl) return;

    const shaderProgram = loadShaderProgram(gl);
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
    drawScene(
      gl,
      uniforms,
      buffers,
      starCount,
      orientation,
      vec3.fromValues(offsetX, offsetY, -offsetZ),
      fov
    );
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(black, #07182a);
`;

export default Starfield;
