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
 * The ValidatePasswordResponse model module.
 * @module model/ValidatePasswordResponse
 * @version 2.23.78
 */
var ValidatePasswordResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidatePasswordResponse</code>.
   * @alias module:model/ValidatePasswordResponse
   */
  function ValidatePasswordResponse() {
    _classCallCheck(this, ValidatePasswordResponse);

    ValidatePasswordResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidatePasswordResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ValidatePasswordResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidatePasswordResponse} obj Optional instance to populate.
     * @return {module:model/ValidatePasswordResponse} The populated <code>ValidatePasswordResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidatePasswordResponse();

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('valid')) {
          obj['valid'] = _ApiClient["default"].convertToType(data['valid'], 'Boolean');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _ApiClient["default"].convertToType(data['warning'], 'String');
        }

        if (data.hasOwnProperty('suggestions')) {
          obj['suggestions'] = _ApiClient["default"].convertToType(data['suggestions'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ValidatePasswordResponse;
}();
/**
 * More secure passwords are given a higher score. <P> For a password to be acceptable for use in Velo, it must score at least 3 
 * @member {Number} score
 */


ValidatePasswordResponse.prototype['score'] = undefined;
/**
 * if true then the password can be accepted
 * @member {Boolean} valid
 */

ValidatePasswordResponse.prototype['valid'] = undefined;
/**
 * Any warning message as a reason for the given score.
 * @member {String} warning
 */

ValidatePasswordResponse.prototype['warning'] = undefined;
/**
 * @member {Array.<String>} suggestions
 */

ValidatePasswordResponse.prototype['suggestions'] = undefined;
var _default = ValidatePasswordResponse;
exports["default"] = _default;