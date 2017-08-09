// rendering page controller
app.controller('UserPageCtrl', function ($scope, $state, $rootScope, JsonLoad, storageService) {
    'use strict';

    var localStorageID = storageService.get('pageId');


    JsonLoad.renderUserPage(localStorageID).then(function (res) {
        console.log("userPage POST", res.data.info);
        $scope.friend = res.data.info;

        // $scope.$emit('friend', res.data.info); // send friend data to parent scope (MainCtrl)

        storageService.save('friendName', res.data.info.first_name + " " + res.data.info.second_name);
    });


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
                $state.go('mainContainer.gallery');
            else if (pageName == "friends")
                $state.go('mainContainer.friends');
        });
    }
});