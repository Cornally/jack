var copy = require('copy');
copy('src/**/*.*', 'docs/diane-theme/_sass', function(err, files) {
  if (err) throw err;
  // `files` is an array of the files that were copied 
});