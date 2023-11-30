/**
 * Velo Payments APIs
 * ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  ```   curl -X POST \\   -H \"Content-Type: application/json\" \\   -H \"Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==\" \\   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials' ```  If successful, this call will result in a **200** HTTP status code and a response body such as:  ```   {     \"access_token\":\"19f6bafd-93fd-4747-b229-00507bbc991f\",     \"token_type\":\"bearer\",     \"expires_in\":1799,     \"scope\":\"...\"   } ``` ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  ```   -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \" ```  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response.   ## Http Status Codes Following is a list of Http Status codes that could be returned by the platform      | Status Code            | Description                                                                          |     | -----------------------| -------------------------------------------------------------------------------------|     | 200 OK                 | The request was successfully processed and usually returns a json response           |     | 201 Created            | A resource was created and a Location header is returned linking to the new resource |     | 202 Accepted           | The request has been accepted for processing                                         |     | 204 No Content         | The request has been processed and there is no response (usually deletes and updates)|     | 400 Bad Request        | The request is invalid and should be fixed before retrying                           |     | 401 Unauthorized       | Authentication has failed, usually means the token has expired                       |     | 403 Forbidden          | The user does not have permissions for the request                                   |     | 404 Not Found          | The resource was not found                                                           |     | 409 Conflict           | The resource already exists and there is a conflict                                  |     | 429 Too Many Requests  | The user has submitted too many requests in a given amount of time                   |     | 5xx Server Error       | Platform internal error (should rarely happen)                                       | 
 *
 * The version of the OpenAPI document: 2.37.150
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AddressV4 from './AddressV4';

/**
 * The PaymentChannelResponseV4 model module.
 * @module model/PaymentChannelResponseV4
 * @version 2.37.150-beta.1
 */
