"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccessTokenResponse = _interopRequireDefault(require("../model/AccessTokenResponse"));

var _AccessTokenValidationRequest = _interopRequireDefault(require("../model/AccessTokenValidationRequest"));

var _AuthResponse = _interopRequireDefault(require("../model/AuthResponse"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _ResetPasswordRequest = _interopRequireDefault(require("../model/ResetPasswordRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Login service.
* @module api/LoginApi
* @version 2.29.128
*/
var LoginApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoginApi. 
  * @alias module:api/LoginApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoginApi(apiClient) {
    _classCallCheck(this, LoginApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the logout operation.
   * @callback module:api/LoginApi~logoutCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Logout
   * <p>Given a valid access token in the header then log out the authenticated user or client </p> <p>Will revoke the token</p> 
   * @param {module:api/LoginApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(LoginApi, [{
    key: "logout",
    value: function logout(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/logout', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resetPassword operation.
     * @callback module:api/LoginApi~resetPasswordCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset password
     * <p>Reset password </p> <p>An email with an embedded link will be sent to the receipient of the email address </p> <p>The link will contain a token to be used for resetting the password </p> 
     * @param {module:model/ResetPasswordRequest} resetPasswordRequest An Email address to send the reset password link to
     * @param {module:api/LoginApi~resetPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "resetPassword",
    value: function resetPassword(resetPasswordRequest, callback) {
      var postBody = resetPasswordRequest; // verify the required parameter 'resetPasswordRequest' is set

      if (resetPasswordRequest === undefined || resetPasswordRequest === null) {
        throw new Error("Missing the required parameter 'resetPasswordRequest' when calling resetPassword");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/password/reset', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the validateAccessToken operation.
     * @callback module:api/LoginApi~validateAccessTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * validate
     * <p>The second part of login involves validating using an MFA device</p> <p>An access token with PRE_AUTH authorities is required</p> 
     * @param {module:model/AccessTokenValidationRequest} accessTokenValidationRequest An OTP from the user's registered MFA Device 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer token authorization leg of validate
     * @param {module:api/LoginApi~validateAccessTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccessTokenResponse}
     */

  }, {
    key: "validateAccessToken",
    value: function validateAccessToken(accessTokenValidationRequest, opts, callback) {
      opts = opts || {};
      var postBody = accessTokenValidationRequest; // verify the required parameter 'accessTokenValidationRequest' is set

      if (accessTokenValidationRequest === undefined || accessTokenValidationRequest === null) {
        throw new Error("Missing the required parameter 'accessTokenValidationRequest' when calling validateAccessToken");
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
      var returnType = _AccessTokenResponse["default"];
      return this.apiClient.callApi('/v1/validate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the veloAuth operation.
     * @callback module:api/LoginApi~veloAuthCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authentication endpoint
     * Use this endpoint to obtain an access token for calling Velo Payments APIs. Use HTTP Basic Auth. String value of Basic and a Base64 endcoded string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret  (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. Basic 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529 
     * @param {Object} opts Optional parameters
     * @param {String} opts.grantType OAuth grant type. Should use 'client_credentials' (default to 'client_credentials')
     * @param {module:api/LoginApi~veloAuthCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthResponse}
     */

  }, {
    key: "veloAuth",
    value: function veloAuth(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'grant_type': opts['grantType']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AuthResponse["default"];
      return this.apiClient.callApi('/v1/authenticate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return LoginApi;
}();

exports["default"] = LoginApi;