"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentAuditCurrency = _interopRequireDefault(require("./PaymentAuditCurrency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The FxSummary model module.
 * @module model/FxSummary
 * @version 2.29.130
 */
var FxSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FxSummary</code>.
   * @alias module:model/FxSummary
   * @param quoteId {String} 
   * @param creationDateTime {Date} 
   * @param rate {Number} 
   * @param invertedRate {Number} 
   * @param totalCost {Number} 
   * @param totalPaymentAmount {Number} 
   * @param status {module:model/FxSummary.StatusEnum} 
   * @param fundingStatus {module:model/FxSummary.FundingStatusEnum} 
   */
  function FxSummary(quoteId, creationDateTime, rate, invertedRate, totalCost, totalPaymentAmount, status, fundingStatus) {
    _classCallCheck(this, FxSummary);

    FxSummary.initialize(this, quoteId, creationDateTime, rate, invertedRate, totalCost, totalPaymentAmount, status, fundingStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FxSummary, null, [{
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
     * Constructs a <code>FxSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FxSummary} obj Optional instance to populate.
     * @return {module:model/FxSummary} The populated <code>FxSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FxSummary();

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
          obj['sourceCurrency'] = _PaymentAuditCurrency["default"].constructFromObject(data['sourceCurrency']);
        }

        if (data.hasOwnProperty('paymentCurrency')) {
          obj['paymentCurrency'] = _PaymentAuditCurrency["default"].constructFromObject(data['paymentCurrency']);
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

  return FxSummary;
}();
/**
 * @member {String} quoteId
 */


FxSummary.prototype['quoteId'] = undefined;
/**
 * @member {Date} creationDateTime
 */

FxSummary.prototype['creationDateTime'] = undefined;
/**
 * @member {Number} rate
 */

FxSummary.prototype['rate'] = undefined;
/**
 * @member {Number} invertedRate
 */

FxSummary.prototype['invertedRate'] = undefined;
/**
 * @member {Number} totalCost
 */

FxSummary.prototype['totalCost'] = undefined;
/**
 * @member {Number} totalPaymentAmount
 */

FxSummary.prototype['totalPaymentAmount'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrency} sourceCurrency
 */

FxSummary.prototype['sourceCurrency'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrency} paymentCurrency
 */

FxSummary.prototype['paymentCurrency'] = undefined;
/**
 * @member {module:model/FxSummary.StatusEnum} status
 */

FxSummary.prototype['status'] = undefined;
/**
 * @member {module:model/FxSummary.FundingStatusEnum} fundingStatus
 */

FxSummary.prototype['fundingStatus'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

FxSummary['StatusEnum'] = {
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

FxSummary['FundingStatusEnum'] = {
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
var _default = FxSummary;
exports["default"] = _default;