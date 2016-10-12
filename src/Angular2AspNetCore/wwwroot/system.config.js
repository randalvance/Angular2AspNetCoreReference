(function (global) {
    var map = {
        "app": "app",
        "rxjs": "lib/rxjs",
        "@angular": "lib/@angular",
        "@angular/core": "lib/@angular/core/bundles/core.umd.js",
        "@angular/common": "lib/@angular/common/bundles/common.umd.js",
        "@angular/compiler": "lib/@angular/compiler/bundles/compiler.umd.js",
        "@angular/platform-browser": "lib/@angular/platform-browser/bundles/platform-browser.umd.js",
        "@angular/platform-browser-dynamic": "lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
        "@angular/http": "lib/@angular/http/bundles/http.umd.js",
        "@angular/router": "lib/@angular/router/bundles/router.umd.js",
        "@angular/forms": "lib/@angular/forms/bundles/forms.umd.js"
    };

    var packages = {
        "app": { main: "main.js", defaultExtension: "js" },
    };

    var meta = {

    };

    var packageNames = [
        "@angular/common",
        "@angular/compiler",
        "@angular/core",
        "@angular/http",
        "@angular/forms",
        "@angular/platform-browser",
        "@angular/platform-browser-dynamic",
        "@angular/router"
    ];

    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: "index.js", defaultExtension: "js" };
        meta[pkgName + "/index.js"] = { build: false };
    });

    System.config({
        baseURL: "/",
        defaultJSExtensions: true,
        packages: packages,
        map: map,
        meta: meta
    });
})(this);
