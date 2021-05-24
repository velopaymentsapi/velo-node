"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateWebhookRequest = _interopRequireDefault(require("../model/CreateWebhookRequest"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _UpdateWebhookRequest = _interopRequireDefault(require("../model/UpdateWebhookRequest"));

var _WebhookResponse = _interopRequireDefault(require("../model/WebhookResponse"));

var _WebhooksResponse = _interopRequireDefault(require("../model/WebhooksResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 2.26.124
*/
var WebhooksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WebhooksApi. 
  * @alias module:api/WebhooksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WebhooksApi(apiClient) {
    _classCallCheck(this, WebhooksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createWebhookV1 operation.
   * @callback module:api/WebhooksApi~createWebhookV1Callback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Webhook
   * Create Webhook
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateWebhookRequest} opts.createWebhookRequest 
   * @param {module:api/WebhooksApi~createWebhookV1Callback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(WebhooksApi, [{
    key: "createWebhookV1",
    value: function createWebhookV1(opts, callback) {
      opts = opts || {};
      var postBody = opts['createWebhookRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/webhooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWebhookV1 operation.
     * @callback module:api/WebhooksApi~getWebhookV1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details about the given webhook.
     * Get details about the given webhook.
     * @param {String} webhookId Webhook id
     * @param {module:api/WebhooksApi~getWebhookV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookResponse}
     */

  }, {
    key: "getWebhookV1",
    value: function getWebhookV1(webhookId, callback) {
      var postBody = null; // verify the required parameter 'webhookId' is set

      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling getWebhookV1");
      }

      var pathParams = {
        'webhookId': webhookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookResponse["default"];
      return this.apiClient.callApi('/v1/webhooks/{webhookId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listWebhooksV1 operation.
     * @callback module:api/WebhooksApi~listWebhooksV1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhooksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the details about the webhooks for the given payor.
     * List the details about the webhooks for the given payor.
     * @param {String} payorId The Payor ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {module:api/WebhooksApi~listWebhooksV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhooksResponse}
     */

  }, {
    key: "listWebhooksV1",
    value: function listWebhooksV1(payorId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payorId' is set

      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listWebhooksV1");
      }

      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'payorId': payorId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhooksResponse["default"];
      return this.apiClient.callApi('/v1/webhooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateWebhookV1 operation.
     * @callback module:api/WebhooksApi~updateWebhookV1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Webhook
     * Update Webhook
     * @param {String} webhookId Webhook id
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateWebhookRequest} opts.updateWebhookRequest 
     * @param {module:api/WebhooksApi~updateWebhookV1Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateWebhookV1",
    value: function updateWebhookV1(webhookId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateWebhookRequest']; // verify the required parameter 'webhookId' is set

      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling updateWebhookV1");
      }

      var pathParams = {
        'webhookId': webhookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/webhooks/{webhookId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WebhooksApi;
}();

exports["default"] = WebhooksApi;