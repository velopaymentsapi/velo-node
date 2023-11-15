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
import ChallengeV3 from './ChallengeV3';
import CompanyV3 from './CompanyV3';
import CreateIndividualV3 from './CreateIndividualV3';
import CreatePayeeAddressV3 from './CreatePayeeAddressV3';
import CreatePaymentChannelV3 from './CreatePaymentChannelV3';
import PayeePayorRefV3 from './PayeePayorRefV3';

/**
 * The CreatePayeeV3 model module.
 * @module model/CreatePayeeV3
 * @version 2.35.58
 */
class CreatePayeeV3 {
    /**
     * Constructs a new <code>CreatePayeeV3</code>.
     * @alias module:model/CreatePayeeV3
     * @param email {String} 
     * @param remoteId {String} 
     * @param type {String} Type of Payee. One of the following values: Individual, Company
     * @param address {module:model/CreatePayeeAddressV3} 
     */
    constructor(email, remoteId, type, address) { 
        
        CreatePayeeV3.initialize(this, email, remoteId, type, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, remoteId, type, address) { 
        obj['email'] = email;
        obj['remoteId'] = remoteId;
        obj['type'] = type;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>CreatePayeeV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayeeV3} obj Optional instance to populate.
     * @return {module:model/CreatePayeeV3} The populated <code>CreatePayeeV3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePayeeV3();

            if (data.hasOwnProperty('payeeId')) {
                obj['payeeId'] = ApiClient.convertToType(data['payeeId'], 'String');
            }
            if (data.hasOwnProperty('payorRefs')) {
                obj['payorRefs'] = ApiClient.convertToType(data['payorRefs'], [PayeePayorRefV3]);
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
                obj['address'] = CreatePayeeAddressV3.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('paymentChannel')) {
                obj['paymentChannel'] = CreatePaymentChannelV3.constructFromObject(data['paymentChannel']);
            }
            if (data.hasOwnProperty('challenge')) {
                obj['challenge'] = ChallengeV3.constructFromObject(data['challenge']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = CompanyV3.constructFromObject(data['company']);
            }
            if (data.hasOwnProperty('individual')) {
                obj['individual'] = CreateIndividualV3.constructFromObject(data['individual']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreatePayeeV3</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePayeeV3</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreatePayeeV3.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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
                PayeePayorRefV3.validateJSON(item);
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
          CreatePayeeAddressV3.validateJSON(data['address']);
        }
        // validate the optional field `paymentChannel`
        if (data['paymentChannel']) { // data not null
          CreatePaymentChannelV3.validateJSON(data['paymentChannel']);
        }
        // validate the optional field `challenge`
        if (data['challenge']) { // data not null
          ChallengeV3.validateJSON(data['challenge']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }
        // validate the optional field `company`
        if (data['company']) { // data not null
          CompanyV3.validateJSON(data['company']);
        }
        // validate the optional field `individual`
        if (data['individual']) { // data not null
          CreateIndividualV3.validateJSON(data['individual']);
        }

        return true;
    }


}

CreatePayeeV3.RequiredProperties = ["email", "remoteId", "type", "address"];

/**
 * @member {String} payeeId
 */
CreatePayeeV3.prototype['payeeId'] = undefined;

/**
 * @member {Array.<module:model/PayeePayorRefV3>} payorRefs
 */
CreatePayeeV3.prototype['payorRefs'] = undefined;

/**
 * @member {String} email
 */
CreatePayeeV3.prototype['email'] = undefined;

/**
 * @member {String} remoteId
 */
CreatePayeeV3.prototype['remoteId'] = undefined;

/**
 * Type of Payee. One of the following values: Individual, Company
 * @member {String} type
 */
CreatePayeeV3.prototype['type'] = undefined;

/**
 * @member {module:model/CreatePayeeAddressV3} address
 */
CreatePayeeV3.prototype['address'] = undefined;

/**
 * @member {module:model/CreatePaymentChannelV3} paymentChannel
 */
CreatePayeeV3.prototype['paymentChannel'] = undefined;

/**
 * @member {module:model/ChallengeV3} challenge
 */
CreatePayeeV3.prototype['challenge'] = undefined;

/**
 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR> See the /v1/supportedLanguages endpoint to list the available codes for an environment. 
 * @member {String} language
 */
CreatePayeeV3.prototype['language'] = undefined;

/**
 * @member {module:model/CompanyV3} company
 */
CreatePayeeV3.prototype['company'] = undefined;

/**
 * @member {module:model/CreateIndividualV3} individual
 */
CreatePayeeV3.prototype['individual'] = undefined;






export default CreatePayeeV3;

