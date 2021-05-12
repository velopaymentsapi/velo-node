"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PagedPayeeInvitationStatusResponsePage = _interopRequireDefault(require("./PagedPayeeInvitationStatusResponsePage"));

var _PagedPayeeResponseLinks = _interopRequireDefault(require("./PagedPayeeResponseLinks"));

var _PayoutSummaryAudit = _interopRequireDefault(require("./PayoutSummaryAudit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetPayoutsResponse model module.
 * @module model/GetPayoutsResponse
 * @version 2.26.127
 */
var GetPayoutsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPayoutsResponse</code>.
   * List Payouts Response
   * @alias module:model/GetPayoutsResponse
   */
  function GetPayoutsResponse() {
    _classCallCheck(this, GetPayoutsResponse);

    GetPayoutsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPayoutsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPayoutsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPayoutsResponse} obj Optional instance to populate.
     * @return {module:model/GetPayoutsResponse} The populated <code>GetPayoutsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPayoutsResponse();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _PagedPayeeInvitationStatusResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PagedPayeeResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_PayoutSummaryAudit["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetPayoutsResponse;
}();
/**
 * @member {module:model/PagedPayeeInvitationStatusResponsePage} page
 */


GetPayoutsResponse.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/PagedPayeeResponseLinks>} links
 */

GetPayoutsResponse.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PayoutSummaryAudit>} content
 */

GetPayoutsResponse.prototype['content'] = undefined;
var _default = GetPayoutsResponse;
exports["default"] = _default;