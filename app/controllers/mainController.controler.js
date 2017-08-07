(function () {
    // rendering page controller
    app.controller('MainCtrl', function (
        $rootScope,
        $timeout,
        $state,
        $scope,
        JsonLoad,
        storageService,
        AuthService
    ) {

        'use strict';
        $scope.carouselIndex = 1; // щоб сладйер починався з другого індексу

        //logout in header
        $scope.logOut = function () {
            console.log("LogOut");
            AuthService.clearCredentials();
        }

        // return to main USER page onclick
        $scope.return = function (id, pageName) {
            var data = {
                id: id,
                pageName: pageName
            }
            console.log("ID", id);
            console.log("pageName", pageName);

            JsonLoad.returnHome(data).then(function (res) {
                $scope.subPage = res.data.info;
                console.log("subPage POST", $scope.subPage);
            });
            storageService.save('friendId', id);
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

        // get data from child ctrl registration
        $scope.$on('logIn', function (event, data) {
            $scope.page = data;
            console.log("emit logIn", $scope.page);

            storageService.save('userName', data.first_name + " " + data.second_name);
            storageService.save('userMain', JSON.stringify(data));
            storageService.save('userId', data.id);
        });
        // get data from child ctrl userPage
        $scope.$on('friend', function (event, data) {
            $scope.page = data;
            storageService.save('userFriend', JSON.stringify(data));
            console.log("emit data FRIEND", $scope.page);
        });
        // get data from child ctrl userPage
        $scope.$on('userPageFrGal', function (event, data) {
            $scope.subPage = data;
            storageService.save('friendSubPage', data); //-> friends
        });
        // get data from child ctrl mainPage
        $scope.$on('mainPageFrGal', function (event, data) {
            console.log(data);
            $scope.subPage = data;
            storageService.save('friendSubPage', data); //-> mainUser
        });
        // save current state and watch it change
        $scope.currState = $state;
        $scope.$watch('currState.current.name', function (newValue, oldValue) {
            switch (newValue) {
                case 'mainContainer.mainPage':
                    JsonLoad.getPage().then(function (res) {
                        console.log("mainPage POST", res);
                        $scope.page = [];
                        $scope.page = res.data.info;

                    });
                    break;
                case 'mainContainer.friends':
                case 'mainContainer.gallery':
                    if (performance.navigation.type == 1) { // if page reload

                        var userId = storageService.get('userId');
                        console.log("USER ID ", userId);
                        var userData = {
                            id: userId,
                            pageName: "mainPage"
                        }
                        // load id , url and first name of user
                        JsonLoad.returnHome(userData).then(function (res) {
                            $scope.page = res.data.info;
                            console.log("loggined page reload POST", res.data.info);
                        });


                        // console.log("POP", newValue.split(".").pop()); mainContainer.gallery -> gallery
                        var localStorageID = storageService.get('friendId');
                        console.log("localStorageID: ", localStorageID);

                        var data = {
                            id: localStorageID,
                            pageName: newValue.split(".").pop()
                        }

                        JsonLoad.returnHome(data).then(function (res) {
                            $scope.subPage = res.data.info;
                            console.log("subPage reload POST", $scope.subPage);

                        });
                    }
                    break;
                case 'mainContainer.userPage':
                    if (performance.navigation.type == 1) { // if page reload
                        var userId = storageService.get('userId');
                        console.log("USER ID ", userId);
                        var userData = {
                            id: userId,
                            pageName: "mainPage"
                        }
                        // load id , url and first name of user
                        JsonLoad.returnHome(userData).then(function (res) {
                            $scope.page = res.data.info;
                            console.log("loggined page reload POST", res.data.info);
                        });
                    }
                    break;
            }
        });
    });
})();