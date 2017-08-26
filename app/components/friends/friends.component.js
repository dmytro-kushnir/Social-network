(function () {
    var app = angular.module("friends", ["components"]);
    app.component("friends", {
        templateUrl: "app/templates/friends.html",
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
                    console.log("friends", self.page);
                });
                self.chatEnter = function (chatId, index) {
                    var chatData = {
                        "id_sender": chatId,
                        "id_owner": self.userId,
                        "sender_name": self.page.friends[index].first_name + " " + self.page.friends[index].second_name,
                        "sender": JSON.parse(storageService.get("loginUserData")).avatar_url,
                        "reciever_url": self.page.friends[index].avatar_url,
                        "chat_date": dateFormat(new Date(), 'm-d-Y h:i:s')
                    }
                    storageService.save('chatData', JSON.stringify(chatData));
                    $state.go('cont.chatUser', {
                        userId: self.userId,
                        chatId: chatId
                    });
                }
            }
        ]
    });
})();