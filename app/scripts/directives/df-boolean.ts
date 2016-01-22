/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {

  export class DfBoolean implements ng.IDirective {
    template = '<div></div>';
    restrict = 'E';
    link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
      element.text('this is the dfBoolean directive');
    }
  }

  export function dfBooleanFactory() {
    return new swaggerBuilderApp.DfBoolean();
  }

}

angular.module('swaggerBuilderApp')
  .directive('dfBoolean', swaggerBuilderApp.dfBooleanFactory);
