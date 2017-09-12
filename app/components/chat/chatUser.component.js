(function () {
    "use strict";
    var app = angular.module("chat-user", ["chat"]);
    app.component("chatUser", {
        templateUrl: "app/templates/chatUser.html",
        controller: ["$state", "socialService","$window","storageService",
            function GalleryCtrl($state, socialService, $window, storageService) {
                /////////////////
                var self = this;
                self.page = {}
                self.userId = $state.params.userId;
                self.chatId = $state.params.chatId;
                self.stateName = $state.current.name.split(".").pop();
                /////////////////
                var chatData = storageService.get('chatData');
                var parsedChatData = JSON.parse(chatData);
                var data = {
                    id: self.userId,
                    pageName: self.stateName,
                    idChat: self.chatId,
                    chatData: parsedChatData
                }
                console.log(data);
                socialService.getSubPage(data).then(function (response) {
                    self.page = response.data.info;
                    console.log("chatUser", self.page);
                });
                
                var width = $window.innerWidth;
                if (width < 767) {
                    self.tabletMode = true;
                }
            }
        ]
    });
})();
