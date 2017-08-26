(function () {
    // rendering page controller
    var app = angular.module('components', [
        "sing-up",
        "main-page",
        "gallery",
        "friends",
        "chat",
        "chat-user"
    ]);
    app.component("mainContainer", {
        templateUrl: "app/templates/mainContainer.html",
        controller: ["$state", "socialService", "storageService",
            function GalleryCtrl($state, socialService, storageService) {
                ////////////////////
                var self = this;
                self.userId = $state.params.userId;
                ////////////////////
                if(self.userId == null)
                    self.userId = storageService.get("userId");

                var data = {
                    id: self.userId,
                    pageName: "mainPage"
                }
                socialService.getSubPage(data).then(function (response) {
                    self.page = response.data.info;
                    console.log("mainContainer", self.page);
                });

                self.subPageEnter = function(pageName){
                    switch(pageName){
                        case 'gallery':
                        $state.go('cont.gallery',{userId:self.userId}); 
                        break;
                        case 'friends':
                        $state.go('cont.friends',{userId:self.userId}, {reload: true}); 
                        break;
                        case 'mainPage':
                        $state.go('cont.mainPage',{userId:self.userId},{reload: true}); 
                        break;
                        case 'chat':
                        $state.go('cont.chat',{userId:self.userId},{reload: true}); 
                        break;
                    }
                 
                }
            }
        ]
    });
    // app.controller('MainCtrl', function (
    //     $rootScope,
    //     $timeout,
    //     $state,
    //     $scope,
    //     socialService,
    //     storageService,
    //     AuthService
    // ) {

    //     'use strict';
    //     // $scope.carouselIndex = 1; // щоб сладйер починався з другого індексу

    //     // // return to main USER page onclick
    //     // $scope.return = function (id, pageName) {
    //     //     $scope.subPage = null;
    //     //     console.log("ID", id);
    //     //     console.log("pageName", pageName);
    //     //     storageService.save('pageId', id);

    //     //     // storageService.save('friendSubPage', "mainUser"); // save mainUser flag to LS 
    //     //     if($scope.subPage == null){ // повторно нажали на ту саму вкладку
    //     //              var data = {
    //     //                 id: id,
    //     //                 pageName: pageName,
    //     //                 idChat: undefined,
    //     //                 chatData: undefined
    //     //             }
    //     //             socialService.getSubPage(data).then(function (res) {
    //     //                 $scope.subPage = res.data.info;
    //     //                 console.log("second subPage POST", $scope.subPage);
    //     //             });
    //     //     }

    //     // }
    //     // load userPage onclick
    //     $scope.reqFriend = function (answer) {
    //         // save userPageId to localStorage
    //         storageService.save('userPageId', answer);
    //         storageService.save('pageId', answer);   
    //     }
    //     $scope.goBack = function() {
    //             storageService.save('pageId', $scope.page.id);
    //             window.history.back();
    //     };
    //     // load chatUser onclick 
    //     $scope.chatEnter = function (chatId, index, nameSpace) {
    //         // $scope.chatId = chatId;
    //         console.log(`chat index is ${chatId}`);
    //         storageService.save('chatId', chatId);
    //         var date = new Date();
    //         var pageId = storageService.get('pageId');
    //         $scope.FromDate = ('0' + (date.getMonth() + 1)).slice(-2) + '.' + ('0' + date.getDate()).slice(-2);

    //         if (nameSpace == "friends") {
    //             $rootScope.chatTitle = $scope.subPage[nameSpace][index].first_name + " " + $scope.subPage[nameSpace][index].second_name;
    //             $scope.avatar_url = $scope.subPage[nameSpace][index].avatar_url;
    //         } else if (nameSpace == "chat")
    //             $rootScope.chatTitle = $scope.subPage[nameSpace][index].sender_name;
    //         else if (nameSpace == "userPage")
    //             $rootScope.chatTitle = $rootScope.title;

    //         var chatData = {
    //             "id_sender": chatId,
    //             "id_owner": pageId,
    //             "sender_name": $rootScope.chatTitle,
    //             "sender": $scope.avatar_url,
    //             "reciever_url": $scope.page.avatar_url,
    //             "chat_date": $scope.FromDate
    //         }
    //         console.log("chatDaTa", chatData);
    //         storageService.save('chatData', JSON.stringify(chatData));
    //         $state.go('cont.chatUser');
    //     };


    //     // get data from child ctrl registration
    //     $scope.$on('logIn', function (event, data) {
    //         $scope.page = data;
    //         console.log("emit logIn", $scope.page);
    //         if(data != undefined){
    //             storageService.save('userName', data.first_name + " " + data.second_name);
    //             storageService.save('userUrl', data.avatar_url);
    //             // storageService.save('userMain', JSON.stringify(data));
    //             storageService.save('userId', data.id);
    //         }
    //         else{
    //             console.log("АВТОРИЗАЦІЯ НЕ ВИЙШЛА")
    //         }

    //     });
    //     // get data from child ctrl userPage
    //     $scope.$on('friendName', function (event, data) {

    //         $rootScope.title = data;
    //         console.log("emit data FRIEND", data);
    //     });
    //     $scope.$on('friendAvatar', function (event, data) {

    //         $scope.avatar_url = data;
    //         console.log("emit data FRIEND", data);
    //     });
    //     // get data from child ctrl userPage
    //     $scope.$on('userPageFrGal', function (event, data) {
    //         $scope.subPage = data; //-> friends
    //     });
    //     // get data from child ctrl mainPage
    //     $scope.$on('mainPageFrGal', function (event, data) {
    //         console.log(data);
    //         $scope.subPage = data; //-> mainUser
    //     });

    //     // save current state and watch it change
    //     // $scope.currState = $state;
    //     // $scope.$watch('currState.current.name', function (newValue, oldValue) {
    //     //     switch (newValue) {
    //     //         case 'cont.mainPage':
    //     //             socialService.getPage().then(function (res) {
    //     //                 console.log("mainPage POST", res);
    //     //                 $scope.page = [];
    //     //                 $scope.page = res.data.info;
    //     //             });
    //     //             break;
    //     //         case 'cont.friends':
    //     //         case 'cont.gallery':
    //     //         case 'cont.chat':
    //     //         case 'cont.chatUser':

    //     //             var userId = storageService.get('userId');
    //     //             console.log("USER ID ", userId);

    //     //             var userData = {
    //     //                 id: userId,
    //     //                 pageName: "mainPage",
    //     //             }
    //     //             var localStorageID = storageService.get('pageId');
    //     //               console.log("localStorageID: ", localStorageID);

    //     //               if (newValue == "cont.chatUser") { // its Chat User
    //     //                 var chatData = storageService.get('chatData');
    //     //                 var parsedChatData = JSON.parse(chatData);
    //     //                 var chatId = storageService.get('chatId'); // only for chatUser!
    //     //                 console.log("CHAT ID ", chatId);
    //     //                 console.log(JSON.parse(chatData));
    //     //             }

    //     //             var data = {
    //     //                 id: localStorageID,
    //     //                 pageName: newValue.split(".").pop(),
    //     //                 idChat: chatId,
    //     //                 chatData: parsedChatData
    //     //             }

    //     //             // load id , url and first name of user
    //     //             socialService.getSubPage(userData).then(function (res) {
    //     //                 $scope.page = res.data.info;
    //     //                 console.log("loggined page reload POST", res.data.info);
    //     //             });

    //     //             socialService.getSubPage(data).then(function (res) {
    //     //                 $scope.subPage = res.data.info;
    //     //                 $scope.chatId = chatId;
    //     //                 console.log("subPage POST", $scope.subPage);

    //     //             });

    //     //             break;
    //     //         case 'cont.userPage':
    //     //             var userId = storageService.get('userId');
    //     //             console.log("USER ID ", userId);
    //     //             var userData = {
    //     //                 id: userId,
    //     //                 pageName: "mainPage"
    //     //             }
    //     //             // load id , url and first name of user
    //     //             socialService.getSubPage(userData).then(function (res) {
    //     //                 $scope.page = res.data.info;
    //     //                 console.log("loggined page reload POST", res.data.info);
    //     //             });
    //     //             break;
    //     //         case 'autorize':
    //     //             console.log("LogOut");
    //     //             AuthService.clearCredentials();
    //     //             break;
    //     //     }
    //     // });
    // });
})();