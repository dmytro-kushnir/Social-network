app.controller("chatUserCtrl",[ '$scope', '$window' , function($scope, $window){
    var width = $window.innerWidth;
    if(width < 767){
        $scope.tabletMode = true;
    }
    
}]);