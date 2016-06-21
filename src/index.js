(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/EditUser', './model/Error', './model/NewUser', './model/User', './api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/EditUser'), require('./model/Error'), require('./model/NewUser'), require('./model/User'), require('./api/UsersApi'));
  }
}(function(ApiClient, EditUser, Error, NewUser, User, UsersApi) {
  'use strict';

  /**
   * A collection of Swagger documentation for the Blended Hub APIs..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SwaggerBlendedHubApiExplorer = require('./index'); // See note below*.
   * var xxxSvc = new SwaggerBlendedHubApiExplorer.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SwaggerBlendedHubApiExplorer.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SwaggerBlendedHubApiExplorer.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SwaggerBlendedHubApiExplorer.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The EditUser model constructor.
     * @property {module:model/EditUser}
     */
    EditUser: EditUser,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The NewUser model constructor.
     * @property {module:model/NewUser}
     */
    NewUser: NewUser,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
