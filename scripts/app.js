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
    .when('/afbmagazine', {
        templateUrl: 'views/afbmagazine.html',
        controller: 'AfbmagazineCtrl',
        controllerAs: 'afbmagazine'
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
    .when('/thankyou', {
        templateUrl: 'views/thankyou.html',
        controller: 'ThankyouCtrl',
        controllerAs: 'thankyou'
      })
    .when('/tutor', {
        templateUrl: 'views/tutor.html',
        controller: 'TutorCtrl',
        controllerAs: 'tutor'
      })
    .when('/intern', {
        templateUrl: 'views/intern.html',
        controller: 'InternCtrl',
        controllerAs: 'intern'
      })
    .when('/sponsor', {
        templateUrl: 'views/sponsor.html',
        controller: 'SponsorCtrl',
        controllerAs: 'sponsor'
      })
    .when('/newsletter', {
        templateUrl: 'views/newsletter.html',
        controller: 'NewsletterCtrl',
        controllerAs: 'newsletter'
      })
    .when('/oursponsors', {
        templateUrl: 'views/oursponsors.html',
        controller: 'OursponsorsCtrl',
        controllerAs: 'oursponsors'
      })
    .when('/userRegistration', {
        templateUrl: 'views/userRegistration.html',
        controller: 'UserRegistrationCtrl',
        controllerAs: 'userRegistration'
      })
    .when('/eventsCarousel', {
        templateUrl: 'views/eventsCarousel.html',
        controller: 'EventsCarouselCtrl',
        controllerAs: 'eventsCarousel'
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