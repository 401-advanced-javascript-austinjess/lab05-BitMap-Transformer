const transformGreyscale = require('./greyscale');
const transformInversion = require('./invert');
const something = require('./something');

const transforms = {
  greyscale: transformGreyscale,
  invert: transformInversion,
  something: something,
};

module.exports = transforms;
