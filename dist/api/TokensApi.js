"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _ResendTokenRequest = _interopRequireDefault(require("../model/ResendTokenRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Tokens service.
* @module api/TokensApi
* @version 2.23.78
*/
var TokensApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TokensApi. 
  * @alias module:api/TokensApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TokensApi(apiClient) {
    _classCallCheck(this, TokensApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the resendToken operation.
   * @callback module:api/TokensApi~resendTokenCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Resend a token
   * <p>Resend the specified token </p> <p>The token to resend must already exist for the user </p> <p>It will be revoked and a new one issued</p> 
   * @param {String} userId The UUID of the User.
   * @param {module:model/ResendTokenRequest} resendTokenRequest The type of token to resend
   * @param {module:api/TokensApi~resendTokenCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(TokensApi, [{
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
  }]);

  return TokensApi;
}();

exports["default"] = TokensApi;