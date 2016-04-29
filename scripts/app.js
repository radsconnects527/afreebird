'use strict';

/**
 * @ngdoc overview
 * @name couchcoachApp
 * @description
 * # couchcoachApp
 *
 * Main module of the application.
 */
angular
  .module('freebirdApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
    .when('/ksk', {
        templateUrl: 'views/ksk.html',
        controller: 'KskCtrl',
        controllerAs: 'ksk'
      })
    .when('/dream', {
        templateUrl: 'views/dream.html',
        controller: 'DreamCtrl',
        controllerAs: 'dream'
      })
    .when('/fightfree', {
        templateUrl: 'views/fightfree.html',
        controller: 'FightfreeCtrl',
        controllerAs: 'fightfree'
      })
    .when('/inspiration', {
        templateUrl: 'views/inspiration.html',
        controller: 'InspirationCtrl',
        controllerAs: 'inspiration'
      })
    .when('/thankyou', {
        templateUrl: 'views/thankyou.html',
        controller: 'ThankyouCtrl',
        controllerAs: 'thankyou'
      })
    .when('/doctorscorner', {
        templateUrl: 'views/doctorscorner.html',
        controller: 'DoctorscornerCtrl',
        controllerAs: 'doctorscorner'
      })
    .when('/freepro', {
        templateUrl: 'views/freepro.html',
        controller: 'FreeproCtrl',
        controllerAs: 'freepro'
      })
    .when('/volunteer', {
        templateUrl: 'views/volunteer.html',
        controller: 'VolunteerCtrl',
        controllerAs: 'volunteer'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.run(function($rootScope, $location, $http) {
    $rootScope.navigate = function(loc) {
    
    		$location.path(loc);
    }
});