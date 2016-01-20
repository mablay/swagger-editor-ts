/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {
  export interface IMainScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MainCtrl {
    // @ngInject
    constructor (private $scope: IMainScope) {

      console.log('[MAIN] Constructor');

    }
  }
}

angular.module('swaggerBuilderApp')
  .controller('MainCtrl', swaggerBuilderApp.MainCtrl);
