// Less configuration
var gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-clean-css'),
    prefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    rigger = require('gulp-rigger'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps');


var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: '*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js', //В стилях и скриптах нам понадобятся только main файлы
        style: 'src/css/**/style.css',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        less: 'src/css/**/lessStyle.less'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.css',
        img: 'src/img/**/*.*',
        less: 'src/css/**/*.less'
    },
    clean: './build'
};

// var config = {
//     server: {
//         baseDir: "./build"
//     },
//     tunnel: true,
//     host: 'localhost',
//     port: 9000,
//     logPrefix: "Frontend_Devil"
// };

/////////////git rm --cached FILENAME
gulp.task('less:build', function () {
    gulp.src(path.src.less) // Gets all files ending with .scss in src/css and children dirs
        .pipe(less())
        .pipe(gulp.dest(function (f) {
            return f.base;
        }))
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //И в build
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //И в build
});

gulp.task('watch', function () {

    watch([path.watch.less], function (event, cb) {
        gulp.start('less:build');
    });
    watch([path.watch.style], function (event, cb) {
        gulp.start('style:build');
    });
});

gulp.task('build', [
    'style:build',
    'less:build'
]);

gulp.task('default', ['build', 'watch']);