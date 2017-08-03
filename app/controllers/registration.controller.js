//var app = angular.module("socialNetwork");

app.controller("singUpController", function ($scope, $state, $http, AuthService) {
	// $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

	$scope.singUpInfo = {
		firstname: undefined,
		secondname: undefined,
		email: undefined,
		password: undefined
	};

	$scope.loginInfo = {
		email: undefined,
		password: undefined
	};

	$scope.singUserUp = function () {
		var data = {
			"userFirstName": $scope.singUpInfo.firstname,
			"userSecondName": $scope.singUpInfo.secondname,
			"userEmail": $scope.singUpInfo.email,
			"userPassword": $scope.singUpInfo.password
		};

		 $scope.fooObj = auth;
		  console.log("AUTH", $scope.fooObj );

		console.log("singUp data input: ", data);
		$http.post('ajax.php', data).then(function (response) {
				console.log(response);
			}),
			function (error) {
				console.log(error);
			}
	}
	//login
		
	$scope.logIn = function () {
		var data = {
			"userEmail": $scope.loginInfo.email,
			"userPassword": $scope.loginInfo.password
			};
			AuthService.authenticate(data, function (callback) { 
			console.log("CALLBACK! ",callback); //-> callback from server 
			AuthService.setCredentials(callback);	
			$state.go('mainContainer.mainPage');
		});
	}
});