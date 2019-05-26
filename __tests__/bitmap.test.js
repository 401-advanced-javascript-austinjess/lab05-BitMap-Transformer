'use strict';

const fs = require('fs');
const util = require('util');
const fsReadFile = util.promisify(fs.readFile);

const Bitmap = require('../lib/bitMap.js');

const bmpPath = `${__dirname}/../assets/baldy.bmp`;

describe('The Bitmap Module', () => {
  it('can parse a file', async () => {
    const buffer = await fsReadFile(bmpPath);

    expect(buffer).toBeDefined();
  });
});
