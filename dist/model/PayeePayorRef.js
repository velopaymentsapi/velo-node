"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvitationStatus = _interopRequireDefault(require("./InvitationStatus"));

var _PayableIssue = _interopRequireDefault(require("./PayableIssue2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PayeePayorRef model module.
 * @module model/PayeePayorRef
 * @version 2.29.128
 */
var PayeePayorRef = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeePayorRef</code>.
   * @alias module:model/PayeePayorRef
   */
  function PayeePayorRef() {
    _classCallCheck(this, PayeePayorRef);

    PayeePayorRef.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeePayorRef, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayeePayorRef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeePayorRef} obj Optional instance to populate.
     * @return {module:model/PayeePayorRef} The populated <code>PayeePayorRef</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeePayorRef();

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

        if (data.hasOwnProperty('payableStatus')) {
          obj['payableStatus'] = _ApiClient["default"].convertToType(data['payableStatus'], 'Boolean');
        }

        if (data.hasOwnProperty('payableIssues')) {
          obj['payableIssues'] = _ApiClient["default"].convertToType(data['payableIssues'], [_PayableIssue["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PayeePayorRef;
}();
/**
 * @member {String} payorId
 */


PayeePayorRef.prototype['payorId'] = undefined;
/**
 * @member {String} remoteId
 */

PayeePayorRef.prototype['remoteId'] = undefined;
/**
 * @member {module:model/InvitationStatus} invitationStatus
 */

PayeePayorRef.prototype['invitationStatus'] = undefined;
/**
 * The timestamp when the invitation status is updated
 * @member {Date} invitationStatusTimestamp
 */

PayeePayorRef.prototype['invitationStatusTimestamp'] = undefined;
/**
 * @member {String} paymentChannelId
 */

PayeePayorRef.prototype['paymentChannelId'] = undefined;
/**
 * Indicates if the payee is payable for this payor
 * @member {Boolean} payableStatus
 */

PayeePayorRef.prototype['payableStatus'] = undefined;
/**
 * Indicates any conditions which prevent the payee from being payable for this payor
 * @member {Array.<module:model/PayableIssue2>} payableIssues
 */

PayeePayorRef.prototype['payableIssues'] = undefined;
var _default = PayeePayorRef;
exports["default"] = _default;