"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PagedPayeeInvitationStatusResponsePage = _interopRequireDefault(require("./PagedPayeeInvitationStatusResponsePage"));

var _PagedPayeeResponseLinks = _interopRequireDefault(require("./PagedPayeeResponseLinks"));

var _PaymentDeltaV = _interopRequireDefault(require("./PaymentDeltaV1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PaymentDeltaResponseV1 model module.
 * @module model/PaymentDeltaResponseV1
 * @version 2.29.128
 */
var PaymentDeltaResponseV1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentDeltaResponseV1</code>.
   * List Payment Changes Response Object
   * @alias module:model/PaymentDeltaResponseV1
   */
  function PaymentDeltaResponseV1() {
    _classCallCheck(this, PaymentDeltaResponseV1);

    PaymentDeltaResponseV1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentDeltaResponseV1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentDeltaResponseV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentDeltaResponseV1} obj Optional instance to populate.
     * @return {module:model/PaymentDeltaResponseV1} The populated <code>PaymentDeltaResponseV1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentDeltaResponseV1();

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

  return PaymentDeltaResponseV1;
}();
/**
 * @member {module:model/PagedPayeeInvitationStatusResponsePage} page
 */


PaymentDeltaResponseV1.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/PagedPayeeResponseLinks>} links
 */

PaymentDeltaResponseV1.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PaymentDeltaV1>} content
 */

PaymentDeltaResponseV1.prototype['content'] = undefined;
var _default = PaymentDeltaResponseV1;
exports["default"] = _default;