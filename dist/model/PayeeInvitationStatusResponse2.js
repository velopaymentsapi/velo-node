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
 * The PayeeInvitationStatusResponse2 model module.
 * @module model/PayeeInvitationStatusResponse2
 * @version 2.29.128
 */
var PayeeInvitationStatusResponse2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeeInvitationStatusResponse2</code>.
   * @alias module:model/PayeeInvitationStatusResponse2
   * @param payeeId {String} 
   * @param invitationStatus {module:model/PayeeInvitationStatusResponse2.InvitationStatusEnum} 
   */
  function PayeeInvitationStatusResponse2(payeeId, invitationStatus) {
    _classCallCheck(this, PayeeInvitationStatusResponse2);

    PayeeInvitationStatusResponse2.initialize(this, payeeId, invitationStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeeInvitationStatusResponse2, null, [{
    key: "initialize",
    value: function initialize(obj, payeeId, invitationStatus) {
      obj['payeeId'] = payeeId;
      obj['invitationStatus'] = invitationStatus;
    }
    /**
     * Constructs a <code>PayeeInvitationStatusResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeInvitationStatusResponse2} obj Optional instance to populate.
     * @return {module:model/PayeeInvitationStatusResponse2} The populated <code>PayeeInvitationStatusResponse2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeeInvitationStatusResponse2();

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('invitationStatus')) {
          obj['invitationStatus'] = _ApiClient["default"].convertToType(data['invitationStatus'], 'String');
        }

        if (data.hasOwnProperty('gracePeriodEndDate')) {
          obj['gracePeriodEndDate'] = _ApiClient["default"].convertToType(data['gracePeriodEndDate'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return PayeeInvitationStatusResponse2;
}();
/**
 * @member {String} payeeId
 */


PayeeInvitationStatusResponse2.prototype['payeeId'] = undefined;
/**
 * @member {module:model/PayeeInvitationStatusResponse2.InvitationStatusEnum} invitationStatus
 */

PayeeInvitationStatusResponse2.prototype['invitationStatus'] = undefined;
/**
 * @member {Date} gracePeriodEndDate
 */

PayeeInvitationStatusResponse2.prototype['gracePeriodEndDate'] = undefined;
/**
 * Allowed values for the <code>invitationStatus</code> property.
 * @enum {String}
 * @readonly
 */

PayeeInvitationStatusResponse2['InvitationStatusEnum'] = {
  /**
   * value: "ACCEPTED"
   * @const
   */
  "ACCEPTED": "ACCEPTED",

  /**
   * value: "PENDING"
   * @const
   */
  "PENDING": "PENDING",

  /**
   * value: "DECLINED"
   * @const
   */
  "DECLINED": "DECLINED"
};
var _default = PayeeInvitationStatusResponse2;
exports["default"] = _default;