'use strict';

var GulpConfig = (function () {
    function gulpConfig() {
        this.paths = {};
        this.paths.web = { root: "./wwwroot" };
        this.paths.web.app = this.paths.web.root + "/app";
        this.paths.web.npm = this.paths.web.scripts + "/npm";
        this.paths.web.styles = this.paths.web.root + "/styles";

        this.paths.src = {
            npm: "./node_modules",
            app: "./app",
            css: "./Styles"
        };

        this.paths.dest = {
                npm: this.paths.web.npm,
                app: this.paths.web.app,
                css: this.paths.web.styles
            };
    }
    return gulpConfig;
})();

module.exports = GulpConfig;