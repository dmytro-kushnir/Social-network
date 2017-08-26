(function () {
    var app = angular.module("gallery", ["components"]);
    app.component("gallery", {
        templateUrl: "app/templates/gallery.html",
        controller: ["$state", "socialService", "Lightbox", "$timeout", "storageService", "Upload",
            function GalleryCtrl($state, socialService, Lightbox, $timeout, storageService, Upload) {
                /////////////////
                var self = this;
                self.page = {}
                self.userId = $state.params.userId;
                self.stateName = $state.current.name.split(".").pop();
                self.logginedId = storageService.get("userId");
                self.logginedData = JSON.parse(storageService.get("loginUserData"));
                /////////////////
                var data = {
                    id: self.userId,
                    pageName: self.stateName
                }
                socialService.getSubPage(data).then(function (response) {
                    self.page = response.data.info;
                    console.log("gallery", self.page);
                });

                self.open = function (index) {
                    Lightbox.openModal(self.page.gallery, index);
                }
                self.isLoggined = function (targetId, logginedId){
                    if(targetId == logginedId)
                        return true;
                    else 
                        return false;
                }
                self.uploadPic = function (file, id) {
                    if (file) {
                    var date = new Date();
                    var data = { // prepare data to server send
                        "id_owner": self.userId,
                        "id_image": id,
                        "image_url": "../src/img/users/user/gallery/", //make in server
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
                            self.page.gallery.unshift(response.data.info);
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