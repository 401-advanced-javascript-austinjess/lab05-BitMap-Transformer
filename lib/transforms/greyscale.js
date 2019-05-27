const transformGreyscale = (bmp) => {
  console.log('Transforming bitmap into greyscale', bmp);

  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it

  // check that we have pixels, pizelBuffer, and type

  if (!bmp.colorBuffer.length) throw 'invalid bitmap!';

  if (bmp.bitsPerPixel !== 24) {
    for (let i = 0; i < bmp.colorBuffer.length; i += 4) {
      bmp.colorBuffer[i + 0] = bmp.colorBuffer[i + 0] * 0.3;
      bmp.colorBuffer[i + 1] = bmp.colorBuffer[i + 1] * 0.3;
      bmp.colorBuffer[i + 2] = bmp.colorBuffer[i + 2] * 0.3;
      bmp.colorBuffer[i + 3] = bmp.colorBuffer[i + 3] * 0.3;
    }
  }
};

module.exports = transformGreyscale;
