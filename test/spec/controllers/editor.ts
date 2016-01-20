/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/editor.ts" />

'use strict';

describe('Controller: EditorCtrl', () => {

  // load the controller's module
  beforeEach(module('swaggerBuilderApp'));

  var EditorCtrl: swaggerBuilderApp.EditorCtrl,
    scope: swaggerBuilderApp.IEditorScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    EditorCtrl = $controller('EditorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
