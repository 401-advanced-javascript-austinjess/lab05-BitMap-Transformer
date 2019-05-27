const something = (bmp) => {
  console.log('Transforming bitmap into something!', bmp);

  if (!bmp.pixelBuffer.length) throw `invalid bitmap`;

  // let bufferArr = [];
  // const pixelWidth = Math.ceil(bmp.width / 4) * 4;

  // for (let i = 0; i < bmp.pixelBuffer.length; i += pixelWidth) {

  // }
};

module.exports = something;
