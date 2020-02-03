/**
 * Velo Payments APIs
 * ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  ```   curl -X POST \\   -H \"Content-Type: application/json\" \\   -H \"Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==\" \\   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials' ```  If successful, this call will result in a **200** HTTP status code and a response body such as:  ```   {     \"access_token\":\"19f6bafd-93fd-4747-b229-00507bbc991f\",     \"token_type\":\"bearer\",     \"expires_in\":1799,     \"scope\":\"...\"   } ``` ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  ```   -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \" ```  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response. 
 *
 * The version of the OpenAPI document: 2.19.116
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AcceptedPayment from './AcceptedPayment';
import QuoteFxSummary from './QuoteFxSummary';
import RejectedPayment from './RejectedPayment';
import SourceAccount from './SourceAccount';

/**
 * The PayoutSummaryResponse model module.
 * @module model/PayoutSummaryResponse
 * @version 2.19.116
 */
class PayoutSummaryResponse {
    /**
     * Constructs a new <code>PayoutSummaryResponse</code>.
     * @alias module:model/PayoutSummaryResponse
     * @param fxSummaries {Array.<module:model/QuoteFxSummary>} 
     * @param accounts {Array.<module:model/SourceAccount>} 
     * @param acceptedPayments {Array.<module:model/AcceptedPayment>} 
     * @param rejectedPayments {Array.<module:model/RejectedPayment>} 
     */
    constructor(fxSummaries, accounts, acceptedPayments, rejectedPayments) { 
        
        PayoutSummaryResponse.initialize(this, fxSummaries, accounts, acceptedPayments, rejectedPayments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fxSummaries, accounts, acceptedPayments, rejectedPayments) { 
        obj['fxSummaries'] = fxSummaries;
        obj['accounts'] = accounts;
        obj['acceptedPayments'] = acceptedPayments;
        obj['rejectedPayments'] = rejectedPayments;
    }

    /**
     * Constructs a <code>PayoutSummaryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutSummaryResponse} obj Optional instance to populate.
     * @return {module:model/PayoutSummaryResponse} The populated <code>PayoutSummaryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutSummaryResponse();

            if (data.hasOwnProperty('payoutId')) {
                obj['payoutId'] = ApiClient.convertToType(data['payoutId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('paymentsSubmitted')) {
                obj['paymentsSubmitted'] = ApiClient.convertToType(data['paymentsSubmitted'], 'Number');
            }
            if (data.hasOwnProperty('paymentsAccepted')) {
                obj['paymentsAccepted'] = ApiClient.convertToType(data['paymentsAccepted'], 'Number');
            }
            if (data.hasOwnProperty('paymentsRejected')) {
                obj['paymentsRejected'] = ApiClient.convertToType(data['paymentsRejected'], 'Number');
            }
            if (data.hasOwnProperty('fxSummaries')) {
                obj['fxSummaries'] = ApiClient.convertToType(data['fxSummaries'], [QuoteFxSummary]);
            }
            if (data.hasOwnProperty('accounts')) {
                obj['accounts'] = ApiClient.convertToType(data['accounts'], [SourceAccount]);
            }
            if (data.hasOwnProperty('acceptedPayments')) {
                obj['acceptedPayments'] = ApiClient.convertToType(data['acceptedPayments'], [AcceptedPayment]);
            }
            if (data.hasOwnProperty('rejectedPayments')) {
                obj['rejectedPayments'] = ApiClient.convertToType(data['rejectedPayments'], [RejectedPayment]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} payoutId
 */
PayoutSummaryResponse.prototype['payoutId'] = undefined;

/**
 * @member {String} status
 */
PayoutSummaryResponse.prototype['status'] = undefined;

/**
 * @member {Number} paymentsSubmitted
 */
PayoutSummaryResponse.prototype['paymentsSubmitted'] = undefined;

/**
 * @member {Number} paymentsAccepted
 */
PayoutSummaryResponse.prototype['paymentsAccepted'] = undefined;

/**
 * @member {Number} paymentsRejected
 */
PayoutSummaryResponse.prototype['paymentsRejected'] = undefined;

/**
 * @member {Array.<module:model/QuoteFxSummary>} fxSummaries
 */
PayoutSummaryResponse.prototype['fxSummaries'] = undefined;

/**
 * @member {Array.<module:model/SourceAccount>} accounts
 */
PayoutSummaryResponse.prototype['accounts'] = undefined;

/**
 * @member {Array.<module:model/AcceptedPayment>} acceptedPayments
 */
PayoutSummaryResponse.prototype['acceptedPayments'] = undefined;

/**
 * @member {Array.<module:model/RejectedPayment>} rejectedPayments
 */
PayoutSummaryResponse.prototype['rejectedPayments'] = undefined;






export default PayoutSummaryResponse;

