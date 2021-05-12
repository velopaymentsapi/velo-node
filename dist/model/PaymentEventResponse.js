"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentAuditCurrency = _interopRequireDefault(require("./PaymentAuditCurrency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentEventResponse model module.
 * @module model/PaymentEventResponse
 * @version 2.26.127
 */
var PaymentEventResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentEventResponse</code>.
   * @alias module:model/PaymentEventResponse
   * @param eventId {String} The id of the event.
   * @param eventDateTime {Date} The date/time at which the event occurred.
   * @param eventType {module:model/PaymentEventResponse.EventTypeEnum} The type of the event.
   */
  function PaymentEventResponse(eventId, eventDateTime, eventType) {
    _classCallCheck(this, PaymentEventResponse);

    PaymentEventResponse.initialize(this, eventId, eventDateTime, eventType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentEventResponse, null, [{
    key: "initialize",
    value: function initialize(obj, eventId, eventDateTime, eventType) {
      obj['eventId'] = eventId;
      obj['eventDateTime'] = eventDateTime;
      obj['eventType'] = eventType;
    }
    /**
     * Constructs a <code>PaymentEventResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentEventResponse} obj Optional instance to populate.
     * @return {module:model/PaymentEventResponse} The populated <code>PaymentEventResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentEventResponse();

        if (data.hasOwnProperty('eventId')) {
          obj['eventId'] = _ApiClient["default"].convertToType(data['eventId'], 'String');
        }

        if (data.hasOwnProperty('eventDateTime')) {
          obj['eventDateTime'] = _ApiClient["default"].convertToType(data['eventDateTime'], 'Date');
        }

        if (data.hasOwnProperty('eventType')) {
          obj['eventType'] = _ApiClient["default"].convertToType(data['eventType'], 'String');
        }

        if (data.hasOwnProperty('sourceCurrency')) {
          obj['sourceCurrency'] = _PaymentAuditCurrency["default"].constructFromObject(data['sourceCurrency']);
        }

        if (data.hasOwnProperty('sourceAmount')) {
          obj['sourceAmount'] = _ApiClient["default"].convertToType(data['sourceAmount'], 'Number');
        }

        if (data.hasOwnProperty('paymentCurrency')) {
          obj['paymentCurrency'] = _PaymentAuditCurrency["default"].constructFromObject(data['paymentCurrency']);
        }

        if (data.hasOwnProperty('paymentAmount')) {
          obj['paymentAmount'] = _ApiClient["default"].convertToType(data['paymentAmount'], 'Number');
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('routingNumber')) {
          obj['routingNumber'] = _ApiClient["default"].convertToType(data['routingNumber'], 'String');
        }

        if (data.hasOwnProperty('iban')) {
          obj['iban'] = _ApiClient["default"].convertToType(data['iban'], 'String');
        }

        if (data.hasOwnProperty('accountName')) {
          obj['accountName'] = _ApiClient["default"].convertToType(data['accountName'], 'String');
        }

        if (data.hasOwnProperty('principal')) {
          obj['principal'] = _ApiClient["default"].convertToType(data['principal'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaymentEventResponse;
}();
/**
 * The id of the event.
 * @member {String} eventId
 */


PaymentEventResponse.prototype['eventId'] = undefined;
/**
 * The date/time at which the event occurred.
 * @member {Date} eventDateTime
 */

PaymentEventResponse.prototype['eventDateTime'] = undefined;
/**
 * The type of the event.
 * @member {module:model/PaymentEventResponse.EventTypeEnum} eventType
 */

PaymentEventResponse.prototype['eventType'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrency} sourceCurrency
 */

PaymentEventResponse.prototype['sourceCurrency'] = undefined;
/**
 * The source amount exposed by the event.
 * @member {Number} sourceAmount
 */

PaymentEventResponse.prototype['sourceAmount'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrency} paymentCurrency
 */

PaymentEventResponse.prototype['paymentCurrency'] = undefined;
/**
 * The destination amount exposed by the event.
 * @member {Number} paymentAmount
 */

PaymentEventResponse.prototype['paymentAmount'] = undefined;
/**
 * The account number attached to the event.
 * @member {String} accountNumber
 */

PaymentEventResponse.prototype['accountNumber'] = undefined;
/**
 * The routing number attached to the event.
 * @member {String} routingNumber
 */

PaymentEventResponse.prototype['routingNumber'] = undefined;
/**
 * @member {String} iban
 */

PaymentEventResponse.prototype['iban'] = undefined;
/**
 * @member {String} accountName
 */

PaymentEventResponse.prototype['accountName'] = undefined;
/**
 * @member {String} principal
 */

PaymentEventResponse.prototype['principal'] = undefined;
/**
 * Allowed values for the <code>eventType</code> property.
 * @enum {String}
 * @readonly
 */

PaymentEventResponse['EventTypeEnum'] = {
  /**
   * value: "PAYOUT_SUBMITTED"
   * @const
   */
  "PAYOUT_SUBMITTED": "PAYOUT_SUBMITTED",

  /**
   * value: "PAYOUT_COMPLETED"
   * @const
   */
  "PAYOUT_COMPLETED": "PAYOUT_COMPLETED",

  /**
   * value: "PAYOUT_INSTRUCTED_V3"
   * @const
   */
  "PAYOUT_INSTRUCTED_V3": "PAYOUT_INSTRUCTED_V3",

  /**
   * value: "BANK_PAYMENT_REQUESTED"
   * @const
   */
  "BANK_PAYMENT_REQUESTED": "BANK_PAYMENT_REQUESTED",

  /**
   * value: "SOURCE_AMOUNT_CONFIRMED"
   * @const
   */
  "SOURCE_AMOUNT_CONFIRMED": "SOURCE_AMOUNT_CONFIRMED",

  /**
   * value: "PAYMENT_SUBMITTED"
   * @const
   */
  "PAYMENT_SUBMITTED": "PAYMENT_SUBMITTED",

  /**
   * value: "PAYMENT_SUBMITTED_ACCEPTED"
   * @const
   */
  "PAYMENT_SUBMITTED_ACCEPTED": "PAYMENT_SUBMITTED_ACCEPTED",

  /**
   * value: "PAYMENT_SUBMITTED_REJECTED"
   * @const
   */
  "PAYMENT_SUBMITTED_REJECTED": "PAYMENT_SUBMITTED_REJECTED",

  /**
   * value: "PAYMENT_CONFIRMED"
   * @const
   */
  "PAYMENT_CONFIRMED": "PAYMENT_CONFIRMED",

  /**
   * value: "PAYMENT_AWAITING_FUNDS"
   * @const
   */
  "PAYMENT_AWAITING_FUNDS": "PAYMENT_AWAITING_FUNDS",

  /**
   * value: "PAYMENT_FUNDED"
   * @const
   */
  "PAYMENT_FUNDED": "PAYMENT_FUNDED",

  /**
   * value: "PAYMENT_UNFUNDED"
   * @const
   */
  "PAYMENT_UNFUNDED": "PAYMENT_UNFUNDED",

  /**
   * value: "PAYMENT_FAILED"
   * @const
   */
  "PAYMENT_FAILED": "PAYMENT_FAILED",

  /**
   * value: "ACH_SUBMITTED_TO_ODFI"
   * @const
   */
  "ACH_SUBMITTED_TO_ODFI": "ACH_SUBMITTED_TO_ODFI",

  /**
   * value: "PAYMENT_ACCEPTED_BY_RAILS"
   * @const
   */
  "PAYMENT_ACCEPTED_BY_RAILS": "PAYMENT_ACCEPTED_BY_RAILS",

  /**
   * value: "ACH_RETURN_RECEIVED"
   * @const
   */
  "ACH_RETURN_RECEIVED": "ACH_RETURN_RECEIVED",

  /**
   * value: "RETURN_PAYMENT_FUNDING_REQUESTED"
   * @const
   */
  "RETURN_PAYMENT_FUNDING_REQUESTED": "RETURN_PAYMENT_FUNDING_REQUESTED",

  /**
   * value: "PAYOUT_BATCH_EXECUTED"
   * @const
   */
  "PAYOUT_BATCH_EXECUTED": "PAYOUT_BATCH_EXECUTED",

  /**
   * value: "PAYOUT_BATCH_QUOTE_EXPIRED"
   * @const
   */
  "PAYOUT_BATCH_QUOTE_EXPIRED": "PAYOUT_BATCH_QUOTE_EXPIRED",

  /**
   * value: "PAYOUT_BATCH_FUNDED"
   * @const
   */
  "PAYOUT_BATCH_FUNDED": "PAYOUT_BATCH_FUNDED",

  /**
   * value: "PAYOUT_BATCH_FUNDS_RETURN_REQUEST"
   * @const
   */
  "PAYOUT_BATCH_FUNDS_RETURN_REQUEST": "PAYOUT_BATCH_FUNDS_RETURN_REQUEST",

  /**
   * value: "PAYOUT_BATCH_FUNDS_RETURNED"
   * @const
   */
  "PAYOUT_BATCH_FUNDS_RETURNED": "PAYOUT_BATCH_FUNDS_RETURNED",

  /**
   * value: "PAYOUT_FUNDS_REQUEST"
   * @const
   */
  "PAYOUT_FUNDS_REQUEST": "PAYOUT_FUNDS_REQUEST",

  /**
   * value: "PAYOUT_FUNDS_GRANTED"
   * @const
   */
  "PAYOUT_FUNDS_GRANTED": "PAYOUT_FUNDS_GRANTED",

  /**
   * value: "PAYOUT_FUNDS_DENIED"
   * @const
   */
  "PAYOUT_FUNDS_DENIED": "PAYOUT_FUNDS_DENIED",

  /**
   * value: "PAYOUT_BATCH_QUOTED"
   * @const
   */
  "PAYOUT_BATCH_QUOTED": "PAYOUT_BATCH_QUOTED",

  /**
   * value: "PAYOUT_QUOTED"
   * @const
   */
  "PAYOUT_QUOTED": "PAYOUT_QUOTED",

  /**
   * value: "ACH_PAYMENT_RETURN_CANCELLED"
   * @const
   */
  "ACH_PAYMENT_RETURN_CANCELLED": "ACH_PAYMENT_RETURN_CANCELLED",

  /**
   * value: "RETURN_PAYMENT_CANCELLATION_REQUESTED"
   * @const
   */
  "RETURN_PAYMENT_CANCELLATION_REQUESTED": "RETURN_PAYMENT_CANCELLATION_REQUESTED",

  /**
   * value: "PAYOUT_WITHDRAWN"
   * @const
   */
  "PAYOUT_WITHDRAWN": "PAYOUT_WITHDRAWN",

  /**
   * value: "ORCHESTRATED_PAYMENT_BATCH_REQUESTED"
   * @const
   */
  "ORCHESTRATED_PAYMENT_BATCH_REQUESTED": "ORCHESTRATED_PAYMENT_BATCH_REQUESTED",

  /**
   * value: "ORCHESTRATED_PAYMENT_BATCH_CONFIRMED"
   * @const
   */
  "ORCHESTRATED_PAYMENT_BATCH_CONFIRMED": "ORCHESTRATED_PAYMENT_BATCH_CONFIRMED",

  /**
   * value: "ORCHESTRATED_PAYMENT_REQUESTED"
   * @const
   */
  "ORCHESTRATED_PAYMENT_REQUESTED": "ORCHESTRATED_PAYMENT_REQUESTED"
};
var _default = PaymentEventResponse;
exports["default"] = _default;