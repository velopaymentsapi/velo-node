"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateFundingAccountRequestV = _interopRequireDefault(require("../model/CreateFundingAccountRequestV2"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse409"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* FundingManagerPrivate service.
* @module api/FundingManagerPrivateApi
* @version 2.26.127
*/
var FundingManagerPrivateApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FundingManagerPrivateApi. 
  * @alias module:api/FundingManagerPrivateApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FundingManagerPrivateApi(apiClient) {
    _classCallCheck(this, FundingManagerPrivateApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createFundingAccountV2 operation.
   * @callback module:api/FundingManagerPrivateApi~createFundingAccountV2Callback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Funding Account
   * Create Funding Account
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateFundingAccountRequestV2} opts.createFundingAccountRequestV2 
   * @param {module:api/FundingManagerPrivateApi~createFundingAccountV2Callback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(FundingManagerPrivateApi, [{
    key: "createFundingAccountV2",
    value: function createFundingAccountV2(opts, callback) {
      opts = opts || {};
      var postBody = opts['createFundingAccountRequestV2'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/fundingAccounts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteSourceAccountV3 operation.
     * @callback module:api/FundingManagerPrivateApi~deleteSourceAccountV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a source account by ID
     * Mark a source account as deleted by ID
     * @param {String} sourceAccountId Source account id
     * @param {module:api/FundingManagerPrivateApi~deleteSourceAccountV3Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteSourceAccountV3",
    value: function deleteSourceAccountV3(sourceAccountId, callback) {
      var postBody = null; // verify the required parameter 'sourceAccountId' is set

      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling deleteSourceAccountV3");
      }

      var pathParams = {
        'sourceAccountId': sourceAccountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/sourceAccounts/{sourceAccountId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return FundingManagerPrivateApi;
}();

exports["default"] = FundingManagerPrivateApi;