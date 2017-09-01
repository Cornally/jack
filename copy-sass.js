// While developing Jack, copy your SCSS files to the docs project (automatically recompiling the docs).
var cpx = require('cpx');

console.log('Watching for changes...');

cpx.watch('./src/**/*.scss', '../gh-pages/_sass/jack', {}, (e) => {
    console.log("Copied!");
});

cpx.watch('./src/**/*.svg', '../gh-pages/_includes', {}, (e) => {
    console.log("Copied!");
});