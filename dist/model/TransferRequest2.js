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
 * The TransferRequest2 model module.
 * @module model/TransferRequest2
 * @version 2.23.78
 */
var TransferRequest2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransferRequest2</code>.
   * @alias module:model/TransferRequest2
   * @param toSourceAccountId {String} The 'to' source account id, which will be credited
   * @param amount {Number} Amount to transfer, in minor units
   * @param currency {String} 
   */
  function TransferRequest2(toSourceAccountId, amount, currency) {
    _classCallCheck(this, TransferRequest2);

    TransferRequest2.initialize(this, toSourceAccountId, amount, currency);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransferRequest2, null, [{
    key: "initialize",
    value: function initialize(obj, toSourceAccountId, amount, currency) {
      obj['toSourceAccountId'] = toSourceAccountId;
      obj['amount'] = amount;
      obj['currency'] = currency;
    }
    /**
     * Constructs a <code>TransferRequest2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferRequest2} obj Optional instance to populate.
     * @return {module:model/TransferRequest2} The populated <code>TransferRequest2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransferRequest2();

        if (data.hasOwnProperty('toSourceAccountId')) {
          obj['toSourceAccountId'] = _ApiClient["default"].convertToType(data['toSourceAccountId'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransferRequest2;
}();
/**
 * The 'to' source account id, which will be credited
 * @member {String} toSourceAccountId
 */


TransferRequest2.prototype['toSourceAccountId'] = undefined;
/**
 * Amount to transfer, in minor units
 * @member {Number} amount
 */

TransferRequest2.prototype['amount'] = undefined;
/**
 * @member {String} currency
 */

TransferRequest2.prototype['currency'] = undefined;
var _default = TransferRequest2;
exports["default"] = _default;