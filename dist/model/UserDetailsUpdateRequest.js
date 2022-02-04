"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MFAType = _interopRequireDefault(require("./MFAType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UserDetailsUpdateRequest model module.
 * @module model/UserDetailsUpdateRequest
 * @version 2.29.130
 */
var UserDetailsUpdateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserDetailsUpdateRequest</code>.
   * &lt;p&gt;All properties are optional&lt;/p&gt; &lt;p&gt;Only provided properties will be updated&lt;/p&gt; &lt;p&gt;Use null to null out a property that is allowed to be nullable&lt;/p&gt; 
   * @alias module:model/UserDetailsUpdateRequest
   */
  function UserDetailsUpdateRequest() {
    _classCallCheck(this, UserDetailsUpdateRequest);

    UserDetailsUpdateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserDetailsUpdateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserDetailsUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserDetailsUpdateRequest} obj Optional instance to populate.
     * @return {module:model/UserDetailsUpdateRequest} The populated <code>UserDetailsUpdateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserDetailsUpdateRequest();

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

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('smsNumber')) {
          obj['smsNumber'] = _ApiClient["default"].convertToType(data['smsNumber'], 'String');
        }

        if (data.hasOwnProperty('mfaType')) {
          obj['mfaType'] = _MFAType["default"].constructFromObject(data['mfaType']);
        }

        if (data.hasOwnProperty('verificationCode')) {
          obj['verificationCode'] = _ApiClient["default"].convertToType(data['verificationCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserDetailsUpdateRequest;
}();
/**
 * The main contact number for the user 
 * @member {String} primaryContactNumber
 */


UserDetailsUpdateRequest.prototype['primaryContactNumber'] = undefined;
/**
 * The secondary contact number for the user 
 * @member {String} secondaryContactNumber
 */

UserDetailsUpdateRequest.prototype['secondaryContactNumber'] = undefined;
/**
 * @member {String} firstName
 */

UserDetailsUpdateRequest.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

UserDetailsUpdateRequest.prototype['lastName'] = undefined;
/**
 * the email address of the user
 * @member {String} email
 */

UserDetailsUpdateRequest.prototype['email'] = undefined;
/**
 * The phone number of a device that the user can receive sms messages on 
 * @member {String} smsNumber
 */

UserDetailsUpdateRequest.prototype['smsNumber'] = undefined;
/**
 * @member {module:model/MFAType} mfaType
 */

UserDetailsUpdateRequest.prototype['mfaType'] = undefined;
/**
 * <p>Optional property that MUST be suppied when manually verifying a user</p> <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p> 
 * @member {String} verificationCode
 */

UserDetailsUpdateRequest.prototype['verificationCode'] = undefined;
var _default = UserDetailsUpdateRequest;
exports["default"] = _default;