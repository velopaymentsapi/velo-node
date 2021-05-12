"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentEvent = _interopRequireDefault(require("./PaymentEvent"));

var _PaymentStatusChangedAllOf = _interopRequireDefault(require("./PaymentStatusChangedAllOf"));

var _PayoutPayorIds = _interopRequireDefault(require("./PayoutPayorIds"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentStatusChanged model module.
 * @module model/PaymentStatusChanged
 * @version 2.26.127
 */
var PaymentStatusChanged = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentStatusChanged</code>.
   * Base type for all payment status changed events
   * @alias module:model/PaymentStatusChanged
   * @implements module:model/PaymentEvent
   * @implements module:model/PaymentStatusChangedAllOf
   * @param sourceType {String} OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
   * @param eventId {String} UUID id of the source event in the Velo platform
   * @param createdAt {Date} ISO8601 timestamp indicating when the source event was created
   * @param paymentId {String} ID of this payment within the Velo platform
   * @param status {String} The new status of the payment. One of \"SUBMITTED\" \"ACCEPTED\" \"REJECTED\" \"ACCEPTED_BY_RAILS\" \"CONFIRMED\" \"RETURNED\" \"WITHDRAWN\"
   */
  function PaymentStatusChanged(sourceType, eventId, createdAt, paymentId, status) {
    _classCallCheck(this, PaymentStatusChanged);

    _PaymentEvent["default"].initialize(this, sourceType, eventId, createdAt, paymentId);

    _PaymentStatusChangedAllOf["default"].initialize(this, status);

    PaymentStatusChanged.initialize(this, sourceType, eventId, createdAt, paymentId, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentStatusChanged, null, [{
    key: "initialize",
    value: function initialize(obj, sourceType, eventId, createdAt, paymentId, status) {
      obj['sourceType'] = sourceType;
      obj['eventId'] = eventId;
      obj['createdAt'] = createdAt;
      obj['paymentId'] = paymentId;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>PaymentStatusChanged</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentStatusChanged} obj Optional instance to populate.
     * @return {module:model/PaymentStatusChanged} The populated <code>PaymentStatusChanged</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentStatusChanged();

        _PaymentEvent["default"].constructFromObject(data, obj);

        _PaymentStatusChangedAllOf["default"].constructFromObject(data, obj);

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
      }

      return obj;
    }
  }]);

  return PaymentStatusChanged;
}();
/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */


PaymentStatusChanged.prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

PaymentStatusChanged.prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

PaymentStatusChanged.prototype['createdAt'] = undefined;
/**
 * ID of this payment within the Velo platform
 * @member {String} paymentId
 */

PaymentStatusChanged.prototype['paymentId'] = undefined;
/**
 * @member {module:model/PayoutPayorIds} payoutPayorIds
 */

PaymentStatusChanged.prototype['payoutPayorIds'] = undefined;
/**
 * ID of this payment in the payors system
 * @member {String} payorPaymentId
 */

PaymentStatusChanged.prototype['payorPaymentId'] = undefined;
/**
 * The new status of the payment. One of \"SUBMITTED\" \"ACCEPTED\" \"REJECTED\" \"ACCEPTED_BY_RAILS\" \"CONFIRMED\" \"RETURNED\" \"WITHDRAWN\"
 * @member {String} status
 */

PaymentStatusChanged.prototype['status'] = undefined; // Implement PaymentEvent interface:

/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */

_PaymentEvent["default"].prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

_PaymentEvent["default"].prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

_PaymentEvent["default"].prototype['createdAt'] = undefined;
/**
 * ID of this payment within the Velo platform
 * @member {String} paymentId
 */

_PaymentEvent["default"].prototype['paymentId'] = undefined;
/**
 * @member {module:model/PayoutPayorIds} payoutPayorIds
 */

_PaymentEvent["default"].prototype['payoutPayorIds'] = undefined;
/**
 * ID of this payment in the payors system
 * @member {String} payorPaymentId
 */

_PaymentEvent["default"].prototype['payorPaymentId'] = undefined; // Implement PaymentStatusChangedAllOf interface:

/**
 * The new status of the payment. One of \"SUBMITTED\" \"ACCEPTED\" \"REJECTED\" \"ACCEPTED_BY_RAILS\" \"CONFIRMED\" \"RETURNED\" \"WITHDRAWN\"
 * @member {String} status
 */

_PaymentStatusChangedAllOf["default"].prototype['status'] = undefined;
var _default = PaymentStatusChanged;
exports["default"] = _default;