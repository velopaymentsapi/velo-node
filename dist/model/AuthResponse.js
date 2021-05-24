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
 * The AuthResponse model module.
 * @module model/AuthResponse
 * @version 2.26.124
 */
var AuthResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthResponse</code>.
   * @alias module:model/AuthResponse
   * @param accessToken {String} 
   * @param tokenType {String} 
   */
  function AuthResponse(accessToken, tokenType) {
    _classCallCheck(this, AuthResponse);

    AuthResponse.initialize(this, accessToken, tokenType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthResponse, null, [{
    key: "initialize",
    value: function initialize(obj, accessToken, tokenType) {
      obj['access_token'] = accessToken;
      obj['token_type'] = tokenType;
    }
    /**
     * Constructs a <code>AuthResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthResponse} obj Optional instance to populate.
     * @return {module:model/AuthResponse} The populated <code>AuthResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthResponse();

        if (data.hasOwnProperty('access_token')) {
          obj['access_token'] = _ApiClient["default"].convertToType(data['access_token'], 'String');
        }

        if (data.hasOwnProperty('token_type')) {
          obj['token_type'] = _ApiClient["default"].convertToType(data['token_type'], 'String');
        }

        if (data.hasOwnProperty('expires_in')) {
          obj['expires_in'] = _ApiClient["default"].convertToType(data['expires_in'], 'Number');
        }

        if (data.hasOwnProperty('refresh_token')) {
          obj['refresh_token'] = _ApiClient["default"].convertToType(data['refresh_token'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }

        if (data.hasOwnProperty('entityIds')) {
          obj['entityIds'] = _ApiClient["default"].convertToType(data['entityIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return AuthResponse;
}();
/**
 * @member {String} access_token
 */


AuthResponse.prototype['access_token'] = undefined;
/**
 * @member {String} token_type
 */

AuthResponse.prototype['token_type'] = undefined;
/**
 * @member {Number} expires_in
 */

AuthResponse.prototype['expires_in'] = undefined;
/**
 * @member {String} refresh_token
 */

AuthResponse.prototype['refresh_token'] = undefined;
/**
 * @member {String} scope
 */

AuthResponse.prototype['scope'] = undefined;
/**
 * @member {Array.<String>} entityIds
 */

AuthResponse.prototype['entityIds'] = undefined;
var _default = AuthResponse;
exports["default"] = _default;