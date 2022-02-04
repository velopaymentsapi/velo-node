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
 * The WebhookResponse model module.
 * @module model/WebhookResponse
 * @version 2.29.130
 */
var WebhookResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookResponse</code>.
   * @alias module:model/WebhookResponse
   */
  function WebhookResponse() {
    _classCallCheck(this, WebhookResponse);

    WebhookResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhookResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WebhookResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookResponse} obj Optional instance to populate.
     * @return {module:model/WebhookResponse} The populated <code>WebhookResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookResponse();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

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

        if (data.hasOwnProperty('categories')) {
          obj['categories'] = _ApiClient["default"].convertToType(data['categories'], [_Category["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WebhookResponse;
}();
/**
 * @member {String} id
 */


WebhookResponse.prototype['id'] = undefined;
/**
 * @member {String} payorId
 */

WebhookResponse.prototype['payorId'] = undefined;
/**
 * @member {String} webhookUrl
 */

WebhookResponse.prototype['webhookUrl'] = undefined;
/**
 * @member {String} authorizationHeader
 */

WebhookResponse.prototype['authorizationHeader'] = undefined;
/**
 * @member {Boolean} enabled
 */

WebhookResponse.prototype['enabled'] = undefined;
/**
 * @member {Array.<module:model/Category>} categories
 */

WebhookResponse.prototype['categories'] = undefined;
var _default = WebhookResponse;
exports["default"] = _default;