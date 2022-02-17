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
 * The InviteUserRequest model module.
 * @module model/InviteUserRequest
 * @version 2.29.128
 */
var InviteUserRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InviteUserRequest</code>.
   * @alias module:model/InviteUserRequest
   * @param email {String} the email address of the invited user
   * @param mfaType {module:model/InviteUserRequest.MfaTypeEnum} <p>The MFA type that the user will use</p> <p>The type may be conditional on the role(s) the user has</p> 
   * @param smsNumber {String} The phone number of a device that the user can receive sms messages on 
   * @param primaryContactNumber {String} The main contact number for the user 
   * @param roles {Array.<String>} The role(s) for the user The role must exist The role can be a custom role or a system role but the invoker must have the permissions to assign the role System roles are: velo.backoffice.admin, velo.payor.master_admin, velo.payor.admin, velo.payor.support, velo.payee.admin, velo.payee.support 
   */
  function InviteUserRequest(email, mfaType, smsNumber, primaryContactNumber, roles) {
    _classCallCheck(this, InviteUserRequest);

    InviteUserRequest.initialize(this, email, mfaType, smsNumber, primaryContactNumber, roles);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InviteUserRequest, null, [{
    key: "initialize",
    value: function initialize(obj, email, mfaType, smsNumber, primaryContactNumber, roles) {
      obj['email'] = email;
      obj['mfaType'] = mfaType;
      obj['smsNumber'] = smsNumber;
      obj['primaryContactNumber'] = primaryContactNumber;
      obj['roles'] = roles;
    }
    /**
     * Constructs a <code>InviteUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InviteUserRequest} obj Optional instance to populate.
     * @return {module:model/InviteUserRequest} The populated <code>InviteUserRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InviteUserRequest();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('mfaType')) {
          obj['mfaType'] = _ApiClient["default"].convertToType(data['mfaType'], 'String');
        }

        if (data.hasOwnProperty('smsNumber')) {
          obj['smsNumber'] = _ApiClient["default"].convertToType(data['smsNumber'], 'String');
        }

        if (data.hasOwnProperty('primaryContactNumber')) {
          obj['primaryContactNumber'] = _ApiClient["default"].convertToType(data['primaryContactNumber'], 'String');
        }

        if (data.hasOwnProperty('secondaryContactNumber')) {
          obj['secondaryContactNumber'] = _ApiClient["default"].convertToType(data['secondaryContactNumber'], 'String');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], ['String']);
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('entityId')) {
          obj['entityId'] = _ApiClient["default"].convertToType(data['entityId'], 'String');
        }

        if (data.hasOwnProperty('userType')) {
          obj['userType'] = _ApiClient["default"].convertToType(data['userType'], 'String');
        }

        if (data.hasOwnProperty('verificationCode')) {
          obj['verificationCode'] = _ApiClient["default"].convertToType(data['verificationCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InviteUserRequest;
}();
/**
 * the email address of the invited user
 * @member {String} email
 */


InviteUserRequest.prototype['email'] = undefined;
/**
 * <p>The MFA type that the user will use</p> <p>The type may be conditional on the role(s) the user has</p> 
 * @member {module:model/InviteUserRequest.MfaTypeEnum} mfaType
 */

InviteUserRequest.prototype['mfaType'] = undefined;
/**
 * The phone number of a device that the user can receive sms messages on 
 * @member {String} smsNumber
 */

InviteUserRequest.prototype['smsNumber'] = undefined;
/**
 * The main contact number for the user 
 * @member {String} primaryContactNumber
 */

InviteUserRequest.prototype['primaryContactNumber'] = undefined;
/**
 * The secondary contact number for the user 
 * @member {String} secondaryContactNumber
 */

InviteUserRequest.prototype['secondaryContactNumber'] = undefined;
/**
 * The role(s) for the user The role must exist The role can be a custom role or a system role but the invoker must have the permissions to assign the role System roles are: velo.backoffice.admin, velo.payor.master_admin, velo.payor.admin, velo.payor.support, velo.payee.admin, velo.payee.support 
 * @member {Array.<String>} roles
 */

InviteUserRequest.prototype['roles'] = undefined;
/**
 * @member {String} firstName
 */

InviteUserRequest.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

InviteUserRequest.prototype['lastName'] = undefined;
/**
 * The payorId or payeeId or null if the user is a backoffice admin 
 * @member {String} entityId
 */

InviteUserRequest.prototype['entityId'] = undefined;
/**
 * Will default to PAYOR if not provided but entityId is provided
 * @member {module:model/InviteUserRequest.UserTypeEnum} userType
 */

InviteUserRequest.prototype['userType'] = undefined;
/**
 * Optional property that MUST be suppied when manually verifying a user The user's smsNumber is registered via a separate endpoint and an OTP sent to them 
 * @member {String} verificationCode
 */

InviteUserRequest.prototype['verificationCode'] = undefined;
/**
 * Allowed values for the <code>mfaType</code> property.
 * @enum {String}
 * @readonly
 */

InviteUserRequest['MfaTypeEnum'] = {
  /**
   * value: "SMS"
   * @const
   */
  "SMS": "SMS",

  /**
   * value: "YUBIKEY"
   * @const
   */
  "YUBIKEY": "YUBIKEY",

  /**
   * value: "TOTP"
   * @const
   */
  "TOTP": "TOTP"
};
/**
 * Allowed values for the <code>userType</code> property.
 * @enum {String}
 * @readonly
 */

InviteUserRequest['UserTypeEnum'] = {
  /**
   * value: "BACKOFFICE"
   * @const
   */
  "BACKOFFICE": "BACKOFFICE",

  /**
   * value: "PAYOR"
   * @const
   */
  "PAYOR": "PAYOR",

  /**
   * value: "PAYEE"
   * @const
   */
  "PAYEE": "PAYEE"
};
var _default = InviteUserRequest;
exports["default"] = _default;