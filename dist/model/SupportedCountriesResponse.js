"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SupportedCountry = _interopRequireDefault(require("./SupportedCountry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SupportedCountriesResponse model module.
 * @module model/SupportedCountriesResponse
 * @version 2.23.78
 */
var SupportedCountriesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SupportedCountriesResponse</code>.
   * @alias module:model/SupportedCountriesResponse
   */
  function SupportedCountriesResponse() {
    _classCallCheck(this, SupportedCountriesResponse);

    SupportedCountriesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SupportedCountriesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SupportedCountriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupportedCountriesResponse} obj Optional instance to populate.
     * @return {module:model/SupportedCountriesResponse} The populated <code>SupportedCountriesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SupportedCountriesResponse();

        if (data.hasOwnProperty('countries')) {
          obj['countries'] = _ApiClient["default"].convertToType(data['countries'], [_SupportedCountry["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SupportedCountriesResponse;
}();
/**
 * @member {Array.<module:model/SupportedCountry>} countries
 */


SupportedCountriesResponse.prototype['countries'] = undefined;
var _default = SupportedCountriesResponse;
exports["default"] = _default;