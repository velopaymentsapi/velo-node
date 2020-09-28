"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FundingAudit = _interopRequireDefault(require("./FundingAudit"));

var _GetFundingsResponseLinks = _interopRequireDefault(require("./GetFundingsResponseLinks"));

var _PagedUserResponsePage = _interopRequireDefault(require("./PagedUserResponsePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetFundingsResponse model module.
 * @module model/GetFundingsResponse
 * @version 2.23.78
 */
var GetFundingsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetFundingsResponse</code>.
   * List Users Response Object
   * @alias module:model/GetFundingsResponse
   */
  function GetFundingsResponse() {
    _classCallCheck(this, GetFundingsResponse);

    GetFundingsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetFundingsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetFundingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFundingsResponse} obj Optional instance to populate.
     * @return {module:model/GetFundingsResponse} The populated <code>GetFundingsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetFundingsResponse();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _PagedUserResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_GetFundingsResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_FundingAudit["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetFundingsResponse;
}();
/**
 * @member {module:model/PagedUserResponsePage} page
 */


GetFundingsResponse.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/GetFundingsResponseLinks>} links
 */

GetFundingsResponse.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/FundingAudit>} content
 */

GetFundingsResponse.prototype['content'] = undefined;
var _default = GetFundingsResponse;
exports["default"] = _default;