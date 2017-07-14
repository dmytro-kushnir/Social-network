(function () {


    // rendering page controller
    app.controller('MainCtrl', function ($rootScope, $scope, JsonLoad, JsonFriend, storageService) {

        'use strict';



        // return to main USER page onclick
        $scope.return = function (answer) {
            JsonLoad.returnHome(answer).then(function (res) {
                $scope.page = res.data;
                console.log("mainPage POST", res.data);
                $scope.carouselIndex = 1; // щоб сладйер починався з другого індексу
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


        $scope.$on('friend', function (event, data) { // get data from child ctrl userPage
            $scope.page = data;
            console.log("emit data FRIEND", $scope.page);
            $scope.hey = data;

        });
        $scope.$on('user', function (event, data) { //get data from child ctrl and add it to LS
            storageService.save('mainUser',JSON.stringify(data));
        });

        if (performance.navigation.type == 1) { // if page reload
          
            var userData=storageService.get('mainUser'); //get userData to scope
             $scope.page = JSON.parse(userData);
        }

    });

    app.controller('MainPageCtrl', function ($rootScope, $scope, JsonLoad, storageService) {
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