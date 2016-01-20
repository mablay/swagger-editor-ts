/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {
  export interface IDataScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class DataCtrl {
    // @ngInject
    constructor (private $scope: IDataScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('swaggerBuilderApp')
  .controller('DataCtrl', swaggerBuilderApp.DataCtrl);
