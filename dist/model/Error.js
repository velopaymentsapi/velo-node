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
 * The Error model module.
 * @module model/Error
 * @version 2.23.78
 */
var Error = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   */
  function Error() {
    _classCallCheck(this, Error);

    Error.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Error, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Error} obj Optional instance to populate.
     * @return {module:model/Error} The populated <code>Error</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Error();

        if (data.hasOwnProperty('errorMessage')) {
          obj['errorMessage'] = _ApiClient["default"].convertToType(data['errorMessage'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('locationType')) {
          obj['locationType'] = _ApiClient["default"].convertToType(data['locationType'], 'String');
        }

        if (data.hasOwnProperty('reasonCode')) {
          obj['reasonCode'] = _ApiClient["default"].convertToType(data['reasonCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Error;
}();
/**
 * verbose message indicating the nature of the error Will be localised 
 * @member {String} errorMessage
 */


Error.prototype['errorMessage'] = undefined;
/**
 * the property or object that caused the error
 * @member {String} location
 */

Error.prototype['location'] = undefined;
/**
 * the location type in the request that was the cause of the error 
 * @member {module:model/Error.LocationTypeEnum} locationType
 */

Error.prototype['locationType'] = undefined;
/**
 * a camel-cased string that can be used by clients to localise client error messages
 * @member {String} reasonCode
 */

Error.prototype['reasonCode'] = undefined;
/**
 * Allowed values for the <code>locationType</code> property.
 * @enum {String}
 * @readonly
 */

Error['LocationTypeEnum'] = {
  /**
   * value: "requestBody"
   * @const
   */
  "requestBody": "requestBody",

  /**
   * value: "queryParam"
   * @const
   */
  "queryParam": "queryParam",

  /**
   * value: "requestParam"
   * @const
   */
  "requestParam": "requestParam",

  /**
   * value: "header"
   * @const
   */
  "header": "header",

  /**
   * value: "pathParam"
   * @const
   */
  "pathParam": "pathParam"
};
var _default = Error;
exports["default"] = _default;