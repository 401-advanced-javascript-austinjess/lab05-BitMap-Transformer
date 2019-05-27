const randomizeColors = (bmp) => {
  console.log('Transforming bitmap into something!', bmp);

  if (!bmp.pixelBuffer.length) throw `invalid bitmap`;

  if (bmp.bitsPerPixel !== 24) {
    for (let i = 0; i < bmp.colorBuffer.length; i += 4) {
      bmp.colorBuffer[i + 0] = bmp.colorBuffer[i + 0] * Math.random();
      bmp.colorBuffer[i + 1] = bmp.colorBuffer[i + 1] * Math.random();
      bmp.colorBuffer[i + 2] = bmp.colorBuffer[i + 2] * Math.random();
      bmp.colorBuffer[i + 3] = bmp.colorBuffer[i + 3];
    }
  }
};

module.exports = randomizeColors;
