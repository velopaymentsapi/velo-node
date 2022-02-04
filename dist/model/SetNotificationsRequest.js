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
 * The SetNotificationsRequest model module.
 * @module model/SetNotificationsRequest
 * @version 2.29.130
 */
var SetNotificationsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SetNotificationsRequest</code>.
   * @alias module:model/SetNotificationsRequest
   * @param minimumBalance {Number} Amount to set as minimum balance in minor units
   */
  function SetNotificationsRequest(minimumBalance) {
    _classCallCheck(this, SetNotificationsRequest);

    SetNotificationsRequest.initialize(this, minimumBalance);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SetNotificationsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, minimumBalance) {
      obj['minimumBalance'] = minimumBalance;
    }
    /**
     * Constructs a <code>SetNotificationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetNotificationsRequest} obj Optional instance to populate.
     * @return {module:model/SetNotificationsRequest} The populated <code>SetNotificationsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SetNotificationsRequest();

        if (data.hasOwnProperty('minimumBalance')) {
          obj['minimumBalance'] = _ApiClient["default"].convertToType(data['minimumBalance'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SetNotificationsRequest;
}();
/**
 * Amount to set as minimum balance in minor units
 * @member {Number} minimumBalance
 */


SetNotificationsRequest.prototype['minimumBalance'] = undefined;
var _default = SetNotificationsRequest;
exports["default"] = _default;