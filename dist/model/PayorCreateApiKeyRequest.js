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
 * The PayorCreateApiKeyRequest model module.
 * @module model/PayorCreateApiKeyRequest
 * @version 2.29.128
 */
var PayorCreateApiKeyRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorCreateApiKeyRequest</code>.
   * @alias module:model/PayorCreateApiKeyRequest
   * @param name {String} A name for the key.
   * @param roles {Array.<module:model/PayorCreateApiKeyRequest.RolesEnum>} <p>A list of roles to assign to the key.</p> <p>Only the first role name will be used</p> <p>A later version will change this from a list to string</p> 
   */
  function PayorCreateApiKeyRequest(name, roles) {
    _classCallCheck(this, PayorCreateApiKeyRequest);

    PayorCreateApiKeyRequest.initialize(this, name, roles);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorCreateApiKeyRequest, null, [{
    key: "initialize",
    value: function initialize(obj, name, roles) {
      obj['name'] = name;
      obj['roles'] = roles;
    }
    /**
     * Constructs a <code>PayorCreateApiKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorCreateApiKeyRequest} obj Optional instance to populate.
     * @return {module:model/PayorCreateApiKeyRequest} The populated <code>PayorCreateApiKeyRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorCreateApiKeyRequest();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return PayorCreateApiKeyRequest;
}();
/**
 * A name for the key.
 * @member {String} name
 */


PayorCreateApiKeyRequest.prototype['name'] = undefined;
/**
 * Description of the key.
 * @member {String} description
 */

PayorCreateApiKeyRequest.prototype['description'] = undefined;
/**
 * <p>A list of roles to assign to the key.</p> <p>Only the first role name will be used</p> <p>A later version will change this from a list to string</p> 
 * @member {Array.<module:model/PayorCreateApiKeyRequest.RolesEnum>} roles
 */

PayorCreateApiKeyRequest.prototype['roles'] = undefined;
/**
 * Allowed values for the <code>roles</code> property.
 * @enum {String}
 * @readonly
 */

PayorCreateApiKeyRequest['RolesEnum'] = {
  /**
   * value: "payor.admin"
   * @const
   */
  "admin": "payor.admin",

  /**
   * value: "payor.support"
   * @const
   */
  "support": "payor.support"
};
var _default = PayorCreateApiKeyRequest;
exports["default"] = _default;