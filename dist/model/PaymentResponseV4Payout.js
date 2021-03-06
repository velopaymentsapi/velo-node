"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayoutPayor = _interopRequireDefault(require("./PayoutPayor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentResponseV4Payout model module.
 * @module model/PaymentResponseV4Payout
 * @version 2.26.124
 */
var PaymentResponseV4Payout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentResponseV4Payout</code>.
   * @alias module:model/PaymentResponseV4Payout
   */
  function PaymentResponseV4Payout() {
    _classCallCheck(this, PaymentResponseV4Payout);

    PaymentResponseV4Payout.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentResponseV4Payout, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentResponseV4Payout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentResponseV4Payout} obj Optional instance to populate.
     * @return {module:model/PaymentResponseV4Payout} The populated <code>PaymentResponseV4Payout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentResponseV4Payout();

        if (data.hasOwnProperty('payoutId')) {
          obj['payoutId'] = _ApiClient["default"].convertToType(data['payoutId'], 'String');
        }

        if (data.hasOwnProperty('payoutFrom')) {
          obj['payoutFrom'] = _PayoutPayor["default"].constructFromObject(data['payoutFrom']);
        }

        if (data.hasOwnProperty('payoutTo')) {
          obj['payoutTo'] = _PayoutPayor["default"].constructFromObject(data['payoutTo']);
        }
      }

      return obj;
    }
  }]);

  return PaymentResponseV4Payout;
}();
/**
 * @member {String} payoutId
 */


PaymentResponseV4Payout.prototype['payoutId'] = undefined;
/**
 * @member {module:model/PayoutPayor} payoutFrom
 */

PaymentResponseV4Payout.prototype['payoutFrom'] = undefined;
/**
 * @member {module:model/PayoutPayor} payoutTo
 */

PaymentResponseV4Payout.prototype['payoutTo'] = undefined;
var _default = PaymentResponseV4Payout;
exports["default"] = _default;