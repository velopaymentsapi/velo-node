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
 * The PayorAddress model module.
 * @module model/PayorAddress
 * @version 2.29.128
 */
var PayorAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorAddress</code>.
   * @alias module:model/PayorAddress
   * @param line1 {String} 
   * @param city {String} 
   * @param country {String} 
   */
  function PayorAddress(line1, city, country) {
    _classCallCheck(this, PayorAddress);

    PayorAddress.initialize(this, line1, city, country);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorAddress, null, [{
    key: "initialize",
    value: function initialize(obj, line1, city, country) {
      obj['line1'] = line1;
      obj['city'] = city;
      obj['country'] = country;
    }
    /**
     * Constructs a <code>PayorAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorAddress} obj Optional instance to populate.
     * @return {module:model/PayorAddress} The populated <code>PayorAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorAddress();

        if (data.hasOwnProperty('line1')) {
          obj['line1'] = _ApiClient["default"].convertToType(data['line1'], 'String');
        }

        if (data.hasOwnProperty('line2')) {
          obj['line2'] = _ApiClient["default"].convertToType(data['line2'], 'String');
        }

        if (data.hasOwnProperty('line3')) {
          obj['line3'] = _ApiClient["default"].convertToType(data['line3'], 'String');
        }

        if (data.hasOwnProperty('line4')) {
          obj['line4'] = _ApiClient["default"].convertToType(data['line4'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('countyOrProvince')) {
          obj['countyOrProvince'] = _ApiClient["default"].convertToType(data['countyOrProvince'], 'String');
        }

        if (data.hasOwnProperty('zipOrPostcode')) {
          obj['zipOrPostcode'] = _ApiClient["default"].convertToType(data['zipOrPostcode'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayorAddress;
}();
/**
 * @member {String} line1
 */


PayorAddress.prototype['line1'] = undefined;
/**
 * @member {String} line2
 */

PayorAddress.prototype['line2'] = undefined;
/**
 * @member {String} line3
 */

PayorAddress.prototype['line3'] = undefined;
/**
 * @member {String} line4
 */

PayorAddress.prototype['line4'] = undefined;
/**
 * @member {String} city
 */

PayorAddress.prototype['city'] = undefined;
/**
 * @member {String} countyOrProvince
 */

PayorAddress.prototype['countyOrProvince'] = undefined;
/**
 * @member {String} zipOrPostcode
 */

PayorAddress.prototype['zipOrPostcode'] = undefined;
/**
 * @member {String} country
 */

PayorAddress.prototype['country'] = undefined;
var _default = PayorAddress;
exports["default"] = _default;