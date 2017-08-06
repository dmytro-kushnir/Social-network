// rendering page controller
app.controller('UserPageCtrl', function ($scope, $state, $rootScope,JsonLoad,storageService) {
    'use strict';

    var localStorageID = storageService.get('friendId');


    JsonLoad.renderUserPage(localStorageID).then(function (res) {
        console.log("userPage POST", res.data.info);
        $scope.friend = res.data.info;
        $scope.$emit('friend', res.data.info); // send friend data to parent scope (MainCtrl)
        storageService.save('friendName', res.data.info.first_name + " " + res.data.info.second_name);
    });

    $scope.userPageFrGal = function () {
        console.log("gallery or frineds from userPage opened!");

        $scope.$emit('userPageFrGal', "friends"); // send friend data to parent scope (MainCtrl)
    }
});