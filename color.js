var app = angular.module('ColorMixer', ['ngMaterial']).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('green');
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){

 
}]);