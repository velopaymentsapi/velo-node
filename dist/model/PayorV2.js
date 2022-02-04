"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _KycState = _interopRequireDefault(require("./KycState"));

var _PaymentRails = _interopRequireDefault(require("./PaymentRails"));

var _PayorAddressV = _interopRequireDefault(require("./PayorAddressV2"));

var _TransmissionTypes = _interopRequireDefault(require("./TransmissionTypes2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PayorV2 model module.
 * @module model/PayorV2
 * @version 2.29.130
 */
var PayorV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorV2</code>.
   * @alias module:model/PayorV2
   * @param payorId {String} 
   * @param payorName {String} The name of the payor.
   */
  function PayorV2(payorId, payorName) {
    _classCallCheck(this, PayorV2);

    PayorV2.initialize(this, payorId, payorName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorV2, null, [{
    key: "initialize",
    value: function initialize(obj, payorId, payorName) {
      obj['payorId'] = payorId;
      obj['payorName'] = payorName;
    }
    /**
     * Constructs a <code>PayorV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorV2} obj Optional instance to populate.
     * @return {module:model/PayorV2} The populated <code>PayorV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorV2();

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('payorName')) {
          obj['payorName'] = _ApiClient["default"].convertToType(data['payorName'], 'String');
        }

        if (data.hasOwnProperty('payorXid')) {
          obj['payorXid'] = _ApiClient["default"].convertToType(data['payorXid'], 'String');
        }

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _PayorAddressV["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('primaryContactName')) {
          obj['primaryContactName'] = _ApiClient["default"].convertToType(data['primaryContactName'], 'String');
        }

        if (data.hasOwnProperty('primaryContactPhone')) {
          obj['primaryContactPhone'] = _ApiClient["default"].convertToType(data['primaryContactPhone'], 'String');
        }

        if (data.hasOwnProperty('primaryContactEmail')) {
          obj['primaryContactEmail'] = _ApiClient["default"].convertToType(data['primaryContactEmail'], 'String');
        }

        if (data.hasOwnProperty('kycState')) {
          obj['kycState'] = _KycState["default"].constructFromObject(data['kycState']);
        }

        if (data.hasOwnProperty('manualLockout')) {
          obj['manualLockout'] = _ApiClient["default"].convertToType(data['manualLockout'], 'Boolean');
        }

        if (data.hasOwnProperty('openBankingEnabled')) {
          obj['openBankingEnabled'] = _ApiClient["default"].convertToType(data['openBankingEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('payeeGracePeriodProcessingEnabled')) {
          obj['payeeGracePeriodProcessingEnabled'] = _ApiClient["default"].convertToType(data['payeeGracePeriodProcessingEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('payeeGracePeriodDays')) {
          obj['payeeGracePeriodDays'] = _ApiClient["default"].convertToType(data['payeeGracePeriodDays'], 'Number');
        }

        if (data.hasOwnProperty('collectiveAlias')) {
          obj['collectiveAlias'] = _ApiClient["default"].convertToType(data['collectiveAlias'], 'String');
        }

        if (data.hasOwnProperty('supportContact')) {
          obj['supportContact'] = _ApiClient["default"].convertToType(data['supportContact'], 'String');
        }

        if (data.hasOwnProperty('dbaName')) {
          obj['dbaName'] = _ApiClient["default"].convertToType(data['dbaName'], 'String');
        }

        if (data.hasOwnProperty('allowsLanguageChoice')) {
          obj['allowsLanguageChoice'] = _ApiClient["default"].convertToType(data['allowsLanguageChoice'], 'Boolean');
        }

        if (data.hasOwnProperty('reminderEmailsOptOut')) {
          obj['reminderEmailsOptOut'] = _ApiClient["default"].convertToType(data['reminderEmailsOptOut'], 'Boolean');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('includesReports')) {
          obj['includesReports'] = _ApiClient["default"].convertToType(data['includesReports'], 'Boolean');
        }

        if (data.hasOwnProperty('wuCustomerId')) {
          obj['wuCustomerId'] = _ApiClient["default"].convertToType(data['wuCustomerId'], 'String');
        }

        if (data.hasOwnProperty('maxMasterPayorAdmins')) {
          obj['maxMasterPayorAdmins'] = _ApiClient["default"].convertToType(data['maxMasterPayorAdmins'], 'Number');
        }

        if (data.hasOwnProperty('paymentRails')) {
          obj['paymentRails'] = _PaymentRails["default"].constructFromObject(data['paymentRails']);
        }

        if (data.hasOwnProperty('transmissionTypes')) {
          obj['transmissionTypes'] = _TransmissionTypes["default"].constructFromObject(data['transmissionTypes']);
        }

        if (data.hasOwnProperty('remoteSystemIds')) {
          obj['remoteSystemIds'] = _ApiClient["default"].convertToType(data['remoteSystemIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return PayorV2;
}();
/**
 * @member {String} payorId
 */


PayorV2.prototype['payorId'] = undefined;
/**
 * The name of the payor.
 * @member {String} payorName
 */

PayorV2.prototype['payorName'] = undefined;
/**
 * A unique identifier that an external system uses to reference the payor in their system
 * @member {String} payorXid
 */

PayorV2.prototype['payorXid'] = undefined;
/**
 * The source of the payorXid, default is null which means Velo
 * @member {String} provider
 */

PayorV2.prototype['provider'] = undefined;
/**
 * @member {module:model/PayorAddressV2} address
 */

PayorV2.prototype['address'] = undefined;
/**
 * Name of primary contact for the payor.
 * @member {String} primaryContactName
 */

PayorV2.prototype['primaryContactName'] = undefined;
/**
 * Primary contact phone number for the payor.
 * @member {String} primaryContactPhone
 */

PayorV2.prototype['primaryContactPhone'] = undefined;
/**
 * Primary contact email for the payor.
 * @member {String} primaryContactEmail
 */

PayorV2.prototype['primaryContactEmail'] = undefined;
/**
 * @member {module:model/KycState} kycState
 */

PayorV2.prototype['kycState'] = undefined;
/**
 * Whether or not the payor has been manually locked by the backoffice.
 * @member {Boolean} manualLockout
 */

PayorV2.prototype['manualLockout'] = undefined;
/**
 * Is Open Banking supported for this payor
 * @member {Boolean} openBankingEnabled
 */

PayorV2.prototype['openBankingEnabled'] = undefined;
/**
 * Whether grace period processing is enabled.
 * @member {Boolean} payeeGracePeriodProcessingEnabled
 */

PayorV2.prototype['payeeGracePeriodProcessingEnabled'] = undefined;
/**
 * The grace period for paying payees in days.
 * @member {Number} payeeGracePeriodDays
 */

PayorV2.prototype['payeeGracePeriodDays'] = undefined;
/**
 * How the payor has chosen to refer to payees.
 * @member {String} collectiveAlias
 */

PayorV2.prototype['collectiveAlias'] = undefined;
/**
 * The payor’s support contact email address.
 * @member {String} supportContact
 */

PayorV2.prototype['supportContact'] = undefined;
/**
 * The payor’s 'Doing Business As' name.
 * @member {String} dbaName
 */

PayorV2.prototype['dbaName'] = undefined;
/**
 * Whether or not the payor allows language choice in the UI.
 * @member {Boolean} allowsLanguageChoice
 */

PayorV2.prototype['allowsLanguageChoice'] = undefined;
/**
 * Whether or not the payor has opted-out of reminder emails being sent.
 * @member {Boolean} reminderEmailsOptOut
 */

PayorV2.prototype['reminderEmailsOptOut'] = undefined;
/**
 * The payor’s language preference. Must be one of [EN, FR].
 * @member {module:model/PayorV2.LanguageEnum} language
 */

PayorV2.prototype['language'] = undefined;
/**
 * @member {Boolean} includesReports
 */

PayorV2.prototype['includesReports'] = undefined;
/**
 * @member {String} wuCustomerId
 */

PayorV2.prototype['wuCustomerId'] = undefined;
/**
 * @member {Number} maxMasterPayorAdmins
 */

PayorV2.prototype['maxMasterPayorAdmins'] = undefined;
/**
 * @member {module:model/PaymentRails} paymentRails
 */

PayorV2.prototype['paymentRails'] = undefined;
/**
 * @member {module:model/TransmissionTypes2} transmissionTypes
 */

PayorV2.prototype['transmissionTypes'] = undefined;
/**
 * The payor’s supported remote systems by id
 * @member {Array.<String>} remoteSystemIds
 */

PayorV2.prototype['remoteSystemIds'] = undefined;
/**
 * Allowed values for the <code>language</code> property.
 * @enum {String}
 * @readonly
 */

PayorV2['LanguageEnum'] = {
  /**
   * value: "EN"
   * @const
   */
  "EN": "EN",

  /**
   * value: "FR"
   * @const
   */
  "FR": "FR"
};
var _default = PayorV2;
exports["default"] = _default;