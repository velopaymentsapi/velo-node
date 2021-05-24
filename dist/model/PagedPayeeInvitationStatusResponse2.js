"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PagedPayeeInvitationStatusResponsePage = _interopRequireDefault(require("./PagedPayeeInvitationStatusResponsePage"));

var _PagedPayeeResponseLinks = _interopRequireDefault(require("./PagedPayeeResponseLinks"));

var _PayeeInvitationStatusResponse = _interopRequireDefault(require("./PayeeInvitationStatusResponse2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PagedPayeeInvitationStatusResponse2 model module.
 * @module model/PagedPayeeInvitationStatusResponse2
 * @version 2.26.124
 */
var PagedPayeeInvitationStatusResponse2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PagedPayeeInvitationStatusResponse2</code>.
   * List Payees Invitation Status Object
   * @alias module:model/PagedPayeeInvitationStatusResponse2
   */
  function PagedPayeeInvitationStatusResponse2() {
    _classCallCheck(this, PagedPayeeInvitationStatusResponse2);

    PagedPayeeInvitationStatusResponse2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PagedPayeeInvitationStatusResponse2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PagedPayeeInvitationStatusResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagedPayeeInvitationStatusResponse2} obj Optional instance to populate.
     * @return {module:model/PagedPayeeInvitationStatusResponse2} The populated <code>PagedPayeeInvitationStatusResponse2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PagedPayeeInvitationStatusResponse2();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _PagedPayeeInvitationStatusResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PagedPayeeResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_PayeeInvitationStatusResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PagedPayeeInvitationStatusResponse2;
}();
/**
 * @member {module:model/PagedPayeeInvitationStatusResponsePage} page
 */


PagedPayeeInvitationStatusResponse2.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/PagedPayeeResponseLinks>} links
 */

PagedPayeeInvitationStatusResponse2.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PayeeInvitationStatusResponse2>} content
 */

PagedPayeeInvitationStatusResponse2.prototype['content'] = undefined;
var _default = PagedPayeeInvitationStatusResponse2;
exports["default"] = _default;