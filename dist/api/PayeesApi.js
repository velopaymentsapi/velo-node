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

var _OfacStatus = _interopRequireDefault(require("../model/OfacStatus"));

var _OnboardedStatus = _interopRequireDefault(require("../model/OnboardedStatus"));

var _PagedPayeeResponse = _interopRequireDefault(require("../model/PagedPayeeResponse"));

var _PagedPayeeResponse2 = _interopRequireDefault(require("../model/PagedPayeeResponse2"));

var _PayeeDeltaResponse = _interopRequireDefault(require("../model/PayeeDeltaResponse"));

var _PayeeDeltaResponse2 = _interopRequireDefault(require("../model/PayeeDeltaResponse2"));

var _PayeeDetailResponse = _interopRequireDefault(require("../model/PayeeDetailResponse"));

var _PayeeDetailResponse2 = _interopRequireDefault(require("../model/PayeeDetailResponse2"));

var _PayeeType = _interopRequireDefault(require("../model/PayeeType"));

var _UpdatePayeeDetailsRequest = _interopRequireDefault(require("../model/UpdatePayeeDetailsRequest"));

var _UpdatePayeeDetailsRequest2 = _interopRequireDefault(require("../model/UpdatePayeeDetailsRequest2"));

var _UpdateRemoteIdRequest = _interopRequireDefault(require("../model/UpdateRemoteIdRequest"));

var _UpdateRemoteIdRequest2 = _interopRequireDefault(require("../model/UpdateRemoteIdRequest2"));

