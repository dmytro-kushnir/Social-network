(function () {
    "use strict";
    var app = angular.module("gallery", ["components", "image-modal"]);
    app.component("gallery", {
        templateUrl: "app/templates/gallery.html",
        controller: ["$state", "socialService", "$timeout", "storageService", "Upload",'$uibModal','componentService',
            function GalleryCtrl($state, socialService, $timeout, storageService, Upload, $uibModal,componentService) {
                /////////////////
                var self = this;
                self.page = {}
                self.userId = $state.params.userId;
                self.stateName = $state.current.name.split(".").pop();
                self.logginedId = storageService.get("userId");
                self.logginedData = JSON.parse(storageService.get("loginUserData"));
                /////////////////
                console.log(angular.element(document.getElementById("hey")));
                var data = {
                    id: self.userId,
                    pageName: self.stateName
                }
                socialService.getSubPage(data).then(function (response) {
                    self.page = response.data.info;
                    console.log("gallery", self.page);
                    console.log(self.page.gallery[0].image_url.split('.').pop() == 'jpg');
                    
                   
                });

                self.open = function (index) {
                    var modalInstance = $uibModal.open({
                        animation: false,
                        component: "image-modal",
                        resolve: {
                          image: function() {
                            return self.page.gallery;
                          },
                          index: function(){
                              return index;
                          },
                          dbName: function () {
                              return 'gallery'
                          }
                        }
                      });
                }
                self.isLoggined = function (targetId, logginedId){
                    if(targetId == logginedId)
                        return true;
                    else 
                        return false;
                }
                 // UPLOAD DATA FROM SIBLING COMPONENT(modal_avatar)
                 self.response = componentService.get();
                 self.$doCheck = function () {
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
                         } 
                         self.response.image = ""
                     }
                 }
                //  UPLOAD IMAGE
                self.uploadPic = function (file, id) {
                    if (file) {
                    var date = new Date();
                    var data = { // prepare data to server send
                        "id_owner": self.userId,
                        "id_image": id,
                        "image_url": "/src/img/users/user"+self.userId+"/gallery/", //make in server
                        "sender_name": self.logginedData.first_name + " " + self.logginedData.second_name,
                        "sender_url": self.logginedData.avatar_url,
                        "reciever_url": self.logginedData.avatar_url,
                        "image_date": dateFormat(new Date(), 'm-d-Y h:i:s'),
                        "likes": 0
                    }
                    file.upload = Upload.upload({
                        url: 'endPoints/uploadImage.php',
                        method: "POST",
                        file: file,
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
                                pageName: "gallery"
                            }
                            socialService.getSubPage(data).then(function (response) {
                                console.log(response);
                                self.page.gallery = response.data.info["gallery"];
                                console.log(response.data.info["gallery"]);
                            });
                        });
                    }, function (response) {
                        if (response.status > 0)
                            self.errorMsg = response.status + ': ' + response.data;
                        console.log(self.errorMsg);
                    }, function (evt) {
                        // Math.min is to fix IE which reports 200% sometimes
                        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });
                }
                }
            }
        ]
    });
})();