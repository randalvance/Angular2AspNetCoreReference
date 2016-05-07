var gulp = require('gulp');
var del = require('del');
var runSequence = require("run-sequence");
var vinylPaths = require('vinyl-paths');

var Config = new (require("./gulpfile.config"))();

gulp.task("clean", function () {
    return gulp.src([Config.paths.web.scripts, Config.paths.web.styles]).pipe(vinylPaths(del));
});

gulp.task("copy-deps:systemjs", function () {
    return gulp.src(Config.paths.src.npm + '/systemjs/dist/**/*.*', { base: Config.paths.src.npm + '/systemjs/dist/' })
         .pipe(gulp.dest(Config.paths.dest.npm + '/systemjs/'));
});

gulp.task("copy-deps:angular", function () {
    return gulp.src(Config.paths.src.npm + '/@angular/**/*.js', { base: Config.paths.src.npm + '/@angular/' })
         .pipe(gulp.dest(Config.paths.dest.npm + '/@angular/'));
});

gulp.task("copy-deps:es6-shim", function () {
    return gulp.src(Config.paths.src.npm + '/es6-shim/es6-sh*', { base: Config.paths.src.npm + '/es6-shim/' })
         .pipe(gulp.dest(Config.paths.dest.npm + '/es6-shim/'));
});

gulp.task("copy-deps:reflect-metadata", function () {
    return gulp.src(Config.paths.src.npm + '/reflect-metadata/**/*.*', { base: Config.paths.src.npm + '/reflect-metadata/' })
         .pipe(gulp.dest(Config.paths.dest.npm + '/reflect-metadata/'));
});

gulp.task("copy-deps:rxjs", function () {
    return gulp.src(Config.paths.src.npm + '/rxjs/**/*.*', { base: Config.paths.src.npm + '/rxjs/' })
         .pipe(gulp.dest(Config.paths.dest.npm + '/rxjs/'));
});

gulp.task("copy-deps:zonejs", function () {
    return gulp.src(Config.paths.src.npm + '/zone.js/dist/*.js', { base: Config.paths.src.npm + '/zonejs/' })
         .pipe(gulp.dest(Config.paths.dest.npm + '/zonejs/'));
});

gulp.task("copy-deps", function () {
    runSequence(["copy-deps:rxjs", 'copy-deps:angular', 'copy-deps:systemjs', 'copy-deps:es6-shim', 'copy-deps:zonejs', 'copy-deps:reflect-metadata']);
});

gulp.task('scripts', function () {
});