"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserInfo = _interopRequireDefault(require("./UserInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AccessTokenResponse model module.
 * @module model/AccessTokenResponse
 * @version 2.29.128
 */
var AccessTokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccessTokenResponse</code>.
   * @alias module:model/AccessTokenResponse
   */
  function AccessTokenResponse() {
    _classCallCheck(this, AccessTokenResponse);

    AccessTokenResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccessTokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccessTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessTokenResponse} obj Optional instance to populate.
     * @return {module:model/AccessTokenResponse} The populated <code>AccessTokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccessTokenResponse();

        if (data.hasOwnProperty('access_token')) {
          obj['access_token'] = _ApiClient["default"].convertToType(data['access_token'], 'String');
        }

        if (data.hasOwnProperty('token_type')) {
          obj['token_type'] = _ApiClient["default"].convertToType(data['token_type'], 'String');
        }

        if (data.hasOwnProperty('refresh_token')) {
          obj['refresh_token'] = _ApiClient["default"].convertToType(data['refresh_token'], 'String');
        }

        if (data.hasOwnProperty('expires_in')) {
          obj['expires_in'] = _ApiClient["default"].convertToType(data['expires_in'], 'Number');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }

        if (data.hasOwnProperty('user_info')) {
          obj['user_info'] = _UserInfo["default"].constructFromObject(data['user_info']);
        }

        if (data.hasOwnProperty('entityIds')) {
          obj['entityIds'] = _ApiClient["default"].convertToType(data['entityIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return AccessTokenResponse;
}();
/**
 * Bearer token used in headers to access secure endpoints 
 * @member {String} access_token
 */


AccessTokenResponse.prototype['access_token'] = undefined;
/**
 * the type of the token
 * @member {String} token_type
 * @default 'bearer'
 */

AccessTokenResponse.prototype['token_type'] = 'bearer';
/**
 * can be used to obtain a new access token
 * @member {String} refresh_token
 */

AccessTokenResponse.prototype['refresh_token'] = undefined;
/**
 * The lifetime in seconds of the access token
 * @member {Number} expires_in
 */

AccessTokenResponse.prototype['expires_in'] = undefined;
/**
 * the scope of the access token
 * @member {String} scope
 */

AccessTokenResponse.prototype['scope'] = undefined;
/**
 * @member {module:model/UserInfo} user_info
 */

AccessTokenResponse.prototype['user_info'] = undefined;
/**
 * If the user is a payee then the payeeId<P> If the user is a payor then the payorId 
 * @member {Array.<String>} entityIds
 */

AccessTokenResponse.prototype['entityIds'] = undefined;
var _default = AccessTokenResponse;
exports["default"] = _default;