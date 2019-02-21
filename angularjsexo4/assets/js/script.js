var app = angular.module('myApp', []);
 app.controller('voitureCtrl', function($scope, $http) {
  $http.get("voiture.json").then(function(res) {
 $scope.voiture = res.data;
  });
});

// <html ng-app="testApp">
// <head>
//     <title>AngularJS ng-if child scopes example</title>
//     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
// </head>
// <body ng-controller="testController">
//
//     <div ng-if="isFalse">
//         {{$parent.name}}
//     </div>
//
//     <p>{{name}}</p>
//
//     <div ng-if="isTrue">
//         <p>{{$parent.name}}</p>
//     </div>
//
//     <script src="script.js"></script>
// </body>
// </html>
// var testApp = angular.module('testApp', []);
// testApp.controller('testController' , function ($scope) {
//
//     $scope.isTrue = false;
//
//     $scope.name = "Elliot";
//
// });
