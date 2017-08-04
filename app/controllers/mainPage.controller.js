(function () {
    app.controller('MainPageCtrl', function ($scope, JsonLoad, storageService) {
        'use strict';
        $scope.mainPageFrGal = function () {
            console.log("gallery or frineds from mainPage opened!");

            $scope.$emit('mainPageFrGal', "mainPage"); // send friend data to parent scope (MainCtrl)
        }
    });
})();