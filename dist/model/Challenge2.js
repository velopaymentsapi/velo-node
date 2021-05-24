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
 * The Challenge2 model module.
 * @module model/Challenge2
 * @version 2.26.124
 */
var Challenge2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Challenge2</code>.
   * @alias module:model/Challenge2
   * @param value {String} 
   * @param description {String} 
   */
  function Challenge2(value, description) {
    _classCallCheck(this, Challenge2);

    Challenge2.initialize(this, value, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Challenge2, null, [{
    key: "initialize",
    value: function initialize(obj, value, description) {
      obj['value'] = value;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>Challenge2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Challenge2} obj Optional instance to populate.
     * @return {module:model/Challenge2} The populated <code>Challenge2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Challenge2();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Challenge2;
}();
/**
 * @member {String} value
 */


Challenge2.prototype['value'] = undefined;
/**
 * @member {String} description
 */

Challenge2.prototype['description'] = undefined;
var _default = Challenge2;
exports["default"] = _default;