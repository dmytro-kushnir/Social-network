// open modal dialog
angular.module("socialNetwork").controller('OpenModalCtrl', function ($scope, Lightbox) {
    $scope.Lightbox = Lightbox;

    console.log(Lightbox);
    $scope.avatars = [{
        'url': '/src/img/avatar.jpg',
        'thumbUrl': '/src/img/avatar.jpg'
    }];
    $scope.gallery = [{
            'url': '/src/img/gallery/1.jpg',
            'thumbUrl': '/src/img/gallery/1.jpg',
        },
        {
            'url': '/src/img/gallery/2.jpg',
            'thumbUrl': '/src/img/gallery/2.jpg'
        },
        {
            'url': '/src/img/gallery/3.jpg',
            'thumbUrl': '/src/img/gallery/3.jpg'
        },
        {
            'url': '/src/img/gallery/4.jpg',
            'thumbUrl': '/src/img/gallery/4.jpg'
        },
        {
            'url': '/src/img/gallery/5.jpg',
            'thumbUrl': '/src/img/gallery/5.jpg'
        },
        {
            'url': '/src/img/gallery/6.jpg',
            'thumbUrl': '/src/img/gallery/6.jpg'
        },
         {
            'url': '/src/img/gallery/7.jpg',
            'thumbUrl': '/src/img/gallery/7.jpg'
        },
         {
            'url': '/src/img/gallery/8.jpg',
            'thumbUrl': '/src/img/gallery/8.jpg'
        },
         {
            'url': '/src/img/gallery/9.jpg',
            'thumbUrl': '/src/img/gallery/9.jpg'
        },
         {
            'url': '/src/img/gallery/10.jpg',
            'thumbUrl': '/src/img/gallery/10.jpg'
        },
         {
            'url': '/src/img/gallery/11.jpg',
            'thumbUrl': '/src/img/gallery/11.jpg'
        },
         {
            'url': '/src/img/gallery/12.jpg',
            'thumbUrl': '/src/img/gallery/12.jpg'
        },
         {
            'url': '/src/img/gallery/13.jpg',
            'thumbUrl': '/src/img/gallery/13.jpg'
        }
     
    ];
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