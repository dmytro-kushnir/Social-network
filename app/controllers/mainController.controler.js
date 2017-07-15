(function () {
    // rendering page controller
    app.controller('MainCtrl', function ($rootScope, $timeout, $state, $scope, JsonLoad, JsonFriend, storageService) {

        'use strict';
        // return to main USER page onclick
        $scope.return = function (answer) {
            JsonLoad.returnHome(answer).then(function (res) {
                $scope.page = res.data;
                console.log("mainPage POST", res.data);
                $scope.carouselIndex = 1; // slider start index 1
            });
        }

        // load userPage onclick
        $scope.reqFriend = function (answer) {
            // save friendId to localStorage
            storageService.save('friendId', answer);
        }

        // load chatUser onclick 
        $scope.chatEnter = function (chatId) {
            $scope.chatId = chatId;
            console.log(`chat index is ${$scope.chatId}`);
            $rootScope.chatTitle = $scope.page.chat[chatId].chatName;
        };

        // get data from child ctrl userPage
        $scope.$on('friend', function (event, data) {
            $scope.page = data;
            console.log("emit data FRIEND", $scope.page);
            $scope.hey = data;

        });
        //get data from child ctrl and add it to LS
        $scope.$on('user', function (event, data) {
            storageService.save('mainUser', JSON.stringify(data));
        });
        
        // if page reload
        if (performance.navigation.type == 1) {
                   var userData = storageService.get('mainUser'); //get userData from LS to scope
                     $scope.page = JSON.parse(userData);
            
            // var choice = null;
            // $timeout(function() { 
            //    choice = $state.current.url; 
            //   var state = choice.substring(1);
            //   var userData;
            //   switch(state){
            //     case 'mainPage':{
             
            //         break;
            //     } 
            //     case 'friends':{
                         
            //         break;
            //     } 
            //     case 'gallery':{
            //         break;
            //     } 
            //     case 'chat':{
            //         break;
            //     } 
            //     default:{
            //         break;
            //     }
            //   }
            // }); 
        }

    });

})();