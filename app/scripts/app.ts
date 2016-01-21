/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/lodash/lodash.d.ts" />


module swaggerBuilderApp {
  'use strict';


  export class SwaggerBuilderApp {

    app: ng.IModule;

    /**
     * Manual bootstrapping of the angular application
     * This method is invoked at the end of the module
     **/
    public bootstrapWhenReady() {
      angular.element(document).ready(() => {
        console.log('[' + this.app.name + '] Bootstraping');
        angular.bootstrap(document, [this.app.name]);
      });
    }


    constructor(name: string) {
      this.app = angular.module(name, [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'ngTouch',
        'ngStorage',
        'schemaForm'
      ]);

      // @ngInject
      this.app.config(function($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        // Default state
        $urlRouterProvider.otherwise('/');

        // States
        $stateProvider
          .state('public', {
            abstract: true,
            views: {
              "": {
                templateUrl: "views/layout-public.html"
              },
              "nav@public": {
                templateUrl: 'views/navbar.html',
                controller: 'NavigationCtrl'
              }
            }
          })
          .state('public.editor', {
            url: '/',
            templateUrl: 'views/editor.html',
            controller: 'EditorCtrl',
            controllerAs: 'editor'
          })
          .state('public.data', {
            url: '/',
            templateUrl: 'views/data.html',
            controller: 'DataCtrl'
          })
          .state('public.about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          });

      });

      // @ngInject
      this.app.config(function($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('swag-');
      });

      this.app.run(function(){
        // App is running
        console.debug('[APP] Running...');
      });

    }


  }

  new swaggerBuilderApp.SwaggerBuilderApp('swaggerBuilderApp').bootstrapWhenReady();

}
