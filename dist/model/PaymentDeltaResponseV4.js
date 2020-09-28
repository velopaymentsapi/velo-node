"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PagedPayeeInvitationStatusResponsePage = _interopRequireDefault(require("./PagedPayeeInvitationStatusResponsePage"));

var _PagedPayeeResponseLinks = _interopRequireDefault(require("./PagedPayeeResponseLinks"));

var _PaymentDeltaV = _interopRequireDefault(require("./PaymentDeltaV4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentDeltaResponseV4 model module.
 * @module model/PaymentDeltaResponseV4
 * @version 2.23.78
 */
var PaymentDeltaResponseV4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentDeltaResponseV4</code>.
   * List Payment Changes Response Object
   * @alias module:model/PaymentDeltaResponseV4
   */
  function PaymentDeltaResponseV4() {
    _classCallCheck(this, PaymentDeltaResponseV4);

    PaymentDeltaResponseV4.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentDeltaResponseV4, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentDeltaResponseV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentDeltaResponseV4} obj Optional instance to populate.
     * @return {module:model/PaymentDeltaResponseV4} The populated <code>PaymentDeltaResponseV4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentDeltaResponseV4();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _PagedPayeeInvitationStatusResponsePage["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PagedPayeeResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_PaymentDeltaV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaymentDeltaResponseV4;
}();
/**
 * @member {module:model/PagedPayeeInvitationStatusResponsePage} page
 */


PaymentDeltaResponseV4.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/PagedPayeeResponseLinks>} links
 */

PaymentDeltaResponseV4.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PaymentDeltaV4>} content
 */

PaymentDeltaResponseV4.prototype['content'] = undefined;
var _default = PaymentDeltaResponseV4;
exports["default"] = _default;