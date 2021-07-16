const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
const del = require('del');

function scssTask() {
  cleanCss();

  return src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('build/css'));
}

function jsTask() {
  cleanJs();

  return src('src/js/*.js')
    .pipe(uglify())
    .pipe(dest('build/js'));
}

function watcher() {
  watch('src/scss/*.scss', scssTask);
  watch('src/js/*.js', jsTask);
};

function cleanJs() {
  del.sync('build/js/**');
};

function cleanCss() {
  del.sync('build/css/**');
};

exports.default = series(jsTask, scssTask, watcher);