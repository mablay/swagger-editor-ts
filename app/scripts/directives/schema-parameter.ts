/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {

  export class SchemaParameter implements ng.IDirective {

    templateUrl = 'views/schema-parameter.html';
    restrict = 'A';
    scope = {
      model: '=schemaParameter'   // this directive takes the model directly
    }

    link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
      console.log('[schemaParameter] model %o', scope.model);

      scope.form = ['*'];
      scope.schema = {
        type: "object",
        properties: {
          name: {
            title: "Name",
            type: "string",
            placeholder: "string field"
          },
          description: {
            type: "string",
            title: "Description",
            "x-schema-form": {
              "type": "textarea"
            }
          },
          required: {
            type: "boolean",
            title: "Required",
            default: true
          },
          in: {
            title: "Location",
            type: "string",
            enum: ["query", "header", "path", "formData", "body"],
            default: "query"
          }
        }
      };

    }
  }

  export function schemaParameterFactory() {
    return new swaggerBuilderApp.SchemaParameter();
  }

}

angular.module('swaggerBuilderApp')
  .directive('schemaParameter', swaggerBuilderApp.schemaParameterFactory);
