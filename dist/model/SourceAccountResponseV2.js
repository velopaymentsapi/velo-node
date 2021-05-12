"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AutoTopUpConfig = _interopRequireDefault(require("./AutoTopUpConfig"));

var _Notifications = _interopRequireDefault(require("./Notifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SourceAccountResponseV2 model module.
 * @module model/SourceAccountResponseV2
 * @version 2.26.127
 */
var SourceAccountResponseV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SourceAccountResponseV2</code>.
   * @alias module:model/SourceAccountResponseV2
   * @param id {String} Source Account Id
   * @param fundingRef {String} 
   * @param physicalAccountName {String} 
   * @param railsId {String} 
   * @param pooled {Boolean} 
   * @param balanceVisible {Boolean} 
   * @param accountType {String} 
   */
  function SourceAccountResponseV2(id, fundingRef, physicalAccountName, railsId, pooled, balanceVisible, accountType) {
    _classCallCheck(this, SourceAccountResponseV2);

    SourceAccountResponseV2.initialize(this, id, fundingRef, physicalAccountName, railsId, pooled, balanceVisible, accountType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SourceAccountResponseV2, null, [{
    key: "initialize",
    value: function initialize(obj, id, fundingRef, physicalAccountName, railsId, pooled, balanceVisible, accountType) {
      obj['id'] = id;
      obj['fundingRef'] = fundingRef;
      obj['physicalAccountName'] = physicalAccountName;
      obj['railsId'] = railsId;
      obj['pooled'] = pooled;
      obj['balanceVisible'] = balanceVisible;
      obj['accountType'] = accountType;
    }
    /**
     * Constructs a <code>SourceAccountResponseV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceAccountResponseV2} obj Optional instance to populate.
     * @return {module:model/SourceAccountResponseV2} The populated <code>SourceAccountResponseV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SourceAccountResponseV2();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _ApiClient["default"].convertToType(data['balance'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('fundingRef')) {
          obj['fundingRef'] = _ApiClient["default"].convertToType(data['fundingRef'], 'String');
        }

        if (data.hasOwnProperty('physicalAccountName')) {
          obj['physicalAccountName'] = _ApiClient["default"].convertToType(data['physicalAccountName'], 'String');
        }

        if (data.hasOwnProperty('railsId')) {
          obj['railsId'] = _ApiClient["default"].convertToType(data['railsId'], 'String');
        }

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('pooled')) {
          obj['pooled'] = _ApiClient["default"].convertToType(data['pooled'], 'Boolean');
        }

        if (data.hasOwnProperty('balanceVisible')) {
          obj['balanceVisible'] = _ApiClient["default"].convertToType(data['balanceVisible'], 'Boolean');
        }

        if (data.hasOwnProperty('customerId')) {
          obj['customerId'] = _ApiClient["default"].convertToType(data['customerId'], 'String');
        }

        if (data.hasOwnProperty('physicalAccountId')) {
          obj['physicalAccountId'] = _ApiClient["default"].convertToType(data['physicalAccountId'], 'String');
        }

        if (data.hasOwnProperty('notifications')) {
          obj['notifications'] = _Notifications["default"].constructFromObject(data['notifications']);
        }

        if (data.hasOwnProperty('fundingAccountId')) {
          obj['fundingAccountId'] = _ApiClient["default"].convertToType(data['fundingAccountId'], 'String');
        }

        if (data.hasOwnProperty('autoTopUpConfig')) {
          obj['autoTopUpConfig'] = _AutoTopUpConfig["default"].constructFromObject(data['autoTopUpConfig']);
        }

        if (data.hasOwnProperty('accountType')) {
          obj['accountType'] = _ApiClient["default"].convertToType(data['accountType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SourceAccountResponseV2;
}();
/**
 * Source Account Id
 * @member {String} id
 */


SourceAccountResponseV2.prototype['id'] = undefined;
/**
 * Decimal implied
 * @member {Number} balance
 */

SourceAccountResponseV2.prototype['balance'] = undefined;
/**
 * @member {module:model/SourceAccountResponseV2.CurrencyEnum} currency
 */

SourceAccountResponseV2.prototype['currency'] = undefined;
/**
 * @member {String} fundingRef
 */

SourceAccountResponseV2.prototype['fundingRef'] = undefined;
/**
 * @member {String} physicalAccountName
 */

SourceAccountResponseV2.prototype['physicalAccountName'] = undefined;
/**
 * @member {String} railsId
 */

SourceAccountResponseV2.prototype['railsId'] = undefined;
/**
 * @member {String} payorId
 */

SourceAccountResponseV2.prototype['payorId'] = undefined;
/**
 * @member {String} name
 */

SourceAccountResponseV2.prototype['name'] = undefined;
/**
 * @member {Boolean} pooled
 */

SourceAccountResponseV2.prototype['pooled'] = undefined;
/**
 * @member {Boolean} balanceVisible
 */

SourceAccountResponseV2.prototype['balanceVisible'] = undefined;
/**
 * @member {String} customerId
 */

SourceAccountResponseV2.prototype['customerId'] = undefined;
/**
 * @member {String} physicalAccountId
 */

SourceAccountResponseV2.prototype['physicalAccountId'] = undefined;
/**
 * @member {module:model/Notifications} notifications
 */

SourceAccountResponseV2.prototype['notifications'] = undefined;
/**
 * @member {String} fundingAccountId
 */

SourceAccountResponseV2.prototype['fundingAccountId'] = undefined;
/**
 * @member {module:model/AutoTopUpConfig} autoTopUpConfig
 */

SourceAccountResponseV2.prototype['autoTopUpConfig'] = undefined;
/**
 * @member {String} accountType
 */

SourceAccountResponseV2.prototype['accountType'] = undefined;
/**
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */

SourceAccountResponseV2['CurrencyEnum'] = {
  /**
   * value: "USD"
   * @const
   */
  "USD": "USD"
};
var _default = SourceAccountResponseV2;
exports["default"] = _default;