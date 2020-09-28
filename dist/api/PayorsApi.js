"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse409"));

var _PayorBrandingResponse = _interopRequireDefault(require("../model/PayorBrandingResponse"));

var _PayorCreateApiKeyRequest = _interopRequireDefault(require("../model/PayorCreateApiKeyRequest"));

var _PayorCreateApiKeyResponse = _interopRequireDefault(require("../model/PayorCreateApiKeyResponse"));

var _PayorCreateApplicationRequest = _interopRequireDefault(require("../model/PayorCreateApplicationRequest"));

var _PayorEmailOptOutRequest = _interopRequireDefault(require("../model/PayorEmailOptOutRequest"));

var _PayorLinksResponse = _interopRequireDefault(require("../model/PayorLinksResponse"));

var _PayorV = _interopRequireDefault(require("../model/PayorV1"));

var _PayorV2 = _interopRequireDefault(require("../model/PayorV2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Payors service.
* @module api/PayorsApi
* @version 2.23.78
*/
var PayorsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PayorsApi. 
  * @alias module:api/PayorsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PayorsApi(apiClient) {
    _classCallCheck(this, PayorsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getPayorById operation.
   * @callback module:api/PayorsApi~getPayorByIdCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PayorV1} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Payor
   * Get a Single Payor by Id. 
   * @param {String} payorId The Payor Id
   * @param {module:api/PayorsApi~getPayorByIdCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PayorV1}
   */


  _createClass(PayorsApi, [{
    key: "getPayorById",
    value: function getPayorById(payorId, callback) {
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getPayorById");
      }

      var pathParams = {
        'payorId': payorId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PayorV["default"];
      return this.apiClient.callApi('/v1/payors/{payorId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPayorByIdV2 operation.
     * @callback module:api/PayorsApi~getPayorByIdV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayorV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payor
     * Get a Single Payor by Id. 
     * @param {String} payorId The Payor Id
     * @param {module:api/PayorsApi~getPayorByIdV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayorV2}
     */

  }, {
    key: "getPayorByIdV2",
    value: function getPayorByIdV2(payorId, callback) {
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getPayorByIdV2");
      }

      var pathParams = {
        'payorId': payorId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PayorV2["default"];
      return this.apiClient.callApi('/v2/payors/{payorId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the payorAddPayorLogo operation.
     * @callback module:api/PayorsApi~payorAddPayorLogoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Logo
     * Add Payor Logo. Logo file is used in your branding, and emails sent to payees.
     * @param {String} payorId The Payor Id
     * @param {Object} opts Optional parameters
     * @param {File} opts.logo 
     * @param {module:api/PayorsApi~payorAddPayorLogoCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "payorAddPayorLogo",
    value: function payorAddPayorLogo(payorId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling payorAddPayorLogo");
      }

      var pathParams = {
        'payorId': payorId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'logo': opts['logo']
      };
      var authNames = ['OAuth2'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/payors/{payorId}/branding/logos', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the payorCreateApiKeyRequest operation.
     * @callback module:api/PayorsApi~payorCreateApiKeyRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayorCreateApiKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create API Key
     * Create an an API key for the given payor Id and application Id
     * @param {String} payorId The Payor Id
     * @param {String} applicationId Application ID
     * @param {module:model/PayorCreateApiKeyRequest} payorCreateApiKeyRequest Details of application API key to create
     * @param {module:api/PayorsApi~payorCreateApiKeyRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayorCreateApiKeyResponse}
     */

  }, {
    key: "payorCreateApiKeyRequest",
    value: function payorCreateApiKeyRequest(payorId, applicationId, _payorCreateApiKeyRequest, callback) {
      var postBody = _payorCreateApiKeyRequest; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling payorCreateApiKeyRequest");
      } // verify the required parameter 'applicationId' is set


      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling payorCreateApiKeyRequest");
      } // verify the required parameter 'payorCreateApiKeyRequest' is set


      if (_payorCreateApiKeyRequest === undefined || _payorCreateApiKeyRequest === null) {
        throw new Error("Missing the required parameter 'payorCreateApiKeyRequest' when calling payorCreateApiKeyRequest");
      }

      var pathParams = {
        'payorId': payorId,
        'applicationId': applicationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PayorCreateApiKeyResponse["default"];
      return this.apiClient.callApi('/v1/payors/{payorId}/applications/{applicationId}/keys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the payorCreateApplicationRequest operation.
     * @callback module:api/PayorsApi~payorCreateApplicationRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Application
     * Create an application for the given Payor ID. Applications are programatic users which can be assigned unique keys.
     * @param {String} payorId The Payor Id
     * @param {module:model/PayorCreateApplicationRequest} payorCreateApplicationRequest Details of application to create
     * @param {module:api/PayorsApi~payorCreateApplicationRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "payorCreateApplicationRequest",
    value: function payorCreateApplicationRequest(payorId, _payorCreateApplicationRequest, callback) {
      var postBody = _payorCreateApplicationRequest; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling payorCreateApplicationRequest");
      } // verify the required parameter 'payorCreateApplicationRequest' is set


      if (_payorCreateApplicationRequest === undefined || _payorCreateApplicationRequest === null) {
        throw new Error("Missing the required parameter 'payorCreateApplicationRequest' when calling payorCreateApplicationRequest");
      }

      var pathParams = {
        'payorId': payorId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/payors/{payorId}/applications', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the payorEmailOptOut operation.
     * @callback module:api/PayorsApi~payorEmailOptOutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reminder Email Opt-Out
     * Update the emailRemindersOptOut field for a Payor. This API can be used to opt out or opt into Payor Reminder emails. These emails are typically around payee events such as payees registering and onboarding. 
     * @param {String} payorId The Payor Id
     * @param {module:model/PayorEmailOptOutRequest} payorEmailOptOutRequest Reminder Emails Opt-Out Request
     * @param {module:api/PayorsApi~payorEmailOptOutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "payorEmailOptOut",
    value: function payorEmailOptOut(payorId, payorEmailOptOutRequest, callback) {
      var postBody = payorEmailOptOutRequest; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling payorEmailOptOut");
      } // verify the required parameter 'payorEmailOptOutRequest' is set


      if (payorEmailOptOutRequest === undefined || payorEmailOptOutRequest === null) {
        throw new Error("Missing the required parameter 'payorEmailOptOutRequest' when calling payorEmailOptOut");
      }

      var pathParams = {
        'payorId': payorId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/payors/{payorId}/reminderEmailsUpdate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the payorGetBranding operation.
     * @callback module:api/PayorsApi~payorGetBrandingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayorBrandingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Branding
     * Get the payor branding details.
     * @param {String} payorId The Payor Id
     * @param {module:api/PayorsApi~payorGetBrandingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayorBrandingResponse}
     */

  }, {
    key: "payorGetBranding",
    value: function payorGetBranding(payorId, callback) {
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling payorGetBranding");
      }

      var pathParams = {
        'payorId': payorId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PayorBrandingResponse["default"];
      return this.apiClient.callApi('/v1/payors/{payorId}/branding', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the payorLinks operation.
     * @callback module:api/PayorsApi~payorLinksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayorLinksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payor Links
     * This endpoint allows you to list payor links
     * @param {Object} opts Optional parameters
     * @param {String} opts.descendantsOfPayor The Payor ID from which to start the query to show all descendants
     * @param {String} opts.parentOfPayor Look for the parent payor details for this payor id
     * @param {String} opts.fields List of additional Payor fields to include in the response for each Payor. The values of payorId and payorName and always included for each Payor - 'fields' allows you to add to this. Example: ```fields=primaryContactEmail,kycState``` - will include payorId+payorName+primaryContactEmail+kycState for each Payor Default if not specified is to include only payorId and payorName. The supported fields are any combination of: primaryContactEmail,kycState 
     * @param {module:api/PayorsApi~payorLinksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayorLinksResponse}
     */

  }, {
    key: "payorLinks",
    value: function payorLinks(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'descendantsOfPayor': opts['descendantsOfPayor'],
        'parentOfPayor': opts['parentOfPayor'],
        'fields': opts['fields']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PayorLinksResponse["default"];
      return this.apiClient.callApi('/v1/payorLinks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PayorsApi;
}();

exports["default"] = PayorsApi;