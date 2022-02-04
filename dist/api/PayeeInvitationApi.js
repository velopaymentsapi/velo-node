"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatePayeesCSVRequest = _interopRequireDefault(require("../model/CreatePayeesCSVRequest"));

var _CreatePayeesCSVRequest2 = _interopRequireDefault(require("../model/CreatePayeesCSVRequest2"));

var _CreatePayeesCSVResponse = _interopRequireDefault(require("../model/CreatePayeesCSVResponse"));

var _CreatePayeesCSVResponse2 = _interopRequireDefault(require("../model/CreatePayeesCSVResponse2"));

var _CreatePayeesRequest = _interopRequireDefault(require("../model/CreatePayeesRequest"));

var _CreatePayeesRequest2 = _interopRequireDefault(require("../model/CreatePayeesRequest2"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse409"));

var _InvitationStatus = _interopRequireDefault(require("../model/InvitationStatus"));

var _InvitePayeeRequest = _interopRequireDefault(require("../model/InvitePayeeRequest"));

var _InvitePayeeRequest2 = _interopRequireDefault(require("../model/InvitePayeeRequest2"));

var _PagedPayeeInvitationStatusResponse = _interopRequireDefault(require("../model/PagedPayeeInvitationStatusResponse"));

var _PagedPayeeInvitationStatusResponse2 = _interopRequireDefault(require("../model/PagedPayeeInvitationStatusResponse2"));

var _QueryBatchResponse = _interopRequireDefault(require("../model/QueryBatchResponse"));

var _QueryBatchResponse2 = _interopRequireDefault(require("../model/QueryBatchResponse2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* PayeeInvitation service.
* @module api/PayeeInvitationApi
* @version 2.29.130
*/
var PayeeInvitationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PayeeInvitationApi. 
  * @alias module:api/PayeeInvitationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PayeeInvitationApi(apiClient) {
    _classCallCheck(this, PayeeInvitationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getPayeesInvitationStatusV3 operation.
   * @callback module:api/PayeeInvitationApi~getPayeesInvitationStatusV3Callback
   * @param {String} error Error message, if any.
   * @param {module:model/PagedPayeeInvitationStatusResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Payee Invitation Status
   * <p>Use v4 instead</p> <p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p> 
   * @param {String} payorId The account owner Payor ID
   * @param {Object} opts Optional parameters
   * @param {String} opts.payeeId The UUID of the payee.
   * @param {module:model/InvitationStatus} opts.invitationStatus The invitation status of the payees.
   * @param {Number} opts.page Page number. Default is 1. (default to 1)
   * @param {Number} opts.pageSize Page size. Default is 25. Max allowable is 100. (default to 25)
   * @param {module:api/PayeeInvitationApi~getPayeesInvitationStatusV3Callback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PagedPayeeInvitationStatusResponse}
   */


  _createClass(PayeeInvitationApi, [{
    key: "getPayeesInvitationStatusV3",
    value: function getPayeesInvitationStatusV3(payorId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getPayeesInvitationStatusV3");
      }

      var pathParams = {
        'payorId': payorId
      };
      var queryParams = {
        'payeeId': opts['payeeId'],
        'invitationStatus': opts['invitationStatus'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PagedPayeeInvitationStatusResponse["default"];
      return this.apiClient.callApi('/v3/payees/payors/{payorId}/invitationStatus', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPayeesInvitationStatusV4 operation.
     * @callback module:api/PayeeInvitationApi~getPayeesInvitationStatusV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedPayeeInvitationStatusResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payee Invitation Status
     * Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date. 
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.payeeId The UUID of the payee.
     * @param {module:model/InvitationStatus} opts.invitationStatus The invitation status of the payees.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize Page size. Default is 25. Max allowable is 100. (default to 25)
     * @param {module:api/PayeeInvitationApi~getPayeesInvitationStatusV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedPayeeInvitationStatusResponse2}
     */

  }, {
    key: "getPayeesInvitationStatusV4",
    value: function getPayeesInvitationStatusV4(payorId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getPayeesInvitationStatusV4");
      }

      var pathParams = {
        'payorId': payorId
      };
      var queryParams = {
        'payeeId': opts['payeeId'],
        'invitationStatus': opts['invitationStatus'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PagedPayeeInvitationStatusResponse2["default"];
      return this.apiClient.callApi('/v4/payees/payors/{payorId}/invitationStatus', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the queryBatchStatusV3 operation.
     * @callback module:api/PayeeInvitationApi~queryBatchStatusV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/QueryBatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Batch Status
     * <p>Use v4 instead</p> Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ). 
     * @param {String} batchId Batch Id
     * @param {module:api/PayeeInvitationApi~queryBatchStatusV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QueryBatchResponse}
     */

  }, {
    key: "queryBatchStatusV3",
    value: function queryBatchStatusV3(batchId, callback) {
      var postBody = null; // verify the required parameter 'batchId' is set

      if (batchId === undefined || batchId === null) {
        throw new Error("Missing the required parameter 'batchId' when calling queryBatchStatusV3");
      }

      var pathParams = {
        'batchId': batchId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _QueryBatchResponse["default"];
      return this.apiClient.callApi('/v3/payees/batch/{batchId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the queryBatchStatusV4 operation.
     * @callback module:api/PayeeInvitationApi~queryBatchStatusV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/QueryBatchResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Batch Status
     * Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ). 
     * @param {String} batchId Batch Id
     * @param {module:api/PayeeInvitationApi~queryBatchStatusV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QueryBatchResponse2}
     */

  }, {
    key: "queryBatchStatusV4",
    value: function queryBatchStatusV4(batchId, callback) {
      var postBody = null; // verify the required parameter 'batchId' is set

      if (batchId === undefined || batchId === null) {
        throw new Error("Missing the required parameter 'batchId' when calling queryBatchStatusV4");
      }

      var pathParams = {
        'batchId': batchId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _QueryBatchResponse2["default"];
      return this.apiClient.callApi('/v4/payees/batch/{batchId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resendPayeeInviteV3 operation.
     * @callback module:api/PayeeInvitationApi~resendPayeeInviteV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend Payee Invite
     * <p>Use v4 instead</p> <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p> <p>Any previous invites to the payee by this Payor will be invalidated</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/InvitePayeeRequest} invitePayeeRequest Provide Payor Id in body of request
     * @param {module:api/PayeeInvitationApi~resendPayeeInviteV3Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "resendPayeeInviteV3",
    value: function resendPayeeInviteV3(payeeId, invitePayeeRequest, callback) {
      var postBody = invitePayeeRequest; // verify the required parameter 'payeeId' is set

      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling resendPayeeInviteV3");
      } // verify the required parameter 'invitePayeeRequest' is set


      if (invitePayeeRequest === undefined || invitePayeeRequest === null) {
        throw new Error("Missing the required parameter 'invitePayeeRequest' when calling resendPayeeInviteV3");
      }

      var pathParams = {
        'payeeId': payeeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/payees/{payeeId}/invite', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resendPayeeInviteV4 operation.
     * @callback module:api/PayeeInvitationApi~resendPayeeInviteV4Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend Payee Invite
     * <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p> <p>Any previous invites to the payee by this Payor will be invalidated</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/InvitePayeeRequest2} invitePayeeRequest2 Provide Payor Id in body of request
     * @param {module:api/PayeeInvitationApi~resendPayeeInviteV4Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "resendPayeeInviteV4",
    value: function resendPayeeInviteV4(payeeId, invitePayeeRequest2, callback) {
      var postBody = invitePayeeRequest2; // verify the required parameter 'payeeId' is set

      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling resendPayeeInviteV4");
      } // verify the required parameter 'invitePayeeRequest2' is set


      if (invitePayeeRequest2 === undefined || invitePayeeRequest2 === null) {
        throw new Error("Missing the required parameter 'invitePayeeRequest2' when calling resendPayeeInviteV4");
      }

      var pathParams = {
        'payeeId': payeeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v4/payees/{payeeId}/invite', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the v3CreatePayee operation.
     * @callback module:api/PayeeInvitationApi~v3CreatePayeeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatePayeesCSVResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate Payee Creation
     * <p>Use v4 instead</p> Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a 400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and that provided for another payee within the same batch). The validation at this stage is intra-batch only. Validation against payees who have already been invited occurs subsequently during processing of the batch. 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePayeesRequest} opts.createPayeesRequest Post payees to create.
     * @param {module:api/PayeeInvitationApi~v3CreatePayeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatePayeesCSVResponse}
     */

  }, {
    key: "v3CreatePayee",
    value: function v3CreatePayee(opts, callback) {
      opts = opts || {};
      var postBody = opts['createPayeesRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _CreatePayeesCSVResponse["default"];
      return this.apiClient.callApi('/v3/payees', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the v4CreatePayee operation.
     * @callback module:api/PayeeInvitationApi~v4CreatePayeeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatePayeesCSVResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate Payee Creation
     * Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a 400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and that provided for another payee within the same batch). The validation at this stage is intra-batch only. Validation against payees who have already been invited occurs subsequently during processing of the batch. 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePayeesRequest2} opts.createPayeesRequest2 Post payees to create.
     * @param {module:api/PayeeInvitationApi~v4CreatePayeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatePayeesCSVResponse2}
     */

  }, {
    key: "v4CreatePayee",
    value: function v4CreatePayee(opts, callback) {
      opts = opts || {};
      var postBody = opts['createPayeesRequest2'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _CreatePayeesCSVResponse2["default"];
      return this.apiClient.callApi('/v4/payees', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PayeeInvitationApi;
}();

exports["default"] = PayeeInvitationApi;