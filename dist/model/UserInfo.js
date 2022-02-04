"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MFADetails = _interopRequireDefault(require("./MFADetails"));

var _UserType = _interopRequireDefault(require("./UserType2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UserInfo model module.
 * @module model/UserInfo
 * @version 2.29.130
 */
var UserInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserInfo</code>.
   * @alias module:model/UserInfo
   */
  function UserInfo() {
    _classCallCheck(this, UserInfo);

    UserInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserInfo} obj Optional instance to populate.
     * @return {module:model/UserInfo} The populated <code>UserInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserInfo();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('userType')) {
          obj['userType'] = _UserType["default"].constructFromObject(data['userType']);
        }

        if (data.hasOwnProperty('mfa_details')) {
          obj['mfa_details'] = _MFADetails["default"].constructFromObject(data['mfa_details']);
        }
      }

      return obj;
    }
  }]);

  return UserInfo;
}();
/**
 * the id of the user
 * @member {String} user_id
 */


UserInfo.prototype['user_id'] = undefined;
/**
 * @member {module:model/UserType2} userType
 */

UserInfo.prototype['userType'] = undefined;
/**
 * @member {module:model/MFADetails} mfa_details
 */

UserInfo.prototype['mfa_details'] = undefined;
var _default = UserInfo;
exports["default"] = _default;