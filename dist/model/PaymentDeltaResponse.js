"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PagedPayeeInvitationStatusResponsePage = _interopRequireDefault(require("./PagedPayeeInvitationStatusResponsePage"));

var _PagedPayeeResponseLinks = _interopRequireDefault(require("./PagedPayeeResponseLinks"));

var _PaymentDelta = _interopRequireDefault(require("./PaymentDelta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentDeltaResponse model module.
 * @module model/PaymentDeltaResponse
 * @version 2.26.127
 */
var PaymentDeltaResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentDeltaResponse</code>.
   * List Payment Changes Response Object
   * @alias module:model/PaymentDeltaResponse
   */
  function PaymentDeltaResponse() {
    _classCallCheck(this, PaymentDeltaResponse);

    PaymentDeltaResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentDeltaResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentDeltaResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentDeltaResponse} obj Optional instance to populate.
     * @return {module:model/PaymentDeltaResponse} The populated <code>PaymentDeltaResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentDeltaResponse();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _PagedPayeeInvitationStatusResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PagedPayeeResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_PaymentDelta["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaymentDeltaResponse;
}();
/**
 * @member {module:model/PagedPayeeInvitationStatusResponsePage} page
 */


PaymentDeltaResponse.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/PagedPayeeResponseLinks>} links
 */

PaymentDeltaResponse.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PaymentDelta>} content
 */

PaymentDeltaResponse.prototype['content'] = undefined;
var _default = PaymentDeltaResponse;
exports["default"] = _default;