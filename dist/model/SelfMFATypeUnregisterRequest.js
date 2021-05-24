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
 * The SelfMFATypeUnregisterRequest model module.
 * @module model/SelfMFATypeUnregisterRequest
 * @version 2.26.124
 */
var SelfMFATypeUnregisterRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SelfMFATypeUnregisterRequest</code>.
   * @alias module:model/SelfMFATypeUnregisterRequest
   * @param mfaType {module:model/SelfMFATypeUnregisterRequest.MfaTypeEnum} The type of the MFA device
   */
  function SelfMFATypeUnregisterRequest(mfaType) {
    _classCallCheck(this, SelfMFATypeUnregisterRequest);

    SelfMFATypeUnregisterRequest.initialize(this, mfaType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SelfMFATypeUnregisterRequest, null, [{
    key: "initialize",
    value: function initialize(obj, mfaType) {
      obj['mfaType'] = mfaType;
    }
    /**
     * Constructs a <code>SelfMFATypeUnregisterRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SelfMFATypeUnregisterRequest} obj Optional instance to populate.
     * @return {module:model/SelfMFATypeUnregisterRequest} The populated <code>SelfMFATypeUnregisterRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SelfMFATypeUnregisterRequest();

        if (data.hasOwnProperty('mfaType')) {
          obj['mfaType'] = _ApiClient["default"].convertToType(data['mfaType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SelfMFATypeUnregisterRequest;
}();
/**
 * The type of the MFA device
 * @member {module:model/SelfMFATypeUnregisterRequest.MfaTypeEnum} mfaType
 */


SelfMFATypeUnregisterRequest.prototype['mfaType'] = undefined;
/**
 * Allowed values for the <code>mfaType</code> property.
 * @enum {String}
 * @readonly
 */

SelfMFATypeUnregisterRequest['MfaTypeEnum'] = {
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
var _default = SelfMFATypeUnregisterRequest;
exports["default"] = _default;