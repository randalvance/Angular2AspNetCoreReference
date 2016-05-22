(function (global) {
    var map = {
        "app": "app",
        "rxjs": "lib/rxjs",
        "@angular": "lib/@angular"
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
System.config({ bundles: {"app/app.js":["app/main.js","app/app.component.js","app/product/index.js","app/product/product-list.component.js","app/product/product.component.js","app/product/product.service.js","lib/rxjs/add/operator/map.js","lib/rxjs/operator/map.js","lib/rxjs/Subscriber.js","lib/rxjs/Observer.js","lib/rxjs/symbol/rxSubscriber.js","lib/rxjs/util/root.js","lib/rxjs/Subscription.js","lib/rxjs/util/UnsubscriptionError.js","lib/rxjs/util/errorObject.js","lib/rxjs/util/tryCatch.js","lib/rxjs/util/isFunction.js","lib/rxjs/util/isObject.js","lib/rxjs/util/isArray.js","lib/rxjs/Observable.js","lib/rxjs/util/toSubscriber.js","lib/rxjs/symbol/observable.js","app/product/product.js","app/customer/index.js","app/customer/customer-list.component.js","app/customer/customer.service.js","lib/rxjs/add/operator/do.js","lib/rxjs/operator/do.js","app/customer/customer.component.js","app/customer/customer.js","app/welcome.component.js"]} });