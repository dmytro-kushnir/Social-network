(function () {
    // rendering page controller
    var app = angular.module('components', [
        "sing-up",
        "main-page",
        "gallery",
        "friends",
        "chat"
    ]);
    app.component("mainContainer", {
        templateUrl: "app/templates/mainContainer.html",
        controller: ["$state", "socialService", "storageService",
            function GalleryCtrl($state, socialService, storageService) {
                ////////////////////
                var self = this;
                self.userId = storageService.get("userId");
                ///////////////////
                var data = {
                    id: self.userId,
                    pageName: "mainPage"
                }
                socialService.getSubPage(data).then(function (response) {
                    self.page = response.data.info;
                    storageService.save("loginUserData", JSON.stringify(self.page));
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
})();