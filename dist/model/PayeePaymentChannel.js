"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayeePaymentChannel model module.
 * @module model/PayeePaymentChannel
 * @version 2.23.78
 */
var PayeePaymentChannel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeePaymentChannel</code>.
   * @alias module:model/PayeePaymentChannel
   * @param accountNumber {String} 
   * @param routingNumber {String} 
   * @param countryCode {String} Country Code must be a valid 2 letter ISO 3166-1 country code.
   * @param currency {module:model/PayeePaymentChannel.CurrencyEnum} 
   * @param accountName {String} 
   */
  function PayeePaymentChannel(accountNumber, routingNumber, countryCode, currency, accountName) {
    _classCallCheck(this, PayeePaymentChannel);

    PayeePaymentChannel.initialize(this, accountNumber, routingNumber, countryCode, currency, accountName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeePaymentChannel, null, [{
    key: "initialize",
    value: function initialize(obj, accountNumber, routingNumber, countryCode, currency, accountName) {
      obj['accountNumber'] = accountNumber;
      obj['routingNumber'] = routingNumber;
      obj['countryCode'] = countryCode;
      obj['currency'] = currency;
      obj['accountName'] = accountName;
    }
    /**
     * Constructs a <code>PayeePaymentChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeePaymentChannel} obj Optional instance to populate.
     * @return {module:model/PayeePaymentChannel} The populated <code>PayeePaymentChannel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeePaymentChannel();

        if (data.hasOwnProperty('paymentChannelName')) {
          obj['paymentChannelName'] = _ApiClient["default"].convertToType(data['paymentChannelName'], 'String');
        }

        if (data.hasOwnProperty('iban')) {
          obj['iban'] = _ApiClient["default"].convertToType(data['iban'], 'String');
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('routingNumber')) {
          obj['routingNumber'] = _ApiClient["default"].convertToType(data['routingNumber'], 'String');
        }

        if (data.hasOwnProperty('countryCode')) {
          obj['countryCode'] = _ApiClient["default"].convertToType(data['countryCode'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('accountName')) {
          obj['accountName'] = _ApiClient["default"].convertToType(data['accountName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayeePaymentChannel;
}();
/**
 * @member {String} paymentChannelName
 */


PayeePaymentChannel.prototype['paymentChannelName'] = undefined;
/**
 * Must match the regular expression ```^[A-Za-z0-9]+$```.
 * @member {String} iban
 */

PayeePaymentChannel.prototype['iban'] = undefined;
/**
 * @member {String} accountNumber
 */

PayeePaymentChannel.prototype['accountNumber'] = undefined;
/**
 * @member {String} routingNumber
 */

PayeePaymentChannel.prototype['routingNumber'] = undefined;
/**
 * Country Code must be a valid 2 letter ISO 3166-1 country code.
 * @member {String} countryCode
 */

PayeePaymentChannel.prototype['countryCode'] = undefined;
/**
 * @member {module:model/PayeePaymentChannel.CurrencyEnum} currency
 */

PayeePaymentChannel.prototype['currency'] = undefined;
/**
 * @member {String} accountName
 */

PayeePaymentChannel.prototype['accountName'] = undefined;
/**
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */

PayeePaymentChannel['CurrencyEnum'] = {
  /**
   * value: "USD"
   * @const
   */
  "USD": "USD",

  /**
   * value: "GBP"
   * @const
   */
  "GBP": "GBP",

  /**
   * value: "EUR"
   * @const
   */
  "EUR": "EUR"
};
var _default = PayeePaymentChannel;
exports["default"] = _default;