"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Challenge = _interopRequireDefault(require("./Challenge"));

var _CompanyResponse = _interopRequireDefault(require("./CompanyResponse"));

var _IndividualResponse = _interopRequireDefault(require("./IndividualResponse"));

var _Language = _interopRequireDefault(require("./Language"));

var _MarketingOptIn = _interopRequireDefault(require("./MarketingOptIn"));

var _OfacStatus = _interopRequireDefault(require("./OfacStatus"));

var _OnboardedStatus = _interopRequireDefault(require("./OnboardedStatus"));

var _PayeeAddress = _interopRequireDefault(require("./PayeeAddress"));

var _PayeePaymentChannel = _interopRequireDefault(require("./PayeePaymentChannel"));

var _PayeePayorRef = _interopRequireDefault(require("./PayeePayorRef"));

var _PayeeType = _interopRequireDefault(require("./PayeeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayeeResponse model module.
 * @module model/PayeeResponse
 * @version 2.23.78
 */
var PayeeResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeeResponse</code>.
   * @alias module:model/PayeeResponse
   */
  function PayeeResponse() {
    _classCallCheck(this, PayeeResponse);

    PayeeResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeeResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayeeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeResponse} obj Optional instance to populate.
     * @return {module:model/PayeeResponse} The populated <code>PayeeResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeeResponse();

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('payorRefs')) {
          obj['payorRefs'] = _ApiClient["default"].convertToType(data['payorRefs'], [_PayeePayorRef["default"]]);
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _PayeeAddress["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('paymentChannel')) {
          obj['paymentChannel'] = _PayeePaymentChannel["default"].constructFromObject(data['paymentChannel']);
        }

        if (data.hasOwnProperty('challenge')) {
          obj['challenge'] = _Challenge["default"].constructFromObject(data['challenge']);
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _Language["default"].constructFromObject(data['language']);
        }

        if (data.hasOwnProperty('acceptTermsAndConditionsTimestamp')) {
          obj['acceptTermsAndConditionsTimestamp'] = _ApiClient["default"].convertToType(data['acceptTermsAndConditionsTimestamp'], 'Date');
        }

        if (data.hasOwnProperty('cellphoneNumber')) {
          obj['cellphoneNumber'] = _ApiClient["default"].convertToType(data['cellphoneNumber'], 'String');
        }

        if (data.hasOwnProperty('payeeType')) {
          obj['payeeType'] = _PayeeType["default"].constructFromObject(data['payeeType']);
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _CompanyResponse["default"].constructFromObject(data['company']);
        }

        if (data.hasOwnProperty('individual')) {
          obj['individual'] = _IndividualResponse["default"].constructFromObject(data['individual']);
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('gracePeriodEndDate')) {
          obj['gracePeriodEndDate'] = _ApiClient["default"].convertToType(data['gracePeriodEndDate'], 'Date');
        }

        if (data.hasOwnProperty('lastOfacCheckTimestamp')) {
          obj['lastOfacCheckTimestamp'] = _ApiClient["default"].convertToType(data['lastOfacCheckTimestamp'], 'String');
        }

        if (data.hasOwnProperty('marketingOptIns')) {
          obj['marketingOptIns'] = _ApiClient["default"].convertToType(data['marketingOptIns'], [_MarketingOptIn["default"]]);
        }

        if (data.hasOwnProperty('ofacStatus')) {
          obj['ofacStatus'] = _OfacStatus["default"].constructFromObject(data['ofacStatus']);
        }

        if (data.hasOwnProperty('onboardedStatus')) {
          obj['onboardedStatus'] = _OnboardedStatus["default"].constructFromObject(data['onboardedStatus']);
        }
      }

      return obj;
    }
  }]);

  return PayeeResponse;
}();
/**
 * @member {String} payeeId
 */


PayeeResponse.prototype['payeeId'] = undefined;
/**
 * @member {Array.<module:model/PayeePayorRef>} payorRefs
 */

PayeeResponse.prototype['payorRefs'] = undefined;
/**
 * @member {String} email
 */

PayeeResponse.prototype['email'] = undefined;
/**
 * @member {module:model/PayeeAddress} address
 */

PayeeResponse.prototype['address'] = undefined;
/**
 * @member {String} country
 */

PayeeResponse.prototype['country'] = undefined;
/**
 * @member {String} displayName
 */

PayeeResponse.prototype['displayName'] = undefined;
/**
 * @member {module:model/PayeePaymentChannel} paymentChannel
 */

PayeeResponse.prototype['paymentChannel'] = undefined;
/**
 * @member {module:model/Challenge} challenge
 */

PayeeResponse.prototype['challenge'] = undefined;
/**
 * @member {module:model/Language} language
 */

PayeeResponse.prototype['language'] = undefined;
/**
 * The timestamp when the payee last accepted T&Cs
 * @member {Date} acceptTermsAndConditionsTimestamp
 */

PayeeResponse.prototype['acceptTermsAndConditionsTimestamp'] = undefined;
/**
 * @member {String} cellphoneNumber
 */

PayeeResponse.prototype['cellphoneNumber'] = undefined;
/**
 * @member {module:model/PayeeType} payeeType
 */

PayeeResponse.prototype['payeeType'] = undefined;
/**
 * @member {module:model/CompanyResponse} company
 */

PayeeResponse.prototype['company'] = undefined;
/**
 * @member {module:model/IndividualResponse} individual
 */

PayeeResponse.prototype['individual'] = undefined;
/**
 * @member {Date} created
 */

PayeeResponse.prototype['created'] = undefined;
/**
 * @member {Date} gracePeriodEndDate
 */

PayeeResponse.prototype['gracePeriodEndDate'] = undefined;
/**
 * @member {String} lastOfacCheckTimestamp
 */

PayeeResponse.prototype['lastOfacCheckTimestamp'] = undefined;
/**
 * @member {Array.<module:model/MarketingOptIn>} marketingOptIns
 */

PayeeResponse.prototype['marketingOptIns'] = undefined;
/**
 * @member {module:model/OfacStatus} ofacStatus
 */

PayeeResponse.prototype['ofacStatus'] = undefined;
/**
 * @member {module:model/OnboardedStatus} onboardedStatus
 */

PayeeResponse.prototype['onboardedStatus'] = undefined;
var _default = PayeeResponse;
exports["default"] = _default;