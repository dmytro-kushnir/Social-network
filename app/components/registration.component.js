(function () {
    "use strict";
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
				var globalData = {
				users: {
					"userFirstName": self.singUpInfo.firstname,
					"userSecondName": self.singUpInfo.secondname,
					"userEmail": self.singUpInfo.email,
					"userPassword": self.singUpInfo.password
				},
				data_users:{
					"first_name": self.singUpInfo.firstname,
					"second_name": self.singUpInfo.secondname,
					"userId": "",
					"birthday": "",
					"city": "",
					"education": "",
					"mobile_number": "",
					"count_friends": "",
					"background_url": "",
					"avatar_url": "",
					"friends": "",
					"avatars": "",
					"gallery": "",
					"posts": "",
					"chat": ""
				}
			};
				console.log("singUp data input: ", globalData);
				$http.post('ajax.php', globalData).then(function (response) {
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
				console.log("Hey");
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
})();