var singupApp = angular.module("singUpApp", ["singUpController"]);

singupApp.controller("singUpController", ['singupService', function($scope, $window, singupService){

    $scope.regisration = {
        Surname: "",
        Name: "",
        Email: "",
        Password: ""
    }

    $scope.singUp = function(){
        singupService.saveRegistration($scope.regisration).then(function(response){
            alert("Registered");
        }, function(response){
            alert("failed")
        })
    }

}]);
singupApp.factory("singupService", function($http){
    singupServie = {};

    singupServie.saveRegistration = function(formdata){
        return $http.post('/api/account/register', formdata)
    }

    return singupServie;
});