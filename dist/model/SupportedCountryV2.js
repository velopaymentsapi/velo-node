"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RegionV = _interopRequireDefault(require("./RegionV2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SupportedCountryV2 model module.
 * @module model/SupportedCountryV2
 * @version 2.26.124
 */
var SupportedCountryV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SupportedCountryV2</code>.
   * @alias module:model/SupportedCountryV2
   */
  function SupportedCountryV2() {
    _classCallCheck(this, SupportedCountryV2);

    SupportedCountryV2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SupportedCountryV2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SupportedCountryV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupportedCountryV2} obj Optional instance to populate.
     * @return {module:model/SupportedCountryV2} The populated <code>SupportedCountryV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SupportedCountryV2();

        if (data.hasOwnProperty('isoCountryCode')) {
          obj['isoCountryCode'] = _ApiClient["default"].convertToType(data['isoCountryCode'], 'String');
        }

        if (data.hasOwnProperty('currencies')) {
          obj['currencies'] = _ApiClient["default"].convertToType(data['currencies'], ['String']);
        }

        if (data.hasOwnProperty('regions')) {
          obj['regions'] = _ApiClient["default"].convertToType(data['regions'], [_RegionV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SupportedCountryV2;
}();
/**
 * Valid ISO 3166 2 character country code. See the <a href=\"https://www.iso.org/iso-3166-country-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} isoCountryCode
 */


SupportedCountryV2.prototype['isoCountryCode'] = undefined;
/**
 * @member {Array.<String>} currencies
 */

SupportedCountryV2.prototype['currencies'] = undefined;
/**
 * @member {Array.<module:model/RegionV2>} regions
 */

SupportedCountryV2.prototype['regions'] = undefined;
var _default = SupportedCountryV2;
exports["default"] = _default;