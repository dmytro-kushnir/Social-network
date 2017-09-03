(function () {
    var app = angular.module("image-modal", ["main-page", "gallery"]);
    app.component("imageModal", {
        templateUrl: "app/templates/modalImage.html",
        bindings: {
            close: '&',
            resolve: '<',
            index: '<'
        },
        controller: ['$state','socialService' ,'componentService',
            function OpenModalCtrl($state, socialService ,componentService) {
                ///////////////
                var self = this;
                self.userId = $state.params.userId;
                console.log(self);
                self.$onInit = function () {
                    console.log(self.resolve.image);
                    self.images = self.resolve.image;
                    self.index = self.resolve.index;
                    self.image = self.images[self.index];
                    self.dbName = self.resolve.dbName;
                };
                ///////////////
                self.deleteImage = function (array_id, id) {
                    var data = { // prepare data to server send
                        0:{
                            "id_owner": self.userId,
                            "id": id
                        },
                        1:{
                            "dbName": self.dbName,
                            "array_id":array_id,
                            "is_set":self.image.is_set
                        }
                    }
                    console.log("ARRAY ID", array_id);
                    socialService.deleteImage(data).then(function (response) {
                        componentService.set({
                            image: response.data.info[1]
                        });
                        console.log(response);
                      
                    });
                }

                self.prevImage = function () {
                    if (self.index > 0) {
                        self.index -= 1;
                        self.image = self.images[self.index];
                    } else {
                        self.index = self.images.length - 1;
                        self.image = self.images[self.index];
                    }
                };

                self.nextImage = function () {
                    if (self.index < self.images.length - 1) {
                        self.index += 1;
                        self.image = self.images[self.index];
                    } else {
                        self.index = 0;
                        self.image = self.images[self.index];
                    }
                };

            }
        ]
    });
    // swapping blocks in modal window
    app.controller('ModalCtrl', function ($scope) {
        $scope.toogleClass = function (class1) {
            $scope[class1] = !$scope[class1];
        };
    });

})();