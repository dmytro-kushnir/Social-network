// rendering page controller
app.controller('UserPageCtrl', function ($scope, $state, $rootScope, socialService, storageService, Upload, $timeout) {
    'use strict';

    var localStorageID = storageService.get('userPageId');

    socialService.pageRender(localStorageID).then(function (res) {
        console.log("userPage POST", res.data.info);
        $scope.friend = res.data.info;

         $scope.$emit('friendName', res.data.info.first_name + " " + res.data.info.second_name); // send friend data to parent scope (MainCtrl)
         $scope.$emit('friendAvatar', res.data.info.avatar_url); // send friend data to parent scope (MainCtrl)
    // $rootScope.userName = res.data.info.first_name + " " + res.data.info.second_name;
        // storageService.save('friendName', res.data.info.first_name + " " + res.data.info.second_name);
    });


    $scope.textAreaFlag = true;// for post send validation 
    $scope.imageFlag = true;
   console.log($scope.textarea);
    $scope.textarea = {};

    $scope.deletePost = function(array_id,id){
        var data = { // prepare data to server send
            "id_owner": localStorageID,
            "id": id
        }
        console.log("ARRAY ID", array_id);
        socialService.deletePost(data).then(function(response){
            console.log(response);
            $scope.friend.posts.splice(array_id, 1);
        });
    }

    $scope.uploadPic = function (file, id) {
        var date = new Date();
        var data = { // prepare data to server send
            "id_owner": localStorageID,
            "id_post": id,
            "sender_url":storageService.get("userUrl"),
            "sender_name":storageService.get("userName"), 
            "send_date": dateFormat(new Date(), 'm-d-Y h:i:s'), 
            "post_text":$scope.textarea.value,
            "post_image":"../src/img/users/friend100002/posts/", //make in server
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
                $scope.friend.posts.unshift(response.data.info);
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
        console.log("DATA",data);
        socialService.uploadPost(data).then(function(response){
            console.log(response);
            if($scope.friend.posts.length > 1)
            $scope.friend.posts.unshift(response.data.info);
            else
                $scope.friend.posts.push(response.data.info);
        });
    }
    }

// friends or gallery of userPage
    $scope.userPageFrGal = function (id, pageName) {
        
        var data = {
            id: id,
            pageName: pageName
        }
        console.log("ID", id);
        console.log("pageName", pageName);

        socialService.getSubPage(data).then(function (res) {
            $scope.subPage = res.data.info;
            console.log("friend POST", $scope.subPage);

            $scope.$emit('userPageFrGal', $scope.subPage); // send friend data to parent scope (MainCtrl)

            if (pageName == "gallery")
                $state.go('cont.userGallery');
            else if (pageName == "friends")
                $state.go('cont.userFriends');
        });
    }
});