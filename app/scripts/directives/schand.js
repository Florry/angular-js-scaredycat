'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:sdHand
 * @description
 * # sdHand
 */
angular.module('scaredycatApp')
	.directive('scHand', function () {
		return {
			scope: {
				playerName: "=",
				cards: "="
			},
			template: '<div class="clearfix hand"><div><h3>{{playerName}}s hand: </h3></div><sc-card card-type="card" ng-repeat="card in cards track by $index"></sc-card></div>',
			restrict: 'E',
			link: function postLink(scope) {
				scope = scope;
			}
		};
	});