"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DebitEvent = _interopRequireDefault(require("./DebitEvent"));

var _DebitStatusChangedAllOf = _interopRequireDefault(require("./DebitStatusChangedAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DebitStatusChanged model module.
 * @module model/DebitStatusChanged
 * @version 2.29.128
 */
var DebitStatusChanged = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DebitStatusChanged</code>.
   * Base type for all debit status changed events
   * @alias module:model/DebitStatusChanged
   * @implements module:model/DebitEvent
   * @implements module:model/DebitStatusChangedAllOf
   * @param sourceType {String} OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
   * @param eventId {String} UUID id of the source event in the Velo platform
   * @param createdAt {Date} ISO8601 timestamp indicating when the source event was created
   * @param debitTransactionId {String} ID of this debit transaction within the Velo platform
   * @param status {String} The new status of the debit. One of \"PENDING\" \"PROCESSING\" \"REJECTED\" \"RELEASED\"
   */
  function DebitStatusChanged(sourceType, eventId, createdAt, debitTransactionId, status) {
    _classCallCheck(this, DebitStatusChanged);

    _DebitEvent["default"].initialize(this, sourceType, eventId, createdAt, debitTransactionId);

    _DebitStatusChangedAllOf["default"].initialize(this, status);

    DebitStatusChanged.initialize(this, sourceType, eventId, createdAt, debitTransactionId, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DebitStatusChanged, null, [{
    key: "initialize",
    value: function initialize(obj, sourceType, eventId, createdAt, debitTransactionId, status) {
      obj['sourceType'] = sourceType;
      obj['eventId'] = eventId;
      obj['createdAt'] = createdAt;
      obj['debitTransactionId'] = debitTransactionId;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>DebitStatusChanged</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebitStatusChanged} obj Optional instance to populate.
     * @return {module:model/DebitStatusChanged} The populated <code>DebitStatusChanged</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DebitStatusChanged();

        _DebitEvent["default"].constructFromObject(data, obj);

        _DebitStatusChangedAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DebitStatusChanged;
}();
/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */


DebitStatusChanged.prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

DebitStatusChanged.prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

DebitStatusChanged.prototype['createdAt'] = undefined;
/**
 * ID of this debit transaction within the Velo platform
 * @member {String} debitTransactionId
 */

DebitStatusChanged.prototype['debitTransactionId'] = undefined;
/**
 * The new status of the debit. One of \"PENDING\" \"PROCESSING\" \"REJECTED\" \"RELEASED\"
 * @member {String} status
 */

DebitStatusChanged.prototype['status'] = undefined; // Implement DebitEvent interface:

/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */

_DebitEvent["default"].prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

_DebitEvent["default"].prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

_DebitEvent["default"].prototype['createdAt'] = undefined;
/**
 * ID of this debit transaction within the Velo platform
 * @member {String} debitTransactionId
 */

_DebitEvent["default"].prototype['debitTransactionId'] = undefined; // Implement DebitStatusChangedAllOf interface:

/**
 * The new status of the debit. One of \"PENDING\" \"PROCESSING\" \"REJECTED\" \"RELEASED\"
 * @member {String} status
 */

_DebitStatusChangedAllOf["default"].prototype['status'] = undefined;
var _default = DebitStatusChanged;
exports["default"] = _default;