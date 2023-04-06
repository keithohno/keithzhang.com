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

// boilerplate for loading and using vertex and frag shaders
export const loadShaderProgram = (gl: WebGLRenderingContext) => {
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
