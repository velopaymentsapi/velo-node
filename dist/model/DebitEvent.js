"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DebitEventAllOf = _interopRequireDefault(require("./DebitEventAllOf"));

var _SourceEvent = _interopRequireDefault(require("./SourceEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DebitEvent model module.
 * @module model/DebitEvent
 * @version 2.29.128
 */
var DebitEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DebitEvent</code>.
   * Base type for all Debit Events
   * @alias module:model/DebitEvent
   * @implements module:model/SourceEvent
   * @implements module:model/DebitEventAllOf
   * @param sourceType {String} OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
   * @param eventId {String} UUID id of the source event in the Velo platform
   * @param createdAt {Date} ISO8601 timestamp indicating when the source event was created
   * @param debitTransactionId {String} ID of this debit transaction within the Velo platform
   */
  function DebitEvent(sourceType, eventId, createdAt, debitTransactionId) {
    _classCallCheck(this, DebitEvent);

    _SourceEvent["default"].initialize(this, sourceType, eventId, createdAt);

    _DebitEventAllOf["default"].initialize(this, debitTransactionId);

    DebitEvent.initialize(this, sourceType, eventId, createdAt, debitTransactionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DebitEvent, null, [{
    key: "initialize",
    value: function initialize(obj, sourceType, eventId, createdAt, debitTransactionId) {
      obj['sourceType'] = sourceType;
      obj['eventId'] = eventId;
      obj['createdAt'] = createdAt;
      obj['debitTransactionId'] = debitTransactionId;
    }
    /**
     * Constructs a <code>DebitEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebitEvent} obj Optional instance to populate.
     * @return {module:model/DebitEvent} The populated <code>DebitEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DebitEvent();

        _SourceEvent["default"].constructFromObject(data, obj);

        _DebitEventAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('sourceType')) {
          obj['sourceType'] = _ApiClient["default"].convertToType(data['sourceType'], 'String');
        }

        if (data.hasOwnProperty('eventId')) {
          obj['eventId'] = _ApiClient["default"].convertToType(data['eventId'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Date');
        }

        if (data.hasOwnProperty('debitTransactionId')) {
          obj['debitTransactionId'] = _ApiClient["default"].convertToType(data['debitTransactionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DebitEvent;
}();
/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */


DebitEvent.prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

DebitEvent.prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

DebitEvent.prototype['createdAt'] = undefined;
/**
 * ID of this debit transaction within the Velo platform
 * @member {String} debitTransactionId
 */

DebitEvent.prototype['debitTransactionId'] = undefined; // Implement SourceEvent interface:

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

_SourceEvent["default"].prototype['createdAt'] = undefined; // Implement DebitEventAllOf interface:

/**
 * ID of this debit transaction within the Velo platform
 * @member {String} debitTransactionId
 */

_DebitEventAllOf["default"].prototype['debitTransactionId'] = undefined;
var _default = DebitEvent;
exports["default"] = _default;