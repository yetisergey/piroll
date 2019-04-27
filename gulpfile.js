var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch("./public/css/*.css").on('change', browserSync.reload);
    gulp.watch("./public/*.html").on('change', browserSync.reload);
}); ``