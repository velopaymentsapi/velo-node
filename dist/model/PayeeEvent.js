"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayeeEventAllOf = _interopRequireDefault(require("./PayeeEventAllOf"));

var _PayeeEventAllOfReasons = _interopRequireDefault(require("./PayeeEventAllOfReasons"));

var _SourceEvent = _interopRequireDefault(require("./SourceEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayeeEvent model module.
 * @module model/PayeeEvent
 * @version 2.26.127
 */
var PayeeEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeeEvent</code>.
   * Base type for all Payee Events
   * @alias module:model/PayeeEvent
   * @implements module:model/SourceEvent
   * @implements module:model/PayeeEventAllOf
   * @param sourceType {String} OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
   * @param eventId {String} UUID id of the source event in the Velo platform
   * @param createdAt {Date} ISO8601 timestamp indicating when the source event was created
   * @param payeeId {String} ID of this payee within the Velo platform
   */
  function PayeeEvent(sourceType, eventId, createdAt, payeeId) {
    _classCallCheck(this, PayeeEvent);

    _SourceEvent["default"].initialize(this, sourceType, eventId, createdAt);

    _PayeeEventAllOf["default"].initialize(this, payeeId);

    PayeeEvent.initialize(this, sourceType, eventId, createdAt, payeeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeeEvent, null, [{
    key: "initialize",
    value: function initialize(obj, sourceType, eventId, createdAt, payeeId) {
      obj['sourceType'] = sourceType;
      obj['eventId'] = eventId;
      obj['createdAt'] = createdAt;
      obj['payeeId'] = payeeId;
    }
    /**
     * Constructs a <code>PayeeEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeEvent} obj Optional instance to populate.
     * @return {module:model/PayeeEvent} The populated <code>PayeeEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeeEvent();

        _SourceEvent["default"].constructFromObject(data, obj);

        _PayeeEventAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('sourceType')) {
          obj['sourceType'] = _ApiClient["default"].convertToType(data['sourceType'], 'String');
        }

        if (data.hasOwnProperty('eventId')) {
          obj['eventId'] = _ApiClient["default"].convertToType(data['eventId'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Date');
        }

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('reasons')) {
          obj['reasons'] = _ApiClient["default"].convertToType(data['reasons'], [_PayeeEventAllOfReasons["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PayeeEvent;
}();
/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */


PayeeEvent.prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

PayeeEvent.prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

PayeeEvent.prototype['createdAt'] = undefined;
/**
 * ID of this payee within the Velo platform
 * @member {String} payeeId
 */

PayeeEvent.prototype['payeeId'] = undefined;
/**
 * The reasons for the event notification.
 * @member {Array.<module:model/PayeeEventAllOfReasons>} reasons
 */

PayeeEvent.prototype['reasons'] = undefined; // Implement SourceEvent interface:

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

_SourceEvent["default"].prototype['createdAt'] = undefined; // Implement PayeeEventAllOf interface:

/**
 * ID of this payee within the Velo platform
 * @member {String} payeeId
 */

_PayeeEventAllOf["default"].prototype['payeeId'] = undefined;
/**
 * The reasons for the event notification.
 * @member {Array.<module:model/PayeeEventAllOfReasons>} reasons
 */

_PayeeEventAllOf["default"].prototype['reasons'] = undefined;
var _default = PayeeEvent;
exports["default"] = _default;