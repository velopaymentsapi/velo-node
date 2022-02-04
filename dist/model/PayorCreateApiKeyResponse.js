"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PayorCreateApiKeyResponse model module.
 * @module model/PayorCreateApiKeyResponse
 * @version 2.29.130
 */
var PayorCreateApiKeyResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorCreateApiKeyResponse</code>.
   * @alias module:model/PayorCreateApiKeyResponse
   */
  function PayorCreateApiKeyResponse() {
    _classCallCheck(this, PayorCreateApiKeyResponse);

    PayorCreateApiKeyResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorCreateApiKeyResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayorCreateApiKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorCreateApiKeyResponse} obj Optional instance to populate.
     * @return {module:model/PayorCreateApiKeyResponse} The populated <code>PayorCreateApiKeyResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorCreateApiKeyResponse();

        if (data.hasOwnProperty('apiKey')) {
          obj['apiKey'] = _ApiClient["default"].convertToType(data['apiKey'], 'String');
        }

        if (data.hasOwnProperty('apiSecret')) {
          obj['apiSecret'] = _ApiClient["default"].convertToType(data['apiSecret'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayorCreateApiKeyResponse;
}();
/**
 * API Key
 * @member {String} apiKey
 */


PayorCreateApiKeyResponse.prototype['apiKey'] = undefined;
/**
 * API Secret
 * @member {String} apiSecret
 */

PayorCreateApiKeyResponse.prototype['apiSecret'] = undefined;
var _default = PayorCreateApiKeyResponse;
exports["default"] = _default;