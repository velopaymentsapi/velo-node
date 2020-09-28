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
 * The ResetPasswordRequest model module.
 * @module model/ResetPasswordRequest
 * @version 2.23.78
 */
var ResetPasswordRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResetPasswordRequest</code>.
   * @alias module:model/ResetPasswordRequest
   * @param email {String} the email address of the user requesting the reset password
   */
  function ResetPasswordRequest(email) {
    _classCallCheck(this, ResetPasswordRequest);

    ResetPasswordRequest.initialize(this, email);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResetPasswordRequest, null, [{
    key: "initialize",
    value: function initialize(obj, email) {
      obj['email'] = email;
    }
    /**
     * Constructs a <code>ResetPasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResetPasswordRequest} obj Optional instance to populate.
     * @return {module:model/ResetPasswordRequest} The populated <code>ResetPasswordRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResetPasswordRequest();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ResetPasswordRequest;
}();
/**
 * the email address of the user requesting the reset password
 * @member {String} email
 */


ResetPasswordRequest.prototype['email'] = undefined;
var _default = ResetPasswordRequest;
exports["default"] = _default;