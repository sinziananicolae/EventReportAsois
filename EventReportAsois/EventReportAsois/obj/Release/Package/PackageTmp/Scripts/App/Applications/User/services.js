(function () {
    "use strict";

    var serviceMetods = {
        get: { method: "GET" },
        create: { method: "POST" },
        update: { method: "PUT" },
        patch: { method: "PATCH" },
        remove: { method: "DELETE" }
    };

    angular.module("services", ["ngResource"])
        .factory("CategoryService", [
            "$resource", "API", function($resource, API) {
                return $resource(API.url + "/category", {}, serviceMetods);
            }
        ])

        .factory("SeverityService", [
                "$resource", "API", function ($resource, API) {
                    return $resource(API.url + "/severity", {}, serviceMetods);
                }
        ])

        .factory("IssueService", [
                    "$resource", "API", function ($resource, API) {
                        return $resource(API.url + "/issue", {}, serviceMetods);
                    }
        ]);;

}());
