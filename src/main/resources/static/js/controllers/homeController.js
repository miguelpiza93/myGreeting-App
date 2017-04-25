/**
 * HomeController
 */
var app = angular.module('helloApp');

var homeController = function($scope, $http) {

	$scope.getGreeting = function() {

		$http.post('/greeting', {
			name : $scope.name
		}).then(function(response) {
			$scope.greeting = response.data;
		}, function(error) {
			console.log(error);
		})
		
	};

	$scope.isOpen = false;
	$scope.demo = {
		isOpen : false,
		count : 0,
		selectedDirection : 'rigth'
	};
}

app.controller("homeController", ["$scope", "$http", homeController]);