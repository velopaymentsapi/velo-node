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
 * The AutoTopUpConfig model module.
 * @module model/AutoTopUpConfig
 * @version 2.23.78
 */
var AutoTopUpConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutoTopUpConfig</code>.
   * @alias module:model/AutoTopUpConfig
   * @param enabled {Boolean} Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.
   */
  function AutoTopUpConfig(enabled) {
    _classCallCheck(this, AutoTopUpConfig);

    AutoTopUpConfig.initialize(this, enabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AutoTopUpConfig, null, [{
    key: "initialize",
    value: function initialize(obj, enabled) {
      obj['enabled'] = enabled;
    }
    /**
     * Constructs a <code>AutoTopUpConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTopUpConfig} obj Optional instance to populate.
     * @return {module:model/AutoTopUpConfig} The populated <code>AutoTopUpConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutoTopUpConfig();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('minBalance')) {
          obj['minBalance'] = _ApiClient["default"].convertToType(data['minBalance'], 'Number');
        }

        if (data.hasOwnProperty('targetBalance')) {
          obj['targetBalance'] = _ApiClient["default"].convertToType(data['targetBalance'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AutoTopUpConfig;
}();
/**
 * Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.
 * @member {Boolean} enabled
 */


AutoTopUpConfig.prototype['enabled'] = undefined;
/**
 * When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.
 * @member {Number} minBalance
 */

AutoTopUpConfig.prototype['minBalance'] = undefined;
/**
 * When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.
 * @member {Number} targetBalance
 */

AutoTopUpConfig.prototype['targetBalance'] = undefined;
var _default = AutoTopUpConfig;
exports["default"] = _default;