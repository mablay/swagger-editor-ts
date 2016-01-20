/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/data.ts" />

'use strict';

describe('Controller: DataCtrl', () => {

  // load the controller's module
  beforeEach(module('swaggerBuilderApp'));

  var DataCtrl: swaggerBuilderApp.DataCtrl,
    scope: swaggerBuilderApp.IDataScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    DataCtrl = $controller('DataCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
