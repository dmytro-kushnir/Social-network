// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('src/css/**/*.less') // Gets all files ending with .scss in src/css and children dirs
        .pipe(less())
         .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['less'], function() {
    gulp.watch('src/css/**/*.less', ['less']);
})