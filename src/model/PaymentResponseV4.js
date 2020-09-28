/**
 * Velo Payments APIs
 * ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  ```   curl -X POST \\   -H \"Content-Type: application/json\" \\   -H \"Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==\" \\   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials' ```  If successful, this call will result in a **200** HTTP status code and a response body such as:  ```   {     \"access_token\":\"19f6bafd-93fd-4747-b229-00507bbc991f\",     \"token_type\":\"bearer\",     \"expires_in\":1799,     \"scope\":\"...\"   } ``` ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  ```   -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \" ```  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response. 
 *
 * The version of the OpenAPI document: 2.23.78
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PaymentAuditCurrencyV4 from './PaymentAuditCurrencyV4';
import PaymentEventResponseV4 from './PaymentEventResponseV4';
import PaymentResponseV4Payout from './PaymentResponseV4Payout';

/**
 * The PaymentResponseV4 model module.
 * @module model/PaymentResponseV4
 * @version 2.23.78
 */
class PaymentResponseV4 {
    /**
     * Constructs a new <code>PaymentResponseV4</code>.
     * @alias module:model/PaymentResponseV4
     * @param paymentId {String} The id of the payment
     * @param payeeId {String} The id of the paymeee
     * @param payorId {String} The id of the payor
     * @param quoteId {String} The quote Id used for the FX
     * @param sourceAccountId {String} The id of the source account from which the payment was taken
     * @param paymentAmount {Number} The amount which the payee will receive
     * @param submittedDateTime {Date} 
     * @param status {module:model/PaymentResponseV4.StatusEnum} 
     * @param fundingStatus {module:model/PaymentResponseV4.FundingStatusEnum} The funding status of the payment
     * @param railsId {String} The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
     * @param events {Array.<module:model/PaymentEventResponseV4>} 
     */
    constructor(paymentId, payeeId, payorId, quoteId, sourceAccountId, paymentAmount, submittedDateTime, status, fundingStatus, railsId, events) { 
        
        PaymentResponseV4.initialize(this, paymentId, payeeId, payorId, quoteId, sourceAccountId, paymentAmount, submittedDateTime, status, fundingStatus, railsId, events);
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
     * Constructs a <code>PaymentResponseV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentResponseV4} obj Optional instance to populate.
     * @return {module:model/PaymentResponseV4} The populated <code>PaymentResponseV4</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentResponseV4();

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
                obj['sourceCurrency'] = PaymentAuditCurrencyV4.constructFromObject(data['sourceCurrency']);
            }
            if (data.hasOwnProperty('paymentAmount')) {
                obj['paymentAmount'] = ApiClient.convertToType(data['paymentAmount'], 'Number');
            }
            if (data.hasOwnProperty('paymentCurrency')) {
                obj['paymentCurrency'] = PaymentAuditCurrencyV4.constructFromObject(data['paymentCurrency']);
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('invertedRate')) {
                obj['invertedRate'] = ApiClient.convertToType(data['invertedRate'], 'Number');
            }
            if (data.hasOwnProperty('isPaymentCcyBaseCcy')) {
                obj['isPaymentCcyBaseCcy'] = ApiClient.convertToType(data['isPaymentCcyBaseCcy'], 'Boolean');
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
                obj['events'] = ApiClient.convertToType(data['events'], [PaymentEventResponseV4]);
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
            if (data.hasOwnProperty('rejectionReason')) {
                obj['rejectionReason'] = ApiClient.convertToType(data['rejectionReason'], 'String');
            }
            if (data.hasOwnProperty('withdrawnReason')) {
                obj['withdrawnReason'] = ApiClient.convertToType(data['withdrawnReason'], 'String');
            }
            if (data.hasOwnProperty('withdrawable')) {
                obj['withdrawable'] = ApiClient.convertToType(data['withdrawable'], 'Boolean');
            }
            if (data.hasOwnProperty('payout')) {
                obj['payout'] = PaymentResponseV4Payout.constructFromObject(data['payout']);
            }
        }
        return obj;
    }


}

