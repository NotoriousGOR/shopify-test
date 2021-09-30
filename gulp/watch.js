// grab our gulp packages
const gulp = require("gulp");
const gutil = require("gulp-util");
const combine = require("gulp-scss-combine");
const concat = require("gulp-concat");
const watch = require("gulp-watch");
const babel = require("gulp-babel");
const changed = require("gulp-changed");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

const handleError = (error) => {
  console.log(error.toString());
  this.emit("end");
};

const DEST = "assets/";

gulp.task("combine_css", (done) => {
  gulp
    .src([
      //Vendors
      
    
      //Custom
      "assets/custom.scss",
    ])
    .pipe(combine())
    .pipe(concat("theme.scss.liquid"))
    .on("error", handleError)
    .pipe(gulp.dest(DEST));
  done();
});

gulp.task(
  "watch",
  gulp.series(
    gulp.parallel("combine_css"),
    (done) => {
      gulp.watch("assets/styles/**/*.scss", gulp.parallel("combine_css"));
      
      done();
    }
  )
);
