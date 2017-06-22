var app = angular.module("singupApp", []);

app.controller("singUpController", function($scope){
	$scope.register = function(newUser){
<<<<<<< HEAD
		$scope.msg = 'Welcome ' +$scope.user.secondname+'! You have singed in =)';
	}
});
=======
		$scope.msg = 'Welcome' +$scope.user.firstname+'! You have singed in =)';
});

>>>>>>> origin/AnnaBranch
