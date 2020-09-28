"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FundingAccountResponse = _interopRequireDefault(require("./FundingAccountResponse2"));

var _ListSourceAccountResponseLinks = _interopRequireDefault(require("./ListSourceAccountResponseLinks"));

var _ListSourceAccountResponsePage = _interopRequireDefault(require("./ListSourceAccountResponsePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListFundingAccountsResponse2 model module.
 * @module model/ListFundingAccountsResponse2
 * @version 2.23.78
 */
var ListFundingAccountsResponse2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListFundingAccountsResponse2</code>.
   * List Funding Accounts Response Object
   * @alias module:model/ListFundingAccountsResponse2
   */
  function ListFundingAccountsResponse2() {
    _classCallCheck(this, ListFundingAccountsResponse2);

    ListFundingAccountsResponse2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListFundingAccountsResponse2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListFundingAccountsResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListFundingAccountsResponse2} obj Optional instance to populate.
     * @return {module:model/ListFundingAccountsResponse2} The populated <code>ListFundingAccountsResponse2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListFundingAccountsResponse2();

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

  return ListFundingAccountsResponse2;
}();
/**
 * @member {module:model/ListSourceAccountResponsePage} page
 */


ListFundingAccountsResponse2.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/ListSourceAccountResponseLinks>} links
 */

ListFundingAccountsResponse2.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/FundingAccountResponse2>} content
 */

ListFundingAccountsResponse2.prototype['content'] = undefined;
var _default = ListFundingAccountsResponse2;
exports["default"] = _default;