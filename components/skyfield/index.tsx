import { useEffect, useState } from "react";
import { mat4, vec3, quat } from "gl-matrix";

import { loadShaderProgram } from "../shader";

const stars = [
  [1.0, 0.0, -3.0, 0.02],
  [0.0, -1.0, -4.0, 0.02],
  [0.5, 0.5, -2.0, 0.02],
];

function initBuffers(gl: WebGLRenderingContext) {
  // split data into separate arrays
  let positionData = [];
  let sizeData = [];
  for (const star of stars) {
    positionData.push(star[0]);
    positionData.push(star[1]);
    positionData.push(star[2]);
    sizeData.push(star[3]);
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

  return { positions, sizes };
}

function drawScene(
  gl: WebGLRenderingContext,
  uniforms: any,
  buffer: { positions: WebGLBuffer; sizes: WebGLBuffer },
  orientation: mat4
) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // perspective matrix
  const fov = (45 * Math.PI) / 180;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, fov, aspect, 0.1, 100.0);

  // view matrix
  const viewMatrix = mat4.create();
  mat4.translate(viewMatrix, viewMatrix, [0.0, 0.0, 0.0]);

  // set uniforms
  gl.uniformMatrix4fv(uniforms.uProjection, false, projectionMatrix);
  gl.uniformMatrix4fv(uniforms.uModel, false, orientation);
  gl.uniformMatrix4fv(uniforms.uView, false, viewMatrix);

  // format of position buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer.positions);
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(0);

  // format of size buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer.sizes);
  gl.vertexAttribPointer(1, 1, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(1);

  // draw
  gl.drawArrays(gl.POINTS, 0, 3);
}

const Skyfield: React.FC = () => {
  const [gl, setGl] = useState<WebGLRenderingContext | null>();
  const [uniforms, setUniforms] = useState<any>();
  const [buffers, setBuffers] = useState<{
    positions: WebGLBuffer;
    sizes: WebGLBuffer;
  }>();

  const [rot1, setRot1] = useState<vec3>(vec3.fromValues(0, 1, 0));
  const [rot2, setRot2] = useState<vec3>(vec3.fromValues(1, 0, 0));
  const [orientation, setOrientation] = useState<mat4>(mat4.create());

  const [tPrev, setTPrev] = useState<DOMHighResTimeStamp>(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    requestAnimationFrame((tNow: any) => {
      let dt = tNow - tPrev;
      if (dt > 10) {
        setTPrev(tNow);
        rotate(0, dt / 16000);
      }
    });
  }, [timer]);

  useEffect(() => {
    setInterval(() => {
      setTimer((p) => p + 1);
    }, 10);
  }, []);

  const rotate = (axisTheta: number, axisAngle: number) => {
    // calculate rotation axis
    const rotAxis = vec3.create();
    const weightedRot1 = vec3.create();
    const weightedRot2 = vec3.create();
    vec3.scale(weightedRot1, rot1, Math.cos(axisTheta));
    vec3.scale(weightedRot2, rot2, Math.sin(axisTheta));
    vec3.add(rotAxis, weightedRot1, weightedRot2);

    // calculate rotation matrix
    const rotMat = mat4.create();
    mat4.fromRotation(rotMat, axisAngle, rotAxis);

    // mutate rot1, rot2
    const newRot1 = vec3.clone(rot1);
    const newRot2 = vec3.clone(rot2);
    vec3.transformMat4(newRot1, newRot1, rotMat);
    vec3.transformMat4(newRot2, newRot2, rotMat);
    setRot1(newRot1);
    setRot2(newRot2);

    // mutate orientation
    const newOrientation = mat4.create();
    mat4.multiply(newOrientation, rotMat, orientation);
    setOrientation(newOrientation);
  };

  useEffect(() => {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const glContext = canvas.getContext("webgl");
    if (!glContext) {
      console.error(
        "WebGL not supported, some elements may not render correctly"
      );
      return;
    }
    setGl(glContext);
  }, []);

  useEffect(() => {
    if (!gl) return;

    // shaders
    const vsSource = `
      attribute vec4 aPosition;
      attribute float aSize;
  
      uniform mat4 uModel;
      uniform mat4 uView;
      uniform mat4 uProjection;
  
      void main() {
        gl_Position = uProjection * uModel * uView * aPosition;
        gl_PointSize = aSize;
      }
    `;
    const fsSource = `
      precision lowp float;

      void main() {
        vec2 xy_norm = 2.0 * gl_PointCoord - 1.0;
        if (dot(xy_norm, xy_norm) > 1.0) {
            discard;
        }
        gl_FragColor = vec4(1.0, 1.0, 1.0, 0.6);
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

    // buffer init
    setBuffers(initBuffers(gl));
  }, [gl]);

  // rerender on every orientation change
  useEffect(() => {
    if (!gl || !buffers) return;
    drawScene(gl, uniforms, buffers, orientation);
  }, [orientation]);

  return (
    <canvas style={{ position: "fixed", zIndex: -1 }} id="canvas"></canvas>
  );
};

export default Skyfield;
