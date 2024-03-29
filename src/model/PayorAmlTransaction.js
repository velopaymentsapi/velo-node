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
 * The PayorAmlTransaction model module.
 * @module model/PayorAmlTransaction
 * @version 2.30.53
 */
class PayorAmlTransaction {
    /**
     * Constructs a new <code>PayorAmlTransaction</code>.
     * @alias module:model/PayorAmlTransaction
     */
    constructor() { 
        
        PayorAmlTransaction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayorAmlTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorAmlTransaction} obj Optional instance to populate.
     * @return {module:model/PayorAmlTransaction} The populated <code>PayorAmlTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayorAmlTransaction();

            if (data.hasOwnProperty('transactionDate')) {
                obj['transactionDate'] = ApiClient.convertToType(data['transactionDate'], 'Date');
            }
            if (data.hasOwnProperty('transactionTime')) {
                obj['transactionTime'] = ApiClient.convertToType(data['transactionTime'], 'String');
            }
            if (data.hasOwnProperty('reportTransactionType')) {
                obj['reportTransactionType'] = ApiClient.convertToType(data['reportTransactionType'], 'String');
            }
            if (data.hasOwnProperty('debit')) {
                obj['debit'] = ApiClient.convertToType(data['debit'], 'Number');
            }
            if (data.hasOwnProperty('debitCurrency')) {
                obj['debitCurrency'] = ApiClient.convertToType(data['debitCurrency'], 'String');
            }
            if (data.hasOwnProperty('credit')) {
                obj['credit'] = ApiClient.convertToType(data['credit'], 'Number');
            }
            if (data.hasOwnProperty('creditCurrency')) {
                obj['creditCurrency'] = ApiClient.convertToType(data['creditCurrency'], 'String');
            }
            if (data.hasOwnProperty('returnFee')) {
                obj['returnFee'] = ApiClient.convertToType(data['returnFee'], 'String');
            }
            if (data.hasOwnProperty('returnFeeCurrency')) {
                obj['returnFeeCurrency'] = ApiClient.convertToType(data['returnFeeCurrency'], 'String');
            }
            if (data.hasOwnProperty('returnFeeDescription')) {
                obj['returnFeeDescription'] = ApiClient.convertToType(data['returnFeeDescription'], 'String');
            }
            if (data.hasOwnProperty('returnCode')) {
                obj['returnCode'] = ApiClient.convertToType(data['returnCode'], 'String');
            }
            if (data.hasOwnProperty('returnDescription')) {
                obj['returnDescription'] = ApiClient.convertToType(data['returnDescription'], 'String');
            }
            if (data.hasOwnProperty('fundingType')) {
                obj['fundingType'] = ApiClient.convertToType(data['fundingType'], 'String');
            }
            if (data.hasOwnProperty('dateFundingRequested')) {
                obj['dateFundingRequested'] = ApiClient.convertToType(data['dateFundingRequested'], 'String');
            }
            if (data.hasOwnProperty('payeeName')) {
                obj['payeeName'] = ApiClient.convertToType(data['payeeName'], 'String');
            }
            if (data.hasOwnProperty('remoteId')) {
                obj['remoteId'] = ApiClient.convertToType(data['remoteId'], 'String');
            }
            if (data.hasOwnProperty('payeeType')) {
                obj['payeeType'] = ApiClient.convertToType(data['payeeType'], 'String');
            }
            if (data.hasOwnProperty('payeeEmail')) {
                obj['payeeEmail'] = ApiClient.convertToType(data['payeeEmail'], 'String');
            }
            if (data.hasOwnProperty('sourceAccount')) {
                obj['sourceAccount'] = ApiClient.convertToType(data['sourceAccount'], 'String');
            }
            if (data.hasOwnProperty('paymentAmount')) {
                obj['paymentAmount'] = ApiClient.convertToType(data['paymentAmount'], 'Number');
            }
            if (data.hasOwnProperty('paymentCurrency')) {
                obj['paymentCurrency'] = ApiClient.convertToType(data['paymentCurrency'], 'String');
            }
            if (data.hasOwnProperty('paymentMemo')) {
                obj['paymentMemo'] = ApiClient.convertToType(data['paymentMemo'], 'String');
            }
            if (data.hasOwnProperty('paymentRails')) {
                obj['paymentRails'] = ApiClient.convertToType(data['paymentRails'], 'String');
            }
            if (data.hasOwnProperty('payorPaymentId')) {
                obj['payorPaymentId'] = ApiClient.convertToType(data['payorPaymentId'], 'String');
            }
            if (data.hasOwnProperty('paymentStatus')) {
                obj['paymentStatus'] = ApiClient.convertToType(data['paymentStatus'], 'String');
            }
            if (data.hasOwnProperty('rejectReason')) {
                obj['rejectReason'] = ApiClient.convertToType(data['rejectReason'], 'String');
            }
            if (data.hasOwnProperty('fxApplied')) {
                obj['fxApplied'] = ApiClient.convertToType(data['fxApplied'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} transactionDate
 */
PayorAmlTransaction.prototype['transactionDate'] = undefined;

/**
 * @member {String} transactionTime
 */
PayorAmlTransaction.prototype['transactionTime'] = undefined;

/**
 * @member {String} reportTransactionType
 */
PayorAmlTransaction.prototype['reportTransactionType'] = undefined;

/**
 * @member {Number} debit
 */
PayorAmlTransaction.prototype['debit'] = undefined;

/**
 * ISO 4217 3 character currency code
 * @member {String} debitCurrency
 */
PayorAmlTransaction.prototype['debitCurrency'] = undefined;

/**
 * @member {Number} credit
 */
PayorAmlTransaction.prototype['credit'] = undefined;

/**
 * ISO 4217 3 character currency code
 * @member {String} creditCurrency
 */
PayorAmlTransaction.prototype['creditCurrency'] = undefined;

/**
 * @member {String} returnFee
 */
PayorAmlTransaction.prototype['returnFee'] = undefined;

/**
 * ISO 4217 3 character currency code
 * @member {String} returnFeeCurrency
 */
PayorAmlTransaction.prototype['returnFeeCurrency'] = undefined;

/**
 * @member {String} returnFeeDescription
 */
PayorAmlTransaction.prototype['returnFeeDescription'] = undefined;

/**
 * @member {String} returnCode
 */
PayorAmlTransaction.prototype['returnCode'] = undefined;

/**
 * @member {String} returnDescription
 */
PayorAmlTransaction.prototype['returnDescription'] = undefined;

/**
 * @member {String} fundingType
 */
PayorAmlTransaction.prototype['fundingType'] = undefined;

/**
 * @member {String} dateFundingRequested
 */
PayorAmlTransaction.prototype['dateFundingRequested'] = undefined;

/**
 * @member {String} payeeName
 */
PayorAmlTransaction.prototype['payeeName'] = undefined;

/**
 * Remote ID of the Payee, set by Payor
 * @member {String} remoteId
 */
PayorAmlTransaction.prototype['remoteId'] = undefined;

/**
 * @member {String} payeeType
 */
PayorAmlTransaction.prototype['payeeType'] = undefined;

/**
 * @member {String} payeeEmail
 */
PayorAmlTransaction.prototype['payeeEmail'] = undefined;

/**
 * @member {String} sourceAccount
 */
PayorAmlTransaction.prototype['sourceAccount'] = undefined;

/**
 * @member {Number} paymentAmount
 */
PayorAmlTransaction.prototype['paymentAmount'] = undefined;

/**
 * ISO 4217 3 character currency code
 * @member {String} paymentCurrency
 */
PayorAmlTransaction.prototype['paymentCurrency'] = undefined;

/**
 * @member {String} paymentMemo
 */
PayorAmlTransaction.prototype['paymentMemo'] = undefined;

/**
 * @member {String} paymentRails
 */
PayorAmlTransaction.prototype['paymentRails'] = undefined;

/**
 * @member {String} payorPaymentId
 */
PayorAmlTransaction.prototype['payorPaymentId'] = undefined;

/**
 * @member {String} paymentStatus
 */
PayorAmlTransaction.prototype['paymentStatus'] = undefined;

/**
 * @member {String} rejectReason
 */
PayorAmlTransaction.prototype['rejectReason'] = undefined;

/**
 * @member {Number} fxApplied
 */
PayorAmlTransaction.prototype['fxApplied'] = undefined;






export default PayorAmlTransaction;

