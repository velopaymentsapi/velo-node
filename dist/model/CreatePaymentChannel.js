"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePaymentChannel model module.
 * @module model/CreatePaymentChannel
 * @version 2.23.78
 */
var CreatePaymentChannel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePaymentChannel</code>.
   * @alias module:model/CreatePaymentChannel
   * @param countryCode {module:model/CreatePaymentChannel.CountryCodeEnum} Two character country code
   * @param currency {module:model/CreatePaymentChannel.CurrencyEnum} 
   * @param accountName {String} 
   */
  function CreatePaymentChannel(countryCode, currency, accountName) {
    _classCallCheck(this, CreatePaymentChannel);

    CreatePaymentChannel.initialize(this, countryCode, currency, accountName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePaymentChannel, null, [{
    key: "initialize",
    value: function initialize(obj, countryCode, currency, accountName) {
      obj['countryCode'] = countryCode;
      obj['currency'] = currency;
      obj['accountName'] = accountName;
    }
    /**
     * Constructs a <code>CreatePaymentChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePaymentChannel} obj Optional instance to populate.
     * @return {module:model/CreatePaymentChannel} The populated <code>CreatePaymentChannel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePaymentChannel();

        if (data.hasOwnProperty('paymentChannelName')) {
          obj['paymentChannelName'] = _ApiClient["default"].convertToType(data['paymentChannelName'], 'String');
        }

        if (data.hasOwnProperty('iban')) {
          obj['iban'] = _ApiClient["default"].convertToType(data['iban'], 'String');
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('routingNumber')) {
          obj['routingNumber'] = _ApiClient["default"].convertToType(data['routingNumber'], 'String');
        }

        if (data.hasOwnProperty('countryCode')) {
          obj['countryCode'] = _ApiClient["default"].convertToType(data['countryCode'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('accountName')) {
          obj['accountName'] = _ApiClient["default"].convertToType(data['accountName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreatePaymentChannel;
}();
/**
 * @member {String} paymentChannelName
 */


CreatePaymentChannel.prototype['paymentChannelName'] = undefined;
/**
 * Must match the regular expression ```^[A-Za-z0-9]+$```. Either routing number and account number or only iban must be set
 * @member {String} iban
 */

CreatePaymentChannel.prototype['iban'] = undefined;
/**
 * Either routing number and account number or only iban must be set
 * @member {String} accountNumber
 */

CreatePaymentChannel.prototype['accountNumber'] = undefined;
/**
 * Either routing number and account number or only iban must be set
 * @member {String} routingNumber
 */

CreatePaymentChannel.prototype['routingNumber'] = undefined;
/**
 * Two character country code
 * @member {module:model/CreatePaymentChannel.CountryCodeEnum} countryCode
 */

CreatePaymentChannel.prototype['countryCode'] = undefined;
/**
 * @member {module:model/CreatePaymentChannel.CurrencyEnum} currency
 */

CreatePaymentChannel.prototype['currency'] = undefined;
/**
 * @member {String} accountName
 */

CreatePaymentChannel.prototype['accountName'] = undefined;
/**
 * Allowed values for the <code>countryCode</code> property.
 * @enum {String}
 * @readonly
 */

CreatePaymentChannel['CountryCodeEnum'] = {
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
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */

CreatePaymentChannel['CurrencyEnum'] = {
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
var _default = CreatePaymentChannel;
exports["default"] = _default;