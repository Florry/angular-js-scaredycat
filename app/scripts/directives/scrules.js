'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scRules
 * @description
 * # scRules
 */
angular.module('scaredycatApp')
	.directive('scRules', function () {
		return {
			template: '<p>' +
				'<h2>Rules</h2>' +
				'<ul>' +
				'<h3>Lorem ipsum dolor sit amet</h3>' +
				'<li>Morbi tempus ligula sit amet nisl consectetur condimentum.</li>' +
				'<li>Sed condimentum nibh hendrerit aliquam placerat.</li>' +
				'<li>Ut ut est in orci dictum pulvinar egestas eu lectus.</li>' +
				'<li>Donec vitae felis vitae urna dapibus ornare at vel ligula.</li>' +
				'<li>Integer laoreet dolor imperdiet, molestie mauris nec, porttitor en+im.</li>' +
				'<li>Proin et leo sit amet velit faucibus pharetra a in nisi.</li>' +
				'<h3>Aliquam rutrum</h3>' +
				'<li>Quisque ut arcu vestibulum nunc viverra pellentesque quis eu mi.</li>' +
				'<li>Quisque rhoncus odio consectetur sem malesuada, quis viverra dolor fermentum.</li>' +
				'<li>Integer sodales nibh at porta pharetra.</li>' +
				'<li>Praesent ut orci nec velit bibendum ultrices sit amet ac libero.</li>' +
				'<li>Etiam luctus turpis vitae ante malesuada lacinia ut non diam.</li>' +
				'<li>Aliquam vel purus et tellus ultrices rhoncus.</li>' +
				'<li>In et urna nec nulla semper imperdiet in ac ipsum.</li>' +
				'<li>Aenean molestie arcu eu magna pellentesque, et sodales nisi tincidunt.</li>' +
				'<li>Aliquam pharetra ante fringilla urna imperdiet, ut faucibus urna semper.</li>' +
				'<li>Nunc pulvinar lectus eu blandit auctor.</li>' +
				'</ul>' +
				'</p>',
			restrict: 'E'
		};
	});