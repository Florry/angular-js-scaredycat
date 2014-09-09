'use strict';
angular.module('scaredycatApp')
	.controller('MainCtrl', function ($scope, $location, usernameFactory) {
		$scope.user = "";
		$scope.$watch('user', function (newValue) {
			if (newValue !== "" && newValue !== undefined) {
				usernameFactory.setUsername($scope.user);
				$location.path("/game");
			}
		});
	});