(function () {
    app.controller('MainPageCtrl', function ($scope, $state, JsonLoad, storageService, Upload, $timeout) {
        'use strict';
        $scope.textAreaFlag = true;// for post send validation 
        $scope.imageFlag = true;
       console.log($scope.textarea);
        $scope.textarea = {};

        $scope.deletePost = function(id){
            var data = { // prepare data to server send
                "id_owner": storageService.get("userId"),
                "id_post": id
            }
            JsonLoad.deletePost(data).then(function(response){
                console.log(response);
                $scope.page.posts.splice(id, 1);
            });
        }

        $scope.uploadPic = function (file, id) {
            var date = new Date();
            var data = { // prepare data to server send
                "id_owner": storageService.get("userId"),
                "id_post": id,
                "sender_url":"../src/img/users/user/avatars/2.jpg",
                "sender_name":storageService.get("userName"), 
                "send_date": dateFormat(new Date(), 'm-d-Y h:i:s'), 
                "post_text":$scope.textarea.value, 
                "post_link":"", // make in server
                "post_image":"../src/img/users/user/posts/", //make in server
                "post_likes":0 
            }
            
            if(file != undefined || file != null){ //text with file or only file
            file.upload = Upload.upload({
                url: 'endPoints/uploadPost.php',
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
                    $scope.page.posts.push(response.data.info);
                    console.log("ADD POST", $scope.page);
                    // file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                // Math.min is to fix IE which reports 200% sometimes
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
                       
            }
        else{ //  only text
            console.log($scope.textarea);
            JsonLoad.uploadPost(data).then(function(response){
                console.log(response);
                $scope.page.posts.push(response.data.info);
            });
        }
        }

        $scope.mainPageFrGal = function (id, pageName) {
            var data = {
                id: id,
                pageName: pageName
            }
            console.log("ID", id);
            console.log("pageName", pageName);

            JsonLoad.returnHome(data).then(function (res) {
                $scope.subPage = res.data.info;
                console.log("subPage POST", $scope.subPage);

                $scope.$emit('mainPageFrGal', $scope.subPage); // send friend data to parent scope (MainCtrl)

                if (pageName == "gallery")
                    $state.go('mainContainer.gallery');
                else if (pageName == "friends")
                    $state.go('mainContainer.friends');
            });


            storageService.save('friendId', id);
            storageService.save('friendSubPage', "mainUser"); // save mainUser flag to LS 

        }
    });
})();