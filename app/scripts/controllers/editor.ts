/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {

  export class EditorCtrl {

    storage:any;
    /*
    schema:any;
    form:any;
    model:any;
    */

    // @ngInject
    constructor ($localStorage) {
      this.storage = $localStorage;

      /*
      this.initLocalStorageDataStructure();

      // Using angular form schema
      this.schema = this.storage.schema;
      this.form = this.storage.form;
      this.model = this.storage.model;
      */
    }

    /*
    // Init localstorage data structure if its not yet present
    initLocalStorageDataStructure():void {
      this.storage.schema = this.storage.schema || this.initSchema();
      this.storage.form = this.storage.form || this.initInfoForm();
      this.storage.model = this.storage.model || this.initModel();

    }


    addMessage(key, method):void {
      if (method == 'publish' || method == 'subscribe') {
        console.log('[Editor] Add message with key %s (%s)', key, method);


        var methodSchema = {
          type: "object",
          properties: {
            summary: {
              title: "Summary",
              type: "string"
            },
            description: {
              title: "Description",
              type: "string"
            },
            parameters: {
              type: "array",
              items: {
                name: "string",
                in: "query",
                description: "string",
                required: "boolean",
                type: "string",
                items: {
                  type: "object",
                  properties: {
                    type: "string"
                  }
                }

              }
            },
            tags: {
              type: "array",
              items: {}
            },
            responses: {
              type: "object",
              properties: {}
            }
          }
        };

        if (key in this.storage.schema.properties.paths.properties) {
          // PATH EXISTS, CHECK METHOD
          if (method in this.storage.schema.properties.paths.properties[key].properties) {
            console.warn('[EDITOR.addMessage] message already exists');
          } else {
            this.storage.schema.properties.paths.properties[key].properties[method] = methodSchema;
            this.storage.model.paths[key][method] = this.initMethodModel(); // adjust model
            console.log('[EDITOR.addMessage] added method %s to existing path %s', method, key);
          }
        } else {
          // PATH DOES NOT EXIST
          var pathSchema = {
            type: "object",
            properties: {}
          };
          pathSchema.properties[method] = methodSchema;
          this.storage.schema.properties.paths.properties[key] = pathSchema;
          console.log('[EDITOR.addMessage] added method %s to existing path %s', method, key);
          this.storage.model.paths[key] = {}; // adjust model
          this.storage.model.paths[key][method] = this.initMethodModel(); // adjust model
        }


      } else {
        console.warn('[EDITOR.addMessage]: Invalid method');
      }



    }

    initSchema():any {
      return {
        type: "object",
        properties: {
          swagger: {
            title: "Swagger Version",
            type: "string",
            default: "2.0"
          },
          host: {
            title: "Host",
            type: "string",
            description: "Name of the MQTT client"
          },
          basePath: {
            title: "Base Path",
            type: "string",
            default: "/v1/"
          },
          info: {
            type: "object",
            properties: {
              title: {
                title: "Title",
                type: "string",
                minLength: 2,
                description: "Name of the service"
              },
              description: {
                title: "Description",
                type: "string"
              },
              version: {
                title: "Version",
                type: "string",
                default: "0.0.1"
              },
              "x-extra": {
                title: "x-extra",
                type: "string",
                placeholder: "optional"
              }
            }
          },
          paths: {
            title: "messages",
            type: "object",
            properties: {}
          }
        }
      };
    }

    initInfoForm():any {
      return [
        "info.title",
        {
          "key": "info.description",
          "type": "textarea"
        },
        "info.version",
        "host",
        "basePath"
      ];
    }

    initModel():any {
      return {
        info: {},
        schemes: ["mqtt"],
        paths: {},
        definitions: {}
      }
    }

    initMethodModel():any {
      return {
        parameters: [],
        tags: [],
        responses: {}
      };
    }
    */
  }
}

angular.module('swaggerBuilderApp')
  .controller('EditorCtrl', swaggerBuilderApp.EditorCtrl);
