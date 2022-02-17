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
 * The PayoutPayorIds model module.
 * @module model/PayoutPayorIds
 * @version 2.29.128
 */
var PayoutPayorIds = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayoutPayorIds</code>.
   * Holder for all payor ids associated with a Payout
   * @alias module:model/PayoutPayorIds
   * @param submittingPayorId {String} The ID of the Payor that is submitting the payout
   * @param payoutFromPayorId {String} The ID of the Payor providing the source account for the payout
   * @param payoutToPayorId {String} The ID of the Payor that owns the Payee (on behalf of)
   */
  function PayoutPayorIds(submittingPayorId, payoutFromPayorId, payoutToPayorId) {
    _classCallCheck(this, PayoutPayorIds);

    PayoutPayorIds.initialize(this, submittingPayorId, payoutFromPayorId, payoutToPayorId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayoutPayorIds, null, [{
    key: "initialize",
    value: function initialize(obj, submittingPayorId, payoutFromPayorId, payoutToPayorId) {
      obj['submittingPayorId'] = submittingPayorId;
      obj['payoutFromPayorId'] = payoutFromPayorId;
      obj['payoutToPayorId'] = payoutToPayorId;
    }
    /**
     * Constructs a <code>PayoutPayorIds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutPayorIds} obj Optional instance to populate.
     * @return {module:model/PayoutPayorIds} The populated <code>PayoutPayorIds</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayoutPayorIds();

        if (data.hasOwnProperty('submittingPayorId')) {
          obj['submittingPayorId'] = _ApiClient["default"].convertToType(data['submittingPayorId'], 'String');
        }

        if (data.hasOwnProperty('payoutFromPayorId')) {
          obj['payoutFromPayorId'] = _ApiClient["default"].convertToType(data['payoutFromPayorId'], 'String');
        }

        if (data.hasOwnProperty('payoutToPayorId')) {
          obj['payoutToPayorId'] = _ApiClient["default"].convertToType(data['payoutToPayorId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayoutPayorIds;
}();
/**
 * The ID of the Payor that is submitting the payout
 * @member {String} submittingPayorId
 */


PayoutPayorIds.prototype['submittingPayorId'] = undefined;
/**
 * The ID of the Payor providing the source account for the payout
 * @member {String} payoutFromPayorId
 */

PayoutPayorIds.prototype['payoutFromPayorId'] = undefined;
/**
 * The ID of the Payor that owns the Payee (on behalf of)
 * @member {String} payoutToPayorId
 */

PayoutPayorIds.prototype['payoutToPayorId'] = undefined;
var _default = PayoutPayorIds;
exports["default"] = _default;