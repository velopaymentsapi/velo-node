"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayeePayorRefV2 model module.
 * @module model/PayeePayorRefV2
 * @version 2.23.78
 */
var PayeePayorRefV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeePayorRefV2</code>.
   * @alias module:model/PayeePayorRefV2
   */
  function PayeePayorRefV2() {
    _classCallCheck(this, PayeePayorRefV2);

    PayeePayorRefV2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeePayorRefV2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayeePayorRefV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeePayorRefV2} obj Optional instance to populate.
     * @return {module:model/PayeePayorRefV2} The populated <code>PayeePayorRefV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeePayorRefV2();

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }

        if (data.hasOwnProperty('invitationStatus')) {
          obj['invitationStatus'] = _ApiClient["default"].convertToType(data['invitationStatus'], 'String');
        }

        if (data.hasOwnProperty('invitationStatusTimestamp')) {
          obj['invitationStatusTimestamp'] = _ApiClient["default"].convertToType(data['invitationStatusTimestamp'], 'Date');
        }

        if (data.hasOwnProperty('paymentChannelId')) {
          obj['paymentChannelId'] = _ApiClient["default"].convertToType(data['paymentChannelId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayeePayorRefV2;
}();
/**
 * @member {String} payorId
 */


PayeePayorRefV2.prototype['payorId'] = undefined;
/**
 * @member {String} remoteId
 */

PayeePayorRefV2.prototype['remoteId'] = undefined;
/**
 * @member {module:model/PayeePayorRefV2.InvitationStatusEnum} invitationStatus
 */

PayeePayorRefV2.prototype['invitationStatus'] = undefined;
/**
 * The timestamp when the invitation status is updated
 * @member {Date} invitationStatusTimestamp
 */

PayeePayorRefV2.prototype['invitationStatusTimestamp'] = undefined;
/**
 * @member {String} paymentChannelId
 */

PayeePayorRefV2.prototype['paymentChannelId'] = undefined;
/**
 * Allowed values for the <code>invitationStatus</code> property.
 * @enum {String}
 * @readonly
 */

PayeePayorRefV2['InvitationStatusEnum'] = {
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
var _default = PayeePayorRefV2;
exports["default"] = _default;