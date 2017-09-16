(function () {
    "use strict";
    var app = angular.module("change-info", ["components"]);
    app.component("changeInfo", {
        templateUrl: "app/templates/changeInfoUser.html",
        controller: ["$state", "$http", "socialService",
        function changeInfoCtrl ($state, $http, socialService){
            ///////
            var that = this;
            that.userId =  $state.params.userId;
            that.edit = {};
            that.updateInfo = {
                first_name: undefined,
                second_name: undefined,
                userEmail: undefined,
                birthday: undefined,
                city: undefined,
                education: undefined,
                mobile_number: undefined
            }
            //////
    
            
            socialService.editUserData(that.userId).then(function (response) {
                console.log("response:", response);
                //that.edit = response.data.info[0];
                //that.edit = response.data.info[0].concat(response.data.infoEmail[0]);
                that.edit =  Object.assign(response.data.info[0], response.data.infoEmail[0]);
               
                console.log(that.edit);
            });
            
            that.saveChange = function(){
                var data = {
                    updateInfoUser: {
                        "first_name": that.updateInfo.first_name,
                        "second_name": that.updateInfo.second_name,
                        "userId": that.userId,
                        "birthday": that.updateInfo.birthday,
                        "city":that.updateInfo.city,
                        "education":that.updateInfo.education,
                        "mobile_number": that.updateInfo.mobile_number
                    },
                    userEmail: {
                        "first_name": that.updateInfo.first_name,
                        "second_name": that.updateInfo.second_name,
                        "userEmail": that.updateInfo.userEmail
                    },
                    userId: {
                        "userId": that.userId,
                    }

                }
                console.log("SOME!!!!: ", data);
                socialService.changeUserInfo(data).then(function(res){
                    console.log(res);
                });
                
            }
        }]
    })
})();