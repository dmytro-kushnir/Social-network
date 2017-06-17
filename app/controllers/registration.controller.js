angular.module("singupApp").controller("singUpController", function($scope, $http){
    $scope.addNewUser = function(userDetails){
        $scope.massage = userDetails.surname + userDetails.name + "("+userDetails.email+")" + "("+userDetails.password+")";
    }
    $scope.massage = "Ready";
});