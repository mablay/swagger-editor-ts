/// <reference path="../app.ts" />

"use strict";

module swaggerBuilderApp {

  export interface ISchemaScope extends ng.IScope {
    schema: any;
    form: any;
    model: any;
  }

  export class SchemaMqtt implements ng.IDirective {

    constructor(public storage) {} // attach storage

    templateUrl = 'views/schema-mqtt.html';
    restrict = 'A';
    scope = {
      schema: '=schemaMqtt',
      model: '='
    }


    link = (scope: ISchemaScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {

      scope.form = [
        "info.title",
        { "key": "info.description", "type": "textarea" },
        "info.version",
        "host",
        "basePath"
      ];

      // hard code some model data (this will not be shown to the user, but must be in the model)
      scope.model.schemes = ['mqtt'];
      scope.model.swagger = '2.0'

    }
  }

  // @ngInject
  export function schemaMqttFactory($localStorage) {
    return new swaggerBuilderApp.SchemaMqtt($localStorage);
  }

}

angular.module('swaggerBuilderApp')
  .directive('schemaMqtt', swaggerBuilderApp.schemaMqttFactory);
