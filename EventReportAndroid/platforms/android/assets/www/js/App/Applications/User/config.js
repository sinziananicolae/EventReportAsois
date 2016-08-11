(function () {
    'use strict';

    // Static
    angular.module('config', [])
        // API Urls
        .constant("API", {
            url: "http://localhost:39313/api",
            root: "",
            modules: "js/App/Applications/User/Modules"
        })
        // Logger modules
        .constant("LoggerModules", {
            HomeController: "HomeController"
        });
}());