/**
 * The id of the payment
 * @member {String} paymentId
 */
PaymentResponseV4.prototype['paymentId'] = undefined;

/**
 * The id of the paymeee
 * @member {String} payeeId
 */
PaymentResponseV4.prototype['payeeId'] = undefined;

/**
 * The id of the payor
 * @member {String} payorId
 */
PaymentResponseV4.prototype['payorId'] = undefined;

/**
 * The name of the payor
 * @member {String} payorName
 */
PaymentResponseV4.prototype['payorName'] = undefined;

/**
 * The quote Id used for the FX
 * @member {String} quoteId
 */
PaymentResponseV4.prototype['quoteId'] = undefined;

/**
 * The id of the source account from which the payment was taken
 * @member {String} sourceAccountId
 */
PaymentResponseV4.prototype['sourceAccountId'] = undefined;

/**
 * The name of the source account from which the payment was taken
 * @member {String} sourceAccountName
 */
PaymentResponseV4.prototype['sourceAccountName'] = undefined;

/**
 * The remote id by which the payor refers to the payee. Only populated once payment is confirmed
 * @member {String} remoteId
 */
PaymentResponseV4.prototype['remoteId'] = undefined;

/**
 * The source amount for the payment (amount debited to make the payment)
 * @member {Number} sourceAmount
 */
PaymentResponseV4.prototype['sourceAmount'] = undefined;

/**
 * @member {module:model/PaymentAuditCurrencyV4} sourceCurrency
 */
PaymentResponseV4.prototype['sourceCurrency'] = undefined;

/**
 * The amount which the payee will receive
 * @member {Number} paymentAmount
 */
PaymentResponseV4.prototype['paymentAmount'] = undefined;

/**
 * @member {module:model/PaymentAuditCurrencyV4} paymentCurrency
 */
PaymentResponseV4.prototype['paymentCurrency'] = undefined;

/**
 * The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
 * @member {Number} rate
 */
PaymentResponseV4.prototype['rate'] = undefined;

/**
 * The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
 * @member {Number} invertedRate
 */
PaymentResponseV4.prototype['invertedRate'] = undefined;

/**
 * @member {Boolean} isPaymentCcyBaseCcy
 */
PaymentResponseV4.prototype['isPaymentCcyBaseCcy'] = undefined;

/**
 * @member {Date} submittedDateTime
 */
PaymentResponseV4.prototype['submittedDateTime'] = undefined;

/**
 * @member {module:model/PaymentResponseV4.StatusEnum} status
 */
PaymentResponseV4.prototype['status'] = undefined;

/**
 * The funding status of the payment
 * @member {module:model/PaymentResponseV4.FundingStatusEnum} fundingStatus
 */
PaymentResponseV4.prototype['fundingStatus'] = undefined;

/**
 * The routing number for the payment.
 * @member {String} routingNumber
 */
PaymentResponseV4.prototype['routingNumber'] = undefined;

/**
 * The account number for the account which will receive the payment.
 * @member {String} accountNumber
 */
PaymentResponseV4.prototype['accountNumber'] = undefined;

/**
 * The iban for the payment.
 * @member {String} iban
 */
PaymentResponseV4.prototype['iban'] = undefined;

/**
 * The payment memo set by the payor
 * @member {String} paymentMemo
 */
PaymentResponseV4.prototype['paymentMemo'] = undefined;

/**
 * ACH file payment was submitted in, if applicable
 * @member {String} filenameReference
 */
PaymentResponseV4.prototype['filenameReference'] = undefined;

/**
 * Individual Identification Number assigned to the payment in the ACH file, if applicable
 * @member {String} individualIdentificationNumber
 */
PaymentResponseV4.prototype['individualIdentificationNumber'] = undefined;

/**
 * Trace Number assigned to the payment in the ACH file, if applicable
 * @member {String} traceNumber
 */
