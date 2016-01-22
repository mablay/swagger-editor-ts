/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {

  export class DfNumber implements ng.IDirective {
    template = '<div></div>';
    restrict = 'E';
    link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
      element.text('this is the dfNumber directive');
    }
  }

  export function dfNumberFactory() {
    return new swaggerBuilderApp.DfNumber();
  }

}

angular.module('swaggerBuilderApp')
  .directive('dfNumber', swaggerBuilderApp.dfNumberFactory);
