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
 * The TransferRequest model module.
 * @module model/TransferRequest
 * @version 2.29.128
 */
var TransferRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransferRequest</code>.
   * @alias module:model/TransferRequest
   * @param toSourceAccountId {String} The 'to' source account id, which will be credited
   * @param amount {Number} Amount to transfer, in minor units
   * @param currency {String} 
   */
  function TransferRequest(toSourceAccountId, amount, currency) {
    _classCallCheck(this, TransferRequest);

    TransferRequest.initialize(this, toSourceAccountId, amount, currency);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransferRequest, null, [{
    key: "initialize",
    value: function initialize(obj, toSourceAccountId, amount, currency) {
      obj['toSourceAccountId'] = toSourceAccountId;
      obj['amount'] = amount;
      obj['currency'] = currency;
    }
    /**
     * Constructs a <code>TransferRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferRequest} obj Optional instance to populate.
     * @return {module:model/TransferRequest} The populated <code>TransferRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransferRequest();

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

  return TransferRequest;
}();
/**
 * The 'to' source account id, which will be credited
 * @member {String} toSourceAccountId
 */


TransferRequest.prototype['toSourceAccountId'] = undefined;
/**
 * Amount to transfer, in minor units
 * @member {Number} amount
 */

TransferRequest.prototype['amount'] = undefined;
/**
 * @member {String} currency
 */

TransferRequest.prototype['currency'] = undefined;
var _default = TransferRequest;
exports["default"] = _default;