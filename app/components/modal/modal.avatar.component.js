(function () {
    var app = angular.module("main-page");
    app.component("avatarModal", {
        templateUrl: "app/templates/modalAvatar.html",
        transclude: true,
        bindings: {
            close: '&',
            resolve: '<',
            cmpName: '@'
        },
        controller: ['$state','Upload', '$timeout','socialService' ,'componentService',
            function OpenModalCtrl($state,Upload, $timeout,socialService ,componentService) {
                ///////////////
                var self = this;
                self.userId = $state.params.userId;
                console.log(self);
                self.$onInit = function () {
                    console.log(self.resolve.data);
                    self.data = self.resolve.data;
                };

                ///////////////
                // define the callback for the input change
                self.onMessageChange = () => {
                    // BOOM! We just set the Store data.
                    // No need to notify or anything!
                    componentService.set({
                        msg: self.data
                    });
                };

                self.close = function () {
                
                    // $modalInstance.dismiss(self);          
                }
                self.showCropView = function () {
                    var cropView = angular.element(document.querySelector('.cropView'));
                    cropView.addClass('cropViewShow');
                    var uploadBtn = angular.element(document.querySelector('.submitImage'));
                    uploadBtn.addClass('submitImageShow');
                }

                self.upload = function (dataUrl, name) {

                    Upload.upload({
                        url: 'endPoints/uploadAvatar.php',
                        data: {
                            "dataArr": self.data,
                            "file": Upload.dataUrltoBlob(dataUrl, name)
                        },
                    }).then(function (response) {
                        $timeout(function () {
                            console.log("FILE RESULT", response.data);
                            var data = {
                                id: self.userId,
                                pageName: 'uploadAvatar'
                            }
                            socialService.getSubPage(data).then(function (response) {
                                componentService.set({
                                    msg: response
                                });
                                       
                            });
                            
                        });
                    }, function (response) {
                        if (response.status > 0) self.errorMsg = response.status +
                            ': ' + response.data;
                    }, function (evt) {
                        self.progress = parseInt(100.0 * evt.loaded / evt.total);
                    });
                }

            }
        ]
    });
})();