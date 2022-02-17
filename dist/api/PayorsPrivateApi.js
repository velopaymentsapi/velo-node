"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatePayorLinkRequest = _interopRequireDefault(require("../model/CreatePayorLinkRequest"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse404"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* PayorsPrivate service.
* @module api/PayorsPrivateApi
* @version 2.29.128
*/
var PayorsPrivateApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PayorsPrivateApi. 
  * @alias module:api/PayorsPrivateApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PayorsPrivateApi(apiClient) {
    _classCallCheck(this, PayorsPrivateApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createPayorLinks operation.
   * @callback module:api/PayorsPrivateApi~createPayorLinksCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a Payor Link
   * This endpoint allows you to create a payor link.
   * @param {module:model/CreatePayorLinkRequest} createPayorLinkRequest Request to create a payor link
   * @param {module:api/PayorsPrivateApi~createPayorLinksCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(PayorsPrivateApi, [{
    key: "createPayorLinks",
    value: function createPayorLinks(createPayorLinkRequest, callback) {
      var postBody = createPayorLinkRequest; // verify the required parameter 'createPayorLinkRequest' is set

      if (createPayorLinkRequest === undefined || createPayorLinkRequest === null) {
        throw new Error("Missing the required parameter 'createPayorLinkRequest' when calling createPayorLinks");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oAuthVeloBackOffice'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/payorLinks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PayorsPrivateApi;
}();

exports["default"] = PayorsPrivateApi;