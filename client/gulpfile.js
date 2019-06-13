const gulp = require("gulp"),
  watch = require("gulp-watch"),
  postcss = require("gulp-postcss"),
  sass = require("gulp-sass"),
  autoprefixer = require("autoprefixer");

gulp.task("sass", () => {
  console.log("Compiling CSS...");
  return gulp
    .src("./src/assets/styles/App.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest("./src/assets/styles/"));
});

gulp.task("watch:styles", () => {
  watch("./src/assets/styles/**/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("sass", gulp.parallel("watch:styles")));
