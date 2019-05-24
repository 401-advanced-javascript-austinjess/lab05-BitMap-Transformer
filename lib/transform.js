const fs = require('fs');
const Bitmap = require('../lib/bitMap');

/**
 * Sample Transformer (greyscale)
 * Would be called by Bitmap.transform('greyscale')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */
const transformGreyscale = (bmp) => {
  console.log('Transforming bitmap into greyscale', bmp);

  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it

  //TODO: alter bmp to make the image greyscale ...
};

const doTheInversion = (bmp) => {
  bmp = {};
};

function transformWithCallbacks(file) {
  console.log(typeof file);
  console.log(Bitmap);
  let bitmap = new Bitmap(file);

  fs.readFile(file, (err, buffer) => {
    if (err) {
      throw err;
    }

    bitmap.parse(buffer);
    console.log(file);
    bitmap.transform(bitmap.operation);

    // Note that this has to be nested!
    // Also, it uses the bitmap's instance properties for the name and the new buffer
    fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
      if (err) {
        throw err;
      }
      console.log(`Bitmap Transformed: ${bitmap.newFile}`);
    });
  });
}

const transforms = {
  greyscale: transformGreyscale,
  invert: doTheInversion,
};

module.exports = { transformWithCallbacks, transforms };
