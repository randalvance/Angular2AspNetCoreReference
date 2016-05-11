var gulp = require('gulp');
var del = require('del');
var runSequence = require("run-sequence");

var Config = new (require("./gulpfile.config"))();

gulp.task("build", function () {
    runSequence("clean", ["lib", "styles"]);
});

gulp.task("clean", function () {
    return del([Config.paths.dest.css + "/**/*", Config.paths.dest.lib + "/**/*"]);
});

// Stuffs I don't want to reference via JSPM or Bower
gulp.task('lib', function () {
    gulp.src(Config.paths.src.npm + "/bootstrap/dist/**/*", { base: Config.paths.src.npm + "/bootstrap/dist" }).pipe(gulp.dest(Config.paths.dest.lib + "/bootstrap"));
    gulp.src(Config.paths.src.npm + "/jquery/dist/**/*", { base: Config.paths.src.npm + "/jquery/dist" }).pipe(gulp.dest(Config.paths.dest.lib + "/jquery"));
    gulp.src(Config.paths.src.npm + "/tether/dist/**/*", { base: Config.paths.src.npm + "/tether/dist" }).pipe(gulp.dest(Config.paths.dest.lib + "/tether"));
});

gulp.task('styles', function () {
    gulp.src(Config.paths.src.css + '/**/*', { base: Config.paths.src.css }).pipe(gulp.dest(Config.paths.dest.css));
});