"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ErrorResponse model module.
 * @module model/ErrorResponse
 * @version 2.23.78
 */
var ErrorResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorResponse</code>.
   * Error response returned by all error conditions in Velo Services
   * @alias module:model/ErrorResponse
   */
  function ErrorResponse() {
    _classCallCheck(this, ErrorResponse);

    ErrorResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErrorResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponse} obj Optional instance to populate.
     * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorResponse();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_Error["default"]]);
        }

        if (data.hasOwnProperty('correlationId')) {
          obj['correlationId'] = _ApiClient["default"].convertToType(data['correlationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ErrorResponse;
}();
/**
 * one or more errors
 * @member {Array.<module:model/Error>} errors
 */


ErrorResponse.prototype['errors'] = undefined;
/**
 * a unique identifier to track a request or related sequence of requests
 * @member {String} correlationId
 */

ErrorResponse.prototype['correlationId'] = undefined;
var _default = ErrorResponse;
exports["default"] = _default;