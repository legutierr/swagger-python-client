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
    root.SwaggerBlendedHubApiExplorer.User = factory(root.SwaggerBlendedHubApiExplorer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The User model module.
   * @module model/User
   * @version 1.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('pk')) {
        obj['pk'] = ApiClient.convertToType(data['pk'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('registered_date')) {
        obj['registered_date'] = ApiClient.convertToType(data['registered_date'], 'String');
      }
      if (data.hasOwnProperty('user_name')) {
        obj['user_name'] = ApiClient.convertToType(data['user_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('organizations')) {
        obj['organizations'] = ApiClient.convertToType(data['organizations'], Object);
      }
      if (data.hasOwnProperty('activeorganization')) {
        obj['activeorganization'] = ApiClient.convertToType(data['activeorganization'], Object);
      }
    }
    return obj;
  }


  /**
   * current object reference url
   * @member {String} href
   */
  exports.prototype['href'] = undefined;

  /**
   * unique id of user account.
   * @member {Integer} pk
   */
  exports.prototype['pk'] = undefined;

  /**
   * user account status.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * name of the user.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * account creation date.
   * @member {String} registered_date
   */
  exports.prototype['registered_date'] = undefined;

  /**
   * unique value of the user account.
   * @member {String} user_name
   */
  exports.prototype['user_name'] = undefined;

  /**
   * email id of user.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * object to get user organization.
   * @member {Object} organizations
   */
  exports.prototype['organizations'] = undefined;

  /**
   * user to get user's active organization.
   * @member {Object} activeorganization
   */
  exports.prototype['activeorganization'] = undefined;




  return exports;
}));
