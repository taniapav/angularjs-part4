var app = angular.module('myApp', []);
 app.controller('voitureCtrl', function($scope, $http) {
  $http.get("voiture.json").then(function(res) {
 $scope.voiture = res.data;
  });
});
