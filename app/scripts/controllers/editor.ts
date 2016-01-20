/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {
  export interface IEditorScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class EditorCtrl {
    // @ngInject
    constructor (private $scope: IEditorScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('swaggerBuilderApp')
  .controller('EditorCtrl', swaggerBuilderApp.EditorCtrl);
