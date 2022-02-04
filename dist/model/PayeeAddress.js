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
 * The PayeeAddress model module.
 * @module model/PayeeAddress
 * @version 2.29.130
 */
var PayeeAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeeAddress</code>.
   * @alias module:model/PayeeAddress
   * @param line1 {String} 
   * @param city {String} 
   * @param country {String} 
   */
  function PayeeAddress(line1, city, country) {
    _classCallCheck(this, PayeeAddress);

    PayeeAddress.initialize(this, line1, city, country);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeeAddress, null, [{
    key: "initialize",
    value: function initialize(obj, line1, city, country) {
      obj['line1'] = line1;
      obj['city'] = city;
      obj['country'] = country;
    }
    /**
     * Constructs a <code>PayeeAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeAddress} obj Optional instance to populate.
     * @return {module:model/PayeeAddress} The populated <code>PayeeAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeeAddress();

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

  return PayeeAddress;
}();
/**
 * @member {String} line1
 */


PayeeAddress.prototype['line1'] = undefined;
/**
 * @member {String} line2
 */

PayeeAddress.prototype['line2'] = undefined;
/**
 * @member {String} line3
 */

PayeeAddress.prototype['line3'] = undefined;
/**
 * @member {String} line4
 */

PayeeAddress.prototype['line4'] = undefined;
/**
 * @member {String} city
 */

PayeeAddress.prototype['city'] = undefined;
/**
 * @member {String} countyOrProvince
 */

PayeeAddress.prototype['countyOrProvince'] = undefined;
/**
 * @member {String} zipOrPostcode
 */

PayeeAddress.prototype['zipOrPostcode'] = undefined;
/**
 * @member {String} country
 */

PayeeAddress.prototype['country'] = undefined;
var _default = PayeeAddress;
exports["default"] = _default;