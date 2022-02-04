"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetFundingsResponse = _interopRequireDefault(require("../model/GetFundingsResponse"));

var _GetPaymentsForPayoutResponseV = _interopRequireDefault(require("../model/GetPaymentsForPayoutResponseV3"));

var _GetPayoutStatistics = _interopRequireDefault(require("../model/GetPayoutStatistics"));

var _GetPayoutsResponseV = _interopRequireDefault(require("../model/GetPayoutsResponseV3"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _ListPaymentsResponseV = _interopRequireDefault(require("../model/ListPaymentsResponseV3"));

var _PaymentDeltaResponseV = _interopRequireDefault(require("../model/PaymentDeltaResponseV1"));

var _PaymentResponseV = _interopRequireDefault(require("../model/PaymentResponseV3"));

var _PayorAmlTransactionV = _interopRequireDefault(require("../model/PayorAmlTransactionV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* PaymentAuditServiceDeprecated service.
* @module api/PaymentAuditServiceDeprecatedApi
* @version 2.29.130
*/
var PaymentAuditServiceDeprecatedApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PaymentAuditServiceDeprecatedApi. 
  * @alias module:api/PaymentAuditServiceDeprecatedApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentAuditServiceDeprecatedApi(apiClient) {
    _classCallCheck(this, PaymentAuditServiceDeprecatedApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the exportTransactionsCSVV3 operation.
   * @callback module:api/PaymentAuditServiceDeprecatedApi~exportTransactionsCSVV3Callback
   * @param {String} error Error message, if any.
   * @param {module:model/PayorAmlTransactionV3} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * V3 Export Transactions
   * Deprecated (use /v4/paymentaudit/transactions instead)
   * @param {Object} opts Optional parameters
   * @param {String} opts.payorId The Payor ID for whom you wish to run the report. For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor. 
   * @param {Date} opts.startDate Start date, inclusive. Format is YYYY-MM-DD
   * @param {Date} opts.endDate End date, inclusive. Format is YYYY-MM-DD
   * @param {module:api/PaymentAuditServiceDeprecatedApi~exportTransactionsCSVV3Callback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PayorAmlTransactionV3}
   */


  _createClass(PaymentAuditServiceDeprecatedApi, [{
    key: "exportTransactionsCSVV3",
    value: function exportTransactionsCSVV3(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'payorId': opts['payorId'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/csv', 'application/json'];
      var returnType = _PayorAmlTransactionV["default"];
      return this.apiClient.callApi('/v3/paymentaudit/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFundingsV1 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~getFundingsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFundingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V1 Get Fundings for Payor
     * Deprecated (use /v4/paymentaudit/fundings)
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc``` Default is no sort. The supported sort fields are: dateTime and amount. 
     * @param {module:api/PaymentAuditServiceDeprecatedApi~getFundingsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFundingsResponse}
     */

  }, {
    key: "getFundingsV1",
    value: function getFundingsV1(payorId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getFundingsV1");
      }

      var pathParams = {};
      var queryParams = {
        'payorId': payorId,
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetFundingsResponse["default"];
      return this.apiClient.callApi('/v1/paymentaudit/fundings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPaymentDetailsV3 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~getPaymentDetailsV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V3 Get Payment
     * Deprecated (use /v4/paymentaudit/payments/<paymentId> instead)
     * @param {String} paymentId Payment Id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceDeprecatedApi~getPaymentDetailsV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentResponseV3}
     */

  }, {
    key: "getPaymentDetailsV3",
    value: function getPaymentDetailsV3(paymentId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'paymentId' is set

      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling getPaymentDetailsV3");
      }

      var pathParams = {
        'paymentId': paymentId
      };
      var queryParams = {
        'sensitive': opts['sensitive']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaymentResponseV["default"];
      return this.apiClient.callApi('/v3/paymentaudit/payments/{paymentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPaymentsForPayoutPAV3 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~getPaymentsForPayoutPAV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPaymentsForPayoutResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V3 Get Payments for Payout
     * Deprecated (use /v4/paymentaudit/payouts/<payoutId> instead)
     * @param {String} payoutId The id (UUID) of the payout.
     * @param {Object} opts Optional parameters
     * @param {String} opts.remoteId The remote id of the payees.
     * @param {module:model/String} opts.status Payment Status
     * @param {Number} opts.sourceAmountFrom The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
     * @param {Number} opts.sourceAmountTo The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
     * @param {Number} opts.paymentAmountFrom The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
     * @param {Number} opts.paymentAmountTo The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
     * @param {Date} opts.submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
     * @param {Date} opts.submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort <p>List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId</p> <p>The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status</p> 
     * @param {Boolean} opts.sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceDeprecatedApi~getPaymentsForPayoutPAV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPaymentsForPayoutResponseV3}
     */

  }, {
    key: "getPaymentsForPayoutPAV3",
    value: function getPaymentsForPayoutPAV3(payoutId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payoutId' is set

      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling getPaymentsForPayoutPAV3");
      }

      var pathParams = {
        'payoutId': payoutId
      };
      var queryParams = {
        'remoteId': opts['remoteId'],
        'status': opts['status'],
        'sourceAmountFrom': opts['sourceAmountFrom'],
        'sourceAmountTo': opts['sourceAmountTo'],
        'paymentAmountFrom': opts['paymentAmountFrom'],
        'paymentAmountTo': opts['paymentAmountTo'],
        'submittedDateFrom': opts['submittedDateFrom'],
        'submittedDateTo': opts['submittedDateTo'],
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
      var returnType = _GetPaymentsForPayoutResponseV["default"];
      return this.apiClient.callApi('/v3/paymentaudit/payouts/{payoutId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPayoutStatsV1 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~getPayoutStatsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPayoutStatistics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V1 Get Payout Statistics
     * Deprecated (Use /v4/paymentaudit/payoutStatistics)
     * @param {Object} opts Optional parameters
     * @param {String} opts.payorId The account owner Payor ID. Required for external users.
     * @param {module:api/PaymentAuditServiceDeprecatedApi~getPayoutStatsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPayoutStatistics}
     */

  }, {
    key: "getPayoutStatsV1",
    value: function getPayoutStatsV1(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'payorId': opts['payorId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetPayoutStatistics["default"];
      return this.apiClient.callApi('/v1/paymentaudit/payoutStatistics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPayoutsForPayorV3 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~getPayoutsForPayorV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPayoutsResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V3 Get Payouts for Payor
     * Deprecated (use /v4/paymentaudit/payouts instead)
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.payoutMemo Payout Memo filter - case insensitive sub-string match
     * @param {module:model/String} opts.status Payout Status
     * @param {Date} opts.submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
     * @param {Date} opts.submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc) Default is submittedDateTime:asc The supported sort fields are: submittedDateTime, instructedDateTime, status. 
     * @param {module:api/PaymentAuditServiceDeprecatedApi~getPayoutsForPayorV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPayoutsResponseV3}
     */

  }, {
    key: "getPayoutsForPayorV3",
    value: function getPayoutsForPayorV3(payorId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getPayoutsForPayorV3");
      }

      var pathParams = {};
      var queryParams = {
        'payorId': payorId,
        'payoutMemo': opts['payoutMemo'],
        'status': opts['status'],
        'submittedDateFrom': opts['submittedDateFrom'],
        'submittedDateTo': opts['submittedDateTo'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetPayoutsResponseV["default"];
      return this.apiClient.callApi('/v3/paymentaudit/payouts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listPaymentChanges operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~listPaymentChangesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentDeltaResponseV1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V1 List Payment Changes
     * Deprecated (use /v4/payments/deltas instead)
     * @param {String} payorId The Payor ID to find associated Payments
     * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 100)
     * @param {module:api/PaymentAuditServiceDeprecatedApi~listPaymentChangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentDeltaResponseV1}
     */

  }, {
    key: "listPaymentChanges",
    value: function listPaymentChanges(payorId, updatedSince, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPaymentChanges");
      } // verify the required parameter 'updatedSince' is set


      if (updatedSince === undefined || updatedSince === null) {
        throw new Error("Missing the required parameter 'updatedSince' when calling listPaymentChanges");
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
      var returnType = _PaymentDeltaResponseV["default"];
      return this.apiClient.callApi('/v1/deltas/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listPaymentsAuditV3 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~listPaymentsAuditV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ListPaymentsResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V3 Get List of Payments
     * Deprecated (use /v4/paymentaudit/payments instead)
     * @param {Object} opts Optional parameters
     * @param {String} opts.payeeId The UUID of the payee.
     * @param {String} opts.payorId The account owner Payor Id. Required for external users.
     * @param {String} opts.payorName The payor’s name. This filters via a case insensitive substring match.
     * @param {String} opts.remoteId The remote id of the payees.
     * @param {module:model/String} opts.status Payment Status
     * @param {String} opts.sourceAccountName The source account name filter. This filters via a case insensitive substring match.
     * @param {Number} opts.sourceAmountFrom The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
     * @param {Number} opts.sourceAmountTo The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
     * @param {String} opts.sourceCurrency The source currency filter. Filters based on an exact match on the currency.
     * @param {Number} opts.paymentAmountFrom The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
     * @param {Number} opts.paymentAmountTo The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
     * @param {String} opts.paymentCurrency The payment currency filter. Filters based on an exact match on the currency.
     * @param {Date} opts.submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
     * @param {Date} opts.submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
     * @param {String} opts.paymentMemo The payment memo filter. This filters via a case insensitive substring match.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status 
     * @param {Boolean} opts.sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceDeprecatedApi~listPaymentsAuditV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListPaymentsResponseV3}
     */

  }, {
    key: "listPaymentsAuditV3",
    value: function listPaymentsAuditV3(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'payeeId': opts['payeeId'],
        'payorId': opts['payorId'],
        'payorName': opts['payorName'],
        'remoteId': opts['remoteId'],
        'status': opts['status'],
        'sourceAccountName': opts['sourceAccountName'],
        'sourceAmountFrom': opts['sourceAmountFrom'],
        'sourceAmountTo': opts['sourceAmountTo'],
        'sourceCurrency': opts['sourceCurrency'],
        'paymentAmountFrom': opts['paymentAmountFrom'],
        'paymentAmountTo': opts['paymentAmountTo'],
        'paymentCurrency': opts['paymentCurrency'],
        'submittedDateFrom': opts['submittedDateFrom'],
        'submittedDateTo': opts['submittedDateTo'],
        'paymentMemo': opts['paymentMemo'],
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
      var returnType = _ListPaymentsResponseV["default"];
      return this.apiClient.callApi('/v3/paymentaudit/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PaymentAuditServiceDeprecatedApi;
}();

exports["default"] = PaymentAuditServiceDeprecatedApi;