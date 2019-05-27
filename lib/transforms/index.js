const transformGreyscale = require('./greyscale');
const transformInversion = require('./invert');
const purpleHaze = require('./purpleHaze');
const randomizeColors = require('./randomizeColors');
const flip = require('./flip');

const transforms = {
  greyscale: transformGreyscale,
  invert: transformInversion,
  purpleHaze,
  randomizeColors,
  flip,
};

module.exports = transforms;
