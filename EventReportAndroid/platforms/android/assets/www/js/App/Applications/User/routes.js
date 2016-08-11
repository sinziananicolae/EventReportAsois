(function () {
    "use strict";

    angular.module("app.admin", ["services", "config"])
        .config(["$routeProvider", "$locationProvider", "API", "$httpProvider", function ($routeProvider, $locationProvider, API, $httpProvider) {
            var homeView = API.root + API.modules + "/Home/Views";

            $routeProvider.
                when("/home", { templateUrl: homeView + "/home.html", controller: "HomeController" }).
                otherwise({ redirectTo: "/home" });

            $httpProvider.interceptors.push("myHttpInterceptor");
        }]);
}());
