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
        'akoenig.deckgrid'
        ]);
    
    //factory for json load
app.factory('JsonLoad', function ($http) {
    return {
        getPage: function(){
           
            return $http.get("connection.php");
        }
    };
});

app.factory('JsonFriend', function($http){
    return{
        requestPage: function(request){
            return $http.post("friendReq.php", request);
        }
    };
});

})();