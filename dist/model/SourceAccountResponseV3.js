"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AutoTopUpConfig = _interopRequireDefault(require("./AutoTopUpConfig2"));

var _Notifications = _interopRequireDefault(require("./Notifications2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SourceAccountResponseV3 model module.
 * @module model/SourceAccountResponseV3
 * @version 2.29.128
 */
var SourceAccountResponseV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SourceAccountResponseV3</code>.
   * @alias module:model/SourceAccountResponseV3
   * @param id {String} Source Account Id
   * @param railsId {String} 
   * @param type {String} 
   */
  function SourceAccountResponseV3(id, railsId, type) {
    _classCallCheck(this, SourceAccountResponseV3);

    SourceAccountResponseV3.initialize(this, id, railsId, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SourceAccountResponseV3, null, [{
    key: "initialize",
    value: function initialize(obj, id, railsId, type) {
      obj['id'] = id;
      obj['railsId'] = railsId;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>SourceAccountResponseV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceAccountResponseV3} obj Optional instance to populate.
     * @return {module:model/SourceAccountResponseV3} The populated <code>SourceAccountResponseV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SourceAccountResponseV3();

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

        if (data.hasOwnProperty('customerId')) {
          obj['customerId'] = _ApiClient["default"].convertToType(data['customerId'], 'String');
        }

        if (data.hasOwnProperty('physicalAccountId')) {
          obj['physicalAccountId'] = _ApiClient["default"].convertToType(data['physicalAccountId'], 'String');
        }

        if (data.hasOwnProperty('notifications')) {
          obj['notifications'] = _Notifications["default"].constructFromObject(data['notifications']);
        }

        if (data.hasOwnProperty('autoTopUpConfig')) {
          obj['autoTopUpConfig'] = _AutoTopUpConfig["default"].constructFromObject(data['autoTopUpConfig']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('userDeleted')) {
          obj['userDeleted'] = _ApiClient["default"].convertToType(data['userDeleted'], 'Boolean');
        }

        if (data.hasOwnProperty('deletedAt')) {
          obj['deletedAt'] = _ApiClient["default"].convertToType(data['deletedAt'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return SourceAccountResponseV3;
}();
/**
 * Source Account Id
 * @member {String} id
 */


SourceAccountResponseV3.prototype['id'] = undefined;
/**
 * Decimal implied
 * @member {Number} balance
 */

SourceAccountResponseV3.prototype['balance'] = undefined;
/**
 * @member {module:model/SourceAccountResponseV3.CurrencyEnum} currency
 */

SourceAccountResponseV3.prototype['currency'] = undefined;
/**
 * The funding reference (will not be set for DECOUPLED accounts).
 * @member {String} fundingRef
 */

SourceAccountResponseV3.prototype['fundingRef'] = undefined;
/**
 * The physical account name (will not be set for DECOUPLED accounts).
 * @member {String} physicalAccountName
 */

SourceAccountResponseV3.prototype['physicalAccountName'] = undefined;
/**
 * @member {String} railsId
 */

SourceAccountResponseV3.prototype['railsId'] = undefined;
/**
 * @member {String} payorId
 */

SourceAccountResponseV3.prototype['payorId'] = undefined;
/**
 * @member {String} name
 */

SourceAccountResponseV3.prototype['name'] = undefined;
/**
 * The pooled account flag (will not be set for DECOUPLED accounts).
 * @member {Boolean} pooled
 */

SourceAccountResponseV3.prototype['pooled'] = undefined;
/**
 * @member {String} customerId
 */

SourceAccountResponseV3.prototype['customerId'] = undefined;
/**
 * The physical account id (will not be set for DECOUPLED accounts).
 * @member {String} physicalAccountId
 */

SourceAccountResponseV3.prototype['physicalAccountId'] = undefined;
/**
 * @member {module:model/Notifications2} notifications
 */

SourceAccountResponseV3.prototype['notifications'] = undefined;
/**
 * @member {module:model/AutoTopUpConfig2} autoTopUpConfig
 */

SourceAccountResponseV3.prototype['autoTopUpConfig'] = undefined;
/**
 * @member {String} type
 */

SourceAccountResponseV3.prototype['type'] = undefined;
/**
 * The two character ISO country code for the associated account
 * @member {String} country
 */

SourceAccountResponseV3.prototype['country'] = undefined;
/**
 * An optional flag for whether the source account has been deleted. Only present in the response if true.
 * @member {Boolean} deleted
 */

SourceAccountResponseV3.prototype['deleted'] = undefined;
/**
 * An optional flag for whether the source account has been deleted by a user. Only present in the response if true.
 * @member {Boolean} userDeleted
 */

SourceAccountResponseV3.prototype['userDeleted'] = undefined;
/**
 * An optional timestamp when the source account has been deleted. Only present in the response if deleted.
 * @member {Date} deletedAt
 */

SourceAccountResponseV3.prototype['deletedAt'] = undefined;
/**
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */

SourceAccountResponseV3['CurrencyEnum'] = {
  /**
   * value: "USD"
   * @const
   */
  "USD": "USD",

  /**
   * value: "EUR"
   * @const
   */
  "EUR": "EUR",

  /**
   * value: "GBP"
   * @const
   */
  "GBP": "GBP",

  /**
   * value: "CAD"
   * @const
   */
  "CAD": "CAD",

  /**
   * value: "HKD"
   * @const
   */
  "HKD": "HKD"
};
var _default = SourceAccountResponseV3;
exports["default"] = _default;