'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scUserInput
 * @description
 * # scUserInput
 */
angular.module('scaredycatApp')
	.directive('scUserInput', function () {
		return {
			template: '<input name="username" ng-model="userinput" placeholder="username" class="form-control"/>' +
				'<span class="input-group-btn">' +
				'<button class="btn-lg btn-primary" ng-click="start(userinput)">' +
				'START' +
				'</button>' +
				'</span>',
			scope: {
				username: "="
			},
			restrict: 'E',
			controller: function ($scope) {
				$scope.start = function (user) {
					$scope.username = user;
				};
			}
		};
	});