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
 * The GetPayoutsResponseV3Links model module.
 * @module model/GetPayoutsResponseV3Links
 * @version 2.26.127
 */
var GetPayoutsResponseV3Links = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPayoutsResponseV3Links</code>.
   * @alias module:model/GetPayoutsResponseV3Links
   */
  function GetPayoutsResponseV3Links() {
    _classCallCheck(this, GetPayoutsResponseV3Links);

    GetPayoutsResponseV3Links.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPayoutsResponseV3Links, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPayoutsResponseV3Links</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPayoutsResponseV3Links} obj Optional instance to populate.
     * @return {module:model/GetPayoutsResponseV3Links} The populated <code>GetPayoutsResponseV3Links</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPayoutsResponseV3Links();

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

  return GetPayoutsResponseV3Links;
}();
/**
 * @member {String} rel
 */


GetPayoutsResponseV3Links.prototype['rel'] = undefined;
/**
 * @member {String} href
 */

GetPayoutsResponseV3Links.prototype['href'] = undefined;
var _default = GetPayoutsResponseV3Links;
exports["default"] = _default;