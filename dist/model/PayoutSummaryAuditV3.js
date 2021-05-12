"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FxSummaryV = _interopRequireDefault(require("./FxSummaryV3"));

var _PayoutStatusV = _interopRequireDefault(require("./PayoutStatusV3"));

var _SourceAccountSummaryV = _interopRequireDefault(require("./SourceAccountSummaryV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayoutSummaryAuditV3 model module.
 * @module model/PayoutSummaryAuditV3
 * @version 2.26.127
 */
var PayoutSummaryAuditV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayoutSummaryAuditV3</code>.
   * @alias module:model/PayoutSummaryAuditV3
   * @param payoutId {String} 
   * @param status {module:model/PayoutStatusV3} 
   * @param submittedDateTime {String} 
   */
  function PayoutSummaryAuditV3(payoutId, status, submittedDateTime) {
    _classCallCheck(this, PayoutSummaryAuditV3);

    PayoutSummaryAuditV3.initialize(this, payoutId, status, submittedDateTime);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayoutSummaryAuditV3, null, [{
    key: "initialize",
    value: function initialize(obj, payoutId, status, submittedDateTime) {
      obj['payoutId'] = payoutId;
      obj['status'] = status;
      obj['submittedDateTime'] = submittedDateTime;
    }
    /**
     * Constructs a <code>PayoutSummaryAuditV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutSummaryAuditV3} obj Optional instance to populate.
     * @return {module:model/PayoutSummaryAuditV3} The populated <code>PayoutSummaryAuditV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayoutSummaryAuditV3();

        if (data.hasOwnProperty('payoutId')) {
          obj['payoutId'] = _ApiClient["default"].convertToType(data['payoutId'], 'String');
        }

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _PayoutStatusV["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('submittedDateTime')) {
          obj['submittedDateTime'] = _ApiClient["default"].convertToType(data['submittedDateTime'], 'String');
        }

        if (data.hasOwnProperty('instructedDateTime')) {
          obj['instructedDateTime'] = _ApiClient["default"].convertToType(data['instructedDateTime'], 'String');
        }

        if (data.hasOwnProperty('withdrawnDateTime')) {
          obj['withdrawnDateTime'] = _ApiClient["default"].convertToType(data['withdrawnDateTime'], 'String');
        }

        if (data.hasOwnProperty('totalPayments')) {
          obj['totalPayments'] = _ApiClient["default"].convertToType(data['totalPayments'], 'Number');
        }

        if (data.hasOwnProperty('totalIncompletePayments')) {
          obj['totalIncompletePayments'] = _ApiClient["default"].convertToType(data['totalIncompletePayments'], 'Number');
        }

        if (data.hasOwnProperty('totalFailedPayments')) {
          obj['totalFailedPayments'] = _ApiClient["default"].convertToType(data['totalFailedPayments'], 'Number');
        }

        if (data.hasOwnProperty('sourceAccountSummary')) {
          obj['sourceAccountSummary'] = _ApiClient["default"].convertToType(data['sourceAccountSummary'], [_SourceAccountSummaryV["default"]]);
        }

        if (data.hasOwnProperty('fxSummaries')) {
          obj['fxSummaries'] = _ApiClient["default"].convertToType(data['fxSummaries'], [_FxSummaryV["default"]]);
        }

        if (data.hasOwnProperty('payoutMemo')) {
          obj['payoutMemo'] = _ApiClient["default"].convertToType(data['payoutMemo'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayoutSummaryAuditV3;
}();
/**
 * @member {String} payoutId
 */


PayoutSummaryAuditV3.prototype['payoutId'] = undefined;
/**
 * @member {String} payorId
 */

PayoutSummaryAuditV3.prototype['payorId'] = undefined;
/**
 * @member {module:model/PayoutStatusV3} status
 */

PayoutSummaryAuditV3.prototype['status'] = undefined;
/**
 * @member {String} submittedDateTime
 */

PayoutSummaryAuditV3.prototype['submittedDateTime'] = undefined;
/**
 * @member {String} instructedDateTime
 */

PayoutSummaryAuditV3.prototype['instructedDateTime'] = undefined;
/**
 * @member {String} withdrawnDateTime
 */

PayoutSummaryAuditV3.prototype['withdrawnDateTime'] = undefined;
/**
 * @member {Number} totalPayments
 */

PayoutSummaryAuditV3.prototype['totalPayments'] = undefined;
/**
 * @member {Number} totalIncompletePayments
 */

PayoutSummaryAuditV3.prototype['totalIncompletePayments'] = undefined;
/**
 * @member {Number} totalFailedPayments
 */

PayoutSummaryAuditV3.prototype['totalFailedPayments'] = undefined;
/**
 * @member {Array.<module:model/SourceAccountSummaryV3>} sourceAccountSummary
 */

PayoutSummaryAuditV3.prototype['sourceAccountSummary'] = undefined;
/**
 * @member {Array.<module:model/FxSummaryV3>} fxSummaries
 */

PayoutSummaryAuditV3.prototype['fxSummaries'] = undefined;
/**
 * @member {String} payoutMemo
 */

PayoutSummaryAuditV3.prototype['payoutMemo'] = undefined;
var _default = PayoutSummaryAuditV3;
exports["default"] = _default;