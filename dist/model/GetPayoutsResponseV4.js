"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PagedPayeeInvitationStatusResponsePage = _interopRequireDefault(require("./PagedPayeeInvitationStatusResponsePage"));

var _PagedPayeeResponseLinks = _interopRequireDefault(require("./PagedPayeeResponseLinks"));

var _PayoutSummaryAuditV = _interopRequireDefault(require("./PayoutSummaryAuditV4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetPayoutsResponseV4 model module.
 * @module model/GetPayoutsResponseV4
 * @version 2.23.78
 */
var GetPayoutsResponseV4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPayoutsResponseV4</code>.
   * List Payouts Response
   * @alias module:model/GetPayoutsResponseV4
   */
  function GetPayoutsResponseV4() {
    _classCallCheck(this, GetPayoutsResponseV4);

    GetPayoutsResponseV4.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPayoutsResponseV4, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPayoutsResponseV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPayoutsResponseV4} obj Optional instance to populate.
     * @return {module:model/GetPayoutsResponseV4} The populated <code>GetPayoutsResponseV4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPayoutsResponseV4();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _PagedPayeeInvitationStatusResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PagedPayeeResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_PayoutSummaryAuditV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetPayoutsResponseV4;
}();
/**
 * @member {module:model/PagedPayeeInvitationStatusResponsePage} page
 */


GetPayoutsResponseV4.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/PagedPayeeResponseLinks>} links
 */

GetPayoutsResponseV4.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PayoutSummaryAuditV4>} content
 */

GetPayoutsResponseV4.prototype['content'] = undefined;
var _default = GetPayoutsResponseV4;
exports["default"] = _default;