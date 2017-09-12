(function () {
    "use strict";
    var app = angular.module("change-info", ["components"]);
    app.component("changeInfo", {
        templateUrl: "app/templates/changeInfoUser.html",
        controller: ["$state", "$http", "socialService",
        function changeInfoCtrl ($state, $http, socialService){
            var that = this;
            that.userId =  $state.params.userId;
            console.log(that.userId);
            that.changeInfo = {
                firstName: undefined,
                surName: undefined,
                email: undefined,
                bDay: undefined,
                city: undefined,
                education: undefined,
                phoneNumber: undefined
            };
            socialService.editUserData(that.userId).then(function (response) {
                that.changeUserInfo={
                    first_name: undefined,
                    second_name: undefined,
                    email: undefined,
                    birthday: undefined,
                    city: undefined,
                    education: undefined,
                    mobile_number: undefined
                }
            });
            that.saveChange = function(){
                var data = {
                    info:{
                    "first_name": that.changeInfo.firstName,
                    "second_name": that.changeInfo.surName,
                    "email": that.changeInfo.email,
                    "birthday": that.changeInfo.bDay,
                    "city": that.changeInfo.city,
                    "education": that.changeInfo.education,
                    "mobile_number": that.changeInfo.phoneNumber
                    },
                    userId:{
                        id: that.userId
                    }
                }
                socialService.changeUserInfo(data).then(function(res){
                    console.log(res);
                });
                
            }
        }]
    })
})();