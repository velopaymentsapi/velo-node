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

/**
 * The PaymentEventResponseV3 model module.
 * @module model/PaymentEventResponseV3
 * @version 2.37.150-beta.1
 */
class PaymentEventResponseV3 {
    /**
     * Constructs a new <code>PaymentEventResponseV3</code>.
     * @alias module:model/PaymentEventResponseV3
     * @param eventId {String} The id of the event.
     * @param eventDateTime {Date} The date/time at which the event occurred.
     * @param eventType {String} The type of the event. One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN
     */
    constructor(eventId, eventDateTime, eventType) { 
        
        PaymentEventResponseV3.initialize(this, eventId, eventDateTime, eventType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventId, eventDateTime, eventType) { 
        obj['eventId'] = eventId;
        obj['eventDateTime'] = eventDateTime;
        obj['eventType'] = eventType;
    }

    /**
     * Constructs a <code>PaymentEventResponseV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentEventResponseV3} obj Optional instance to populate.
     * @return {module:model/PaymentEventResponseV3} The populated <code>PaymentEventResponseV3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentEventResponseV3();

            if (data.hasOwnProperty('eventId')) {
                obj['eventId'] = ApiClient.convertToType(data['eventId'], 'String');
            }
            if (data.hasOwnProperty('eventDateTime')) {
                obj['eventDateTime'] = ApiClient.convertToType(data['eventDateTime'], 'Date');
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('sourceCurrency')) {
                obj['sourceCurrency'] = ApiClient.convertToType(data['sourceCurrency'], 'String');
            }
            if (data.hasOwnProperty('sourceAmount')) {
                obj['sourceAmount'] = ApiClient.convertToType(data['sourceAmount'], 'Number');
            }
            if (data.hasOwnProperty('paymentCurrency')) {
                obj['paymentCurrency'] = ApiClient.convertToType(data['paymentCurrency'], 'String');
            }
            if (data.hasOwnProperty('paymentAmount')) {
                obj['paymentAmount'] = ApiClient.convertToType(data['paymentAmount'], 'Number');
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'String');
            }
            if (data.hasOwnProperty('routingNumber')) {
                obj['routingNumber'] = ApiClient.convertToType(data['routingNumber'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('accountName')) {
                obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
            }
            if (data.hasOwnProperty('principal')) {
                obj['principal'] = ApiClient.convertToType(data['principal'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentEventResponseV3</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentEventResponseV3</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymentEventResponseV3.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['eventId'] && !(typeof data['eventId'] === 'string' || data['eventId'] instanceof String)) {
            throw new Error("Expected the field `eventId` to be a primitive type in the JSON string but got " + data['eventId']);
        }
        // ensure the json data is a string
        if (data['eventType'] && !(typeof data['eventType'] === 'string' || data['eventType'] instanceof String)) {
            throw new Error("Expected the field `eventType` to be a primitive type in the JSON string but got " + data['eventType']);
        }
        // ensure the json data is a string
        if (data['sourceCurrency'] && !(typeof data['sourceCurrency'] === 'string' || data['sourceCurrency'] instanceof String)) {
            throw new Error("Expected the field `sourceCurrency` to be a primitive type in the JSON string but got " + data['sourceCurrency']);
        }
        // ensure the json data is a string
        if (data['paymentCurrency'] && !(typeof data['paymentCurrency'] === 'string' || data['paymentCurrency'] instanceof String)) {
            throw new Error("Expected the field `paymentCurrency` to be a primitive type in the JSON string but got " + data['paymentCurrency']);
        }
        // ensure the json data is a string
        if (data['accountNumber'] && !(typeof data['accountNumber'] === 'string' || data['accountNumber'] instanceof String)) {
            throw new Error("Expected the field `accountNumber` to be a primitive type in the JSON string but got " + data['accountNumber']);
        }
        // ensure the json data is a string
        if (data['routingNumber'] && !(typeof data['routingNumber'] === 'string' || data['routingNumber'] instanceof String)) {
            throw new Error("Expected the field `routingNumber` to be a primitive type in the JSON string but got " + data['routingNumber']);
        }
        // ensure the json data is a string
        if (data['iban'] && !(typeof data['iban'] === 'string' || data['iban'] instanceof String)) {
            throw new Error("Expected the field `iban` to be a primitive type in the JSON string but got " + data['iban']);
        }
        // ensure the json data is a string
        if (data['accountName'] && !(typeof data['accountName'] === 'string' || data['accountName'] instanceof String)) {
            throw new Error("Expected the field `accountName` to be a primitive type in the JSON string but got " + data['accountName']);
        }
        // ensure the json data is a string
        if (data['principal'] && !(typeof data['principal'] === 'string' || data['principal'] instanceof String)) {
            throw new Error("Expected the field `principal` to be a primitive type in the JSON string but got " + data['principal']);
        }

        return true;
    }


}

PaymentEventResponseV3.RequiredProperties = ["eventId", "eventDateTime", "eventType"];

/**
 * The id of the event.
 * @member {String} eventId
 */
PaymentEventResponseV3.prototype['eventId'] = undefined;

/**
 * The date/time at which the event occurred.
 * @member {Date} eventDateTime
 */
PaymentEventResponseV3.prototype['eventDateTime'] = undefined;

/**
 * The type of the event. One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN
 * @member {String} eventType
 */
PaymentEventResponseV3.prototype['eventType'] = undefined;

/**
 * ISO 3 character currency code
 * @member {String} sourceCurrency
 */
PaymentEventResponseV3.prototype['sourceCurrency'] = undefined;

/**
 * The source amount exposed by the event.
 * @member {Number} sourceAmount
 */
PaymentEventResponseV3.prototype['sourceAmount'] = undefined;

/**
 * ISO 3 character currency code
 * @member {String} paymentCurrency
 */
PaymentEventResponseV3.prototype['paymentCurrency'] = undefined;

/**
 * The destination amount exposed by the event.
 * @member {Number} paymentAmount
 */
PaymentEventResponseV3.prototype['paymentAmount'] = undefined;

/**
 * The account number attached to the event.
 * @member {String} accountNumber
 */
PaymentEventResponseV3.prototype['accountNumber'] = undefined;

/**
 * The routing number attached to the event.
 * @member {String} routingNumber
 */
PaymentEventResponseV3.prototype['routingNumber'] = undefined;

/**
 * @member {String} iban
 */
PaymentEventResponseV3.prototype['iban'] = undefined;

/**
 * @member {String} accountName
 */
PaymentEventResponseV3.prototype['accountName'] = undefined;

/**
 * @member {String} principal
 */
PaymentEventResponseV3.prototype['principal'] = undefined;






export default PaymentEventResponseV3;

