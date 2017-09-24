(function () {
    "use strict";
    var app = angular.module('socialNetwork');
    app.factory('socialService', function ($http) {
        return {
            getSubPage: function (request) {
                return $http.post("endPoints/subPage.php", {
                    request: request
                });
            },
            pageRender: function (id) {
                return $http.post("endPoints/pageRender.php", id);
            },
            uploadPost: function (request) {
                return $http.post("endPoints/uploadPost.php", request);
            },
            deletePost: function (request) {
                return $http.post("endPoints/deletePost.php", request);
            },
            likePost: function (request) {
                return $http.post("endPoints/likePost.php", request);
            },
            deleteImage: function (request) {
                return $http.post("endPoints/deleteImage.php", request);
            },
            updateAvatar: function (request) {
                return $http.post("endPoints/updateAvatar.php", request);
            },
            changeUserInfo: function(request){
                return $http.post("endPoints/updateUserInfo.php", request);
            },
            editUserData: function(request){
                return $http.post("endPoints/editUserData.php", request);
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
            // registration
            service.registration = function (users, data_users, callback) {
                $http.post('ajax.php', {users: users, data_users: data_users})
                    .then(function (response) {
                        callback(response);
                    });
            };

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
    app.factory('componentService', () => {
        // hold a local copy of the state, setting its defaults
        const state = {
          data: {
            avatar: '',
            updateAvatar: '',
            image:''
          }
        };
        // expose basic getter and setter methods
        return {
          get() {
            return state.data;
          },
          set(data) {
            Object.assign(state.data, data);
          }
        };
      })

    app.filter('reverse', function() {
        return function(items) {
          if(!angular.isArray(items)) { return items; }
          return items.slice().reverse();
        };
      });
})();