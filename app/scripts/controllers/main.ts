/// <reference path="../app.ts" />

'use strict';

module ecoSimApp {
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

angular.module('ecoSimApp')
  .controller('MainCtrl', ecoSimApp.MainCtrl);
