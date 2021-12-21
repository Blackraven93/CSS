"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("../dist/css"));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch("./scss/**/*.scss", ["sass"]);
};
