// boilerplate for loading and using vertex and frag shaders
export const loadShaderProgram = (
  gl: WebGLRenderingContext,
  vsSource: string,
  fsSource: string
) => {
  // load shaders
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vertexShader || !fragmentShader) return;

  // create shader program
  const shaderProgram = gl.createProgram()!;
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // handle possible error
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error(
      "failed to link shaders: ",
      gl.getProgramInfoLog(shaderProgram)
    );
    return;
  }

  // use shader program
  gl.useProgram(shaderProgram);
  return shaderProgram;
};

const loadShader = (
  gl: WebGLRenderingContext,
  type: GLenum,
  source: string
) => {
  // create, load, and compile
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  // handle possible error
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("failed to compile shader: ", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return;
  }
  return shader;
};
