(function(){

// open modal dialog
app.controller('OpenModalCtrl', function ($scope, Lightbox, socialService) {
    'use strict';

    $scope.Lightbox = Lightbox;
    // console.log(Lightbox);

    $scope.openAvatar = function (index, nameSpace) {
        Lightbox.openModal($scope[nameSpace].avatars, index);
    };
    $scope.openGallery = function (index, nameSpace) {
        //    console.log(Lightbox);
           console.log(nameSpace);
        Lightbox.openModal($scope[nameSpace].gallery, index);
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

})();