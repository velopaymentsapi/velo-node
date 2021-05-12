"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FxSummary = _interopRequireDefault(require("./FxSummary"));

var _PayoutStatus = _interopRequireDefault(require("./PayoutStatus"));

var _PayoutType = _interopRequireDefault(require("./PayoutType"));

var _SourceAccountSummary = _interopRequireDefault(require("./SourceAccountSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayoutSummaryAudit model module.
 * @module model/PayoutSummaryAudit
 * @version 2.26.127
 */
var PayoutSummaryAudit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayoutSummaryAudit</code>.
   * @alias module:model/PayoutSummaryAudit
   * @param status {module:model/PayoutStatus} 
   * @param submittedDateTime {String} 
   * @param payoutType {module:model/PayoutType} 
   * @param payorName {String} 
   */
  function PayoutSummaryAudit(status, submittedDateTime, payoutType, payorName) {
    _classCallCheck(this, PayoutSummaryAudit);

    PayoutSummaryAudit.initialize(this, status, submittedDateTime, payoutType, payorName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayoutSummaryAudit, null, [{
    key: "initialize",
    value: function initialize(obj, status, submittedDateTime, payoutType, payorName) {
      obj['status'] = status;
      obj['submittedDateTime'] = submittedDateTime;
      obj['payoutType'] = payoutType;
      obj['payorName'] = payorName;
    }
    /**
     * Constructs a <code>PayoutSummaryAudit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutSummaryAudit} obj Optional instance to populate.
     * @return {module:model/PayoutSummaryAudit} The populated <code>PayoutSummaryAudit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayoutSummaryAudit();

        if (data.hasOwnProperty('payoutId')) {
          obj['payoutId'] = _ApiClient["default"].convertToType(data['payoutId'], 'String');
        }

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _PayoutStatus["default"].constructFromObject(data['status']);
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
          obj['sourceAccountSummary'] = _ApiClient["default"].convertToType(data['sourceAccountSummary'], [_SourceAccountSummary["default"]]);
        }

        if (data.hasOwnProperty('fxSummaries')) {
          obj['fxSummaries'] = _ApiClient["default"].convertToType(data['fxSummaries'], [_FxSummary["default"]]);
        }

        if (data.hasOwnProperty('payoutMemo')) {
          obj['payoutMemo'] = _ApiClient["default"].convertToType(data['payoutMemo'], 'String');
        }

        if (data.hasOwnProperty('payoutType')) {
          obj['payoutType'] = _PayoutType["default"].constructFromObject(data['payoutType']);
        }

        if (data.hasOwnProperty('payorName')) {
          obj['payorName'] = _ApiClient["default"].convertToType(data['payorName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayoutSummaryAudit;
}();
/**
 * @member {String} payoutId
 */


PayoutSummaryAudit.prototype['payoutId'] = undefined;
/**
 * @member {String} payorId
 */

PayoutSummaryAudit.prototype['payorId'] = undefined;
/**
 * @member {module:model/PayoutStatus} status
 */

PayoutSummaryAudit.prototype['status'] = undefined;
/**
 * @member {Date} dateTime
 */

PayoutSummaryAudit.prototype['dateTime'] = undefined;
/**
 * @member {String} submittedDateTime
 */

PayoutSummaryAudit.prototype['submittedDateTime'] = undefined;
/**
 * @member {String} instructedDateTime
 */

PayoutSummaryAudit.prototype['instructedDateTime'] = undefined;
/**
 * @member {Date} withdrawnDateTime
 */

PayoutSummaryAudit.prototype['withdrawnDateTime'] = undefined;
/**
 * @member {Number} totalPayments
 */

PayoutSummaryAudit.prototype['totalPayments'] = undefined;
/**
 * @member {Number} totalIncompletePayments
 */

PayoutSummaryAudit.prototype['totalIncompletePayments'] = undefined;
/**
 * @member {Number} totalReturnedPayments
 */

PayoutSummaryAudit.prototype['totalReturnedPayments'] = undefined;
/**
 * @member {Number} totalWithdrawnPayments
 */

PayoutSummaryAudit.prototype['totalWithdrawnPayments'] = undefined;
/**
 * @member {Array.<module:model/SourceAccountSummary>} sourceAccountSummary
 */

PayoutSummaryAudit.prototype['sourceAccountSummary'] = undefined;
/**
 * @member {Array.<module:model/FxSummary>} fxSummaries
 */

PayoutSummaryAudit.prototype['fxSummaries'] = undefined;
/**
 * @member {String} payoutMemo
 */

PayoutSummaryAudit.prototype['payoutMemo'] = undefined;
/**
 * @member {module:model/PayoutType} payoutType
 */

PayoutSummaryAudit.prototype['payoutType'] = undefined;
/**
 * @member {String} payorName
 */

PayoutSummaryAudit.prototype['payorName'] = undefined;
var _default = PayoutSummaryAudit;
exports["default"] = _default;