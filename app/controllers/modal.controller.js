

// open modal dialog
angular.module("socialNetwork").controller('OpenModalCtrl', function ($scope, Lightbox) {
    $scope.images = [{
            'url': '/src/img/avatar.jpg',
            'thumbUrl': '/src/img/avatar.jpg' // used only for this example
        }
    ];

    $scope.openLightboxModal = function (index) {
        console.log(index);
        Lightbox.openModal($scope.images, index);
    };

});
angular.module('socialNetwork').config(function (LightboxProvider) {
  // set a custom template
  LightboxProvider.templateUrl = '/app/templates/modal.html';
});


// swapping blocks in modal window
angular.module("socialNetwork").controller('ModalCtrl', function ($scope) {
    $scope.toogleClass = function (class1) {
        $scope[class1] = !$scope[class1];
    };
});