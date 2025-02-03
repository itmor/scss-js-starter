import { src, dest, series, watch } from 'gulp';
import { deleteSync }  from "del";
import terser from 'gulp-terser';
import cleanCSS from 'gulp-clean-css';
import babel from 'gulp-babel';
import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass';

const sass = gulpSass(sassCompiler);  


const scssWorkPath = 'src/scss/*.scss';
const jsWorkPath = 'src/js/*.js';
const cssBuildPath = 'build/css';
const jsBuildPath = 'build/js'

const scssTask = () => {
  cleanCss();

  return src(scssWorkPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest(cssBuildPath));
}

const jsTask = () => {
  cleanJs();

  return src(jsWorkPath)
    .pipe(babel())
    .pipe(terser())
    .pipe(dest('build/js'));
}

const watcher = () => {
  watch(scssWorkPath, scssTask);
  watch(jsWorkPath, jsTask);
}

const cleanJs = () => {
  deleteSync(jsBuildPath + '/**');
}

const cleanCss = () => {
  deleteSync(cssBuildPath + '/**');
}

export default series(jsTask, scssTask, watcher);
