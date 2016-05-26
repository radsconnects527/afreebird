angular.module('freebirdApp')
  .controller('MainCtrl', ['$scope', '$location', '$http', '$rootScope', '$timeout', function ($scope, $location, $http, $rootScope, $timeout) {
	  $scope.changeSettings = function() {
		  $rootScope.navigate('/changeSettings');
	  }
	  
	  $scope.showBetaDiv = true;
	  
	  $scope.onColorcomClick = function() {
		  if($rootScope.isCouchCoach || $rootScope.isListener) {
			  $rootScope.navigate('/home');
		  } else {
			  $rootScope.navigate('');
		  }
	  }
	  
	  
  
}]);