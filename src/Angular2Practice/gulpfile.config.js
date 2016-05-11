'use strict';

var GulpConfig = (function () {
    function gulpConfig() {
        this.paths = {};
        this.paths.web = { root: "./wwwroot" };

        this.paths.src = {
            npm: "./node_modules"
        };

        this.paths.dest = {
            lib: this.paths.web.root + "/lib"
        };
    }
    return gulpConfig;
})();

module.exports = GulpConfig;