'use strict';
angular.module('scaredycatApp')
	.controller('ResultsCtrl', function ($scope, usernameFactory, $http, highscore) {
		$scope.score = usernameFactory.getScore();
		$scope.highscore = highscore;
	});