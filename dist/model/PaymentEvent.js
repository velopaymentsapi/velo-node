"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentEventAllOf = _interopRequireDefault(require("./PaymentEventAllOf"));

var _PayoutPayorIds = _interopRequireDefault(require("./PayoutPayorIds"));

var _SourceEvent = _interopRequireDefault(require("./SourceEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentEvent model module.
 * @module model/PaymentEvent
 * @version 2.26.127
 */
var PaymentEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentEvent</code>.
   * Base type for all Payment Events
   * @alias module:model/PaymentEvent
   * @implements module:model/SourceEvent
   * @implements module:model/PaymentEventAllOf
   * @param sourceType {String} OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
   * @param eventId {String} UUID id of the source event in the Velo platform
   * @param createdAt {Date} ISO8601 timestamp indicating when the source event was created
   * @param paymentId {String} ID of this payment within the Velo platform
   */
  function PaymentEvent(sourceType, eventId, createdAt, paymentId) {
    _classCallCheck(this, PaymentEvent);

    _SourceEvent["default"].initialize(this, sourceType, eventId, createdAt);

    _PaymentEventAllOf["default"].initialize(this, paymentId);

    PaymentEvent.initialize(this, sourceType, eventId, createdAt, paymentId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentEvent, null, [{
    key: "initialize",
    value: function initialize(obj, sourceType, eventId, createdAt, paymentId) {
      obj['sourceType'] = sourceType;
      obj['eventId'] = eventId;
      obj['createdAt'] = createdAt;
      obj['paymentId'] = paymentId;
    }
    /**
     * Constructs a <code>PaymentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentEvent} obj Optional instance to populate.
     * @return {module:model/PaymentEvent} The populated <code>PaymentEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentEvent();

        _SourceEvent["default"].constructFromObject(data, obj);

        _PaymentEventAllOf["default"].constructFromObject(data, obj);

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
      }

      return obj;
    }
  }]);

  return PaymentEvent;
}();
/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */


PaymentEvent.prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

PaymentEvent.prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

PaymentEvent.prototype['createdAt'] = undefined;
/**
 * ID of this payment within the Velo platform
 * @member {String} paymentId
 */

PaymentEvent.prototype['paymentId'] = undefined;
/**
 * @member {module:model/PayoutPayorIds} payoutPayorIds
 */

PaymentEvent.prototype['payoutPayorIds'] = undefined;
/**
 * ID of this payment in the payors system
 * @member {String} payorPaymentId
 */

PaymentEvent.prototype['payorPaymentId'] = undefined; // Implement SourceEvent interface:

/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */

_SourceEvent["default"].prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

_SourceEvent["default"].prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

_SourceEvent["default"].prototype['createdAt'] = undefined; // Implement PaymentEventAllOf interface:

/**
 * ID of this payment within the Velo platform
 * @member {String} paymentId
 */

_PaymentEventAllOf["default"].prototype['paymentId'] = undefined;
/**
 * @member {module:model/PayoutPayorIds} payoutPayorIds
 */

_PaymentEventAllOf["default"].prototype['payoutPayorIds'] = undefined;
/**
 * ID of this payment in the payors system
 * @member {String} payorPaymentId
 */

_PaymentEventAllOf["default"].prototype['payorPaymentId'] = undefined;
var _default = PaymentEvent;
exports["default"] = _default;