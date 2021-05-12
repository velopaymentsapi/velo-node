"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentAuditCurrency = _interopRequireDefault(require("./PaymentAuditCurrency"));

var _PaymentEventResponse = _interopRequireDefault(require("./PaymentEventResponse"));

var _PaymentResponseV4Payout = _interopRequireDefault(require("./PaymentResponseV4Payout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentResponseV4 model module.
 * @module model/PaymentResponseV4
 * @version 2.26.127
 */
var PaymentResponseV4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentResponseV4</code>.
   * @alias module:model/PaymentResponseV4
   * @param paymentId {String} The id of the payment
   * @param payeeId {String} The id of the paymeee
   * @param payorId {String} The id of the payor
   * @param quoteId {String} The quote Id used for the FX
   * @param sourceAccountId {String} The id of the source account from which the payment was taken
   * @param paymentAmount {Number} The amount which the payee will receive
   * @param submittedDateTime {Date} 
   * @param status {module:model/PaymentResponseV4.StatusEnum} 
   * @param fundingStatus {module:model/PaymentResponseV4.FundingStatusEnum} The funding status of the payment
   * @param railsId {String} The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
   * @param events {Array.<module:model/PaymentEventResponse>} 
   */
  function PaymentResponseV4(paymentId, payeeId, payorId, quoteId, sourceAccountId, paymentAmount, submittedDateTime, status, fundingStatus, railsId, events) {
    _classCallCheck(this, PaymentResponseV4);

    PaymentResponseV4.initialize(this, paymentId, payeeId, payorId, quoteId, sourceAccountId, paymentAmount, submittedDateTime, status, fundingStatus, railsId, events);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentResponseV4, null, [{
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
     * Constructs a <code>PaymentResponseV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentResponseV4} obj Optional instance to populate.
     * @return {module:model/PaymentResponseV4} The populated <code>PaymentResponseV4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentResponseV4();

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

        if (data.hasOwnProperty('remoteSystemId')) {
          obj['remoteSystemId'] = _ApiClient["default"].convertToType(data['remoteSystemId'], 'String');
        }

        if (data.hasOwnProperty('remoteSystemPaymentId')) {
          obj['remoteSystemPaymentId'] = _ApiClient["default"].convertToType(data['remoteSystemPaymentId'], 'String');
        }

        if (data.hasOwnProperty('sourceAmount')) {
          obj['sourceAmount'] = _ApiClient["default"].convertToType(data['sourceAmount'], 'Number');
        }

        if (data.hasOwnProperty('sourceCurrency')) {
          obj['sourceCurrency'] = _PaymentAuditCurrency["default"].constructFromObject(data['sourceCurrency']);
        }

        if (data.hasOwnProperty('paymentAmount')) {
          obj['paymentAmount'] = _ApiClient["default"].convertToType(data['paymentAmount'], 'Number');
        }

        if (data.hasOwnProperty('paymentCurrency')) {
          obj['paymentCurrency'] = _PaymentAuditCurrency["default"].constructFromObject(data['paymentCurrency']);
        }

        if (data.hasOwnProperty('rate')) {
          obj['rate'] = _ApiClient["default"].convertToType(data['rate'], 'Number');
        }

        if (data.hasOwnProperty('invertedRate')) {
          obj['invertedRate'] = _ApiClient["default"].convertToType(data['invertedRate'], 'Number');
        }

        if (data.hasOwnProperty('isPaymentCcyBaseCcy')) {
          obj['isPaymentCcyBaseCcy'] = _ApiClient["default"].convertToType(data['isPaymentCcyBaseCcy'], 'Boolean');
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
          obj['events'] = _ApiClient["default"].convertToType(data['events'], [_PaymentEventResponse["default"]]);
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

        if (data.hasOwnProperty('withdrawnReason')) {
          obj['withdrawnReason'] = _ApiClient["default"].convertToType(data['withdrawnReason'], 'String');
        }

        if (data.hasOwnProperty('withdrawable')) {
          obj['withdrawable'] = _ApiClient["default"].convertToType(data['withdrawable'], 'Boolean');
        }

        if (data.hasOwnProperty('transmissionType')) {
          obj['transmissionType'] = _ApiClient["default"].convertToType(data['transmissionType'], 'String');
        }

        if (data.hasOwnProperty('paymentTrackingReference')) {
          obj['paymentTrackingReference'] = _ApiClient["default"].convertToType(data['paymentTrackingReference'], 'String');
        }

        if (data.hasOwnProperty('paymentMetadata')) {
          obj['paymentMetadata'] = _ApiClient["default"].convertToType(data['paymentMetadata'], 'String');
        }

        if (data.hasOwnProperty('payout')) {
          obj['payout'] = _PaymentResponseV4Payout["default"].constructFromObject(data['payout']);
        }
      }

      return obj;
    }
  }]);

  return PaymentResponseV4;
}();
/**
 * The id of the payment
 * @member {String} paymentId
 */


