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

		console.log("singUp data input: ", data);
		$http.post('ajax.php', data).then(function (response) {
				console.log(response);
			}),
			function (error) {
				console.log(error);
			}
	}
	//login
	console.log($scope.loginInfo.email);
	$scope.logIn = function () {

		// var data = {
		// 	"userEmail": $scope.loginInfo.email,
		// 	"userPassword": $scope.loginInfo.password
		// 	};
		
			AuthService.authenticate($scope.loginInfo.email, "Regstarr@ukr.net", function (callback) { 
			console.log("CALLBACK! ",callback); //-> callback from server 

			if(callback.data.info)
			$scope.$emit('logIn', callback.data.info); // send data to parent scope (MainCtrl)

			AuthService.setCredentials(callback.data.success); // send flag from server if auth. is success
			// true -> success
			// undefined -> failed

			$state.go('mainContainer.mainPage');
		});
	}
});