const transformGreyscale = require('./greyscale');
const transformInversion = require('./invert');
const purpleHaze = require('./purpleHaze');
const randomizeColors = require('./randomizeColors');

const transforms = {
  greyscale: transformGreyscale,
  invert: transformInversion,
  purpleHaze,
  randomizeColors,
};

module.exports = transforms;
