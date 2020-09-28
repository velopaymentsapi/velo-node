"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Challenge = _interopRequireDefault(require("./Challenge"));

var _CompanyV = _interopRequireDefault(require("./CompanyV1"));

var _IndividualV = _interopRequireDefault(require("./IndividualV1"));

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
 * The Payee model module.
 * @module model/Payee
 * @version 2.23.78
 */
var Payee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Payee</code>.
   * @alias module:model/Payee
   */
  function Payee() {
    _classCallCheck(this, Payee);

    Payee.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Payee, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Payee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Payee} obj Optional instance to populate.
     * @return {module:model/Payee} The populated <code>Payee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Payee();

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
          obj['company'] = _CompanyV["default"].constructFromObject(data['company']);
        }

        if (data.hasOwnProperty('individual')) {
          obj['individual'] = _IndividualV["default"].constructFromObject(data['individual']);
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

  return Payee;
}();
/**
 * @member {String} payeeId
 */


Payee.prototype['payeeId'] = undefined;
/**
 * @member {Array.<module:model/PayeePayorRef>} payorRefs
 */

Payee.prototype['payorRefs'] = undefined;
/**
 * @member {String} email
 */

Payee.prototype['email'] = undefined;
/**
 * @member {module:model/PayeeAddress} address
 */

Payee.prototype['address'] = undefined;
/**
 * @member {String} country
 */

Payee.prototype['country'] = undefined;
/**
 * @member {String} displayName
 */

Payee.prototype['displayName'] = undefined;
/**
 * @member {module:model/PayeePaymentChannel} paymentChannel
 */

Payee.prototype['paymentChannel'] = undefined;
/**
 * @member {module:model/Challenge} challenge
 */

Payee.prototype['challenge'] = undefined;
/**
 * @member {module:model/Language} language
 */

Payee.prototype['language'] = undefined;
/**
 * The timestamp when the payee last accepted T&Cs
 * @member {Date} acceptTermsAndConditionsTimestamp
 */

Payee.prototype['acceptTermsAndConditionsTimestamp'] = undefined;
/**
 * @member {String} cellphoneNumber
 */

Payee.prototype['cellphoneNumber'] = undefined;
/**
 * @member {module:model/PayeeType} payeeType
 */

Payee.prototype['payeeType'] = undefined;
/**
 * @member {module:model/CompanyV1} company
 */

Payee.prototype['company'] = undefined;
/**
 * @member {module:model/IndividualV1} individual
 */

Payee.prototype['individual'] = undefined;
/**
 * @member {Date} created
 */

Payee.prototype['created'] = undefined;
/**
 * @member {Date} gracePeriodEndDate
 */

Payee.prototype['gracePeriodEndDate'] = undefined;
/**
 * @member {String} lastOfacCheckTimestamp
 */

Payee.prototype['lastOfacCheckTimestamp'] = undefined;
/**
 * @member {Array.<module:model/MarketingOptIn>} marketingOptIns
 */

Payee.prototype['marketingOptIns'] = undefined;
/**
 * @member {module:model/OfacStatus} ofacStatus
 */

Payee.prototype['ofacStatus'] = undefined;
/**
 * @member {module:model/OnboardedStatus} onboardedStatus
 */

Payee.prototype['onboardedStatus'] = undefined;
var _default = Payee;
exports["default"] = _default;