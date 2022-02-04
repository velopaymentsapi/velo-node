"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetPayoutsResponseV3Links = _interopRequireDefault(require("./GetPayoutsResponseV3Links"));

var _GetPayoutsResponseV3Page = _interopRequireDefault(require("./GetPayoutsResponseV3Page"));

var _PayoutSummaryAuditV = _interopRequireDefault(require("./PayoutSummaryAuditV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetPayoutsResponseV3 model module.
 * @module model/GetPayoutsResponseV3
 * @version 2.29.130
 */
var GetPayoutsResponseV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPayoutsResponseV3</code>.
   * List Payouts Response
   * @alias module:model/GetPayoutsResponseV3
   */
  function GetPayoutsResponseV3() {
    _classCallCheck(this, GetPayoutsResponseV3);

    GetPayoutsResponseV3.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPayoutsResponseV3, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPayoutsResponseV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPayoutsResponseV3} obj Optional instance to populate.
     * @return {module:model/GetPayoutsResponseV3} The populated <code>GetPayoutsResponseV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPayoutsResponseV3();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _GetPayoutsResponseV3Page["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_GetPayoutsResponseV3Links["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_PayoutSummaryAuditV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetPayoutsResponseV3;
}();
/**
 * @member {module:model/GetPayoutsResponseV3Page} page
 */


GetPayoutsResponseV3.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/GetPayoutsResponseV3Links>} links
 */

GetPayoutsResponseV3.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PayoutSummaryAuditV3>} content
 */

GetPayoutsResponseV3.prototype['content'] = undefined;
var _default = GetPayoutsResponseV3;
exports["default"] = _default;