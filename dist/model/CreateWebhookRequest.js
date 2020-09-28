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
 * The CreateWebhookRequest model module.
 * @module model/CreateWebhookRequest
 * @version 2.23.78
 */
var CreateWebhookRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateWebhookRequest</code>.
   * @alias module:model/CreateWebhookRequest
   * @param payorId {String} 
   * @param webhookUrl {String} 
   * @param enabled {Boolean} 
   */
  function CreateWebhookRequest(payorId, webhookUrl, enabled) {
    _classCallCheck(this, CreateWebhookRequest);

    CreateWebhookRequest.initialize(this, payorId, webhookUrl, enabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateWebhookRequest, null, [{
    key: "initialize",
    value: function initialize(obj, payorId, webhookUrl, enabled) {
      obj['payorId'] = payorId;
      obj['webhookUrl'] = webhookUrl;
      obj['enabled'] = enabled;
    }
    /**
     * Constructs a <code>CreateWebhookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWebhookRequest} obj Optional instance to populate.
     * @return {module:model/CreateWebhookRequest} The populated <code>CreateWebhookRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateWebhookRequest();

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('webhookUrl')) {
          obj['webhookUrl'] = _ApiClient["default"].convertToType(data['webhookUrl'], 'String');
        }

        if (data.hasOwnProperty('authorizationHeader')) {
          obj['authorizationHeader'] = _ApiClient["default"].convertToType(data['authorizationHeader'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CreateWebhookRequest;
}();
/**
 * @member {String} payorId
 */


CreateWebhookRequest.prototype['payorId'] = undefined;
/**
 * @member {String} webhookUrl
 */

CreateWebhookRequest.prototype['webhookUrl'] = undefined;
/**
 * @member {String} authorizationHeader
 */

CreateWebhookRequest.prototype['authorizationHeader'] = undefined;
/**
 * @member {Boolean} enabled
 */

CreateWebhookRequest.prototype['enabled'] = undefined;
var _default = CreateWebhookRequest;
exports["default"] = _default;