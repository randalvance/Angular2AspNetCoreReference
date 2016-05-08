var gulp = require('gulp');
var del = require('del');
var runSequence = require("run-sequence");

var Config = new (require("./gulpfile.config"))();


gulp.task("clean", function () {
    return del([Config.paths.dest.app + '/**/*', Config.paths.dest.lib + '/**/*']);
});

gulp.task('app', function () {

    gulp.src(Config.paths.src.app + '/**/*.*', { base: Config.paths.src.app })
             .pipe(gulp.dest(Config.paths.dest.app));
});

gulp.task('copy-libs', function () {
    gulp.src(Config.paths.src.bower + "/jquery/dist/*.js", { base: Config.paths.src.bower + "/jquery/dist" }).pipe(gulp.dest(Config.paths.dest.lib + "/jquery"));
    gulp.src(Config.paths.src.bower + "/bootstrap/dist/**/*.*", { base: Config.paths.src.bower + "/bootstrap/dist" }).pipe(gulp.dest(Config.paths.dest.lib + "/bootstrap"));
    gulp.src(Config.paths.src.bower + "/tether/dist/**/*.*", { base: Config.paths.src.bower + "/tether/dist" }).pipe(gulp.dest(Config.paths.dest.lib + "/tether"));
    gulp.src(Config.paths.src.bower + "/es6-shim/*.js", { base: Config.paths.src.bower + "/es6-shim" }).pipe(gulp.dest(Config.paths.dest.lib + "/es6-shim"));
    gulp.src(Config.paths.src.bower + "/zone/dist/*.js", { base: Config.paths.src.bower + "/zone/dist" }).pipe(gulp.dest(Config.paths.dest.lib + "/zone"));
});