var fs           = require('fs');
var autoprefixer = require('autoprefixer');
var postcss      = require('postcss');

fs.readFile('dist/min/jack.css', (err, css) => {
    postcss([autoprefixer])
    .process(css, { from: 'dist/min/jack.css', to: 'dist/jack.min.css' })
    .then(result => {
        fs.writeFile('dist/jack.min.css', result.css);
        if ( result.map ) fs.writeFile('dist/jack.min.css.map', result.map);
    });
});