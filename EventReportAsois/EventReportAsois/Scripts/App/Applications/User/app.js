﻿(function () {
    "use strict";

    angular.module("app", [
            "ngRoute",
            "ngSanitize",
            "ngResource",
            "ngAnimate",
            //"services.notifications",
            "services.httpRequestTracker",
            "ui.bootstrap",
            "app.admin",
            "directivesTheme",
            "directives",
            "uiGmapgoogle-maps"
        ])
        .config([
            "$routeProvider", "$locationProvider", "$httpProvider", function($routeProvider, $locationProvider, $httpProvider) {
                $httpProvider.interceptors.push("myHttpInterceptor");
            }
        ]).config(function (uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                key: "AIzaSyAMQFsBM2fWL0QHhDvkU9oIk1GC2LfWcww",
                v: "3.20", //defaults to latest 3.X anyhow
                libraries: "places"
            });
        }).run(function () {
                Logger.useDefaults();

                function loggerHandler(messages, context) {
                    var params = [];
                    params.push("[" + context.name + "]#");
                    _.each(messages, function(log) {
                        params.push(log);
                    });

                    switch (context.level.name) {
                    case "DEBUG":
                        console.debug.apply(console, params);
                        break;
                    case "INFO":
                        console.info.apply(console, params);
                        break;
                    case "WARN":
                        console.warn.apply(console, params);
                        break;
                    case "ERROR":
                        console.error.apply(console, params);
                        break;
                    }
                }

                Logger.setHandler(loggerHandler);
                Logger.setLevel(Logger.INFO);

            }
        ).factory("myHttpInterceptor", [
            "$q", "$rootScope", "$location", function($q, $rootScope, $location) {
                $rootScope.pendingRequests = 0;
                return {
                    'request': function(config) {
                        $rootScope.pendingRequests++;
                        return config || $q.when(config);
                    },

                    'requestError': function(rejection) {
                        $rootScope.pendingRequests--;
                        return $q.reject(rejection);
                    },

                    'response': function(response) {
                        $rootScope.pendingRequests--;
                        return response || $q.when(response);
                    },

                    'responseError': function(rejection) {
                        $rootScope.pendingRequests--;
                        return $q.reject(rejection);
                    }
                };
            }
        ]);
})();