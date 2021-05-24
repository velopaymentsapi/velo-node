"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _KycState = _interopRequireDefault(require("./KycState"));

var _PayorAddress = _interopRequireDefault(require("./PayorAddress"));

var _TransmissionTypes = _interopRequireDefault(require("./TransmissionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayorV1 model module.
 * @module model/PayorV1
 * @version 2.26.124
 */
var PayorV1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorV1</code>.
   * @alias module:model/PayorV1
   * @param payorName {String} The name of the payor.
   */
  function PayorV1(payorName) {
    _classCallCheck(this, PayorV1);

    PayorV1.initialize(this, payorName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorV1, null, [{
    key: "initialize",
    value: function initialize(obj, payorName) {
      obj['payorName'] = payorName;
    }
    /**
     * Constructs a <code>PayorV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorV1} obj Optional instance to populate.
     * @return {module:model/PayorV1} The populated <code>PayorV1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorV1();

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('payorName')) {
          obj['payorName'] = _ApiClient["default"].convertToType(data['payorName'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _PayorAddress["default"].constructFromObject(data['address']);
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

        if (data.hasOwnProperty('fundingAccountRoutingNumber')) {
          obj['fundingAccountRoutingNumber'] = _ApiClient["default"].convertToType(data['fundingAccountRoutingNumber'], 'String');
        }

        if (data.hasOwnProperty('fundingAccountAccountNumber')) {
          obj['fundingAccountAccountNumber'] = _ApiClient["default"].convertToType(data['fundingAccountAccountNumber'], 'String');
        }

        if (data.hasOwnProperty('fundingAccountAccountName')) {
          obj['fundingAccountAccountName'] = _ApiClient["default"].convertToType(data['fundingAccountAccountName'], 'String');
        }

        if (data.hasOwnProperty('kycState')) {
          obj['kycState'] = _KycState["default"].constructFromObject(data['kycState']);
        }

        if (data.hasOwnProperty('manualLockout')) {
          obj['manualLockout'] = _ApiClient["default"].convertToType(data['manualLockout'], 'Boolean');
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

        if (data.hasOwnProperty('maxMasterPayorAdmins')) {
          obj['maxMasterPayorAdmins'] = _ApiClient["default"].convertToType(data['maxMasterPayorAdmins'], 'Number');
        }

        if (data.hasOwnProperty('transmissionTypes')) {
          obj['transmissionTypes'] = _TransmissionTypes["default"].constructFromObject(data['transmissionTypes']);
        }
      }

      return obj;
    }
  }]);

  return PayorV1;
}();
/**
 * @member {String} payorId
 */


PayorV1.prototype['payorId'] = undefined;
/**
 * The name of the payor.
 * @member {String} payorName
 */

PayorV1.prototype['payorName'] = undefined;
/**
 * @member {module:model/PayorAddress} address
 */

PayorV1.prototype['address'] = undefined;
/**
 * Name of primary contact for the payor.
 * @member {String} primaryContactName
 */

PayorV1.prototype['primaryContactName'] = undefined;
/**
 * Primary contact phone number for the payor.
 * @member {String} primaryContactPhone
 */

PayorV1.prototype['primaryContactPhone'] = undefined;
/**
 * Primary contact email for the payor.
 * @member {String} primaryContactEmail
 */

PayorV1.prototype['primaryContactEmail'] = undefined;
/**
 * The funding account routing number to be used for the payor.
 * @member {String} fundingAccountRoutingNumber
 */

PayorV1.prototype['fundingAccountRoutingNumber'] = undefined;
/**
 * The funding account number to be used for the payor.
 * @member {String} fundingAccountAccountNumber
 */

PayorV1.prototype['fundingAccountAccountNumber'] = undefined;
/**
 * The funding account name to be used for the payor.
 * @member {String} fundingAccountAccountName
 */

PayorV1.prototype['fundingAccountAccountName'] = undefined;
/**
 * @member {module:model/KycState} kycState
 */

PayorV1.prototype['kycState'] = undefined;
/**
 * Whether or not the payor has been manually locked by the backoffice.
 * @member {Boolean} manualLockout
 */

PayorV1.prototype['manualLockout'] = undefined;
/**
 * Whether grace period processing is enabled.
 * @member {Boolean} payeeGracePeriodProcessingEnabled
 */

PayorV1.prototype['payeeGracePeriodProcessingEnabled'] = undefined;
/**
 * The grace period for paying payees in days.
 * @member {Number} payeeGracePeriodDays
 */

PayorV1.prototype['payeeGracePeriodDays'] = undefined;
/**
 * How the payor has chosen to refer to payees.
 * @member {String} collectiveAlias
 */

PayorV1.prototype['collectiveAlias'] = undefined;
/**
 * The payor’s support contact email address.
 * @member {String} supportContact
 */

PayorV1.prototype['supportContact'] = undefined;
/**
 * The payor’s 'Doing Business As' name.
 * @member {String} dbaName
 */

PayorV1.prototype['dbaName'] = undefined;
/**
 * Whether or not the payor allows language choice in the UI.
 * @member {Boolean} allowsLanguageChoice
 */

PayorV1.prototype['allowsLanguageChoice'] = undefined;
/**
 * Whether or not the payor has opted-out of reminder emails being sent.
 * @member {Boolean} reminderEmailsOptOut
 */

PayorV1.prototype['reminderEmailsOptOut'] = undefined;
/**
 * The payor’s language preference. Must be one of [EN, FR].
 * @member {module:model/PayorV1.LanguageEnum} language
 */

PayorV1.prototype['language'] = undefined;
/**
 * @member {Boolean} includesReports
 */

PayorV1.prototype['includesReports'] = undefined;
/**
 * @member {Number} maxMasterPayorAdmins
 */

PayorV1.prototype['maxMasterPayorAdmins'] = undefined;
/**
 * @member {module:model/TransmissionTypes} transmissionTypes
 */

PayorV1.prototype['transmissionTypes'] = undefined;
/**
 * Allowed values for the <code>language</code> property.
 * @enum {String}
 * @readonly
 */

PayorV1['LanguageEnum'] = {
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
var _default = PayorV1;
exports["default"] = _default;