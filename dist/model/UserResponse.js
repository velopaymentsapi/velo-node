"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Role = _interopRequireDefault(require("./Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserResponse model module.
 * @module model/UserResponse
 * @version 2.26.127
 */
var UserResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserResponse</code>.
   * @alias module:model/UserResponse
   */
  function UserResponse() {
    _classCallCheck(this, UserResponse);

    UserResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserResponse} obj Optional instance to populate.
     * @return {module:model/UserResponse} The populated <code>UserResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserResponse();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
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

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('entityId')) {
          obj['entityId'] = _ApiClient["default"].convertToType(data['entityId'], 'String');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], [_Role["default"]]);
        }

        if (data.hasOwnProperty('mfaType')) {
          obj['mfaType'] = _ApiClient["default"].convertToType(data['mfaType'], 'String');
        }

        if (data.hasOwnProperty('mfaStatus')) {
          obj['mfaStatus'] = _ApiClient["default"].convertToType(data['mfaStatus'], 'String');
        }

        if (data.hasOwnProperty('lockedOut')) {
          obj['lockedOut'] = _ApiClient["default"].convertToType(data['lockedOut'], 'Boolean');
        }

        if (data.hasOwnProperty('lockedOutTimestamp')) {
          obj['lockedOutTimestamp'] = _ApiClient["default"].convertToType(data['lockedOutTimestamp'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return UserResponse;
}();
/**
 * The id of the user
 * @member {String} id
 */


UserResponse.prototype['id'] = undefined;
/**
 * The status of the user when the user has been invited but not yet enrolled they will have a PENDING status 
 * @member {module:model/UserResponse.StatusEnum} status
 */

UserResponse.prototype['status'] = undefined;
/**
 * the email address of the user
 * @member {String} email
 */

UserResponse.prototype['email'] = undefined;
/**
 * The phone number of a device that the user can receive sms messages on 
 * @member {String} smsNumber
 */

UserResponse.prototype['smsNumber'] = undefined;
/**
 * The main contact number for the user 
 * @member {String} primaryContactNumber
 */

UserResponse.prototype['primaryContactNumber'] = undefined;
/**
 * The secondary contact number for the user 
 * @member {String} secondaryContactNumber
 */

UserResponse.prototype['secondaryContactNumber'] = undefined;
/**
 * @member {String} firstName
 */

UserResponse.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

UserResponse.prototype['lastName'] = undefined;
/**
 * The payorId or payeeId or null if the user is not a payor or payee user 
 * @member {String} entityId
 */

UserResponse.prototype['entityId'] = undefined;
/**
 * The role(s) for the user 
 * @member {Array.<module:model/Role>} roles
 */

UserResponse.prototype['roles'] = undefined;
/**
 * The type of the MFA device
 * @member {module:model/UserResponse.MfaTypeEnum} mfaType
 */

UserResponse.prototype['mfaType'] = undefined;
/**
 * The status of the MFA device
 * @member {module:model/UserResponse.MfaStatusEnum} mfaStatus
 */

UserResponse.prototype['mfaStatus'] = undefined;
/**
 * If true the user is currently locked out and unable to log in
 * @member {Boolean} lockedOut
 */

UserResponse.prototype['lockedOut'] = undefined;
/**
 * A timestamp showing when the user was locked out If null then the user is not currently locked out 
 * @member {Date} lockedOutTimestamp
 */

UserResponse.prototype['lockedOutTimestamp'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

UserResponse['StatusEnum'] = {
  /**
   * value: "ENABLED"
   * @const
   */
  "ENABLED": "ENABLED",

  /**
   * value: "DISABLED"
   * @const
   */
  "DISABLED": "DISABLED",

  /**
   * value: "PENDING"
   * @const
   */
  "PENDING": "PENDING"
};
/**
 * Allowed values for the <code>mfaType</code> property.
 * @enum {String}
 * @readonly
 */

UserResponse['MfaTypeEnum'] = {
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
 * Allowed values for the <code>mfaStatus</code> property.
 * @enum {String}
 * @readonly
 */

UserResponse['MfaStatusEnum'] = {
  /**
   * value: "REGISTERED"
   * @const
   */
  "REGISTERED": "REGISTERED",

  /**
   * value: "UNREGISTERED"
   * @const
   */
  "UNREGISTERED": "UNREGISTERED"
};
var _default = UserResponse;
exports["default"] = _default;