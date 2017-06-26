var app = angular.module("singupApp", []);

app.controller("singUpController", function($scope){
	$scope.register = function(newUser){
		$scope.msg = 'Welcome ' +$scope.user.secondname+'! You have singed in =)';
	}
});

app.controller("logInController", function($scope){
	$scope.logloginUser= function(ckeckUser){
		
	}
});

