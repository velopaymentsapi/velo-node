"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SupportedCurrencyResponseV = _interopRequireDefault(require("../model/SupportedCurrencyResponseV2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Currencies service.
* @module api/CurrenciesApi
* @version 2.26.127
*/
var CurrenciesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CurrenciesApi. 
  * @alias module:api/CurrenciesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CurrenciesApi(apiClient) {
    _classCallCheck(this, CurrenciesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the listSupportedCurrenciesV2 operation.
   * @callback module:api/CurrenciesApi~listSupportedCurrenciesV2Callback
   * @param {String} error Error message, if any.
   * @param {module:model/SupportedCurrencyResponseV2} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List Supported Currencies
   * List the supported currencies.
   * @param {module:api/CurrenciesApi~listSupportedCurrenciesV2Callback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SupportedCurrencyResponseV2}
   */


  _createClass(CurrenciesApi, [{
    key: "listSupportedCurrenciesV2",
    value: function listSupportedCurrenciesV2(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SupportedCurrencyResponseV["default"];
      return this.apiClient.callApi('/v2/currencies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CurrenciesApi;
}();

exports["default"] = CurrenciesApi;