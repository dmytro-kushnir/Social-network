// open modal dialog
app.controller('OpenModalCtrl', function ($scope, Lightbox, JsonLoad) {
    'use strict';
    $scope.Lightbox = Lightbox;
    $scope.gallery, $scope.avatars = null;
    console.log(Lightbox);

    JsonLoad.getAvatars().then(function (res) {
        $scope.avatars = res.data;
    });

    JsonLoad.getGallery().then(function (res) {
        $scope.gallery = [];
        $scope.gallery = res.data;
        $scope.carouselIndex = 1;
        console.log($scope.gallery);
    });

    $scope.openAvatar = function (index) {
        Lightbox.openModal($scope.avatars, index);
    };
    $scope.openGallery = function (index) {
        Lightbox.openModal($scope.gallery, index);
    };
});
angular.module('socialNetwork').config(function (LightboxProvider) {
    LightboxProvider.templateUrl = '/app/templates/modal.html';
});


// swapping blocks in modal window
app.controller('ModalCtrl', function ($scope) {
    $scope.toogleClass = function (class1) {
        $scope[class1] = !$scope[class1];
    };
});