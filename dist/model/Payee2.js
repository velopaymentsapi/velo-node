"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Challenge = _interopRequireDefault(require("./Challenge"));

var _CompanyV = _interopRequireDefault(require("./CompanyV1"));

var _IndividualV = _interopRequireDefault(require("./IndividualV1"));

var _Language = _interopRequireDefault(require("./Language2"));

var _MarketingOptIn = _interopRequireDefault(require("./MarketingOptIn"));

var _OnboardedStatus = _interopRequireDefault(require("./OnboardedStatus"));

var _PayeeAddress = _interopRequireDefault(require("./PayeeAddress"));

var _PayeePaymentChannel = _interopRequireDefault(require("./PayeePaymentChannel2"));

var _PayeePayorRefV = _interopRequireDefault(require("./PayeePayorRefV2"));

var _PayeeType = _interopRequireDefault(require("./PayeeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Payee2 model module.
 * @module model/Payee2
 * @version 2.23.78
 */
var Payee2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Payee2</code>.
   * @alias module:model/Payee2
   */
  function Payee2() {
    _classCallCheck(this, Payee2);

    Payee2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Payee2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Payee2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Payee2} obj Optional instance to populate.
     * @return {module:model/Payee2} The populated <code>Payee2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Payee2();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('payorRefs')) {
          obj['payorRefs'] = _ApiClient["default"].convertToType(data['payorRefs'], [_PayeePayorRefV["default"]]);
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

        if (data.hasOwnProperty('watchlistStatusUpdatedTimestamp')) {
          obj['watchlistStatusUpdatedTimestamp'] = _ApiClient["default"].convertToType(data['watchlistStatusUpdatedTimestamp'], 'String');
        }

        if (data.hasOwnProperty('marketingOptIns')) {
          obj['marketingOptIns'] = _ApiClient["default"].convertToType(data['marketingOptIns'], [_MarketingOptIn["default"]]);
        }

        if (data.hasOwnProperty('onboardedStatus')) {
          obj['onboardedStatus'] = _OnboardedStatus["default"].constructFromObject(data['onboardedStatus']);
        }

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Payee2;
}();
/**
 * @member {module:model/Payee2.TypeEnum} type
 */


Payee2.prototype['type'] = undefined;
/**
 * @member {String} payeeId
 */

Payee2.prototype['payeeId'] = undefined;
/**
 * @member {Array.<module:model/PayeePayorRefV2>} payorRefs
 */

Payee2.prototype['payorRefs'] = undefined;
/**
 * @member {String} email
 */

Payee2.prototype['email'] = undefined;
/**
 * @member {module:model/PayeeAddress} address
 */

Payee2.prototype['address'] = undefined;
/**
 * @member {String} country
 */

Payee2.prototype['country'] = undefined;
/**
 * @member {String} displayName
 */

Payee2.prototype['displayName'] = undefined;
/**
 * @member {module:model/PayeePaymentChannel2} paymentChannel
 */

Payee2.prototype['paymentChannel'] = undefined;
/**
 * @member {module:model/Challenge} challenge
 */

Payee2.prototype['challenge'] = undefined;
/**
 * @member {module:model/Language2} language
 */

Payee2.prototype['language'] = undefined;
/**
 * The timestamp when the payee last accepted T&Cs
 * @member {Date} acceptTermsAndConditionsTimestamp
 */

Payee2.prototype['acceptTermsAndConditionsTimestamp'] = undefined;
/**
 * @member {String} cellphoneNumber
 */

Payee2.prototype['cellphoneNumber'] = undefined;
/**
 * @member {module:model/PayeeType} payeeType
 */

Payee2.prototype['payeeType'] = undefined;
/**
 * @member {module:model/CompanyV1} company
 */

Payee2.prototype['company'] = undefined;
/**
 * @member {module:model/IndividualV1} individual
 */

Payee2.prototype['individual'] = undefined;
/**
 * @member {Date} created
 */

Payee2.prototype['created'] = undefined;
/**
 * @member {Date} gracePeriodEndDate
 */

Payee2.prototype['gracePeriodEndDate'] = undefined;
/**
 * @member {String} watchlistStatusUpdatedTimestamp
 */

Payee2.prototype['watchlistStatusUpdatedTimestamp'] = undefined;
/**
 * @member {Array.<module:model/MarketingOptIn>} marketingOptIns
 */

Payee2.prototype['marketingOptIns'] = undefined;
/**
 * @member {module:model/OnboardedStatus} onboardedStatus
 */

Payee2.prototype['onboardedStatus'] = undefined;
/**
 * Remote Id must be between 1 and 100 characters long
 * @member {String} remoteId
 */

Payee2.prototype['remoteId'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Payee2['TypeEnum'] = {
  /**
   * value: "Individual"
   * @const
   */
  "Individual": "Individual",

  /**
   * value: "Company"
   * @const
   */
  "Company": "Company"
};
var _default = Payee2;
exports["default"] = _default;