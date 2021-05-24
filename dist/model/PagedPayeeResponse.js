"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetPayeeListResponse = _interopRequireDefault(require("./GetPayeeListResponse"));

var _PagedPayeeResponseLinks = _interopRequireDefault(require("./PagedPayeeResponseLinks"));

var _PagedPayeeResponsePage = _interopRequireDefault(require("./PagedPayeeResponsePage"));

var _PagedPayeeResponseSummary = _interopRequireDefault(require("./PagedPayeeResponseSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PagedPayeeResponse model module.
 * @module model/PagedPayeeResponse
 * @version 2.26.124
 */
var PagedPayeeResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PagedPayeeResponse</code>.
   * List Payees Response Object
   * @alias module:model/PagedPayeeResponse
   */
  function PagedPayeeResponse() {
    _classCallCheck(this, PagedPayeeResponse);

    PagedPayeeResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PagedPayeeResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PagedPayeeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagedPayeeResponse} obj Optional instance to populate.
     * @return {module:model/PagedPayeeResponse} The populated <code>PagedPayeeResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PagedPayeeResponse();

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _PagedPayeeResponseSummary["default"].constructFromObject(data['summary']);
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

  return PagedPayeeResponse;
}();
/**
 * @member {module:model/PagedPayeeResponseSummary} summary
 */


PagedPayeeResponse.prototype['summary'] = undefined;
/**
 * @member {module:model/PagedPayeeResponsePage} page
 */

PagedPayeeResponse.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/PagedPayeeResponseLinks>} links
 */

PagedPayeeResponse.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/GetPayeeListResponse>} content
 */

PagedPayeeResponse.prototype['content'] = undefined;
var _default = PagedPayeeResponse;
exports["default"] = _default;