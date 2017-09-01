const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const through = require('through2');
 
function logFileHelpers() {
    return through.obj((file, enc, cb) => {
        console.log(file.babel.usedHelpers);
        cb(null, file);
    });
}
 
gulp.task('default', () =>
    gulp.src(['js/**/*.js', '!js/dist/core.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(logFileHelpers())
        .pipe(concat('core.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('js/dist'))
)