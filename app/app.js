(function () {
    var app = angular.module("socialNetwork", ["social-directives", "ngRoute", "Controllers"]);

    app.controller('MainCtrl', function () {

    });


    app.controller('ModalCtrl', function ($scope) {
        $scope.toogleClass = function (class1) {
            $scope[class1] = !$scope[class1];
        };
         
     
    });
    
})();