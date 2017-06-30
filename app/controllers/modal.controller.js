//factory for json load
angular.module("socialNetwork").factory('JsonLoad', function ($http) {
    return {
        getGallery: function () {
            return $http.get('/app/jsons/gallery.json');
        },
        getAvatars: function () {
            return $http.get('/app/jsons/avatars.json');
        }
    };
});

// open modal dialog
angular.module("socialNetwork").controller('OpenModalCtrl', function ($scope, Lightbox, JsonLoad) {
    'use strict';
    $scope.Lightbox = Lightbox;
    $scope.gallery, $scope.avatars = null;
    console.log(Lightbox);

    JsonLoad.getAvatars().then(function (res) {
        $scope.avatars = res.data;
    });

    JsonLoad.getGallery().then(function (res) {
        $scope.gallery = res.data;
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
angular.module("socialNetwork").controller('ModalCtrl', function ($scope) {
    $scope.toogleClass = function (class1) {
        $scope[class1] = !$scope[class1];
    };
});