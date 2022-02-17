"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DebitStatusChanged = _interopRequireDefault(require("./DebitStatusChanged"));

var _OnboardingStatusChanged = _interopRequireDefault(require("./OnboardingStatusChanged"));

var _PayableStatusChanged = _interopRequireDefault(require("./PayableStatusChanged"));

var _PayeeDetailsChanged = _interopRequireDefault(require("./PayeeDetailsChanged"));

var _PaymentRejectedOrReturned = _interopRequireDefault(require("./PaymentRejectedOrReturned"));

var _PaymentStatusChanged = _interopRequireDefault(require("./PaymentStatusChanged"));

var _Ping = _interopRequireDefault(require("./Ping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Notification model module.
 * @module model/Notification
 * @version 2.29.128
 */
var Notification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Notification</code>.
   * @alias module:model/Notification
   * @param apiVersion {String} The API version of the notification schema
   * @param sequenceNumber {Number} This is a payor specific sequence number starting at 1 for the first notification sent
   * @param category {String} The category that the notification relates to. One of \"payment\", \"payee\", \"debit\" or \"system\"
   * @param eventName {String} The name of event that led to this notification
   */
  function Notification(apiVersion, sequenceNumber, category, eventName) {
    _classCallCheck(this, Notification);

    Notification.initialize(this, apiVersion, sequenceNumber, category, eventName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Notification, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, sequenceNumber, category, eventName) {
      obj['apiVersion'] = apiVersion;
      obj['sequenceNumber'] = sequenceNumber;
      obj['category'] = category;
      obj['eventName'] = eventName;
    }
    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Notification();

        if (data.hasOwnProperty('apiVersion')) {
          obj['apiVersion'] = _ApiClient["default"].convertToType(data['apiVersion'], 'String');
        }

        if (data.hasOwnProperty('sequenceNumber')) {
          obj['sequenceNumber'] = _ApiClient["default"].convertToType(data['sequenceNumber'], 'Number');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('eventName')) {
          obj['eventName'] = _ApiClient["default"].convertToType(data['eventName'], 'String');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged);
        }
      }

      return obj;
    }
  }]);

  return Notification;
}();
/**
 * The API version of the notification schema
 * @member {String} apiVersion
 */


Notification.prototype['apiVersion'] = undefined;
/**
 * This is a payor specific sequence number starting at 1 for the first notification sent
 * @member {Number} sequenceNumber
 */

Notification.prototype['sequenceNumber'] = undefined;
/**
 * The category that the notification relates to. One of \"payment\", \"payee\", \"debit\" or \"system\"
 * @member {String} category
 */

Notification.prototype['category'] = undefined;
/**
 * The name of event that led to this notification
 * @member {String} eventName
 */

Notification.prototype['eventName'] = undefined;
/**
 * One of the available set of source event payloads
 * @member {module:model/OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged} source
 */

Notification.prototype['source'] = undefined;
var _default = Notification;
exports["default"] = _default;