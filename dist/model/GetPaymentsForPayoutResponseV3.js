"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetPaymentsForPayoutResponseV3Page = _interopRequireDefault(require("./GetPaymentsForPayoutResponseV3Page"));

var _GetPaymentsForPayoutResponseV3Summary = _interopRequireDefault(require("./GetPaymentsForPayoutResponseV3Summary"));

var _GetPayoutsResponseV3Links = _interopRequireDefault(require("./GetPayoutsResponseV3Links"));

var _PaymentResponseV = _interopRequireDefault(require("./PaymentResponseV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetPaymentsForPayoutResponseV3 model module.
 * @module model/GetPaymentsForPayoutResponseV3
 * @version 2.26.124
 */
var GetPaymentsForPayoutResponseV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPaymentsForPayoutResponseV3</code>.
   * List Payments for payout
   * @alias module:model/GetPaymentsForPayoutResponseV3
   */
  function GetPaymentsForPayoutResponseV3() {
    _classCallCheck(this, GetPaymentsForPayoutResponseV3);

    GetPaymentsForPayoutResponseV3.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPaymentsForPayoutResponseV3, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPaymentsForPayoutResponseV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPaymentsForPayoutResponseV3} obj Optional instance to populate.
     * @return {module:model/GetPaymentsForPayoutResponseV3} The populated <code>GetPaymentsForPayoutResponseV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPaymentsForPayoutResponseV3();

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _GetPaymentsForPayoutResponseV3Summary["default"].constructFromObject(data['summary']);
        }

        if (data.hasOwnProperty('page')) {
          obj['page'] = _GetPaymentsForPayoutResponseV3Page["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_GetPayoutsResponseV3Links["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_PaymentResponseV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetPaymentsForPayoutResponseV3;
}();
/**
 * @member {module:model/GetPaymentsForPayoutResponseV3Summary} summary
 */


GetPaymentsForPayoutResponseV3.prototype['summary'] = undefined;
/**
 * @member {module:model/GetPaymentsForPayoutResponseV3Page} page
 */

GetPaymentsForPayoutResponseV3.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/GetPayoutsResponseV3Links>} links
 */

GetPaymentsForPayoutResponseV3.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PaymentResponseV3>} content
 */

GetPaymentsForPayoutResponseV3.prototype['content'] = undefined;
var _default = GetPaymentsForPayoutResponseV3;
exports["default"] = _default;