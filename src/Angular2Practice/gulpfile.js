var gulp = require('gulp');
var del = require('del');
var runSequence = require("run-sequence");

var Config = new (require("./gulpfile.config"))();

gulp.task("build", function () {
    runSequence("clean", ["app", "styles"]);
});

gulp.task("clean", function () {
    return del([Config.paths.dest.app + '/**/*', Config.paths.dest.css + "/**/*"]);
});

gulp.task('app', function () {
    gulp.src(Config.paths.src.app + '/**/*', { base: Config.paths.src.app }).pipe(gulp.dest(Config.paths.dest.app));
});

gulp.task('styles', function () {
    gulp.src(Config.paths.src.css + '/**/*', { base: Config.paths.src.css }).pipe(gulp.dest(Config.paths.dest.css));
});