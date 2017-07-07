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

})();