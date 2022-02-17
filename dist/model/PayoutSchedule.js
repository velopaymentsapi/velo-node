"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScheduleStatus = _interopRequireDefault(require("./ScheduleStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PayoutSchedule model module.
 * @module model/PayoutSchedule
 * @version 2.29.128
 */
var PayoutSchedule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayoutSchedule</code>.
   * Details relating to a payout that was executed via a schedule or is still waiting to be executed
   * @alias module:model/PayoutSchedule
   * @param scheduleStatus {module:model/ScheduleStatus} 
   * @param scheduledAt {Date} 
   * @param scheduledFor {Date} 
   * @param scheduledByPrincipalId {String} ID of the user or application that scheduled the payout
   * @param notificationsEnabled {Boolean} 
   */
  function PayoutSchedule(scheduleStatus, scheduledAt, scheduledFor, scheduledByPrincipalId, notificationsEnabled) {
    _classCallCheck(this, PayoutSchedule);

    PayoutSchedule.initialize(this, scheduleStatus, scheduledAt, scheduledFor, scheduledByPrincipalId, notificationsEnabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayoutSchedule, null, [{
    key: "initialize",
    value: function initialize(obj, scheduleStatus, scheduledAt, scheduledFor, scheduledByPrincipalId, notificationsEnabled) {
      obj['scheduleStatus'] = scheduleStatus;
      obj['scheduledAt'] = scheduledAt;
      obj['scheduledFor'] = scheduledFor;
      obj['scheduledByPrincipalId'] = scheduledByPrincipalId;
      obj['notificationsEnabled'] = notificationsEnabled;
    }
    /**
     * Constructs a <code>PayoutSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutSchedule} obj Optional instance to populate.
     * @return {module:model/PayoutSchedule} The populated <code>PayoutSchedule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayoutSchedule();

        if (data.hasOwnProperty('scheduleStatus')) {
          obj['scheduleStatus'] = _ScheduleStatus["default"].constructFromObject(data['scheduleStatus']);
        }

        if (data.hasOwnProperty('scheduledAt')) {
          obj['scheduledAt'] = _ApiClient["default"].convertToType(data['scheduledAt'], 'Date');
        }

        if (data.hasOwnProperty('scheduledFor')) {
          obj['scheduledFor'] = _ApiClient["default"].convertToType(data['scheduledFor'], 'Date');
        }

        if (data.hasOwnProperty('scheduledByPrincipalId')) {
          obj['scheduledByPrincipalId'] = _ApiClient["default"].convertToType(data['scheduledByPrincipalId'], 'String');
        }

        if (data.hasOwnProperty('notificationsEnabled')) {
          obj['notificationsEnabled'] = _ApiClient["default"].convertToType(data['notificationsEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('scheduledBy')) {
          obj['scheduledBy'] = _ApiClient["default"].convertToType(data['scheduledBy'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayoutSchedule;
}();
/**
 * @member {module:model/ScheduleStatus} scheduleStatus
 */


PayoutSchedule.prototype['scheduleStatus'] = undefined;
/**
 * @member {Date} scheduledAt
 */

PayoutSchedule.prototype['scheduledAt'] = undefined;
/**
 * @member {Date} scheduledFor
 */

PayoutSchedule.prototype['scheduledFor'] = undefined;
/**
 * ID of the user or application that scheduled the payout
 * @member {String} scheduledByPrincipalId
 */

PayoutSchedule.prototype['scheduledByPrincipalId'] = undefined;
/**
 * @member {Boolean} notificationsEnabled
 */

PayoutSchedule.prototype['notificationsEnabled'] = undefined;
/**
 * Optional display name as a hint for who scheduled the payout. Not populated if payout was scheduled by an application.
 * @member {String} scheduledBy
 */

PayoutSchedule.prototype['scheduledBy'] = undefined;
var _default = PayoutSchedule;
exports["default"] = _default;