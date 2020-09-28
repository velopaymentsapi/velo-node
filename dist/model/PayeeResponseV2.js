"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Company = _interopRequireDefault(require("./Company"));

var _Individual = _interopRequireDefault(require("./Individual"));

var _Language = _interopRequireDefault(require("./Language2"));

var _OfacStatus = _interopRequireDefault(require("./OfacStatus2"));

var _OnboardedStatus = _interopRequireDefault(require("./OnboardedStatus2"));

var _PayeeAddress = _interopRequireDefault(require("./PayeeAddress2"));

var _PayeePayorRefV = _interopRequireDefault(require("./PayeePayorRefV2"));

var _PayeeType = _interopRequireDefault(require("./PayeeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayeeResponseV2 model module.
 * @module model/PayeeResponseV2
 * @version 2.23.78
 */
var PayeeResponseV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeeResponseV2</code>.
   * @alias module:model/PayeeResponseV2
   */
  function PayeeResponseV2() {
    _classCallCheck(this, PayeeResponseV2);

    PayeeResponseV2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeeResponseV2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayeeResponseV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeResponseV2} obj Optional instance to populate.
     * @return {module:model/PayeeResponseV2} The populated <code>PayeeResponseV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeeResponseV2();

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('payorRefs')) {
          obj['payorRefs'] = _ApiClient["default"].convertToType(data['payorRefs'], [_PayeePayorRefV["default"]]);
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('onboardedStatus')) {
          obj['onboardedStatus'] = _OnboardedStatus["default"].constructFromObject(data['onboardedStatus']);
        }

        if (data.hasOwnProperty('ofacStatus')) {
          obj['ofacStatus'] = _OfacStatus["default"].constructFromObject(data['ofacStatus']);
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _Language["default"].constructFromObject(data['language']);
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('payeeType')) {
          obj['payeeType'] = _PayeeType["default"].constructFromObject(data['payeeType']);
        }

        if (data.hasOwnProperty('disabled')) {
          obj['disabled'] = _ApiClient["default"].convertToType(data['disabled'], 'Boolean');
        }

        if (data.hasOwnProperty('disabledComment')) {
          obj['disabledComment'] = _ApiClient["default"].convertToType(data['disabledComment'], 'String');
        }

        if (data.hasOwnProperty('disabledUpdatedTimestamp')) {
          obj['disabledUpdatedTimestamp'] = _ApiClient["default"].convertToType(data['disabledUpdatedTimestamp'], 'Date');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _PayeeAddress["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('individual')) {
          obj['individual'] = _Individual["default"].constructFromObject(data['individual']);
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _Company["default"].constructFromObject(data['company']);
        }

        if (data.hasOwnProperty('cellphoneNumber')) {
          obj['cellphoneNumber'] = _ApiClient["default"].convertToType(data['cellphoneNumber'], 'String');
        }

        if (data.hasOwnProperty('lastOfacCheckTimestamp')) {
          obj['lastOfacCheckTimestamp'] = _ApiClient["default"].convertToType(data['lastOfacCheckTimestamp'], 'String');
        }

        if (data.hasOwnProperty('ofacOverride')) {
          obj['ofacOverride'] = _ApiClient["default"].convertToType(data['ofacOverride'], 'Boolean');
        }

        if (data.hasOwnProperty('ofacOverrideReason')) {
          obj['ofacOverrideReason'] = _ApiClient["default"].convertToType(data['ofacOverrideReason'], 'String');
        }

        if (data.hasOwnProperty('ofacOverrideTimestamp')) {
          obj['ofacOverrideTimestamp'] = _ApiClient["default"].convertToType(data['ofacOverrideTimestamp'], 'String');
        }

        if (data.hasOwnProperty('gracePeriodEndDate')) {
          obj['gracePeriodEndDate'] = _ApiClient["default"].convertToType(data['gracePeriodEndDate'], 'Date');
        }

        if (data.hasOwnProperty('enhancedKycCompleted')) {
          obj['enhancedKycCompleted'] = _ApiClient["default"].convertToType(data['enhancedKycCompleted'], 'Boolean');
        }

        if (data.hasOwnProperty('kycCompletedTimestamp')) {
          obj['kycCompletedTimestamp'] = _ApiClient["default"].convertToType(data['kycCompletedTimestamp'], 'String');
        }

        if (data.hasOwnProperty('pausePayment')) {
          obj['pausePayment'] = _ApiClient["default"].convertToType(data['pausePayment'], 'Boolean');
        }

        if (data.hasOwnProperty('pausePaymentTimestamp')) {
          obj['pausePaymentTimestamp'] = _ApiClient["default"].convertToType(data['pausePaymentTimestamp'], 'String');
        }

        if (data.hasOwnProperty('marketingOptInDecision')) {
          obj['marketingOptInDecision'] = _ApiClient["default"].convertToType(data['marketingOptInDecision'], 'Boolean');
        }

        if (data.hasOwnProperty('marketingOptInTimestamp')) {
          obj['marketingOptInTimestamp'] = _ApiClient["default"].convertToType(data['marketingOptInTimestamp'], 'String');
        }

        if (data.hasOwnProperty('acceptTermsAndConditionsTimestamp')) {
          obj['acceptTermsAndConditionsTimestamp'] = _ApiClient["default"].convertToType(data['acceptTermsAndConditionsTimestamp'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return PayeeResponseV2;
}();
/**
 * @member {String} payeeId
 */


PayeeResponseV2.prototype['payeeId'] = undefined;
/**
 * @member {Array.<module:model/PayeePayorRefV2>} payorRefs
 */

PayeeResponseV2.prototype['payorRefs'] = undefined;
/**
 * @member {String} email
 */

PayeeResponseV2.prototype['email'] = undefined;
/**
 * @member {module:model/OnboardedStatus2} onboardedStatus
 */

PayeeResponseV2.prototype['onboardedStatus'] = undefined;
/**
 * @member {module:model/OfacStatus2} ofacStatus
 */

PayeeResponseV2.prototype['ofacStatus'] = undefined;
/**
 * @member {module:model/Language2} language
 */

PayeeResponseV2.prototype['language'] = undefined;
/**
 * @member {Date} created
 */

PayeeResponseV2.prototype['created'] = undefined;
/**
 * @member {String} country
 */

PayeeResponseV2.prototype['country'] = undefined;
/**
 * @member {String} displayName
 */

PayeeResponseV2.prototype['displayName'] = undefined;
/**
 * @member {module:model/PayeeType} payeeType
 */

PayeeResponseV2.prototype['payeeType'] = undefined;
/**
 * @member {Boolean} disabled
 */

PayeeResponseV2.prototype['disabled'] = undefined;
/**
 * @member {String} disabledComment
 */

PayeeResponseV2.prototype['disabledComment'] = undefined;
/**
 * @member {Date} disabledUpdatedTimestamp
 */

PayeeResponseV2.prototype['disabledUpdatedTimestamp'] = undefined;
/**
 * @member {module:model/PayeeAddress2} address
 */

PayeeResponseV2.prototype['address'] = undefined;
/**
 * @member {module:model/Individual} individual
 */

PayeeResponseV2.prototype['individual'] = undefined;
/**
 * @member {module:model/Company} company
 */

PayeeResponseV2.prototype['company'] = undefined;
/**
 * @member {String} cellphoneNumber
 */

PayeeResponseV2.prototype['cellphoneNumber'] = undefined;
/**
 * @member {String} lastOfacCheckTimestamp
 */

PayeeResponseV2.prototype['lastOfacCheckTimestamp'] = undefined;
/**
 * @member {Boolean} ofacOverride
 */

PayeeResponseV2.prototype['ofacOverride'] = undefined;
/**
 * @member {String} ofacOverrideReason
 */

PayeeResponseV2.prototype['ofacOverrideReason'] = undefined;
/**
 * @member {String} ofacOverrideTimestamp
 */

PayeeResponseV2.prototype['ofacOverrideTimestamp'] = undefined;
/**
 * @member {Date} gracePeriodEndDate
 */

PayeeResponseV2.prototype['gracePeriodEndDate'] = undefined;
/**
 * @member {Boolean} enhancedKycCompleted
 */

PayeeResponseV2.prototype['enhancedKycCompleted'] = undefined;
/**
 * @member {String} kycCompletedTimestamp
 */

PayeeResponseV2.prototype['kycCompletedTimestamp'] = undefined;
/**
 * @member {Boolean} pausePayment
 */

PayeeResponseV2.prototype['pausePayment'] = undefined;
/**
 * @member {String} pausePaymentTimestamp
 */

PayeeResponseV2.prototype['pausePaymentTimestamp'] = undefined;
/**
 * @member {Boolean} marketingOptInDecision
 */

PayeeResponseV2.prototype['marketingOptInDecision'] = undefined;
/**
 * @member {String} marketingOptInTimestamp
 */

PayeeResponseV2.prototype['marketingOptInTimestamp'] = undefined;
/**
 * The timestamp when the payee last accepted T&Cs
 * @member {Date} acceptTermsAndConditionsTimestamp
 */

PayeeResponseV2.prototype['acceptTermsAndConditionsTimestamp'] = undefined;
var _default = PayeeResponseV2;
exports["default"] = _default;