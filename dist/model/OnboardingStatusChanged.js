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
 * The OnboardingStatusChanged model module.
 * @module model/OnboardingStatusChanged
 * @version 2.29.130
 */
var OnboardingStatusChanged = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnboardingStatusChanged</code>.
   * Base type for all onboarding status changed events
   * @alias module:model/OnboardingStatusChanged
   * @implements module:model/PayeeEvent
   * @param sourceType {String} OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
   * @param eventId {String} UUID id of the source event in the Velo platform
   * @param createdAt {Date} ISO8601 timestamp indicating when the source event was created
   * @param payeeId {String} ID of this payee within the Velo platform
   */
  function OnboardingStatusChanged(sourceType, eventId, createdAt, payeeId) {
    _classCallCheck(this, OnboardingStatusChanged);

    _PayeeEvent["default"].initialize(this, sourceType, eventId, createdAt, payeeId);

    OnboardingStatusChanged.initialize(this, sourceType, eventId, createdAt, payeeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OnboardingStatusChanged, null, [{
    key: "initialize",
    value: function initialize(obj, sourceType, eventId, createdAt, payeeId) {
      obj['sourceType'] = sourceType;
      obj['eventId'] = eventId;
      obj['createdAt'] = createdAt;
      obj['payeeId'] = payeeId;
    }
    /**
     * Constructs a <code>OnboardingStatusChanged</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OnboardingStatusChanged} obj Optional instance to populate.
     * @return {module:model/OnboardingStatusChanged} The populated <code>OnboardingStatusChanged</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnboardingStatusChanged();

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

  return OnboardingStatusChanged;
}();
/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */


OnboardingStatusChanged.prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

OnboardingStatusChanged.prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

OnboardingStatusChanged.prototype['createdAt'] = undefined;
/**
 * ID of this payee within the Velo platform
 * @member {String} payeeId
 */

OnboardingStatusChanged.prototype['payeeId'] = undefined;
/**
 * The reasons for the event notification.
 * @member {Array.<module:model/PayeeEventAllOfReasons>} reasons
 */

OnboardingStatusChanged.prototype['reasons'] = undefined; // Implement PayeeEvent interface:

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
var _default = OnboardingStatusChanged;
exports["default"] = _default;