(function () {
    "use strict";
    var app = angular.module("like-modal", ["main-page"]);
    app.component("likeModal", {
        templateUrl: "app/templates/modalLikes.html",
        bindings: {
            close: '&',
            resolve: '<',
            index: '<'
        },
        controller: ['$state', 'storageService', 'socialService', 'componentService',
            function OpenModalCtrl($state, storageService, socialService, componentService) {
                ///////////////
                var self = this;
                self.userId = $state.params.userId;
                self.logginedId = storageService.get("userId");
                self.logginedData = JSON.parse(storageService.get("loginUserData"));
                console.log(self);
                self.$onInit = function () {
                    console.log(self.resolve);

                    socialService.getSubPage(self.resolve.data).then(function (response) {
                        self.users = response.data.info.likeList;
                        console.log(self.users);
                    });
                };
                ///////////////
            }
        ]
    });
  

})();