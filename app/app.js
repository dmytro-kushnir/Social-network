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
        getGallery: function () {
            return $http.get('/app/jsons/gallery.json');
        },
        getAvatars: function () {
            return $http.get('/app/jsons/avatars.json');
        },
        getUsers: function(){
            return $http.get('/app/jsons/users.json');
        },
        getPage: function(){
            return $http.get('/app/jsons/user.json');
        }
    };
});

})();