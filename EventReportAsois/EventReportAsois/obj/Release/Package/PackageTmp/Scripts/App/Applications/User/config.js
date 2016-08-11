(function () {
    'use strict';

    // Static
    angular.module('config', [])
        // API Urls
        .constant("API", {
            url: "/api",
            root: "",
            modules: "/Scripts/App/Applications/User/Modules"
        })
        // Logger modules
        .constant("LoggerModules", {
            HomeController: "HomeController"
        });
}());