"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Challenge = _interopRequireDefault(require("./Challenge"));

var _Company = _interopRequireDefault(require("./Company"));

var _Individual = _interopRequireDefault(require("./Individual"));

var _OnboardedStatus = _interopRequireDefault(require("./OnboardedStatus2"));

var _PayeeAddress = _interopRequireDefault(require("./PayeeAddress"));

var _PayeePayorRefV = _interopRequireDefault(require("./PayeePayorRefV3"));

var _PayeeType = _interopRequireDefault(require("./PayeeType2"));

var _WatchlistStatus = _interopRequireDefault(require("./WatchlistStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PayeeDetailResponse model module.
 * @module model/PayeeDetailResponse
 * @version 2.29.130
 */
var PayeeDetailResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeeDetailResponse</code>.
   * @alias module:model/PayeeDetailResponse
   */
  function PayeeDetailResponse() {
    _classCallCheck(this, PayeeDetailResponse);

    PayeeDetailResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeeDetailResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayeeDetailResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeDetailResponse} obj Optional instance to populate.
     * @return {module:model/PayeeDetailResponse} The populated <code>PayeeDetailResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeeDetailResponse();

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

        if (data.hasOwnProperty('watchlistStatus')) {
          obj['watchlistStatus'] = _WatchlistStatus["default"].constructFromObject(data['watchlistStatus']);
        }

        if (data.hasOwnProperty('watchlistOverrideExpiresAtTimestamp')) {
          obj['watchlistOverrideExpiresAtTimestamp'] = _ApiClient["default"].convertToType(data['watchlistOverrideExpiresAtTimestamp'], 'Date');
        }

        if (data.hasOwnProperty('watchlistOverrideComment')) {
          obj['watchlistOverrideComment'] = _ApiClient["default"].convertToType(data['watchlistOverrideComment'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
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

        if (data.hasOwnProperty('watchlistStatusUpdatedTimestamp')) {
          obj['watchlistStatusUpdatedTimestamp'] = _ApiClient["default"].convertToType(data['watchlistStatusUpdatedTimestamp'], 'String');
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

        if (data.hasOwnProperty('challenge')) {
          obj['challenge'] = _Challenge["default"].constructFromObject(data['challenge']);
        }
      }

      return obj;
    }
  }]);

  return PayeeDetailResponse;
}();
/**
 * @member {String} payeeId
 */


PayeeDetailResponse.prototype['payeeId'] = undefined;
/**
 * @member {Array.<module:model/PayeePayorRefV3>} payorRefs
 */

PayeeDetailResponse.prototype['payorRefs'] = undefined;
/**
 * @member {String} email
 */

PayeeDetailResponse.prototype['email'] = undefined;
/**
 * @member {module:model/OnboardedStatus2} onboardedStatus
 */

PayeeDetailResponse.prototype['onboardedStatus'] = undefined;
/**
 * @member {module:model/WatchlistStatus} watchlistStatus
 */

PayeeDetailResponse.prototype['watchlistStatus'] = undefined;
/**
 * @member {Date} watchlistOverrideExpiresAtTimestamp
 */

PayeeDetailResponse.prototype['watchlistOverrideExpiresAtTimestamp'] = undefined;
/**
 * @member {String} watchlistOverrideComment
 */

PayeeDetailResponse.prototype['watchlistOverrideComment'] = undefined;
/**
 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR> See the /v1/supportedLanguages endpoint to list the available codes for an environment. 
 * @member {String} language
 */

PayeeDetailResponse.prototype['language'] = undefined;
/**
 * @member {Date} created
 */

PayeeDetailResponse.prototype['created'] = undefined;
/**
 * @member {String} country
 */

PayeeDetailResponse.prototype['country'] = undefined;
/**
 * @member {String} displayName
 */

PayeeDetailResponse.prototype['displayName'] = undefined;
/**
 * @member {module:model/PayeeType2} payeeType
 */

PayeeDetailResponse.prototype['payeeType'] = undefined;
/**
 * @member {Boolean} disabled
 */

PayeeDetailResponse.prototype['disabled'] = undefined;
/**
 * @member {String} disabledComment
 */

PayeeDetailResponse.prototype['disabledComment'] = undefined;
/**
 * @member {Date} disabledUpdatedTimestamp
 */

PayeeDetailResponse.prototype['disabledUpdatedTimestamp'] = undefined;
/**
 * @member {module:model/PayeeAddress} address
 */

PayeeDetailResponse.prototype['address'] = undefined;
/**
 * @member {module:model/Individual} individual
 */

PayeeDetailResponse.prototype['individual'] = undefined;
/**
 * @member {module:model/Company} company
 */

PayeeDetailResponse.prototype['company'] = undefined;
/**
 * @member {String} cellphoneNumber
 */

PayeeDetailResponse.prototype['cellphoneNumber'] = undefined;
/**
 * @member {String} watchlistStatusUpdatedTimestamp
 */

PayeeDetailResponse.prototype['watchlistStatusUpdatedTimestamp'] = undefined;
/**
 * @member {Date} gracePeriodEndDate
 */

PayeeDetailResponse.prototype['gracePeriodEndDate'] = undefined;
/**
 * @member {Boolean} enhancedKycCompleted
 */

PayeeDetailResponse.prototype['enhancedKycCompleted'] = undefined;
/**
 * @member {String} kycCompletedTimestamp
 */

PayeeDetailResponse.prototype['kycCompletedTimestamp'] = undefined;
/**
 * @member {Boolean} pausePayment
 */

PayeeDetailResponse.prototype['pausePayment'] = undefined;
/**
 * @member {String} pausePaymentTimestamp
 */

PayeeDetailResponse.prototype['pausePaymentTimestamp'] = undefined;
/**
 * @member {Boolean} marketingOptInDecision
 */

PayeeDetailResponse.prototype['marketingOptInDecision'] = undefined;
/**
 * @member {String} marketingOptInTimestamp
 */

PayeeDetailResponse.prototype['marketingOptInTimestamp'] = undefined;
/**
 * The timestamp when the payee last accepted T&Cs
 * @member {Date} acceptTermsAndConditionsTimestamp
 */

PayeeDetailResponse.prototype['acceptTermsAndConditionsTimestamp'] = undefined;
/**
 * @member {module:model/Challenge} challenge
 */

PayeeDetailResponse.prototype['challenge'] = undefined;
var _default = PayeeDetailResponse;
exports["default"] = _default;