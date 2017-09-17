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
						data_users: {
							"first_name": self.singUpInfo.firstname,
							"second_name": self.singUpInfo.secondname,
							"userId": "",
							"birthday": "",
							"city": "",
							"education": "",
							"mobile_number": "",
							"count_friends": "",
							"background_url": "/src/img/users/noUser/backgrounds/bg.jpg",
							"avatar_url": "/src/img/users/noUser/avatars/avatar.jpg",
							"friends": "",
							"avatars": "",
							"gallery": "",
							"posts": "",
							"chat": ""
						}
					};
					AuthService.registration(globalData.users, globalData.data_users, function (callback) {
						console.log("CALLBACK! ", callback); //-> callback from server 
						if (callback.data.success == true) {
							AuthService.setCredentials(callback.data.success); 
							storageService.save("userId", callback.data.id);
							$state.go('cont.mainPage',{'userId':callback.data.id});
							console.log(callback.data.userInfo); // Успішно!
						} else {
							callback.data.success = undefined;
							AuthService.setCredentials(callback.data.success);
							console.log(callback.data.userInfo); // Такий корситувачач вже існує/помилка
						}
					});
				}
				//login
				self.logIn = function () {
					AuthService.authenticate(self.loginInfo.email, self.loginInfo.password, function (callback) {
						console.log("CALLBACK! ", callback); //-> callback from server 
						if (callback.data.success == true) {
							AuthService.setCredentials(callback.data.success);
							storageService.save("userId", callback.data.id);
							$state.go('cont.mainPage', {'userId': callback.data.id});
						} else {
							callback.data.success = undefined;
							AuthService.setCredentials(callback.data.success);
						}
					});
				}

			}
		]
	});
})();