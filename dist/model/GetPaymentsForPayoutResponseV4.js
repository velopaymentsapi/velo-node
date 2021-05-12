"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetPaymentsForPayoutResponseV4Summary = _interopRequireDefault(require("./GetPaymentsForPayoutResponseV4Summary"));

var _PagedPayeeInvitationStatusResponsePage = _interopRequireDefault(require("./PagedPayeeInvitationStatusResponsePage"));

var _PagedPayeeResponseLinks = _interopRequireDefault(require("./PagedPayeeResponseLinks"));

var _PaymentResponseV = _interopRequireDefault(require("./PaymentResponseV4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetPaymentsForPayoutResponseV4 model module.
 * @module model/GetPaymentsForPayoutResponseV4
 * @version 2.26.127
 */
var GetPaymentsForPayoutResponseV4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPaymentsForPayoutResponseV4</code>.
   * List Payments for payout
   * @alias module:model/GetPaymentsForPayoutResponseV4
   */
  function GetPaymentsForPayoutResponseV4() {
    _classCallCheck(this, GetPaymentsForPayoutResponseV4);

    GetPaymentsForPayoutResponseV4.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPaymentsForPayoutResponseV4, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPaymentsForPayoutResponseV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPaymentsForPayoutResponseV4} obj Optional instance to populate.
     * @return {module:model/GetPaymentsForPayoutResponseV4} The populated <code>GetPaymentsForPayoutResponseV4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPaymentsForPayoutResponseV4();

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _GetPaymentsForPayoutResponseV4Summary["default"].constructFromObject(data['summary']);
        }

        if (data.hasOwnProperty('page')) {
          obj['page'] = _PagedPayeeInvitationStatusResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PagedPayeeResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_PaymentResponseV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetPaymentsForPayoutResponseV4;
}();
/**
 * @member {module:model/GetPaymentsForPayoutResponseV4Summary} summary
 */


GetPaymentsForPayoutResponseV4.prototype['summary'] = undefined;
/**
 * @member {module:model/PagedPayeeInvitationStatusResponsePage} page
 */

GetPaymentsForPayoutResponseV4.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/PagedPayeeResponseLinks>} links
 */

GetPaymentsForPayoutResponseV4.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PaymentResponseV4>} content
 */

GetPaymentsForPayoutResponseV4.prototype['content'] = undefined;
var _default = GetPaymentsForPayoutResponseV4;
exports["default"] = _default;