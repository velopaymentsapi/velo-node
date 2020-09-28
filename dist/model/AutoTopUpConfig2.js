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
 * The AutoTopUpConfig2 model module.
 * @module model/AutoTopUpConfig2
 * @version 2.23.78
 */
var AutoTopUpConfig2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutoTopUpConfig2</code>.
   * @alias module:model/AutoTopUpConfig2
   * @param enabled {Boolean} Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.
   */
  function AutoTopUpConfig2(enabled) {
    _classCallCheck(this, AutoTopUpConfig2);

    AutoTopUpConfig2.initialize(this, enabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AutoTopUpConfig2, null, [{
    key: "initialize",
    value: function initialize(obj, enabled) {
      obj['enabled'] = enabled;
    }
    /**
     * Constructs a <code>AutoTopUpConfig2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTopUpConfig2} obj Optional instance to populate.
     * @return {module:model/AutoTopUpConfig2} The populated <code>AutoTopUpConfig2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutoTopUpConfig2();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('minBalance')) {
          obj['minBalance'] = _ApiClient["default"].convertToType(data['minBalance'], 'Number');
        }

        if (data.hasOwnProperty('targetBalance')) {
          obj['targetBalance'] = _ApiClient["default"].convertToType(data['targetBalance'], 'Number');
        }

        if (data.hasOwnProperty('fundingAccountId')) {
          obj['fundingAccountId'] = _ApiClient["default"].convertToType(data['fundingAccountId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AutoTopUpConfig2;
}();
/**
 * Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.
 * @member {Boolean} enabled
 */


AutoTopUpConfig2.prototype['enabled'] = undefined;
/**
 * When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.
 * @member {Number} minBalance
 */

AutoTopUpConfig2.prototype['minBalance'] = undefined;
/**
 * When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.
 * @member {Number} targetBalance
 */

AutoTopUpConfig2.prototype['targetBalance'] = undefined;
/**
 * Id of funding account from which to pull funds when auto top-up is triggered.  Note - if this is not set then auto top-up is effectively disabled.
 * @member {String} fundingAccountId
 */

AutoTopUpConfig2.prototype['fundingAccountId'] = undefined;
var _default = AutoTopUpConfig2;
exports["default"] = _default;