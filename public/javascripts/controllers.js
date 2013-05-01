'use strict';


function AppCtrl($scope, $http, $location,$templateCache) {
	console.log('appctrl in use');
	$scope.username = '';
	$scope.password = '';
	
	$scope.logon = function(){
		console.log('loggin in: ' + $scope.username + ":" + $scope.password);
		$http({method: 'POST', url: '/api/login', data : {username: $scope.username, password: $scope.password, path: $location.path()}}).
			success(function(data, status, headers, config) {
				console.log('success');
				$templateCache.removeAll();				
				$location.path('/');
			}).
			error(function(data, status, headers, config) {
				console.log('error');
			});
			
	};
	
	$scope.logout = function(){	
		$http({method: 'POST', url: '/api/logout', data : {username: $scope.username, password: $scope.password, path: $location.path()}}).
			success(function(data, status, headers, config) {
				console.log('success');
				$templateCache.removeAll();				
				$location.path('/');
			}).
			error(function(data, status, headers, config) {
				console.log('error');
			});
			
	};
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
};
