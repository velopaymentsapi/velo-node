"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse409"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse412"));

var _InviteUserRequest = _interopRequireDefault(require("../model/InviteUserRequest"));

var _PagedUserResponse = _interopRequireDefault(require("../model/PagedUserResponse"));

var _PasswordRequest = _interopRequireDefault(require("../model/PasswordRequest"));

var _PayeeUserSelfUpdateRequest = _interopRequireDefault(require("../model/PayeeUserSelfUpdateRequest"));

var _RegisterSmsRequest = _interopRequireDefault(require("../model/RegisterSmsRequest"));

var _ResendTokenRequest = _interopRequireDefault(require("../model/ResendTokenRequest"));

var _RoleUpdateRequest = _interopRequireDefault(require("../model/RoleUpdateRequest"));

var _SelfMFATypeUnregisterRequest = _interopRequireDefault(require("../model/SelfMFATypeUnregisterRequest"));

var _SelfUpdatePasswordRequest = _interopRequireDefault(require("../model/SelfUpdatePasswordRequest"));

var _UnregisterMFARequest = _interopRequireDefault(require("../model/UnregisterMFARequest"));

var _UserDetailsUpdateRequest = _interopRequireDefault(require("../model/UserDetailsUpdateRequest"));

var _UserResponse = _interopRequireDefault(require("../model/UserResponse"));

var _UserStatus = _interopRequireDefault(require("../model/UserStatus"));

var _UserType = _interopRequireDefault(require("../model/UserType"));

