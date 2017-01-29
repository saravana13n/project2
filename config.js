$.mobile.linkBindingEnabled = false;
$.mobile.hashListeningEnabled = false;
var ngApp = angular.module('app', ['ngRoute']);
ngApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/create', {
        templateUrl: 'create.html',
        controller: 'createController'
      }).
      when('/view/:id', {
        templateUrl: 'view.html',
        controller: 'viewController'
      }).
      when('/edit/:id', {
        templateUrl: 'edit.html',
        controller: 'editController'
      }).
      when('/list', {
          templateUrl: 'list.html',
          controller: 'listController'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);

ngApp.directive('jqm', function($timeout) {
  return {
    link: function(scope, elm, attr) {
        $timeout(function(){
            elm.trigger('create');
        });
    }
  };
});
