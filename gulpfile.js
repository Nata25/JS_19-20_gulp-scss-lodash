var gulp = require('gulp'),
    scss = require('gulp-scss'),
    gls = require('gulp-live-server');

gulp.task('serve', function() {

    //serve at custom port
    var server = gls.static('app', 8080);
    server.start();

    gulp.watch(['src/styles/*.scss'], ['scss']);

    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch(['app/css/*.css', 'app/*.html'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task("scss", function() {
        gulp.src("src/styles/*.scss")
        .pipe(scss())
        .pipe(gulp.dest("app/css"));
});

gulp.task("watch", function() {
    // gulp.watch(['src/styles/*.scss'], ['scss']);
});
