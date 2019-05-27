const fs = require('fs');
const Bitmap = require('./bitMap');

/**
 * Sample Transformer (greyscale)
 * Would be called by Bitmap.transform('greyscale')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */

function transformWithCallbacks(file, operation) {
  let bitmap = new Bitmap(file);
  fs.readFile(file, (err, buffer) => {
    if (err) {
      throw err;
    }

    bitmap.parse(buffer);
    bitmap.transform(operation);

    fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
      if (err) {
        throw err;
      }
      console.log(`Bitmap Transformed: ${bitmap.newFile}`);
    });
  });
}

module.exports = transformWithCallbacks;
