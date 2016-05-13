var gulp = require("gulp");
var del = require("del");
var runSequence = require("run-sequence");
var Builder = new require("systemjs-builder");

var Config = (function () {
    this.paths = {};
    this.paths.web = { root: "./wwwroot" };

    this.paths.src = {
        npm: "./node_modules"
    };

    this.paths.dest = {
        lib: this.paths.web.root + "/lib"
    };

    return {
        nodePackagePaths: ["@angular", "bootstrap/dist", "es6-shim", "jquery", "reflect-metadata", "rxjs", "tether/dist"],
        paths: this.paths
    };
})();

var builder = new Builder("./wwwroot/", "./wwwroot/config.js");

gulp.task("all", function () {
    runSequence("clean", ["lib", "build"]);
});

gulp.task("build", function () {
    builder.bundle("app/main.js", "wwwroot/app/app.js");
});

gulp.task("clean", function () {
    return del([Config.paths.dest.lib + "/**/*"]);
});

// Stuffs I don"t want to reference via JSPM or Bower
gulp.task("lib", function () {
    Config.nodePackagePaths.forEach(function (packagePath) {
        gulp.src(Config.paths.src.npm + "/" + packagePath + "/**/*").pipe(gulp.dest(Config.paths.dest.lib + "/" + packagePath));
    });
});