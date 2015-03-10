'use strict';

angular.module('louisw', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/angular-material', {
        templateUrl: 'app/blog/angular-material.html',
        controller: 'MainCtrl'
      })
      .when('/blog/rest-api', {
        templateUrl: 'app/blog/rest-api.html',
        controller: 'MainCtrl'
      })
      .when('/projects', {
        templateUrl: 'app/projects/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
