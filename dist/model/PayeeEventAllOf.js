"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayeeEventAllOfReasons = _interopRequireDefault(require("./PayeeEventAllOfReasons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayeeEventAllOf model module.
 * @module model/PayeeEventAllOf
 * @version 2.26.127
 */
var PayeeEventAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeeEventAllOf</code>.
   * @alias module:model/PayeeEventAllOf
   * @param payeeId {String} ID of this payee within the Velo platform
   */
  function PayeeEventAllOf(payeeId) {
    _classCallCheck(this, PayeeEventAllOf);

    PayeeEventAllOf.initialize(this, payeeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeeEventAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, payeeId) {
      obj['payeeId'] = payeeId;
    }
    /**
     * Constructs a <code>PayeeEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeEventAllOf} obj Optional instance to populate.
     * @return {module:model/PayeeEventAllOf} The populated <code>PayeeEventAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeeEventAllOf();

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('reasons')) {
          obj['reasons'] = _ApiClient["default"].convertToType(data['reasons'], [_PayeeEventAllOfReasons["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PayeeEventAllOf;
}();
/**
 * ID of this payee within the Velo platform
 * @member {String} payeeId
 */


PayeeEventAllOf.prototype['payeeId'] = undefined;
/**
 * The reasons for the event notification.
 * @member {Array.<module:model/PayeeEventAllOfReasons>} reasons
 */

PayeeEventAllOf.prototype['reasons'] = undefined;
var _default = PayeeEventAllOf;
exports["default"] = _default;