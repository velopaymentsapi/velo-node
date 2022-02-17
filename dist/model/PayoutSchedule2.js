"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScheduleStatus = _interopRequireDefault(require("./ScheduleStatus2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PayoutSchedule2 model module.
 * @module model/PayoutSchedule2
 * @version 2.29.128
 */
var PayoutSchedule2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayoutSchedule2</code>.
   * Details relating to a payout that was executed via a schedule or is still waiting to be executed
   * @alias module:model/PayoutSchedule2
   * @param scheduleStatus {module:model/ScheduleStatus2} 
   * @param scheduledAt {Date} 
   * @param scheduledFor {Date} 
   * @param scheduledByPrincipalId {String} ID of the user or application that scheduled the payout
   * @param notificationsEnabled {Boolean} 
   */
  function PayoutSchedule2(scheduleStatus, scheduledAt, scheduledFor, scheduledByPrincipalId, notificationsEnabled) {
    _classCallCheck(this, PayoutSchedule2);

    PayoutSchedule2.initialize(this, scheduleStatus, scheduledAt, scheduledFor, scheduledByPrincipalId, notificationsEnabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayoutSchedule2, null, [{
    key: "initialize",
    value: function initialize(obj, scheduleStatus, scheduledAt, scheduledFor, scheduledByPrincipalId, notificationsEnabled) {
      obj['scheduleStatus'] = scheduleStatus;
      obj['scheduledAt'] = scheduledAt;
      obj['scheduledFor'] = scheduledFor;
      obj['scheduledByPrincipalId'] = scheduledByPrincipalId;
      obj['notificationsEnabled'] = notificationsEnabled;
    }
    /**
     * Constructs a <code>PayoutSchedule2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutSchedule2} obj Optional instance to populate.
     * @return {module:model/PayoutSchedule2} The populated <code>PayoutSchedule2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayoutSchedule2();

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
      }

      return obj;
    }
  }]);

  return PayoutSchedule2;
}();
/**
 * @member {module:model/ScheduleStatus2} scheduleStatus
 */


PayoutSchedule2.prototype['scheduleStatus'] = undefined;
/**
 * @member {Date} scheduledAt
 */

PayoutSchedule2.prototype['scheduledAt'] = undefined;
/**
 * @member {Date} scheduledFor
 */

PayoutSchedule2.prototype['scheduledFor'] = undefined;
/**
 * ID of the user or application that scheduled the payout
 * @member {String} scheduledByPrincipalId
 */

PayoutSchedule2.prototype['scheduledByPrincipalId'] = undefined;
/**
 * @member {Boolean} notificationsEnabled
 */

PayoutSchedule2.prototype['notificationsEnabled'] = undefined;
var _default = PayoutSchedule2;
exports["default"] = _default;