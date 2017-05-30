(function(){
    var app = angular.module("social-directives", []);
    
    app.directive("socialModal" ,function(){
       return{
           restrict: "AE",
           templateUrl: "/app/templates/modal.html"
       };
    });
    app.directive("socialHeader", function(){
        return{
            restrict: "AE",
            templateUrl: "/app/templates/header.html"
        };
    });
    app.directive("socialSideMenu", function(){
        return{
            restrict: "AE",
            templateUrl: "/app/templates/sideMenu.html"
        };
    });
    app.directive("socialRouter", function(){
       return{
           restrict: "AE",
           templateUrl: "/app/templates/router.html"
       } 
    });
    
    
    angular.module("socialNetwork").config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl: "/app/templates/mainPage.html"
        })
        .when("/controller-friends", {
            templateUrl: "app/templates/friends.html"
        })
        .when("/controller-gallery", {
            templateUrl: "app/templates/gallery.html"
        });
        $routeProvider.otherwise("/");
    });
})();