var app = angular.module('myApp', [
  'ngRoute',
  'app.controllers'
]);
app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/save", {
        templateUrl : "./views/insert.html",
        controller: 'insertController'
    })
    .when("/list", {
        templateUrl : "./views/list.html",
        controller: 'listController'
    })
	 .when("/", {
        templateUrl : "./views/list.html",
        controller: 'listController'
    })
    .otherwise({redirectTo :'/'});
});

app.run(['$rootScope',function($rootScope){

}]);

app.constant('SETTINGS_SYSTEM', {
  vehiclesApi: '/projetasapi/vehicles'
})
