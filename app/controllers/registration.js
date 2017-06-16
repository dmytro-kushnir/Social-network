var  singUp = angular.module("singUp", ["ngRoute"]);
singUp.controller("singUpController", function($scope, $http){
    $scope.addNewUser = function(userDetails){
        $scope.massage = userDetails.surname + userDetails.name + "("+userDetails.email+")" + "("+userDetails.password+")";
    }
    $scope.massage = "Ready";
});