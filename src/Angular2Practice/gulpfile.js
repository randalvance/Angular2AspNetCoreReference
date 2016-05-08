var gulp = require('gulp');
var del = require('del');
var runSequence = require("run-sequence");

var Config = new (require("./gulpfile.config"))();


gulp.task("clean", function () {
    return del([Config.paths.dest.app + '/**/*', Config.paths.dest.lib + '/**/*', Config.paths.dest.css + "/**/*"]);
});

gulp.task('app', function () {
    gulp.src(Config.paths.src.app + '/**/*', { base: Config.paths.src.app }).pipe(gulp.dest(Config.paths.dest.app));
});

gulp.task('styles', function () {
    gulp.src(Config.paths.src.css + '/**/*', { base: Config.paths.src.css }).pipe(gulp.dest(Config.paths.dest.css));
});

gulp.task('copy-libs', function () {
    gulp.src(Config.paths.src.bower + "/jquery/dist/*.js", { base: Config.paths.src.bower + "/jquery/dist" }).pipe(gulp.dest(Config.paths.dest.lib + "/jquery"));
    gulp.src(Config.paths.src.bower + "/material-design-lite/material*.*", { base: Config.paths.src.bower + "/material-design-lite" }).pipe(gulp.dest(Config.paths.dest.lib + "/material-design-lite"));
    gulp.src(Config.paths.src.bower + "/es6-shim/*.js", { base: Config.paths.src.bower + "/es6-shim" }).pipe(gulp.dest(Config.paths.dest.lib + "/es6-shim"));
    gulp.src(Config.paths.src.bower + "/zone/dist/*.js", { base: Config.paths.src.bower + "/zone/dist" }).pipe(gulp.dest(Config.paths.dest.lib + "/zone"));
});