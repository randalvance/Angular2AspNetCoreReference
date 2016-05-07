'use strict';

var GulpConfig = (function () {
    function gulpConfig() {
        this.paths = {};
        this.paths.web = { root: "./wwwroot" };
        this.paths.web.scripts = this.paths.web.root + "/scripts";
        this.paths.web.npm = this.paths.web.scripts + "/npm";
        this.paths.web.styles = this.paths.web.root + "/styles";

        this.paths.src = { npm: "node_modules", scripts: "./Scripts/**/*.ts", css: "./Styles/**/*.*" };
        this.paths.dest = { npm: this.paths.web.npm, scripts: this.paths.web.scripts, css: this.paths.web.styles };
    }
    return gulpConfig;
})();

module.exports = GulpConfig;