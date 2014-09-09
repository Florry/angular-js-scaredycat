'use strict';

/**
 * @ngdoc service
 * @name scaredycatApp.usernameFactory
 * @description
 * # usernameFactory
 * Factory in the scaredycatApp.
 */
angular.module('scaredycatApp')
	.factory('usernameFactory', function ($http) {
		var username = "",
			lastScore = 0;
		return {
			getUsername: function () {
				return username;
			},
			setUsername: function (user) {
				username = user;
			},
			setScore: function (score) {
				lastScore = score;
				$http.put("http://scaredycat.beta2.se/highscores/" + username, {
					name: username,
					score: lastScore
				});
			},
			getScore: function () {
				return lastScore;
			}
		};
	});