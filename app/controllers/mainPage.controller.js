

// loads all text data into mainPage
   app.controller('MainCtrl', function ($rootScope, $scope, JsonLoad) {
    'use strict';
    JsonLoad.getPage().then(function(res){
        $scope.page = [];
        $scope.page = res.data;
        $scope.carouselIndex = 1;
        $scope.banner = {
            "bg": $scope.page.backgroundUrl // because background we use as a div
        };
        console.log( $scope.page.avatars);
        // $rootScope.mainPageTitle = $scope.page.firstName + " " + $scope.page.secondName;
        console.log($rootScope);
    });
  
$scope.chatEnter = function(taskId){
    $scope.chatId = taskId;
    console.log(`taskId ${$scope.chatId}`);
    $rootScope.chatTitle = $scope.page.chat[taskId].chatName;
  };
});