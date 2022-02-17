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
 * The AcceptedPaymentV3 model module.
 * @module model/AcceptedPaymentV3
 * @version 2.29.128
 */
var AcceptedPaymentV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AcceptedPaymentV3</code>.
   * @alias module:model/AcceptedPaymentV3
   * @param remoteId {String} 
   * @param currencyType {String} Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
   * @param amount {Number} 
   * @param sourceAccountName {String} 
   * @param payorPaymentId {String} 
   */
  function AcceptedPaymentV3(remoteId, currencyType, amount, sourceAccountName, payorPaymentId) {
    _classCallCheck(this, AcceptedPaymentV3);

    AcceptedPaymentV3.initialize(this, remoteId, currencyType, amount, sourceAccountName, payorPaymentId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AcceptedPaymentV3, null, [{
    key: "initialize",
    value: function initialize(obj, remoteId, currencyType, amount, sourceAccountName, payorPaymentId) {
      obj['remoteId'] = remoteId;
      obj['currencyType'] = currencyType;
      obj['amount'] = amount;
      obj['sourceAccountName'] = sourceAccountName;
      obj['payorPaymentId'] = payorPaymentId;
    }
    /**
     * Constructs a <code>AcceptedPaymentV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcceptedPaymentV3} obj Optional instance to populate.
     * @return {module:model/AcceptedPaymentV3} The populated <code>AcceptedPaymentV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AcceptedPaymentV3();

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

        if (data.hasOwnProperty('paymentMemo')) {
          obj['paymentMemo'] = _ApiClient["default"].convertToType(data['paymentMemo'], 'String');
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

  return AcceptedPaymentV3;
}();
/**
 * @member {String} remoteId
 */


AcceptedPaymentV3.prototype['remoteId'] = undefined;
/**
 * Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} currencyType
 */

AcceptedPaymentV3.prototype['currencyType'] = undefined;
/**
 * @member {Number} amount
 */

AcceptedPaymentV3.prototype['amount'] = undefined;
/**
 * @member {String} sourceAccountName
 */

AcceptedPaymentV3.prototype['sourceAccountName'] = undefined;
/**
 * @member {String} payorPaymentId
 */

AcceptedPaymentV3.prototype['payorPaymentId'] = undefined;
/**
 * @member {String} paymentMemo
 */

AcceptedPaymentV3.prototype['paymentMemo'] = undefined;
/**
 * @member {String} remoteSystemId
 */

AcceptedPaymentV3.prototype['remoteSystemId'] = undefined;
/**
 * @member {String} paymentMetadata
 */

AcceptedPaymentV3.prototype['paymentMetadata'] = undefined;
var _default = AcceptedPaymentV3;
exports["default"] = _default;