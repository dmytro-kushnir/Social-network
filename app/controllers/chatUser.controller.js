app.controller("chatUserCtrl", function($state, $scope, $window){
 
if (performance.navigation.type == 1) { // if page reload
    $state.go("mainContainer.chat",{},{reload: "mainContainer.chat"});
}

    var width = $window.innerWidth;
    if(width < 767){
        $scope.tabletMode = true;
    }
    
});