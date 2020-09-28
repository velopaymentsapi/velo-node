"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentAuditCurrencyV = _interopRequireDefault(require("./PaymentAuditCurrencyV3"));

var _PaymentEventResponseV = _interopRequireDefault(require("./PaymentEventResponseV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentResponseV3 model module.
 * @module model/PaymentResponseV3
 * @version 2.23.78
 */
var PaymentResponseV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentResponseV3</code>.
   * @alias module:model/PaymentResponseV3
   * @param paymentId {String} The id of the payment
   * @param payeeId {String} The id of the paymeee
   * @param payorId {String} The id of the payor
   * @param quoteId {String} The quote Id used for the FX
   * @param sourceAccountId {String} The id of the source account from which the payment was taken
   * @param paymentAmount {Number} The amount which the payee will receive
   * @param submittedDateTime {Date} 
   * @param status {module:model/PaymentResponseV3.StatusEnum} 
   * @param fundingStatus {module:model/PaymentResponseV3.FundingStatusEnum} The funding status of the payment
   * @param railsId {String} The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
   * @param events {Array.<module:model/PaymentEventResponseV3>} 
   */
  function PaymentResponseV3(paymentId, payeeId, payorId, quoteId, sourceAccountId, paymentAmount, submittedDateTime, status, fundingStatus, railsId, events) {
    _classCallCheck(this, PaymentResponseV3);

    PaymentResponseV3.initialize(this, paymentId, payeeId, payorId, quoteId, sourceAccountId, paymentAmount, submittedDateTime, status, fundingStatus, railsId, events);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentResponseV3, null, [{
    key: "initialize",
    value: function initialize(obj, paymentId, payeeId, payorId, quoteId, sourceAccountId, paymentAmount, submittedDateTime, status, fundingStatus, railsId, events) {
      obj['paymentId'] = paymentId;
      obj['payeeId'] = payeeId;
      obj['payorId'] = payorId;
      obj['quoteId'] = quoteId;
      obj['sourceAccountId'] = sourceAccountId;
      obj['paymentAmount'] = paymentAmount;
      obj['submittedDateTime'] = submittedDateTime;
      obj['status'] = status;
      obj['fundingStatus'] = fundingStatus;
      obj['railsId'] = railsId || 'RAILS ID UNAVAILABLE';
      obj['events'] = events;
    }
    /**
     * Constructs a <code>PaymentResponseV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentResponseV3} obj Optional instance to populate.
     * @return {module:model/PaymentResponseV3} The populated <code>PaymentResponseV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentResponseV3();

        if (data.hasOwnProperty('paymentId')) {
          obj['paymentId'] = _ApiClient["default"].convertToType(data['paymentId'], 'String');
        }

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('payorName')) {
          obj['payorName'] = _ApiClient["default"].convertToType(data['payorName'], 'String');
        }

        if (data.hasOwnProperty('quoteId')) {
          obj['quoteId'] = _ApiClient["default"].convertToType(data['quoteId'], 'String');
        }

        if (data.hasOwnProperty('sourceAccountId')) {
          obj['sourceAccountId'] = _ApiClient["default"].convertToType(data['sourceAccountId'], 'String');
        }

        if (data.hasOwnProperty('sourceAccountName')) {
          obj['sourceAccountName'] = _ApiClient["default"].convertToType(data['sourceAccountName'], 'String');
        }

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }

        if (data.hasOwnProperty('sourceAmount')) {
          obj['sourceAmount'] = _ApiClient["default"].convertToType(data['sourceAmount'], 'Number');
        }

        if (data.hasOwnProperty('sourceCurrency')) {
          obj['sourceCurrency'] = _PaymentAuditCurrencyV["default"].constructFromObject(data['sourceCurrency']);
        }

        if (data.hasOwnProperty('paymentAmount')) {
          obj['paymentAmount'] = _ApiClient["default"].convertToType(data['paymentAmount'], 'Number');
        }

        if (data.hasOwnProperty('paymentCurrency')) {
          obj['paymentCurrency'] = _PaymentAuditCurrencyV["default"].constructFromObject(data['paymentCurrency']);
        }

        if (data.hasOwnProperty('rate')) {
          obj['rate'] = _ApiClient["default"].convertToType(data['rate'], 'Number');
        }

        if (data.hasOwnProperty('invertedRate')) {
          obj['invertedRate'] = _ApiClient["default"].convertToType(data['invertedRate'], 'Number');
        }

        if (data.hasOwnProperty('submittedDateTime')) {
          obj['submittedDateTime'] = _ApiClient["default"].convertToType(data['submittedDateTime'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('fundingStatus')) {
          obj['fundingStatus'] = _ApiClient["default"].convertToType(data['fundingStatus'], 'String');
        }

        if (data.hasOwnProperty('routingNumber')) {
          obj['routingNumber'] = _ApiClient["default"].convertToType(data['routingNumber'], 'String');
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('iban')) {
          obj['iban'] = _ApiClient["default"].convertToType(data['iban'], 'String');
        }

        if (data.hasOwnProperty('paymentMemo')) {
          obj['paymentMemo'] = _ApiClient["default"].convertToType(data['paymentMemo'], 'String');
        }

        if (data.hasOwnProperty('filenameReference')) {
          obj['filenameReference'] = _ApiClient["default"].convertToType(data['filenameReference'], 'String');
        }

        if (data.hasOwnProperty('individualIdentificationNumber')) {
          obj['individualIdentificationNumber'] = _ApiClient["default"].convertToType(data['individualIdentificationNumber'], 'String');
        }

        if (data.hasOwnProperty('traceNumber')) {
          obj['traceNumber'] = _ApiClient["default"].convertToType(data['traceNumber'], 'String');
        }

        if (data.hasOwnProperty('payorPaymentId')) {
          obj['payorPaymentId'] = _ApiClient["default"].convertToType(data['payorPaymentId'], 'String');
        }

        if (data.hasOwnProperty('paymentChannelId')) {
          obj['paymentChannelId'] = _ApiClient["default"].convertToType(data['paymentChannelId'], 'String');
        }

        if (data.hasOwnProperty('paymentChannelName')) {
          obj['paymentChannelName'] = _ApiClient["default"].convertToType(data['paymentChannelName'], 'String');
        }

        if (data.hasOwnProperty('accountName')) {
          obj['accountName'] = _ApiClient["default"].convertToType(data['accountName'], 'String');
        }

        if (data.hasOwnProperty('railsId')) {
          obj['railsId'] = _ApiClient["default"].convertToType(data['railsId'], 'String');
        }

        if (data.hasOwnProperty('countryCode')) {
          obj['countryCode'] = _ApiClient["default"].convertToType(data['countryCode'], 'String');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], [_PaymentEventResponseV["default"]]);
        }

        if (data.hasOwnProperty('returnCost')) {
          obj['returnCost'] = _ApiClient["default"].convertToType(data['returnCost'], 'Number');
        }

        if (data.hasOwnProperty('returnReason')) {
          obj['returnReason'] = _ApiClient["default"].convertToType(data['returnReason'], 'String');
        }

        if (data.hasOwnProperty('railsPaymentId')) {
          obj['railsPaymentId'] = _ApiClient["default"].convertToType(data['railsPaymentId'], 'String');
        }

        if (data.hasOwnProperty('railsBatchId')) {
          obj['railsBatchId'] = _ApiClient["default"].convertToType(data['railsBatchId'], 'String');
        }

        if (data.hasOwnProperty('rejectionReason')) {
          obj['rejectionReason'] = _ApiClient["default"].convertToType(data['rejectionReason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaymentResponseV3;
}();
/**
 * The id of the payment
 * @member {String} paymentId
 */


PaymentResponseV3.prototype['paymentId'] = undefined;
/**
 * The id of the paymeee
 * @member {String} payeeId
 */

PaymentResponseV3.prototype['payeeId'] = undefined;
/**
 * The id of the payor
 * @member {String} payorId
 */

PaymentResponseV3.prototype['payorId'] = undefined;
/**
 * The name of the payor
 * @member {String} payorName
 */

PaymentResponseV3.prototype['payorName'] = undefined;
/**
 * The quote Id used for the FX
 * @member {String} quoteId
 */

PaymentResponseV3.prototype['quoteId'] = undefined;
/**
 * The id of the source account from which the payment was taken
 * @member {String} sourceAccountId
 */

PaymentResponseV3.prototype['sourceAccountId'] = undefined;
/**
 * The name of the source account from which the payment was taken
 * @member {String} sourceAccountName
 */

PaymentResponseV3.prototype['sourceAccountName'] = undefined;
/**
 * The remote id by which the payor refers to the payee. Only populated once payment is confirmed
 * @member {String} remoteId
 */

PaymentResponseV3.prototype['remoteId'] = undefined;
/**
 * The source amount for the payment (amount debited to make the payment)
 * @member {Number} sourceAmount
 */

PaymentResponseV3.prototype['sourceAmount'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrencyV3} sourceCurrency
 */

PaymentResponseV3.prototype['sourceCurrency'] = undefined;
/**
 * The amount which the payee will receive
 * @member {Number} paymentAmount
 */

PaymentResponseV3.prototype['paymentAmount'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrencyV3} paymentCurrency
 */

PaymentResponseV3.prototype['paymentCurrency'] = undefined;
/**
 * The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
 * @member {Number} rate
 */

PaymentResponseV3.prototype['rate'] = undefined;
/**
 * The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
 * @member {Number} invertedRate
 */

PaymentResponseV3.prototype['invertedRate'] = undefined;
/**
 * @member {Date} submittedDateTime
 */

PaymentResponseV3.prototype['submittedDateTime'] = undefined;
/**
 * @member {module:model/PaymentResponseV3.StatusEnum} status
 */

PaymentResponseV3.prototype['status'] = undefined;
/**
 * The funding status of the payment
 * @member {module:model/PaymentResponseV3.FundingStatusEnum} fundingStatus
 */

PaymentResponseV3.prototype['fundingStatus'] = undefined;
/**
 * The routing number for the payment.
 * @member {String} routingNumber
 */

PaymentResponseV3.prototype['routingNumber'] = undefined;
/**
 * The account number for the account which will receive the payment.
 * @member {String} accountNumber
 */

PaymentResponseV3.prototype['accountNumber'] = undefined;
/**
 * The iban for the payment.
 * @member {String} iban
 */

PaymentResponseV3.prototype['iban'] = undefined;
/**
 * The payment memo set by the payor
 * @member {String} paymentMemo
 */

PaymentResponseV3.prototype['paymentMemo'] = undefined;
/**
 * ACH file payment was submitted in, if applicable
 * @member {String} filenameReference
 */

PaymentResponseV3.prototype['filenameReference'] = undefined;
/**
 * Individual Identification Number assigned to the payment in the ACH file, if applicable
 * @member {String} individualIdentificationNumber
 */

PaymentResponseV3.prototype['individualIdentificationNumber'] = undefined;
/**
 * Trace Number assigned to the payment in the ACH file, if applicable
 * @member {String} traceNumber
 */

PaymentResponseV3.prototype['traceNumber'] = undefined;
/**
 * @member {String} payorPaymentId
 */

PaymentResponseV3.prototype['payorPaymentId'] = undefined;
/**
 * @member {String} paymentChannelId
 */

PaymentResponseV3.prototype['paymentChannelId'] = undefined;
/**
 * @member {String} paymentChannelName
 */

PaymentResponseV3.prototype['paymentChannelName'] = undefined;
/**
 * @member {String} accountName
 */

PaymentResponseV3.prototype['accountName'] = undefined;
/**
 * The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
 * @member {String} railsId
 * @default 'RAILS ID UNAVAILABLE'
 */

PaymentResponseV3.prototype['railsId'] = 'RAILS ID UNAVAILABLE';
/**
 * The country code of the payment channel.
 * @member {String} countryCode
 */

PaymentResponseV3.prototype['countryCode'] = undefined;
/**
 * @member {Array.<module:model/PaymentEventResponseV3>} events
 */

PaymentResponseV3.prototype['events'] = undefined;
/**
 * The return cost if a returned payment.
 * @member {Number} returnCost
 */

PaymentResponseV3.prototype['returnCost'] = undefined;
/**
 * @member {String} returnReason
 */

PaymentResponseV3.prototype['returnReason'] = undefined;
/**
 * @member {String} railsPaymentId
 */

PaymentResponseV3.prototype['railsPaymentId'] = undefined;
/**
 * @member {String} railsBatchId
 */

PaymentResponseV3.prototype['railsBatchId'] = undefined;
/**
 * @member {String} rejectionReason
 */

PaymentResponseV3.prototype['rejectionReason'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

PaymentResponseV3['StatusEnum'] = {
  /**
   * value: "ACCEPTED"
   * @const
   */
  "ACCEPTED": "ACCEPTED",

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
   * value: "BANK_PAYMENT_REQUESTED"
   * @const
   */
  "BANK_PAYMENT_REQUESTED": "BANK_PAYMENT_REQUESTED",

  /**
   * value: "REJECTED"
   * @const
   */
  "REJECTED": "REJECTED",

  /**
   * value: "ACCEPTED_BY_RAILS"
   * @const
   */
  "ACCEPTED_BY_RAILS": "ACCEPTED_BY_RAILS",

  /**
   * value: "CONFIRMED"
   * @const
   */
  "CONFIRMED": "CONFIRMED",

  /**
   * value: "FAILED"
   * @const
   */
  "FAILED": "FAILED",

  /**
   * value: "WITHDRAWN"
   * @const
   */
  "WITHDRAWN": "WITHDRAWN"
};
/**
 * Allowed values for the <code>fundingStatus</code> property.
 * @enum {String}
 * @readonly
 */

PaymentResponseV3['FundingStatusEnum'] = {
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
var _default = PaymentResponseV3;
exports["default"] = _default;