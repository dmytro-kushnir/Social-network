

// rendering page controller
   app.controller('MainCtrl', function ($rootScope, $scope, JsonLoad, JsonFriend) {
    'use strict';

    // Завантаження сторінки 
    JsonLoad.getPage().then(function(res){
        console.log(res);
        $scope.page = [];
        $scope.page = res.data;
        $scope.carouselIndex = 1; // щоб сладйер починався з другого індексу
        $scope.banner = {
            "bg": $scope.page.backgroundUrl // because background we use as a div
        };
        console.log( $scope.page.avatars);
        // $rootScope.mainPageTitle = $scope.page.firstName + " " + $scope.page.secondName;
        console.log($rootScope);
    });

    // Завантаження друга при кліку 
    //При удачной обработке ответа метод success(function (answ) 
    //отправленный сервером объект answ и устанавливает его в качестве значения $scope.response
    $scope.response={};
    $scope.save = function (answer){

    JsonFriend.requestPage().then(function success(response){
     
        $scope.page = response.data;
           console.log(response.data);
    });

    }

    // Функція входження в чат по індексу

$scope.chatEnter = function(chatId){
    $scope.chatId = chatId;
    console.log(`chat index is ${$scope.chatId}`);
    $rootScope.chatTitle = $scope.page.chat[chatId].chatName;
  };
});