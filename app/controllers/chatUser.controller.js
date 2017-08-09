app.controller("chatUserCtrl", function ($state, $scope, $window, storageService, JsonLoad) {

    // if (performance.navigation.type == 1) { // if page reload
    //     // $state.go("mainContainer.chat",{},{reload: "mainContainer.chat"});
    //     var chatId = storageService.get('chatId');
    //     var userId = storageService.get('userId');
    //     console.log("CHAT ID ", chatId);
    //     var chatData = {
    //         id: userId,
    //         pageName: "chatUser",
    //         idChat : chatId,
    //     }
    //     // load id , url and first name of user
    //     JsonLoad.returnHome(chatData).then(function (res) {
    //           $scope.$emit('chatUser', res.data.info);
    //         console.log("chatUser reload POST", res.data.info);
    //     });
    // }
    // console.log($scope.subPage);

    var width = $window.innerWidth;
    if (width < 767) {
        $scope.tabletMode = true;
    }

});