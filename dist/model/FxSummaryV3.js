"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentAuditCurrencyV = _interopRequireDefault(require("./PaymentAuditCurrencyV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The FxSummaryV3 model module.
 * @module model/FxSummaryV3
 * @version 2.29.130
 */
var FxSummaryV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FxSummaryV3</code>.
   * @alias module:model/FxSummaryV3
   * @param quoteId {String} 
   * @param creationDateTime {Date} 
   * @param rate {Number} 
   * @param invertedRate {Number} 
   * @param totalCost {Number} 
   * @param totalPaymentAmount {Number} 
   * @param status {module:model/FxSummaryV3.StatusEnum} 
   * @param fundingStatus {module:model/FxSummaryV3.FundingStatusEnum} 
   */
  function FxSummaryV3(quoteId, creationDateTime, rate, invertedRate, totalCost, totalPaymentAmount, status, fundingStatus) {
    _classCallCheck(this, FxSummaryV3);

    FxSummaryV3.initialize(this, quoteId, creationDateTime, rate, invertedRate, totalCost, totalPaymentAmount, status, fundingStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FxSummaryV3, null, [{
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
     * Constructs a <code>FxSummaryV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FxSummaryV3} obj Optional instance to populate.
     * @return {module:model/FxSummaryV3} The populated <code>FxSummaryV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FxSummaryV3();

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

  return FxSummaryV3;
}();
/**
 * @member {String} quoteId
 */


FxSummaryV3.prototype['quoteId'] = undefined;
/**
 * @member {Date} creationDateTime
 */

FxSummaryV3.prototype['creationDateTime'] = undefined;
/**
 * @member {Number} rate
 */

FxSummaryV3.prototype['rate'] = undefined;
/**
 * @member {Number} invertedRate
 */

FxSummaryV3.prototype['invertedRate'] = undefined;
/**
 * @member {Number} totalCost
 */

FxSummaryV3.prototype['totalCost'] = undefined;
/**
 * @member {Number} totalPaymentAmount
 */

FxSummaryV3.prototype['totalPaymentAmount'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrencyV3} sourceCurrency
 */

FxSummaryV3.prototype['sourceCurrency'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrencyV3} paymentCurrency
 */

FxSummaryV3.prototype['paymentCurrency'] = undefined;
/**
 * @member {module:model/FxSummaryV3.StatusEnum} status
 */

FxSummaryV3.prototype['status'] = undefined;
/**
 * @member {module:model/FxSummaryV3.FundingStatusEnum} fundingStatus
 */

FxSummaryV3.prototype['fundingStatus'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

FxSummaryV3['StatusEnum'] = {
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

FxSummaryV3['FundingStatusEnum'] = {
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
var _default = FxSummaryV3;
exports["default"] = _default;