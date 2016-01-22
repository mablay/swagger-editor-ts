/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {

  export class DfArray implements ng.IDirective {
    template = '<div></div>';
    restrict = 'E';
    link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
      element.text('this is the dfArray directive');
    }
  }

  export function dfArrayFactory() {
    return new swaggerBuilderApp.DfArray();
  }

}

angular.module('swaggerBuilderApp')
  .directive('dfArray', swaggerBuilderApp.dfArrayFactory);
