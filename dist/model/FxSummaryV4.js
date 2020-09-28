"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentAuditCurrencyV = _interopRequireDefault(require("./PaymentAuditCurrencyV4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FxSummaryV4 model module.
 * @module model/FxSummaryV4
 * @version 2.23.78
 */
var FxSummaryV4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FxSummaryV4</code>.
   * @alias module:model/FxSummaryV4
   * @param quoteId {String} 
   * @param creationDateTime {Date} 
   * @param rate {Number} 
   * @param invertedRate {Number} 
   * @param totalCost {Number} 
   * @param totalPaymentAmount {Number} 
   * @param status {module:model/FxSummaryV4.StatusEnum} 
   * @param fundingStatus {module:model/FxSummaryV4.FundingStatusEnum} 
   */
  function FxSummaryV4(quoteId, creationDateTime, rate, invertedRate, totalCost, totalPaymentAmount, status, fundingStatus) {
    _classCallCheck(this, FxSummaryV4);

    FxSummaryV4.initialize(this, quoteId, creationDateTime, rate, invertedRate, totalCost, totalPaymentAmount, status, fundingStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FxSummaryV4, null, [{
    key: "initialize",
    value: function initialize(obj, quoteId, creationDateTime, rate, invertedRate, totalCost, totalPaymentAmount, status, fundingStatus) {
      obj['quoteId'] = quoteId;
      obj['creationDateTime'] = creationDateTime;
      obj['rate'] = rate;
      obj['invertedRate'] = invertedRate;
      obj['totalCost'] = totalCost;
      obj['totalPaymentAmount'] = totalPaymentAmount;
      obj['status'] = status;
      obj['fundingStatus'] = fundingStatus;
    }
    /**
     * Constructs a <code>FxSummaryV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FxSummaryV4} obj Optional instance to populate.
     * @return {module:model/FxSummaryV4} The populated <code>FxSummaryV4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FxSummaryV4();

        if (data.hasOwnProperty('quoteId')) {
          obj['quoteId'] = _ApiClient["default"].convertToType(data['quoteId'], 'String');
        }

        if (data.hasOwnProperty('creationDateTime')) {
          obj['creationDateTime'] = _ApiClient["default"].convertToType(data['creationDateTime'], 'Date');
        }

        if (data.hasOwnProperty('rate')) {
          obj['rate'] = _ApiClient["default"].convertToType(data['rate'], 'Number');
        }

        if (data.hasOwnProperty('invertedRate')) {
          obj['invertedRate'] = _ApiClient["default"].convertToType(data['invertedRate'], 'Number');
        }

        if (data.hasOwnProperty('totalCost')) {
          obj['totalCost'] = _ApiClient["default"].convertToType(data['totalCost'], 'Number');
        }

        if (data.hasOwnProperty('totalPaymentAmount')) {
          obj['totalPaymentAmount'] = _ApiClient["default"].convertToType(data['totalPaymentAmount'], 'Number');
        }

        if (data.hasOwnProperty('sourceCurrency')) {
          obj['sourceCurrency'] = _PaymentAuditCurrencyV["default"].constructFromObject(data['sourceCurrency']);
        }

        if (data.hasOwnProperty('paymentCurrency')) {
          obj['paymentCurrency'] = _PaymentAuditCurrencyV["default"].constructFromObject(data['paymentCurrency']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('fundingStatus')) {
          obj['fundingStatus'] = _ApiClient["default"].convertToType(data['fundingStatus'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FxSummaryV4;
}();
/**
 * @member {String} quoteId
 */


FxSummaryV4.prototype['quoteId'] = undefined;
/**
 * @member {Date} creationDateTime
 */

FxSummaryV4.prototype['creationDateTime'] = undefined;
/**
 * @member {Number} rate
 */

FxSummaryV4.prototype['rate'] = undefined;
/**
 * @member {Number} invertedRate
 */

FxSummaryV4.prototype['invertedRate'] = undefined;
/**
 * @member {Number} totalCost
 */

FxSummaryV4.prototype['totalCost'] = undefined;
/**
 * @member {Number} totalPaymentAmount
 */

FxSummaryV4.prototype['totalPaymentAmount'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrencyV4} sourceCurrency
 */

FxSummaryV4.prototype['sourceCurrency'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrencyV4} paymentCurrency
 */

FxSummaryV4.prototype['paymentCurrency'] = undefined;
/**
 * @member {module:model/FxSummaryV4.StatusEnum} status
 */

FxSummaryV4.prototype['status'] = undefined;
/**
 * @member {module:model/FxSummaryV4.FundingStatusEnum} fundingStatus
 */

FxSummaryV4.prototype['fundingStatus'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

FxSummaryV4['StatusEnum'] = {
  /**
   * value: "UNQUOTED"
   * @const
   */
  "UNQUOTED": "UNQUOTED",

  /**
   * value: "QUOTED"
   * @const
   */
  "QUOTED": "QUOTED",

  /**
   * value: "EXPIRED"
   * @const
   */
  "EXPIRED": "EXPIRED",

  /**
   * value: "EXECUTED"
   * @const
   */
  "EXECUTED": "EXECUTED"
};
/**
 * Allowed values for the <code>fundingStatus</code> property.
 * @enum {String}
 * @readonly
 */

FxSummaryV4['FundingStatusEnum'] = {
  /**
   * value: "FUNDED"
   * @const
   */
  "FUNDED": "FUNDED",

  /**
   * value: "INSTRUCTED"
   * @const
   */
  "INSTRUCTED": "INSTRUCTED",

  /**
   * value: "UNFUNDED"
   * @const
   */
  "UNFUNDED": "UNFUNDED"
};
var _default = FxSummaryV4;
exports["default"] = _default;