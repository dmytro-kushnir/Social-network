

// loads all text data into mainPage
   app.controller('MainCtrl', function ($scope, JsonLoad) {
    'use strict';
    JsonLoad.getPage().then(function(res){
        $scope.page = [];
        $scope.page = res.data;
        $scope.banner = {
            "bg": $scope.page.backgroundUrl // because background we use as a div
        };
        console.log( $scope.page);
    });
  
});