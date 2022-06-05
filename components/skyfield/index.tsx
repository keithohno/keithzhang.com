import { useEffect } from "react";
import { mat4 } from "gl-matrix";

import { loadShaderProgram } from "../shader";

const stars = [
  [1.0, 0.0, 0.04],
  [0.0, -1.0, 0.02],
  [0.5, 0.5, 0.05],
];

const STAR_VERTS = 12;

function initBuffers(gl: WebGLRenderingContext) {
  let starBuffers = [];

  for (const star of stars) {
    // create and bind buffer
    const starBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, starBuffer);
    // calculate data
    let vertices: number[] = [];
    for (let i = 0; i < STAR_VERTS; i += 1) {
      vertices.push(
        star[0] + star[2] * Math.cos((2 * Math.PI * i) / STAR_VERTS)
      );
      vertices.push(
        star[1] + star[2] * Math.sin((2 * Math.PI * i) / STAR_VERTS)
      );
    }
    // buffer data
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    starBuffers.push(starBuffer);
  }

  return {
    stars: starBuffers,
  };
}

function drawScene(gl: WebGLRenderingContext, programInfo: any, buffers: any) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // perspective matrix
  const fov = (45 * Math.PI) / 180;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, fov, aspect, 0.1, 100.0);

  // view matrix
  const viewMatrix = mat4.create();
  mat4.translate(viewMatrix, viewMatrix, [-0.0, 0.0, -6.0]);

  // model matrix
  const modelMatrix = mat4.create();

  // set uniforms
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.uProjection,
    false,
    projectionMatrix
  );
  gl.uniformMatrix4fv(programInfo.uniformLocations.uModel, false, modelMatrix);
  gl.uniformMatrix4fv(programInfo.uniformLocations.uView, false, viewMatrix);

  for (const buffer of buffers.stars) {
    // specify vertex attribute format
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      2,
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
    drawScene(gl, programInfo, buffers);
  }, []);

  return <canvas style={{ position: "fixed" }} id="canvas"></canvas>;
};

export default Skyfield;
