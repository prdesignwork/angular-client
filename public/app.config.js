(function() {
  'use strict';

  angular.module('app').config(config).constant('APP_CONFIG',{
    API_BASE_URL: 'http://ec2-35-164-169-232.us-west-2.compute.amazonaws.com/'
  })

  config.$inject = ['$stateProvider', '$locationProvider', "$authProvider"]

  function config($stateProvider, $locationProvider, $authProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'about',
        url: '/',
        component: 'about'
      })
      .state({
        name: 'dashboard',
        url: '/dashboard',
        component: 'dashboard'
      })
      .state({
        name: 'addFood',
        url: '/dashboard/addFood',
        component: 'addFood'
      })

    $authProvider.facebook({
      name: 'facebook',
      url: 'http://ec2-35-164-169-232.us-west-2.compute.amazonaws.com/auth/facebook',
      clientId: '1034756833322079',
      authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      redirectUri: window.location.origin + '/dashboard',
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      scopeDelimiter: ',',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 580, height: 400 }
    });
  }

})();
