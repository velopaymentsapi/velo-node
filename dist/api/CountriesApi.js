"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse401"));

var _PaymentChannelRulesResponse = _interopRequireDefault(require("../model/PaymentChannelRulesResponse"));

var _SupportedCountriesResponse = _interopRequireDefault(require("../model/SupportedCountriesResponse"));

var _SupportedCountriesResponseV = _interopRequireDefault(require("../model/SupportedCountriesResponseV2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Countries service.
* @module api/CountriesApi
* @version 2.26.124
*/
var CountriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CountriesApi. 
  * @alias module:api/CountriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CountriesApi(apiClient) {
    _classCallCheck(this, CountriesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the listPaymentChannelRulesV1 operation.
   * @callback module:api/CountriesApi~listPaymentChannelRulesV1Callback
   * @param {String} error Error message, if any.
   * @param {module:model/PaymentChannelRulesResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List Payment Channel Country Rules
   * List the country specific payment channel rules.
   * @param {module:api/CountriesApi~listPaymentChannelRulesV1Callback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaymentChannelRulesResponse}
   */


  _createClass(CountriesApi, [{
    key: "listPaymentChannelRulesV1",
    value: function listPaymentChannelRulesV1(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaymentChannelRulesResponse["default"];
      return this.apiClient.callApi('/v1/paymentChannelRules', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listSupportedCountriesV1 operation.
     * @callback module:api/CountriesApi~listSupportedCountriesV1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/SupportedCountriesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Supported Countries
     * <p>List the supported countries.</p> <p>This version will be retired in March 2020. Use /v2/supportedCountries</p> 
     * @param {module:api/CountriesApi~listSupportedCountriesV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SupportedCountriesResponse}
     */

  }, {
    key: "listSupportedCountriesV1",
    value: function listSupportedCountriesV1(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SupportedCountriesResponse["default"];
      return this.apiClient.callApi('/v1/supportedCountries', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listSupportedCountriesV2 operation.
     * @callback module:api/CountriesApi~listSupportedCountriesV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/SupportedCountriesResponseV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Supported Countries
     * List the supported countries.
     * @param {module:api/CountriesApi~listSupportedCountriesV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SupportedCountriesResponseV2}
     */

  }, {
    key: "listSupportedCountriesV2",
    value: function listSupportedCountriesV2(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SupportedCountriesResponseV["default"];
      return this.apiClient.callApi('/v2/supportedCountries', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CountriesApi;
}();

exports["default"] = CountriesApi;