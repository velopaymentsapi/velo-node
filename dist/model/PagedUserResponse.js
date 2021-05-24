"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PagedUserResponseLinks = _interopRequireDefault(require("./PagedUserResponseLinks"));

var _PagedUserResponsePage = _interopRequireDefault(require("./PagedUserResponsePage"));

var _UserResponse = _interopRequireDefault(require("./UserResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PagedUserResponse model module.
 * @module model/PagedUserResponse
 * @version 2.26.124
 */
var PagedUserResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PagedUserResponse</code>.
   * List Users Response Object
   * @alias module:model/PagedUserResponse
   */
  function PagedUserResponse() {
    _classCallCheck(this, PagedUserResponse);

    PagedUserResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PagedUserResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PagedUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagedUserResponse} obj Optional instance to populate.
     * @return {module:model/PagedUserResponse} The populated <code>PagedUserResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PagedUserResponse();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _PagedUserResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PagedUserResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_UserResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PagedUserResponse;
}();
/**
 * @member {module:model/PagedUserResponsePage} page
 */


PagedUserResponse.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/PagedUserResponseLinks>} links
 */

PagedUserResponse.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/UserResponse>} content
 */

PagedUserResponse.prototype['content'] = undefined;
var _default = PagedUserResponse;
exports["default"] = _default;