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
import AutoTopUpConfigV3 from './AutoTopUpConfigV3';
import NotificationsV3 from './NotificationsV3';

/**
 * The SourceAccountResponseV3 model module.
 * @module model/SourceAccountResponseV3
 * @version 2.37.150-beta.1
 */
class SourceAccountResponseV3 {
    /**
     * Constructs a new <code>SourceAccountResponseV3</code>.
     * @alias module:model/SourceAccountResponseV3
     * @param id {String} Source Account Id
     * @param railsId {String} 
     * @param type {String} 
     */
    constructor(id, railsId, type) { 
        
        SourceAccountResponseV3.initialize(this, id, railsId, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, railsId, type) { 
        obj['id'] = id;
        obj['railsId'] = railsId;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>SourceAccountResponseV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceAccountResponseV3} obj Optional instance to populate.
     * @return {module:model/SourceAccountResponseV3} The populated <code>SourceAccountResponseV3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceAccountResponseV3();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('fundingRef')) {
                obj['fundingRef'] = ApiClient.convertToType(data['fundingRef'], 'String');
            }
            if (data.hasOwnProperty('physicalAccountName')) {
                obj['physicalAccountName'] = ApiClient.convertToType(data['physicalAccountName'], 'String');
            }
            if (data.hasOwnProperty('railsId')) {
                obj['railsId'] = ApiClient.convertToType(data['railsId'], 'String');
            }
            if (data.hasOwnProperty('payorId')) {
                obj['payorId'] = ApiClient.convertToType(data['payorId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('pooled')) {
                obj['pooled'] = ApiClient.convertToType(data['pooled'], 'Boolean');
            }
            if (data.hasOwnProperty('customerId')) {
                obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
            }
            if (data.hasOwnProperty('physicalAccountId')) {
                obj['physicalAccountId'] = ApiClient.convertToType(data['physicalAccountId'], 'String');
            }
            if (data.hasOwnProperty('notifications')) {
                obj['notifications'] = NotificationsV3.constructFromObject(data['notifications']);
            }
            if (data.hasOwnProperty('autoTopUpConfig')) {
                obj['autoTopUpConfig'] = AutoTopUpConfigV3.constructFromObject(data['autoTopUpConfig']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('userDeleted')) {
                obj['userDeleted'] = ApiClient.convertToType(data['userDeleted'], 'Boolean');
            }
            if (data.hasOwnProperty('deletedAt')) {
                obj['deletedAt'] = ApiClient.convertToType(data['deletedAt'], 'Date');
            }
            if (data.hasOwnProperty('transmissionTypes')) {
                obj['transmissionTypes'] = ApiClient.convertToType(data['transmissionTypes'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SourceAccountResponseV3</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SourceAccountResponseV3</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SourceAccountResponseV3.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['fundingRef'] && !(typeof data['fundingRef'] === 'string' || data['fundingRef'] instanceof String)) {
            throw new Error("Expected the field `fundingRef` to be a primitive type in the JSON string but got " + data['fundingRef']);
        }
        // ensure the json data is a string
        if (data['physicalAccountName'] && !(typeof data['physicalAccountName'] === 'string' || data['physicalAccountName'] instanceof String)) {
            throw new Error("Expected the field `physicalAccountName` to be a primitive type in the JSON string but got " + data['physicalAccountName']);
        }
        // ensure the json data is a string
        if (data['railsId'] && !(typeof data['railsId'] === 'string' || data['railsId'] instanceof String)) {
            throw new Error("Expected the field `railsId` to be a primitive type in the JSON string but got " + data['railsId']);
        }
        // ensure the json data is a string
        if (data['payorId'] && !(typeof data['payorId'] === 'string' || data['payorId'] instanceof String)) {
            throw new Error("Expected the field `payorId` to be a primitive type in the JSON string but got " + data['payorId']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['customerId'] && !(typeof data['customerId'] === 'string' || data['customerId'] instanceof String)) {
            throw new Error("Expected the field `customerId` to be a primitive type in the JSON string but got " + data['customerId']);
        }
        // ensure the json data is a string
        if (data['physicalAccountId'] && !(typeof data['physicalAccountId'] === 'string' || data['physicalAccountId'] instanceof String)) {
            throw new Error("Expected the field `physicalAccountId` to be a primitive type in the JSON string but got " + data['physicalAccountId']);
        }
        // validate the optional field `notifications`
        if (data['notifications']) { // data not null
          NotificationsV3.validateJSON(data['notifications']);
        }
        // validate the optional field `autoTopUpConfig`
        if (data['autoTopUpConfig']) { // data not null
          AutoTopUpConfigV3.validateJSON(data['autoTopUpConfig']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['transmissionTypes'])) {
            throw new Error("Expected the field `transmissionTypes` to be an array in the JSON data but got " + data['transmissionTypes']);
        }

        return true;
    }


}

SourceAccountResponseV3.RequiredProperties = ["id", "railsId", "type"];

/**
 * Source Account Id
 * @member {String} id
 */
SourceAccountResponseV3.prototype['id'] = undefined;

/**
 * Decimal implied
 * @member {Number} balance
 */
SourceAccountResponseV3.prototype['balance'] = undefined;

/**
 * Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} currency
 */
SourceAccountResponseV3.prototype['currency'] = undefined;

/**
 * The funding reference (will not be set for DECOUPLED accounts).
 * @member {String} fundingRef
 */
SourceAccountResponseV3.prototype['fundingRef'] = undefined;

/**
 * The physical account name (will not be set for DECOUPLED accounts).
 * @member {String} physicalAccountName
 */
SourceAccountResponseV3.prototype['physicalAccountName'] = undefined;

/**
 * @member {String} railsId
 */
SourceAccountResponseV3.prototype['railsId'] = undefined;

/**
 * @member {String} payorId
 */
SourceAccountResponseV3.prototype['payorId'] = undefined;

/**
 * @member {String} name
 */
SourceAccountResponseV3.prototype['name'] = undefined;

/**
 * The pooled account flag (will not be set for DECOUPLED accounts).
 * @member {Boolean} pooled
 */
SourceAccountResponseV3.prototype['pooled'] = undefined;

/**
 * @member {String} customerId
 */
SourceAccountResponseV3.prototype['customerId'] = undefined;

/**
 * The physical account id (will not be set for DECOUPLED accounts).
 * @member {String} physicalAccountId
 */
SourceAccountResponseV3.prototype['physicalAccountId'] = undefined;

/**
 * @member {module:model/NotificationsV3} notifications
 */
SourceAccountResponseV3.prototype['notifications'] = undefined;

/**
 * @member {module:model/AutoTopUpConfigV3} autoTopUpConfig
 */
SourceAccountResponseV3.prototype['autoTopUpConfig'] = undefined;

/**
 * @member {String} type
 */
SourceAccountResponseV3.prototype['type'] = undefined;

/**
 * Valid ISO 3166 2 character country code. See the <a href=\"https://www.iso.org/iso-3166-country-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} country
 */
SourceAccountResponseV3.prototype['country'] = undefined;

/**
 * An optional flag for whether the source account has been deleted. Only present in the response if true.
 * @member {Boolean} deleted
 */
SourceAccountResponseV3.prototype['deleted'] = undefined;

/**
 * An optional flag for whether the source account has been deleted by a user. Only present in the response if true.
 * @member {Boolean} userDeleted
 */
SourceAccountResponseV3.prototype['userDeleted'] = undefined;

/**
 * An optional timestamp when the source account has been deleted. Only present in the response if deleted.
 * @member {Date} deletedAt
 */
SourceAccountResponseV3.prototype['deletedAt'] = undefined;

/**
 * List of supported transmission types.
 * @member {Array.<String>} transmissionTypes
 */
SourceAccountResponseV3.prototype['transmissionTypes'] = undefined;






export default SourceAccountResponseV3;

