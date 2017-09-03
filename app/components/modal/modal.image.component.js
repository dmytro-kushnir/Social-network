(function () {
    var app = angular.module("image-modal", ["main-page", "gallery"]);
    app.component("imageModal", {
        templateUrl: "app/templates/modalImage.html",
        bindings: {
            close: '&',
            resolve: '<',
            index: '<'
        },
        controller: [
            function OpenModalCtrl() {
                ///////////////
                var self = this;
                console.log(self);
                self.$onInit = function () {
                    console.log(self.resolve.image);
                    self.images = self.resolve.image;
                    self.index = self.resolve.index;
                    self.image = self.images[self.index];
                };
                ///////////////

                self.close = function () {
                    $modalInstance.dismiss(self);
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