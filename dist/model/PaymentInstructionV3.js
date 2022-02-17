"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransmissionType = _interopRequireDefault(require("./TransmissionType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PaymentInstructionV3 model module.
 * @module model/PaymentInstructionV3
 * @version 2.29.128
 */
var PaymentInstructionV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentInstructionV3</code>.
   * Instruction for creating a payment
   * @alias module:model/PaymentInstructionV3
   * @param remoteId {String} Your identifier for payee
   * @param currency {String} Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
   * @param amount {Number} <p>Amount to send to Payee</p> <p>The maximum payment amount is dependent on the currency</p> 
   * @param sourceAccountName {String} Must match a valid source account name belonging to the payor
   */
  function PaymentInstructionV3(remoteId, currency, amount, sourceAccountName) {
    _classCallCheck(this, PaymentInstructionV3);

    PaymentInstructionV3.initialize(this, remoteId, currency, amount, sourceAccountName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentInstructionV3, null, [{
    key: "initialize",
    value: function initialize(obj, remoteId, currency, amount, sourceAccountName) {
      obj['remoteId'] = remoteId;
      obj['currency'] = currency;
      obj['amount'] = amount;
      obj['sourceAccountName'] = sourceAccountName;
    }
    /**
     * Constructs a <code>PaymentInstructionV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentInstructionV3} obj Optional instance to populate.
     * @return {module:model/PaymentInstructionV3} The populated <code>PaymentInstructionV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentInstructionV3();

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('paymentMemo')) {
          obj['paymentMemo'] = _ApiClient["default"].convertToType(data['paymentMemo'], 'String');
        }

        if (data.hasOwnProperty('sourceAccountName')) {
          obj['sourceAccountName'] = _ApiClient["default"].convertToType(data['sourceAccountName'], 'String');
        }

        if (data.hasOwnProperty('payorPaymentId')) {
          obj['payorPaymentId'] = _ApiClient["default"].convertToType(data['payorPaymentId'], 'String');
        }

        if (data.hasOwnProperty('transmissionType')) {
          obj['transmissionType'] = _TransmissionType["default"].constructFromObject(data['transmissionType']);
        }

        if (data.hasOwnProperty('remoteSystemId')) {
          obj['remoteSystemId'] = _ApiClient["default"].convertToType(data['remoteSystemId'], 'String');
        }

        if (data.hasOwnProperty('paymentMetadata')) {
          obj['paymentMetadata'] = _ApiClient["default"].convertToType(data['paymentMetadata'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaymentInstructionV3;
}();
/**
 * Your identifier for payee
 * @member {String} remoteId
 */


PaymentInstructionV3.prototype['remoteId'] = undefined;
/**
 * Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} currency
 */

PaymentInstructionV3.prototype['currency'] = undefined;
/**
 * <p>Amount to send to Payee</p> <p>The maximum payment amount is dependent on the currency</p> 
 * @member {Number} amount
 */

PaymentInstructionV3.prototype['amount'] = undefined;
/**
 * <p>Any value here will override the memo value in the parent payout</p> <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p> 
 * @member {String} paymentMemo
 */

PaymentInstructionV3.prototype['paymentMemo'] = undefined;
/**
 * Must match a valid source account name belonging to the payor
 * @member {String} sourceAccountName
 */

PaymentInstructionV3.prototype['sourceAccountName'] = undefined;
/**
 * A reference identifier for the payor for the given payee payment
 * @member {String} payorPaymentId
 */

PaymentInstructionV3.prototype['payorPaymentId'] = undefined;
/**
 * @member {module:model/TransmissionType} transmissionType
 */

PaymentInstructionV3.prototype['transmissionType'] = undefined;
/**
 * <p>The identifier for the remote payments system if not Velo</p> <p>Should only be used after consultation with Velo Payments</p> 
 * @member {String} remoteSystemId
 */

PaymentInstructionV3.prototype['remoteSystemId'] = undefined;
/**
 * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p> <p>The structure of the data will be dictated by the requirements of the payment rails</p> 
 * @member {String} paymentMetadata
 */

PaymentInstructionV3.prototype['paymentMetadata'] = undefined;
var _default = PaymentInstructionV3;
exports["default"] = _default;