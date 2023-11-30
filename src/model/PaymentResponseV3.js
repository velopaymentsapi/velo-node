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
import PaymentEventResponseV3 from './PaymentEventResponseV3';

/**
 * The PaymentResponseV3 model module.
 * @module model/PaymentResponseV3
 * @version 2.37.150-beta.1
 */
class PaymentResponseV3 {
    /**
     * Constructs a new <code>PaymentResponseV3</code>.
     * @alias module:model/PaymentResponseV3
     * @param paymentId {String} The id of the payment
     * @param payeeId {String} The id of the paymeee
     * @param payorId {String} The id of the payor
     * @param quoteId {String} The quote Id used for the FX
     * @param sourceAccountId {String} The id of the source account from which the payment was taken
     * @param paymentAmount {Number} The amount which the payee will receive
     * @param submittedDateTime {Date} 
     * @param status {String} Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, WITHDRAWN
     * @param fundingStatus {String} The funding status of the payment. One of the following values: [FUNDED, INSTRUCTED, UNFUNDED
     * @param railsId {String} The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
     * @param events {Array.<module:model/PaymentEventResponseV3>} 
     */
    constructor(paymentId, payeeId, payorId, quoteId, sourceAccountId, paymentAmount, submittedDateTime, status, fundingStatus, railsId, events) { 
        
        PaymentResponseV3.initialize(this, paymentId, payeeId, payorId, quoteId, sourceAccountId, paymentAmount, submittedDateTime, status, fundingStatus, railsId, events);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, paymentId, payeeId, payorId, quoteId, sourceAccountId, paymentAmount, submittedDateTime, status, fundingStatus, railsId, events) { 
        obj['paymentId'] = paymentId;
        obj['payeeId'] = payeeId;
        obj['payorId'] = payorId;
        obj['quoteId'] = quoteId;
        obj['sourceAccountId'] = sourceAccountId;
        obj['paymentAmount'] = paymentAmount;
        obj['submittedDateTime'] = submittedDateTime;
        obj['status'] = status;
        obj['fundingStatus'] = fundingStatus;
        obj['railsId'] = railsId || 'RAILS ID UNAVAILABLE';
        obj['events'] = events;
    }

