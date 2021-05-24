"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AcceptedPaymentV = _interopRequireDefault(require("./AcceptedPaymentV3"));

var _QuoteFxSummaryV = _interopRequireDefault(require("./QuoteFxSummaryV3"));

var _RejectedPaymentV = _interopRequireDefault(require("./RejectedPaymentV3"));

var _SourceAccountV = _interopRequireDefault(require("./SourceAccountV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayoutSummaryResponseV3 model module.
 * @module model/PayoutSummaryResponseV3
 * @version 2.26.124
 */
var PayoutSummaryResponseV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayoutSummaryResponseV3</code>.
   * @alias module:model/PayoutSummaryResponseV3
   * @param paymentsWithdrawn {Number} 
   * @param fxSummaries {Array.<module:model/QuoteFxSummaryV3>} 
   * @param accounts {Array.<module:model/SourceAccountV3>} 
   * @param acceptedPayments {Array.<module:model/AcceptedPaymentV3>} 
   * @param rejectedPayments {Array.<module:model/RejectedPaymentV3>} 
   */
  function PayoutSummaryResponseV3(paymentsWithdrawn, fxSummaries, accounts, acceptedPayments, rejectedPayments) {
    _classCallCheck(this, PayoutSummaryResponseV3);

    PayoutSummaryResponseV3.initialize(this, paymentsWithdrawn, fxSummaries, accounts, acceptedPayments, rejectedPayments);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayoutSummaryResponseV3, null, [{
    key: "initialize",
    value: function initialize(obj, paymentsWithdrawn, fxSummaries, accounts, acceptedPayments, rejectedPayments) {
      obj['paymentsWithdrawn'] = paymentsWithdrawn;
      obj['fxSummaries'] = fxSummaries;
      obj['accounts'] = accounts;
      obj['acceptedPayments'] = acceptedPayments;
      obj['rejectedPayments'] = rejectedPayments;
    }
    /**
     * Constructs a <code>PayoutSummaryResponseV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutSummaryResponseV3} obj Optional instance to populate.
     * @return {module:model/PayoutSummaryResponseV3} The populated <code>PayoutSummaryResponseV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayoutSummaryResponseV3();

        if (data.hasOwnProperty('payoutId')) {
          obj['payoutId'] = _ApiClient["default"].convertToType(data['payoutId'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('paymentsSubmitted')) {
          obj['paymentsSubmitted'] = _ApiClient["default"].convertToType(data['paymentsSubmitted'], 'Number');
        }

        if (data.hasOwnProperty('paymentsAccepted')) {
          obj['paymentsAccepted'] = _ApiClient["default"].convertToType(data['paymentsAccepted'], 'Number');
        }

        if (data.hasOwnProperty('paymentsRejected')) {
          obj['paymentsRejected'] = _ApiClient["default"].convertToType(data['paymentsRejected'], 'Number');
        }

        if (data.hasOwnProperty('paymentsWithdrawn')) {
          obj['paymentsWithdrawn'] = _ApiClient["default"].convertToType(data['paymentsWithdrawn'], 'Number');
        }

        if (data.hasOwnProperty('fxSummaries')) {
          obj['fxSummaries'] = _ApiClient["default"].convertToType(data['fxSummaries'], [_QuoteFxSummaryV["default"]]);
        }

        if (data.hasOwnProperty('accounts')) {
          obj['accounts'] = _ApiClient["default"].convertToType(data['accounts'], [_SourceAccountV["default"]]);
        }

        if (data.hasOwnProperty('acceptedPayments')) {
          obj['acceptedPayments'] = _ApiClient["default"].convertToType(data['acceptedPayments'], [_AcceptedPaymentV["default"]]);
        }

        if (data.hasOwnProperty('rejectedPayments')) {
          obj['rejectedPayments'] = _ApiClient["default"].convertToType(data['rejectedPayments'], [_RejectedPaymentV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PayoutSummaryResponseV3;
}();
/**
 * @member {String} payoutId
 */


PayoutSummaryResponseV3.prototype['payoutId'] = undefined;
/**
 * @member {String} status
 */

PayoutSummaryResponseV3.prototype['status'] = undefined;
/**
 * @member {Number} paymentsSubmitted
 */

PayoutSummaryResponseV3.prototype['paymentsSubmitted'] = undefined;
/**
 * @member {Number} paymentsAccepted
 */

PayoutSummaryResponseV3.prototype['paymentsAccepted'] = undefined;
/**
 * @member {Number} paymentsRejected
 */

PayoutSummaryResponseV3.prototype['paymentsRejected'] = undefined;
/**
 * @member {Number} paymentsWithdrawn
 */

PayoutSummaryResponseV3.prototype['paymentsWithdrawn'] = undefined;
/**
 * @member {Array.<module:model/QuoteFxSummaryV3>} fxSummaries
 */

PayoutSummaryResponseV3.prototype['fxSummaries'] = undefined;
/**
 * @member {Array.<module:model/SourceAccountV3>} accounts
 */

PayoutSummaryResponseV3.prototype['accounts'] = undefined;
/**
 * @member {Array.<module:model/AcceptedPaymentV3>} acceptedPayments
 */

PayoutSummaryResponseV3.prototype['acceptedPayments'] = undefined;
/**
 * @member {Array.<module:model/RejectedPaymentV3>} rejectedPayments
 */

PayoutSummaryResponseV3.prototype['rejectedPayments'] = undefined;
var _default = PayoutSummaryResponseV3;
exports["default"] = _default;