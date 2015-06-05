'use strict';

angular.module('louisw', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial', 'gist'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog/angular-material', {
        templateUrl: 'app/blog/angular-material.html',
        controller: 'MainCtrl'
      })
      .when('/blog', {
        templateUrl: 'app/blog/main.html',
        controller: 'MainCtrl'
      })
      .when('/community', {
        templateUrl: 'app/community/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog/rest-api', {
        templateUrl: 'app/blog/rest-api.html',
        controller: 'MainCtrl'
      })
      .when('/blog/getting-started-with-highcharts-and-angular', {
        templateUrl: 'app/blog/highcharts.html',
        controller: 'HighchartsCtrl'
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
