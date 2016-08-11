(function () {
    'use strict';

    // Static
    angular.module('config', [])
        // API Urls
        .constant("API", {
            url: "http://eventreportasois.azurewebsites.net/api",
            root: "",
            modules: "js/App/Applications/User/Modules"
        })
        // Logger modules
        .constant("LoggerModules", {
            HomeController: "HomeController"
        });
}());