"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InstructPayoutRequest model module.
 * @module model/InstructPayoutRequest
 * @version 2.29.128
 */
var InstructPayoutRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstructPayoutRequest</code>.
   * @alias module:model/InstructPayoutRequest
   */
  function InstructPayoutRequest() {
    _classCallCheck(this, InstructPayoutRequest);

    InstructPayoutRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstructPayoutRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstructPayoutRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstructPayoutRequest} obj Optional instance to populate.
     * @return {module:model/InstructPayoutRequest} The populated <code>InstructPayoutRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstructPayoutRequest();

        if (data.hasOwnProperty('fxRateDegredationThresholdPercentage')) {
          obj['fxRateDegredationThresholdPercentage'] = _ApiClient["default"].convertToType(data['fxRateDegredationThresholdPercentage'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InstructPayoutRequest;
}();
/**
 * Halt instruction if the FX rates have become worse since the last quote
 * @member {Number} fxRateDegredationThresholdPercentage
 */


InstructPayoutRequest.prototype['fxRateDegredationThresholdPercentage'] = undefined;
var _default = InstructPayoutRequest;
exports["default"] = _default;