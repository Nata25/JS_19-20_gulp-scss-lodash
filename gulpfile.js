var gulp = require('gulp'),
    scss = require('gulp-scss'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    // gls = require('gulp-live-server'),
    browserSync = require('browser-sync').create();

// gulp.task('serve', function() {
//
//     //serve at custom port
//     var server = gls.static('app', 35729);
//     server.start();
//
//     gulp.watch(['src/styles/*.scss'], ['scss']);
//
//     //use gulp.watch to trigger server actions(notify, start or stop)
//     gulp.watch(['app/css/*.css', 'app/*.html'], function (file) {
//         server.notify.apply(server, [file]);
//     });
// });

gulp.task("serve", ['scss'], function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch("src/styles/*.scss", ['scss']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task("scss", function() {
    gulp.src("src/styles/main.scss")
    .pipe(scss())
    .pipe(cleanCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task("default", ["serve"]);

// gulp.task("watch", function() {
//     gulp.watch("src/styles/*.scss", ['scss']);
// });
//

// gulp.task("mincss", function() {
//     gulp.src("app/css/main.css")
//     .pipe(rename("main.min.css"))
//     .pipe(gulp.dest("app/css"));
// });

// gulp.task("watch", ['server', 'scss'], function() {
//     // gulp.watch(['src/styles/*.scss'], ['scss']);
//     gulp.watch('src/styles/*.scss',  gulp.parallel('scss'));
// });
