const operations = require('./transforms/index');
/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor
 */
function Bitmap(filePath) {
  this.file = filePath;
}

/**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */
Bitmap.prototype.parse = function(buffer) {
  this.buffer = buffer;
  this.type = buffer.toString('utf-8', 0, 2);
  //... and so on
  this.size = buffer.readInt32LE(2);
  this.offset = buffer.readInt32LE(10); // 0x0A

  this.width = buffer.readInt32LE(18); // 0x12
  this.height = buffer.readInt32LE(22); // 0x16
  this.bitsPerPixel = buffer.readInt16LE(0x1c); // probably 8, 16 or 32

  this.colorBuffer = buffer.slice(54, this.offset);
  this.pixelBuffer = buffer.slice(this.offset);
};

/**
 * Transform a bitmap using some set of rules. The operation points to some function, which will operate on a bitmap instance
 * @param operation
 */
Bitmap.prototype.transform = function(operation) {
  // This is really assumptive and unsafe
  console.log(operation);
  operations[operation](this);
  this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};

module.exports = Bitmap;
