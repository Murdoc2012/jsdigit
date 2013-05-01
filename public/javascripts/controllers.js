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

function LoginCtrl($scope) {
	console.log('loginctrl in use');
	$scope.username = '';
	$scope.password = '';
	
	$scope.logon = function(){
		console.log('loggin in: ' + $scope.username + ":" + $scope.password);
	};
};
