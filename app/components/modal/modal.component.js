(function(){
    // var app = angular.module("image-modal", ["components"]);
    // app.component("imageModal",{
    //     templateUrl:"app/templates/modal.html",
    //     controller: ["$state", "Lightbox", "socialService", 
    //         function OpenModalCtrl($state, Lightbox, socialService) {  
    //             ///////////////
    //             var self = this;
    //             console.log(self);
    //             ///////////////
    //         }
    //     ]
    // });

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