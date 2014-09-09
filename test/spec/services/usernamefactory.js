'use strict';

describe('Service: usernameFactory', function () {

  // load the service's module
  beforeEach(module('scaredycatApp'));

  // instantiate service
  var usernameFactory;
  beforeEach(inject(function (_usernameFactory_) {
    usernameFactory = _usernameFactory_;
  }));

  it('should do something', function () {
    expect(!!usernameFactory).toBe(true);
  });

});
