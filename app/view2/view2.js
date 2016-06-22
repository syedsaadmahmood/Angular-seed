'use strict';

/*angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);*/

var myApp = angular.module('myApp.view2', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/view2');
    
    $stateProvider

        .state('view2', {
            url: '/view2',
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
});
    
myApp.controller('View2Ctrl', [function() {

}]);