/**
 * Velo Payments APIs
 * ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  ```   curl -X POST \\   -H \"Content-Type: application/json\" \\   -H \"Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==\" \\   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials' ```  If successful, this call will result in a **200** HTTP status code and a response body such as:  ```   {     \"access_token\":\"19f6bafd-93fd-4747-b229-00507bbc991f\",     \"token_type\":\"bearer\",     \"expires_in\":1799,     \"scope\":\"...\"   } ``` ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  ```   -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \" ```  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response. 
 *
 * The version of the OpenAPI document: 2.26.127
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RejectedPaymentV3 model module.
 * @module model/RejectedPaymentV3
 * @version 2.26.127
 */
class RejectedPaymentV3 {
    /**
     * Constructs a new <code>RejectedPaymentV3</code>.
     * @alias module:model/RejectedPaymentV3
     * @param remoteId {String} 
     * @param currencyType {String} Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
     * @param amount {Number} 
     * @param sourceAccountName {String} 
     * @param payorPaymentId {String} 
     * @param reason {String} 
     */
    constructor(remoteId, currencyType, amount, sourceAccountName, payorPaymentId, reason) { 
        
        RejectedPaymentV3.initialize(this, remoteId, currencyType, amount, sourceAccountName, payorPaymentId, reason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, remoteId, currencyType, amount, sourceAccountName, payorPaymentId, reason) { 
        obj['remoteId'] = remoteId;
        obj['currencyType'] = currencyType;
        obj['amount'] = amount;
        obj['sourceAccountName'] = sourceAccountName;
        obj['payorPaymentId'] = payorPaymentId;
        obj['reason'] = reason;
    }

    /**
     * Constructs a <code>RejectedPaymentV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RejectedPaymentV3} obj Optional instance to populate.
     * @return {module:model/RejectedPaymentV3} The populated <code>RejectedPaymentV3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RejectedPaymentV3();

            if (data.hasOwnProperty('remoteId')) {
                obj['remoteId'] = ApiClient.convertToType(data['remoteId'], 'String');
            }
            if (data.hasOwnProperty('currencyType')) {
                obj['currencyType'] = ApiClient.convertToType(data['currencyType'], 'String');
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
            if (data.hasOwnProperty('remoteSystemId')) {
                obj['remoteSystemId'] = ApiClient.convertToType(data['remoteSystemId'], 'String');
            }
            if (data.hasOwnProperty('paymentMetadata')) {
                obj['paymentMetadata'] = ApiClient.convertToType(data['paymentMetadata'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('reasonCode')) {
                obj['reasonCode'] = ApiClient.convertToType(data['reasonCode'], 'String');
            }
            if (data.hasOwnProperty('lineNumber')) {
                obj['lineNumber'] = ApiClient.convertToType(data['lineNumber'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} remoteId
 */
RejectedPaymentV3.prototype['remoteId'] = undefined;

/**
 * Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} currencyType
 */
RejectedPaymentV3.prototype['currencyType'] = undefined;

/**
 * @member {Number} amount
 */
RejectedPaymentV3.prototype['amount'] = undefined;

/**
 * @member {String} sourceAccountName
 */
RejectedPaymentV3.prototype['sourceAccountName'] = undefined;

/**
 * @member {String} payorPaymentId
 */
RejectedPaymentV3.prototype['payorPaymentId'] = undefined;

/**
 * @member {String} remoteSystemId
 */
RejectedPaymentV3.prototype['remoteSystemId'] = undefined;

/**
 * @member {String} paymentMetadata
 */
RejectedPaymentV3.prototype['paymentMetadata'] = undefined;

/**
 * @member {String} reason
 */
RejectedPaymentV3.prototype['reason'] = undefined;

/**
 * @member {String} reasonCode
 */
RejectedPaymentV3.prototype['reasonCode'] = undefined;

/**
 * @member {Number} lineNumber
 */
RejectedPaymentV3.prototype['lineNumber'] = undefined;

/**
 * @member {String} message
 */
RejectedPaymentV3.prototype['message'] = undefined;






export default RejectedPaymentV3;

