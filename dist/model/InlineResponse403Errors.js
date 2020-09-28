"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LocationType = _interopRequireDefault(require("./LocationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse403Errors model module.
 * @module model/InlineResponse403Errors
 * @version 2.23.78
 */
var InlineResponse403Errors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse403Errors</code>.
   * @alias module:model/InlineResponse403Errors
   */
  function InlineResponse403Errors() {
    _classCallCheck(this, InlineResponse403Errors);

    InlineResponse403Errors.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse403Errors, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse403Errors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse403Errors} obj Optional instance to populate.
     * @return {module:model/InlineResponse403Errors} The populated <code>InlineResponse403Errors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse403Errors();

        if (data.hasOwnProperty('errorMessage')) {
          obj['errorMessage'] = _ApiClient["default"].convertToType(data['errorMessage'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('locationType')) {
          obj['locationType'] = _LocationType["default"].constructFromObject(data['locationType']);
        }

        if (data.hasOwnProperty('reasonCode')) {
          obj['reasonCode'] = _ApiClient["default"].convertToType(data['reasonCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse403Errors;
}();
/**
 * verbose message indicating the nature of the error Will be localised 
 * @member {String} errorMessage
 */


InlineResponse403Errors.prototype['errorMessage'] = undefined;
/**
 * the property or object that caused the error
 * @member {String} location
 */

InlineResponse403Errors.prototype['location'] = undefined;
/**
 * @member {module:model/LocationType} locationType
 */

InlineResponse403Errors.prototype['locationType'] = undefined;
/**
 * a camel-cased string that can be used by clients to localise client error messages
 * @member {String} reasonCode
 */

InlineResponse403Errors.prototype['reasonCode'] = undefined;
var _default = InlineResponse403Errors;
exports["default"] = _default;