const purpleHaze = (bmp) => {
  console.log('Transforming bitmap into something!', bmp);

  if (!bmp.pixelBuffer.length) throw `invalid bitmap`;

  if (bmp.bitsPerPixel !== 24) {
    for (let i = 0; i < bmp.colorBuffer.length; i += 4) {
      bmp.colorBuffer[i + 0] = bmp.colorBuffer[i + 0] * 0.89;
      bmp.colorBuffer[i + 1] = bmp.colorBuffer[i + 1] * 0.41;
      bmp.colorBuffer[i + 2] = bmp.colorBuffer[i + 2] * 0.7;
      bmp.colorBuffer[i + 3] = bmp.colorBuffer[i + 3] * 1;
    }
  }
};

module.exports = purpleHaze;
