'use strict';

/**
 * @ngdoc overview
 * @name ppv4App
 * @description
 * # ppv4App
 *
 * Main module of the application.
 */
angular
  .module('ppv4App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
