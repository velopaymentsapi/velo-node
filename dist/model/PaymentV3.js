"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayoutPayeeV = _interopRequireDefault(require("./PayoutPayeeV3"));

var _TransmissionType = _interopRequireDefault(require("./TransmissionType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentV3 model module.
 * @module model/PaymentV3
 * @version 2.23.78
 */
var PaymentV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentV3</code>.
   * @alias module:model/PaymentV3
   * @param paymentId {String} 
   */
  function PaymentV3(paymentId) {
    _classCallCheck(this, PaymentV3);

    PaymentV3.initialize(this, paymentId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentV3, null, [{
    key: "initialize",
    value: function initialize(obj, paymentId) {
      obj['paymentId'] = paymentId;
    }
    /**
     * Constructs a <code>PaymentV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentV3} obj Optional instance to populate.
     * @return {module:model/PaymentV3} The populated <code>PaymentV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentV3();

        if (data.hasOwnProperty('paymentId')) {
          obj['paymentId'] = _ApiClient["default"].convertToType(data['paymentId'], 'String');
        }

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('sourceAccountName')) {
          obj['sourceAccountName'] = _ApiClient["default"].convertToType(data['sourceAccountName'], 'String');
        }

        if (data.hasOwnProperty('payorPaymentId')) {
          obj['payorPaymentId'] = _ApiClient["default"].convertToType(data['payorPaymentId'], 'String');
        }

        if (data.hasOwnProperty('paymentMemo')) {
          obj['paymentMemo'] = _ApiClient["default"].convertToType(data['paymentMemo'], 'String');
        }

        if (data.hasOwnProperty('payee')) {
          obj['payee'] = _PayoutPayeeV["default"].constructFromObject(data['payee']);
        }

        if (data.hasOwnProperty('withdrawable')) {
          obj['withdrawable'] = _ApiClient["default"].convertToType(data['withdrawable'], 'Boolean');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('transmissionType')) {
          obj['transmissionType'] = _TransmissionType["default"].constructFromObject(data['transmissionType']);
        }
      }

      return obj;
    }
  }]);

  return PaymentV3;
}();
/**
 * @member {String} paymentId
 */


PaymentV3.prototype['paymentId'] = undefined;
/**
 * @member {String} remoteId
 */

PaymentV3.prototype['remoteId'] = undefined;
/**
 * @member {String} currency
 */

PaymentV3.prototype['currency'] = undefined;
/**
 * @member {Number} amount
 */

PaymentV3.prototype['amount'] = undefined;
/**
 * @member {String} sourceAccountName
 */

PaymentV3.prototype['sourceAccountName'] = undefined;
/**
 * @member {String} payorPaymentId
 */

PaymentV3.prototype['payorPaymentId'] = undefined;
/**
 * @member {String} paymentMemo
 */

PaymentV3.prototype['paymentMemo'] = undefined;
/**
 * @member {module:model/PayoutPayeeV3} payee
 */

PaymentV3.prototype['payee'] = undefined;
/**
 * @member {Boolean} withdrawable
 */

PaymentV3.prototype['withdrawable'] = undefined;
/**
 * @member {module:model/PaymentV3.StatusEnum} status
 */

PaymentV3.prototype['status'] = undefined;
/**
 * @member {module:model/TransmissionType} transmissionType
 */

PaymentV3.prototype['transmissionType'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

PaymentV3['StatusEnum'] = {
  /**
   * value: "SUBMITTED"
   * @const
   */
  "SUBMITTED": "SUBMITTED",

  /**
   * value: "ACCEPTED"
   * @const
   */
  "ACCEPTED": "ACCEPTED",

  /**
   * value: "REJECTED"
   * @const
   */
  "REJECTED": "REJECTED",

  /**
   * value: "WITHDRAWN"
   * @const
   */
  "WITHDRAWN": "WITHDRAWN",

  /**
   * value: "RETURNED"
   * @const
   */
  "RETURNED": "RETURNED",

  /**
   * value: "AWAITING_FUNDS"
   * @const
   */
  "AWAITING_FUNDS": "AWAITING_FUNDS",

  /**
   * value: "FUNDED"
   * @const
   */
  "FUNDED": "FUNDED",

  /**
   * value: "UNFUNDED"
   * @const
   */
  "UNFUNDED": "UNFUNDED",

  /**
   * value: "CANCELLED"
   * @const
   */
  "CANCELLED": "CANCELLED",

  /**
   * value: "REQUESTED"
   * @const
   */
  "REQUESTED": "REQUESTED"
};
var _default = PaymentV3;
exports["default"] = _default;