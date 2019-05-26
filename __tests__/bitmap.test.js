'use strict';

const fs = require('fs');
const util = require('util');
const fsReadFile = util.promisify(fs.readFile);

const Bitmap = require('../lib/bitMap.js');

const bmpPath = `${__dirname}/../assets/baldy.bmp`;

const baseBitmap = new Bitmap(bmpPath);

describe('The Bitmap Module', () => {
  it('can parse a file', async () => {
    const buffer = await fsReadFile(bmpPath);
    expect(buffer).toBeDefined();

    let bitmap = new Bitmap(bmpPath);
    bitmap.parse(buffer);

    expect(bitmap.buffer).toBe(buffer);
    expect(bitmap.type).toBe('BM');

    expect(bitmap.size).toBe(15146);
    expect(bitmap.offset).toBe(1146);

    expect(bitmap.width).toBe(110);
    expect(bitmap.height).toBe(125);

    expect(bitmap.bitsPerPixel).toBe(8);

    expect(bitmap.colorBuffer).toBeDefined();
    expect(bitmap.pixelBuffer).toBeDefined();
  });

  it('can invert the image', async () => {
    const buffer = await fsReadFile(bmpPath);

    let bitmap = new Bitmap(bmpPath);
    bitmap.parse(buffer);

    bitmap.transform('invert');
    const arrBuffer = [...buffer];

    expect(arrBuffer[0]).toBe(66);
  });
});
