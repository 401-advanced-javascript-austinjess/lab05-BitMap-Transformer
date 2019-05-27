const fs = require('fs');
const util = require('util');
const fsWriteFile = util.promisify(fs.writeFile);

const flip = async (bmp) => {
  let flippedBuffer;
  let newBuffer;
  console.log('Flipping bitmap', bmp);

  if (!bmp.colorBuffer.length || !bmp.pixelBuffer.length)
    throw 'invalid bitmap!';

  if (bmp.bitsPerPixel !== 24) {
    flippedBuffer = bmp.pixelBuffer.reverse();
    flippedBuffer = [...bmp.headerBuffer, ...bmp.colorBuffer, ...flippedBuffer];
    newBuffer = Buffer.from(flippedBuffer);
  }

  // await fsWriteFile(bmp.newFile, newBuffer);
};

module.exports = flip;
