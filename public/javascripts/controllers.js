'use strict';


function AppCtrl($scope) {
	console.log('appctrl in use');
};

function HomeCtrl($scope) {
	console.log('homectrl in use');
};

function AdminCtrl($scope) {
};

function ViewerCtrl($scope) {
};

function LoginCtrl($scope, $http, $location,$templateCache) {
	console.log('loginctrl in use');
	$scope.tC = $templateCache;
	$scope.username = '';
	$scope.password = '';
	
	$scope.logon = function(){
		console.log('loggin in: ' + $scope.username + ":" + $scope.password);
		$http({method: 'POST', url: '/api/login', data : {username: $scope.username, password: $scope.password}}).
			success(function(data, status, headers, config) {
				console.log('success');
				$scope.tC.clear();
				$location.path('/');				
			}).
			error(function(data, status, headers, config) {
				console.log('error');
			});
			
	};
};
