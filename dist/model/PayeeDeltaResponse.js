"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayeeDelta = _interopRequireDefault(require("./PayeeDelta"));

var _PayeeDeltaResponseLinks = _interopRequireDefault(require("./PayeeDeltaResponseLinks"));

var _PayeeDeltaResponsePage = _interopRequireDefault(require("./PayeeDeltaResponsePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PayeeDeltaResponse model module.
 * @module model/PayeeDeltaResponse
 * @version 2.29.128
 */
var PayeeDeltaResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeeDeltaResponse</code>.
   * List Payee Changes Response Object
   * @alias module:model/PayeeDeltaResponse
   */
  function PayeeDeltaResponse() {
    _classCallCheck(this, PayeeDeltaResponse);

    PayeeDeltaResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeeDeltaResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayeeDeltaResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeDeltaResponse} obj Optional instance to populate.
     * @return {module:model/PayeeDeltaResponse} The populated <code>PayeeDeltaResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeeDeltaResponse();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _PayeeDeltaResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PayeeDeltaResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_PayeeDelta["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PayeeDeltaResponse;
}();
/**
 * @member {module:model/PayeeDeltaResponsePage} page
 */


PayeeDeltaResponse.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/PayeeDeltaResponseLinks>} links
 */

PayeeDeltaResponse.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PayeeDelta>} content
 */

PayeeDeltaResponse.prototype['content'] = undefined;
var _default = PayeeDeltaResponse;
exports["default"] = _default;