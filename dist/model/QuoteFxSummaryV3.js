"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The QuoteFxSummaryV3 model module.
 * @module model/QuoteFxSummaryV3
 * @version 2.29.130
 */
var QuoteFxSummaryV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QuoteFxSummaryV3</code>.
   * @alias module:model/QuoteFxSummaryV3
   * @param rate {Number} 
   * @param creationTime {Date} 
   * @param quoteId {String} 
   * @param totalSourceAmount {Number} 
   * @param totalPaymentAmount {Number} 
   * @param sourceCurrency {String} Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
   * @param paymentCurrency {String} Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
   * @param fundingStatus {module:model/QuoteFxSummaryV3.FundingStatusEnum} 
   * @param status {module:model/QuoteFxSummaryV3.StatusEnum} 
   */
  function QuoteFxSummaryV3(rate, creationTime, quoteId, totalSourceAmount, totalPaymentAmount, sourceCurrency, paymentCurrency, fundingStatus, status) {
    _classCallCheck(this, QuoteFxSummaryV3);

    QuoteFxSummaryV3.initialize(this, rate, creationTime, quoteId, totalSourceAmount, totalPaymentAmount, sourceCurrency, paymentCurrency, fundingStatus, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(QuoteFxSummaryV3, null, [{
    key: "initialize",
    value: function initialize(obj, rate, creationTime, quoteId, totalSourceAmount, totalPaymentAmount, sourceCurrency, paymentCurrency, fundingStatus, status) {
      obj['rate'] = rate;
      obj['creationTime'] = creationTime;
      obj['quoteId'] = quoteId;
      obj['totalSourceAmount'] = totalSourceAmount;
      obj['totalPaymentAmount'] = totalPaymentAmount;
      obj['sourceCurrency'] = sourceCurrency;
      obj['paymentCurrency'] = paymentCurrency;
      obj['fundingStatus'] = fundingStatus;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>QuoteFxSummaryV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteFxSummaryV3} obj Optional instance to populate.
     * @return {module:model/QuoteFxSummaryV3} The populated <code>QuoteFxSummaryV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QuoteFxSummaryV3();

        if (data.hasOwnProperty('rate')) {
          obj['rate'] = _ApiClient["default"].convertToType(data['rate'], 'Number');
        }

        if (data.hasOwnProperty('invertedRate')) {
          obj['invertedRate'] = _ApiClient["default"].convertToType(data['invertedRate'], 'Number');
        }

        if (data.hasOwnProperty('creationTime')) {
          obj['creationTime'] = _ApiClient["default"].convertToType(data['creationTime'], 'Date');
        }

        if (data.hasOwnProperty('expiryTime')) {
          obj['expiryTime'] = _ApiClient["default"].convertToType(data['expiryTime'], 'Date');
        }

        if (data.hasOwnProperty('quoteId')) {
          obj['quoteId'] = _ApiClient["default"].convertToType(data['quoteId'], 'String');
        }

        if (data.hasOwnProperty('totalSourceAmount')) {
          obj['totalSourceAmount'] = _ApiClient["default"].convertToType(data['totalSourceAmount'], 'Number');
        }

        if (data.hasOwnProperty('totalPaymentAmount')) {
          obj['totalPaymentAmount'] = _ApiClient["default"].convertToType(data['totalPaymentAmount'], 'Number');
        }

        if (data.hasOwnProperty('sourceCurrency')) {
          obj['sourceCurrency'] = _ApiClient["default"].convertToType(data['sourceCurrency'], 'String');
        }

        if (data.hasOwnProperty('paymentCurrency')) {
          obj['paymentCurrency'] = _ApiClient["default"].convertToType(data['paymentCurrency'], 'String');
        }

        if (data.hasOwnProperty('fundingStatus')) {
          obj['fundingStatus'] = _ApiClient["default"].convertToType(data['fundingStatus'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return QuoteFxSummaryV3;
}();
/**
 * @member {Number} rate
 */


QuoteFxSummaryV3.prototype['rate'] = undefined;
/**
 * @member {Number} invertedRate
 */

QuoteFxSummaryV3.prototype['invertedRate'] = undefined;
/**
 * @member {Date} creationTime
 */

QuoteFxSummaryV3.prototype['creationTime'] = undefined;
/**
 * @member {Date} expiryTime
 */

QuoteFxSummaryV3.prototype['expiryTime'] = undefined;
/**
 * @member {String} quoteId
 */

QuoteFxSummaryV3.prototype['quoteId'] = undefined;
/**
 * @member {Number} totalSourceAmount
 */

QuoteFxSummaryV3.prototype['totalSourceAmount'] = undefined;
/**
 * @member {Number} totalPaymentAmount
 */

QuoteFxSummaryV3.prototype['totalPaymentAmount'] = undefined;
/**
 * Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} sourceCurrency
 */

QuoteFxSummaryV3.prototype['sourceCurrency'] = undefined;
/**
 * Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} paymentCurrency
 */

QuoteFxSummaryV3.prototype['paymentCurrency'] = undefined;
/**
 * @member {module:model/QuoteFxSummaryV3.FundingStatusEnum} fundingStatus
 */

QuoteFxSummaryV3.prototype['fundingStatus'] = undefined;
/**
 * @member {module:model/QuoteFxSummaryV3.StatusEnum} status
 */

QuoteFxSummaryV3.prototype['status'] = undefined;
/**
 * Allowed values for the <code>fundingStatus</code> property.
 * @enum {String}
 * @readonly
 */

QuoteFxSummaryV3['FundingStatusEnum'] = {
  /**
   * value: "UNFUNDED"
   * @const
   */
  "UNFUNDED": "UNFUNDED",

  /**
   * value: "INSTRUCTED"
   * @const
   */
  "INSTRUCTED": "INSTRUCTED",

  /**
   * value: "FUNDED"
   * @const
   */
  "FUNDED": "FUNDED"
};
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

QuoteFxSummaryV3['StatusEnum'] = {
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
  "EXECUTED": "EXECUTED",

  /**
   * value: "REJECTED"
   * @const
   */
  "REJECTED": "REJECTED"
};
var _default = QuoteFxSummaryV3;
exports["default"] = _default;