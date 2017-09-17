(function () {
    "use strict";
    var app = angular.module("main-page", ["components", "image-modal"]);
    app.component("mainPage", {
        transclude: true,
        templateUrl: "app/templates/mainPage.html",
        require: {
            parentCtrl: "^mainContainer"
        },
        controller: ['$state', 'socialService', 'storageService', 'Upload', '$timeout', '$uibModal', 'componentService',
            function MainPageCtrl($state, socialService, storageService, Upload, $timeout, $uibModal, componentService) {

                /////////////////
                var self = this;
                self.page = {}
                self.userId = $state.params.userId;
                self.logginedId = storageService.get("userId");
                self.textAreaFlag = true;
                self.imageFlag = true;
                self.textarea = {};
                self.carouselIndex = 1;

                ////////////////
                socialService.pageRender(self.userId).then(function (response) {
                    self.page = response.data.info;
                    // self.page.avatars = "";
                    // self.page.background_url = "";
                    self.logginedData = JSON.parse(storageService.get("loginUserData"));
                    console.log("mainPage", self.page);
                    console.log(self.logginedData);
                });

                self.openAvatars = function (index) {
                    console.log(self.page.avatars[index]);
                    var modalInstance = $uibModal.open({
                        animation: false,
                        component: "image-modal",
                        resolve: {
                            image: function () {
                                return self.page.avatars;
                            },
                            index: function () {
                                return index;
                            },
                            dbName: function () {
                                return 'avatars'
                            }
                        }
                    });
                    // Lightbox.openModal(self.page.avatars, index);
                }
                self.openGallery = function (index) {
                    var modalInstance = $uibModal.open({
                        animation: false,
                        component: "image-modal",
                        resolve: {
                            image: function () {
                                return self.page.gallery;
                            },
                            index: function () {
                                return index;
                            },
                            dbName: function () {
                                return 'gallery'
                            }
                        }
                    });
                }

                self.isLoggined = function (targetId, logginedId) {
                    if (targetId === logginedId)
                        return true;
                    else
                        return false;
                }

                self.mainPageFrGal = function (id, pageName) {
                    var data = {
                        id: id,
                        pageName: pageName
                    }
                    console.log("ID", id);
                    console.log("pageName", pageName);

                    socialService.getSubPage(data).then(function (res) {
                        self.page = res.data.info;

                        // $scope.$emit('mainPageFrGal', $scope.subPage); // send friend data to parent scope (MainCtrl)
                        if (pageName == "gallery")
                            $state.go('cont.gallery', {
                                userId: id
                            });
                        else if (pageName == "friends")
                            $state.go('cont.friends', {
                                userId: id
                            });
                    });

                    storageService.save('friendId', id);
                    storageService.save('friendSubPage', "mainUser"); // save mainUser flag to LS   
                }

                self.chatEnter = function (chatId, index) {
                    var chatData = {
                        "id_sender": chatId,
                        "id_owner": self.userId,
                        "sender_name": self.page.first_name + " " + self.page.second_name,
                        "sender": self.logginedData.avatar_url,
                        "reciever_url": self.page.avatar_url,
                        "chat_date": dateFormat(new Date(), 'm-d-Y h:i:s')
                    }
                    storageService.save('chatData', JSON.stringify(chatData));
                    $state.go('cont.chatUser', {
                        userId: self.userId,
                        chatId: chatId
                    });
                }

                self.deletePost = function (array_id, id) {
                    var data = { // prepare data to server send
                        "id_owner": self.userId,
                        "id": id
                    }
                    console.log("ARRAY ID", array_id);
                    socialService.deletePost(data).then(function (response) {
                        console.log(response);
                        self.page.posts.splice(array_id, 1);
                    });
                }
                self.uploadAvatar = function () {
                    var data = {
                        "id_owner": self.userId,
                        "image_url": "../src/img/users/user/avatars/", //make in server
                        "is_set": 1, //make in server
                        "sender_name": self.logginedData.first_name + " " + self.logginedData.second_name,
                        "sender_url": "../src/img/users/user/avatars/",
                        "reciever_url": "../src/img/users/user/avatars/",
                        "image_date": dateFormat(new Date(), 'm-d-Y h:i:s'),
                        "likes": 0
                    }

                    var modalInstance = $uibModal.open({
                        animation: false,
                        component: "avatar-modal",
                        resolve: {
                            data: function () {
                                return data;
                            }
                        }
                    });
                }
                self.editPage = function(){
                    console.log("hey!!!!!!!!!!!");
                    $state.go('cont.changeInfo', {
                        userId: self.userId
                    }, {
                        reload: true
                    });
                }
                // UPLOAD DATA FROM SIBLING COMPONENT(modal_avatar)
                self.response = componentService.get();
                self.$doCheck = function () {
                    if (self.response.avatar !== "") { // -> upload avatar event
                        self.page.avatar_url = self.response.avatar.data.info["global_avatars"][0].avatar_url;
                        self.page.avatars = self.response.avatar.data.info["avatars"];
                        self.parentCtrl.avatarChange(self.page.avatar_url);
                        self.response.avatar = ""
                    }
                    if (self.response.image !== "") { // -> image delete event

                        if (self.response.image["dbName"] == "gallery") { //it's gallery image
                            var data = {
                                id: self.userId,
                                pageName: "gallery"
                            }
                            socialService.getSubPage(data).then(function (response) {
                                self.page.gallery = response.data.info["gallery"];
                                console.log(response.data.info["gallery"]);
                            });
                            self.response.image = ""
                        } else { // it's avatars
                            var data = {
                                id: self.userId,
                                pageName: "uploadAvatar"
                            }
                            socialService.getSubPage(data).then(function (response) {
                                self.page.avatar_url = response.data.info["global_avatars"][0].avatar_url;
                                self.page.avatars = response.data.info["avatars"];
                                self.parentCtrl.avatarChange(self.page.avatar_url);
                            });
                        }
                        self.response.image = "";
                    }
                    if(self.response.updateAvatar !== ""){ // change avatar to current image event
                        self.page.avatar_url = self.response.updateAvatar;
                        console.log(self.response);
                        self.parentCtrl.avatarChange(self.page.avatar_url);
                        self.response.updateAvatar = "";
                    }
                }
                //UPLOAD BACKGROUND or POST (AVATAR moved to modal.avatar component) 
                self.uploadPic = function (file, id, phpFileName) {
                    var date = new Date();
                    switch (phpFileName) {
                        case 'uploadPost':
                            var data = {
                                "id_owner": self.userId,
                                "id_post": id,
                                "sender_url": self.logginedData.avatar_url,
                                "sender_name": self.logginedData.first_name + " " + self.logginedData.second_name,
                                "send_date": dateFormat(new Date(), 'm-d-Y h:i:s'),
                                "post_text": self.textarea.value,
                                "post_image": "../src/img/users/user"+self.userId+"/posts/", //make in server
                                "post_likes": 0
                            }
                            break;
                        case 'uploadBackground':
                            var data = {
                                "id": self.userId,
                                "background_url": "../src/img/users/user"+self.userId+"/backgrounds/" //make in server
                            }
                            break;
                    }
                    if (file != undefined || file != null) { //text with file or only file
                        if (file) {
                            file.upload = Upload.upload({
                                url: 'endPoints/' + phpFileName + '.php',
                                method: "POST",
                                data: {
                                    // 'targetPath' : '/src/img/users/user'+$scope.page.id+'/posts/',
                                    "dataArr": data,
                                    "file": file
                                }
                            });
                            file.upload.then(function (response) {
                                $timeout(function () {
                                    console.log("FILE RESULT", response.data);
                                    var data = {
                                        id: self.userId,
                                        pageName: phpFileName
                                    }
                                    socialService.getSubPage(data).then(function (response) {
                                        switch (phpFileName) {
                                            case 'uploadPost':
                                                self.page.posts = response.data.info;
                                                break;
                                            case 'uploadBackground':
                                                self.page.background_url = response.data.info[0].background_url;
                                                break;
                                        }
                                        if (self.textarea != null)
                                            self.textarea.value = null;
                                    });
                                });
                            }, function (response) {
                                if (response.status > 0)
                                    self.errorMsg = response.status + ': ' + response.data;
                            }, function (evt) {
                                // Math.min is to fix IE which reports 200% sometimes
                                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                            });
                        }
                    } else { //  only text (POST)
                        if (self.textarea.value != null) {
                            socialService.uploadPost(data).then(function (response) {
                                var data = {
                                    id: self.userId,
                                    pageName: "uploadPost"
                                }
                                socialService.getSubPage(data).then(function (response) {
                                    self.page.posts = response.data.info;
                                    self.textarea.value = null;
                                });
                            });
                        }
                    }
                }
            }
        ]
    });

})();