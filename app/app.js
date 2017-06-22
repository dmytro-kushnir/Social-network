(function () {
    var app = angular.module("socialNetwork", 
        ["social-directives", "angularCSS", "Controllers", 'ui.router', 'ngAnimate', 'monospaced.elastic']);
    
    app.controller('MainCtrl', function () {

    });


    var app2 = angular.module("singupApp", []);


    var app3 = angular.module("mainContainer", ['ui.router']).controller('containerCtrl', function(){

    });
   
})();