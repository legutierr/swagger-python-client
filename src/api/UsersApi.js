(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/User', '../model/Error', '../model/EditUser', '../model/NewUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'), require('../model/Error'), require('../model/EditUser'), require('../model/NewUser'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerBlendedHubApiExplorer) {
      root.SwaggerBlendedHubApiExplorer = {};
    }
    root.SwaggerBlendedHubApiExplorer.UsersApi = factory(root.SwaggerBlendedHubApiExplorer.ApiClient, root.SwaggerBlendedHubApiExplorer.User, root.SwaggerBlendedHubApiExplorer.Error, root.SwaggerBlendedHubApiExplorer.EditUser, root.SwaggerBlendedHubApiExplorer.NewUser);
  }
}(this, function(ApiClient, User, Error, EditUser, NewUser) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 1.0
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the usersPkGet operation.
     * @callback module:api/UsersApi~usersPkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get data for the User account with value pk.
     * @param {Integer} pk package pk.
     * @param {String} sessionkey user session.
     * @param {module:api/UsersApi~usersPkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.usersPkGet = function(pk, sessionkey, callback) {
      var postBody = null;

      // verify the required parameter 'pk' is set
      if (pk == undefined || pk == null) {
        throw "Missing the required parameter 'pk' when calling usersPkGet";
      }

      // verify the required parameter 'sessionkey' is set
      if (sessionkey == undefined || sessionkey == null) {
        throw "Missing the required parameter 'sessionkey' when calling usersPkGet";
      }


      var pathParams = {
        'pk': pk
      };
      var queryParams = {
      };
      var headerParams = {
        'sessionkey': sessionkey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users/{pk}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersPkPut operation.
     * @callback module:api/UsersApi~usersPkPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User data.
     * @param {Integer} pk package pk.
     * @param {String} sessionkey user session.
     * @param {module:model/EditUser} user the content of the request used to update user data.
     * @param {module:api/UsersApi~usersPkPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.usersPkPut = function(pk, sessionkey, user, callback) {
      var postBody = user;

      // verify the required parameter 'pk' is set
      if (pk == undefined || pk == null) {
        throw "Missing the required parameter 'pk' when calling usersPkPut";
      }

      // verify the required parameter 'sessionkey' is set
      if (sessionkey == undefined || sessionkey == null) {
        throw "Missing the required parameter 'sessionkey' when calling usersPkPut";
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw "Missing the required parameter 'user' when calling usersPkPut";
      }


      var pathParams = {
        'pk': pk
      };
      var queryParams = {
      };
      var headerParams = {
        'sessionkey': sessionkey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{pk}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersPost operation.
     * @callback module:api/UsersApi~usersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an User.
     * @param {module:model/NewUser} user the content of the request used to create user.
     * @param {module:api/UsersApi~usersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.usersPost = function(user, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw "Missing the required parameter 'user' when calling usersPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
