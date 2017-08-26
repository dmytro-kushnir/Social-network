var app = angular.module("sing-up", ["components"]);
app.component("singUp", {
	templateUrl: "/app/templates/autorize.html",
	controller: ["$state", "$http", "AuthService", "storageService",
		function singUpController($state, $http, AuthService, storageService) {	
			//$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'; 
			//////////////////
			var self = this;
			/////////////////

			self.singUpInfo = {
				firstname: undefined,
				secondname: undefined,
				email: undefined,
				password: undefined
			};

			self.loginInfo = {
				email: undefined,
				password: undefined
			};

			self.singUserUp = function () {
				var data = {
					"userFirstName": self.singUpInfo.firstname,
					"userSecondName": self.singUpInfo.secondname,
					"userEmail": self.singUpInfo.email,
					"userPassword": self.singUpInfo.password
				};

				console.log("singUp data input: ", data);
				$http.post('ajax.php', data).then(function (response) {
						console.log(response);
						localStorage.setItem("user", JSON.stringify({
							user: response
						}));
						$state.go("/cont/mainPage");
					}),
					function (error) {
						console.log(error);
					}
			}
			//login
			self.logIn = function () {
				AuthService.authenticate(self.loginInfo.email, self.loginInfo.password, function (callback) {
					console.log("CALLBACK! ", callback); //-> callback from server 
					if (callback.data.success == true) {
						AuthService.setCredentials(callback.data.success); 
						storageService.save("userId", callback.data.id);
						$state.go('cont.mainPage',{'userId':callback.data.id});
					}
					else{
						callback.data.success = undefined;
						AuthService.setCredentials(callback.data.success);
					}
				});
			}

		}
	]
});
