"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FundingAccountResponse = _interopRequireDefault(require("../model/FundingAccountResponse"));

var _FundingAccountResponse2 = _interopRequireDefault(require("../model/FundingAccountResponse2"));

var _FundingAccountType = _interopRequireDefault(require("../model/FundingAccountType"));

var _FundingRequestV = _interopRequireDefault(require("../model/FundingRequestV1"));

var _FundingRequestV2 = _interopRequireDefault(require("../model/FundingRequestV2"));

var _FundingRequestV3 = _interopRequireDefault(require("../model/FundingRequestV3"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _ListFundingAccountsResponse = _interopRequireDefault(require("../model/ListFundingAccountsResponse"));

var _ListFundingAccountsResponse2 = _interopRequireDefault(require("../model/ListFundingAccountsResponse2"));

var _ListSourceAccountResponse = _interopRequireDefault(require("../model/ListSourceAccountResponse"));

var _ListSourceAccountResponseV = _interopRequireDefault(require("../model/ListSourceAccountResponseV2"));

var _ListSourceAccountResponseV2 = _interopRequireDefault(require("../model/ListSourceAccountResponseV3"));

var _PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse = _interopRequireDefault(require("../model/PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse"));

var _SetNotificationsRequest = _interopRequireDefault(require("../model/SetNotificationsRequest"));

var _SourceAccountResponse = _interopRequireDefault(require("../model/SourceAccountResponse"));

var _SourceAccountResponseV = _interopRequireDefault(require("../model/SourceAccountResponseV2"));

var _SourceAccountResponseV2 = _interopRequireDefault(require("../model/SourceAccountResponseV3"));

var _SourceAccountType = _interopRequireDefault(require("../model/SourceAccountType"));

var _TransferRequest = _interopRequireDefault(require("../model/TransferRequest"));

var _TransferRequest2 = _interopRequireDefault(require("../model/TransferRequest2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* FundingManager service.
* @module api/FundingManagerApi
* @version 2.29.128
*/
var FundingManagerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FundingManagerApi. 
  * @alias module:api/FundingManagerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FundingManagerApi(apiClient) {
    _classCallCheck(this, FundingManagerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createAchFundingRequest operation.
   * @callback module:api/FundingManagerApi~createAchFundingRequestCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Funding Request
   * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo.
   * @param {String} sourceAccountId Source account id
   * @param {module:model/FundingRequestV1} fundingRequestV1 Body to included amount to be funded
   * @param {module:api/FundingManagerApi~createAchFundingRequestCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(FundingManagerApi, [{
    key: "createAchFundingRequest",
    value: function createAchFundingRequest(sourceAccountId, fundingRequestV1, callback) {
      var postBody = fundingRequestV1; // verify the required parameter 'sourceAccountId' is set

      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling createAchFundingRequest");
      } // verify the required parameter 'fundingRequestV1' is set


      if (fundingRequestV1 === undefined || fundingRequestV1 === null) {
        throw new Error("Missing the required parameter 'fundingRequestV1' when calling createAchFundingRequest");
      }

      var pathParams = {
        'sourceAccountId': sourceAccountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/sourceAccounts/{sourceAccountId}/achFundingRequest', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createFundingRequest operation.
     * @callback module:api/FundingManagerApi~createFundingRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Funding Request
     * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).
     * @param {String} sourceAccountId Source account id
     * @param {module:model/FundingRequestV2} fundingRequestV2 Body to included amount to be funded
     * @param {module:api/FundingManagerApi~createFundingRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "createFundingRequest",
    value: function createFundingRequest(sourceAccountId, fundingRequestV2, callback) {
      var postBody = fundingRequestV2; // verify the required parameter 'sourceAccountId' is set

      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling createFundingRequest");
      } // verify the required parameter 'fundingRequestV2' is set


      if (fundingRequestV2 === undefined || fundingRequestV2 === null) {
        throw new Error("Missing the required parameter 'fundingRequestV2' when calling createFundingRequest");
      }

      var pathParams = {
        'sourceAccountId': sourceAccountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/sourceAccounts/{sourceAccountId}/fundingRequest', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createFundingRequestV3 operation.
     * @callback module:api/FundingManagerApi~createFundingRequestV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Funding Request
     * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).
     * @param {String} sourceAccountId Source account id
     * @param {module:model/FundingRequestV3} fundingRequestV3 Body to included amount to be funded
     * @param {module:api/FundingManagerApi~createFundingRequestV3Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "createFundingRequestV3",
    value: function createFundingRequestV3(sourceAccountId, fundingRequestV3, callback) {
      var postBody = fundingRequestV3; // verify the required parameter 'sourceAccountId' is set

      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling createFundingRequestV3");
      } // verify the required parameter 'fundingRequestV3' is set


      if (fundingRequestV3 === undefined || fundingRequestV3 === null) {
        throw new Error("Missing the required parameter 'fundingRequestV3' when calling createFundingRequestV3");
      }

      var pathParams = {
        'sourceAccountId': sourceAccountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/sourceAccounts/{sourceAccountId}/fundingRequest', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFundingAccount operation.
     * @callback module:api/FundingManagerApi~getFundingAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FundingAccountResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Funding Account
     * Get Funding Account by ID
     * @param {String} fundingAccountId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.sensitive  (default to false)
     * @param {module:api/FundingManagerApi~getFundingAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FundingAccountResponse}
     */

  }, {
    key: "getFundingAccount",
    value: function getFundingAccount(fundingAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'fundingAccountId' is set

      if (fundingAccountId === undefined || fundingAccountId === null) {
        throw new Error("Missing the required parameter 'fundingAccountId' when calling getFundingAccount");
      }

      var pathParams = {
        'fundingAccountId': fundingAccountId
      };
      var queryParams = {
        'sensitive': opts['sensitive']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FundingAccountResponse["default"];
      return this.apiClient.callApi('/v1/fundingAccounts/{fundingAccountId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFundingAccountV2 operation.
     * @callback module:api/FundingManagerApi~getFundingAccountV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/FundingAccountResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Funding Account
     * Get Funding Account by ID
     * @param {String} fundingAccountId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.sensitive  (default to false)
     * @param {module:api/FundingManagerApi~getFundingAccountV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FundingAccountResponse2}
     */

  }, {
    key: "getFundingAccountV2",
    value: function getFundingAccountV2(fundingAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'fundingAccountId' is set

      if (fundingAccountId === undefined || fundingAccountId === null) {
        throw new Error("Missing the required parameter 'fundingAccountId' when calling getFundingAccountV2");
      }

      var pathParams = {
        'fundingAccountId': fundingAccountId
      };
      var queryParams = {
        'sensitive': opts['sensitive']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FundingAccountResponse2["default"];
      return this.apiClient.callApi('/v2/fundingAccounts/{fundingAccountId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFundingAccounts operation.
     * @callback module:api/FundingManagerApi~getFundingAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListFundingAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Funding Accounts
     * Get the funding accounts.
     * @param {Object} opts Optional parameters
     * @param {String} opts.payorId 
     * @param {String} opts.sourceAccountId 
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name and currency. (default to 'accountName:asc')
     * @param {Boolean} opts.sensitive  (default to false)
     * @param {module:api/FundingManagerApi~getFundingAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListFundingAccountsResponse}
     */

  }, {
    key: "getFundingAccounts",
    value: function getFundingAccounts(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'payorId': opts['payorId'],
        'sourceAccountId': opts['sourceAccountId'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort'],
        'sensitive': opts['sensitive']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListFundingAccountsResponse["default"];
      return this.apiClient.callApi('/v1/fundingAccounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFundingAccountsV2 operation.
     * @callback module:api/FundingManagerApi~getFundingAccountsV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ListFundingAccountsResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Funding Accounts
     * Get the funding accounts.
     * @param {Object} opts Optional parameters
     * @param {String} opts.payorId 
     * @param {String} opts.name The descriptive funding account name
     * @param {String} opts.country The 2 letter ISO 3166-1 country code (upper case)
     * @param {String} opts.currency The ISO 4217 currency code
     * @param {module:model/FundingAccountType} opts.type The type of funding account.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name. (default to 'accountName:asc')
     * @param {Boolean} opts.sensitive  (default to false)
     * @param {module:api/FundingManagerApi~getFundingAccountsV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListFundingAccountsResponse2}
     */

  }, {
    key: "getFundingAccountsV2",
    value: function getFundingAccountsV2(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'payorId': opts['payorId'],
        'name': opts['name'],
        'country': opts['country'],
        'currency': opts['currency'],
        'type': opts['type'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort'],
        'sensitive': opts['sensitive']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListFundingAccountsResponse2["default"];
      return this.apiClient.callApi('/v2/fundingAccounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSourceAccount operation.
     * @callback module:api/FundingManagerApi~getSourceAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SourceAccountResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details about given source account.
     * Get details about given source account.
     * @param {String} sourceAccountId Source account id
     * @param {module:api/FundingManagerApi~getSourceAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SourceAccountResponse}
     */

  }, {
    key: "getSourceAccount",
    value: function getSourceAccount(sourceAccountId, callback) {
      var postBody = null; // verify the required parameter 'sourceAccountId' is set

      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling getSourceAccount");
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
      var returnType = _SourceAccountResponse["default"];
      return this.apiClient.callApi('/v1/sourceAccounts/{sourceAccountId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSourceAccountV2 operation.
     * @callback module:api/FundingManagerApi~getSourceAccountV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/SourceAccountResponseV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details about given source account.
     * Get details about given source account.
     * @param {String} sourceAccountId Source account id
     * @param {module:api/FundingManagerApi~getSourceAccountV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SourceAccountResponseV2}
     */

  }, {
    key: "getSourceAccountV2",
    value: function getSourceAccountV2(sourceAccountId, callback) {
      var postBody = null; // verify the required parameter 'sourceAccountId' is set

      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling getSourceAccountV2");
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
      var returnType = _SourceAccountResponseV["default"];
      return this.apiClient.callApi('/v2/sourceAccounts/{sourceAccountId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSourceAccountV3 operation.
     * @callback module:api/FundingManagerApi~getSourceAccountV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/SourceAccountResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details about given source account.
     * Get details about given source account.
     * @param {String} sourceAccountId Source account id
     * @param {module:api/FundingManagerApi~getSourceAccountV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SourceAccountResponseV3}
     */

  }, {
    key: "getSourceAccountV3",
    value: function getSourceAccountV3(sourceAccountId, callback) {
      var postBody = null; // verify the required parameter 'sourceAccountId' is set

      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling getSourceAccountV3");
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
      var returnType = _SourceAccountResponseV2["default"];
      return this.apiClient.callApi('/v3/sourceAccounts/{sourceAccountId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSourceAccounts operation.
     * @callback module:api/FundingManagerApi~getSourceAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListSourceAccountResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of source accounts
     * List source accounts.
     * @param {Object} opts Optional parameters
     * @param {String} opts.physicalAccountName Physical Account Name
     * @param {String} opts.payorId The account owner Payor ID
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields e.g. ?sort=name:asc Default is name:asc The supported sort fields are - fundingRef  (default to 'fundingRef:asc')
     * @param {module:api/FundingManagerApi~getSourceAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListSourceAccountResponse}
     */

  }, {
    key: "getSourceAccounts",
    value: function getSourceAccounts(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'physicalAccountName': opts['physicalAccountName'],
        'payorId': opts['payorId'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListSourceAccountResponse["default"];
      return this.apiClient.callApi('/v1/sourceAccounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSourceAccountsV2 operation.
     * @callback module:api/FundingManagerApi~getSourceAccountsV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ListSourceAccountResponseV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of source accounts
     * List source accounts.
     * @param {Object} opts Optional parameters
     * @param {String} opts.physicalAccountName Physical Account Name
     * @param {String} opts.physicalAccountId The physical account ID
     * @param {String} opts.payorId The account owner Payor ID
     * @param {String} opts.fundingAccountId The funding account ID
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields e.g. ?sort=name:asc Default is name:asc The supported sort fields are - fundingRef, name, balance  (default to 'fundingRef:asc')
     * @param {module:api/FundingManagerApi~getSourceAccountsV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListSourceAccountResponseV2}
     */

  }, {
    key: "getSourceAccountsV2",
    value: function getSourceAccountsV2(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'physicalAccountName': opts['physicalAccountName'],
        'physicalAccountId': opts['physicalAccountId'],
        'payorId': opts['payorId'],
        'fundingAccountId': opts['fundingAccountId'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListSourceAccountResponseV["default"];
      return this.apiClient.callApi('/v2/sourceAccounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSourceAccountsV3 operation.
     * @callback module:api/FundingManagerApi~getSourceAccountsV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ListSourceAccountResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of source accounts
     * List source accounts.
     * @param {Object} opts Optional parameters
     * @param {String} opts.physicalAccountName Physical Account Name
     * @param {String} opts.physicalAccountId The physical account ID
     * @param {String} opts.payorId The account owner Payor ID
     * @param {String} opts.fundingAccountId The funding account ID
     * @param {Boolean} opts.includeUserDeleted A filter for retrieving both active accounts and user deleted ones
     * @param {module:model/SourceAccountType} opts.type The type of source account.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields e.g. ?sort=name:asc Default is name:asc The supported sort fields are - fundingRef, name, balance  (default to 'fundingRef:asc')
     * @param {module:api/FundingManagerApi~getSourceAccountsV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListSourceAccountResponseV3}
     */

  }, {
    key: "getSourceAccountsV3",
    value: function getSourceAccountsV3(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'physicalAccountName': opts['physicalAccountName'],
        'physicalAccountId': opts['physicalAccountId'],
        'payorId': opts['payorId'],
        'fundingAccountId': opts['fundingAccountId'],
        'includeUserDeleted': opts['includeUserDeleted'],
        'type': opts['type'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListSourceAccountResponseV2["default"];
      return this.apiClient.callApi('/v3/sourceAccounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listFundingAuditDeltas operation.
     * @callback module:api/FundingManagerApi~listFundingAuditDeltasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Funding Audit Delta
     * Get funding audit deltas for a payor
     * @param {String} payorId 
     * @param {Date} updatedSince 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {module:api/FundingManagerApi~listFundingAuditDeltasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse}
     */

  }, {
    key: "listFundingAuditDeltas",
    value: function listFundingAuditDeltas(payorId, updatedSince, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listFundingAuditDeltas");
      } // verify the required parameter 'updatedSince' is set


      if (updatedSince === undefined || updatedSince === null) {
        throw new Error("Missing the required parameter 'updatedSince' when calling listFundingAuditDeltas");
      }

      var pathParams = {};
      var queryParams = {
        'payorId': payorId,
        'updatedSince': updatedSince,
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse["default"];
      return this.apiClient.callApi('/v1/deltas/fundings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the setNotificationsRequest operation.
     * @callback module:api/FundingManagerApi~setNotificationsRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set notifications
     * Set notifications for a given source account
     * @param {String} sourceAccountId Source account id
     * @param {module:model/SetNotificationsRequest} setNotificationsRequest Body to included minimum balance to set
     * @param {module:api/FundingManagerApi~setNotificationsRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "setNotificationsRequest",
    value: function setNotificationsRequest(sourceAccountId, _setNotificationsRequest, callback) {
      var postBody = _setNotificationsRequest; // verify the required parameter 'sourceAccountId' is set

      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling setNotificationsRequest");
      } // verify the required parameter 'setNotificationsRequest' is set


      if (_setNotificationsRequest === undefined || _setNotificationsRequest === null) {
        throw new Error("Missing the required parameter 'setNotificationsRequest' when calling setNotificationsRequest");
      }

      var pathParams = {
        'sourceAccountId': sourceAccountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/sourceAccounts/{sourceAccountId}/notifications', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the transferFunds operation.
     * @callback module:api/FundingManagerApi~transferFundsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer Funds between source accounts
     * Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.
     * @param {String} sourceAccountId The 'from' source account id, which will be debited
     * @param {module:model/TransferRequest} transferRequest Body
     * @param {module:api/FundingManagerApi~transferFundsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "transferFunds",
    value: function transferFunds(sourceAccountId, transferRequest, callback) {
      var postBody = transferRequest; // verify the required parameter 'sourceAccountId' is set

      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling transferFunds");
      } // verify the required parameter 'transferRequest' is set


      if (transferRequest === undefined || transferRequest === null) {
        throw new Error("Missing the required parameter 'transferRequest' when calling transferFunds");
      }

      var pathParams = {
        'sourceAccountId': sourceAccountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/sourceAccounts/{sourceAccountId}/transfers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the transferFundsV3 operation.
     * @callback module:api/FundingManagerApi~transferFundsV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer Funds between source accounts
     * Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.
     * @param {String} sourceAccountId The 'from' source account id, which will be debited
     * @param {module:model/TransferRequest2} transferRequest2 Body
     * @param {module:api/FundingManagerApi~transferFundsV3Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "transferFundsV3",
    value: function transferFundsV3(sourceAccountId, transferRequest2, callback) {
      var postBody = transferRequest2; // verify the required parameter 'sourceAccountId' is set

      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling transferFundsV3");
      } // verify the required parameter 'transferRequest2' is set


      if (transferRequest2 === undefined || transferRequest2 === null) {
        throw new Error("Missing the required parameter 'transferRequest2' when calling transferFundsV3");
      }

      var pathParams = {
        'sourceAccountId': sourceAccountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/sourceAccounts/{sourceAccountId}/transfers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return FundingManagerApi;
}();

exports["default"] = FundingManagerApi;