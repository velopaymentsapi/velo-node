"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentInstructionV = _interopRequireDefault(require("./PaymentInstructionV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePayoutRequestV3 model module.
 * @module model/CreatePayoutRequestV3
 * @version 2.23.78
 */
var CreatePayoutRequestV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePayoutRequestV3</code>.
   * @alias module:model/CreatePayoutRequestV3
   * @param payments {Array.<module:model/PaymentInstructionV3>} 
   */
  function CreatePayoutRequestV3(payments) {
    _classCallCheck(this, CreatePayoutRequestV3);

    CreatePayoutRequestV3.initialize(this, payments);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePayoutRequestV3, null, [{
    key: "initialize",
    value: function initialize(obj, payments) {
      obj['payments'] = payments;
    }
    /**
     * Constructs a <code>CreatePayoutRequestV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayoutRequestV3} obj Optional instance to populate.
     * @return {module:model/CreatePayoutRequestV3} The populated <code>CreatePayoutRequestV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePayoutRequestV3();

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('payoutFromPayorId')) {
          obj['payoutFromPayorId'] = _ApiClient["default"].convertToType(data['payoutFromPayorId'], 'String');
        }

        if (data.hasOwnProperty('payoutToPayorId')) {
          obj['payoutToPayorId'] = _ApiClient["default"].convertToType(data['payoutToPayorId'], 'String');
        }

        if (data.hasOwnProperty('payoutMemo')) {
          obj['payoutMemo'] = _ApiClient["default"].convertToType(data['payoutMemo'], 'String');
        }

        if (data.hasOwnProperty('payments')) {
          obj['payments'] = _ApiClient["default"].convertToType(data['payments'], [_PaymentInstructionV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreatePayoutRequestV3;
}();
/**
 * Deprecated in v2.16. Any value supplied here will be ignored.
 * @member {String} payorId
 */


CreatePayoutRequestV3.prototype['payorId'] = undefined;
/**
 * The id of the payor whose source account(s) will be debited. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted.
 * @member {String} payoutFromPayorId
 */

CreatePayoutRequestV3.prototype['payoutFromPayorId'] = undefined;
/**
 * The id of the payor whose payees will be paid. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted.
 * @member {String} payoutToPayorId
 */

CreatePayoutRequestV3.prototype['payoutToPayorId'] = undefined;
/**
 * Text applied to all payment memos unless specified explicitly on a payment. This should be the reference field on the statement seen by the payee (but not via ACH)
 * @member {String} payoutMemo
 */

CreatePayoutRequestV3.prototype['payoutMemo'] = undefined;
/**
 * @member {Array.<module:model/PaymentInstructionV3>} payments
 */

CreatePayoutRequestV3.prototype['payments'] = undefined;
var _default = CreatePayoutRequestV3;
exports["default"] = _default;