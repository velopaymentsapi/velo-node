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
 * The PaymentChannelRule model module.
 * @module model/PaymentChannelRule
 * @version 2.23.78
 */
var PaymentChannelRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentChannelRule</code>.
   * Rules that will get applied when creating or updating a payment channel for the given country
   * @alias module:model/PaymentChannelRule
   * @param element {String} <p>the rule element</p> <p>will match a given element name for a payment channel configuration 
   * @param required {Boolean} is this element required
   * @param displayName {String} User friendly name
   * @param validation {String} a regex to validate the element data
   */
  function PaymentChannelRule(element, required, displayName, validation) {
    _classCallCheck(this, PaymentChannelRule);

    PaymentChannelRule.initialize(this, element, required, displayName, validation);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentChannelRule, null, [{
    key: "initialize",
    value: function initialize(obj, element, required, displayName, validation) {
      obj['element'] = element;
      obj['required'] = required;
      obj['displayName'] = displayName;
      obj['validation'] = validation;
    }
    /**
     * Constructs a <code>PaymentChannelRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentChannelRule} obj Optional instance to populate.
     * @return {module:model/PaymentChannelRule} The populated <code>PaymentChannelRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentChannelRule();

        if (data.hasOwnProperty('element')) {
          obj['element'] = _ApiClient["default"].convertToType(data['element'], 'String');
        }

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], 'Boolean');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('minLength')) {
          obj['minLength'] = _ApiClient["default"].convertToType(data['minLength'], 'Number');
        }

        if (data.hasOwnProperty('maxLength')) {
          obj['maxLength'] = _ApiClient["default"].convertToType(data['maxLength'], 'Number');
        }

        if (data.hasOwnProperty('validation')) {
          obj['validation'] = _ApiClient["default"].convertToType(data['validation'], 'String');
        }

        if (data.hasOwnProperty('displayOrder')) {
          obj['displayOrder'] = _ApiClient["default"].convertToType(data['displayOrder'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PaymentChannelRule;
}();
/**
 * <p>the rule element</p> <p>will match a given element name for a payment channel configuration 
 * @member {String} element
 */


PaymentChannelRule.prototype['element'] = undefined;
/**
 * is this element required
 * @member {Boolean} required
 */

PaymentChannelRule.prototype['required'] = undefined;
/**
 * User friendly name
 * @member {String} displayName
 */

PaymentChannelRule.prototype['displayName'] = undefined;
/**
 * mininum length of the element data
 * @member {Number} minLength
 */

PaymentChannelRule.prototype['minLength'] = undefined;
/**
 * maximum length of the element data
 * @member {Number} maxLength
 */

PaymentChannelRule.prototype['maxLength'] = undefined;
/**
 * a regex to validate the element data
 * @member {String} validation
 */

PaymentChannelRule.prototype['validation'] = undefined;
/**
 * @member {Number} displayOrder
 */

PaymentChannelRule.prototype['displayOrder'] = undefined;
var _default = PaymentChannelRule;
exports["default"] = _default;