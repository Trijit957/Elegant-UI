const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
   return src('sass/elegant-ui.scss')
          .pipe(sass())
          .pipe(dest('css'));
}

function watchSass() {
  watch(['sass/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchSass);