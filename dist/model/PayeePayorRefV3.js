"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvitationStatus = _interopRequireDefault(require("./InvitationStatus2"));

var _PayableIssue = _interopRequireDefault(require("./PayableIssue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayeePayorRefV3 model module.
 * @module model/PayeePayorRefV3
 * @version 2.26.124
 */
var PayeePayorRefV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeePayorRefV3</code>.
   * @alias module:model/PayeePayorRefV3
   */
  function PayeePayorRefV3() {
    _classCallCheck(this, PayeePayorRefV3);

    PayeePayorRefV3.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeePayorRefV3, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayeePayorRefV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeePayorRefV3} obj Optional instance to populate.
     * @return {module:model/PayeePayorRefV3} The populated <code>PayeePayorRefV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeePayorRefV3();

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

  return PayeePayorRefV3;
}();
/**
 * @member {String} payorId
 */


PayeePayorRefV3.prototype['payorId'] = undefined;
/**
 * @member {String} remoteId
 */

PayeePayorRefV3.prototype['remoteId'] = undefined;
/**
 * @member {module:model/InvitationStatus2} invitationStatus
 */

PayeePayorRefV3.prototype['invitationStatus'] = undefined;
/**
 * The timestamp when the invitation status is updated
 * @member {Date} invitationStatusTimestamp
 */

PayeePayorRefV3.prototype['invitationStatusTimestamp'] = undefined;
/**
 * @member {String} paymentChannelId
 */

PayeePayorRefV3.prototype['paymentChannelId'] = undefined;
/**
 * Indicates if the payee is payable for this payor
 * @member {Boolean} payableStatus
 */

PayeePayorRefV3.prototype['payableStatus'] = undefined;
/**
 * Indicates any conditions which prevent the payee from being payable for this payor
 * @member {Array.<module:model/PayableIssue>} payableIssues
 */

PayeePayorRefV3.prototype['payableIssues'] = undefined;
var _default = PayeePayorRefV3;
exports["default"] = _default;