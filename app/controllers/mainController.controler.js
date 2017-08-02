(function () {
    // rendering page controller
    app.controller('MainCtrl', function (
        $rootScope, 
        $timeout, 
        $state, 
        $scope, 
        JsonLoad, 
        JsonFriend, 
        storageService,
        AuthService
        ) {

        'use strict';
        $scope.carouselIndex = 1; // щоб сладйер починався з другого індексу

     AuthService.authenticate("dimaKush@gmail.com","qwerty", function(tmp){
            console.log(tmp);
            storageService.save('authStorage', JSON.stringify(tmp)); //-> mainUser
        });

     var temp = JSON.parse(storageService.get('authStorage'));
     
     console.log(temp);

    AuthService.setCredentials();
    AuthService.isAuthenticated();

        // return to main USER page onclick
        $scope.return = function (answer) {
            JsonLoad.returnHome(answer).then(function (res) {
                $scope.page = res.data;
                console.log("mainPage POST", res.data);
            });
            storageService.save('friendSubPage', "mainUser"); // save mainUser flag to LS 
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
            storageService.save('userFriend', JSON.stringify(data));
            console.log("emit data FRIEND", $scope.page);
        });
        // get data from child ctrl userPage
        $scope.$on('userPageFrGal', function (event, data) {
            storageService.save('friendSubPage', data); //-> friends
        });
        // get data from child ctrl mainPage
        $scope.$on('mainPageFrGal', function (event, data) {
            storageService.save('friendSubPage', data); //-> mainUser
        });


        // var stateNew, stateOld = "";
        // stateNew = storageService.get('stateNew');
        // stateOld = storageService.get('stateOld');
        // console.log("Local storage NEW:", stateNew);
        // console.log("Local storage OLD:", stateOld);

        // save current state and watch it change
        $scope.currState = $state;
        $scope.$watch('currState.current.name', function (newValue, oldValue) {
            // console.log(newValue);//current value
            // console.log(oldValue);//previous value
            // storageService.save('stateNew', newValue);
            // storageService.save('stateOld', oldValue);

            switch (newValue) {
                case 'mainContainer.mainPage':
                    JsonLoad.getPage().then(function (res) {
                        console.log("mainPage GET", res);
                        $scope.page = [];
                        $scope.page = res.data;
                        storageService.save('userName', res.data.firstName + " " + res.data.secondName);
                        storageService.save('userMain', JSON.stringify(res.data));
                    });
                    break;
                case 'mainContainer.friends':
                case 'mainContainer.gallery':
                    if (performance.navigation.type == 1) { // if page reload
                        var friendsSelected = storageService.get("friendSubPage"); //get data state from LS
                        console.log(friendsSelected);
                        if (friendsSelected == "friends") { // it's UserPage friends/gallery
                            var userFriend = storageService.get("userFriend");
                            $scope.page = JSON.parse(userFriend);
                        } else if (friendsSelected == "mainUser") { // it's Mainpage friends/gallery
                            var localStorageUser = storageService.get('userMain');
                            $scope.page = JSON.parse(localStorageUser);
                        } else { // mainPage friends by default
                            var localStorageUser = storageService.get('userMain');
                            $scope.page = JSON.parse(localStorageUser);
                        }
                    }
                    break;
                    // case 'mainContainer.userPage':
                    // if (performance.navigation.type == 2) { // if back forward
                    //     console.log("say hi!");
                    // }
                    // break;
                    // default: // something went wrong, got to mainPage
                    // var localStorageUser = storageService.get('userMain');
                    //     $scope.page = JSON.parse(localStorageUser);
                    //     break;
            }
        });

        // var perfData = window.performance.timing; 
        // var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        // var connectTime = perfData.responseEnd - perfData.requestStart;
        // console.log("connectTime",connectTime);
        // console.log("pageLoadTime",pageLoadTime);
        // console.log("perfData",perfData);
    });

})();