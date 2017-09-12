(function () {
    "use strict";
    // rendering page controller
    var app = angular.module('components', [
        "sing-up",
        "main-page",
        "gallery",
        "friends",
        "chat",
        "angular-toArrayFilter",
        "change-info"     
    ]);
    app.component("mainContainer", {
        templateUrl: "app/templates/mainContainer.html",
        controller: ["$state", "socialService", "storageService", "AuthService",
            function MainCtrl($state, socialService, storageService, AuthService) {
                ////////////////////
                var self = this;
                self.userId = storageService.get("userId");
                self.page = {};
                self.users = {};
                ///////////////////
                var data = {
                    id: self.userId,
                    pageName: "mainPage"
                }
                socialService.getSubPage(data).then(function (response) {
                    self.page = response.data.info;
                    storageService.save("loginUserData", JSON.stringify(self.page));
                    console.log(self.page);
                });
                self.usersListRender = function(){
                    var data = {
                        id: self.userId,
                        pageName: "userList"
                    }
                    socialService.getSubPage(data).then(function (response) {
                        self.users = response.data.info;
                        console.log(self.users);
                    });
                }
                // GET data from child component, when avatar changes
                self.avatarChange = function(avatar_url){
                    self.page.avatar_url = avatar_url;
                }
            
                
                self.subPageEnter = function (pageName) {
                    switch (pageName) {
                        case 'gallery':
                            $state.go('cont.gallery', {
                                userId: self.userId
                            });
                            break;
                        case 'friends':
                            $state.go('cont.friends', {
                                userId: self.userId
                            }, {
                                reload: true
                            });
                            break;
                        case 'mainPage':
                            $state.go('cont.mainPage', {
                                userId: self.userId
                            }, {
                                reload: true
                            });
                            break;
                        case 'chat':
                            $state.go('cont.chat', {
                                userId: self.userId
                            }, {
                                reload: true
                            });
                            break;
                        case 'autorize':
                            console.log("LogOut");
                            AuthService.clearCredentials();
                            $state.go('autorize', {}, {
                                reload: true
                            });
                            break;
                    }
                }
            }
        ]
    });
})();