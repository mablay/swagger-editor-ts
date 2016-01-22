/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {

  export interface ISchemaMessage extends ng.IScope {
    schema: any;
    form: any;
    model: any;
    addParameter(type:string):void;
  }

  export class SchemaMessage implements ng.IDirective {

    templateUrl = 'views/schema-message.html';
    restrict = 'A';
    scope = {
      schema: '=schemaMessage',
      model: '=',
      path: '@',
      method: '@'
    }

    link = (scope: ISchemaMessage, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {

      // Define dynamic form fields
      scope.form = ["summary", "description"];

      // Ensure model data integrity
      scope.model.parameters = scope.model.parameters || [];
      scope.model.tags = scope.model.tags || [];
      scope.model.responses = scope.model.responses || [];


      // Add dynamic field
      scope.addParameter = (type:string) => {
        console.debug('[AddParameter] type %s', type);
        var parameterSchema = {
          type: type
        };
        scope.model.parameters.push(parameterSchema);
      };

      console.log('[SchemaMessage] model %o', scope.model);

    }


  }

  export function schemaMessageFactory() {
    return new swaggerBuilderApp.SchemaMessage();
  }

}

angular.module('swaggerBuilderApp')
  .directive('schemaMessage', swaggerBuilderApp.schemaMessageFactory);
