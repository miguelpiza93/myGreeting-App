angular.module('hello', []).controller('home', function($scope, $http) {

	$scope.getGreeting = function() {

		$http.post
		( 
			'/greeting',
			{ name : $scope.name }
		).then(function(response) {
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
})