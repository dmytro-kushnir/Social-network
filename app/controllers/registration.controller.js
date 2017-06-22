var app = angular.module("socialNetwork");

app.controller("singUpController", function($scope){
	$scope.register = function(newUser){
		$scope.msg = 'Welcome ' +$scope.user.secondname+'! You have singed in =)';
	}
});
