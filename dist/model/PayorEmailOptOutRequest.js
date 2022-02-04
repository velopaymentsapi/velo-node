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
 * The PayorEmailOptOutRequest model module.
 * @module model/PayorEmailOptOutRequest
 * @version 2.29.130
 */
var PayorEmailOptOutRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorEmailOptOutRequest</code>.
   * @alias module:model/PayorEmailOptOutRequest
   * @param reminderEmailsOptOut {Boolean} 
   */
  function PayorEmailOptOutRequest(reminderEmailsOptOut) {
    _classCallCheck(this, PayorEmailOptOutRequest);

    PayorEmailOptOutRequest.initialize(this, reminderEmailsOptOut);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorEmailOptOutRequest, null, [{
    key: "initialize",
    value: function initialize(obj, reminderEmailsOptOut) {
      obj['reminderEmailsOptOut'] = reminderEmailsOptOut;
    }
    /**
     * Constructs a <code>PayorEmailOptOutRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorEmailOptOutRequest} obj Optional instance to populate.
     * @return {module:model/PayorEmailOptOutRequest} The populated <code>PayorEmailOptOutRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorEmailOptOutRequest();

        if (data.hasOwnProperty('reminderEmailsOptOut')) {
          obj['reminderEmailsOptOut'] = _ApiClient["default"].convertToType(data['reminderEmailsOptOut'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return PayorEmailOptOutRequest;
}();
/**
 * @member {Boolean} reminderEmailsOptOut
 */


PayorEmailOptOutRequest.prototype['reminderEmailsOptOut'] = undefined;
var _default = PayorEmailOptOutRequest;
exports["default"] = _default;