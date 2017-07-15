(function () {
    var app = angular.module("socialNetwork", ["social-directives",
        "angularCSS",
        "Controllers",
        'ui.router',
        'ngAnimate',
        'monospaced.elastic',
        'ui.bootstrap',
        'bootstrapLightbox',
        'ngTouch',
        'angular-carousel',
        'akoenig.deckgrid',
        'videosharing-embed'
    ]);


    
    // Routing START  

    app.config(['$stateProvider', '$urlRouterProvider',
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
                           'title': ['storageService', '$rootScope', function (storageService,$rootScope) {
                                $rootScope.title =  storageService.get('userName');
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
                            'title': ['storageService', '$rootScope', function (storageService,$rootScope) {
                                $rootScope.title =  storageService.get('friendName');
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
                $rootScope.$state.$current = $state.$current;

            }

        ]);


    //factory for json load
    app.factory('JsonLoad', function ($http) {
        return {
            getPage: function () {
                return $http.get("connection.php");
            },
            returnHome: function (request) {
                return $http.post("connection.php", request);
            }
        };
    });

    app.factory('JsonFriend', function ($http, $rootScope) {
        return {
            requestPage: function (request) {
                return $http.post("friendReq.php", request);
            }
            //     getFriend: function () {
            //         return $http({
            //             url: "friendReq.php",
            //             method: "GET",
            //             params: {
            //                 user_id: 100001
            //             }
            //         });
            //     }
        };
    });
    app.factory('storageService', ['$rootScope', function ($rootScope) {

        return {
            get: function (key) {
                return localStorage.getItem(key);
            },
            save: function (key, data) {
                localStorage.setItem(key, data);
            }
        };
    }]);
})();