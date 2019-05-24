const transformGreyscale = require('./greyscale');
const transformInversion = require('./invert');

const transforms = {
  greyscale: transformGreyscale,
  invert: transformInversion,
};

module.exports = transforms;
