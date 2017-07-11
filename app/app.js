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

    app.factory('JsonFriend', function ($http,$rootScope) {
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

})();