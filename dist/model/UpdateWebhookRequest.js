"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Category = _interopRequireDefault(require("./Category"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UpdateWebhookRequest model module.
 * @module model/UpdateWebhookRequest
 * @version 2.29.130
 */
var UpdateWebhookRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateWebhookRequest</code>.
   * @alias module:model/UpdateWebhookRequest
   */
  function UpdateWebhookRequest() {
    _classCallCheck(this, UpdateWebhookRequest);

    UpdateWebhookRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateWebhookRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdateWebhookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWebhookRequest} obj Optional instance to populate.
     * @return {module:model/UpdateWebhookRequest} The populated <code>UpdateWebhookRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateWebhookRequest();

        if (data.hasOwnProperty('webhookUrl')) {
          obj['webhookUrl'] = _ApiClient["default"].convertToType(data['webhookUrl'], 'String');
        }

        if (data.hasOwnProperty('authorizationHeader')) {
          obj['authorizationHeader'] = _ApiClient["default"].convertToType(data['authorizationHeader'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('categories')) {
          obj['categories'] = _ApiClient["default"].convertToType(data['categories'], [_Category["default"]]);
        }
      }

      return obj;
    }
  }]);

  return UpdateWebhookRequest;
}();
/**
 * the webhook URL to use.
 * @member {String} webhookUrl
 */


UpdateWebhookRequest.prototype['webhookUrl'] = undefined;
/**
 * the authorization header to include with the notification.
 * @member {String} authorizationHeader
 */

UpdateWebhookRequest.prototype['authorizationHeader'] = undefined;
/**
 * whether the webhook is enabled.
 * @member {Boolean} enabled
 */

UpdateWebhookRequest.prototype['enabled'] = undefined;
/**
 * The notification categories to enable.
 * @member {Array.<module:model/Category>} categories
 */

UpdateWebhookRequest.prototype['categories'] = undefined;
var _default = UpdateWebhookRequest;
exports["default"] = _default;