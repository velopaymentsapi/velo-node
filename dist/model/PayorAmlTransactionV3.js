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
 * The PayorAmlTransactionV3 model module.
 * @module model/PayorAmlTransactionV3
 * @version 2.29.128
 */
var PayorAmlTransactionV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorAmlTransactionV3</code>.
   * @alias module:model/PayorAmlTransactionV3
   */
  function PayorAmlTransactionV3() {
    _classCallCheck(this, PayorAmlTransactionV3);

    PayorAmlTransactionV3.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorAmlTransactionV3, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayorAmlTransactionV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorAmlTransactionV3} obj Optional instance to populate.
     * @return {module:model/PayorAmlTransactionV3} The populated <code>PayorAmlTransactionV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorAmlTransactionV3();

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

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }

        if (data.hasOwnProperty('payeeType')) {
          obj['payeeType'] = _ApiClient["default"].convertToType(data['payeeType'], 'String');
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

  return PayorAmlTransactionV3;
}();
/**
 * @member {Date} transactionDate
 */


PayorAmlTransactionV3.prototype['transactionDate'] = undefined;
/**
 * @member {String} transactionTime
 */

PayorAmlTransactionV3.prototype['transactionTime'] = undefined;
/**
 * @member {String} reportTransactionType
 */

PayorAmlTransactionV3.prototype['reportTransactionType'] = undefined;
/**
 * @member {Number} debit
 */

PayorAmlTransactionV3.prototype['debit'] = undefined;
/**
 * ISO 4217 3 character currency code
 * @member {String} debitCurrency
 */

PayorAmlTransactionV3.prototype['debitCurrency'] = undefined;
/**
 * @member {Number} credit
 */

PayorAmlTransactionV3.prototype['credit'] = undefined;
/**
 * ISO 4217 3 character currency code
 * @member {String} creditCurrency
 */

PayorAmlTransactionV3.prototype['creditCurrency'] = undefined;
/**
 * @member {String} returnFee
 */

PayorAmlTransactionV3.prototype['returnFee'] = undefined;
/**
 * ISO 4217 3 character currency code
 * @member {String} returnFeeCurrency
 */

PayorAmlTransactionV3.prototype['returnFeeCurrency'] = undefined;
/**
 * @member {String} returnFeeDescription
 */

PayorAmlTransactionV3.prototype['returnFeeDescription'] = undefined;
/**
 * @member {String} returnCode
 */

PayorAmlTransactionV3.prototype['returnCode'] = undefined;
/**
 * @member {String} returnDescription
 */

PayorAmlTransactionV3.prototype['returnDescription'] = undefined;
/**
 * @member {String} fundingType
 */

PayorAmlTransactionV3.prototype['fundingType'] = undefined;
/**
 * @member {String} dateFundingRequested
 */

PayorAmlTransactionV3.prototype['dateFundingRequested'] = undefined;
/**
 * Remote ID of the Payee, set by Payor
 * @member {String} remoteId
 */

PayorAmlTransactionV3.prototype['remoteId'] = undefined;
/**
 * @member {String} payeeType
 */

PayorAmlTransactionV3.prototype['payeeType'] = undefined;
/**
 * @member {String} sourceAccount
 */

PayorAmlTransactionV3.prototype['sourceAccount'] = undefined;
/**
 * @member {Number} paymentAmount
 */

PayorAmlTransactionV3.prototype['paymentAmount'] = undefined;
/**
 * ISO 4217 3 character currency code
 * @member {String} paymentCurrency
 */

PayorAmlTransactionV3.prototype['paymentCurrency'] = undefined;
/**
 * @member {String} paymentMemo
 */

PayorAmlTransactionV3.prototype['paymentMemo'] = undefined;
/**
 * @member {String} paymentRails
 */

PayorAmlTransactionV3.prototype['paymentRails'] = undefined;
/**
 * @member {String} payorPaymentId
 */

PayorAmlTransactionV3.prototype['payorPaymentId'] = undefined;
/**
 * @member {String} paymentStatus
 */

PayorAmlTransactionV3.prototype['paymentStatus'] = undefined;
/**
 * @member {String} rejectReason
 */

PayorAmlTransactionV3.prototype['rejectReason'] = undefined;
/**
 * @member {Number} fxApplied
 */

PayorAmlTransactionV3.prototype['fxApplied'] = undefined;
var _default = PayorAmlTransactionV3;
exports["default"] = _default;