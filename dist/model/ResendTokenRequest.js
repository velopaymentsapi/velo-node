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
 * The ResendTokenRequest model module.
 * @module model/ResendTokenRequest
 * @version 2.29.130
 */
var ResendTokenRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResendTokenRequest</code>.
   * @alias module:model/ResendTokenRequest
   * @param tokenType {module:model/ResendTokenRequest.TokenTypeEnum} The type of the token to resend
   */
  function ResendTokenRequest(tokenType) {
    _classCallCheck(this, ResendTokenRequest);

    ResendTokenRequest.initialize(this, tokenType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResendTokenRequest, null, [{
    key: "initialize",
    value: function initialize(obj, tokenType) {
      obj['tokenType'] = tokenType;
    }
    /**
     * Constructs a <code>ResendTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResendTokenRequest} obj Optional instance to populate.
     * @return {module:model/ResendTokenRequest} The populated <code>ResendTokenRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResendTokenRequest();

        if (data.hasOwnProperty('tokenType')) {
          obj['tokenType'] = _ApiClient["default"].convertToType(data['tokenType'], 'String');
        }

        if (data.hasOwnProperty('verificationCode')) {
          obj['verificationCode'] = _ApiClient["default"].convertToType(data['verificationCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ResendTokenRequest;
}();
/**
 * The type of the token to resend
 * @member {module:model/ResendTokenRequest.TokenTypeEnum} tokenType
 */


ResendTokenRequest.prototype['tokenType'] = undefined;
/**
 * <p>Optional property that MUST be suppied when manually verifying a user</p> <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p> 
 * @member {String} verificationCode
 */

ResendTokenRequest.prototype['verificationCode'] = undefined;
/**
 * Allowed values for the <code>tokenType</code> property.
 * @enum {String}
 * @readonly
 */

ResendTokenRequest['TokenTypeEnum'] = {
  /**
   * value: "INVITE_MFA_USER"
   * @const
   */
  "INVITE_MFA_USER": "INVITE_MFA_USER",

  /**
   * value: "MFA_REGISTRATION"
   * @const
   */
  "MFA_REGISTRATION": "MFA_REGISTRATION"
};
var _default = ResendTokenRequest;
exports["default"] = _default;