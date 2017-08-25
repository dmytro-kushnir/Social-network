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
        'videosharing-embed',
        'ngCookies',
        'ngFileUpload',
        'ngSanitize'
    ]);
    // Routing START  

    app.config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider
                    .state("cont", {

                        url: '/cont',
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
                        controller: 'singUpController',
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Приєднуйся!";
                            }]
                        }
                    })
                    .state("cont.mainPage", {
                        url: '/mainPage',
                        views: {
                            'mainPage@cont': {
                                templateUrl: 'app/templates/mainPage.html',

                            }
                        },
                        resolve: {
                            'title': ['storageService', '$rootScope', function (storageService, $rootScope) {
                                $rootScope.title = storageService.get('userName');
                            }]
                        },
                        data: {
                            authRequired: true
                        }
                    })
                    .state("cont.friends", {
                        url: '/friends',
                        views: {
                            'friends@cont': {
                                templateUrl: 'app/templates/friends.html'
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Мої друзі";
                            }]
                        }
                    })
                    .state("cont.gallery", {
                        url: '/gallery',
                        views: {
                            'gallery@cont': {
                                templateUrl: 'app/templates/gallery.html',
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Галерея";

                            }]
                        }
                    })
                    .state("cont.userFriends", {
                        url: '/userFriends',
                        views: {
                            'userFriends@cont': {
                                templateUrl: 'app/templates/userFriends.html'
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Мої друзі";
                            }]
                        }
                    })
                    .state("cont.userGallery", {
                        url: '/userGallery',
                        views: {
                            'userGallery@cont': {
                                templateUrl: 'app/templates/userGallery.html',
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Галерея";

                            }]
                        }
                    })
                    .state("cont.chat", {
                        url: '/chat',
                        views: {
                            'chat@cont': {
                                templateUrl: 'app/templates/chat.html',
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Мої повідомлення";
                            }]
                        }
                    })
                    .state("cont.chatUser", {
                        url: '/chatUser',
                        views: {
                            'chatUser@cont': {
                                templateUrl: 'app/templates/chatUser.html',
                            },

                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = $rootScope.chatTitle;
                            }]
                        }
                    })
                    .state("cont.userPage", {
                        url: '/userPage',
                        views: {
                            'userPage@cont': {
                                templateUrl: 'app/templates/userPage.html',
                            },

                        },
                        resolve: {
                            // 'title': ['storageService', '$rootScope', function (storageService,$rootScope) {
                            //     console.log("HEYY");                   
                            //        $rootScope.title =  storageService.get('friendName');
                            // }]
                        }
                    });
                $urlRouterProvider.otherwise('/cont/mainPage');
            }
        ])
        // .run(function ($rootScope, $location, storageService) { // history back event

        //     $rootScope.$on('$locationChangeSuccess', function () {
        //         $rootScope.actualLocation = $location.absUrl();
        //     });

        //     $rootScope.$watch(function () {
        //         return $location.absUrl()
        //     }, function (newLocation, oldLocation) {
        //         if ($rootScope.actualLocation === newLocation) {
        //               var userId = storageService.get('userId');
        //               storageService.save('pageId', userId);
        //         }
        //     });
        // })
        .run(['$rootScope', '$state', '$stateParams', // for route header name
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.$on('$locationChangeStart', function () {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                });
            }

        ])
        .run(['$rootScope', '$transitions', '$state', '$cookies', '$http', 'AuthService', // for registration
            function ($rootScope, $transitions, $state, $cookies, $http, AuthService) {

                // keep user logged in after page refresh
                $rootScope.globals = $cookies.get('globals') || {};
                $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.globals;

                $transitions.onStart({
                    to: function (state) {
                        return state.data != null && state.data.authRequired === true;
                    }
                }, function () {
                    console.log("I'm transition.onStart and i'm alive!!!");
                    if (!AuthService.isAuthenticated()) {
                        return $state.target("autorize");
                    }
                });
            }
        ]);

    //factory for json load
    app.factory('JsonLoad', function ($http) {
        return {
            getPage: function () {
                return $http.get("endPoints/mainPageRender.php");
            },
            returnHome: function (request) {
                return $http.post("endPoints/subPage.php", {
                    request: request
                });
            },
            renderUserPage: function (request) {
                return $http.post("endPoints/pageRender.php", request);
            },
            uploadPost: function (request) {
                return $http.post("endPoints/uploadPost.php", request);
            },
            deletePost: function (request) {
                return $http.post("endPoints/deletePost.php", request);
            }
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
    app.factory('AuthService', ['$http', '$cookies', '$rootScope',
        function ($http, $cookies, $rootScope) {

            var service = {};

            // Authenticates throug a rest service
            service.authenticate = function (userEmail, userPassword, callback) {
                $http.post('endPoints/login.php', {userEmail: userEmail, userPassword: userPassword})
                    .then(function (response) {
                        callback(response);
                    });
            };

            // Creates a cookie and set the Authorization header
            service.setCredentials = function (response) {

                $rootScope.globals = response;

                $http.defaults.headers.common['Authorization'] = 'Bearer ' + response;
                $cookies.put('globals', $rootScope.globals);
            };

            // Checks if it's authenticated
            service.isAuthenticated = function () {

                console.log("If TRUE callback not worked yet!!", $cookies.get('globals') === undefined);

                return !($cookies.get('globals') === undefined);
            };

            // Clear credentials when logout
            service.clearCredentials = function () {
                $rootScope.globals = undefined;
                $cookies.remove('globals');
                console.log("CLEAN coockies globals", $cookies.get('globals'));

                $http.defaults.headers.common.Authorization = 'Bearer ';
            };

            return service;
        }
    ]);


    app.filter('reverse', function() {
        return function(items) {
          if(!angular.isArray(items)) { return items; }
          return items.slice().reverse();
        };
      });
})();