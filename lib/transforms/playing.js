const playing = (bmp) => {
  console.log('Transforming bitmap into im not sure what', bmp);

  if (!bmp.colorBuffer.length) throw 'invalid bitmap!';

  if (bmp.bitsPerPixel !== 24) {
    for (let i = 0; i < bmp.colorBuffer.length; i += 4) {
      bmp.colorBuffer[i + 0] = bmp.colorBuffer[i + 0] * 0.1;
      bmp.colorBuffer[i + 1] = bmp.colorBuffer[i + 1] * 0.1;
      bmp.colorBuffer[i + 2] = bmp.colorBuffer[i + 2] * 0.1;
      bmp.colorBuffer[i + 3] = bmp.colorBuffer[i + 3] * 0.1;
    }
  }
};

module.exports = playing;