var _WatchlistStatus = _interopRequireDefault(require("../model/WatchlistStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Payees service.
* @module api/PayeesApi
* @version 2.26.127
*/
var PayeesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PayeesApi. 
  * @alias module:api/PayeesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PayeesApi(apiClient) {
    _classCallCheck(this, PayeesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deletePayeeByIdV3 operation.
   * @callback module:api/PayeesApi~deletePayeeByIdV3Callback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete Payee by Id
   * <p>Use v4 instead</p> <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p> <p>* Payee ID is not found</p> <p>* If Payee has not been on-boarded</p> <p>* If Payee is in grace period</p> <p>* If Payee has existing payments</p> 
   * @param {String} payeeId The UUID of the payee.
   * @param {module:api/PayeesApi~deletePayeeByIdV3Callback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(PayeesApi, [{
    key: "deletePayeeByIdV3",
    value: function deletePayeeByIdV3(payeeId, callback) {
      var postBody = null; // verify the required parameter 'payeeId' is set

      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling deletePayeeByIdV3");
      }

      var pathParams = {
        'payeeId': payeeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/payees/{payeeId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deletePayeeByIdV4 operation.
     * @callback module:api/PayeesApi~deletePayeeByIdV4Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Payee by Id
     * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p> <p>* Payee ID is not found</p> <p>* If Payee has not been on-boarded</p> <p>* If Payee is in grace period</p> <p>* If Payee has existing payments</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:api/PayeesApi~deletePayeeByIdV4Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deletePayeeByIdV4",
    value: function deletePayeeByIdV4(payeeId, callback) {
      var postBody = null; // verify the required parameter 'payeeId' is set

      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling deletePayeeByIdV4");
      }

      var pathParams = {
        'payeeId': payeeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v4/payees/{payeeId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPayeeByIdV3 operation.
     * @callback module:api/PayeesApi~getPayeeByIdV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayeeDetailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payee by Id
     * <p>Use v4 instead</p> <p>Get Payee by Id</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PayeesApi~getPayeeByIdV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayeeDetailResponse}
     */

  }, {
    key: "getPayeeByIdV3",
    value: function getPayeeByIdV3(payeeId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payeeId' is set

      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling getPayeeByIdV3");
      }

      var pathParams = {
        'payeeId': payeeId
      };
      var queryParams = {
        'sensitive': opts['sensitive']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PayeeDetailResponse["default"];
      return this.apiClient.callApi('/v3/payees/{payeeId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPayeeByIdV4 operation.
     * @callback module:api/PayeesApi~getPayeeByIdV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayeeDetailResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payee by Id
     * Get Payee by Id
     * @param {String} payeeId The UUID of the payee.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PayeesApi~getPayeeByIdV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayeeDetailResponse2}
     */

  }, {
    key: "getPayeeByIdV4",
    value: function getPayeeByIdV4(payeeId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payeeId' is set

      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling getPayeeByIdV4");
      }

      var pathParams = {
        'payeeId': payeeId
      };
      var queryParams = {
        'sensitive': opts['sensitive']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PayeeDetailResponse2["default"];
      return this.apiClient.callApi('/v4/payees/{payeeId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listPayeeChangesV3 operation.
     * @callback module:api/PayeesApi~listPayeeChangesV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayeeDeltaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payee Changes
     * <p>Use v4 instead</p> <p>Get a paginated response listing payee changes.</p> 
     * @param {String} payorId The Payor ID to find associated Payees
     * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize Page size. Default is 100. Max allowable is 1000. (default to 100)
     * @param {module:api/PayeesApi~listPayeeChangesV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayeeDeltaResponse}
     */

  }, {
    key: "listPayeeChangesV3",
    value: function listPayeeChangesV3(payorId, updatedSince, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPayeeChangesV3");
      } // verify the required parameter 'updatedSince' is set


      if (updatedSince === undefined || updatedSince === null) {
        throw new Error("Missing the required parameter 'updatedSince' when calling listPayeeChangesV3");
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
      var returnType = _PayeeDeltaResponse["default"];
      return this.apiClient.callApi('/v3/payees/deltas', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listPayeeChangesV4 operation.
     * @callback module:api/PayeesApi~listPayeeChangesV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayeeDeltaResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payee Changes
     * Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields: - dbaName - displayName - email - onboardedStatus - payeeCountry - payeeId - remoteId 
     * @param {String} payorId The Payor ID to find associated Payees
     * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize Page size. Default is 100. Max allowable is 1000. (default to 100)
     * @param {module:api/PayeesApi~listPayeeChangesV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayeeDeltaResponse2}
     */

  }, {
    key: "listPayeeChangesV4",
    value: function listPayeeChangesV4(payorId, updatedSince, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPayeeChangesV4");
      } // verify the required parameter 'updatedSince' is set


      if (updatedSince === undefined || updatedSince === null) {
        throw new Error("Missing the required parameter 'updatedSince' when calling listPayeeChangesV4");
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
      var returnType = _PayeeDeltaResponse2["default"];
      return this.apiClient.callApi('/v4/payees/deltas', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listPayeesV3 operation.
     * @callback module:api/PayeesApi~listPayeesV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedPayeeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payees
     * <p>Use v4 instead</p> Get a paginated response listing the payees for a payor. 
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {module:model/WatchlistStatus} opts.watchlistStatus The watchlistStatus of the payees.
     * @param {Boolean} opts.disabled Payee disabled
     * @param {module:model/OnboardedStatus} opts.onboardedStatus The onboarded status of the payees.
     * @param {String} opts.email Email address
     * @param {String} opts.displayName The display name of the payees.
     * @param {String} opts.remoteId The remote id of the payees.
     * @param {module:model/PayeeType} opts.payeeType The onboarded status of the payees.
     * @param {String} opts.payeeCountry The country of the payee - 2 letter ISO 3166-1 country code (upper case)
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize Page size. Default is 25. Max allowable is 100. (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.  (default to 'displayName:asc')
     * @param {module:api/PayeesApi~listPayeesV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedPayeeResponse}
     */

  }, {
    key: "listPayeesV3",
    value: function listPayeesV3(payorId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPayeesV3");
      }

      var pathParams = {};
      var queryParams = {
        'payorId': payorId,
        'watchlistStatus': opts['watchlistStatus'],
        'disabled': opts['disabled'],
        'onboardedStatus': opts['onboardedStatus'],
        'email': opts['email'],
        'displayName': opts['displayName'],
        'remoteId': opts['remoteId'],
        'payeeType': opts['payeeType'],
        'payeeCountry': opts['payeeCountry'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PagedPayeeResponse["default"];
      return this.apiClient.callApi('/v3/payees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listPayeesV4 operation.
     * @callback module:api/PayeesApi~listPayeesV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedPayeeResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payees
     * Get a paginated response listing the payees for a payor.
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {module:model/WatchlistStatus} opts.watchlistStatus The watchlistStatus of the payees.
     * @param {Boolean} opts.disabled Payee disabled
     * @param {module:model/OnboardedStatus} opts.onboardedStatus The onboarded status of the payees.
     * @param {String} opts.email Email address
     * @param {String} opts.displayName The display name of the payees.
     * @param {String} opts.remoteId The remote id of the payees.
     * @param {module:model/PayeeType} opts.payeeType The onboarded status of the payees.
     * @param {String} opts.payeeCountry The country of the payee - 2 letter ISO 3166-1 country code (upper case)
     * @param {module:model/OfacStatus} opts.ofacStatus The ofacStatus of the payees.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize Page size. Default is 25. Max allowable is 100. (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.  (default to 'displayName:asc')
     * @param {module:api/PayeesApi~listPayeesV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedPayeeResponse2}
     */

  }, {
    key: "listPayeesV4",
    value: function listPayeesV4(payorId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPayeesV4");
      }

      var pathParams = {};
      var queryParams = {
        'payorId': payorId,
        'watchlistStatus': opts['watchlistStatus'],
        'disabled': opts['disabled'],
        'onboardedStatus': opts['onboardedStatus'],
        'email': opts['email'],
        'displayName': opts['displayName'],
        'remoteId': opts['remoteId'],
        'payeeType': opts['payeeType'],
        'payeeCountry': opts['payeeCountry'],
        'ofacStatus': opts['ofacStatus'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PagedPayeeResponse2["default"];
      return this.apiClient.callApi('/v4/payees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the payeeDetailsUpdateV3 operation.
     * @callback module:api/PayeesApi~payeeDetailsUpdateV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Payee Details
     * <p>Use v4 instead</p> <p>Update payee details for the given Payee Id.<p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/UpdatePayeeDetailsRequest} updatePayeeDetailsRequest Request to update payee details
     * @param {module:api/PayeesApi~payeeDetailsUpdateV3Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "payeeDetailsUpdateV3",
    value: function payeeDetailsUpdateV3(payeeId, updatePayeeDetailsRequest, callback) {
      var postBody = updatePayeeDetailsRequest; // verify the required parameter 'payeeId' is set

      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling payeeDetailsUpdateV3");
      } // verify the required parameter 'updatePayeeDetailsRequest' is set


      if (updatePayeeDetailsRequest === undefined || updatePayeeDetailsRequest === null) {
        throw new Error("Missing the required parameter 'updatePayeeDetailsRequest' when calling payeeDetailsUpdateV3");
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
      return this.apiClient.callApi('/v3/payees/{payeeId}/payeeDetailsUpdate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the payeeDetailsUpdateV4 operation.
     * @callback module:api/PayeesApi~payeeDetailsUpdateV4Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Payee Details
     * <p>Update payee details for the given Payee Id.<p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/UpdatePayeeDetailsRequest2} updatePayeeDetailsRequest2 Request to update payee details
     * @param {module:api/PayeesApi~payeeDetailsUpdateV4Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "payeeDetailsUpdateV4",
    value: function payeeDetailsUpdateV4(payeeId, updatePayeeDetailsRequest2, callback) {
      var postBody = updatePayeeDetailsRequest2; // verify the required parameter 'payeeId' is set

      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling payeeDetailsUpdateV4");
      } // verify the required parameter 'updatePayeeDetailsRequest2' is set


      if (updatePayeeDetailsRequest2 === undefined || updatePayeeDetailsRequest2 === null) {
        throw new Error("Missing the required parameter 'updatePayeeDetailsRequest2' when calling payeeDetailsUpdateV4");
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
      return this.apiClient.callApi('/v4/payees/{payeeId}/payeeDetailsUpdate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the v3PayeesPayeeIdRemoteIdUpdatePost operation.
     * @callback module:api/PayeesApi~v3PayeesPayeeIdRemoteIdUpdatePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Payee Remote Id
     * <p>Use v4 instead</p> <p>Update the remote Id for the given Payee Id.</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/UpdateRemoteIdRequest} updateRemoteIdRequest Request to update payee remote id v3
     * @param {module:api/PayeesApi~v3PayeesPayeeIdRemoteIdUpdatePostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "v3PayeesPayeeIdRemoteIdUpdatePost",
    value: function v3PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequest, callback) {
      var postBody = updateRemoteIdRequest; // verify the required parameter 'payeeId' is set

      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling v3PayeesPayeeIdRemoteIdUpdatePost");
      } // verify the required parameter 'updateRemoteIdRequest' is set


      if (updateRemoteIdRequest === undefined || updateRemoteIdRequest === null) {
        throw new Error("Missing the required parameter 'updateRemoteIdRequest' when calling v3PayeesPayeeIdRemoteIdUpdatePost");
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
      return this.apiClient.callApi('/v3/payees/{payeeId}/remoteIdUpdate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the v4PayeesPayeeIdRemoteIdUpdatePost operation.
     * @callback module:api/PayeesApi~v4PayeesPayeeIdRemoteIdUpdatePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Payee Remote Id
     * <p>Update the remote Id for the given Payee Id.</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/UpdateRemoteIdRequest2} updateRemoteIdRequest2 Request to update payee remote id v4
     * @param {module:api/PayeesApi~v4PayeesPayeeIdRemoteIdUpdatePostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "v4PayeesPayeeIdRemoteIdUpdatePost",
    value: function v4PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequest2, callback) {
      var postBody = updateRemoteIdRequest2; // verify the required parameter 'payeeId' is set

      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling v4PayeesPayeeIdRemoteIdUpdatePost");
      } // verify the required parameter 'updateRemoteIdRequest2' is set


      if (updateRemoteIdRequest2 === undefined || updateRemoteIdRequest2 === null) {
        throw new Error("Missing the required parameter 'updateRemoteIdRequest2' when calling v4PayeesPayeeIdRemoteIdUpdatePost");
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
      return this.apiClient.callApi('/v4/payees/{payeeId}/remoteIdUpdate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PayeesApi;
}();

exports["default"] = PayeesApi;