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
 * The InlineResponse404 model module.
 * @module model/InlineResponse404
 * @version 2.26.127
 */
var InlineResponse404 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse404</code>.
   * @alias module:model/InlineResponse404
   */
  function InlineResponse404() {
    _classCallCheck(this, InlineResponse404);

    InlineResponse404.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse404, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse404</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse404} obj Optional instance to populate.
     * @return {module:model/InlineResponse404} The populated <code>InlineResponse404</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse404();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_Error["default"]]);
        }

        if (data.hasOwnProperty('correlationId')) {
          obj['correlationId'] = _ApiClient["default"].convertToType(data['correlationId'], 'String');
        }

        if (data.hasOwnProperty('httpStatusCode')) {
          obj['httpStatusCode'] = _ApiClient["default"].convertToType(data['httpStatusCode'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse404;
}();
/**
 * one or more errors
 * @member {Array.<module:model/Error>} errors
 */


InlineResponse404.prototype['errors'] = undefined;
/**
 * a unique identifier to track a request or related sequence of requests
 * @member {String} correlationId
 */

InlineResponse404.prototype['correlationId'] = undefined;
/**
 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
 * @member {Number} httpStatusCode
 */

InlineResponse404.prototype['httpStatusCode'] = undefined;
var _default = InlineResponse404;
exports["default"] = _default;