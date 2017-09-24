(function () {
    "use strict";
    var app = angular.module("image-modal", ["main-page", "gallery"]);
    app.component("imageModal", {
        templateUrl: "app/templates/modalImage.html",
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
                    self.dbName = self.resolve.dbName;
                    self.images = self.resolve.image;
                    self.index = self.resolve.index;
                    self.image = self.images[self.index];
                };
                ///////////////

                self.isLoggined = function (targetId, logginedId) {
                    if (targetId == logginedId)
                        return true;
                    else
                        return false;
                }

                self.updateAvatar = function (id, url) {
                    console.log(self.dbName);
                    if (self.dbName == 'avatars') {
                        var data = {
                            user_id: self.userId,
                            image_id: id,
                            url: url,
                            pageName: self.dbName
                        }
                    } else if (self.dbName == 'gallery') {
                        var data = {
                            user_id: self.userId,
                            image_id: id,
                            url: url,
                            pageName: self.dbName,
                            newAvatar: {
                                id_owner: self.userId,
                                image_url: url, //make in server
                                is_set: 1, //make in server
                                sender_name: self.logginedData.first_name + " " + self.logginedData.second_name,
                                sender_url: url,
                                reciever_url: url,
                                image_date: dateFormat(new Date(), 'm-d-Y h:i:s'),
                                likes: 0
                            }
                        }
                    }
                    socialService.updateAvatar(data).then(function (response) {
                        var data = {
                            id: self.userId,
                            pageName: 'uploadAvatar'
                        }
                        socialService.getSubPage(data).then(function (response) {
                            if (self.dbName == "gallery") {
                                $state.go('cont.mainPage', {
                                    userId: self.userId
                                }, {
                                    reload: true
                                });
                            }

                            componentService.set({
                                avatar: response
                            });
                        });
                    });

                }


                self.deleteImage = function (array_id, id) {
                    var data = { // prepare data to server send
                        0: {
                            "id_owner": self.userId,
                            "id": id
                        },
                        1: {
                            "dbName": self.dbName,
                            "array_id": array_id,
                            "is_set": self.image.is_set
                        }
                    }
                    console.log("ARRAY ID", array_id);
                    socialService.deleteImage(data).then(function (response) {
                        console.log(response);
                        componentService.set({
                            image: response.data.info[1]
                        });
                        console.log(response);

                    });
                }
                // moving left 
                self.prevImage = function () {
                    prevImage();
                };
                // moving right
                self.nextImage = function () {
                    nextImage();
                };

                function prevImage() {
                    if (self.index > 0) {
                        self.index -= 1;
                        self.image = self.images[self.index];
                    } else {
                        self.index = self.images.length - 1;
                        self.image = self.images[self.index];
                    }
                }

                function nextImage() {
                    if (self.index < self.images.length - 1) {
                        self.index += 1;
                        self.image = self.images[self.index];
                    } else {
                        self.index = 0;
                        self.image = self.images[self.index];
                    }
                }
                // key event 
                self.keyDown = function ($event) {
                //      console.log($event.keyCode);
                    switch ($event.keyCode) {
                        case 39: //right
                            nextImage();
                            break;
                        case 37: //left
                            prevImage();
                            break;
                    }
                }
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