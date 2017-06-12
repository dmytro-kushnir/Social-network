
    // swapping blocks in modal window
    angular.module("socialNetwork").controller('ModalCtrl', function ($scope) {
        $scope.toogleClass = function (class1) {
            $scope[class1] = !$scope[class1];
        };
    });