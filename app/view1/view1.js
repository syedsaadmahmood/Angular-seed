'use strict';

/*angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
*/


var myApp = angular.module('myApp.view1', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/view1');
    
    $stateProvider

        .state('view1', {
            url: '/view1',
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
});
    
myApp.controller('View1Ctrl', [function() {

}]);