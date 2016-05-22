var gulp = require("gulp");
var del = require("del");
var fs = require("fs");
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
        nodePackagePaths: ["@angular", "bootstrap/dist", "es6-shim", "jquery", "reflect-metadata", "rxjs", "systemjs/dist", "tether/dist", "zone.js/dist"],
        paths: this.paths
    };
})();

var builder = new Builder("./wwwroot/", "./wwwroot/config.js");

gulp.task("all", function () {
    runSequence("clean", ["lib", "build"]);
});

gulp.task("build", function () {
    builder.bundle("app/main.js", "wwwroot/app/app.js").then(function (output) {
        var productionSystemJSConfig = {};
        productionSystemJSConfig['app/app.js'] = output.modules;

        fs.readFile("./wwwroot/config.js", "utf-8", (err, data) => {
            var output = data + "System.config({ bundles: " + JSON.stringify(productionSystemJSConfig) + " });";
            console.log(output);

            fs.writeFile("./wwwroot/config.prod.js", output, (err) => {
                if (err) throw err;
                console.log("Production Config Saved!");
            });
        });
    });

});

gulp.task("clean", function () {
    return del([Config.paths.dest.lib + "/**/*"]);
});

gulp.task("lib", function () {
    Config.nodePackagePaths.forEach(function (packagePath) {
        gulp.src(Config.paths.src.npm + "/" + packagePath + "/**/*").pipe(gulp.dest(Config.paths.dest.lib + "/" + packagePath));
    });
});