//var app = angular.module("socialNetwork");
app.controller("singUpController", function($scope, $http){
	$scope.singUpInfo={
		firstname: undefined,
		secondname: undefined,
		email: undefined,
		password: undefined
	}
	$scope.loginInfo={
		firstname: undefined,
		secondname: undefined,
		email: undefined,
		password: undefined
	}
	
	$scope.singUserUp =  function (){
		var data = {
			firstname : $scope.singUpInfo.firstname,
			secondname : $scope.singUpInfo.secondname,
			email: $scope.singUpInfo.email,
			password: $scope.singUpInfo.password
		}
		$http.post("endpoinds/singup.php".data).success(function(response){
			console.log(response);
		}).error(function(error){
			console.error(error);
		});
	}
	
});