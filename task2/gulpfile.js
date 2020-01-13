var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");

gulp.task("sass", function () {
    return gulp
        .src("styles/scss/styles.scss")
        .pipe(sass())
        .pipe(gulp.dest("styles/css"));
});

gulp.task("browser-sync", function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    browserSync.watch("./**/*.*").on("change", browserSync.reload);
});

gulp.task("watch", function () {
    gulp.watch("styles/scss/styles.scss", gulp.parallel("sass"));
});

gulp.task("dev", gulp.series("sass", gulp.parallel("watch", "browser-sync")));