class PaymentChannelResponseV4 {
    /**
     * Constructs a new <code>PaymentChannelResponseV4</code>.
     * @alias module:model/PaymentChannelResponseV4
     * @param id {String} 
     * @param paymentChannelName {String} 
     * @param accountName {String} 
     * @param channelType {String} Payment channel type. One of the following values: CHANNEL_BANK
     * @param countryCode {String} Valid ISO 3166 2 character country code. See the <a href=\"https://www.iso.org/iso-3166-country-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
     * @param currency {String} Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
     */
    constructor(id, paymentChannelName, accountName, channelType, countryCode, currency) { 
        
        PaymentChannelResponseV4.initialize(this, id, paymentChannelName, accountName, channelType, countryCode, currency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, paymentChannelName, accountName, channelType, countryCode, currency) { 
        obj['id'] = id;
        obj['paymentChannelName'] = paymentChannelName;
        obj['accountName'] = accountName;
        obj['channelType'] = channelType;
        obj['countryCode'] = countryCode;
        obj['currency'] = currency;
    }

    /**
     * Constructs a <code>PaymentChannelResponseV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentChannelResponseV4} obj Optional instance to populate.
     * @return {module:model/PaymentChannelResponseV4} The populated <code>PaymentChannelResponseV4</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentChannelResponseV4();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('payeeId')) {
                obj['payeeId'] = ApiClient.convertToType(data['payeeId'], 'String');
            }
            if (data.hasOwnProperty('paymentChannelName')) {
                obj['paymentChannelName'] = ApiClient.convertToType(data['paymentChannelName'], 'String');
            }
            if (data.hasOwnProperty('accountName')) {
                obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
            }
            if (data.hasOwnProperty('channelType')) {
                obj['channelType'] = ApiClient.convertToType(data['channelType'], 'String');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
            if (data.hasOwnProperty('routingNumber')) {
                obj['routingNumber'] = ApiClient.convertToType(data['routingNumber'], 'String');
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('payorIds')) {
                obj['payorIds'] = ApiClient.convertToType(data['payorIds'], ['String']);
            }
            if (data.hasOwnProperty('payeeName')) {
                obj['payeeName'] = ApiClient.convertToType(data['payeeName'], 'String');
            }
            if (data.hasOwnProperty('bankName')) {
                obj['bankName'] = ApiClient.convertToType(data['bankName'], 'String');
            }
            if (data.hasOwnProperty('bankSwiftBic')) {
                obj['bankSwiftBic'] = ApiClient.convertToType(data['bankSwiftBic'], 'String');
            }
            if (data.hasOwnProperty('bankAddress')) {
                obj['bankAddress'] = AddressV4.constructFromObject(data['bankAddress']);
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('disabledReasonCode')) {
                obj['disabledReasonCode'] = ApiClient.convertToType(data['disabledReasonCode'], 'String');
            }
            if (data.hasOwnProperty('disabledReason')) {
                obj['disabledReason'] = ApiClient.convertToType(data['disabledReason'], 'String');
            }
            if (data.hasOwnProperty('payable')) {
                obj['payable'] = ApiClient.convertToType(data['payable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentChannelResponseV4</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentChannelResponseV4</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymentChannelResponseV4.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['payeeId'] && !(typeof data['payeeId'] === 'string' || data['payeeId'] instanceof String)) {
            throw new Error("Expected the field `payeeId` to be a primitive type in the JSON string but got " + data['payeeId']);
        }
        // ensure the json data is a string
        if (data['paymentChannelName'] && !(typeof data['paymentChannelName'] === 'string' || data['paymentChannelName'] instanceof String)) {
            throw new Error("Expected the field `paymentChannelName` to be a primitive type in the JSON string but got " + data['paymentChannelName']);
        }
        // ensure the json data is a string
        if (data['accountName'] && !(typeof data['accountName'] === 'string' || data['accountName'] instanceof String)) {
            throw new Error("Expected the field `accountName` to be a primitive type in the JSON string but got " + data['accountName']);
        }
        // ensure the json data is a string
        if (data['channelType'] && !(typeof data['channelType'] === 'string' || data['channelType'] instanceof String)) {
            throw new Error("Expected the field `channelType` to be a primitive type in the JSON string but got " + data['channelType']);
        }
        // ensure the json data is a string
        if (data['countryCode'] && !(typeof data['countryCode'] === 'string' || data['countryCode'] instanceof String)) {
            throw new Error("Expected the field `countryCode` to be a primitive type in the JSON string but got " + data['countryCode']);
        }
        // ensure the json data is a string
        if (data['routingNumber'] && !(typeof data['routingNumber'] === 'string' || data['routingNumber'] instanceof String)) {
            throw new Error("Expected the field `routingNumber` to be a primitive type in the JSON string but got " + data['routingNumber']);
        }
        // ensure the json data is a string
        if (data['accountNumber'] && !(typeof data['accountNumber'] === 'string' || data['accountNumber'] instanceof String)) {
            throw new Error("Expected the field `accountNumber` to be a primitive type in the JSON string but got " + data['accountNumber']);
        }
        // ensure the json data is a string
        if (data['iban'] && !(typeof data['iban'] === 'string' || data['iban'] instanceof String)) {
            throw new Error("Expected the field `iban` to be a primitive type in the JSON string but got " + data['iban']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['payorIds'])) {
            throw new Error("Expected the field `payorIds` to be an array in the JSON data but got " + data['payorIds']);
        }
        // ensure the json data is a string
        if (data['payeeName'] && !(typeof data['payeeName'] === 'string' || data['payeeName'] instanceof String)) {
            throw new Error("Expected the field `payeeName` to be a primitive type in the JSON string but got " + data['payeeName']);
        }
        // ensure the json data is a string
        if (data['bankName'] && !(typeof data['bankName'] === 'string' || data['bankName'] instanceof String)) {
            throw new Error("Expected the field `bankName` to be a primitive type in the JSON string but got " + data['bankName']);
        }
        // ensure the json data is a string
        if (data['bankSwiftBic'] && !(typeof data['bankSwiftBic'] === 'string' || data['bankSwiftBic'] instanceof String)) {
            throw new Error("Expected the field `bankSwiftBic` to be a primitive type in the JSON string but got " + data['bankSwiftBic']);
        }
        // validate the optional field `bankAddress`
        if (data['bankAddress']) { // data not null
          AddressV4.validateJSON(data['bankAddress']);
        }
        // ensure the json data is a string
        if (data['disabledReasonCode'] && !(typeof data['disabledReasonCode'] === 'string' || data['disabledReasonCode'] instanceof String)) {
            throw new Error("Expected the field `disabledReasonCode` to be a primitive type in the JSON string but got " + data['disabledReasonCode']);
        }
        // ensure the json data is a string
        if (data['disabledReason'] && !(typeof data['disabledReason'] === 'string' || data['disabledReason'] instanceof String)) {
            throw new Error("Expected the field `disabledReason` to be a primitive type in the JSON string but got " + data['disabledReason']);
        }

        return true;
    }


}

PaymentChannelResponseV4.RequiredProperties = ["id", "paymentChannelName", "accountName", "channelType", "countryCode", "currency"];

/**
 * @member {String} id
 */
PaymentChannelResponseV4.prototype['id'] = undefined;

/**
 * @member {String} payeeId
 */
PaymentChannelResponseV4.prototype['payeeId'] = undefined;

/**
 * @member {String} paymentChannelName
 */
PaymentChannelResponseV4.prototype['paymentChannelName'] = undefined;

/**
 * @member {String} accountName
 */
PaymentChannelResponseV4.prototype['accountName'] = undefined;

/**
 * Payment channel type. One of the following values: CHANNEL_BANK
 * @member {String} channelType
 */
PaymentChannelResponseV4.prototype['channelType'] = undefined;

/**
 * Valid ISO 3166 2 character country code. See the <a href=\"https://www.iso.org/iso-3166-country-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} countryCode
 */
PaymentChannelResponseV4.prototype['countryCode'] = undefined;

/**
 * @member {String} routingNumber
 */
PaymentChannelResponseV4.prototype['routingNumber'] = undefined;

/**
 * @member {String} accountNumber
 */
PaymentChannelResponseV4.prototype['accountNumber'] = undefined;

/**
 * Must match the regular expression ```^[A-Za-z0-9]+$```.
 * @member {String} iban
 */
PaymentChannelResponseV4.prototype['iban'] = undefined;

/**
 * Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} currency
 */
PaymentChannelResponseV4.prototype['currency'] = undefined;

/**
 * @member {Array.<String>} payorIds
 */
PaymentChannelResponseV4.prototype['payorIds'] = undefined;

/**
 * @member {String} payeeName
 */
PaymentChannelResponseV4.prototype['payeeName'] = undefined;

/**
 * @member {String} bankName
 */
PaymentChannelResponseV4.prototype['bankName'] = undefined;

/**
 * @member {String} bankSwiftBic
 */
PaymentChannelResponseV4.prototype['bankSwiftBic'] = undefined;

/**
 * @member {module:model/AddressV4} bankAddress
 */
PaymentChannelResponseV4.prototype['bankAddress'] = undefined;

/**
 * @member {Boolean} deleted
 */
PaymentChannelResponseV4.prototype['deleted'] = undefined;

/**
 * @member {Boolean} enabled
 */
PaymentChannelResponseV4.prototype['enabled'] = undefined;

/**
 * @member {String} disabledReasonCode
 */
PaymentChannelResponseV4.prototype['disabledReasonCode'] = undefined;

/**
 * @member {String} disabledReason
 */
PaymentChannelResponseV4.prototype['disabledReason'] = undefined;

/**
 * Whether this payment channel is payable
 * @member {Boolean} payable
 */
PaymentChannelResponseV4.prototype['payable'] = undefined;






export default PaymentChannelResponseV4;

