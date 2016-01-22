/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {

  export class DfString implements ng.IDirective {
    templateUrl = 'views/df-string.html';
    restrict = 'A';
    scope = {
      model: '=dfString'
    }
    link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
      console.log('[DFSTRING] link %o', scope.model);
    }
  }

  export function dfStringFactory() {
    return new swaggerBuilderApp.DfString();
  }

}

angular.module('swaggerBuilderApp')
  .directive('dfString', swaggerBuilderApp.dfStringFactory);
