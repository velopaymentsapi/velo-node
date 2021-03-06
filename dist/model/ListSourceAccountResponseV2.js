"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListSourceAccountResponseV2Links = _interopRequireDefault(require("./ListSourceAccountResponseV2Links"));

var _PagedUserResponsePage = _interopRequireDefault(require("./PagedUserResponsePage"));

var _SourceAccountResponseV = _interopRequireDefault(require("./SourceAccountResponseV2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListSourceAccountResponseV2 model module.
 * @module model/ListSourceAccountResponseV2
 * @version 2.26.124
 */
var ListSourceAccountResponseV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSourceAccountResponseV2</code>.
   * List Source Accounts Response Object
   * @alias module:model/ListSourceAccountResponseV2
   */
  function ListSourceAccountResponseV2() {
    _classCallCheck(this, ListSourceAccountResponseV2);

    ListSourceAccountResponseV2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListSourceAccountResponseV2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListSourceAccountResponseV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSourceAccountResponseV2} obj Optional instance to populate.
     * @return {module:model/ListSourceAccountResponseV2} The populated <code>ListSourceAccountResponseV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSourceAccountResponseV2();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _PagedUserResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_ListSourceAccountResponseV2Links["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_SourceAccountResponseV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListSourceAccountResponseV2;
}();
/**
 * @member {module:model/PagedUserResponsePage} page
 */


ListSourceAccountResponseV2.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/ListSourceAccountResponseV2Links>} links
 */

ListSourceAccountResponseV2.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/SourceAccountResponseV2>} content
 */

ListSourceAccountResponseV2.prototype['content'] = undefined;
var _default = ListSourceAccountResponseV2;
exports["default"] = _default;