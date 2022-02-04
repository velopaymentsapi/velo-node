"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayoutCompanyV = _interopRequireDefault(require("./PayoutCompanyV3"));

var _PayoutIndividualV = _interopRequireDefault(require("./PayoutIndividualV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PayoutPayeeV3 model module.
 * @module model/PayoutPayeeV3
 * @version 2.29.130
 */
var PayoutPayeeV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayoutPayeeV3</code>.
   * Payee data associated with a payment. Either individual or company must be populated
   * @alias module:model/PayoutPayeeV3
   * @param payeeId {String} 
   */
  function PayoutPayeeV3(payeeId) {
    _classCallCheck(this, PayoutPayeeV3);

    PayoutPayeeV3.initialize(this, payeeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayoutPayeeV3, null, [{
    key: "initialize",
    value: function initialize(obj, payeeId) {
      obj['payeeId'] = payeeId;
    }
    /**
     * Constructs a <code>PayoutPayeeV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutPayeeV3} obj Optional instance to populate.
     * @return {module:model/PayoutPayeeV3} The populated <code>PayoutPayeeV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayoutPayeeV3();

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('individual')) {
          obj['individual'] = _PayoutIndividualV["default"].constructFromObject(data['individual']);
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _PayoutCompanyV["default"].constructFromObject(data['company']);
        }
      }

      return obj;
    }
  }]);

  return PayoutPayeeV3;
}();
/**
 * @member {String} payeeId
 */


PayoutPayeeV3.prototype['payeeId'] = undefined;
/**
 * @member {module:model/PayoutIndividualV3} individual
 */

PayoutPayeeV3.prototype['individual'] = undefined;
/**
 * @member {module:model/PayoutCompanyV3} company
 */

PayoutPayeeV3.prototype['company'] = undefined;
var _default = PayoutPayeeV3;
exports["default"] = _default;