"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FundingAccountResponse = _interopRequireDefault(require("./FundingAccountResponse"));

var _ListSourceAccountResponseLinks = _interopRequireDefault(require("./ListSourceAccountResponseLinks"));

var _ListSourceAccountResponsePage = _interopRequireDefault(require("./ListSourceAccountResponsePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListFundingAccountsResponse model module.
 * @module model/ListFundingAccountsResponse
 * @version 2.29.128
 */
var ListFundingAccountsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListFundingAccountsResponse</code>.
   * List Source Accounts Response Object
   * @alias module:model/ListFundingAccountsResponse
   */
  function ListFundingAccountsResponse() {
    _classCallCheck(this, ListFundingAccountsResponse);

    ListFundingAccountsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListFundingAccountsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListFundingAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListFundingAccountsResponse} obj Optional instance to populate.
     * @return {module:model/ListFundingAccountsResponse} The populated <code>ListFundingAccountsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListFundingAccountsResponse();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ListSourceAccountResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_ListSourceAccountResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_FundingAccountResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListFundingAccountsResponse;
}();
/**
 * @member {module:model/ListSourceAccountResponsePage} page
 */


ListFundingAccountsResponse.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/ListSourceAccountResponseLinks>} links
 */

ListFundingAccountsResponse.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/FundingAccountResponse>} content
 */

ListFundingAccountsResponse.prototype['content'] = undefined;
var _default = ListFundingAccountsResponse;
exports["default"] = _default;