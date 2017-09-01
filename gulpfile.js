const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const through = require('through2');
 
function logFileHelpers() {
    return through.obj((file, enc, cb) => {
        console.log(file.babel.usedHelpers);
        cb(null, file);
    });
}
 
gulp.task('default', () =>
    gulp.src('js/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(logFileHelpers())
        .pipe(concat('core.js'))
        .pipe(gulp.dest('js/dist'))
)