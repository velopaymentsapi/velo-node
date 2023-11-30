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
import FundingEvent from './FundingEvent';
import PayorFundingDetectedAllOf from './PayorFundingDetectedAllOf';

/**
 * The PayorFundingDetected model module.
 * @module model/PayorFundingDetected
 * @version 2.37.150-beta.1
 */
class PayorFundingDetected {
    /**
     * Constructs a new <code>PayorFundingDetected</code>.
     * Notification of funding received on behalf of payor.
     * @alias module:model/PayorFundingDetected
     * @implements module:model/FundingEvent
     * @implements module:model/PayorFundingDetectedAllOf
     * @param sourceType {String} OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
     * @param eventId {String} UUID id of the source event in the Velo platform
     * @param createdAt {Date} ISO8601 timestamp indicating when the source event was created
     * @param payorId {String} ID of the payor within the Velo platform
     * @param fundingRequestId {String} ID of this funding transaction within the Velo platform
     */
    constructor(sourceType, eventId, createdAt, payorId, fundingRequestId) { 
        FundingEvent.initialize(this, sourceType, eventId, createdAt);PayorFundingDetectedAllOf.initialize(this, payorId, fundingRequestId);
        PayorFundingDetected.initialize(this, sourceType, eventId, createdAt, payorId, fundingRequestId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceType, eventId, createdAt, payorId, fundingRequestId) { 
        obj['sourceType'] = sourceType;
        obj['eventId'] = eventId;
        obj['createdAt'] = createdAt;
        obj['payorId'] = payorId;
        obj['fundingRequestId'] = fundingRequestId;
    }

    /**
     * Constructs a <code>PayorFundingDetected</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorFundingDetected} obj Optional instance to populate.
     * @return {module:model/PayorFundingDetected} The populated <code>PayorFundingDetected</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayorFundingDetected();
            FundingEvent.constructFromObject(data, obj);
            PayorFundingDetectedAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('sourceType')) {
                obj['sourceType'] = ApiClient.convertToType(data['sourceType'], 'String');
            }
            if (data.hasOwnProperty('eventId')) {
                obj['eventId'] = ApiClient.convertToType(data['eventId'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('railsId')) {
                obj['railsId'] = ApiClient.convertToType(data['railsId'], 'String');
            }
            if (data.hasOwnProperty('payorId')) {
                obj['payorId'] = ApiClient.convertToType(data['payorId'], 'String');
            }
            if (data.hasOwnProperty('fundingRequestId')) {
                obj['fundingRequestId'] = ApiClient.convertToType(data['fundingRequestId'], 'String');
            }
            if (data.hasOwnProperty('fundingRef')) {
                obj['fundingRef'] = ApiClient.convertToType(data['fundingRef'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('physicalAccountName')) {
                obj['physicalAccountName'] = ApiClient.convertToType(data['physicalAccountName'], 'String');
            }
            if (data.hasOwnProperty('sourceAccountName')) {
                obj['sourceAccountName'] = ApiClient.convertToType(data['sourceAccountName'], 'String');
            }
            if (data.hasOwnProperty('sourceAccountId')) {
                obj['sourceAccountId'] = ApiClient.convertToType(data['sourceAccountId'], 'String');
            }
            if (data.hasOwnProperty('additionalInformation')) {
                obj['additionalInformation'] = ApiClient.convertToType(data['additionalInformation'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('transactionReference')) {
                obj['transactionReference'] = ApiClient.convertToType(data['transactionReference'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PayorFundingDetected</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PayorFundingDetected</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PayorFundingDetected.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sourceType'] && !(typeof data['sourceType'] === 'string' || data['sourceType'] instanceof String)) {
            throw new Error("Expected the field `sourceType` to be a primitive type in the JSON string but got " + data['sourceType']);
        }
        // ensure the json data is a string
        if (data['eventId'] && !(typeof data['eventId'] === 'string' || data['eventId'] instanceof String)) {
            throw new Error("Expected the field `eventId` to be a primitive type in the JSON string but got " + data['eventId']);
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
        if (data['fundingRequestId'] && !(typeof data['fundingRequestId'] === 'string' || data['fundingRequestId'] instanceof String)) {
            throw new Error("Expected the field `fundingRequestId` to be a primitive type in the JSON string but got " + data['fundingRequestId']);
        }
        // ensure the json data is a string
        if (data['fundingRef'] && !(typeof data['fundingRef'] === 'string' || data['fundingRef'] instanceof String)) {
            throw new Error("Expected the field `fundingRef` to be a primitive type in the JSON string but got " + data['fundingRef']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['physicalAccountName'] && !(typeof data['physicalAccountName'] === 'string' || data['physicalAccountName'] instanceof String)) {
            throw new Error("Expected the field `physicalAccountName` to be a primitive type in the JSON string but got " + data['physicalAccountName']);
        }
        // ensure the json data is a string
        if (data['sourceAccountName'] && !(typeof data['sourceAccountName'] === 'string' || data['sourceAccountName'] instanceof String)) {
            throw new Error("Expected the field `sourceAccountName` to be a primitive type in the JSON string but got " + data['sourceAccountName']);
        }
        // ensure the json data is a string
        if (data['sourceAccountId'] && !(typeof data['sourceAccountId'] === 'string' || data['sourceAccountId'] instanceof String)) {
            throw new Error("Expected the field `sourceAccountId` to be a primitive type in the JSON string but got " + data['sourceAccountId']);
        }
        // ensure the json data is a string
        if (data['additionalInformation'] && !(typeof data['additionalInformation'] === 'string' || data['additionalInformation'] instanceof String)) {
            throw new Error("Expected the field `additionalInformation` to be a primitive type in the JSON string but got " + data['additionalInformation']);
        }
        // ensure the json data is a string
        if (data['transactionId'] && !(typeof data['transactionId'] === 'string' || data['transactionId'] instanceof String)) {
            throw new Error("Expected the field `transactionId` to be a primitive type in the JSON string but got " + data['transactionId']);
        }
        // ensure the json data is a string
        if (data['transactionReference'] && !(typeof data['transactionReference'] === 'string' || data['transactionReference'] instanceof String)) {
            throw new Error("Expected the field `transactionReference` to be a primitive type in the JSON string but got " + data['transactionReference']);
        }

        return true;
    }


}

PayorFundingDetected.RequiredProperties = ["sourceType", "eventId", "createdAt", "payorId", "fundingRequestId"];

/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */
PayorFundingDetected.prototype['sourceType'] = undefined;

/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */
PayorFundingDetected.prototype['eventId'] = undefined;

/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */
PayorFundingDetected.prototype['createdAt'] = undefined;

/**
 * the identifier of the payment rail from which funding was received
 * @member {String} railsId
 */
PayorFundingDetected.prototype['railsId'] = undefined;

/**
 * ID of the payor within the Velo platform
 * @member {String} payorId
 */
PayorFundingDetected.prototype['payorId'] = undefined;

/**
 * ID of this funding transaction within the Velo platform
 * @member {String} fundingRequestId
 */
PayorFundingDetected.prototype['fundingRequestId'] = undefined;

/**
 * the external identity reference for this funding transaction
 * @member {String} fundingRef
 */
PayorFundingDetected.prototype['fundingRef'] = undefined;

/**
 * the ISO-4217 code for the currency in which the funding was made
 * @member {String} currency
 */
PayorFundingDetected.prototype['currency'] = undefined;

/**
 * the received funding amount in currency minor units
 * @member {Number} amount
 */
PayorFundingDetected.prototype['amount'] = undefined;

/**
 * the name of the account as registered with the payment rail
 * @member {String} physicalAccountName
 */
PayorFundingDetected.prototype['physicalAccountName'] = undefined;

/**
 * the name of the account as registered with the Velo platform
 * @member {String} sourceAccountName
 */
PayorFundingDetected.prototype['sourceAccountName'] = undefined;

/**
 * the ID of the account as registered with the Velo platform
 * @member {String} sourceAccountId
 */
PayorFundingDetected.prototype['sourceAccountId'] = undefined;

/**
 * any additional information received from the payment rail
 * @member {String} additionalInformation
 */
PayorFundingDetected.prototype['additionalInformation'] = undefined;

/**
 * The Id of the related transaction
 * @member {String} transactionId
 */
PayorFundingDetected.prototype['transactionId'] = undefined;

/**
 * The payors own reference for the related transaction
 * @member {String} transactionReference
 */
PayorFundingDetected.prototype['transactionReference'] = undefined;


// Implement FundingEvent interface:
/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */
FundingEvent.prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */
FundingEvent.prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */
FundingEvent.prototype['createdAt'] = undefined;
// Implement PayorFundingDetectedAllOf interface:
/**
 * the identifier of the payment rail from which funding was received
 * @member {String} railsId
 */
PayorFundingDetectedAllOf.prototype['railsId'] = undefined;
/**
 * ID of the payor within the Velo platform
 * @member {String} payorId
 */
PayorFundingDetectedAllOf.prototype['payorId'] = undefined;
/**
 * ID of this funding transaction within the Velo platform
 * @member {String} fundingRequestId
 */
PayorFundingDetectedAllOf.prototype['fundingRequestId'] = undefined;
/**
 * the external identity reference for this funding transaction
 * @member {String} fundingRef
 */
PayorFundingDetectedAllOf.prototype['fundingRef'] = undefined;
/**
 * the ISO-4217 code for the currency in which the funding was made
 * @member {String} currency
 */
PayorFundingDetectedAllOf.prototype['currency'] = undefined;
/**
 * the received funding amount in currency minor units
 * @member {Number} amount
 */
PayorFundingDetectedAllOf.prototype['amount'] = undefined;
/**
 * the name of the account as registered with the payment rail
 * @member {String} physicalAccountName
 */
PayorFundingDetectedAllOf.prototype['physicalAccountName'] = undefined;
/**
 * the name of the account as registered with the Velo platform
 * @member {String} sourceAccountName
 */
PayorFundingDetectedAllOf.prototype['sourceAccountName'] = undefined;
/**
 * the ID of the account as registered with the Velo platform
 * @member {String} sourceAccountId
 */
PayorFundingDetectedAllOf.prototype['sourceAccountId'] = undefined;
/**
 * any additional information received from the payment rail
 * @member {String} additionalInformation
 */
PayorFundingDetectedAllOf.prototype['additionalInformation'] = undefined;
/**
 * The Id of the related transaction
 * @member {String} transactionId
 */
PayorFundingDetectedAllOf.prototype['transactionId'] = undefined;
/**
 * The payors own reference for the related transaction
 * @member {String} transactionReference
 */
PayorFundingDetectedAllOf.prototype['transactionReference'] = undefined;




export default PayorFundingDetected;
