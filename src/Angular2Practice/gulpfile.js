var gulp = require('gulp');
var del = require('del');
var runSequence = require("run-sequence");
var vinylPaths = require('vinyl-paths');

var Config = new (require("./gulpfile.config"))();

gulp.task("clean", function () {
    return gulp.src([Config.paths.web.app, Config.paths.web.styles, Config.paths.web.root + '/tsconfig.json']).pipe(vinylPaths(del));
});


gulp.task('scripts', function () {

    gulp.src(Config.paths.src.app + '/**/*.ts', { base: Config.paths.src.app })
             .pipe(gulp.dest(Config.paths.dest.app));
});