(function () {
    var app = angular.module("socialNetwork", 
        ["social-directives", 
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
        getPage: function(){
            return $http.get("connection.php");
        },
        returnHome: function(request){
            return $http.post("connection.php", request);
        }
    };
});

app.factory('JsonFriend', function($http){
    return{
        requestPage: function(request){
            return $http.post("friendReq.php", request);
        }
<<<<<<< .merge_file_a14388
        //  getFriend: function(){
        //     return $http.get("friendReq.php");
        // }
=======
>>>>>>> .merge_file_a10744
    };
});

})();