"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SupportedCountryV = _interopRequireDefault(require("./SupportedCountryV2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SupportedCountriesResponseV2 model module.
 * @module model/SupportedCountriesResponseV2
 * @version 2.29.130
 */
var SupportedCountriesResponseV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SupportedCountriesResponseV2</code>.
   * @alias module:model/SupportedCountriesResponseV2
   */
  function SupportedCountriesResponseV2() {
    _classCallCheck(this, SupportedCountriesResponseV2);

    SupportedCountriesResponseV2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SupportedCountriesResponseV2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SupportedCountriesResponseV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupportedCountriesResponseV2} obj Optional instance to populate.
     * @return {module:model/SupportedCountriesResponseV2} The populated <code>SupportedCountriesResponseV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SupportedCountriesResponseV2();

        if (data.hasOwnProperty('countries')) {
          obj['countries'] = _ApiClient["default"].convertToType(data['countries'], [_SupportedCountryV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SupportedCountriesResponseV2;
}();
/**
 * @member {Array.<module:model/SupportedCountryV2>} countries
 */


SupportedCountriesResponseV2.prototype['countries'] = undefined;
var _default = SupportedCountriesResponseV2;
exports["default"] = _default;