"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentChannelCountry = _interopRequireDefault(require("./PaymentChannelCountry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PaymentChannelRulesResponse model module.
 * @module model/PaymentChannelRulesResponse
 * @version 2.29.128
 */
var PaymentChannelRulesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentChannelRulesResponse</code>.
   * @alias module:model/PaymentChannelRulesResponse
   */
  function PaymentChannelRulesResponse() {
    _classCallCheck(this, PaymentChannelRulesResponse);

    PaymentChannelRulesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentChannelRulesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentChannelRulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentChannelRulesResponse} obj Optional instance to populate.
     * @return {module:model/PaymentChannelRulesResponse} The populated <code>PaymentChannelRulesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentChannelRulesResponse();

        if (data.hasOwnProperty('bank')) {
          obj['bank'] = _ApiClient["default"].convertToType(data['bank'], [_PaymentChannelCountry["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaymentChannelRulesResponse;
}();
/**
 * @member {Array.<module:model/PaymentChannelCountry>} bank
 */


PaymentChannelRulesResponse.prototype['bank'] = undefined;
var _default = PaymentChannelRulesResponse;
exports["default"] = _default;