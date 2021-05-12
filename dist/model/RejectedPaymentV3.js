"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RejectedPaymentV3 model module.
 * @module model/RejectedPaymentV3
 * @version 2.26.127
 */
var RejectedPaymentV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RejectedPaymentV3</code>.
   * @alias module:model/RejectedPaymentV3
   * @param remoteId {String} 
   * @param currencyType {String} Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
   * @param amount {Number} 
   * @param sourceAccountName {String} 
   * @param payorPaymentId {String} 
   * @param reason {String} 
   */
  function RejectedPaymentV3(remoteId, currencyType, amount, sourceAccountName, payorPaymentId, reason) {
    _classCallCheck(this, RejectedPaymentV3);

    RejectedPaymentV3.initialize(this, remoteId, currencyType, amount, sourceAccountName, payorPaymentId, reason);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RejectedPaymentV3, null, [{
    key: "initialize",
    value: function initialize(obj, remoteId, currencyType, amount, sourceAccountName, payorPaymentId, reason) {
      obj['remoteId'] = remoteId;
      obj['currencyType'] = currencyType;
      obj['amount'] = amount;
      obj['sourceAccountName'] = sourceAccountName;
      obj['payorPaymentId'] = payorPaymentId;
      obj['reason'] = reason;
    }
    /**
     * Constructs a <code>RejectedPaymentV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RejectedPaymentV3} obj Optional instance to populate.
     * @return {module:model/RejectedPaymentV3} The populated <code>RejectedPaymentV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RejectedPaymentV3();

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }

        if (data.hasOwnProperty('currencyType')) {
          obj['currencyType'] = _ApiClient["default"].convertToType(data['currencyType'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('sourceAccountName')) {
          obj['sourceAccountName'] = _ApiClient["default"].convertToType(data['sourceAccountName'], 'String');
        }

        if (data.hasOwnProperty('payorPaymentId')) {
          obj['payorPaymentId'] = _ApiClient["default"].convertToType(data['payorPaymentId'], 'String');
        }

        if (data.hasOwnProperty('remoteSystemId')) {
          obj['remoteSystemId'] = _ApiClient["default"].convertToType(data['remoteSystemId'], 'String');
        }

        if (data.hasOwnProperty('paymentMetadata')) {
          obj['paymentMetadata'] = _ApiClient["default"].convertToType(data['paymentMetadata'], 'String');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('reasonCode')) {
          obj['reasonCode'] = _ApiClient["default"].convertToType(data['reasonCode'], 'String');
        }

        if (data.hasOwnProperty('lineNumber')) {
          obj['lineNumber'] = _ApiClient["default"].convertToType(data['lineNumber'], 'Number');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RejectedPaymentV3;
}();
/**
 * @member {String} remoteId
 */


RejectedPaymentV3.prototype['remoteId'] = undefined;
/**
 * Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} currencyType
 */

RejectedPaymentV3.prototype['currencyType'] = undefined;
/**
 * @member {Number} amount
 */

RejectedPaymentV3.prototype['amount'] = undefined;
/**
 * @member {String} sourceAccountName
 */

RejectedPaymentV3.prototype['sourceAccountName'] = undefined;
/**
 * @member {String} payorPaymentId
 */

RejectedPaymentV3.prototype['payorPaymentId'] = undefined;
/**
 * @member {String} remoteSystemId
 */

RejectedPaymentV3.prototype['remoteSystemId'] = undefined;
/**
 * @member {String} paymentMetadata
 */

RejectedPaymentV3.prototype['paymentMetadata'] = undefined;
/**
 * @member {String} reason
 */

RejectedPaymentV3.prototype['reason'] = undefined;
/**
 * @member {String} reasonCode
 */

RejectedPaymentV3.prototype['reasonCode'] = undefined;
/**
 * @member {Number} lineNumber
 */

RejectedPaymentV3.prototype['lineNumber'] = undefined;
/**
 * @member {String} message
 */

RejectedPaymentV3.prototype['message'] = undefined;
var _default = RejectedPaymentV3;
exports["default"] = _default;