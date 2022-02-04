"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SchedulePayoutRequest model module.
 * @module model/SchedulePayoutRequest
 * @version 2.29.130
 */
var SchedulePayoutRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchedulePayoutRequest</code>.
   * @alias module:model/SchedulePayoutRequest
   * @param scheduledFor {Date} UTC timestamp for instructing the payout. Format is ISO-8601.
   * @param notificationsEnabled {Boolean} Flag to indicate whether to receive notifications when scheduled payout is processed
   */
  function SchedulePayoutRequest(scheduledFor, notificationsEnabled) {
    _classCallCheck(this, SchedulePayoutRequest);

    SchedulePayoutRequest.initialize(this, scheduledFor, notificationsEnabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchedulePayoutRequest, null, [{
    key: "initialize",
    value: function initialize(obj, scheduledFor, notificationsEnabled) {
      obj['scheduledFor'] = scheduledFor;
      obj['notificationsEnabled'] = notificationsEnabled;
    }
    /**
     * Constructs a <code>SchedulePayoutRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchedulePayoutRequest} obj Optional instance to populate.
     * @return {module:model/SchedulePayoutRequest} The populated <code>SchedulePayoutRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchedulePayoutRequest();

        if (data.hasOwnProperty('scheduledFor')) {
          obj['scheduledFor'] = _ApiClient["default"].convertToType(data['scheduledFor'], 'Date');
        }

        if (data.hasOwnProperty('notificationsEnabled')) {
          obj['notificationsEnabled'] = _ApiClient["default"].convertToType(data['notificationsEnabled'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SchedulePayoutRequest;
}();
/**
 * UTC timestamp for instructing the payout. Format is ISO-8601.
 * @member {Date} scheduledFor
 */


SchedulePayoutRequest.prototype['scheduledFor'] = undefined;
/**
 * Flag to indicate whether to receive notifications when scheduled payout is processed
 * @member {Boolean} notificationsEnabled
 */

SchedulePayoutRequest.prototype['notificationsEnabled'] = undefined;
var _default = SchedulePayoutRequest;
exports["default"] = _default;