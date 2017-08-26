(function () {
    var app = angular.module("friends", ["components"]);
    app.component("friends", {
        templateUrl: "app/templates/friends.html",
        controller: ["$state", "socialService",
            function GalleryCtrl($state, socialService) {
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
            }
        ]
    });
})();