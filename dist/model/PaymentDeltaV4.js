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
 * The PaymentDeltaV4 model module.
 * @module model/PaymentDeltaV4
 * @version 2.23.78
 */
var PaymentDeltaV4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentDeltaV4</code>.
   * @alias module:model/PaymentDeltaV4
   * @param paymentId {String} 
   * @param payoutId {String} 
   */
  function PaymentDeltaV4(paymentId, payoutId) {
    _classCallCheck(this, PaymentDeltaV4);

    PaymentDeltaV4.initialize(this, paymentId, payoutId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentDeltaV4, null, [{
    key: "initialize",
    value: function initialize(obj, paymentId, payoutId) {
      obj['paymentId'] = paymentId;
      obj['payoutId'] = payoutId;
    }
    /**
     * Constructs a <code>PaymentDeltaV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentDeltaV4} obj Optional instance to populate.
     * @return {module:model/PaymentDeltaV4} The populated <code>PaymentDeltaV4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentDeltaV4();

        if (data.hasOwnProperty('paymentId')) {
          obj['paymentId'] = _ApiClient["default"].convertToType(data['paymentId'], 'String');
        }

        if (data.hasOwnProperty('payoutId')) {
          obj['payoutId'] = _ApiClient["default"].convertToType(data['payoutId'], 'String');
        }

        if (data.hasOwnProperty('payorPaymentId')) {
          obj['payorPaymentId'] = _ApiClient["default"].convertToType(data['payorPaymentId'], 'String');
        }

        if (data.hasOwnProperty('paymentCurrency')) {
          obj['paymentCurrency'] = _ApiClient["default"].convertToType(data['paymentCurrency'], 'String');
        }

        if (data.hasOwnProperty('paymentAmount')) {
          obj['paymentAmount'] = _ApiClient["default"].convertToType(data['paymentAmount'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('sourceCurrency')) {
          obj['sourceCurrency'] = _ApiClient["default"].convertToType(data['sourceCurrency'], 'String');
        }

        if (data.hasOwnProperty('sourceAmount')) {
          obj['sourceAmount'] = _ApiClient["default"].convertToType(data['sourceAmount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PaymentDeltaV4;
}();
/**
 * @member {String} paymentId
 */


PaymentDeltaV4.prototype['paymentId'] = undefined;
/**
 * @member {String} payoutId
 */

PaymentDeltaV4.prototype['payoutId'] = undefined;
/**
 * @member {String} payorPaymentId
 */

PaymentDeltaV4.prototype['payorPaymentId'] = undefined;
/**
 * @member {String} paymentCurrency
 */

PaymentDeltaV4.prototype['paymentCurrency'] = undefined;
/**
 * @member {Number} paymentAmount
 */

PaymentDeltaV4.prototype['paymentAmount'] = undefined;
/**
 * @member {String} status
 */

PaymentDeltaV4.prototype['status'] = undefined;
/**
 * @member {String} sourceCurrency
 */

PaymentDeltaV4.prototype['sourceCurrency'] = undefined;
/**
 * @member {Number} sourceAmount
 */

PaymentDeltaV4.prototype['sourceAmount'] = undefined;
var _default = PaymentDeltaV4;
exports["default"] = _default;