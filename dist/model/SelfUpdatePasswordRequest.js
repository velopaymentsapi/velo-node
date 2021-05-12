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
 * The SelfUpdatePasswordRequest model module.
 * @module model/SelfUpdatePasswordRequest
 * @version 2.26.127
 */
var SelfUpdatePasswordRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SelfUpdatePasswordRequest</code>.
   * @alias module:model/SelfUpdatePasswordRequest
   * @param oldPassword {String} The user's current password
   * @param newPassword {String} The new password
   */
  function SelfUpdatePasswordRequest(oldPassword, newPassword) {
    _classCallCheck(this, SelfUpdatePasswordRequest);

    SelfUpdatePasswordRequest.initialize(this, oldPassword, newPassword);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SelfUpdatePasswordRequest, null, [{
    key: "initialize",
    value: function initialize(obj, oldPassword, newPassword) {
      obj['oldPassword'] = oldPassword;
      obj['newPassword'] = newPassword;
    }
    /**
     * Constructs a <code>SelfUpdatePasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SelfUpdatePasswordRequest} obj Optional instance to populate.
     * @return {module:model/SelfUpdatePasswordRequest} The populated <code>SelfUpdatePasswordRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SelfUpdatePasswordRequest();

        if (data.hasOwnProperty('oldPassword')) {
          obj['oldPassword'] = _ApiClient["default"].convertToType(data['oldPassword'], 'String');
        }

        if (data.hasOwnProperty('newPassword')) {
          obj['newPassword'] = _ApiClient["default"].convertToType(data['newPassword'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SelfUpdatePasswordRequest;
}();
/**
 * The user's current password
 * @member {String} oldPassword
 */


SelfUpdatePasswordRequest.prototype['oldPassword'] = undefined;
/**
 * The new password
 * @member {String} newPassword
 */

SelfUpdatePasswordRequest.prototype['newPassword'] = undefined;
var _default = SelfUpdatePasswordRequest;
exports["default"] = _default;