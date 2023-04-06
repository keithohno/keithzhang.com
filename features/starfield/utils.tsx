export const colorCodeToRGBValues = (colorCode: number) => {
  // color by stellar classification
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
};