var _ValidatePasswordResponse = _interopRequireDefault(require("../model/ValidatePasswordResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 2.23.78
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteUserByIdV2 operation.
   * @callback module:api/UsersApi~deleteUserByIdV2Callback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a User
   * Delete User by Id. 
   * @param {String} userId The UUID of the User.
   * @param {module:api/UsersApi~deleteUserByIdV2Callback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(UsersApi, [{
    key: "deleteUserByIdV2",
    value: function deleteUserByIdV2(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserByIdV2");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/{userId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the disableUserV2 operation.
     * @callback module:api/UsersApi~disableUserV2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable a User
     * <p>If a user is enabled this endpoint will disable them </p> <p>The invoker must have the appropriate permission </p> <p>A user cannot disable themself </p> <p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p> 
     * @param {String} userId The UUID of the User.
     * @param {module:api/UsersApi~disableUserV2Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "disableUserV2",
    value: function disableUserV2(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling disableUserV2");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/{userId}/disable', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the enableUserV2 operation.
     * @callback module:api/UsersApi~enableUserV2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable a User
     * <p>If a user has been disabled this endpoints will enable them </p> <p>The invoker must have the appropriate permission </p> <p>A user cannot enable themself </p> <p>If the user is a payor user and the payor is disabled this operation is not allowed</p> <p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p> 
     * @param {String} userId The UUID of the User.
     * @param {module:api/UsersApi~enableUserV2Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "enableUserV2",
    value: function enableUserV2(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling enableUserV2");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/{userId}/enable', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSelf operation.
     * @callback module:api/UsersApi~getSelfCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Self
     * Get the user's details 
     * @param {module:api/UsersApi~getSelfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponse}
     */

  }, {
    key: "getSelf",
    value: function getSelf(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserResponse["default"];
      return this.apiClient.callApi('/v2/users/self', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserByIdV2 operation.
     * @callback module:api/UsersApi~getUserByIdV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User
     * Get a Single User by Id. 
     * @param {String} userId The UUID of the User.
     * @param {module:api/UsersApi~getUserByIdV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponse}
     */

  }, {
    key: "getUserByIdV2",
    value: function getUserByIdV2(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserByIdV2");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserResponse["default"];
      return this.apiClient.callApi('/v2/users/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the inviteUser operation.
     * @callback module:api/UsersApi~inviteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invite a User
     * Create a User and invite them to the system 
     * @param {module:model/InviteUserRequest} inviteUserRequest Details of User to invite
     * @param {module:api/UsersApi~inviteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "inviteUser",
    value: function inviteUser(inviteUserRequest, callback) {
      var postBody = inviteUserRequest; // verify the required parameter 'inviteUserRequest' is set

      if (inviteUserRequest === undefined || inviteUserRequest === null) {
        throw new Error("Missing the required parameter 'inviteUserRequest' when calling inviteUser");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/invite', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listUsers operation.
     * @callback module:api/UsersApi~listUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedUserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Users
     * Get a paginated response listing the Users
     * @param {Object} opts Optional parameters
     * @param {module:model/UserType} opts.type The Type of the User.
     * @param {module:model/UserStatus} opts.status The status of the User.
     * @param {String} opts.entityId The entityId of the User.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=email:asc,lastName:asc) Default is email:asc 'name' The supported sort fields are - email, lastNmae.  (default to 'email:asc')
     * @param {module:api/UsersApi~listUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedUserResponse}
     */

  }, {
    key: "listUsers",
    value: function listUsers(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'type': opts['type'],
        'status': opts['status'],
        'entityId': opts['entityId'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PagedUserResponse["default"];
      return this.apiClient.callApi('/v2/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the registerSms operation.
     * @callback module:api/UsersApi~registerSmsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register SMS Number
     * <p>Register an Sms number and send an OTP to it </p> <p>Used for manual verification of a user </p> <p>The backoffice user initiates the request to send the OTP to the user's sms </p> <p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p> 
     * @param {module:model/RegisterSmsRequest} registerSmsRequest a SMS Number to send an OTP to
     * @param {module:api/UsersApi~registerSmsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "registerSms",
    value: function registerSms(registerSmsRequest, callback) {
      var postBody = registerSmsRequest; // verify the required parameter 'registerSmsRequest' is set

      if (registerSmsRequest === undefined || registerSmsRequest === null) {
        throw new Error("Missing the required parameter 'registerSmsRequest' when calling registerSms");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/registration/sms', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resendToken operation.
     * @callback module:api/UsersApi~resendTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend a token
     * <p>Resend the specified token </p> <p>The token to resend must already exist for the user </p> <p>It will be revoked and a new one issued</p> 
     * @param {String} userId The UUID of the User.
     * @param {module:model/ResendTokenRequest} resendTokenRequest The type of token to resend
     * @param {module:api/UsersApi~resendTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "resendToken",
    value: function resendToken(userId, resendTokenRequest, callback) {
      var postBody = resendTokenRequest; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling resendToken");
      } // verify the required parameter 'resendTokenRequest' is set


      if (resendTokenRequest === undefined || resendTokenRequest === null) {
        throw new Error("Missing the required parameter 'resendTokenRequest' when calling resendToken");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/{userId}/tokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the roleUpdate operation.
     * @callback module:api/UsersApi~roleUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Role
     * <p>Update the user's Role</p> 
     * @param {String} userId The UUID of the User.
     * @param {module:model/RoleUpdateRequest} roleUpdateRequest The Role to change to
     * @param {module:api/UsersApi~roleUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "roleUpdate",
    value: function roleUpdate(userId, roleUpdateRequest, callback) {
      var postBody = roleUpdateRequest; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling roleUpdate");
      } // verify the required parameter 'roleUpdateRequest' is set


      if (roleUpdateRequest === undefined || roleUpdateRequest === null) {
        throw new Error("Missing the required parameter 'roleUpdateRequest' when calling roleUpdate");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/{userId}/roleUpdate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the unlockUserV2 operation.
     * @callback module:api/UsersApi~unlockUserV2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlock a User
     * If a user is locked this endpoint will unlock them 
     * @param {String} userId The UUID of the User.
     * @param {module:api/UsersApi~unlockUserV2Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "unlockUserV2",
    value: function unlockUserV2(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling unlockUserV2");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/{userId}/unlock', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the unregisterMFA operation.
     * @callback module:api/UsersApi~unregisterMFACallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister MFA for the user
     * <p>Unregister the MFA device for the user </p> <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p> 
     * @param {String} userId The UUID of the User.
     * @param {module:model/UnregisterMFARequest} unregisterMFARequest The MFA Type to unregister
     * @param {module:api/UsersApi~unregisterMFACallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "unregisterMFA",
    value: function unregisterMFA(userId, unregisterMFARequest, callback) {
      var postBody = unregisterMFARequest; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling unregisterMFA");
      } // verify the required parameter 'unregisterMFARequest' is set


      if (unregisterMFARequest === undefined || unregisterMFARequest === null) {
        throw new Error("Missing the required parameter 'unregisterMFARequest' when calling unregisterMFA");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/{userId}/mfa/unregister', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the unregisterMFAForSelf operation.
     * @callback module:api/UsersApi~unregisterMFAForSelfCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister MFA for Self
     * <p>Unregister the MFA device for the user </p> <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p> 
     * @param {module:model/SelfMFATypeUnregisterRequest} selfMFATypeUnregisterRequest The MFA Type to unregister
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer token authorization leg of validate
     * @param {module:api/UsersApi~unregisterMFAForSelfCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "unregisterMFAForSelf",
    value: function unregisterMFAForSelf(selfMFATypeUnregisterRequest, opts, callback) {
      opts = opts || {};
      var postBody = selfMFATypeUnregisterRequest; // verify the required parameter 'selfMFATypeUnregisterRequest' is set

      if (selfMFATypeUnregisterRequest === undefined || selfMFATypeUnregisterRequest === null) {
        throw new Error("Missing the required parameter 'selfMFATypeUnregisterRequest' when calling unregisterMFAForSelf");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/self/mfa/unregister', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updatePasswordSelf operation.
     * @callback module:api/UsersApi~updatePasswordSelfCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Password for self
     * Update password for self 
     * @param {module:model/SelfUpdatePasswordRequest} selfUpdatePasswordRequest The password
     * @param {module:api/UsersApi~updatePasswordSelfCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updatePasswordSelf",
    value: function updatePasswordSelf(selfUpdatePasswordRequest, callback) {
      var postBody = selfUpdatePasswordRequest; // verify the required parameter 'selfUpdatePasswordRequest' is set

      if (selfUpdatePasswordRequest === undefined || selfUpdatePasswordRequest === null) {
        throw new Error("Missing the required parameter 'selfUpdatePasswordRequest' when calling updatePasswordSelf");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/self/password', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userDetailsUpdate operation.
     * @callback module:api/UsersApi~userDetailsUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Details
     * <p>Update the profile details for the given user</p> <p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p> 
     * @param {String} userId The UUID of the User.
     * @param {module:model/UserDetailsUpdateRequest} userDetailsUpdateRequest The details of the user to update
     * @param {module:api/UsersApi~userDetailsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "userDetailsUpdate",
    value: function userDetailsUpdate(userId, userDetailsUpdateRequest, callback) {
      var postBody = userDetailsUpdateRequest; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userDetailsUpdate");
      } // verify the required parameter 'userDetailsUpdateRequest' is set


      if (userDetailsUpdateRequest === undefined || userDetailsUpdateRequest === null) {
        throw new Error("Missing the required parameter 'userDetailsUpdateRequest' when calling userDetailsUpdate");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/{userId}/userDetailsUpdate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userDetailsUpdateForSelf operation.
     * @callback module:api/UsersApi~userDetailsUpdateForSelfCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Details for self
     * <p>Update the profile details for the given user</p> <p>Only Payee user types are supported</p> 
     * @param {module:model/PayeeUserSelfUpdateRequest} payeeUserSelfUpdateRequest The details of the user to update
     * @param {module:api/UsersApi~userDetailsUpdateForSelfCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "userDetailsUpdateForSelf",
    value: function userDetailsUpdateForSelf(payeeUserSelfUpdateRequest, callback) {
      var postBody = payeeUserSelfUpdateRequest; // verify the required parameter 'payeeUserSelfUpdateRequest' is set

      if (payeeUserSelfUpdateRequest === undefined || payeeUserSelfUpdateRequest === null) {
        throw new Error("Missing the required parameter 'payeeUserSelfUpdateRequest' when calling userDetailsUpdateForSelf");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/users/self/userDetailsUpdate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the validatePasswordSelf operation.
     * @callback module:api/UsersApi~validatePasswordSelfCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidatePasswordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate the proposed password
     * validate the password and return a score 
     * @param {module:model/PasswordRequest} passwordRequest The password
     * @param {module:api/UsersApi~validatePasswordSelfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidatePasswordResponse}
     */

  }, {
    key: "validatePasswordSelf",
    value: function validatePasswordSelf(passwordRequest, callback) {
      var postBody = passwordRequest; // verify the required parameter 'passwordRequest' is set

      if (passwordRequest === undefined || passwordRequest === null) {
        throw new Error("Missing the required parameter 'passwordRequest' when calling validatePasswordSelf");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ValidatePasswordResponse["default"];
      return this.apiClient.callApi('/v2/users/self/password/validate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;