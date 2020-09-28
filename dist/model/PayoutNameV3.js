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
 * The PayoutNameV3 model module.
 * @module model/PayoutNameV3
 * @version 2.23.78
 */
var PayoutNameV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayoutNameV3</code>.
   * @alias module:model/PayoutNameV3
   * @param firstName {String} 
   * @param lastName {String} 
   */
  function PayoutNameV3(firstName, lastName) {
    _classCallCheck(this, PayoutNameV3);

    PayoutNameV3.initialize(this, firstName, lastName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayoutNameV3, null, [{
    key: "initialize",
    value: function initialize(obj, firstName, lastName) {
      obj['firstName'] = firstName;
      obj['lastName'] = lastName;
    }
    /**
     * Constructs a <code>PayoutNameV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutNameV3} obj Optional instance to populate.
     * @return {module:model/PayoutNameV3} The populated <code>PayoutNameV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayoutNameV3();

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayoutNameV3;
}();
/**
 * @member {String} firstName
 */


PayoutNameV3.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

PayoutNameV3.prototype['lastName'] = undefined;
var _default = PayoutNameV3;
exports["default"] = _default;