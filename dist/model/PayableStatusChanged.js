"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayeeEvent = _interopRequireDefault(require("./PayeeEvent"));

var _PayeeEventAllOfReasons = _interopRequireDefault(require("./PayeeEventAllOfReasons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PayableStatusChanged model module.
 * @module model/PayableStatusChanged
 * @version 2.29.130
 */
var PayableStatusChanged = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayableStatusChanged</code>.
   * Base type for all payable status changed events
   * @alias module:model/PayableStatusChanged
   * @implements module:model/PayeeEvent
   * @param sourceType {String} OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
   * @param eventId {String} UUID id of the source event in the Velo platform
   * @param createdAt {Date} ISO8601 timestamp indicating when the source event was created
   * @param payeeId {String} ID of this payee within the Velo platform
   */
  function PayableStatusChanged(sourceType, eventId, createdAt, payeeId) {
    _classCallCheck(this, PayableStatusChanged);

    _PayeeEvent["default"].initialize(this, sourceType, eventId, createdAt, payeeId);

    PayableStatusChanged.initialize(this, sourceType, eventId, createdAt, payeeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayableStatusChanged, null, [{
    key: "initialize",
    value: function initialize(obj, sourceType, eventId, createdAt, payeeId) {
      obj['sourceType'] = sourceType;
      obj['eventId'] = eventId;
      obj['createdAt'] = createdAt;
      obj['payeeId'] = payeeId;
    }
    /**
     * Constructs a <code>PayableStatusChanged</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayableStatusChanged} obj Optional instance to populate.
     * @return {module:model/PayableStatusChanged} The populated <code>PayableStatusChanged</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayableStatusChanged();

        _PayeeEvent["default"].constructFromObject(data, obj);

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

  return PayableStatusChanged;
}();
/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */


PayableStatusChanged.prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

PayableStatusChanged.prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

PayableStatusChanged.prototype['createdAt'] = undefined;
/**
 * ID of this payee within the Velo platform
 * @member {String} payeeId
 */

PayableStatusChanged.prototype['payeeId'] = undefined;
/**
 * The reasons for the event notification.
 * @member {Array.<module:model/PayeeEventAllOfReasons>} reasons
 */

PayableStatusChanged.prototype['reasons'] = undefined; // Implement PayeeEvent interface:

/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */

_PayeeEvent["default"].prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

_PayeeEvent["default"].prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

_PayeeEvent["default"].prototype['createdAt'] = undefined;
/**
 * ID of this payee within the Velo platform
 * @member {String} payeeId
 */

_PayeeEvent["default"].prototype['payeeId'] = undefined;
/**
 * The reasons for the event notification.
 * @member {Array.<module:model/PayeeEventAllOfReasons>} reasons
 */

_PayeeEvent["default"].prototype['reasons'] = undefined;
var _default = PayableStatusChanged;
exports["default"] = _default;