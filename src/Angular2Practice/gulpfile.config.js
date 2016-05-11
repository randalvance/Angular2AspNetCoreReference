'use strict';

var GulpConfig = (function () {
    function gulpConfig() {
        this.paths = {};
        this.paths.web = { root: "./wwwroot" };

        this.paths.src = {
            npm: "./node_modules",
            app: "./app",
            css: "./styles"
        };

        this.paths.dest = {
            app: this.paths.web.root + "/app",
            lib: this.paths.web.root + "/lib",
            css: this.paths.web.root + "/styles"
        };
    }
    return gulpConfig;
})();

module.exports = GulpConfig;