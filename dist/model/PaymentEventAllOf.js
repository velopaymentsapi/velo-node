"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayoutPayorIds = _interopRequireDefault(require("./PayoutPayorIds"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentEventAllOf model module.
 * @module model/PaymentEventAllOf
 * @version 2.26.124
 */
var PaymentEventAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentEventAllOf</code>.
   * @alias module:model/PaymentEventAllOf
   * @param paymentId {String} ID of this payment within the Velo platform
   */
  function PaymentEventAllOf(paymentId) {
    _classCallCheck(this, PaymentEventAllOf);

    PaymentEventAllOf.initialize(this, paymentId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentEventAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, paymentId) {
      obj['paymentId'] = paymentId;
    }
    /**
     * Constructs a <code>PaymentEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentEventAllOf} obj Optional instance to populate.
     * @return {module:model/PaymentEventAllOf} The populated <code>PaymentEventAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentEventAllOf();

        if (data.hasOwnProperty('paymentId')) {
          obj['paymentId'] = _ApiClient["default"].convertToType(data['paymentId'], 'String');
        }

        if (data.hasOwnProperty('payoutPayorIds')) {
          obj['payoutPayorIds'] = _PayoutPayorIds["default"].constructFromObject(data['payoutPayorIds']);
        }

        if (data.hasOwnProperty('payorPaymentId')) {
          obj['payorPaymentId'] = _ApiClient["default"].convertToType(data['payorPaymentId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaymentEventAllOf;
}();
/**
 * ID of this payment within the Velo platform
 * @member {String} paymentId
 */


PaymentEventAllOf.prototype['paymentId'] = undefined;
/**
 * @member {module:model/PayoutPayorIds} payoutPayorIds
 */

PaymentEventAllOf.prototype['payoutPayorIds'] = undefined;
/**
 * ID of this payment in the payors system
 * @member {String} payorPaymentId
 */

PaymentEventAllOf.prototype['payorPaymentId'] = undefined;
var _default = PaymentEventAllOf;
exports["default"] = _default;