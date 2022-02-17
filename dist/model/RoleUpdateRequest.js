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
 * The RoleUpdateRequest model module.
 * @module model/RoleUpdateRequest
 * @version 2.29.128
 */
var RoleUpdateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RoleUpdateRequest</code>.
   * @alias module:model/RoleUpdateRequest
   * @param roles {Array.<String>} <p>The role(s) for the user</p> <p>The role must exist</p> <p>The role can be a custom role or a system role but the invoker must have the permissions to assign the role</p> <p>System roles are: backoffice.admin, payor.master_admin, payor.admin, payor.support</p> 
   */
  function RoleUpdateRequest(roles) {
    _classCallCheck(this, RoleUpdateRequest);

    RoleUpdateRequest.initialize(this, roles);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RoleUpdateRequest, null, [{
    key: "initialize",
    value: function initialize(obj, roles) {
      obj['roles'] = roles;
    }
    /**
     * Constructs a <code>RoleUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleUpdateRequest} obj Optional instance to populate.
     * @return {module:model/RoleUpdateRequest} The populated <code>RoleUpdateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RoleUpdateRequest();

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], ['String']);
        }

        if (data.hasOwnProperty('verificationCode')) {
          obj['verificationCode'] = _ApiClient["default"].convertToType(data['verificationCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RoleUpdateRequest;
}();
/**
 * <p>The role(s) for the user</p> <p>The role must exist</p> <p>The role can be a custom role or a system role but the invoker must have the permissions to assign the role</p> <p>System roles are: backoffice.admin, payor.master_admin, payor.admin, payor.support</p> 
 * @member {Array.<String>} roles
 */


RoleUpdateRequest.prototype['roles'] = undefined;
/**
 * <p>Optional property that MUST be suppied when manually verifying a user</p> <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p> 
 * @member {String} verificationCode
 */

RoleUpdateRequest.prototype['verificationCode'] = undefined;
var _default = RoleUpdateRequest;
exports["default"] = _default;