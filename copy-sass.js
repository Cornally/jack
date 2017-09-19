// While developing Jack, copy your SCSS files to the docs project (automatically recompiling the docs).
const cpx = require('cpx');

console.log('Watching for changes...');

const sassWatch = cpx.watch('./src/**/*.scss', '../gh-pages/_sass/jack', {}, (e) => {
    console.log("Copied!");
});
sassWatch.on('copy', (e) => {
    console.log(`Copied ${e.srcPath}`);
});

const svgWatch = cpx.watch('./src/**/*.svg', '../gh-pages/_includes', {});
svgWatch.on('copy', (e) => {
    console.log(`Copied ${e.srcPath}`);
});