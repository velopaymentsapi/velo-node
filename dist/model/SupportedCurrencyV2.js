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
 * The SupportedCurrencyV2 model module.
 * @module model/SupportedCurrencyV2
 * @version 2.29.130
 */
var SupportedCurrencyV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SupportedCurrencyV2</code>.
   * @alias module:model/SupportedCurrencyV2
   */
  function SupportedCurrencyV2() {
    _classCallCheck(this, SupportedCurrencyV2);

    SupportedCurrencyV2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SupportedCurrencyV2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SupportedCurrencyV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupportedCurrencyV2} obj Optional instance to populate.
     * @return {module:model/SupportedCurrencyV2} The populated <code>SupportedCurrencyV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SupportedCurrencyV2();

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('maxPaymentAmount')) {
          obj['maxPaymentAmount'] = _ApiClient["default"].convertToType(data['maxPaymentAmount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SupportedCurrencyV2;
}();
/**
 * Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} currency
 */


SupportedCurrencyV2.prototype['currency'] = undefined;
/**
 * The max amount allowed in this currency
 * @member {Number} maxPaymentAmount
 */

SupportedCurrencyV2.prototype['maxPaymentAmount'] = undefined;
var _default = SupportedCurrencyV2;
exports["default"] = _default;