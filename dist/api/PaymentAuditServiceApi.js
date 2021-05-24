"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetFundingsResponse = _interopRequireDefault(require("../model/GetFundingsResponse"));

var _GetPaymentsForPayoutResponseV = _interopRequireDefault(require("../model/GetPaymentsForPayoutResponseV4"));

var _GetPayoutStatistics = _interopRequireDefault(require("../model/GetPayoutStatistics"));

var _GetPayoutsResponse = _interopRequireDefault(require("../model/GetPayoutsResponse"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _ListPaymentsResponseV = _interopRequireDefault(require("../model/ListPaymentsResponseV4"));

var _PaymentDeltaResponse = _interopRequireDefault(require("../model/PaymentDeltaResponse"));

var _PaymentResponseV = _interopRequireDefault(require("../model/PaymentResponseV4"));

var _PayorAmlTransaction = _interopRequireDefault(require("../model/PayorAmlTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* PaymentAuditService service.
* @module api/PaymentAuditServiceApi
* @version 2.26.124
*/
var PaymentAuditServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PaymentAuditServiceApi. 
  * @alias module:api/PaymentAuditServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentAuditServiceApi(apiClient) {
    _classCallCheck(this, PaymentAuditServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the exportTransactionsCSVV4 operation.
   * @callback module:api/PaymentAuditServiceApi~exportTransactionsCSVV4Callback
   * @param {String} error Error message, if any.
   * @param {module:model/PayorAmlTransaction} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Export Transactions
   * Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.
   * @param {Object} opts Optional parameters
   * @param {String} opts.payorId <p>The Payor ID for whom you wish to run the report.</p> <p>For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.</p> 
   * @param {Date} opts.startDate Start date, inclusive. Format is YYYY-MM-DD
   * @param {Date} opts.endDate End date, inclusive. Format is YYYY-MM-DD
   * @param {module:model/String} opts.include <p>Mode to determine whether to include other Payor's data in the results.</p> <p>May only be used if payorId is specified.</p> <p>Can be omitted or set to 'payorOnly' or 'payorAndDescendants'.</p> <p>payorOnly: Only include results for the specified Payor. This is the default if 'include' is omitted.</p> <p>payorAndDescendants: Aggregate results for all descendant Payors of the specified Payor. Should only be used if the Payor with the specified payorId has at least one child Payor.</p> <p>Note when a Payor requests the report and include=payorAndDescendants is used, the following additional columns are included in the CSV: Payor Name, Payor Id</p> 
   * @param {module:api/PaymentAuditServiceApi~exportTransactionsCSVV4Callback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PayorAmlTransaction}
   */


  _createClass(PaymentAuditServiceApi, [{
    key: "exportTransactionsCSVV4",
    value: function exportTransactionsCSVV4(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'payorId': opts['payorId'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'include': opts['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/csv'];
      var returnType = _PayorAmlTransaction["default"];
      return this.apiClient.callApi('/v4/paymentaudit/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFundingsV4 operation.
     * @callback module:api/PaymentAuditServiceApi~getFundingsV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFundingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Fundings for Payor
     * <p>Get a list of Fundings for a payor.</p> 
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc``` Default is no sort. The supported sort fields are: dateTime and amount. 
     * @param {module:api/PaymentAuditServiceApi~getFundingsV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFundingsResponse}
     */

  }, {
    key: "getFundingsV4",
    value: function getFundingsV4(payorId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getFundingsV4");
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
      return this.apiClient.callApi('/v4/paymentaudit/fundings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPaymentDetailsV4 operation.
     * @callback module:api/PaymentAuditServiceApi~getPaymentDetailsV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentResponseV4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payment
     * Get the payment with the given id. This contains the payment history. 
     * @param {String} paymentId Payment Id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceApi~getPaymentDetailsV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentResponseV4}
     */

  }, {
    key: "getPaymentDetailsV4",
    value: function getPaymentDetailsV4(paymentId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'paymentId' is set

      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling getPaymentDetailsV4");
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
      return this.apiClient.callApi('/v4/paymentaudit/payments/{paymentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPaymentsForPayoutV4 operation.
     * @callback module:api/PaymentAuditServiceApi~getPaymentsForPayoutV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPaymentsForPayoutResponseV4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payments for Payout
     * Get List of payments for Payout, allowing for RETURNED status 
     * @param {String} payoutId The id (UUID) of the payout.
     * @param {Object} opts Optional parameters
     * @param {String} opts.remoteId The remote id of the payees.
     * @param {String} opts.remoteSystemId The id of the remote system that is orchestrating payments
     * @param {module:model/String} opts.status Payment Status
     * @param {Number} opts.sourceAmountFrom The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
     * @param {Number} opts.sourceAmountTo The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
     * @param {Number} opts.paymentAmountFrom The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
     * @param {Number} opts.paymentAmountTo The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
     * @param {Date} opts.submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
     * @param {Date} opts.submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
     * @param {module:model/String} opts.transmissionType Transmission Type * ACH * SAME_DAY_ACH * WIRE 
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status 
     * @param {Boolean} opts.sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceApi~getPaymentsForPayoutV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPaymentsForPayoutResponseV4}
     */

  }, {
    key: "getPaymentsForPayoutV4",
    value: function getPaymentsForPayoutV4(payoutId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payoutId' is set

      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling getPaymentsForPayoutV4");
      }

      var pathParams = {
        'payoutId': payoutId
      };
      var queryParams = {
        'remoteId': opts['remoteId'],
        'remoteSystemId': opts['remoteSystemId'],
        'status': opts['status'],
        'sourceAmountFrom': opts['sourceAmountFrom'],
        'sourceAmountTo': opts['sourceAmountTo'],
        'paymentAmountFrom': opts['paymentAmountFrom'],
        'paymentAmountTo': opts['paymentAmountTo'],
        'submittedDateFrom': opts['submittedDateFrom'],
        'submittedDateTo': opts['submittedDateTo'],
        'transmissionType': opts['transmissionType'],
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
      return this.apiClient.callApi('/v4/paymentaudit/payouts/{payoutId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPayoutStatsV4 operation.
     * @callback module:api/PaymentAuditServiceApi~getPayoutStatsV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPayoutStatistics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payout Statistics
     * <p>Get payout statistics for a payor.</p> 
     * @param {Object} opts Optional parameters
     * @param {String} opts.payorId The account owner Payor ID. Required for external users.
     * @param {module:api/PaymentAuditServiceApi~getPayoutStatsV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPayoutStatistics}
     */

  }, {
    key: "getPayoutStatsV4",
    value: function getPayoutStatsV4(opts, callback) {
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
      return this.apiClient.callApi('/v4/paymentaudit/payoutStatistics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPayoutsForPayorV4 operation.
     * @callback module:api/PaymentAuditServiceApi~getPayoutsForPayorV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPayoutsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payouts for Payor
     * Get List of payouts for payor 
     * @param {Object} opts Optional parameters
     * @param {String} opts.payorId The id (UUID) of the payor funding the payout or the payor whose payees are being paid.
     * @param {String} opts.payoutMemo Payout Memo filter - case insensitive sub-string match
     * @param {module:model/String} opts.status Payout Status
     * @param {Date} opts.submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
     * @param {Date} opts.submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
     * @param {String} opts.fromPayorName The name of the payor whose payees are being paid. This filters via a case insensitive substring match.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc) Default is submittedDateTime:asc The supported sort fields are: submittedDateTime, instructedDateTime, status, totalPayments, payoutId 
     * @param {module:api/PaymentAuditServiceApi~getPayoutsForPayorV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPayoutsResponse}
     */

  }, {
    key: "getPayoutsForPayorV4",
    value: function getPayoutsForPayorV4(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'payorId': opts['payorId'],
        'payoutMemo': opts['payoutMemo'],
        'status': opts['status'],
        'submittedDateFrom': opts['submittedDateFrom'],
        'submittedDateTo': opts['submittedDateTo'],
        'fromPayorName': opts['fromPayorName'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetPayoutsResponse["default"];
      return this.apiClient.callApi('/v4/paymentaudit/payouts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listPaymentChangesV4 operation.
     * @callback module:api/PaymentAuditServiceApi~listPaymentChangesV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentDeltaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payment Changes
     * Get a paginated response listing payment changes.
     * @param {String} payorId The Payor ID to find associated Payments
     * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 100)
     * @param {module:api/PaymentAuditServiceApi~listPaymentChangesV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentDeltaResponse}
     */

  }, {
    key: "listPaymentChangesV4",
    value: function listPaymentChangesV4(payorId, updatedSince, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPaymentChangesV4");
      } // verify the required parameter 'updatedSince' is set


      if (updatedSince === undefined || updatedSince === null) {
        throw new Error("Missing the required parameter 'updatedSince' when calling listPaymentChangesV4");
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
      var returnType = _PaymentDeltaResponse["default"];
      return this.apiClient.callApi('/v4/payments/deltas', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listPaymentsAuditV4 operation.
     * @callback module:api/PaymentAuditServiceApi~listPaymentsAuditV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ListPaymentsResponseV4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get List of Payments
     * Get payments for the given payor Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.payeeId The UUID of the payee.
     * @param {String} opts.payorId The account owner Payor Id. Required for external users.
     * @param {String} opts.payorName The payor’s name. This filters via a case insensitive substring match.
     * @param {String} opts.remoteId The remote id of the payees.
     * @param {String} opts.remoteSystemId The id of the remote system that is orchestrating payments
     * @param {module:model/String} opts.status Payment Status
     * @param {module:model/String} opts.transmissionType Transmission Type * ACH * SAME_DAY_ACH * WIRE 
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
     * @param {String} opts.sort List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by submittedDateTime:desc,paymentId:asc The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime, status and paymentId 
     * @param {Boolean} opts.sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceApi~listPaymentsAuditV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListPaymentsResponseV4}
     */

  }, {
    key: "listPaymentsAuditV4",
    value: function listPaymentsAuditV4(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'payeeId': opts['payeeId'],
        'payorId': opts['payorId'],
        'payorName': opts['payorName'],
        'remoteId': opts['remoteId'],
        'remoteSystemId': opts['remoteSystemId'],
        'status': opts['status'],
        'transmissionType': opts['transmissionType'],
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
      return this.apiClient.callApi('/v4/paymentaudit/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PaymentAuditServiceApi;
}();

exports["default"] = PaymentAuditServiceApi;