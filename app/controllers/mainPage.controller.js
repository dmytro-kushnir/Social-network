// rendering page controller
app.controller('MainCtrl', function ($rootScope, $scope, JsonLoad, JsonFriend) {
    'use strict';

    // Завантаження сторінки 
    JsonLoad.getPage().then(function (res) {
        console.log(res);
        $scope.page = [];
        $scope.page = res.data;
        $scope.carouselIndex = 1; // щоб сладйер починався з другого індексу
    });

    // повернення до розділв користувача по кліку
      $scope.return = function(answer){
          JsonLoad.returnHome(answer).then(function(res) {
            $scope.page = res.data;
            console.log(res.data);
            $scope.carouselIndex = 1; // щоб сладйер починався з другого індексу
        });
      }


    // Завантаження сторінки друга при кліку 
    $scope.response = {};
    $scope.reqFriend = function (answer) {
       
        // console.log(`friend index is ${$scope.friendId}`);
        JsonFriend.requestPage(answer).then(function(res) {
            $scope.friend = res.data;
            $scope.page = $scope.friend;
            console.log(res.data);
            $rootScope.friendName = $scope.friend.firstName;
            // $rootScope.friendId = $scope.friend.id;
                       
        });

    }
    
    // Функція входження в чат по індексу
    $scope.chatEnter = function (chatId) {
        $scope.chatId = chatId;
        console.log(`chat index is ${$scope.chatId}`);
        $rootScope.chatTitle = $scope.page.chat[chatId].chatName;
    };
});