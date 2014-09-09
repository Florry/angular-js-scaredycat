'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scCard
 * @description
 * # scCard
 */
angular.module('scaredycatApp')
	.directive('scCard', function () {
		return {
			scope: {
				cardType: "="
			},
			template: '<div class="frame clearfix"><div ng-class="cardType" class="card"></div></div>',
			restrict: 'E',
			controller: function ($scope) {}
		};
	});