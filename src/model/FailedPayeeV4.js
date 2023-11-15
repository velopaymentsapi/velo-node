/**
 * Velo Payments APIs
 * ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  ```   curl -X POST \\   -H \"Content-Type: application/json\" \\   -H \"Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==\" \\   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials' ```  If successful, this call will result in a **200** HTTP status code and a response body such as:  ```   {     \"access_token\":\"19f6bafd-93fd-4747-b229-00507bbc991f\",     \"token_type\":\"bearer\",     \"expires_in\":1799,     \"scope\":\"...\"   } ``` ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  ```   -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \" ```  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response. 
 *
 * The version of the OpenAPI document: 2.35.58
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
import CreateIndividualV4 from './CreateIndividualV4';
import CreatePayeeAddressV4 from './CreatePayeeAddressV4';
import CreatePaymentChannelV4 from './CreatePaymentChannelV4';
import PayeePayorRefV4 from './PayeePayorRefV4';

/**
 * The FailedPayeeV4 model module.
 * @module model/FailedPayeeV4
 * @version 2.35.58
 */
class FailedPayeeV4 {
    /**
     * Constructs a new <code>FailedPayeeV4</code>.
     * @alias module:model/FailedPayeeV4
     */
    constructor() { 
        
        FailedPayeeV4.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FailedPayeeV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailedPayeeV4} obj Optional instance to populate.
     * @return {module:model/FailedPayeeV4} The populated <code>FailedPayeeV4</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FailedPayeeV4();

            if (data.hasOwnProperty('payeeId')) {
                obj['payeeId'] = ApiClient.convertToType(data['payeeId'], 'String');
            }
            if (data.hasOwnProperty('payorRefs')) {
                obj['payorRefs'] = ApiClient.convertToType(data['payorRefs'], [PayeePayorRefV4]);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('remoteId')) {
                obj['remoteId'] = ApiClient.convertToType(data['remoteId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = CreatePayeeAddressV4.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('paymentChannel')) {
                obj['paymentChannel'] = CreatePaymentChannelV4.constructFromObject(data['paymentChannel']);
            }
            if (data.hasOwnProperty('challenge')) {
                obj['challenge'] = ChallengeV4.constructFromObject(data['challenge']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = CompanyV4.constructFromObject(data['company']);
            }
            if (data.hasOwnProperty('individual')) {
                obj['individual'] = CreateIndividualV4.constructFromObject(data['individual']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FailedPayeeV4</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FailedPayeeV4</code>.
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
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['remoteId'] && !(typeof data['remoteId'] === 'string' || data['remoteId'] instanceof String)) {
            throw new Error("Expected the field `remoteId` to be a primitive type in the JSON string but got " + data['remoteId']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `address`
        if (data['address']) { // data not null
          CreatePayeeAddressV4.validateJSON(data['address']);
        }
        // validate the optional field `paymentChannel`
        if (data['paymentChannel']) { // data not null
          CreatePaymentChannelV4.validateJSON(data['paymentChannel']);
        }
        // validate the optional field `challenge`
        if (data['challenge']) { // data not null
          ChallengeV4.validateJSON(data['challenge']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }
        // validate the optional field `company`
        if (data['company']) { // data not null
          CompanyV4.validateJSON(data['company']);
        }
        // validate the optional field `individual`
        if (data['individual']) { // data not null
          CreateIndividualV4.validateJSON(data['individual']);
        }

        return true;
    }


}



/**
 * @member {String} payeeId
 */
FailedPayeeV4.prototype['payeeId'] = undefined;

/**
 * @member {Array.<module:model/PayeePayorRefV4>} payorRefs
 */
FailedPayeeV4.prototype['payorRefs'] = undefined;

/**
 * @member {String} email
 */
FailedPayeeV4.prototype['email'] = undefined;

/**
 * @member {String} remoteId
 */
FailedPayeeV4.prototype['remoteId'] = undefined;

/**
 * Type of Payee. One of the following values: Individual, Company
 * @member {String} type
 */
FailedPayeeV4.prototype['type'] = undefined;

/**
 * @member {module:model/CreatePayeeAddressV4} address
 */
FailedPayeeV4.prototype['address'] = undefined;

/**
 * @member {module:model/CreatePaymentChannelV4} paymentChannel
 */
FailedPayeeV4.prototype['paymentChannel'] = undefined;

/**
 * @member {module:model/ChallengeV4} challenge
 */
FailedPayeeV4.prototype['challenge'] = undefined;

/**
 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR> See the /v1/supportedLanguages endpoint to list the available codes for an environment. 
 * @member {String} language
 */
FailedPayeeV4.prototype['language'] = undefined;

/**
 * @member {module:model/CompanyV4} company
 */
FailedPayeeV4.prototype['company'] = undefined;

/**
 * @member {module:model/CreateIndividualV4} individual
 */
FailedPayeeV4.prototype['individual'] = undefined;






export default FailedPayeeV4;

