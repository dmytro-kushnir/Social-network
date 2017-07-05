// open modal dialog
app.controller('OpenModalCtrl', function ($scope, Lightbox, JsonLoad) {
    'use strict';
    $scope.Lightbox = Lightbox;
    console.log(Lightbox);

    $scope.openAvatar = function (index) {
        Lightbox.openModal($scope.page.avatars, index);
    };
    $scope.openGallery = function (index) {
           console.log(Lightbox);
        Lightbox.openModal($scope.page.gallery, index);
    };
    $scope.openPost = function (index) {
        Lightbox.openModal($scope.page.posts, index);
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