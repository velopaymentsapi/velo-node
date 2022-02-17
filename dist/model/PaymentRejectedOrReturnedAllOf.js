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
 * The PaymentRejectedOrReturnedAllOf model module.
 * @module model/PaymentRejectedOrReturnedAllOf
 * @version 2.29.128
 */
var PaymentRejectedOrReturnedAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentRejectedOrReturnedAllOf</code>.
   * @alias module:model/PaymentRejectedOrReturnedAllOf
   * @param reasonCode {String} The Velo code that indicates why the payment was rejected or returned
   * @param reasonMessage {String} The description of why the payment was rejected or returned
   */
  function PaymentRejectedOrReturnedAllOf(reasonCode, reasonMessage) {
    _classCallCheck(this, PaymentRejectedOrReturnedAllOf);

    PaymentRejectedOrReturnedAllOf.initialize(this, reasonCode, reasonMessage);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentRejectedOrReturnedAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, reasonCode, reasonMessage) {
      obj['reasonCode'] = reasonCode;
      obj['reasonMessage'] = reasonMessage;
    }
    /**
     * Constructs a <code>PaymentRejectedOrReturnedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentRejectedOrReturnedAllOf} obj Optional instance to populate.
     * @return {module:model/PaymentRejectedOrReturnedAllOf} The populated <code>PaymentRejectedOrReturnedAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentRejectedOrReturnedAllOf();

        if (data.hasOwnProperty('reasonCode')) {
          obj['reasonCode'] = _ApiClient["default"].convertToType(data['reasonCode'], 'String');
        }

        if (data.hasOwnProperty('reasonMessage')) {
          obj['reasonMessage'] = _ApiClient["default"].convertToType(data['reasonMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaymentRejectedOrReturnedAllOf;
}();
/**
 * The Velo code that indicates why the payment was rejected or returned
 * @member {String} reasonCode
 */


PaymentRejectedOrReturnedAllOf.prototype['reasonCode'] = undefined;
/**
 * The description of why the payment was rejected or returned
 * @member {String} reasonMessage
 */

PaymentRejectedOrReturnedAllOf.prototype['reasonMessage'] = undefined;
var _default = PaymentRejectedOrReturnedAllOf;
exports["default"] = _default;