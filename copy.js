var copy = require('copy');
copy('src/**/*.*', 'docs-src/diane-theme/_sass/jack', function(err, files) {
  if (err) throw err;
  // `files` is an array of the files that were copied 
});