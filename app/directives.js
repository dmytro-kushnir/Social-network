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
    app.directive("autorization", function () {
        return {
            restrict: "AE",
            templateUrl: "/app/templates/autorize.html"
        }
    });
    app.directive("mainContainer", function () {
        return {
            restrict: "AE",
            templateUrl: "/app/templates/mainContainer.html"
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
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Доктор Стрендж";
                            }],
                        }
                    })
                    .state("friends", {
                        url: '/friends',
                        templateUrl: "app/templates/friends.html",
                        controller: "RouterCtrl",
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Мої друзі";
                            }],
                        }
                    })
                    .state("gallery", {
                        url: '/gallery',
                        templateUrl: "app/templates/gallery.html",
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Галерея";
                            }],
                        }
                        // css: ['../src/css/gallery.css']
                    })
                    .state("chat", {
                        url: '/chat',
                        templateUrl: "/app/templates/chat.html",
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Мої повідомлення";
                            }],
                        }
                    })
                    .state("autorization", {
                        url: '/autorization',
                        templateUrl: "/app/templates/autorize.html",
                         resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Приєднуйся";
                            }],
                        }
                    })
                    .state("chatUser", {
                        url: '/chatUser',
                        templateUrl: "app/templates/chatUser.html",
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Дженніфер Лоуренс";
                            }],
                        }
                    });
                $urlRouterProvider.otherwise('/mainPage');
            }
        ])
        .run(['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]);

    
// Scrolling to bottom by default
    app2.directive('scrollToBottom', function($timeout, $window) {
           console.log("hi");
  return {
    scope: {
     
      schrollBottom: "="
    },
    link: function (scope, element) {
      scope.$watchCollection('schrollBottom', function (newValue) {
        if (newValue)
        {
          $(element).scrollTop($(element)[0].scrollHeight);
        }
      });
    }
  };
});

})();