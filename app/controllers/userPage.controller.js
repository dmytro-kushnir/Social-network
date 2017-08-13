// rendering page controller
app.controller('UserPageCtrl', function ($scope, $state, $rootScope, JsonLoad, storageService) {
    'use strict';

    var localStorageID = storageService.get('userPageId');


    JsonLoad.renderUserPage(localStorageID).then(function (res) {
        console.log("userPage POST", res.data.info);
        $scope.friend = res.data.info;

         $scope.$emit('friendName', res.data.info.first_name + " " + res.data.info.second_name); // send friend data to parent scope (MainCtrl)
         $scope.$emit('friendAvatar', res.data.info.avatar_url); // send friend data to parent scope (MainCtrl)
    // $rootScope.userName = res.data.info.first_name + " " + res.data.info.second_name;
        // storageService.save('friendName', res.data.info.first_name + " " + res.data.info.second_name);
    });

// friends or gallery of userPage
    $scope.userPageFrGal = function (id, pageName) {
        
        var data = {
            id: id,
            pageName: pageName
        }
        console.log("ID", id);
        console.log("pageName", pageName);

        JsonLoad.returnHome(data).then(function (res) {
            $scope.subPage = res.data.info;
            console.log("friend POST", $scope.subPage);

            $scope.$emit('userPageFrGal', $scope.subPage); // send friend data to parent scope (MainCtrl)

            if (pageName == "gallery")
                $state.go('mainContainer.userGallery');
            else if (pageName == "friends")
                $state.go('mainContainer.userFriends');
        });
    }
});