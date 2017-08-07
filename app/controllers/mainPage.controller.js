(function () {
    app.controller('MainPageCtrl', function ($scope, $state, JsonLoad, storageService) {
        'use strict';
        $scope.mainPageFrGal = function (id, pageName) {
             var data = {
                id: id,
                pageName: pageName
            }
            console.log("ID", id);
            console.log("pageName", pageName);

            JsonLoad.returnHome(data).then(function (res) {
                $scope.subPage = res.data.info;
                console.log("subPage POST", $scope.subPage);
                
            $scope.$emit('mainPageFrGal', $scope.subPage); // send friend data to parent scope (MainCtrl)
       
             if(pageName == "gallery")
                    $state.go('mainContainer.gallery');
             else if (pageName == "friends")
                 $state.go('mainContainer.friends'); 
            });


            storageService.save('friendId', id);
            storageService.save('friendSubPage', "mainUser"); // save mainUser flag to LS 

        }
    });
})();