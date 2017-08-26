(function () {
    var app = angular.module("chat", ["components"]);
    app.component("chat", {
        templateUrl: "app/templates/chat.html",
        controller: ["$state", "socialService","storageService",
            function GalleryCtrl($state, socialService, storageService) {
                /////////////////
                var self = this;
                self.page = {}
                self.userId = $state.params.userId;
                self.stateName = $state.current.name.split(".").pop();
                /////////////////
                var data = {
                    id: self.userId,
                    pageName: self.stateName
                }
                socialService.getSubPage(data).then(function (response) {
                    self.page = response.data.info;
                    console.log("chat", self.page);
                });

                
       self.chatEnter = function (chatId, index) {

                // $rootScope.chatTitle = self.page[index].sender_name;
                console.log(self.page);
            var chatData = {
                "id_sender": chatId,
                "id_owner": self.userId,
                "sender_name": self.page.chat[index].sender_name,
                "sender": self.page.chat[index].sender,
                "reciever_url": self.page.chat[index].reciever_url,
                "chat_date": dateFormat(new Date(), 'm-d-Y h:i:s')
            }
            console.log("chatDaTa", chatData);
            storageService.save('chatData', JSON.stringify(chatData));
            $state.go('cont.chatUser', {userId: self.userId, chatId: chatId});
        };
            }
        ]
    });
})();