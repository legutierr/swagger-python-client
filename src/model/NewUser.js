(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerBlendedHubApiExplorer) {
      root.SwaggerBlendedHubApiExplorer = {};
    }
    root.SwaggerBlendedHubApiExplorer.NewUser = factory(root.SwaggerBlendedHubApiExplorer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NewUser model module.
   * @module model/NewUser
   * @version 1.0
   */

  /**
   * Constructs a new <code>NewUser</code>.
   * @alias module:model/NewUser
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>NewUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewUser} obj Optional instance to populate.
   * @return {module:model/NewUser} The populated <code>NewUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('user_name')) {
        obj['user_name'] = ApiClient.convertToType(data['user_name'], 'String');
      }
    }
    return obj;
  }


  /**
   * user name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * user account password.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;

  /**
   * user Email ID.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * unique name of user,used to login.
   * @member {String} user_name
   */
  exports.prototype['user_name'] = undefined;




  return exports;
}));