PaymentResponseV4.prototype['paymentId'] = undefined;
/**
 * The id of the paymeee
 * @member {String} payeeId
 */

PaymentResponseV4.prototype['payeeId'] = undefined;
/**
 * The id of the payor
 * @member {String} payorId
 */

PaymentResponseV4.prototype['payorId'] = undefined;
/**
 * The name of the payor
 * @member {String} payorName
 */

PaymentResponseV4.prototype['payorName'] = undefined;
/**
 * The quote Id used for the FX
 * @member {String} quoteId
 */

PaymentResponseV4.prototype['quoteId'] = undefined;
/**
 * The id of the source account from which the payment was taken
 * @member {String} sourceAccountId
 */

PaymentResponseV4.prototype['sourceAccountId'] = undefined;
/**
 * The name of the source account from which the payment was taken
 * @member {String} sourceAccountName
 */

PaymentResponseV4.prototype['sourceAccountName'] = undefined;
/**
 * The remote id by which the payor refers to the payee. Only populated once payment is confirmed
 * @member {String} remoteId
 */

PaymentResponseV4.prototype['remoteId'] = undefined;
/**
 * The velo id of the remote system orchestrating the payment. Not populated for normal Velo payments.
 * @member {String} remoteSystemId
 */

PaymentResponseV4.prototype['remoteSystemId'] = undefined;
/**
 * The id of the payment in the remote system. Not populated for normal Velo payments.
 * @member {String} remoteSystemPaymentId
 */

PaymentResponseV4.prototype['remoteSystemPaymentId'] = undefined;
/**
 * The source amount for the payment (amount debited to make the payment)
 * @member {Number} sourceAmount
 */

PaymentResponseV4.prototype['sourceAmount'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrency} sourceCurrency
 */

PaymentResponseV4.prototype['sourceCurrency'] = undefined;
/**
 * The amount which the payee will receive
 * @member {Number} paymentAmount
 */

PaymentResponseV4.prototype['paymentAmount'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrency} paymentCurrency
 */

PaymentResponseV4.prototype['paymentCurrency'] = undefined;
/**
 * The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
 * @member {Number} rate
 */

PaymentResponseV4.prototype['rate'] = undefined;
/**
 * The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
 * @member {Number} invertedRate
 */

PaymentResponseV4.prototype['invertedRate'] = undefined;
/**
 * @member {Boolean} isPaymentCcyBaseCcy
 */

PaymentResponseV4.prototype['isPaymentCcyBaseCcy'] = undefined;
/**
 * @member {Date} submittedDateTime
 */

PaymentResponseV4.prototype['submittedDateTime'] = undefined;
/**
 * @member {module:model/PaymentResponseV4.StatusEnum} status
 */

PaymentResponseV4.prototype['status'] = undefined;
/**
 * The funding status of the payment
 * @member {module:model/PaymentResponseV4.FundingStatusEnum} fundingStatus
 */

