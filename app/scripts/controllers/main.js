'use strict';

/**
 * @ngdoc function
 * @name ppv4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ppv4App
 */
angular.module('ppv4App', ['ngRoute'])
  // .controller('MainCtrl', function () {
  //   this.awesomeThings = [
  //     'HTML5 Boilerplate',
  //     'AngularJS',
  //     'Karma'
  //   ];
  // })
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/work', {
        templateUrl: 'views/work.html'
      })
      .when('/services', {
        templateUrl: 'views/services.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      });
  });