    /**
     * Constructs a <code>PaymentResponseV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentResponseV3} obj Optional instance to populate.
     * @return {module:model/PaymentResponseV3} The populated <code>PaymentResponseV3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentResponseV3();

            if (data.hasOwnProperty('paymentId')) {
                obj['paymentId'] = ApiClient.convertToType(data['paymentId'], 'String');
            }
            if (data.hasOwnProperty('payeeId')) {
                obj['payeeId'] = ApiClient.convertToType(data['payeeId'], 'String');
            }
            if (data.hasOwnProperty('payorId')) {
                obj['payorId'] = ApiClient.convertToType(data['payorId'], 'String');
            }
            if (data.hasOwnProperty('payorName')) {
                obj['payorName'] = ApiClient.convertToType(data['payorName'], 'String');
            }
            if (data.hasOwnProperty('quoteId')) {
                obj['quoteId'] = ApiClient.convertToType(data['quoteId'], 'String');
            }
            if (data.hasOwnProperty('sourceAccountId')) {
                obj['sourceAccountId'] = ApiClient.convertToType(data['sourceAccountId'], 'String');
            }
            if (data.hasOwnProperty('sourceAccountName')) {
                obj['sourceAccountName'] = ApiClient.convertToType(data['sourceAccountName'], 'String');
            }
            if (data.hasOwnProperty('remoteId')) {
                obj['remoteId'] = ApiClient.convertToType(data['remoteId'], 'String');
            }
            if (data.hasOwnProperty('sourceAmount')) {
                obj['sourceAmount'] = ApiClient.convertToType(data['sourceAmount'], 'Number');
            }
            if (data.hasOwnProperty('sourceCurrency')) {
                obj['sourceCurrency'] = ApiClient.convertToType(data['sourceCurrency'], 'String');
            }
            if (data.hasOwnProperty('paymentAmount')) {
                obj['paymentAmount'] = ApiClient.convertToType(data['paymentAmount'], 'Number');
            }
            if (data.hasOwnProperty('paymentCurrency')) {
                obj['paymentCurrency'] = ApiClient.convertToType(data['paymentCurrency'], 'String');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('invertedRate')) {
                obj['invertedRate'] = ApiClient.convertToType(data['invertedRate'], 'Number');
            }
            if (data.hasOwnProperty('submittedDateTime')) {
                obj['submittedDateTime'] = ApiClient.convertToType(data['submittedDateTime'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('fundingStatus')) {
                obj['fundingStatus'] = ApiClient.convertToType(data['fundingStatus'], 'String');
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
            if (data.hasOwnProperty('paymentMemo')) {
                obj['paymentMemo'] = ApiClient.convertToType(data['paymentMemo'], 'String');
            }
            if (data.hasOwnProperty('filenameReference')) {
                obj['filenameReference'] = ApiClient.convertToType(data['filenameReference'], 'String');
            }
            if (data.hasOwnProperty('individualIdentificationNumber')) {
                obj['individualIdentificationNumber'] = ApiClient.convertToType(data['individualIdentificationNumber'], 'String');
            }
            if (data.hasOwnProperty('traceNumber')) {
                obj['traceNumber'] = ApiClient.convertToType(data['traceNumber'], 'String');
            }
            if (data.hasOwnProperty('payorPaymentId')) {
                obj['payorPaymentId'] = ApiClient.convertToType(data['payorPaymentId'], 'String');
            }
            if (data.hasOwnProperty('paymentChannelId')) {
                obj['paymentChannelId'] = ApiClient.convertToType(data['paymentChannelId'], 'String');
            }
            if (data.hasOwnProperty('paymentChannelName')) {
                obj['paymentChannelName'] = ApiClient.convertToType(data['paymentChannelName'], 'String');
            }
            if (data.hasOwnProperty('accountName')) {
                obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
            }
            if (data.hasOwnProperty('railsId')) {
                obj['railsId'] = ApiClient.convertToType(data['railsId'], 'String');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [PaymentEventResponseV3]);
            }
            if (data.hasOwnProperty('returnCost')) {
                obj['returnCost'] = ApiClient.convertToType(data['returnCost'], 'Number');
            }
            if (data.hasOwnProperty('returnReason')) {
                obj['returnReason'] = ApiClient.convertToType(data['returnReason'], 'String');
            }
            if (data.hasOwnProperty('railsPaymentId')) {
                obj['railsPaymentId'] = ApiClient.convertToType(data['railsPaymentId'], 'String');
            }
            if (data.hasOwnProperty('railsBatchId')) {
                obj['railsBatchId'] = ApiClient.convertToType(data['railsBatchId'], 'String');
            }
            if (data.hasOwnProperty('paymentScheme')) {
                obj['paymentScheme'] = ApiClient.convertToType(data['paymentScheme'], 'String');
            }
            if (data.hasOwnProperty('rejectionReason')) {
                obj['rejectionReason'] = ApiClient.convertToType(data['rejectionReason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentResponseV3</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentResponseV3</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymentResponseV3.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['paymentId'] && !(typeof data['paymentId'] === 'string' || data['paymentId'] instanceof String)) {
            throw new Error("Expected the field `paymentId` to be a primitive type in the JSON string but got " + data['paymentId']);
        }
        // ensure the json data is a string
        if (data['payeeId'] && !(typeof data['payeeId'] === 'string' || data['payeeId'] instanceof String)) {
            throw new Error("Expected the field `payeeId` to be a primitive type in the JSON string but got " + data['payeeId']);
        }
        // ensure the json data is a string
        if (data['payorId'] && !(typeof data['payorId'] === 'string' || data['payorId'] instanceof String)) {
            throw new Error("Expected the field `payorId` to be a primitive type in the JSON string but got " + data['payorId']);
        }
        // ensure the json data is a string
        if (data['payorName'] && !(typeof data['payorName'] === 'string' || data['payorName'] instanceof String)) {
            throw new Error("Expected the field `payorName` to be a primitive type in the JSON string but got " + data['payorName']);
        }
        // ensure the json data is a string
        if (data['quoteId'] && !(typeof data['quoteId'] === 'string' || data['quoteId'] instanceof String)) {
            throw new Error("Expected the field `quoteId` to be a primitive type in the JSON string but got " + data['quoteId']);
        }
        // ensure the json data is a string
        if (data['sourceAccountId'] && !(typeof data['sourceAccountId'] === 'string' || data['sourceAccountId'] instanceof String)) {
            throw new Error("Expected the field `sourceAccountId` to be a primitive type in the JSON string but got " + data['sourceAccountId']);
        }
        // ensure the json data is a string
        if (data['sourceAccountName'] && !(typeof data['sourceAccountName'] === 'string' || data['sourceAccountName'] instanceof String)) {
            throw new Error("Expected the field `sourceAccountName` to be a primitive type in the JSON string but got " + data['sourceAccountName']);
        }
        // ensure the json data is a string
        if (data['remoteId'] && !(typeof data['remoteId'] === 'string' || data['remoteId'] instanceof String)) {
            throw new Error("Expected the field `remoteId` to be a primitive type in the JSON string but got " + data['remoteId']);
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
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['fundingStatus'] && !(typeof data['fundingStatus'] === 'string' || data['fundingStatus'] instanceof String)) {
            throw new Error("Expected the field `fundingStatus` to be a primitive type in the JSON string but got " + data['fundingStatus']);
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
        if (data['paymentMemo'] && !(typeof data['paymentMemo'] === 'string' || data['paymentMemo'] instanceof String)) {
            throw new Error("Expected the field `paymentMemo` to be a primitive type in the JSON string but got " + data['paymentMemo']);
        }
        // ensure the json data is a string
        if (data['filenameReference'] && !(typeof data['filenameReference'] === 'string' || data['filenameReference'] instanceof String)) {
            throw new Error("Expected the field `filenameReference` to be a primitive type in the JSON string but got " + data['filenameReference']);
        }
        // ensure the json data is a string
        if (data['individualIdentificationNumber'] && !(typeof data['individualIdentificationNumber'] === 'string' || data['individualIdentificationNumber'] instanceof String)) {
            throw new Error("Expected the field `individualIdentificationNumber` to be a primitive type in the JSON string but got " + data['individualIdentificationNumber']);
        }
        // ensure the json data is a string
        if (data['traceNumber'] && !(typeof data['traceNumber'] === 'string' || data['traceNumber'] instanceof String)) {
            throw new Error("Expected the field `traceNumber` to be a primitive type in the JSON string but got " + data['traceNumber']);
        }
        // ensure the json data is a string
        if (data['payorPaymentId'] && !(typeof data['payorPaymentId'] === 'string' || data['payorPaymentId'] instanceof String)) {
            throw new Error("Expected the field `payorPaymentId` to be a primitive type in the JSON string but got " + data['payorPaymentId']);
        }
        // ensure the json data is a string
        if (data['paymentChannelId'] && !(typeof data['paymentChannelId'] === 'string' || data['paymentChannelId'] instanceof String)) {
            throw new Error("Expected the field `paymentChannelId` to be a primitive type in the JSON string but got " + data['paymentChannelId']);
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
        if (data['railsId'] && !(typeof data['railsId'] === 'string' || data['railsId'] instanceof String)) {
            throw new Error("Expected the field `railsId` to be a primitive type in the JSON string but got " + data['railsId']);
        }
        // ensure the json data is a string
        if (data['countryCode'] && !(typeof data['countryCode'] === 'string' || data['countryCode'] instanceof String)) {
            throw new Error("Expected the field `countryCode` to be a primitive type in the JSON string but got " + data['countryCode']);
        }
        if (data['events']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['events'])) {
                throw new Error("Expected the field `events` to be an array in the JSON data but got " + data['events']);
            }
            // validate the optional field `events` (array)
            for (const item of data['events']) {
                PaymentEventResponseV3.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['returnReason'] && !(typeof data['returnReason'] === 'string' || data['returnReason'] instanceof String)) {
            throw new Error("Expected the field `returnReason` to be a primitive type in the JSON string but got " + data['returnReason']);
        }
        // ensure the json data is a string
        if (data['railsPaymentId'] && !(typeof data['railsPaymentId'] === 'string' || data['railsPaymentId'] instanceof String)) {
            throw new Error("Expected the field `railsPaymentId` to be a primitive type in the JSON string but got " + data['railsPaymentId']);
        }
        // ensure the json data is a string
        if (data['railsBatchId'] && !(typeof data['railsBatchId'] === 'string' || data['railsBatchId'] instanceof String)) {
            throw new Error("Expected the field `railsBatchId` to be a primitive type in the JSON string but got " + data['railsBatchId']);
        }
        // ensure the json data is a string
        if (data['paymentScheme'] && !(typeof data['paymentScheme'] === 'string' || data['paymentScheme'] instanceof String)) {
            throw new Error("Expected the field `paymentScheme` to be a primitive type in the JSON string but got " + data['paymentScheme']);
        }
        // ensure the json data is a string
        if (data['rejectionReason'] && !(typeof data['rejectionReason'] === 'string' || data['rejectionReason'] instanceof String)) {
            throw new Error("Expected the field `rejectionReason` to be a primitive type in the JSON string but got " + data['rejectionReason']);
        }

        return true;
    }


}

PaymentResponseV3.RequiredProperties = ["paymentId", "payeeId", "payorId", "quoteId", "sourceAccountId", "paymentAmount", "submittedDateTime", "status", "fundingStatus", "railsId", "events"];

/**
 * The id of the payment
 * @member {String} paymentId
 */
PaymentResponseV3.prototype['paymentId'] = undefined;

/**
 * The id of the paymeee
 * @member {String} payeeId
 */
PaymentResponseV3.prototype['payeeId'] = undefined;

/**
 * The id of the payor
 * @member {String} payorId
 */
PaymentResponseV3.prototype['payorId'] = undefined;

/**
 * The name of the payor
 * @member {String} payorName
 */
PaymentResponseV3.prototype['payorName'] = undefined;

/**
 * The quote Id used for the FX
 * @member {String} quoteId
 */
PaymentResponseV3.prototype['quoteId'] = undefined;

/**
 * The id of the source account from which the payment was taken
 * @member {String} sourceAccountId
 */
PaymentResponseV3.prototype['sourceAccountId'] = undefined;

/**
 * The name of the source account from which the payment was taken
 * @member {String} sourceAccountName
 */
PaymentResponseV3.prototype['sourceAccountName'] = undefined;

/**
 * The remote id by which the payor refers to the payee. Only populated once payment is confirmed
 * @member {String} remoteId
 */
PaymentResponseV3.prototype['remoteId'] = undefined;

/**
 * The source amount for the payment (amount debited to make the payment)
 * @member {Number} sourceAmount
 */
PaymentResponseV3.prototype['sourceAmount'] = undefined;

/**
 * ISO 3 character currency code
 * @member {String} sourceCurrency
 */
PaymentResponseV3.prototype['sourceCurrency'] = undefined;

/**
 * The amount which the payee will receive
 * @member {Number} paymentAmount
 */
PaymentResponseV3.prototype['paymentAmount'] = undefined;

/**
 * ISO 3 character currency code
 * @member {String} paymentCurrency
 */
PaymentResponseV3.prototype['paymentCurrency'] = undefined;

/**
 * The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
 * @member {Number} rate
 */
PaymentResponseV3.prototype['rate'] = undefined;

/**
 * The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
 * @member {Number} invertedRate
 */
PaymentResponseV3.prototype['invertedRate'] = undefined;

/**
 * @member {Date} submittedDateTime
 */
PaymentResponseV3.prototype['submittedDateTime'] = undefined;

/**
 * Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, WITHDRAWN
 * @member {String} status
 */
PaymentResponseV3.prototype['status'] = undefined;

/**
 * The funding status of the payment. One of the following values: [FUNDED, INSTRUCTED, UNFUNDED
 * @member {String} fundingStatus
 */
PaymentResponseV3.prototype['fundingStatus'] = undefined;

/**
 * The routing number for the payment.
 * @member {String} routingNumber
 */
PaymentResponseV3.prototype['routingNumber'] = undefined;

/**
 * The account number for the account which will receive the payment.
 * @member {String} accountNumber
 */
PaymentResponseV3.prototype['accountNumber'] = undefined;

/**
 * The iban for the payment.
 * @member {String} iban
 */
PaymentResponseV3.prototype['iban'] = undefined;

/**
 * The payment memo set by the payor
 * @member {String} paymentMemo
 */
PaymentResponseV3.prototype['paymentMemo'] = undefined;

/**
 * ACH file payment was submitted in, if applicable
 * @member {String} filenameReference
 */
PaymentResponseV3.prototype['filenameReference'] = undefined;

/**
 * Individual Identification Number assigned to the payment in the ACH file, if applicable
 * @member {String} individualIdentificationNumber
 */
PaymentResponseV3.prototype['individualIdentificationNumber'] = undefined;

/**
 * Trace Number assigned to the payment in the ACH file, if applicable
 * @member {String} traceNumber
 */
PaymentResponseV3.prototype['traceNumber'] = undefined;

/**
 * @member {String} payorPaymentId
 */
PaymentResponseV3.prototype['payorPaymentId'] = undefined;

/**
 * @member {String} paymentChannelId
 */
PaymentResponseV3.prototype['paymentChannelId'] = undefined;

/**
 * @member {String} paymentChannelName
 */
PaymentResponseV3.prototype['paymentChannelName'] = undefined;

/**
 * @member {String} accountName
 */
PaymentResponseV3.prototype['accountName'] = undefined;

/**
 * The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
 * @member {String} railsId
 * @default 'RAILS ID UNAVAILABLE'
 */
PaymentResponseV3.prototype['railsId'] = 'RAILS ID UNAVAILABLE';

/**
 * The country code of the payment channel.
 * @member {String} countryCode
 */
PaymentResponseV3.prototype['countryCode'] = undefined;

/**
 * @member {Array.<module:model/PaymentEventResponseV3>} events
 */
PaymentResponseV3.prototype['events'] = undefined;

/**
 * The return cost if a returned payment.
 * @member {Number} returnCost
 */
PaymentResponseV3.prototype['returnCost'] = undefined;

/**
 * @member {String} returnReason
 */
PaymentResponseV3.prototype['returnReason'] = undefined;

/**
 * @member {String} railsPaymentId
 */
PaymentResponseV3.prototype['railsPaymentId'] = undefined;

/**
 * @member {String} railsBatchId
 */
PaymentResponseV3.prototype['railsBatchId'] = undefined;

/**
 * @member {String} paymentScheme
 */
PaymentResponseV3.prototype['paymentScheme'] = undefined;

/**
 * @member {String} rejectionReason
 */
PaymentResponseV3.prototype['rejectionReason'] = undefined;






export default PaymentResponseV3;

