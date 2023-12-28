const DISTANCE_MOD = 1 / 100000;
const BYTES_PER_STAR = 23;
const STAR_SIZE_SHIFT = -590;
const STAR_SIZE_MULTI = 1 / 6;

/**
 * Converts a color code (0-255 corresponding to ASCII char) to an RGB value.
 */
function colorCodeToRGBValues(colorCode: number) {
  switch (colorCode) {
    case 77:
      return [1.0, 0.5, 0.3];
    case 75:
      return [1.0, 0.7, 0.4];
    case 71:
      return [1.0, 0.8, 0.7];
    case 70:
      return [0.9, 0.9, 0.9];
    case 65:
      return [0.7, 0.8, 1.0];
    case 66:
      return [0.4, 0.7, 1.0];
    case 79:
      return [0.2, 0.4, 1.0];
    case 83:
    case 67:
      return [1.0, 0.3, 0.2];
    case 87:
      return [1.0, 1.0, 1.0];
    default:
      return [0.9, 0.9, 0.9];
  }
}

/**
 * Extracts position, size, and color data from an array buffer.
 * The data format is specified in scripts/extract.py
 */
export function parseStarData(data: ArrayBuffer) {
  let positionData: number[] = [];
  let sizeData: number[] = [];
  let colorData: number[] = [];
  let starCount = data.byteLength / BYTES_PER_STAR;

  for (let i = 0; i < data.byteLength; i += BYTES_PER_STAR) {
    // position
    const r_ascension = new Float64Array(data.slice(i, i + 8))[0];
    const declination = new Float64Array(data.slice(i + 8, i + 16))[0];
    let distance =
      new Float32Array(data.slice(i + 16, i + 20))[0] * DISTANCE_MOD;
    positionData.push(distance * Math.cos(r_ascension) * Math.cos(declination));
    positionData.push(distance * Math.sin(r_ascension) * Math.cos(declination));
    positionData.push(distance * Math.sin(declination));

    // size
    let sizes = new Int16Array(data.slice(i + 20, i + 22));
    sizeData.push((sizes[0] + STAR_SIZE_SHIFT) * STAR_SIZE_MULTI);

    // color
    const colorCode = new Uint8Array(data.slice(i + 22, i + 23))[0];
    colorData.push(...colorCodeToRGBValues(colorCode));
  }
  return { starCount, positionData, sizeData, colorData };
}
