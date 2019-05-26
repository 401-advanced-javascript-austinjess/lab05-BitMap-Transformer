const transformInversion = (bmp) => {
  if (!bmp.colorBuffer.length) throw 'invalid bitmap!';

  for (let i = 0; i < bmp.colorBuffer.length; i += 4) {
    // ~ is used to invert colors in binary
    bmp.colorBuffer[i + 0] = ~bmp.colorBuffer[i + 0];
    bmp.colorBuffer[i + 1] = ~bmp.colorBuffer[i + 1];
    bmp.colorBuffer[i + 2] = ~bmp.colorBuffer[i + 2];
    bmp.colorBuffer[i + 3] = ~bmp.colorBuffer[i + 3];
  }
};

module.exports = transformInversion;
