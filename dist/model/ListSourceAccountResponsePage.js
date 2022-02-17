"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListSourceAccountResponsePage model module.
 * @module model/ListSourceAccountResponsePage
 * @version 2.29.128
 */
var ListSourceAccountResponsePage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSourceAccountResponsePage</code>.
   * @alias module:model/ListSourceAccountResponsePage
   */
  function ListSourceAccountResponsePage() {
    _classCallCheck(this, ListSourceAccountResponsePage);

    ListSourceAccountResponsePage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListSourceAccountResponsePage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListSourceAccountResponsePage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSourceAccountResponsePage} obj Optional instance to populate.
     * @return {module:model/ListSourceAccountResponsePage} The populated <code>ListSourceAccountResponsePage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSourceAccountResponsePage();

        if (data.hasOwnProperty('numberOfElements')) {
          obj['numberOfElements'] = _ApiClient["default"].convertToType(data['numberOfElements'], 'Number');
        }

        if (data.hasOwnProperty('totalElements')) {
          obj['totalElements'] = _ApiClient["default"].convertToType(data['totalElements'], 'Number');
        }

        if (data.hasOwnProperty('totalPages')) {
          obj['totalPages'] = _ApiClient["default"].convertToType(data['totalPages'], 'Number');
        }

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'Number');
        }

        if (data.hasOwnProperty('pageSize')) {
          obj['pageSize'] = _ApiClient["default"].convertToType(data['pageSize'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ListSourceAccountResponsePage;
}();
/**
 * @member {Number} numberOfElements
 */


ListSourceAccountResponsePage.prototype['numberOfElements'] = undefined;
/**
 * @member {Number} totalElements
 */

ListSourceAccountResponsePage.prototype['totalElements'] = undefined;
/**
 * @member {Number} totalPages
 */

ListSourceAccountResponsePage.prototype['totalPages'] = undefined;
/**
 * @member {Number} page
 */

ListSourceAccountResponsePage.prototype['page'] = undefined;
/**
 * @member {Number} pageSize
 */

ListSourceAccountResponsePage.prototype['pageSize'] = undefined;
var _default = ListSourceAccountResponsePage;
exports["default"] = _default;