var app = angular.module("singupApp", []);

app.controller("singUpController", function($scope){
	$scope.register = function(newUser){
		$scope.msg = 'Welcome ' +$scope.user.firstname+'! You have singed in =)';
	}
});
