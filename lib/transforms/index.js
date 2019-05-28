const transformGreyscale = require('./greyscale');
const transformInversion = require('./invert');
const randomizeColors = require('./randomizeColors');
const flip = require('./flip');

const transforms = {
  greyscale: transformGreyscale,
  invert: transformInversion,
  randomizeColors,
  flip,
};

module.exports = transforms;
