/**
 * Velo Payments APIs
 * ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  ```   curl -X POST \\   -H \"Content-Type: application/json\" \\   -H \"Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==\" \\   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials' ```  If successful, this call will result in a **200** HTTP status code and a response body such as:  ```   {     \"access_token\":\"19f6bafd-93fd-4747-b229-00507bbc991f\",     \"token_type\":\"bearer\",     \"expires_in\":1799,     \"scope\":\"...\"   } ``` ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  ```   -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \" ```  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response. 
 *
 * The version of the OpenAPI document: 2.30.53
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreatePayeeAddressV3 model module.
 * @module model/CreatePayeeAddressV3
 * @version 2.30.53
 */
class CreatePayeeAddressV3 {
    /**
     * Constructs a new <code>CreatePayeeAddressV3</code>.
     * @alias module:model/CreatePayeeAddressV3
     * @param line1 {String} 
     * @param city {String} 
     * @param country {module:model/CreatePayeeAddressV3.CountryEnum} 2 letter ISO 3166-1 country code
     */
    constructor(line1, city, country) { 
        
        CreatePayeeAddressV3.initialize(this, line1, city, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, line1, city, country) { 
        obj['line1'] = line1;
        obj['city'] = city;
        obj['country'] = country;
    }

    /**
     * Constructs a <code>CreatePayeeAddressV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayeeAddressV3} obj Optional instance to populate.
     * @return {module:model/CreatePayeeAddressV3} The populated <code>CreatePayeeAddressV3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePayeeAddressV3();

            if (data.hasOwnProperty('line1')) {
                obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
            }
            if (data.hasOwnProperty('line2')) {
                obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
            }
            if (data.hasOwnProperty('line3')) {
                obj['line3'] = ApiClient.convertToType(data['line3'], 'String');
            }
            if (data.hasOwnProperty('line4')) {
                obj['line4'] = ApiClient.convertToType(data['line4'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('countyOrProvince')) {
                obj['countyOrProvince'] = ApiClient.convertToType(data['countyOrProvince'], 'String');
            }
            if (data.hasOwnProperty('zipOrPostcode')) {
                obj['zipOrPostcode'] = ApiClient.convertToType(data['zipOrPostcode'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} line1
 */
CreatePayeeAddressV3.prototype['line1'] = undefined;

/**
 * @member {String} line2
 */
CreatePayeeAddressV3.prototype['line2'] = undefined;

/**
 * @member {String} line3
 */
CreatePayeeAddressV3.prototype['line3'] = undefined;

/**
 * @member {String} line4
 */
CreatePayeeAddressV3.prototype['line4'] = undefined;

/**
 * @member {String} city
 */
CreatePayeeAddressV3.prototype['city'] = undefined;

/**
 * @member {String} countyOrProvince
 */
CreatePayeeAddressV3.prototype['countyOrProvince'] = undefined;

/**
 * @member {String} zipOrPostcode
 */
CreatePayeeAddressV3.prototype['zipOrPostcode'] = undefined;

/**
 * 2 letter ISO 3166-1 country code
 * @member {module:model/CreatePayeeAddressV3.CountryEnum} country
 */
CreatePayeeAddressV3.prototype['country'] = undefined;





/**
 * Allowed values for the <code>country</code> property.
 * @enum {String}
 * @readonly
 */
CreatePayeeAddressV3['CountryEnum'] = {

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



export default CreatePayeeAddressV3;

