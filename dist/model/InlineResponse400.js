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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse400 model module.
 * @module model/InlineResponse400
 * @version 2.29.128
 */
var InlineResponse400 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse400</code>.
   * @alias module:model/InlineResponse400
   */
  function InlineResponse400() {
    _classCallCheck(this, InlineResponse400);

    InlineResponse400.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse400, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse400</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse400} obj Optional instance to populate.
     * @return {module:model/InlineResponse400} The populated <code>InlineResponse400</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse400();

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

  return InlineResponse400;
}();
/**
 * one or more errors
 * @member {Array.<module:model/Error>} errors
 */


InlineResponse400.prototype['errors'] = undefined;
/**
 * a unique identifier to track a request or related sequence of requests
 * @member {String} correlationId
 */

InlineResponse400.prototype['correlationId'] = undefined;
/**
 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
 * @member {Number} httpStatusCode
 */

InlineResponse400.prototype['httpStatusCode'] = undefined;
var _default = InlineResponse400;
exports["default"] = _default;