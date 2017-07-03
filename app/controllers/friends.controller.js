app.controller("FriendsCtrl", function($scope, JsonLoad){
    $scope.friends = null;
    JsonLoad.getUsers().then(function(res){
        $scope.friends = res.data;
    });
});