"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvitationStatus = _interopRequireDefault(require("./InvitationStatus2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayeePayorRef2 model module.
 * @module model/PayeePayorRef2
 * @version 2.23.78
 */
var PayeePayorRef2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeePayorRef2</code>.
   * @alias module:model/PayeePayorRef2
   */
  function PayeePayorRef2() {
    _classCallCheck(this, PayeePayorRef2);

    PayeePayorRef2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeePayorRef2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayeePayorRef2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeePayorRef2} obj Optional instance to populate.
     * @return {module:model/PayeePayorRef2} The populated <code>PayeePayorRef2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeePayorRef2();

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }

        if (data.hasOwnProperty('invitationStatus')) {
          obj['invitationStatus'] = _InvitationStatus["default"].constructFromObject(data['invitationStatus']);
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

  return PayeePayorRef2;
}();
/**
 * @member {String} payorId
 */


PayeePayorRef2.prototype['payorId'] = undefined;
/**
 * @member {String} remoteId
 */

PayeePayorRef2.prototype['remoteId'] = undefined;
/**
 * @member {module:model/InvitationStatus2} invitationStatus
 */

PayeePayorRef2.prototype['invitationStatus'] = undefined;
/**
 * The timestamp when the invitation status is updated
 * @member {Date} invitationStatusTimestamp
 */

PayeePayorRef2.prototype['invitationStatusTimestamp'] = undefined;
/**
 * @member {String} paymentChannelId
 */

PayeePayorRef2.prototype['paymentChannelId'] = undefined;
var _default = PayeePayorRef2;
exports["default"] = _default;