"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatePayoutRequestV = _interopRequireDefault(require("../model/CreatePayoutRequestV3"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse409"));

var _PagedPaymentsResponseV = _interopRequireDefault(require("../model/PagedPaymentsResponseV3"));

var _PayoutSummaryResponseV = _interopRequireDefault(require("../model/PayoutSummaryResponseV3"));

var _QuoteResponseV = _interopRequireDefault(require("../model/QuoteResponseV3"));

var _WithdrawPaymentRequest = _interopRequireDefault(require("../model/WithdrawPaymentRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* PayoutService service.
* @module api/PayoutServiceApi
* @version 2.23.78
*/
var PayoutServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PayoutServiceApi. 
  * @alias module:api/PayoutServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PayoutServiceApi(apiClient) {
    _classCallCheck(this, PayoutServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createQuoteForPayoutV3 operation.
   * @callback module:api/PayoutServiceApi~createQuoteForPayoutV3Callback
   * @param {String} error Error message, if any.
   * @param {module:model/QuoteResponseV3} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a quote for the payout
   * Create quote for a payout
   * @param {String} payoutId Id of the payout
   * @param {module:api/PayoutServiceApi~createQuoteForPayoutV3Callback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/QuoteResponseV3}
   */


  _createClass(PayoutServiceApi, [{
    key: "createQuoteForPayoutV3",
    value: function createQuoteForPayoutV3(payoutId, callback) {
      var postBody = null; // verify the required parameter 'payoutId' is set

      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling createQuoteForPayoutV3");
      }

      var pathParams = {
        'payoutId': payoutId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _QuoteResponseV["default"];
      return this.apiClient.callApi('/v3/payouts/{payoutId}/quote', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPaymentsForPayoutV3 operation.
     * @callback module:api/PayoutServiceApi~getPaymentsForPayoutV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedPaymentsResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve payments for a payout
     * Retrieve payments for a payout
     * @param {String} payoutId Id of the payout
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status Payment Status * ACCEPTED: any payment which was accepted at submission time (status may have changed since) * REJECTED: any payment rejected by initial submission processing * WITHDRAWN: any payment which has been withdrawn * WITHDRAWABLE: any payment eligible for withdrawal 
     * @param {String} opts.remoteId The remote id of the payees.
     * @param {String} opts.payorPaymentId Payor's Id of the Payment
     * @param {String} opts.sourceAccountName Physical Account Name
     * @param {String} opts.paymentMemo Payment Memo of the Payment
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {module:api/PayoutServiceApi~getPaymentsForPayoutV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedPaymentsResponseV3}
     */

  }, {
    key: "getPaymentsForPayoutV3",
    value: function getPaymentsForPayoutV3(payoutId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payoutId' is set

      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling getPaymentsForPayoutV3");
      }

      var pathParams = {
        'payoutId': payoutId
      };
      var queryParams = {
        'status': opts['status'],
        'remoteId': opts['remoteId'],
        'payorPaymentId': opts['payorPaymentId'],
        'sourceAccountName': opts['sourceAccountName'],
        'paymentMemo': opts['paymentMemo'],
        'pageSize': opts['pageSize'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PagedPaymentsResponseV["default"];
      return this.apiClient.callApi('/v3/payouts/{payoutId}/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPayoutSummaryV3 operation.
     * @callback module:api/PayoutServiceApi~getPayoutSummaryV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayoutSummaryResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payout Summary
     * Get payout summary - returns the current state of the payout.
     * @param {String} payoutId Id of the payout
     * @param {module:api/PayoutServiceApi~getPayoutSummaryV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayoutSummaryResponseV3}
     */

  }, {
    key: "getPayoutSummaryV3",
    value: function getPayoutSummaryV3(payoutId, callback) {
      var postBody = null; // verify the required parameter 'payoutId' is set

      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling getPayoutSummaryV3");
      }

      var pathParams = {
        'payoutId': payoutId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PayoutSummaryResponseV["default"];
      return this.apiClient.callApi('/v3/payouts/{payoutId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the instructPayoutV3 operation.
     * @callback module:api/PayoutServiceApi~instructPayoutV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Instruct Payout
     * Instruct a payout to be made for the specified payoutId.
     * @param {String} payoutId Id of the payout
     * @param {module:api/PayoutServiceApi~instructPayoutV3Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "instructPayoutV3",
    value: function instructPayoutV3(payoutId, callback) {
      var postBody = null; // verify the required parameter 'payoutId' is set

      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling instructPayoutV3");
      }

      var pathParams = {
        'payoutId': payoutId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/payouts/{payoutId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the submitPayoutV3 operation.
     * @callback module:api/PayoutServiceApi~submitPayoutV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit Payout
     * <p>Create a new payout and return a location header with a link to get the payout.</p> <p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously.</p> <p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header.</p> <p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc.</p>  with no decimal places. 
     * @param {module:model/CreatePayoutRequestV3} createPayoutRequestV3 Post amount to transfer using stored funding account details.
     * @param {module:api/PayoutServiceApi~submitPayoutV3Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "submitPayoutV3",
    value: function submitPayoutV3(createPayoutRequestV3, callback) {
      var postBody = createPayoutRequestV3; // verify the required parameter 'createPayoutRequestV3' is set

      if (createPayoutRequestV3 === undefined || createPayoutRequestV3 === null) {
        throw new Error("Missing the required parameter 'createPayoutRequestV3' when calling submitPayoutV3");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/payouts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the withdrawPayment operation.
     * @callback module:api/PayoutServiceApi~withdrawPaymentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Withdraw a Payment
     * <p>withdraw a payment </p> <p>There are a variety of reasons why this can fail</p> <ul>     <li>the payment must be in a state of 'accepted' or 'unfunded'</li>     <li>the payout must not be in a state of 'instructed'</li> </ul> 
     * @param {String} paymentId Id of the Payment
     * @param {module:model/WithdrawPaymentRequest} withdrawPaymentRequest details for withdrawal
     * @param {module:api/PayoutServiceApi~withdrawPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "withdrawPayment",
    value: function withdrawPayment(paymentId, withdrawPaymentRequest, callback) {
      var postBody = withdrawPaymentRequest; // verify the required parameter 'paymentId' is set

      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling withdrawPayment");
      } // verify the required parameter 'withdrawPaymentRequest' is set


      if (withdrawPaymentRequest === undefined || withdrawPaymentRequest === null) {
        throw new Error("Missing the required parameter 'withdrawPaymentRequest' when calling withdrawPayment");
      }

      var pathParams = {
        'paymentId': paymentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/payments/{paymentId}/withdraw', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the withdrawPayoutV3 operation.
     * @callback module:api/PayoutServiceApi~withdrawPayoutV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Withdraw Payout
     * Withdraw Payout will delete payout details from payout service and rails services but will just move the status of the payout to WITHDRAWN in payment audit.
     * @param {String} payoutId Id of the payout
     * @param {module:api/PayoutServiceApi~withdrawPayoutV3Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "withdrawPayoutV3",
    value: function withdrawPayoutV3(payoutId, callback) {
      var postBody = null; // verify the required parameter 'payoutId' is set

      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling withdrawPayoutV3");
      }

      var pathParams = {
        'payoutId': payoutId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/payouts/{payoutId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PayoutServiceApi;
}();

exports["default"] = PayoutServiceApi;