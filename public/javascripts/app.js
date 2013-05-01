'use strict';


// Declare app level module which depends on filters, and services
angular.module('jsDigit', ['jsDigit.filters', 'jsDigit.services', 'jsDigit.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {	  
    $routeProvider.when('/home', {templateUrl: 'partials/home', controller: HomeCtrl});
    $routeProvider.when('/admin', {templateUrl: 'partials/admin', controller: AdminCtrl});
    $routeProvider.when('/viewer', {templateUrl: 'partials/viewer', controller: ViewerCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);
  }]);
