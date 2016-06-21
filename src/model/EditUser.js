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
    root.SwaggerBlendedHubApiExplorer.EditUser = factory(root.SwaggerBlendedHubApiExplorer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EditUser model module.
   * @module model/EditUser
   * @version 1.0
   */

  /**
   * Constructs a new <code>EditUser</code>.
   * @alias module:model/EditUser
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>EditUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditUser} obj Optional instance to populate.
   * @return {module:model/EditUser} The populated <code>EditUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('old_password')) {
        obj['old_password'] = ApiClient.convertToType(data['old_password'], 'String');
      }
      if (data.hasOwnProperty('new_password')) {
        obj['new_password'] = ApiClient.convertToType(data['new_password'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('reset_token')) {
        obj['reset_token'] = ApiClient.convertToType(data['reset_token'], 'String');
      }
      if (data.hasOwnProperty('activation_token')) {
        obj['activation_token'] = ApiClient.convertToType(data['activation_token'], 'String');
      }
      if (data.hasOwnProperty('deactivate')) {
        obj['deactivate'] = ApiClient.convertToType(data['deactivate'], 'String');
      }
    }
    return obj;
  }


  /**
   * user current password for change password.
   * @member {String} old_password
   */
  exports.prototype['old_password'] = undefined;

  /**
   * user account new password for change password.
   * @member {String} new_password
   */
  exports.prototype['new_password'] = undefined;

  /**
   * user Email ID.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * new password of user for reset password.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;

  /**
   * token used to reset user password.
   * @member {String} reset_token
   */
  exports.prototype['reset_token'] = undefined;

  /**
   * token used to activate user account.
   * @member {String} activation_token
   */
  exports.prototype['activation_token'] = undefined;

  /**
   * boolean value to deactivate user account.
   * @member {String} deactivate
   */
  exports.prototype['deactivate'] = undefined;




  return exports;
}));
