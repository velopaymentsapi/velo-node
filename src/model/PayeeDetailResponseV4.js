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
import ChallengeV4 from './ChallengeV4';
import CompanyV4 from './CompanyV4';
import IndividualV4 from './IndividualV4';
import PayeeAddressV4 from './PayeeAddressV4';
import PayeePayorRefV4 from './PayeePayorRefV4';
import PaymentChannelSummaryV4 from './PaymentChannelSummaryV4';

/**
 * The PayeeDetailResponseV4 model module.
 * @module model/PayeeDetailResponseV4
 * @version 2.37.150-beta.1
 */
class PayeeDetailResponseV4 {
    /**
     * Constructs a new <code>PayeeDetailResponseV4</code>.
     * @alias module:model/PayeeDetailResponseV4
     */
    constructor() { 
        
        PayeeDetailResponseV4.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayeeDetailResponseV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeDetailResponseV4} obj Optional instance to populate.
     * @return {module:model/PayeeDetailResponseV4} The populated <code>PayeeDetailResponseV4</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayeeDetailResponseV4();

            if (data.hasOwnProperty('payeeId')) {
                obj['payeeId'] = ApiClient.convertToType(data['payeeId'], 'String');
            }
            if (data.hasOwnProperty('payorRefs')) {
                obj['payorRefs'] = ApiClient.convertToType(data['payorRefs'], [PayeePayorRefV4]);
            }
            if (data.hasOwnProperty('paymentChannels')) {
                obj['paymentChannels'] = ApiClient.convertToType(data['paymentChannels'], [PaymentChannelSummaryV4]);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('onboardedStatus')) {
                obj['onboardedStatus'] = ApiClient.convertToType(data['onboardedStatus'], 'String');
            }
            if (data.hasOwnProperty('watchlistStatus')) {
                obj['watchlistStatus'] = ApiClient.convertToType(data['watchlistStatus'], 'String');
            }
            if (data.hasOwnProperty('watchlistOverrideExpiresAtTimestamp')) {
                obj['watchlistOverrideExpiresAtTimestamp'] = ApiClient.convertToType(data['watchlistOverrideExpiresAtTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('watchlistOverrideComment')) {
                obj['watchlistOverrideComment'] = ApiClient.convertToType(data['watchlistOverrideComment'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('payeeType')) {
                obj['payeeType'] = ApiClient.convertToType(data['payeeType'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('disabledComment')) {
                obj['disabledComment'] = ApiClient.convertToType(data['disabledComment'], 'String');
            }
            if (data.hasOwnProperty('disabledUpdatedTimestamp')) {
                obj['disabledUpdatedTimestamp'] = ApiClient.convertToType(data['disabledUpdatedTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = PayeeAddressV4.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('individual')) {
                obj['individual'] = IndividualV4.constructFromObject(data['individual']);
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = CompanyV4.constructFromObject(data['company']);
            }
            if (data.hasOwnProperty('cellphoneNumber')) {
                obj['cellphoneNumber'] = ApiClient.convertToType(data['cellphoneNumber'], 'String');
            }
            if (data.hasOwnProperty('managedByPayorId')) {
                obj['managedByPayorId'] = ApiClient.convertToType(data['managedByPayorId'], 'String');
            }
            if (data.hasOwnProperty('watchlistStatusUpdatedTimestamp')) {
                obj['watchlistStatusUpdatedTimestamp'] = ApiClient.convertToType(data['watchlistStatusUpdatedTimestamp'], 'String');
            }
            if (data.hasOwnProperty('gracePeriodEndDate')) {
                obj['gracePeriodEndDate'] = ApiClient.convertToType(data['gracePeriodEndDate'], 'Date');
            }
            if (data.hasOwnProperty('enhancedKycCompleted')) {
                obj['enhancedKycCompleted'] = ApiClient.convertToType(data['enhancedKycCompleted'], 'Boolean');
            }
            if (data.hasOwnProperty('kycCompletedTimestamp')) {
                obj['kycCompletedTimestamp'] = ApiClient.convertToType(data['kycCompletedTimestamp'], 'String');
            }
            if (data.hasOwnProperty('pausePayment')) {
                obj['pausePayment'] = ApiClient.convertToType(data['pausePayment'], 'Boolean');
            }
            if (data.hasOwnProperty('pausePaymentTimestamp')) {
                obj['pausePaymentTimestamp'] = ApiClient.convertToType(data['pausePaymentTimestamp'], 'String');
            }
            if (data.hasOwnProperty('marketingOptInDecision')) {
                obj['marketingOptInDecision'] = ApiClient.convertToType(data['marketingOptInDecision'], 'Boolean');
            }
            if (data.hasOwnProperty('marketingOptInTimestamp')) {
                obj['marketingOptInTimestamp'] = ApiClient.convertToType(data['marketingOptInTimestamp'], 'String');
            }
            if (data.hasOwnProperty('acceptTermsAndConditionsTimestamp')) {
                obj['acceptTermsAndConditionsTimestamp'] = ApiClient.convertToType(data['acceptTermsAndConditionsTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('challenge')) {
                obj['challenge'] = ChallengeV4.constructFromObject(data['challenge']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PayeeDetailResponseV4</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PayeeDetailResponseV4</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['payeeId'] && !(typeof data['payeeId'] === 'string' || data['payeeId'] instanceof String)) {
            throw new Error("Expected the field `payeeId` to be a primitive type in the JSON string but got " + data['payeeId']);
        }
        if (data['payorRefs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['payorRefs'])) {
                throw new Error("Expected the field `payorRefs` to be an array in the JSON data but got " + data['payorRefs']);
            }
            // validate the optional field `payorRefs` (array)
            for (const item of data['payorRefs']) {
                PayeePayorRefV4.validateJSON(item);
            };
        }
        if (data['paymentChannels']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['paymentChannels'])) {
                throw new Error("Expected the field `paymentChannels` to be an array in the JSON data but got " + data['paymentChannels']);
            }
            // validate the optional field `paymentChannels` (array)
            for (const item of data['paymentChannels']) {
                PaymentChannelSummaryV4.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['onboardedStatus'] && !(typeof data['onboardedStatus'] === 'string' || data['onboardedStatus'] instanceof String)) {
            throw new Error("Expected the field `onboardedStatus` to be a primitive type in the JSON string but got " + data['onboardedStatus']);
        }
        // ensure the json data is a string
        if (data['watchlistStatus'] && !(typeof data['watchlistStatus'] === 'string' || data['watchlistStatus'] instanceof String)) {
            throw new Error("Expected the field `watchlistStatus` to be a primitive type in the JSON string but got " + data['watchlistStatus']);
        }
        // ensure the json data is a string
        if (data['watchlistOverrideComment'] && !(typeof data['watchlistOverrideComment'] === 'string' || data['watchlistOverrideComment'] instanceof String)) {
            throw new Error("Expected the field `watchlistOverrideComment` to be a primitive type in the JSON string but got " + data['watchlistOverrideComment']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['payeeType'] && !(typeof data['payeeType'] === 'string' || data['payeeType'] instanceof String)) {
            throw new Error("Expected the field `payeeType` to be a primitive type in the JSON string but got " + data['payeeType']);
        }
        // ensure the json data is a string
        if (data['disabledComment'] && !(typeof data['disabledComment'] === 'string' || data['disabledComment'] instanceof String)) {
            throw new Error("Expected the field `disabledComment` to be a primitive type in the JSON string but got " + data['disabledComment']);
        }
        // validate the optional field `address`
        if (data['address']) { // data not null
          PayeeAddressV4.validateJSON(data['address']);
        }
        // validate the optional field `individual`
        if (data['individual']) { // data not null
          IndividualV4.validateJSON(data['individual']);
        }
        // validate the optional field `company`
        if (data['company']) { // data not null
          CompanyV4.validateJSON(data['company']);
        }
        // ensure the json data is a string
        if (data['cellphoneNumber'] && !(typeof data['cellphoneNumber'] === 'string' || data['cellphoneNumber'] instanceof String)) {
            throw new Error("Expected the field `cellphoneNumber` to be a primitive type in the JSON string but got " + data['cellphoneNumber']);
        }
        // ensure the json data is a string
        if (data['managedByPayorId'] && !(typeof data['managedByPayorId'] === 'string' || data['managedByPayorId'] instanceof String)) {
            throw new Error("Expected the field `managedByPayorId` to be a primitive type in the JSON string but got " + data['managedByPayorId']);
        }
        // ensure the json data is a string
        if (data['watchlistStatusUpdatedTimestamp'] && !(typeof data['watchlistStatusUpdatedTimestamp'] === 'string' || data['watchlistStatusUpdatedTimestamp'] instanceof String)) {
            throw new Error("Expected the field `watchlistStatusUpdatedTimestamp` to be a primitive type in the JSON string but got " + data['watchlistStatusUpdatedTimestamp']);
        }
        // ensure the json data is a string
        if (data['kycCompletedTimestamp'] && !(typeof data['kycCompletedTimestamp'] === 'string' || data['kycCompletedTimestamp'] instanceof String)) {
            throw new Error("Expected the field `kycCompletedTimestamp` to be a primitive type in the JSON string but got " + data['kycCompletedTimestamp']);
        }
        // ensure the json data is a string
        if (data['pausePaymentTimestamp'] && !(typeof data['pausePaymentTimestamp'] === 'string' || data['pausePaymentTimestamp'] instanceof String)) {
            throw new Error("Expected the field `pausePaymentTimestamp` to be a primitive type in the JSON string but got " + data['pausePaymentTimestamp']);
        }
        // ensure the json data is a string
        if (data['marketingOptInTimestamp'] && !(typeof data['marketingOptInTimestamp'] === 'string' || data['marketingOptInTimestamp'] instanceof String)) {
            throw new Error("Expected the field `marketingOptInTimestamp` to be a primitive type in the JSON string but got " + data['marketingOptInTimestamp']);
        }
        // validate the optional field `challenge`
        if (data['challenge']) { // data not null
          ChallengeV4.validateJSON(data['challenge']);
        }

        return true;
    }


}



/**
 * @member {String} payeeId
 */
PayeeDetailResponseV4.prototype['payeeId'] = undefined;

/**
 * @member {Array.<module:model/PayeePayorRefV4>} payorRefs
 */
PayeeDetailResponseV4.prototype['payorRefs'] = undefined;

/**
 * A list of the Payee's payment channels in their preferred order
 * @member {Array.<module:model/PaymentChannelSummaryV4>} paymentChannels
 */
PayeeDetailResponseV4.prototype['paymentChannels'] = undefined;

/**
 * @member {String} email
 */
PayeeDetailResponseV4.prototype['email'] = undefined;

/**
 * Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED
 * @member {String} onboardedStatus
 */
PayeeDetailResponseV4.prototype['onboardedStatus'] = undefined;

/**
 * Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED
 * @member {String} watchlistStatus
 */
PayeeDetailResponseV4.prototype['watchlistStatus'] = undefined;

/**
 * @member {Date} watchlistOverrideExpiresAtTimestamp
 */
PayeeDetailResponseV4.prototype['watchlistOverrideExpiresAtTimestamp'] = undefined;

/**
 * @member {String} watchlistOverrideComment
 */
PayeeDetailResponseV4.prototype['watchlistOverrideComment'] = undefined;

/**
 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR> See the /v1/supportedLanguages endpoint to list the available codes for an environment. 
 * @member {String} language
 */
PayeeDetailResponseV4.prototype['language'] = undefined;

/**
 * @member {Date} created
 */
PayeeDetailResponseV4.prototype['created'] = undefined;

/**
 * @member {String} country
 */
PayeeDetailResponseV4.prototype['country'] = undefined;

/**
 * @member {String} displayName
 */
PayeeDetailResponseV4.prototype['displayName'] = undefined;

/**
 * Type of Payee. One of the following values: Individual, Company
 * @member {String} payeeType
 */
PayeeDetailResponseV4.prototype['payeeType'] = undefined;

/**
 * @member {Boolean} disabled
 */
PayeeDetailResponseV4.prototype['disabled'] = undefined;

/**
 * @member {String} disabledComment
 */
PayeeDetailResponseV4.prototype['disabledComment'] = undefined;

/**
 * @member {Date} disabledUpdatedTimestamp
 */
PayeeDetailResponseV4.prototype['disabledUpdatedTimestamp'] = undefined;

/**
 * @member {module:model/PayeeAddressV4} address
 */
PayeeDetailResponseV4.prototype['address'] = undefined;

/**
 * @member {module:model/IndividualV4} individual
 */
PayeeDetailResponseV4.prototype['individual'] = undefined;

/**
 * @member {module:model/CompanyV4} company
 */
PayeeDetailResponseV4.prototype['company'] = undefined;

/**
 * @member {String} cellphoneNumber
 */
PayeeDetailResponseV4.prototype['cellphoneNumber'] = undefined;

/**
 * The id of the payor if the payee is managed
 * @member {String} managedByPayorId
 */
PayeeDetailResponseV4.prototype['managedByPayorId'] = undefined;

/**
 * @member {String} watchlistStatusUpdatedTimestamp
 */
PayeeDetailResponseV4.prototype['watchlistStatusUpdatedTimestamp'] = undefined;

/**
 * @member {Date} gracePeriodEndDate
 */
PayeeDetailResponseV4.prototype['gracePeriodEndDate'] = undefined;

/**
 * @member {Boolean} enhancedKycCompleted
 */
PayeeDetailResponseV4.prototype['enhancedKycCompleted'] = undefined;

/**
 * @member {String} kycCompletedTimestamp
 */
PayeeDetailResponseV4.prototype['kycCompletedTimestamp'] = undefined;

/**
 * @member {Boolean} pausePayment
 */
PayeeDetailResponseV4.prototype['pausePayment'] = undefined;

/**
 * @member {String} pausePaymentTimestamp
 */
PayeeDetailResponseV4.prototype['pausePaymentTimestamp'] = undefined;

/**
 * @member {Boolean} marketingOptInDecision
 */
PayeeDetailResponseV4.prototype['marketingOptInDecision'] = undefined;

/**
 * @member {String} marketingOptInTimestamp
 */
PayeeDetailResponseV4.prototype['marketingOptInTimestamp'] = undefined;

/**
 * The timestamp when the payee last accepted T&Cs
 * @member {Date} acceptTermsAndConditionsTimestamp
 */
PayeeDetailResponseV4.prototype['acceptTermsAndConditionsTimestamp'] = undefined;

/**
 * @member {module:model/ChallengeV4} challenge
 */
PayeeDetailResponseV4.prototype['challenge'] = undefined;






export default PayeeDetailResponseV4;

