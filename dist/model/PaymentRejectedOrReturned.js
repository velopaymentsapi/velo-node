"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentRejectedOrReturnedAllOf = _interopRequireDefault(require("./PaymentRejectedOrReturnedAllOf"));

var _PaymentStatusChanged = _interopRequireDefault(require("./PaymentStatusChanged"));

var _PayoutPayorIds = _interopRequireDefault(require("./PayoutPayorIds"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PaymentRejectedOrReturned model module.
 * @module model/PaymentRejectedOrReturned
 * @version 2.29.130
 */
var PaymentRejectedOrReturned = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentRejectedOrReturned</code>.
   * Base type for all rejection or return payment events
   * @alias module:model/PaymentRejectedOrReturned
   * @implements module:model/PaymentStatusChanged
   * @implements module:model/PaymentRejectedOrReturnedAllOf
   * @param sourceType {String} OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
   * @param eventId {String} UUID id of the source event in the Velo platform
   * @param createdAt {Date} ISO8601 timestamp indicating when the source event was created
   * @param paymentId {String} ID of this payment within the Velo platform
   * @param status {String} The new status of the payment. One of \"SUBMITTED\" \"ACCEPTED\" \"REJECTED\" \"ACCEPTED_BY_RAILS\" \"CONFIRMED\" \"RETURNED\" \"WITHDRAWN\"
   * @param reasonCode {String} The Velo code that indicates why the payment was rejected or returned
   * @param reasonMessage {String} The description of why the payment was rejected or returned
   */
  function PaymentRejectedOrReturned(sourceType, eventId, createdAt, paymentId, status, reasonCode, reasonMessage) {
    _classCallCheck(this, PaymentRejectedOrReturned);

    _PaymentStatusChanged["default"].initialize(this, sourceType, eventId, createdAt, paymentId, status);

    _PaymentRejectedOrReturnedAllOf["default"].initialize(this, reasonCode, reasonMessage);

    PaymentRejectedOrReturned.initialize(this, sourceType, eventId, createdAt, paymentId, status, reasonCode, reasonMessage);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentRejectedOrReturned, null, [{
    key: "initialize",
    value: function initialize(obj, sourceType, eventId, createdAt, paymentId, status, reasonCode, reasonMessage) {
      obj['sourceType'] = sourceType;
      obj['eventId'] = eventId;
      obj['createdAt'] = createdAt;
      obj['paymentId'] = paymentId;
      obj['status'] = status;
      obj['reasonCode'] = reasonCode;
      obj['reasonMessage'] = reasonMessage;
    }
    /**
     * Constructs a <code>PaymentRejectedOrReturned</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentRejectedOrReturned} obj Optional instance to populate.
     * @return {module:model/PaymentRejectedOrReturned} The populated <code>PaymentRejectedOrReturned</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentRejectedOrReturned();

        _PaymentStatusChanged["default"].constructFromObject(data, obj);

        _PaymentRejectedOrReturnedAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('sourceType')) {
          obj['sourceType'] = _ApiClient["default"].convertToType(data['sourceType'], 'String');
        }

        if (data.hasOwnProperty('eventId')) {
          obj['eventId'] = _ApiClient["default"].convertToType(data['eventId'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Date');
        }

        if (data.hasOwnProperty('paymentId')) {
          obj['paymentId'] = _ApiClient["default"].convertToType(data['paymentId'], 'String');
        }

        if (data.hasOwnProperty('payoutPayorIds')) {
          obj['payoutPayorIds'] = _PayoutPayorIds["default"].constructFromObject(data['payoutPayorIds']);
        }

        if (data.hasOwnProperty('payorPaymentId')) {
          obj['payorPaymentId'] = _ApiClient["default"].convertToType(data['payorPaymentId'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('reasonCode')) {
          obj['reasonCode'] = _ApiClient["default"].convertToType(data['reasonCode'], 'String');
        }

        if (data.hasOwnProperty('reasonMessage')) {
          obj['reasonMessage'] = _ApiClient["default"].convertToType(data['reasonMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaymentRejectedOrReturned;
}();
/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */


PaymentRejectedOrReturned.prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

PaymentRejectedOrReturned.prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

PaymentRejectedOrReturned.prototype['createdAt'] = undefined;
/**
 * ID of this payment within the Velo platform
 * @member {String} paymentId
 */

PaymentRejectedOrReturned.prototype['paymentId'] = undefined;
/**
 * @member {module:model/PayoutPayorIds} payoutPayorIds
 */

PaymentRejectedOrReturned.prototype['payoutPayorIds'] = undefined;
/**
 * ID of this payment in the payors system
 * @member {String} payorPaymentId
 */

PaymentRejectedOrReturned.prototype['payorPaymentId'] = undefined;
/**
 * The new status of the payment. One of \"SUBMITTED\" \"ACCEPTED\" \"REJECTED\" \"ACCEPTED_BY_RAILS\" \"CONFIRMED\" \"RETURNED\" \"WITHDRAWN\"
 * @member {String} status
 */

PaymentRejectedOrReturned.prototype['status'] = undefined;
/**
 * The Velo code that indicates why the payment was rejected or returned
 * @member {String} reasonCode
 */

PaymentRejectedOrReturned.prototype['reasonCode'] = undefined;
/**
 * The description of why the payment was rejected or returned
 * @member {String} reasonMessage
 */

PaymentRejectedOrReturned.prototype['reasonMessage'] = undefined; // Implement PaymentStatusChanged interface:

/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */

_PaymentStatusChanged["default"].prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

_PaymentStatusChanged["default"].prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

_PaymentStatusChanged["default"].prototype['createdAt'] = undefined;
/**
 * ID of this payment within the Velo platform
 * @member {String} paymentId
 */

_PaymentStatusChanged["default"].prototype['paymentId'] = undefined;
/**
 * @member {module:model/PayoutPayorIds} payoutPayorIds
 */

_PaymentStatusChanged["default"].prototype['payoutPayorIds'] = undefined;
/**
 * ID of this payment in the payors system
 * @member {String} payorPaymentId
 */

_PaymentStatusChanged["default"].prototype['payorPaymentId'] = undefined;
/**
 * The new status of the payment. One of \"SUBMITTED\" \"ACCEPTED\" \"REJECTED\" \"ACCEPTED_BY_RAILS\" \"CONFIRMED\" \"RETURNED\" \"WITHDRAWN\"
 * @member {String} status
 */

_PaymentStatusChanged["default"].prototype['status'] = undefined; // Implement PaymentRejectedOrReturnedAllOf interface:

/**
 * The Velo code that indicates why the payment was rejected or returned
 * @member {String} reasonCode
 */

_PaymentRejectedOrReturnedAllOf["default"].prototype['reasonCode'] = undefined;
/**
 * The description of why the payment was rejected or returned
 * @member {String} reasonMessage
 */

_PaymentRejectedOrReturnedAllOf["default"].prototype['reasonMessage'] = undefined;
var _default = PaymentRejectedOrReturned;
exports["default"] = _default;