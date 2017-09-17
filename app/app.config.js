(function () {
    "use strict";
    var app = angular.module('socialNetwork');
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                    $locationProvider.hashPrefix(''); // by default '!'
                    $locationProvider.html5Mode(true);
                $stateProvider
                    .state("cont", {
                        url: '/cont',
                        template: "<main-container></main-container>",
                    })
                    .state("autorize", {
                        url: '/autorize',
                        template: "<sing-up></sing-up>",
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Приєднуйся!";
                            }]
                        }
                    })
                    .state("cont.mainPage", {
                        url: '/mainPage/:userId',
                        params:{
                            userId:null
                        },
                        views: {
                            'mainPage@cont': {
                                template: "<main-page></main-page>",
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
                        url: '/friends/:userId',
                        params:{
                            userId:null
                        },
                        views: {
                            'friends@cont': {
                                template: '<friends></friends>',
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Мої друзі";
                            }]
                        }
                    })
                    .state("cont.gallery", {
                        url: '/gallery/:userId',
                        params:{
                            userId:null
                        },
                        views: {
                            'gallery@cont': {
                                template: '<gallery></gallery>',
                            }
                        },
                       
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Галерея";

                            }]
                        }
                    })
                    .state("cont.chat", {
                        url: '/chat/:userId',
                        params:{
                            userId:null
                        },
                        views: {
                            'chat@cont': {
                                template: '<chat></chat>',
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = "Мої повідомлення";
                            }]
                        }
                    })
                    .state("cont.chatUser", {
                        url: '/chatUser/:userId/:chatId',
                        params:{
                            userId:null,
                            chatId:null,
                        },
                        views: {
                            'chatUser@cont': {
                                template: '<chat-user></chat-user>',
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function ($rootScope) {
                                $rootScope.title = $rootScope.chatTitle;
                            }]
                        }
                    })
                    .state("cont.changeInfo", {
                        url: '/changeInfo/:userId',
                        params: {
                            userId:null
                        },
                        views:{
                            'changeInfo@cont':{
                                template: '<change-info></change-info>',
                            }
                        },
                        resolve: {
                            'title': ['$rootScope', function($rootScope){
                                $rootScope.title = "Змінити інформацію";
                            }]
                        }
                    });
                    $urlRouterProvider.otherwise(function ($injector, $location) {
                        var $state = $injector.get('$state');
                        $state.go("cont.mainPage", {'userId':localStorage.getItem("userId")});
                    });
         
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
                    // console.log("I'm transition.onStart and i'm alive!!!");
                    if (!AuthService.isAuthenticated()) {
                        return $state.target("autorize");
                    }
                });
            }
        ]);
})();