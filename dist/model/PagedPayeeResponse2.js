"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetPayeeListResponse = _interopRequireDefault(require("./GetPayeeListResponse"));

var _PagedPayeeResponse2Summary = _interopRequireDefault(require("./PagedPayeeResponse2Summary"));

var _PagedPayeeResponseLinks = _interopRequireDefault(require("./PagedPayeeResponseLinks"));

var _PagedPayeeResponsePage = _interopRequireDefault(require("./PagedPayeeResponsePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PagedPayeeResponse2 model module.
 * @module model/PagedPayeeResponse2
 * @version 2.23.78
 */
var PagedPayeeResponse2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PagedPayeeResponse2</code>.
   * List Payees Response Object
   * @alias module:model/PagedPayeeResponse2
   */
  function PagedPayeeResponse2() {
    _classCallCheck(this, PagedPayeeResponse2);

    PagedPayeeResponse2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PagedPayeeResponse2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PagedPayeeResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagedPayeeResponse2} obj Optional instance to populate.
     * @return {module:model/PagedPayeeResponse2} The populated <code>PagedPayeeResponse2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PagedPayeeResponse2();

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _PagedPayeeResponse2Summary["default"].constructFromObject(data['summary']);
        }

        if (data.hasOwnProperty('page')) {
          obj['page'] = _PagedPayeeResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PagedPayeeResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_GetPayeeListResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PagedPayeeResponse2;
}();
/**
 * @member {module:model/PagedPayeeResponse2Summary} summary
 */


PagedPayeeResponse2.prototype['summary'] = undefined;
/**
 * @member {module:model/PagedPayeeResponsePage} page
 */

PagedPayeeResponse2.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/PagedPayeeResponseLinks>} links
 */

PagedPayeeResponse2.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/GetPayeeListResponse>} content
 */

PagedPayeeResponse2.prototype['content'] = undefined;
var _default = PagedPayeeResponse2;
exports["default"] = _default;