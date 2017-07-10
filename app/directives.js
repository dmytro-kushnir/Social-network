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
    var app2 = angular.module("socialNetwork").config([ '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state("mainContainer", {

                        url: '/mainContainer',
                        templateUrl: "app/templates/mainContainer.html",
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Доктор Стрендж";
                            }]
                        }
                    })
                    .state("autorize", {
                        url: '/autorize',
                        templateUrl: "app/templates/autorize.html",
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Приєднуйся!";
                            }]
                        }
                    })
                    .state("mainContainer.mainPage", {
                        url: '/mainPage',
                        views: {
                            'mainPage@mainContainer': {
                                templateUrl: 'app/templates/mainPage.html',

                            }
                        },
                        resolve: {
                            'title': ['$rootScope',  function ($rootScope) {
                                $rootScope.title = "Моя строінка";
                            }]
                        }
                    })
                    .state("mainContainer.friends", {
                        url: '/friends',
                        views: {
                            'friends@mainContainer': {
                                templateUrl: 'app/templates/friends.html'
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Мої друзі";
                            }]
                        }
                    })
                    .state("mainContainer.gallery", {
                        url: '/gallery',
                        views: {
                            'gallery@mainContainer': {
                                templateUrl: 'app/templates/gallery.html',
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Галерея";

                            }]
                        }
                    })
                    .state("mainContainer.chat", {
                        url: '/chat',
                        views: {
                            'chat@mainContainer': {
                                templateUrl: 'app/templates/chat.html',
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Мої повідомлення";
                            }]
                        }
                    })
                    .state("mainContainer.chatUser", {
                        url: '/chatUser',
                        views: {
                            'chatUser@mainContainer': {
                                templateUrl: 'app/templates/chatUser.html',
                            },

                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = $rootScope.chatTitle;
                            }]
                        }
                    })
                    .state("mainContainer.userPage", {
                        url: '/userPage',
                        views: {
                            'userPage@mainContainer': {
                                templateUrl: 'app/templates/userPage.html',
                            },

                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                console.log($rootScope.friendName);
                                $rootScope.title =  $rootScope.friendName;
                            }]
                        }
                    });
                $urlRouterProvider.otherwise('/autorize');
                
            }
        ])
        .run(['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
       
        ]);

    //directive for load background-mage:url() to div
    app2.directive('backImg', function () {
        return function ($scope, $element, $attrs) {
            var url = $attrs.backImg;
            $element.css({
                'background-image': 'url(' + url + ')',
                'background-size': 'cover'
            });
        };
    });

})();