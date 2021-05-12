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
 * The PingResponse model module.
 * @module model/PingResponse
 * @version 2.26.127
 */
var PingResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PingResponse</code>.
   * @alias module:model/PingResponse
   */
  function PingResponse() {
    _classCallCheck(this, PingResponse);

    PingResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PingResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PingResponse} obj Optional instance to populate.
     * @return {module:model/PingResponse} The populated <code>PingResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PingResponse();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('webhookId')) {
          obj['webhookId'] = _ApiClient["default"].convertToType(data['webhookId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PingResponse;
}();
/**
 * @member {String} id
 */


PingResponse.prototype['id'] = undefined;
/**
 * @member {String} webhookId
 */

PingResponse.prototype['webhookId'] = undefined;
var _default = PingResponse;
exports["default"] = _default;