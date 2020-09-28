"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Challenge = _interopRequireDefault(require("./Challenge2"));

var _Company = _interopRequireDefault(require("./Company2"));

var _Individual = _interopRequireDefault(require("./Individual2"));

var _Language = _interopRequireDefault(require("./Language2"));

var _OnboardedStatus = _interopRequireDefault(require("./OnboardedStatus2"));

var _PayeeAddress = _interopRequireDefault(require("./PayeeAddress2"));

var _PayeePayorRef = _interopRequireDefault(require("./PayeePayorRef2"));

var _PayeeType = _interopRequireDefault(require("./PayeeType"));

var _WatchlistStatus = _interopRequireDefault(require("./WatchlistStatus2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayeeDetailResponse2 model module.
 * @module model/PayeeDetailResponse2
 * @version 2.23.78
 */
var PayeeDetailResponse2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeeDetailResponse2</code>.
   * @alias module:model/PayeeDetailResponse2
   */
  function PayeeDetailResponse2() {
    _classCallCheck(this, PayeeDetailResponse2);

    PayeeDetailResponse2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeeDetailResponse2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayeeDetailResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeDetailResponse2} obj Optional instance to populate.
     * @return {module:model/PayeeDetailResponse2} The populated <code>PayeeDetailResponse2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeeDetailResponse2();

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('payorRefs')) {
          obj['payorRefs'] = _ApiClient["default"].convertToType(data['payorRefs'], [_PayeePayorRef["default"]]);
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

  return PayeeDetailResponse2;
}();
/**
 * @member {String} payeeId
 */


PayeeDetailResponse2.prototype['payeeId'] = undefined;
/**
 * @member {Array.<module:model/PayeePayorRef2>} payorRefs
 */

PayeeDetailResponse2.prototype['payorRefs'] = undefined;
/**
 * @member {String} email
 */

PayeeDetailResponse2.prototype['email'] = undefined;
/**
 * @member {module:model/OnboardedStatus2} onboardedStatus
 */

PayeeDetailResponse2.prototype['onboardedStatus'] = undefined;
/**
 * @member {module:model/WatchlistStatus2} watchlistStatus
 */

PayeeDetailResponse2.prototype['watchlistStatus'] = undefined;
/**
 * @member {Date} watchlistOverrideExpiresAtTimestamp
 */

PayeeDetailResponse2.prototype['watchlistOverrideExpiresAtTimestamp'] = undefined;
/**
 * @member {String} watchlistOverrideComment
 */

PayeeDetailResponse2.prototype['watchlistOverrideComment'] = undefined;
/**
 * @member {module:model/Language2} language
 */

PayeeDetailResponse2.prototype['language'] = undefined;
/**
 * @member {Date} created
 */

PayeeDetailResponse2.prototype['created'] = undefined;
/**
 * @member {String} country
 */

PayeeDetailResponse2.prototype['country'] = undefined;
/**
 * @member {String} displayName
 */

PayeeDetailResponse2.prototype['displayName'] = undefined;
/**
 * @member {module:model/PayeeType} payeeType
 */

PayeeDetailResponse2.prototype['payeeType'] = undefined;
/**
 * @member {Boolean} disabled
 */

PayeeDetailResponse2.prototype['disabled'] = undefined;
/**
 * @member {String} disabledComment
 */

PayeeDetailResponse2.prototype['disabledComment'] = undefined;
/**
 * @member {Date} disabledUpdatedTimestamp
 */

PayeeDetailResponse2.prototype['disabledUpdatedTimestamp'] = undefined;
/**
 * @member {module:model/PayeeAddress2} address
 */

PayeeDetailResponse2.prototype['address'] = undefined;
/**
 * @member {module:model/Individual2} individual
 */

PayeeDetailResponse2.prototype['individual'] = undefined;
/**
 * @member {module:model/Company2} company
 */

PayeeDetailResponse2.prototype['company'] = undefined;
/**
 * @member {String} cellphoneNumber
 */

PayeeDetailResponse2.prototype['cellphoneNumber'] = undefined;
/**
 * @member {String} watchlistStatusUpdatedTimestamp
 */

PayeeDetailResponse2.prototype['watchlistStatusUpdatedTimestamp'] = undefined;
/**
 * @member {Date} gracePeriodEndDate
 */

PayeeDetailResponse2.prototype['gracePeriodEndDate'] = undefined;
/**
 * @member {Boolean} enhancedKycCompleted
 */

PayeeDetailResponse2.prototype['enhancedKycCompleted'] = undefined;
/**
 * @member {String} kycCompletedTimestamp
 */

PayeeDetailResponse2.prototype['kycCompletedTimestamp'] = undefined;
/**
 * @member {Boolean} pausePayment
 */

PayeeDetailResponse2.prototype['pausePayment'] = undefined;
/**
 * @member {String} pausePaymentTimestamp
 */

PayeeDetailResponse2.prototype['pausePaymentTimestamp'] = undefined;
/**
 * @member {Boolean} marketingOptInDecision
 */

PayeeDetailResponse2.prototype['marketingOptInDecision'] = undefined;
/**
 * @member {String} marketingOptInTimestamp
 */

PayeeDetailResponse2.prototype['marketingOptInTimestamp'] = undefined;
/**
 * The timestamp when the payee last accepted T&Cs
 * @member {Date} acceptTermsAndConditionsTimestamp
 */

PayeeDetailResponse2.prototype['acceptTermsAndConditionsTimestamp'] = undefined;
/**
 * @member {module:model/Challenge2} challenge
 */

PayeeDetailResponse2.prototype['challenge'] = undefined;
var _default = PayeeDetailResponse2;
exports["default"] = _default;