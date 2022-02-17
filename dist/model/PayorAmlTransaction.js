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
 * The PayorAmlTransaction model module.
 * @module model/PayorAmlTransaction
 * @version 2.29.128
 */
var PayorAmlTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorAmlTransaction</code>.
   * @alias module:model/PayorAmlTransaction
   */
  function PayorAmlTransaction() {
    _classCallCheck(this, PayorAmlTransaction);

    PayorAmlTransaction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorAmlTransaction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayorAmlTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorAmlTransaction} obj Optional instance to populate.
     * @return {module:model/PayorAmlTransaction} The populated <code>PayorAmlTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorAmlTransaction();

        if (data.hasOwnProperty('transactionDate')) {
          obj['transactionDate'] = _ApiClient["default"].convertToType(data['transactionDate'], 'Date');
        }

        if (data.hasOwnProperty('transactionTime')) {
          obj['transactionTime'] = _ApiClient["default"].convertToType(data['transactionTime'], 'String');
        }

        if (data.hasOwnProperty('reportTransactionType')) {
          obj['reportTransactionType'] = _ApiClient["default"].convertToType(data['reportTransactionType'], 'String');
        }

        if (data.hasOwnProperty('debit')) {
          obj['debit'] = _ApiClient["default"].convertToType(data['debit'], 'Number');
        }

        if (data.hasOwnProperty('debitCurrency')) {
          obj['debitCurrency'] = _ApiClient["default"].convertToType(data['debitCurrency'], 'String');
        }

        if (data.hasOwnProperty('credit')) {
          obj['credit'] = _ApiClient["default"].convertToType(data['credit'], 'Number');
        }

        if (data.hasOwnProperty('creditCurrency')) {
          obj['creditCurrency'] = _ApiClient["default"].convertToType(data['creditCurrency'], 'String');
        }

        if (data.hasOwnProperty('returnFee')) {
          obj['returnFee'] = _ApiClient["default"].convertToType(data['returnFee'], 'String');
        }

        if (data.hasOwnProperty('returnFeeCurrency')) {
          obj['returnFeeCurrency'] = _ApiClient["default"].convertToType(data['returnFeeCurrency'], 'String');
        }

        if (data.hasOwnProperty('returnFeeDescription')) {
          obj['returnFeeDescription'] = _ApiClient["default"].convertToType(data['returnFeeDescription'], 'String');
        }

        if (data.hasOwnProperty('returnCode')) {
          obj['returnCode'] = _ApiClient["default"].convertToType(data['returnCode'], 'String');
        }

        if (data.hasOwnProperty('returnDescription')) {
          obj['returnDescription'] = _ApiClient["default"].convertToType(data['returnDescription'], 'String');
        }

        if (data.hasOwnProperty('fundingType')) {
          obj['fundingType'] = _ApiClient["default"].convertToType(data['fundingType'], 'String');
        }

        if (data.hasOwnProperty('dateFundingRequested')) {
          obj['dateFundingRequested'] = _ApiClient["default"].convertToType(data['dateFundingRequested'], 'String');
        }

        if (data.hasOwnProperty('payeeName')) {
          obj['payeeName'] = _ApiClient["default"].convertToType(data['payeeName'], 'String');
        }

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }

        if (data.hasOwnProperty('payeeType')) {
          obj['payeeType'] = _ApiClient["default"].convertToType(data['payeeType'], 'String');
        }

        if (data.hasOwnProperty('payeeEmail')) {
          obj['payeeEmail'] = _ApiClient["default"].convertToType(data['payeeEmail'], 'String');
        }

        if (data.hasOwnProperty('sourceAccount')) {
          obj['sourceAccount'] = _ApiClient["default"].convertToType(data['sourceAccount'], 'String');
        }

        if (data.hasOwnProperty('paymentAmount')) {
          obj['paymentAmount'] = _ApiClient["default"].convertToType(data['paymentAmount'], 'Number');
        }

        if (data.hasOwnProperty('paymentCurrency')) {
          obj['paymentCurrency'] = _ApiClient["default"].convertToType(data['paymentCurrency'], 'String');
        }

        if (data.hasOwnProperty('paymentMemo')) {
          obj['paymentMemo'] = _ApiClient["default"].convertToType(data['paymentMemo'], 'String');
        }

        if (data.hasOwnProperty('paymentRails')) {
          obj['paymentRails'] = _ApiClient["default"].convertToType(data['paymentRails'], 'String');
        }

        if (data.hasOwnProperty('payorPaymentId')) {
          obj['payorPaymentId'] = _ApiClient["default"].convertToType(data['payorPaymentId'], 'String');
        }

        if (data.hasOwnProperty('paymentStatus')) {
          obj['paymentStatus'] = _ApiClient["default"].convertToType(data['paymentStatus'], 'String');
        }

        if (data.hasOwnProperty('rejectReason')) {
          obj['rejectReason'] = _ApiClient["default"].convertToType(data['rejectReason'], 'String');
        }

        if (data.hasOwnProperty('fxApplied')) {
          obj['fxApplied'] = _ApiClient["default"].convertToType(data['fxApplied'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PayorAmlTransaction;
}();
/**
 * @member {Date} transactionDate
 */


PayorAmlTransaction.prototype['transactionDate'] = undefined;
/**
 * @member {String} transactionTime
 */

PayorAmlTransaction.prototype['transactionTime'] = undefined;
/**
 * @member {String} reportTransactionType
 */

PayorAmlTransaction.prototype['reportTransactionType'] = undefined;
/**
 * @member {Number} debit
 */

PayorAmlTransaction.prototype['debit'] = undefined;
/**
 * ISO 4217 3 character currency code
 * @member {String} debitCurrency
 */

PayorAmlTransaction.prototype['debitCurrency'] = undefined;
/**
 * @member {Number} credit
 */

PayorAmlTransaction.prototype['credit'] = undefined;
/**
 * ISO 4217 3 character currency code
 * @member {String} creditCurrency
 */

PayorAmlTransaction.prototype['creditCurrency'] = undefined;
/**
 * @member {String} returnFee
 */

PayorAmlTransaction.prototype['returnFee'] = undefined;
/**
 * ISO 4217 3 character currency code
 * @member {String} returnFeeCurrency
 */

PayorAmlTransaction.prototype['returnFeeCurrency'] = undefined;
/**
 * @member {String} returnFeeDescription
 */

PayorAmlTransaction.prototype['returnFeeDescription'] = undefined;
/**
 * @member {String} returnCode
 */

PayorAmlTransaction.prototype['returnCode'] = undefined;
/**
 * @member {String} returnDescription
 */

PayorAmlTransaction.prototype['returnDescription'] = undefined;
/**
 * @member {String} fundingType
 */

PayorAmlTransaction.prototype['fundingType'] = undefined;
/**
 * @member {String} dateFundingRequested
 */

PayorAmlTransaction.prototype['dateFundingRequested'] = undefined;
/**
 * @member {String} payeeName
 */

PayorAmlTransaction.prototype['payeeName'] = undefined;
/**
 * Remote ID of the Payee, set by Payor
 * @member {String} remoteId
 */

PayorAmlTransaction.prototype['remoteId'] = undefined;
/**
 * @member {String} payeeType
 */

PayorAmlTransaction.prototype['payeeType'] = undefined;
/**
 * @member {String} payeeEmail
 */

PayorAmlTransaction.prototype['payeeEmail'] = undefined;
/**
 * @member {String} sourceAccount
 */

PayorAmlTransaction.prototype['sourceAccount'] = undefined;
/**
 * @member {Number} paymentAmount
 */

PayorAmlTransaction.prototype['paymentAmount'] = undefined;
/**
 * ISO 4217 3 character currency code
 * @member {String} paymentCurrency
 */

PayorAmlTransaction.prototype['paymentCurrency'] = undefined;
/**
 * @member {String} paymentMemo
 */

PayorAmlTransaction.prototype['paymentMemo'] = undefined;
/**
 * @member {String} paymentRails
 */

PayorAmlTransaction.prototype['paymentRails'] = undefined;
/**
 * @member {String} payorPaymentId
 */

PayorAmlTransaction.prototype['payorPaymentId'] = undefined;
/**
 * @member {String} paymentStatus
 */

PayorAmlTransaction.prototype['paymentStatus'] = undefined;
/**
 * @member {String} rejectReason
 */

PayorAmlTransaction.prototype['rejectReason'] = undefined;
/**
 * @member {Number} fxApplied
 */

PayorAmlTransaction.prototype['fxApplied'] = undefined;
var _default = PayorAmlTransaction;
exports["default"] = _default;