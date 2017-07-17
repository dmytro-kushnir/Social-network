// rendering page controller
app.controller('UserPageCtrl', function ($scope, $state, $rootScope, JsonFriend, storageService) {
    'use strict';

    var localStorageID = storageService.get('friendId');
    // if (performance.navigation.type == 1) {

    // $state.go("mainContainer.mainPage",{},{reload: "mainContainer.mainPage"});
    //   console.log("Rootscope friend.id on reload: "+$rootScope.friendId);

    JsonFriend.requestPage(localStorageID).then(function (res) {
        storageService.save('friendName', res.data.firstName + " " + res.data.secondName);

        $scope.friend = res.data;
        $scope.$emit('friend', res.data); // send friend data to parent scope (MainCtrl)
        
    });
    // }
    //  else {
    //    console.log("Rootscope friend.id: "+$rootScope.friendId);

    // }
    $scope.userPageFrGal = function(){
        console.log("gallery or frineds from userPage opened!");
       
         $scope.$emit('userPageFrGal', "friends"); // send friend data to parent scope (MainCtrl)
    }
});