import { src, dest, series, watch } from 'gulp';
import { deleteAsync } from 'del';
import terser from 'gulp-terser';
import cleanCSS from 'gulp-clean-css';
import babel from 'gulp-babel';
import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass';

const sass = gulpSass(sassCompiler);

const scssWorkPath = 'src/scss/**/*.scss';
const jsWorkPath = 'src/js/**/*.js';
const cssBuildPath = 'build/css';
const jsBuildPath = 'build/js';

const scssTask = () => {
  return src(scssWorkPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest(cssBuildPath));
}

const jsTask = () => {
  return src(jsWorkPath)
    .pipe(babel())
    .pipe(terser())
    .pipe(dest(jsBuildPath));
}

const cleanJs = () => {
  return deleteAsync([jsBuildPath + '/**']);
}

const cleanCss = () => {
  return deleteAsync([cssBuildPath + '/**']);
}

const watcher = () => {
  watch(scssWorkPath, { ignoreInitial: false }, scssTask);
  watch(jsWorkPath, { ignoreInitial: false }, jsTask);
}

export default series(cleanJs, cleanCss, jsTask, scssTask, watcher);
