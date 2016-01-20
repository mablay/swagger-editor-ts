/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {
	export interface INavigationScope extends ng.IScope {
		menuItems: any[];
	}

	export class NavigationCtrl {
		// @ngInject
		constructor(private $scope: INavigationScope) {
			$scope.menuItems = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];

			console.debug('[NAV] Init');

		}
	}
}

angular.module('swaggerBuilderApp')
	.controller('NavigationCtrl', swaggerBuilderApp.NavigationCtrl);

