"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FxSummaryV = _interopRequireDefault(require("./FxSummaryV4"));

var _PayoutStatusV = _interopRequireDefault(require("./PayoutStatusV4"));

var _PayoutTypeV = _interopRequireDefault(require("./PayoutTypeV4"));

var _SourceAccountSummaryV = _interopRequireDefault(require("./SourceAccountSummaryV4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayoutSummaryAuditV4 model module.
 * @module model/PayoutSummaryAuditV4
 * @version 2.23.78
 */
var PayoutSummaryAuditV4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayoutSummaryAuditV4</code>.
   * @alias module:model/PayoutSummaryAuditV4
   * @param status {module:model/PayoutStatusV4} 
   * @param submittedDateTime {String} 
   * @param payoutType {module:model/PayoutTypeV4} 
   * @param payorName {String} 
   */
  function PayoutSummaryAuditV4(status, submittedDateTime, payoutType, payorName) {
    _classCallCheck(this, PayoutSummaryAuditV4);

    PayoutSummaryAuditV4.initialize(this, status, submittedDateTime, payoutType, payorName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayoutSummaryAuditV4, null, [{
    key: "initialize",
    value: function initialize(obj, status, submittedDateTime, payoutType, payorName) {
      obj['status'] = status;
      obj['submittedDateTime'] = submittedDateTime;
      obj['payoutType'] = payoutType;
      obj['payorName'] = payorName;
    }
    /**
     * Constructs a <code>PayoutSummaryAuditV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutSummaryAuditV4} obj Optional instance to populate.
     * @return {module:model/PayoutSummaryAuditV4} The populated <code>PayoutSummaryAuditV4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayoutSummaryAuditV4();

        if (data.hasOwnProperty('payoutId')) {
          obj['payoutId'] = _ApiClient["default"].convertToType(data['payoutId'], 'String');
        }

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _PayoutStatusV["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('dateTime')) {
          obj['dateTime'] = _ApiClient["default"].convertToType(data['dateTime'], 'Date');
        }

        if (data.hasOwnProperty('submittedDateTime')) {
          obj['submittedDateTime'] = _ApiClient["default"].convertToType(data['submittedDateTime'], 'String');
        }

        if (data.hasOwnProperty('instructedDateTime')) {
          obj['instructedDateTime'] = _ApiClient["default"].convertToType(data['instructedDateTime'], 'String');
        }

        if (data.hasOwnProperty('withdrawnDateTime')) {
          obj['withdrawnDateTime'] = _ApiClient["default"].convertToType(data['withdrawnDateTime'], 'Date');
        }

        if (data.hasOwnProperty('totalPayments')) {
          obj['totalPayments'] = _ApiClient["default"].convertToType(data['totalPayments'], 'Number');
        }

        if (data.hasOwnProperty('totalIncompletePayments')) {
          obj['totalIncompletePayments'] = _ApiClient["default"].convertToType(data['totalIncompletePayments'], 'Number');
        }

        if (data.hasOwnProperty('totalReturnedPayments')) {
          obj['totalReturnedPayments'] = _ApiClient["default"].convertToType(data['totalReturnedPayments'], 'Number');
        }

        if (data.hasOwnProperty('totalWithdrawnPayments')) {
          obj['totalWithdrawnPayments'] = _ApiClient["default"].convertToType(data['totalWithdrawnPayments'], 'Number');
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

        if (data.hasOwnProperty('payoutType')) {
          obj['payoutType'] = _PayoutTypeV["default"].constructFromObject(data['payoutType']);
        }

        if (data.hasOwnProperty('payorName')) {
          obj['payorName'] = _ApiClient["default"].convertToType(data['payorName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayoutSummaryAuditV4;
}();
/**
 * @member {String} payoutId
 */


PayoutSummaryAuditV4.prototype['payoutId'] = undefined;
/**
 * @member {String} payorId
 */

PayoutSummaryAuditV4.prototype['payorId'] = undefined;
/**
 * @member {module:model/PayoutStatusV4} status
 */

PayoutSummaryAuditV4.prototype['status'] = undefined;
/**
 * @member {Date} dateTime
 */

PayoutSummaryAuditV4.prototype['dateTime'] = undefined;
/**
 * @member {String} submittedDateTime
 */

PayoutSummaryAuditV4.prototype['submittedDateTime'] = undefined;
/**
 * @member {String} instructedDateTime
 */

PayoutSummaryAuditV4.prototype['instructedDateTime'] = undefined;
/**
 * @member {Date} withdrawnDateTime
 */

PayoutSummaryAuditV4.prototype['withdrawnDateTime'] = undefined;
/**
 * @member {Number} totalPayments
 */

PayoutSummaryAuditV4.prototype['totalPayments'] = undefined;
/**
 * @member {Number} totalIncompletePayments
 */

PayoutSummaryAuditV4.prototype['totalIncompletePayments'] = undefined;
/**
 * @member {Number} totalReturnedPayments
 */

PayoutSummaryAuditV4.prototype['totalReturnedPayments'] = undefined;
/**
 * @member {Number} totalWithdrawnPayments
 */

PayoutSummaryAuditV4.prototype['totalWithdrawnPayments'] = undefined;
/**
 * @member {Array.<module:model/SourceAccountSummaryV4>} sourceAccountSummary
 */

PayoutSummaryAuditV4.prototype['sourceAccountSummary'] = undefined;
/**
 * @member {Array.<module:model/FxSummaryV4>} fxSummaries
 */

PayoutSummaryAuditV4.prototype['fxSummaries'] = undefined;
/**
 * @member {String} payoutMemo
 */

PayoutSummaryAuditV4.prototype['payoutMemo'] = undefined;
/**
 * @member {module:model/PayoutTypeV4} payoutType
 */

PayoutSummaryAuditV4.prototype['payoutType'] = undefined;
/**
 * @member {String} payorName
 */

PayoutSummaryAuditV4.prototype['payorName'] = undefined;
var _default = PayoutSummaryAuditV4;
exports["default"] = _default;