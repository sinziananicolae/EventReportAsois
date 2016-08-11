(function () {
    'use strict';

    angular.module('directives', [])
        .directive("addIssueModal", [
            "API", function(API) {
                return {
                    restrict: "E",
                    scope: false,
                    templateUrl: API.root + API.modules + "/Home/Views/add-issue-modal.html"
                }
            }
        ]);
}());