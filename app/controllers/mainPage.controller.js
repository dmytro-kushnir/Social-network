(function () {
    // renderinf user controller
    app.controller('MainPageCtrl', function ($scope, JsonLoad, storageService) {
        'use strict';
        // load main USER page
        JsonLoad.getPage().then(function (res) {
            console.log("mainPage GET", res);
            $scope.page = [];
            $scope.page = res.data;

            storageService.save('userName', res.data.firstName + " " + res.data.secondName);

            $scope.carouselIndex = 1; // щоб сладйер починався з другого індексу
            
            $scope.$emit('user', res.data);
            storageService.save('user', res.data);
        });


    });

})();