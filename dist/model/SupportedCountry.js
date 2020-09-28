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
 * The SupportedCountry model module.
 * @module model/SupportedCountry
 * @version 2.23.78
 */
var SupportedCountry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SupportedCountry</code>.
   * @alias module:model/SupportedCountry
   */
  function SupportedCountry() {
    _classCallCheck(this, SupportedCountry);

    SupportedCountry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SupportedCountry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SupportedCountry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupportedCountry} obj Optional instance to populate.
     * @return {module:model/SupportedCountry} The populated <code>SupportedCountry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SupportedCountry();

        if (data.hasOwnProperty('isoCountryCode')) {
          obj['isoCountryCode'] = _ApiClient["default"].convertToType(data['isoCountryCode'], 'String');
        }

        if (data.hasOwnProperty('currencies')) {
          obj['currencies'] = _ApiClient["default"].convertToType(data['currencies'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return SupportedCountry;
}();
/**
 * Valid ISO 3166 2 character country code. See the <a href=\"https://www.iso.org/iso-3166-country-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} isoCountryCode
 */


SupportedCountry.prototype['isoCountryCode'] = undefined;
/**
 * @member {Array.<String>} currencies
 */

SupportedCountry.prototype['currencies'] = undefined;
var _default = SupportedCountry;
exports["default"] = _default;