app.controller("chatUserCtrl", function ($state, $scope, $window, storageService, JsonLoad) {

    var width = $window.innerWidth;
    if (width < 767) {
        $scope.tabletMode = true;
    }

});