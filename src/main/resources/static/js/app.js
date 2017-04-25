var myApp = angular.module('helloApp', [ 'ui.router' ]);

var constantes = {
	templateUrl: '../views/'
};

myApp.constant('appConstants', constantes);

var router = function($stateProvider, $urlRouterProvider, appConstants) {
	
	$urlRouterProvider.otherwise('/');
	
	var homeState = {
		name : 'home',
		url : '/',
		templateUrl :  appConstants.templateUrl + 'greeting/greeting.html',
		controller: 'homeController'
	}
	
	var aboutState = {
		name : 'about',
		url : '/about',
		templateUrl :  appConstants.templateUrl + 'about/about.html',
		controller: 'homeController'
	}	

	$stateProvider.state(homeState);
	$stateProvider.state(aboutState);
}

myApp.config(['$stateProvider', '$urlRouterProvider', 'appConstants', router]);