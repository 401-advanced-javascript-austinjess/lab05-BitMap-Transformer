const transformGreyscale = require('./greyscale');
const transformInversion = require('./invert');
const randomizeColors = require('./randomizeColors');
const flip = require('./flip');
const playing = require('./playing');

const transforms = {
  greyscale: transformGreyscale,
  invert: transformInversion,
  randomizeColors,
  flip,
  playing, 
};

module.exports = transforms;
