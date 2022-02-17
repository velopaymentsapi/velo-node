"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayeeType = _interopRequireDefault(require("./PayeeType2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CreatePayeesCSVRequest2 model module.
 * @module model/CreatePayeesCSVRequest2
 * @version 2.29.128
 */
var CreatePayeesCSVRequest2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePayeesCSVRequest2</code>.
   * @alias module:model/CreatePayeesCSVRequest2
   * @param type {module:model/PayeeType2} 
   * @param remoteId {String} 
   * @param email {String} 
   * @param addressLine1 {String} 
   * @param addressCity {String} 
   * @param addressZipOrPostcode {String} 
   * @param addressCountry {module:model/CreatePayeesCSVRequest2.AddressCountryEnum} Must be a 2 character country code - per ISO 3166-1
   */
  function CreatePayeesCSVRequest2(type, remoteId, email, addressLine1, addressCity, addressZipOrPostcode, addressCountry) {
    _classCallCheck(this, CreatePayeesCSVRequest2);

    CreatePayeesCSVRequest2.initialize(this, type, remoteId, email, addressLine1, addressCity, addressZipOrPostcode, addressCountry);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePayeesCSVRequest2, null, [{
    key: "initialize",
    value: function initialize(obj, type, remoteId, email, addressLine1, addressCity, addressZipOrPostcode, addressCountry) {
      obj['type'] = type;
      obj['remoteId'] = remoteId;
      obj['email'] = email;
      obj['addressLine1'] = addressLine1;
      obj['addressCity'] = addressCity;
      obj['addressZipOrPostcode'] = addressZipOrPostcode;
      obj['addressCountry'] = addressCountry;
    }
    /**
     * Constructs a <code>CreatePayeesCSVRequest2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayeesCSVRequest2} obj Optional instance to populate.
     * @return {module:model/CreatePayeesCSVRequest2} The populated <code>CreatePayeesCSVRequest2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePayeesCSVRequest2();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _PayeeType["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('addressLine1')) {
          obj['addressLine1'] = _ApiClient["default"].convertToType(data['addressLine1'], 'String');
        }

        if (data.hasOwnProperty('addressLine2')) {
          obj['addressLine2'] = _ApiClient["default"].convertToType(data['addressLine2'], 'String');
        }

        if (data.hasOwnProperty('addressLine3')) {
          obj['addressLine3'] = _ApiClient["default"].convertToType(data['addressLine3'], 'String');
        }

        if (data.hasOwnProperty('addressLine4')) {
          obj['addressLine4'] = _ApiClient["default"].convertToType(data['addressLine4'], 'String');
        }

        if (data.hasOwnProperty('addressCity')) {
          obj['addressCity'] = _ApiClient["default"].convertToType(data['addressCity'], 'String');
        }

        if (data.hasOwnProperty('addressCountyOrProvince')) {
          obj['addressCountyOrProvince'] = _ApiClient["default"].convertToType(data['addressCountyOrProvince'], 'String');
        }

        if (data.hasOwnProperty('addressZipOrPostcode')) {
          obj['addressZipOrPostcode'] = _ApiClient["default"].convertToType(data['addressZipOrPostcode'], 'String');
        }

        if (data.hasOwnProperty('addressCountry')) {
          obj['addressCountry'] = _ApiClient["default"].convertToType(data['addressCountry'], 'String');
        }

        if (data.hasOwnProperty('individualNationalIdentification')) {
          obj['individualNationalIdentification'] = _ApiClient["default"].convertToType(data['individualNationalIdentification'], 'String');
        }

        if (data.hasOwnProperty('individualDateOfBirth')) {
          obj['individualDateOfBirth'] = _ApiClient["default"].convertToType(data['individualDateOfBirth'], 'Date');
        }

        if (data.hasOwnProperty('individualTitle')) {
          obj['individualTitle'] = _ApiClient["default"].convertToType(data['individualTitle'], 'String');
        }

        if (data.hasOwnProperty('individualFirstName')) {
          obj['individualFirstName'] = _ApiClient["default"].convertToType(data['individualFirstName'], 'String');
        }

        if (data.hasOwnProperty('individualOtherNames')) {
          obj['individualOtherNames'] = _ApiClient["default"].convertToType(data['individualOtherNames'], 'String');
        }

        if (data.hasOwnProperty('individualLastName')) {
          obj['individualLastName'] = _ApiClient["default"].convertToType(data['individualLastName'], 'String');
        }

        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
        }

        if (data.hasOwnProperty('companyEIN')) {
          obj['companyEIN'] = _ApiClient["default"].convertToType(data['companyEIN'], 'String');
        }

        if (data.hasOwnProperty('companyOperatingName')) {
          obj['companyOperatingName'] = _ApiClient["default"].convertToType(data['companyOperatingName'], 'String');
        }

        if (data.hasOwnProperty('paymentChannelAccountNumber')) {
          obj['paymentChannelAccountNumber'] = _ApiClient["default"].convertToType(data['paymentChannelAccountNumber'], 'String');
        }

        if (data.hasOwnProperty('paymentChannelRoutingNumber')) {
          obj['paymentChannelRoutingNumber'] = _ApiClient["default"].convertToType(data['paymentChannelRoutingNumber'], 'String');
        }

        if (data.hasOwnProperty('paymentChannelAccountName')) {
          obj['paymentChannelAccountName'] = _ApiClient["default"].convertToType(data['paymentChannelAccountName'], 'String');
        }

        if (data.hasOwnProperty('paymentChannelIban')) {
          obj['paymentChannelIban'] = _ApiClient["default"].convertToType(data['paymentChannelIban'], 'String');
        }

        if (data.hasOwnProperty('paymentChannelCountryCode')) {
          obj['paymentChannelCountryCode'] = _ApiClient["default"].convertToType(data['paymentChannelCountryCode'], 'String');
        }

        if (data.hasOwnProperty('paymentChannelCurrency')) {
          obj['paymentChannelCurrency'] = _ApiClient["default"].convertToType(data['paymentChannelCurrency'], 'String');
        }

        if (data.hasOwnProperty('challengeDescription')) {
          obj['challengeDescription'] = _ApiClient["default"].convertToType(data['challengeDescription'], 'String');
        }

        if (data.hasOwnProperty('challengeValue')) {
          obj['challengeValue'] = _ApiClient["default"].convertToType(data['challengeValue'], 'String');
        }

        if (data.hasOwnProperty('payeeLanguage')) {
          obj['payeeLanguage'] = _ApiClient["default"].convertToType(data['payeeLanguage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreatePayeesCSVRequest2;
}();
/**
 * @member {module:model/PayeeType2} type
 */


CreatePayeesCSVRequest2.prototype['type'] = undefined;
/**
 * @member {String} remoteId
 */

CreatePayeesCSVRequest2.prototype['remoteId'] = undefined;
/**
 * @member {String} email
 */

CreatePayeesCSVRequest2.prototype['email'] = undefined;
/**
 * @member {String} addressLine1
 */

CreatePayeesCSVRequest2.prototype['addressLine1'] = undefined;
/**
 * @member {String} addressLine2
 */

CreatePayeesCSVRequest2.prototype['addressLine2'] = undefined;
/**
 * @member {String} addressLine3
 */

CreatePayeesCSVRequest2.prototype['addressLine3'] = undefined;
/**
 * @member {String} addressLine4
 */

CreatePayeesCSVRequest2.prototype['addressLine4'] = undefined;
/**
 * @member {String} addressCity
 */

CreatePayeesCSVRequest2.prototype['addressCity'] = undefined;
/**
 * @member {String} addressCountyOrProvince
 */

CreatePayeesCSVRequest2.prototype['addressCountyOrProvince'] = undefined;
/**
 * @member {String} addressZipOrPostcode
 */

CreatePayeesCSVRequest2.prototype['addressZipOrPostcode'] = undefined;
/**
 * Must be a 2 character country code - per ISO 3166-1
 * @member {module:model/CreatePayeesCSVRequest2.AddressCountryEnum} addressCountry
 */

CreatePayeesCSVRequest2.prototype['addressCountry'] = undefined;
/**
 * @member {String} individualNationalIdentification
 */

CreatePayeesCSVRequest2.prototype['individualNationalIdentification'] = undefined;
/**
 * Must not be date in future. Example - 1970-05-20
 * @member {Date} individualDateOfBirth
 */

CreatePayeesCSVRequest2.prototype['individualDateOfBirth'] = undefined;
/**
 * @member {String} individualTitle
 */

CreatePayeesCSVRequest2.prototype['individualTitle'] = undefined;
/**
 * @member {String} individualFirstName
 */

CreatePayeesCSVRequest2.prototype['individualFirstName'] = undefined;
/**
 * @member {String} individualOtherNames
 */

CreatePayeesCSVRequest2.prototype['individualOtherNames'] = undefined;
/**
 * @member {String} individualLastName
 */

CreatePayeesCSVRequest2.prototype['individualLastName'] = undefined;
/**
 * @member {String} companyName
 */

CreatePayeesCSVRequest2.prototype['companyName'] = undefined;
/**
 * @member {String} companyEIN
 */

CreatePayeesCSVRequest2.prototype['companyEIN'] = undefined;
/**
 * @member {String} companyOperatingName
 */

CreatePayeesCSVRequest2.prototype['companyOperatingName'] = undefined;
/**
 * Either routing number and account number or only iban must be set
 * @member {String} paymentChannelAccountNumber
 */

CreatePayeesCSVRequest2.prototype['paymentChannelAccountNumber'] = undefined;
/**
 * Either routing number and account number or only iban must be set
 * @member {String} paymentChannelRoutingNumber
 */

CreatePayeesCSVRequest2.prototype['paymentChannelRoutingNumber'] = undefined;
/**
 * @member {String} paymentChannelAccountName
 */

CreatePayeesCSVRequest2.prototype['paymentChannelAccountName'] = undefined;
/**
 * Must match the regular expression ```^[A-Za-z0-9]+$```.
 * @member {String} paymentChannelIban
 */

CreatePayeesCSVRequest2.prototype['paymentChannelIban'] = undefined;
/**
 * Must be a 2 character country code - per ISO 3166-1
 * @member {module:model/CreatePayeesCSVRequest2.PaymentChannelCountryCodeEnum} paymentChannelCountryCode
 */

CreatePayeesCSVRequest2.prototype['paymentChannelCountryCode'] = undefined;
/**
 * @member {module:model/CreatePayeesCSVRequest2.PaymentChannelCurrencyEnum} paymentChannelCurrency
 */

CreatePayeesCSVRequest2.prototype['paymentChannelCurrency'] = undefined;
/**
 * @member {String} challengeDescription
 */

CreatePayeesCSVRequest2.prototype['challengeDescription'] = undefined;
/**
 * @member {String} challengeValue
 */

CreatePayeesCSVRequest2.prototype['challengeValue'] = undefined;
/**
 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR> See the /v1/supportedLanguages endpoint to list the available codes for an environment. 
 * @member {String} payeeLanguage
 */

CreatePayeesCSVRequest2.prototype['payeeLanguage'] = undefined;
/**
 * Allowed values for the <code>addressCountry</code> property.
 * @enum {String}
 * @readonly
 */

CreatePayeesCSVRequest2['AddressCountryEnum'] = {
  /**
   * value: "AF"
   * @const
   */
  "AF": "AF",

  /**
   * value: "AX"
   * @const
   */
  "AX": "AX",

  /**
   * value: "AL"
   * @const
   */
  "AL": "AL",

  /**
   * value: "DZ"
   * @const
   */
  "DZ": "DZ",

  /**
   * value: "AS"
   * @const
   */
  "AS": "AS",

  /**
   * value: "AD"
   * @const
   */
  "AD": "AD",

  /**
   * value: "AO"
   * @const
   */
  "AO": "AO",

  /**
   * value: "AI"
   * @const
   */
  "AI": "AI",

  /**
   * value: "AQ"
   * @const
   */
  "AQ": "AQ",

  /**
   * value: "AG"
   * @const
   */
  "AG": "AG",

  /**
   * value: "AR"
   * @const
   */
  "AR": "AR",

  /**
   * value: "AM"
   * @const
   */
  "AM": "AM",

  /**
   * value: "AW"
   * @const
   */
  "AW": "AW",

  /**
   * value: "AU"
   * @const
   */
  "AU": "AU",

  /**
   * value: "AT"
   * @const
   */
  "AT": "AT",

  /**
   * value: "AZ"
   * @const
   */
  "AZ": "AZ",

  /**
   * value: "BS"
   * @const
   */
  "BS": "BS",

  /**
   * value: "BH"
   * @const
   */
  "BH": "BH",

  /**
   * value: "BD"
   * @const
   */
  "BD": "BD",

  /**
   * value: "BB"
   * @const
   */
  "BB": "BB",

  /**
   * value: "BY"
   * @const
   */
  "BY": "BY",

  /**
   * value: "BE"
   * @const
   */
  "BE": "BE",

  /**
   * value: "BZ"
   * @const
   */
  "BZ": "BZ",

  /**
   * value: "BJ"
   * @const
   */
  "BJ": "BJ",

  /**
   * value: "BM"
   * @const
   */
  "BM": "BM",

  /**
   * value: "BT"
   * @const
   */
  "BT": "BT",

  /**
   * value: "BO"
   * @const
   */
  "BO": "BO",

  /**
   * value: "BQ"
   * @const
   */
  "BQ": "BQ",

  /**
   * value: "BA"
   * @const
   */
  "BA": "BA",

  /**
   * value: "BW"
   * @const
   */
  "BW": "BW",

  /**
   * value: "BV"
   * @const
   */
  "BV": "BV",

  /**
   * value: "BR"
   * @const
   */
  "BR": "BR",

  /**
   * value: "IO"
   * @const
   */
  "IO": "IO",

  /**
   * value: "BN"
   * @const
   */
  "BN": "BN",

  /**
   * value: "BG"
   * @const
   */
  "BG": "BG",

  /**
   * value: "BF"
   * @const
   */
  "BF": "BF",

  /**
   * value: "BI"
   * @const
   */
  "BI": "BI",

  /**
   * value: "KH"
   * @const
   */
  "KH": "KH",

  /**
   * value: "CM"
   * @const
   */
  "CM": "CM",

  /**
   * value: "CA"
   * @const
   */
  "CA": "CA",

  /**
   * value: "CV"
   * @const
   */
  "CV": "CV",

  /**
   * value: "KY"
   * @const
   */
  "KY": "KY",

  /**
   * value: "CF"
   * @const
   */
  "CF": "CF",

  /**
   * value: "TD"
   * @const
   */
  "TD": "TD",

  /**
   * value: "CL"
   * @const
   */
  "CL": "CL",

  /**
   * value: "CN"
   * @const
   */
  "CN": "CN",

  /**
   * value: "CX"
   * @const
   */
  "CX": "CX",

  /**
   * value: "CC"
   * @const
   */
  "CC": "CC",

  /**
   * value: "CO"
   * @const
   */
  "CO": "CO",

  /**
   * value: "KM"
   * @const
   */
  "KM": "KM",

  /**
   * value: "CG"
   * @const
   */
  "CG": "CG",

  /**
   * value: "CD"
   * @const
   */
  "CD": "CD",

  /**
   * value: "CK"
   * @const
   */
  "CK": "CK",

  /**
   * value: "CR"
   * @const
   */
  "CR": "CR",

  /**
   * value: "CI"
   * @const
   */
  "CI": "CI",

  /**
   * value: "HR"
   * @const
   */
  "HR": "HR",

  /**
   * value: "CU"
   * @const
   */
  "CU": "CU",

  /**
   * value: "CW"
   * @const
   */
  "CW": "CW",

  /**
   * value: "CY"
   * @const
   */
  "CY": "CY",

  /**
   * value: "CZ"
   * @const
   */
  "CZ": "CZ",

  /**
   * value: "DK"
   * @const
   */
  "DK": "DK",

  /**
   * value: "DJ"
   * @const
   */
  "DJ": "DJ",

  /**
   * value: "DM"
   * @const
   */
  "DM": "DM",

  /**
   * value: "DO"
   * @const
   */
  "DO": "DO",

  /**
   * value: "EC"
   * @const
   */
  "EC": "EC",

  /**
   * value: "EG"
   * @const
   */
  "EG": "EG",

  /**
   * value: "SV"
   * @const
   */
  "SV": "SV",

  /**
   * value: "GQ"
   * @const
   */
  "GQ": "GQ",

  /**
   * value: "ER"
   * @const
   */
  "ER": "ER",

  /**
   * value: "EE"
   * @const
   */
  "EE": "EE",

  /**
   * value: "ET"
   * @const
   */
  "ET": "ET",

  /**
   * value: "FK"
   * @const
   */
  "FK": "FK",

  /**
   * value: "FO"
   * @const
   */
  "FO": "FO",

  /**
   * value: "FJ"
   * @const
   */
  "FJ": "FJ",

  /**
   * value: "FI"
   * @const
   */
  "FI": "FI",

  /**
   * value: "FR"
   * @const
   */
  "FR": "FR",

  /**
   * value: "GF"
   * @const
   */
  "GF": "GF",

  /**
   * value: "PF"
   * @const
   */
  "PF": "PF",

  /**
   * value: "TF"
   * @const
   */
  "TF": "TF",

  /**
   * value: "GA"
   * @const
   */
  "GA": "GA",

  /**
   * value: "GM"
   * @const
   */
  "GM": "GM",

  /**
   * value: "GE"
   * @const
   */
  "GE": "GE",

  /**
   * value: "DE"
   * @const
   */
  "DE": "DE",

  /**
   * value: "GH"
   * @const
   */
  "GH": "GH",

  /**
   * value: "GI"
   * @const
   */
  "GI": "GI",

  /**
   * value: "GR"
   * @const
   */
  "GR": "GR",

  /**
   * value: "GL"
   * @const
   */
  "GL": "GL",

  /**
   * value: "GD"
   * @const
   */
  "GD": "GD",

  /**
   * value: "GP"
   * @const
   */
  "GP": "GP",

  /**
   * value: "GU"
   * @const
   */
  "GU": "GU",

  /**
   * value: "GT"
   * @const
   */
  "GT": "GT",

  /**
   * value: "GG"
   * @const
   */
  "GG": "GG",

  /**
   * value: "GN"
   * @const
   */
  "GN": "GN",

  /**
   * value: "GW"
   * @const
   */
  "GW": "GW",

  /**
   * value: "GY"
   * @const
   */
  "GY": "GY",

  /**
   * value: "HT"
   * @const
   */
  "HT": "HT",

  /**
   * value: "HM"
   * @const
   */
  "HM": "HM",

  /**
   * value: "VA"
   * @const
   */
  "VA": "VA",

  /**
   * value: "HN"
   * @const
   */
  "HN": "HN",

  /**
   * value: "HK"
   * @const
   */
  "HK": "HK",

  /**
   * value: "HU"
   * @const
   */
  "HU": "HU",

  /**
   * value: "IS"
   * @const
   */
  "IS": "IS",

  /**
   * value: "IN"
   * @const
   */
  "IN": "IN",

  /**
   * value: "ID"
   * @const
   */
  "ID": "ID",

  /**
   * value: "IR"
   * @const
   */
  "IR": "IR",

  /**
   * value: "IQ"
   * @const
   */
  "IQ": "IQ",

  /**
   * value: "IE"
   * @const
   */
  "IE": "IE",

  /**
   * value: "IM"
   * @const
   */
  "IM": "IM",

  /**
   * value: "IL"
   * @const
   */
  "IL": "IL",

  /**
   * value: "IT"
   * @const
   */
  "IT": "IT",

  /**
   * value: "JM"
   * @const
   */
  "JM": "JM",

  /**
   * value: "JP"
   * @const
   */
  "JP": "JP",

  /**
   * value: "JE"
   * @const
   */
  "JE": "JE",

  /**
   * value: "JO"
   * @const
   */
  "JO": "JO",

  /**
   * value: "KZ"
   * @const
   */
  "KZ": "KZ",

  /**
   * value: "KE"
   * @const
   */
  "KE": "KE",

  /**
   * value: "KI"
   * @const
   */
  "KI": "KI",

  /**
   * value: "KP"
   * @const
   */
  "KP": "KP",

  /**
   * value: "KR"
   * @const
   */
  "KR": "KR",

  /**
   * value: "KW"
   * @const
   */
  "KW": "KW",

  /**
   * value: "KG"
   * @const
   */
  "KG": "KG",

  /**
   * value: "LA"
   * @const
   */
  "LA": "LA",

  /**
   * value: "LV"
   * @const
   */
  "LV": "LV",

  /**
   * value: "LB"
   * @const
   */
  "LB": "LB",

  /**
   * value: "LS"
   * @const
   */
  "LS": "LS",

  /**
   * value: "LR"
   * @const
   */
  "LR": "LR",

  /**
   * value: "LY"
   * @const
   */
  "LY": "LY",

  /**
   * value: "LI"
   * @const
   */
  "LI": "LI",

  /**
   * value: "LT"
   * @const
   */
  "LT": "LT",

  /**
   * value: "LU"
   * @const
   */
  "LU": "LU",

  /**
   * value: "MO"
   * @const
   */
  "MO": "MO",

  /**
   * value: "MK"
   * @const
   */
  "MK": "MK",

  /**
   * value: "MG"
   * @const
   */
  "MG": "MG",

  /**
   * value: "MW"
   * @const
   */
  "MW": "MW",

  /**
   * value: "MY"
   * @const
   */
  "MY": "MY",

  /**
   * value: "MV"
   * @const
   */
  "MV": "MV",

  /**
   * value: "ML"
   * @const
   */
  "ML": "ML",

  /**
   * value: "MT"
   * @const
   */
  "MT": "MT",

  /**
   * value: "MH"
   * @const
   */
  "MH": "MH",

  /**
   * value: "MQ"
   * @const
   */
  "MQ": "MQ",

  /**
   * value: "MR"
   * @const
   */
  "MR": "MR",

  /**
   * value: "MU"
   * @const
   */
  "MU": "MU",

  /**
   * value: "YT"
   * @const
   */
  "YT": "YT",

  /**
   * value: "MX"
   * @const
   */
  "MX": "MX",

  /**
   * value: "FM"
   * @const
   */
  "FM": "FM",

  /**
   * value: "MD"
   * @const
   */
  "MD": "MD",

  /**
   * value: "MC"
   * @const
   */
  "MC": "MC",

  /**
   * value: "MN"
   * @const
   */
  "MN": "MN",

  /**
   * value: "ME"
   * @const
   */
  "ME": "ME",

  /**
   * value: "MS"
   * @const
   */
  "MS": "MS",

  /**
   * value: "MA"
   * @const
   */
  "MA": "MA",

  /**
   * value: "MZ"
   * @const
   */
  "MZ": "MZ",

  /**
   * value: "MM"
   * @const
   */
  "MM": "MM",

  /**
   * value: "NA"
   * @const
   */
  "NA": "NA",

  /**
   * value: "NR"
   * @const
   */
  "NR": "NR",

  /**
   * value: "NP"
   * @const
   */
  "NP": "NP",

  /**
   * value: "NL"
   * @const
   */
  "NL": "NL",

  /**
   * value: "NC"
   * @const
   */
  "NC": "NC",

  /**
   * value: "NZ"
   * @const
   */
  "NZ": "NZ",

  /**
   * value: "NI"
   * @const
   */
  "NI": "NI",

  /**
   * value: "NE"
   * @const
   */
  "NE": "NE",

  /**
   * value: "NG"
   * @const
   */
  "NG": "NG",

  /**
   * value: "NU"
   * @const
   */
  "NU": "NU",

  /**
   * value: "NF"
   * @const
   */
  "NF": "NF",

  /**
   * value: "MP"
   * @const
   */
  "MP": "MP",

  /**
   * value: "false"
   * @const
   */
  "false": "false",

  /**
   * value: "OM"
   * @const
   */
  "OM": "OM",

  /**
   * value: "PK"
   * @const
   */
  "PK": "PK",

  /**
   * value: "PW"
   * @const
   */
  "PW": "PW",

  /**
   * value: "PS"
   * @const
   */
  "PS": "PS",

  /**
   * value: "PA"
   * @const
   */
  "PA": "PA",

  /**
   * value: "PG"
   * @const
   */
  "PG": "PG",

  /**
   * value: "PY"
   * @const
   */
  "PY": "PY",

  /**
   * value: "PE"
   * @const
   */
  "PE": "PE",

  /**
   * value: "PH"
   * @const
   */
  "PH": "PH",

  /**
   * value: "PN"
   * @const
   */
  "PN": "PN",

  /**
   * value: "PL"
   * @const
   */
  "PL": "PL",

  /**
   * value: "PT"
   * @const
   */
  "PT": "PT",

  /**
   * value: "PR"
   * @const
   */
  "PR": "PR",

  /**
   * value: "QA"
   * @const
   */
  "QA": "QA",

  /**
   * value: "RE"
   * @const
   */
  "RE": "RE",

  /**
   * value: "RO"
   * @const
   */
  "RO": "RO",

  /**
   * value: "RU"
   * @const
   */
  "RU": "RU",

  /**
   * value: "RW"
   * @const
   */
  "RW": "RW",

  /**
   * value: "BL"
   * @const
   */
  "BL": "BL",

  /**
   * value: "SH"
   * @const
   */
  "SH": "SH",

  /**
   * value: "KN"
   * @const
   */
  "KN": "KN",

  /**
   * value: "LC"
   * @const
   */
  "LC": "LC",

  /**
   * value: "MF"
   * @const
   */
  "MF": "MF",

  /**
   * value: "PM"
   * @const
   */
  "PM": "PM",

  /**
   * value: "VC"
   * @const
   */
  "VC": "VC",

  /**
   * value: "WS"
   * @const
   */
  "WS": "WS",

  /**
   * value: "SM"
   * @const
   */
  "SM": "SM",

  /**
   * value: "ST"
   * @const
   */
  "ST": "ST",

  /**
   * value: "SA"
   * @const
   */
  "SA": "SA",

  /**
   * value: "SN"
   * @const
   */
  "SN": "SN",

  /**
   * value: "RS"
   * @const
   */
  "RS": "RS",

  /**
   * value: "SC"
   * @const
   */
  "SC": "SC",

  /**
   * value: "SL"
   * @const
   */
  "SL": "SL",

  /**
   * value: "SG"
   * @const
   */
  "SG": "SG",

  /**
   * value: "SX"
   * @const
   */
  "SX": "SX",

  /**
   * value: "SK"
   * @const
   */
  "SK": "SK",

  /**
   * value: "SI"
   * @const
   */
  "SI": "SI",

  /**
   * value: "SB"
   * @const
   */
  "SB": "SB",

  /**
   * value: "SO"
   * @const
   */
  "SO": "SO",

  /**
   * value: "ZA"
   * @const
   */
  "ZA": "ZA",

  /**
   * value: "GS"
   * @const
   */
  "GS": "GS",

  /**
   * value: "SS"
   * @const
   */
  "SS": "SS",

  /**
   * value: "ES"
   * @const
   */
  "ES": "ES",

  /**
   * value: "LK"
   * @const
   */
  "LK": "LK",

  /**
   * value: "SD"
   * @const
   */
  "SD": "SD",

  /**
   * value: "SR"
   * @const
   */
  "SR": "SR",

  /**
   * value: "SJ"
   * @const
   */
  "SJ": "SJ",

  /**
   * value: "SZ"
   * @const
   */
  "SZ": "SZ",

  /**
   * value: "SE"
   * @const
   */
  "SE": "SE",

  /**
   * value: "CH"
   * @const
   */
  "CH": "CH",

  /**
   * value: "SY"
   * @const
   */
  "SY": "SY",

  /**
   * value: "TW"
   * @const
   */
  "TW": "TW",

  /**
   * value: "TJ"
   * @const
   */
  "TJ": "TJ",

  /**
   * value: "TZ"
   * @const
   */
  "TZ": "TZ",

  /**
   * value: "TH"
   * @const
   */
  "TH": "TH",

  /**
   * value: "TL"
   * @const
   */
  "TL": "TL",

  /**
   * value: "TG"
   * @const
   */
  "TG": "TG",

  /**
   * value: "TK"
   * @const
   */
  "TK": "TK",

  /**
   * value: "TO"
   * @const
   */
  "TO": "TO",

  /**
   * value: "TT"
   * @const
   */
  "TT": "TT",

  /**
   * value: "TN"
   * @const
   */
  "TN": "TN",

  /**
   * value: "TR"
   * @const
   */
  "TR": "TR",

  /**
   * value: "TM"
   * @const
   */
  "TM": "TM",

  /**
   * value: "TC"
   * @const
   */
  "TC": "TC",

  /**
   * value: "TV"
   * @const
   */
  "TV": "TV",

  /**
   * value: "UG"
   * @const
   */
  "UG": "UG",

  /**
   * value: "UA"
   * @const
   */
  "UA": "UA",

  /**
   * value: "AE"
   * @const
   */
  "AE": "AE",

  /**
   * value: "GB"
   * @const
   */
  "GB": "GB",

  /**
   * value: "US"
   * @const
   */
  "US": "US",

  /**
   * value: "UM"
   * @const
   */
  "UM": "UM",

  /**
   * value: "UY"
   * @const
   */
  "UY": "UY",

  /**
   * value: "UZ"
   * @const
   */
  "UZ": "UZ",

  /**
   * value: "VU"
   * @const
   */
  "VU": "VU",

  /**
   * value: "VE"
   * @const
   */
  "VE": "VE",

  /**
   * value: "VN"
   * @const
   */
  "VN": "VN",

  /**
   * value: "VG"
   * @const
   */
  "VG": "VG",

  /**
   * value: "VI"
   * @const
   */
  "VI": "VI",

  /**
   * value: "WF"
   * @const
   */
  "WF": "WF",

  /**
   * value: "EH"
   * @const
   */
  "EH": "EH",

  /**
   * value: "YE"
   * @const
   */
  "YE": "YE",

  /**
   * value: "ZM"
   * @const
   */
  "ZM": "ZM",

  /**
   * value: "ZW"
   * @const
   */
  "ZW": "ZW"
};
/**
 * Allowed values for the <code>paymentChannelCountryCode</code> property.
 * @enum {String}
 * @readonly
 */

CreatePayeesCSVRequest2['PaymentChannelCountryCodeEnum'] = {
  /**
   * value: "AF"
   * @const
   */
  "AF": "AF",

  /**
   * value: "AX"
   * @const
   */
  "AX": "AX",

  /**
   * value: "AL"
   * @const
   */
  "AL": "AL",

  /**
   * value: "DZ"
   * @const
   */
  "DZ": "DZ",

  /**
   * value: "AS"
   * @const
   */
  "AS": "AS",

  /**
   * value: "AD"
   * @const
   */
  "AD": "AD",

  /**
   * value: "AO"
   * @const
   */
  "AO": "AO",

  /**
   * value: "AI"
   * @const
   */
  "AI": "AI",

  /**
   * value: "AQ"
   * @const
   */
  "AQ": "AQ",

  /**
   * value: "AG"
   * @const
   */
  "AG": "AG",

  /**
   * value: "AR"
   * @const
   */
  "AR": "AR",

  /**
   * value: "AM"
   * @const
   */
  "AM": "AM",

  /**
   * value: "AW"
   * @const
   */
  "AW": "AW",

  /**
   * value: "AU"
   * @const
   */
  "AU": "AU",

  /**
   * value: "AT"
   * @const
   */
  "AT": "AT",

  /**
   * value: "AZ"
   * @const
   */
  "AZ": "AZ",

  /**
   * value: "BS"
   * @const
   */
  "BS": "BS",

  /**
   * value: "BH"
   * @const
   */
  "BH": "BH",

  /**
   * value: "BD"
   * @const
   */
  "BD": "BD",

  /**
   * value: "BB"
   * @const
   */
  "BB": "BB",

  /**
   * value: "BY"
   * @const
   */
  "BY": "BY",

  /**
   * value: "BE"
   * @const
   */
  "BE": "BE",

  /**
   * value: "BZ"
   * @const
   */
  "BZ": "BZ",

  /**
   * value: "BJ"
   * @const
   */
  "BJ": "BJ",

  /**
   * value: "BM"
   * @const
   */
  "BM": "BM",

  /**
   * value: "BT"
   * @const
   */
  "BT": "BT",

  /**
   * value: "BO"
   * @const
   */
  "BO": "BO",

  /**
   * value: "BQ"
   * @const
   */
  "BQ": "BQ",

  /**
   * value: "BA"
   * @const
   */
  "BA": "BA",

  /**
   * value: "BW"
   * @const
   */
  "BW": "BW",

  /**
   * value: "BV"
   * @const
   */
  "BV": "BV",

  /**
   * value: "BR"
   * @const
   */
  "BR": "BR",

  /**
   * value: "IO"
   * @const
   */
  "IO": "IO",

  /**
   * value: "BN"
   * @const
   */
  "BN": "BN",

  /**
   * value: "BG"
   * @const
   */
  "BG": "BG",

  /**
   * value: "BF"
   * @const
   */
  "BF": "BF",

  /**
   * value: "BI"
   * @const
   */
  "BI": "BI",

  /**
   * value: "KH"
   * @const
   */
  "KH": "KH",

  /**
   * value: "CM"
   * @const
   */
  "CM": "CM",

  /**
   * value: "CA"
   * @const
   */
  "CA": "CA",

  /**
   * value: "CV"
   * @const
   */
  "CV": "CV",

  /**
   * value: "KY"
   * @const
   */
  "KY": "KY",

  /**
   * value: "CF"
   * @const
   */
  "CF": "CF",

  /**
   * value: "TD"
   * @const
   */
  "TD": "TD",

  /**
   * value: "CL"
   * @const
   */
  "CL": "CL",

  /**
   * value: "CN"
   * @const
   */
  "CN": "CN",

  /**
   * value: "CX"
   * @const
   */
  "CX": "CX",

  /**
   * value: "CC"
   * @const
   */
  "CC": "CC",

  /**
   * value: "CO"
   * @const
   */
  "CO": "CO",

  /**
   * value: "KM"
   * @const
   */
  "KM": "KM",

  /**
   * value: "CG"
   * @const
   */
  "CG": "CG",

  /**
   * value: "CD"
   * @const
   */
  "CD": "CD",

  /**
   * value: "CK"
   * @const
   */
  "CK": "CK",

  /**
   * value: "CR"
   * @const
   */
  "CR": "CR",

  /**
   * value: "CI"
   * @const
   */
  "CI": "CI",

  /**
   * value: "HR"
   * @const
   */
  "HR": "HR",

  /**
   * value: "CU"
   * @const
   */
  "CU": "CU",

  /**
   * value: "CW"
   * @const
   */
  "CW": "CW",

  /**
   * value: "CY"
   * @const
   */
  "CY": "CY",

  /**
   * value: "CZ"
   * @const
   */
  "CZ": "CZ",

  /**
   * value: "DK"
   * @const
   */
  "DK": "DK",

  /**
   * value: "DJ"
   * @const
   */
  "DJ": "DJ",

  /**
   * value: "DM"
   * @const
   */
  "DM": "DM",

  /**
   * value: "DO"
   * @const
   */
  "DO": "DO",

  /**
   * value: "EC"
   * @const
   */
  "EC": "EC",

  /**
   * value: "EG"
   * @const
   */
  "EG": "EG",

  /**
   * value: "SV"
   * @const
   */
  "SV": "SV",

  /**
   * value: "GQ"
   * @const
   */
  "GQ": "GQ",

  /**
   * value: "ER"
   * @const
   */
  "ER": "ER",

  /**
   * value: "EE"
   * @const
   */
  "EE": "EE",

  /**
   * value: "ET"
   * @const
   */
  "ET": "ET",

  /**
   * value: "FK"
   * @const
   */
  "FK": "FK",

  /**
   * value: "FO"
   * @const
   */
  "FO": "FO",

  /**
   * value: "FJ"
   * @const
   */
  "FJ": "FJ",

  /**
   * value: "FI"
   * @const
   */
  "FI": "FI",

  /**
   * value: "FR"
   * @const
   */
  "FR": "FR",

  /**
   * value: "GF"
   * @const
   */
  "GF": "GF",

  /**
   * value: "PF"
   * @const
   */
  "PF": "PF",

  /**
   * value: "TF"
   * @const
   */
  "TF": "TF",

  /**
   * value: "GA"
   * @const
   */
  "GA": "GA",

  /**
   * value: "GM"
   * @const
   */
  "GM": "GM",

  /**
   * value: "GE"
   * @const
   */
  "GE": "GE",

  /**
   * value: "DE"
   * @const
   */
  "DE": "DE",

  /**
   * value: "GH"
   * @const
   */
  "GH": "GH",

  /**
   * value: "GI"
   * @const
   */
  "GI": "GI",

  /**
   * value: "GR"
   * @const
   */
  "GR": "GR",

  /**
   * value: "GL"
   * @const
   */
  "GL": "GL",

  /**
   * value: "GD"
   * @const
   */
  "GD": "GD",

  /**
   * value: "GP"
   * @const
   */
  "GP": "GP",

  /**
   * value: "GU"
   * @const
   */
  "GU": "GU",

  /**
   * value: "GT"
   * @const
   */
  "GT": "GT",

  /**
   * value: "GG"
   * @const
   */
  "GG": "GG",

  /**
   * value: "GN"
   * @const
   */
  "GN": "GN",

  /**
   * value: "GW"
   * @const
   */
  "GW": "GW",

  /**
   * value: "GY"
   * @const
   */
  "GY": "GY",

  /**
   * value: "HT"
   * @const
   */
  "HT": "HT",

  /**
   * value: "HM"
   * @const
   */
  "HM": "HM",

  /**
   * value: "VA"
   * @const
   */
  "VA": "VA",

  /**
   * value: "HN"
   * @const
   */
  "HN": "HN",

  /**
   * value: "HK"
   * @const
   */
  "HK": "HK",

  /**
   * value: "HU"
   * @const
   */
  "HU": "HU",

  /**
   * value: "IS"
   * @const
   */
  "IS": "IS",

  /**
   * value: "IN"
   * @const
   */
  "IN": "IN",

  /**
   * value: "ID"
   * @const
   */
  "ID": "ID",

  /**
   * value: "IR"
   * @const
   */
  "IR": "IR",

  /**
   * value: "IQ"
   * @const
   */
  "IQ": "IQ",

  /**
   * value: "IE"
   * @const
   */
  "IE": "IE",

  /**
   * value: "IM"
   * @const
   */
  "IM": "IM",

  /**
   * value: "IL"
   * @const
   */
  "IL": "IL",

  /**
   * value: "IT"
   * @const
   */
  "IT": "IT",

  /**
   * value: "JM"
   * @const
   */
  "JM": "JM",

  /**
   * value: "JP"
   * @const
   */
  "JP": "JP",

  /**
   * value: "JE"
   * @const
   */
  "JE": "JE",

  /**
   * value: "JO"
   * @const
   */
  "JO": "JO",

  /**
   * value: "KZ"
   * @const
   */
  "KZ": "KZ",

  /**
   * value: "KE"
   * @const
   */
  "KE": "KE",

  /**
   * value: "KI"
   * @const
   */
  "KI": "KI",

  /**
   * value: "KP"
   * @const
   */
  "KP": "KP",

  /**
   * value: "KR"
   * @const
   */
  "KR": "KR",

  /**
   * value: "KW"
   * @const
   */
  "KW": "KW",

  /**
   * value: "KG"
   * @const
   */
  "KG": "KG",

  /**
   * value: "LA"
   * @const
   */
  "LA": "LA",

  /**
   * value: "LV"
   * @const
   */
  "LV": "LV",

  /**
   * value: "LB"
   * @const
   */
  "LB": "LB",

  /**
   * value: "LS"
   * @const
   */
  "LS": "LS",

  /**
   * value: "LR"
   * @const
   */
  "LR": "LR",

  /**
   * value: "LY"
   * @const
   */
  "LY": "LY",

  /**
   * value: "LI"
   * @const
   */
  "LI": "LI",

  /**
   * value: "LT"
   * @const
   */
  "LT": "LT",

  /**
   * value: "LU"
   * @const
   */
  "LU": "LU",

  /**
   * value: "MO"
   * @const
   */
  "MO": "MO",

  /**
   * value: "MK"
   * @const
   */
  "MK": "MK",

  /**
   * value: "MG"
   * @const
   */
  "MG": "MG",

  /**
   * value: "MW"
   * @const
   */
  "MW": "MW",

  /**
   * value: "MY"
   * @const
   */
  "MY": "MY",

  /**
   * value: "MV"
   * @const
   */
  "MV": "MV",

  /**
   * value: "ML"
   * @const
   */
  "ML": "ML",

  /**
   * value: "MT"
   * @const
   */
  "MT": "MT",

  /**
   * value: "MH"
   * @const
   */
  "MH": "MH",

  /**
   * value: "MQ"
   * @const
   */
  "MQ": "MQ",

  /**
   * value: "MR"
   * @const
   */
  "MR": "MR",

  /**
   * value: "MU"
   * @const
   */
  "MU": "MU",

  /**
   * value: "YT"
   * @const
   */
  "YT": "YT",

  /**
   * value: "MX"
   * @const
   */
  "MX": "MX",

  /**
   * value: "FM"
   * @const
   */
  "FM": "FM",

  /**
   * value: "MD"
   * @const
   */
  "MD": "MD",

  /**
   * value: "MC"
   * @const
   */
  "MC": "MC",

  /**
   * value: "MN"
   * @const
   */
  "MN": "MN",

  /**
   * value: "ME"
   * @const
   */
  "ME": "ME",

  /**
   * value: "MS"
   * @const
   */
  "MS": "MS",

  /**
   * value: "MA"
   * @const
   */
  "MA": "MA",

  /**
   * value: "MZ"
   * @const
   */
  "MZ": "MZ",

  /**
   * value: "MM"
   * @const
   */
  "MM": "MM",

  /**
   * value: "NA"
   * @const
   */
  "NA": "NA",

  /**
   * value: "NR"
   * @const
   */
  "NR": "NR",

  /**
   * value: "NP"
   * @const
   */
  "NP": "NP",

  /**
   * value: "NL"
   * @const
   */
  "NL": "NL",

  /**
   * value: "NC"
   * @const
   */
  "NC": "NC",

  /**
   * value: "NZ"
   * @const
   */
  "NZ": "NZ",

  /**
   * value: "NI"
   * @const
   */
  "NI": "NI",

  /**
   * value: "NE"
   * @const
   */
  "NE": "NE",

  /**
   * value: "NG"
   * @const
   */
  "NG": "NG",

  /**
   * value: "NU"
   * @const
   */
  "NU": "NU",

  /**
   * value: "NF"
   * @const
   */
  "NF": "NF",

  /**
   * value: "MP"
   * @const
   */
  "MP": "MP",

  /**
   * value: "false"
   * @const
   */
  "false": "false",

  /**
   * value: "OM"
   * @const
   */
  "OM": "OM",

  /**
   * value: "PK"
   * @const
   */
  "PK": "PK",

  /**
   * value: "PW"
   * @const
   */
  "PW": "PW",

  /**
   * value: "PS"
   * @const
   */
  "PS": "PS",

  /**
   * value: "PA"
   * @const
   */
  "PA": "PA",

  /**
   * value: "PG"
   * @const
   */
  "PG": "PG",

  /**
   * value: "PY"
   * @const
   */
  "PY": "PY",

  /**
   * value: "PE"
   * @const
   */
  "PE": "PE",

  /**
   * value: "PH"
   * @const
   */
  "PH": "PH",

  /**
   * value: "PN"
   * @const
   */
  "PN": "PN",

  /**
   * value: "PL"
   * @const
   */
  "PL": "PL",

  /**
   * value: "PT"
   * @const
   */
  "PT": "PT",

  /**
   * value: "PR"
   * @const
   */
  "PR": "PR",

  /**
   * value: "QA"
   * @const
   */
  "QA": "QA",

  /**
   * value: "RE"
   * @const
   */
  "RE": "RE",

  /**
   * value: "RO"
   * @const
   */
  "RO": "RO",

  /**
   * value: "RU"
   * @const
   */
  "RU": "RU",

  /**
   * value: "RW"
   * @const
   */
  "RW": "RW",

  /**
   * value: "BL"
   * @const
   */
  "BL": "BL",

  /**
   * value: "SH"
   * @const
   */
  "SH": "SH",

  /**
   * value: "KN"
   * @const
   */
  "KN": "KN",

  /**
   * value: "LC"
   * @const
   */
  "LC": "LC",

  /**
   * value: "MF"
   * @const
   */
  "MF": "MF",

  /**
   * value: "PM"
   * @const
   */
  "PM": "PM",

  /**
   * value: "VC"
   * @const
   */
  "VC": "VC",

  /**
   * value: "WS"
   * @const
   */
  "WS": "WS",

  /**
   * value: "SM"
   * @const
   */
  "SM": "SM",

  /**
   * value: "ST"
   * @const
   */
  "ST": "ST",

  /**
   * value: "SA"
   * @const
   */
  "SA": "SA",

  /**
   * value: "SN"
   * @const
   */
  "SN": "SN",

  /**
   * value: "RS"
   * @const
   */
  "RS": "RS",

  /**
   * value: "SC"
   * @const
   */
  "SC": "SC",

  /**
   * value: "SL"
   * @const
   */
  "SL": "SL",

  /**
   * value: "SG"
   * @const
   */
  "SG": "SG",

  /**
   * value: "SX"
   * @const
   */
  "SX": "SX",

  /**
   * value: "SK"
   * @const
   */
  "SK": "SK",

  /**
   * value: "SI"
   * @const
   */
  "SI": "SI",

  /**
   * value: "SB"
   * @const
   */
  "SB": "SB",

  /**
   * value: "SO"
   * @const
   */
  "SO": "SO",

  /**
   * value: "ZA"
   * @const
   */
  "ZA": "ZA",

  /**
   * value: "GS"
   * @const
   */
  "GS": "GS",

  /**
   * value: "SS"
   * @const
   */
  "SS": "SS",

  /**
   * value: "ES"
   * @const
   */
  "ES": "ES",

  /**
   * value: "LK"
   * @const
   */
  "LK": "LK",

  /**
   * value: "SD"
   * @const
   */
  "SD": "SD",

  /**
   * value: "SR"
   * @const
   */
  "SR": "SR",

  /**
   * value: "SJ"
   * @const
   */
  "SJ": "SJ",

  /**
   * value: "SZ"
   * @const
   */
  "SZ": "SZ",

  /**
   * value: "SE"
   * @const
   */
  "SE": "SE",

  /**
   * value: "CH"
   * @const
   */
  "CH": "CH",

  /**
   * value: "SY"
   * @const
   */
  "SY": "SY",

  /**
   * value: "TW"
   * @const
   */
  "TW": "TW",

  /**
   * value: "TJ"
   * @const
   */
  "TJ": "TJ",

  /**
   * value: "TZ"
   * @const
   */
  "TZ": "TZ",

  /**
   * value: "TH"
   * @const
   */
  "TH": "TH",

  /**
   * value: "TL"
   * @const
   */
  "TL": "TL",

  /**
   * value: "TG"
   * @const
   */
  "TG": "TG",

  /**
   * value: "TK"
   * @const
   */
  "TK": "TK",

  /**
   * value: "TO"
   * @const
   */
  "TO": "TO",

  /**
   * value: "TT"
   * @const
   */
  "TT": "TT",

  /**
   * value: "TN"
   * @const
   */
  "TN": "TN",

  /**
   * value: "TR"
   * @const
   */
  "TR": "TR",

  /**
   * value: "TM"
   * @const
   */
  "TM": "TM",

  /**
   * value: "TC"
   * @const
   */
  "TC": "TC",

  /**
   * value: "TV"
   * @const
   */
  "TV": "TV",

  /**
   * value: "UG"
   * @const
   */
  "UG": "UG",

  /**
   * value: "UA"
   * @const
   */
  "UA": "UA",

  /**
   * value: "AE"
   * @const
   */
  "AE": "AE",

  /**
   * value: "GB"
   * @const
   */
  "GB": "GB",

  /**
   * value: "US"
   * @const
   */
  "US": "US",

  /**
   * value: "UM"
   * @const
   */
  "UM": "UM",

  /**
   * value: "UY"
   * @const
   */
  "UY": "UY",

  /**
   * value: "UZ"
   * @const
   */
  "UZ": "UZ",

  /**
   * value: "VU"
   * @const
   */
  "VU": "VU",

  /**
   * value: "VE"
   * @const
   */
  "VE": "VE",

  /**
   * value: "VN"
   * @const
   */
  "VN": "VN",

  /**
   * value: "VG"
   * @const
   */
  "VG": "VG",

  /**
   * value: "VI"
   * @const
   */
  "VI": "VI",

  /**
   * value: "WF"
   * @const
   */
  "WF": "WF",

  /**
   * value: "EH"
   * @const
   */
  "EH": "EH",

  /**
   * value: "YE"
   * @const
   */
  "YE": "YE",

  /**
   * value: "ZM"
   * @const
   */
  "ZM": "ZM",

  /**
   * value: "ZW"
   * @const
   */
  "ZW": "ZW"
};
/**
 * Allowed values for the <code>paymentChannelCurrency</code> property.
 * @enum {String}
 * @readonly
 */

CreatePayeesCSVRequest2['PaymentChannelCurrencyEnum'] = {
  /**
   * value: "USD"
   * @const
   */
  "USD": "USD",

  /**
   * value: "GBP"
   * @const
   */
  "GBP": "GBP",

  /**
   * value: "EUR"
   * @const
   */
  "EUR": "EUR"
};
var _default = CreatePayeesCSVRequest2;
exports["default"] = _default;