/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {

  export class DfObject implements ng.IDirective {
    template = '<div></div>';
    restrict = 'E';
    link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
      element.text('this is the dfObject directive');
    }
  }

  export function dfObjectFactory() {
    return new swaggerBuilderApp.DfObject();
  }

}

angular.module('swaggerBuilderApp')
  .directive('dfObject', swaggerBuilderApp.dfObjectFactory);
