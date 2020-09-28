"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentChannelRule = _interopRequireDefault(require("./PaymentChannelRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentChannelCountry model module.
 * @module model/PaymentChannelCountry
 * @version 2.23.78
 */
var PaymentChannelCountry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentChannelCountry</code>.
   * @alias module:model/PaymentChannelCountry
   * @param isoCountryCode {String} The ISO code for the country
   * @param rules {Array.<module:model/PaymentChannelRule>} The rules for the given country
   */
  function PaymentChannelCountry(isoCountryCode, rules) {
    _classCallCheck(this, PaymentChannelCountry);

    PaymentChannelCountry.initialize(this, isoCountryCode, rules);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentChannelCountry, null, [{
    key: "initialize",
    value: function initialize(obj, isoCountryCode, rules) {
      obj['isoCountryCode'] = isoCountryCode;
      obj['rules'] = rules;
    }
    /**
     * Constructs a <code>PaymentChannelCountry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentChannelCountry} obj Optional instance to populate.
     * @return {module:model/PaymentChannelCountry} The populated <code>PaymentChannelCountry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentChannelCountry();

        if (data.hasOwnProperty('isoCountryCode')) {
          obj['isoCountryCode'] = _ApiClient["default"].convertToType(data['isoCountryCode'], 'String');
        }

        if (data.hasOwnProperty('rules')) {
          obj['rules'] = _ApiClient["default"].convertToType(data['rules'], [_PaymentChannelRule["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaymentChannelCountry;
}();
/**
 * The ISO code for the country
 * @member {String} isoCountryCode
 */


PaymentChannelCountry.prototype['isoCountryCode'] = undefined;
/**
 * The rules for the given country
 * @member {Array.<module:model/PaymentChannelRule>} rules
 */

PaymentChannelCountry.prototype['rules'] = undefined;
var _default = PaymentChannelCountry;
exports["default"] = _default;