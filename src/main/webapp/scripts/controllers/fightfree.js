angular.module('freebirdApp')
  .controller('FightfreeCtrl', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope) {
	  
	 $scope.numLimit=200;
$scope.readMore=function(){
$scope.numLimit=10000;
};
	
	  
  }]);