// rendering page controller
app.controller('UserPageCtrl', function ($scope, $rootScope, JsonFriend) {
    'use strict';
    // if (performance.navigation.type == 1) {
    //     console.log($rootScope);
    //     JsonFriend.getFriend().then(function success(response) {
    //         $scope.friend = response.data;

    //         $scope.page = $scope.friend;

    //         console.log($scope.page);
    //         $rootScope.friendName = $scope.friend.firstName;
    //     });
    // } else {
    //     console.info("This page is not reloaded");
    // }
if (performance.navigation.type == 1) {
   JsonFriend.requestPage(100001).then(function(res) {
            $scope.friend = res.data;
            $scope.page = $scope.friend;
            console.log($scope.page);
            $rootScope.friendName = $scope.friend.firstName;
        });
        } else {
        console.info("This page is not reloaded");
    }
});