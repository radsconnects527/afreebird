angular.module('freebirdApp')
    .controller('UserRegistrationCtrl', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope) {

            $scope.user = {};
        
            $scope.createUser = function () {
                var data =  JSON.stringify($scope.user);
          /*      $http.post("/event/createUser/", data).success(function (data, status) {
                    console.log("user created successfully");
                })*/
                console.log(data);
                

            }
            
            $scope.validatePassword = function (){
                
                console.log("fgh");
                
            }

            }]);