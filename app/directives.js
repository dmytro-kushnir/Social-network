(function(){


    var app = angular.module("social-directives", []);

    app.directive("socialModal", function () {
        return {
            restrict: "AE",
            templateUrl: "/app/templates/modal.html"
        };
    });
    app.directive("socialHeader", function () {
        return {
            restrict: "AE",
            templateUrl: "/app/templates/header.html"
        };
    });
    app.directive("socialSideMenu", function () {
        return {
            restrict: "AE",
            templateUrl: "/app/templates/sideMenu.html"
        };
    });
    app.directive("socialRouter", function () {
        return {
            restrict: "AE",
            templateUrl: "/app/templates/router.html"
        }
    });
    // Collapsing directive for mobile
    app.directive('navCollapse', function () {
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                var visible = false;

                element.on('show.bs.collapse', function () {
                    visible = true;
                });

                element.on("hide.bs.collapse", function () {
                    visible = false;
                });

                element.on('click', function (event) {
                    if (visible && 'auto' == element.css('overflow-y')) {
                        element.collapse('hide');
                    }
                });
            }
        };
    });

})();

  