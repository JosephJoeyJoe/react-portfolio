const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['images/*'], {
  destination: 'compressed_images',
  plugins: [imageminWebp({quality: 50})]
}).then(() => {
  console.log('Done!');
});