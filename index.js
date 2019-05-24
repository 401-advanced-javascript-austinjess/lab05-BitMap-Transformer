'use strict';

const fs = require('fs');
const bitmap = require('./lib/bitMap');
const transform = require('./lib/transform');

// TODO: 1. Gather user input (infile and transform)
// TODO: 2. Read the input bitmap file using the fs module
// TODO: 3. Parse the bitmap's buffer into object represeting a bitmap (using a constructor)
// TODO: 4. Using metadata from the parsed bitmap object run a transform on the buffer directly (mutate the color or raster data)
// TODO: 5. Write the mutated buffer to the output file path

const [file, operation] = process.argv.slice(2);
console.log(file);

transform.transformWithCallbacks(file);
