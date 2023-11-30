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
import PayoutPayeeV3 from './PayoutPayeeV3';

/**
 * The PaymentV3 model module.
 * @module model/PaymentV3
 * @version 2.37.150-beta.1
 */
class PaymentV3 {
    /**
     * Constructs a new <code>PaymentV3</code>.
     * @alias module:model/PaymentV3
     * @param paymentId {String} The id of the payment
     */
    constructor(paymentId) { 
        
        PaymentV3.initialize(this, paymentId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, paymentId) { 
        obj['paymentId'] = paymentId;
    }

    /**
     * Constructs a <code>PaymentV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentV3} obj Optional instance to populate.
     * @return {module:model/PaymentV3} The populated <code>PaymentV3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentV3();

            if (data.hasOwnProperty('paymentId')) {
                obj['paymentId'] = ApiClient.convertToType(data['paymentId'], 'String');
            }
            if (data.hasOwnProperty('remoteId')) {
                obj['remoteId'] = ApiClient.convertToType(data['remoteId'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('sourceAccountName')) {
                obj['sourceAccountName'] = ApiClient.convertToType(data['sourceAccountName'], 'String');
            }
            if (data.hasOwnProperty('payorPaymentId')) {
                obj['payorPaymentId'] = ApiClient.convertToType(data['payorPaymentId'], 'String');
            }
            if (data.hasOwnProperty('paymentMemo')) {
                obj['paymentMemo'] = ApiClient.convertToType(data['paymentMemo'], 'String');
            }
            if (data.hasOwnProperty('payee')) {
                obj['payee'] = PayoutPayeeV3.constructFromObject(data['payee']);
            }
            if (data.hasOwnProperty('withdrawable')) {
                obj['withdrawable'] = ApiClient.convertToType(data['withdrawable'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('transmissionType')) {
                obj['transmissionType'] = ApiClient.convertToType(data['transmissionType'], 'String');
            }
            if (data.hasOwnProperty('remoteSystemId')) {
                obj['remoteSystemId'] = ApiClient.convertToType(data['remoteSystemId'], 'String');
            }
            if (data.hasOwnProperty('paymentMetadata')) {
                obj['paymentMetadata'] = ApiClient.convertToType(data['paymentMetadata'], 'String');
            }
            if (data.hasOwnProperty('autoWithdrawnReasonCode')) {
                obj['autoWithdrawnReasonCode'] = ApiClient.convertToType(data['autoWithdrawnReasonCode'], 'String');
            }
            if (data.hasOwnProperty('railsId')) {
                obj['railsId'] = ApiClient.convertToType(data['railsId'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentV3</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentV3</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymentV3.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['paymentId'] && !(typeof data['paymentId'] === 'string' || data['paymentId'] instanceof String)) {
            throw new Error("Expected the field `paymentId` to be a primitive type in the JSON string but got " + data['paymentId']);
        }
        // ensure the json data is a string
        if (data['remoteId'] && !(typeof data['remoteId'] === 'string' || data['remoteId'] instanceof String)) {
            throw new Error("Expected the field `remoteId` to be a primitive type in the JSON string but got " + data['remoteId']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['sourceAccountName'] && !(typeof data['sourceAccountName'] === 'string' || data['sourceAccountName'] instanceof String)) {
            throw new Error("Expected the field `sourceAccountName` to be a primitive type in the JSON string but got " + data['sourceAccountName']);
        }
        // ensure the json data is a string
        if (data['payorPaymentId'] && !(typeof data['payorPaymentId'] === 'string' || data['payorPaymentId'] instanceof String)) {
            throw new Error("Expected the field `payorPaymentId` to be a primitive type in the JSON string but got " + data['payorPaymentId']);
        }
        // ensure the json data is a string
        if (data['paymentMemo'] && !(typeof data['paymentMemo'] === 'string' || data['paymentMemo'] instanceof String)) {
            throw new Error("Expected the field `paymentMemo` to be a primitive type in the JSON string but got " + data['paymentMemo']);
        }
        // validate the optional field `payee`
        if (data['payee']) { // data not null
          PayoutPayeeV3.validateJSON(data['payee']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['transmissionType'] && !(typeof data['transmissionType'] === 'string' || data['transmissionType'] instanceof String)) {
            throw new Error("Expected the field `transmissionType` to be a primitive type in the JSON string but got " + data['transmissionType']);
        }
        // ensure the json data is a string
        if (data['remoteSystemId'] && !(typeof data['remoteSystemId'] === 'string' || data['remoteSystemId'] instanceof String)) {
            throw new Error("Expected the field `remoteSystemId` to be a primitive type in the JSON string but got " + data['remoteSystemId']);
        }
        // ensure the json data is a string
        if (data['paymentMetadata'] && !(typeof data['paymentMetadata'] === 'string' || data['paymentMetadata'] instanceof String)) {
            throw new Error("Expected the field `paymentMetadata` to be a primitive type in the JSON string but got " + data['paymentMetadata']);
        }
        // ensure the json data is a string
        if (data['autoWithdrawnReasonCode'] && !(typeof data['autoWithdrawnReasonCode'] === 'string' || data['autoWithdrawnReasonCode'] instanceof String)) {
            throw new Error("Expected the field `autoWithdrawnReasonCode` to be a primitive type in the JSON string but got " + data['autoWithdrawnReasonCode']);
        }
        // ensure the json data is a string
        if (data['railsId'] && !(typeof data['railsId'] === 'string' || data['railsId'] instanceof String)) {
            throw new Error("Expected the field `railsId` to be a primitive type in the JSON string but got " + data['railsId']);
        }
        // ensure the json data is a string
        if (data['transactionId'] && !(typeof data['transactionId'] === 'string' || data['transactionId'] instanceof String)) {
            throw new Error("Expected the field `transactionId` to be a primitive type in the JSON string but got " + data['transactionId']);
        }

        return true;
    }


}

PaymentV3.RequiredProperties = ["paymentId"];

/**
 * The id of the payment
 * @member {String} paymentId
 */
PaymentV3.prototype['paymentId'] = undefined;

/**
 * The remoteId supplied by the payor that identifies the payee
 * @member {String} remoteId
 */
PaymentV3.prototype['remoteId'] = undefined;

/**
 * The currency that the payment was made in
 * @member {String} currency
 */
PaymentV3.prototype['currency'] = undefined;

/**
 * The amount of the payment in minor units
 * @member {Number} amount
 */
PaymentV3.prototype['amount'] = undefined;

/**
 * The identifier of the source account to debit the payment from
 * @member {String} sourceAccountName
 */
PaymentV3.prototype['sourceAccountName'] = undefined;

/**
 * A reference identifier for the payor for the given payee payment
 * @member {String} payorPaymentId
 */
PaymentV3.prototype['payorPaymentId'] = undefined;

/**
 * <p>Any value here will override the memo value in the parent payout</p> <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p> 
 * @member {String} paymentMemo
 */
PaymentV3.prototype['paymentMemo'] = undefined;

/**
 * @member {module:model/PayoutPayeeV3} payee
 */
PaymentV3.prototype['payee'] = undefined;

/**
 * Can this paynent be withdrawn
 * @member {Boolean} withdrawable
 */
PaymentV3.prototype['withdrawable'] = undefined;

/**
 * Current status of payment. One of the following values: SUBMITTED, ACCEPTED, REJECTED, WITHDRAWN, RETURNED, AWAITING_FUNDS, FUNDED, UNFUNDED, CANCELLED, BANK_PAYMENT_REQUESTED
 * @member {String} status
 */
PaymentV3.prototype['status'] = undefined;

/**
 * <p>The transmission method of the payment.</p> <p>Valid values for transmissionType can be found attached to the Source Account</p> 
 * @member {String} transmissionType
 */
PaymentV3.prototype['transmissionType'] = undefined;

/**
 * <p>The identifier for the remote payments system if not Velo</p> 
 * @member {String} remoteSystemId
 */
PaymentV3.prototype['remoteSystemId'] = undefined;

/**
 * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p> <p>The structure of the data will be dictated by the requirements of the payment rails</p> 
 * @member {String} paymentMetadata
 */
PaymentV3.prototype['paymentMetadata'] = undefined;

/**
 * Populated only if the payment was automatically withdrawn during instruction for being invalid
 * @member {String} autoWithdrawnReasonCode
 */
PaymentV3.prototype['autoWithdrawnReasonCode'] = undefined;

/**
 * Indicates the 3rd party system involved in making this payment
 * @member {String} railsId
 */
PaymentV3.prototype['railsId'] = undefined;

/**
 * The id of the transaction associated with this payment if there was one
 * @member {String} transactionId
 */
PaymentV3.prototype['transactionId'] = undefined;






export default PaymentV3;

