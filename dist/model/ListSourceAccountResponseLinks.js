"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListSourceAccountResponseLinks model module.
 * @module model/ListSourceAccountResponseLinks
 * @version 2.26.124
 */
var ListSourceAccountResponseLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSourceAccountResponseLinks</code>.
   * @alias module:model/ListSourceAccountResponseLinks
   */
  function ListSourceAccountResponseLinks() {
    _classCallCheck(this, ListSourceAccountResponseLinks);

    ListSourceAccountResponseLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListSourceAccountResponseLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListSourceAccountResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSourceAccountResponseLinks} obj Optional instance to populate.
     * @return {module:model/ListSourceAccountResponseLinks} The populated <code>ListSourceAccountResponseLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSourceAccountResponseLinks();

        if (data.hasOwnProperty('rel')) {
          obj['rel'] = _ApiClient["default"].convertToType(data['rel'], 'String');
        }

        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListSourceAccountResponseLinks;
}();
/**
 * @member {String} rel
 */


ListSourceAccountResponseLinks.prototype['rel'] = undefined;
/**
 * @member {String} href
 */

ListSourceAccountResponseLinks.prototype['href'] = undefined;
var _default = ListSourceAccountResponseLinks;
exports["default"] = _default;