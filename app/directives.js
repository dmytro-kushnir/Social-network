(function () {
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

    // Routing START  

    var app2 = angular.module("socialNetwork").config(['$stateProvider', '$urlRouterProvider', 
        function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("mainPage", {
                url: '/mainPage',
                templateUrl: "app/templates/mainPage.html",
                title: 'Доктор Стрендж'
            })
            .state("friends", {
                url: '/friends',
                templateUrl: "app/templates/friends.html",
                title: 'Мої друзі',
                controller: "RouterCtrl"
            })
            .state("gallery", {
                url: '/gallery',
                templateUrl: "app/templates/gallery.html",
                title: 'Галерея'
                // css: ['../src/css/gallery.css']
            })
            .state("chat", {
                url: '/chat',
                templateUrl: "/app/templates/chat.html",
                title: "Мої повідомлення"
            })
            .state("/controller-avtorize", {
                url: 'Hi there',
                templateUrl: "avtorizefrond2.html"
            })
            .state("chatUser", {
                url: '/chatUser',
                templateUrl: "app/templates/chatUser.html",
                title: "Дженніфер Лоуренс"
            });
        // catch all route
        // send users to the home page
        $urlRouterProvider.otherwise('/mainPage');
    }]);


    // Title routing
    app2.run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
            console.log($rootScope.title);
        });
    }]);


})();