PaymentResponseV4.prototype['fundingStatus'] = undefined;
/**
 * The routing number for the payment.
 * @member {String} routingNumber
 */

PaymentResponseV4.prototype['routingNumber'] = undefined;
/**
 * The account number for the account which will receive the payment.
 * @member {String} accountNumber
 */

PaymentResponseV4.prototype['accountNumber'] = undefined;
/**
 * The iban for the payment.
 * @member {String} iban
 */

PaymentResponseV4.prototype['iban'] = undefined;
/**
 * The payment memo set by the payor
 * @member {String} paymentMemo
 */

PaymentResponseV4.prototype['paymentMemo'] = undefined;
/**
 * ACH file payment was submitted in, if applicable
 * @member {String} filenameReference
 */

PaymentResponseV4.prototype['filenameReference'] = undefined;
/**
 * Individual Identification Number assigned to the payment in the ACH file, if applicable
 * @member {String} individualIdentificationNumber
 */

PaymentResponseV4.prototype['individualIdentificationNumber'] = undefined;
/**
 * Trace Number assigned to the payment in the ACH file, if applicable
 * @member {String} traceNumber
 */

PaymentResponseV4.prototype['traceNumber'] = undefined;
/**
 * @member {String} payorPaymentId
 */

PaymentResponseV4.prototype['payorPaymentId'] = undefined;
/**
 * @member {String} paymentChannelId
 */

PaymentResponseV4.prototype['paymentChannelId'] = undefined;
/**
 * @member {String} paymentChannelName
 */

PaymentResponseV4.prototype['paymentChannelName'] = undefined;
/**
 * @member {String} accountName
 */

PaymentResponseV4.prototype['accountName'] = undefined;
/**
 * The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
 * @member {String} railsId
 * @default 'RAILS ID UNAVAILABLE'
 */

PaymentResponseV4.prototype['railsId'] = 'RAILS ID UNAVAILABLE';
/**
 * The country code of the payment channel.
 * @member {String} countryCode
 */

PaymentResponseV4.prototype['countryCode'] = undefined;
/**
 * @member {Array.<module:model/PaymentEventResponse>} events
 */

PaymentResponseV4.prototype['events'] = undefined;
/**
 * The return cost if a returned payment.
 * @member {Number} returnCost
 */

PaymentResponseV4.prototype['returnCost'] = undefined;
/**
 * @member {String} returnReason
 */

PaymentResponseV4.prototype['returnReason'] = undefined;
/**
 * @member {String} railsPaymentId
 */

PaymentResponseV4.prototype['railsPaymentId'] = undefined;
/**
 * @member {String} railsBatchId
 */

PaymentResponseV4.prototype['railsBatchId'] = undefined;
/**
 * @member {String} rejectionReason
 */

PaymentResponseV4.prototype['rejectionReason'] = undefined;
/**
 * @member {String} withdrawnReason
 */

PaymentResponseV4.prototype['withdrawnReason'] = undefined;
/**
 * @member {Boolean} withdrawable
 */

PaymentResponseV4.prototype['withdrawable'] = undefined;
/**
 * The transmission type of the payment, e.g. ACH, SAME_DAY_ACH, WIRE
 * @member {String} transmissionType
 */

PaymentResponseV4.prototype['transmissionType'] = undefined;
/**
 * @member {String} paymentTrackingReference
 */

PaymentResponseV4.prototype['paymentTrackingReference'] = undefined;
/**
 * Metadata for the payment
 * @member {String} paymentMetadata
 */

PaymentResponseV4.prototype['paymentMetadata'] = undefined;
/**
 * @member {module:model/PaymentResponseV4Payout} payout
 */

PaymentResponseV4.prototype['payout'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

PaymentResponseV4['StatusEnum'] = {
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
   * value: "RETURNED"
   * @const
   */
  "RETURNED": "RETURNED",

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

PaymentResponseV4['FundingStatusEnum'] = {
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
var _default = PaymentResponseV4;
exports["default"] = _default;