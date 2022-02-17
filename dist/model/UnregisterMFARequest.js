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
 * The UnregisterMFARequest model module.
 * @module model/UnregisterMFARequest
 * @version 2.29.128
 */
var UnregisterMFARequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnregisterMFARequest</code>.
   * @alias module:model/UnregisterMFARequest
   * @param mfaType {module:model/UnregisterMFARequest.MfaTypeEnum} The type of the MFA device
   */
  function UnregisterMFARequest(mfaType) {
    _classCallCheck(this, UnregisterMFARequest);

    UnregisterMFARequest.initialize(this, mfaType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UnregisterMFARequest, null, [{
    key: "initialize",
    value: function initialize(obj, mfaType) {
      obj['mfaType'] = mfaType;
    }
    /**
     * Constructs a <code>UnregisterMFARequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnregisterMFARequest} obj Optional instance to populate.
     * @return {module:model/UnregisterMFARequest} The populated <code>UnregisterMFARequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnregisterMFARequest();

        if (data.hasOwnProperty('mfaType')) {
          obj['mfaType'] = _ApiClient["default"].convertToType(data['mfaType'], 'String');
        }

        if (data.hasOwnProperty('verificationCode')) {
          obj['verificationCode'] = _ApiClient["default"].convertToType(data['verificationCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UnregisterMFARequest;
}();
/**
 * The type of the MFA device
 * @member {module:model/UnregisterMFARequest.MfaTypeEnum} mfaType
 */


UnregisterMFARequest.prototype['mfaType'] = undefined;
/**
 * <p>Optional property that MUST be suppied when manually verifying a user</p> <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p> 
 * @member {String} verificationCode
 */

UnregisterMFARequest.prototype['verificationCode'] = undefined;
/**
 * Allowed values for the <code>mfaType</code> property.
 * @enum {String}
 * @readonly
 */

UnregisterMFARequest['MfaTypeEnum'] = {
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
var _default = UnregisterMFARequest;
exports["default"] = _default;