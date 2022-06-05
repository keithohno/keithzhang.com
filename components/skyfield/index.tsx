import { useEffect, useState } from "react";
import { mat4, vec3, quat } from "gl-matrix";

import { loadShaderProgram } from "../shader";

const stars = [
  [1.0, 0.0, -3.0, 0.02],
  [0.0, -1.0, -4.0, 0.02],
  [0.5, 0.5, -2.0, 0.02],
];

const STAR_VERTS = 12;

function initBuffers(gl: WebGLRenderingContext) {
  let starBuffers = [];

  for (const star of stars) {
    // create and bind buffer
    const starBuffer = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, starBuffer);
    // calculate data
    let vertices: number[] = [];
    for (let i = 0; i < STAR_VERTS; i += 1) {
      vertices.push(
        star[0] + star[3] * Math.cos((2 * Math.PI * i) / STAR_VERTS)
      );
      vertices.push(
        star[1] + star[3] * Math.sin((2 * Math.PI * i) / STAR_VERTS)
      );
      vertices.push(star[2]);
    }
    // buffer data
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    starBuffers.push(starBuffer);
  }

  return {
    stars: starBuffers,
  };
}

function drawScene(
  gl: WebGLRenderingContext,
  programInfo: any,
  buffers: { stars: WebGLBuffer[] },
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
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.uProjection,
    false,
    projectionMatrix
  );
  gl.uniformMatrix4fv(programInfo.uniformLocations.uModel, false, orientation);
  gl.uniformMatrix4fv(programInfo.uniformLocations.uView, false, viewMatrix);

  for (const buffer of buffers.stars) {
    // specify vertex attribute format
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      3,
      gl.FLOAT,
      false,
      0,
      0
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    // draw
    gl.drawArrays(gl.TRIANGLE_FAN, 0, STAR_VERTS);
  }
}

const Skyfield: React.FC = () => {
  const [rot1, setRot1] = useState<vec3>(vec3.fromValues(0, 1, 0));
  const [rot2, setRot2] = useState<vec3>(vec3.fromValues(1, 0, 0));
  const [orientation, setOrientation] = useState<mat4>(mat4.create());

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

    const gl = canvas.getContext("webgl");
    if (gl === null)
      return console.error(
        "WebGL not supported, some elements may not render correctly"
      );
    const vsSource = `
      attribute vec4 aPosition;
  
      uniform mat4 uModel;
      uniform mat4 uView;
      uniform mat4 uProjection;
  
      void main() {
        gl_Position = uProjection * uModel * uView * aPosition;
      }
    `;
    const fsSource = `
      void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
      }
    `;

    const shaderProgram = loadShaderProgram(gl, vsSource, fsSource);
    if (!shaderProgram) return;

    const programInfo = {
      attribLocations: {
        aPosition: gl.getAttribLocation(shaderProgram, "aPosition"),
      },
      uniformLocations: {
        uProjection: gl.getUniformLocation(shaderProgram, "uProjection"),
        uModel: gl.getUniformLocation(shaderProgram, "uModel"),
        uView: gl.getUniformLocation(shaderProgram, "uView"),
      },
    };
    let buffers = initBuffers(gl);
    drawScene(gl, programInfo, buffers, orientation);
  }, [orientation]);

  return (
    <>
      <canvas style={{ position: "fixed", zIndex: -1 }} id="canvas"></canvas>
      <button
        style={{ zIndex: 1 }}
        onClick={() => {
          rotate((4 * Math.PI) / 8, 0.01);
        }}
      >
        rotate
      </button>
    </>
  );
};

export default Skyfield;