PaymentResponseV4.prototype['traceNumber'] = undefined;

/**
 * @member {String} payorPaymentId
 */
PaymentResponseV4.prototype['payorPaymentId'] = undefined;

/**
 * @member {String} paymentChannelId
 */
PaymentResponseV4.prototype['paymentChannelId'] = undefined;

/**
 * @member {String} paymentChannelName
 */
PaymentResponseV4.prototype['paymentChannelName'] = undefined;

/**
 * @member {String} accountName
 */
PaymentResponseV4.prototype['accountName'] = undefined;

/**
 * The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
 * @member {String} railsId
 * @default 'RAILS ID UNAVAILABLE'
 */
PaymentResponseV4.prototype['railsId'] = 'RAILS ID UNAVAILABLE';

/**
 * The country code of the payment channel.
 * @member {String} countryCode
 */
PaymentResponseV4.prototype['countryCode'] = undefined;

/**
 * @member {Array.<module:model/PaymentEventResponseV4>} events
 */
PaymentResponseV4.prototype['events'] = undefined;

/**
 * The return cost if a returned payment.
 * @member {Number} returnCost
 */
PaymentResponseV4.prototype['returnCost'] = undefined;

/**
 * @member {String} returnReason
 */
PaymentResponseV4.prototype['returnReason'] = undefined;

/**
 * @member {String} railsPaymentId
 */
PaymentResponseV4.prototype['railsPaymentId'] = undefined;

/**
 * @member {String} railsBatchId
 */
PaymentResponseV4.prototype['railsBatchId'] = undefined;

/**
 * @member {String} rejectionReason
 */
PaymentResponseV4.prototype['rejectionReason'] = undefined;

/**
 * @member {String} withdrawnReason
 */
PaymentResponseV4.prototype['withdrawnReason'] = undefined;

/**
 * @member {Boolean} withdrawable
 */
PaymentResponseV4.prototype['withdrawable'] = undefined;

/**
 * @member {module:model/PaymentResponseV4Payout} payout
 */
PaymentResponseV4.prototype['payout'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
PaymentResponseV4['StatusEnum'] = {

    /**
     * value: "ACCEPTED"
     * @const
     */
    "ACCEPTED": "ACCEPTED",

    /**
     * value: "AWAITING_FUNDS"
     * @const
     */
    "AWAITING_FUNDS": "AWAITING_FUNDS",

    /**
     * value: "FUNDED"
     * @const
     */
    "FUNDED": "FUNDED",

    /**
     * value: "UNFUNDED"
     * @const
     */
    "UNFUNDED": "UNFUNDED",

    /**
     * value: "BANK_PAYMENT_REQUESTED"
     * @const
     */
    "BANK_PAYMENT_REQUESTED": "BANK_PAYMENT_REQUESTED",

    /**
     * value: "REJECTED"
     * @const
     */
    "REJECTED": "REJECTED",

    /**
     * value: "ACCEPTED_BY_RAILS"
     * @const
     */
    "ACCEPTED_BY_RAILS": "ACCEPTED_BY_RAILS",

    /**
     * value: "CONFIRMED"
     * @const
     */
    "CONFIRMED": "CONFIRMED",

    /**
     * value: "RETURNED"
     * @const
     */
    "RETURNED": "RETURNED",

    /**
     * value: "WITHDRAWN"
     * @const
     */
    "WITHDRAWN": "WITHDRAWN"
};


/**
 * Allowed values for the <code>fundingStatus</code> property.
 * @enum {String}
 * @readonly
 */
PaymentResponseV4['FundingStatusEnum'] = {

    /**
     * value: "FUNDED"
     * @const
     */
    "FUNDED": "FUNDED",

    /**
     * value: "INSTRUCTED"
     * @const
     */
    "INSTRUCTED": "INSTRUCTED",

    /**
     * value: "UNFUNDED"
     * @const
     */
    "UNFUNDED": "UNFUNDED"
};



export default PaymentResponseV4;

