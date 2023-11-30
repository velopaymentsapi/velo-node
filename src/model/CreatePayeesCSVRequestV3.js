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
import PayeeTypeEnum from './PayeeTypeEnum';

/**
 * The CreatePayeesCSVRequestV3 model module.
 * @module model/CreatePayeesCSVRequestV3
 * @version 2.37.150-beta.1
 */
class CreatePayeesCSVRequestV3 {
    /**
     * Constructs a new <code>CreatePayeesCSVRequestV3</code>.
     * @alias module:model/CreatePayeesCSVRequestV3
     * @param type {module:model/PayeeTypeEnum} 
     * @param remoteId {String} 
     * @param email {String} 
     * @param addressLine1 {String} 
     * @param addressCity {String} 
     * @param addressZipOrPostcode {String} 
     * @param addressCountry {String} Valid ISO 3166 2 character country code. See the <a href=\"https://www.iso.org/iso-3166-country-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
     */
    constructor(type, remoteId, email, addressLine1, addressCity, addressZipOrPostcode, addressCountry) { 
        
        CreatePayeesCSVRequestV3.initialize(this, type, remoteId, email, addressLine1, addressCity, addressZipOrPostcode, addressCountry);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, remoteId, email, addressLine1, addressCity, addressZipOrPostcode, addressCountry) { 
        obj['type'] = type;
        obj['remoteId'] = remoteId;
        obj['email'] = email;
        obj['addressLine1'] = addressLine1;
        obj['addressCity'] = addressCity;
        obj['addressZipOrPostcode'] = addressZipOrPostcode;
        obj['addressCountry'] = addressCountry;
    }

    /**
     * Constructs a <code>CreatePayeesCSVRequestV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayeesCSVRequestV3} obj Optional instance to populate.
     * @return {module:model/CreatePayeesCSVRequestV3} The populated <code>CreatePayeesCSVRequestV3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePayeesCSVRequestV3();

            if (data.hasOwnProperty('type')) {
                obj['type'] = PayeeTypeEnum.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('remoteId')) {
                obj['remoteId'] = ApiClient.convertToType(data['remoteId'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('addressLine1')) {
                obj['addressLine1'] = ApiClient.convertToType(data['addressLine1'], 'String');
            }
            if (data.hasOwnProperty('addressLine2')) {
                obj['addressLine2'] = ApiClient.convertToType(data['addressLine2'], 'String');
            }
            if (data.hasOwnProperty('addressLine3')) {
                obj['addressLine3'] = ApiClient.convertToType(data['addressLine3'], 'String');
            }
            if (data.hasOwnProperty('addressLine4')) {
                obj['addressLine4'] = ApiClient.convertToType(data['addressLine4'], 'String');
            }
            if (data.hasOwnProperty('addressCity')) {
                obj['addressCity'] = ApiClient.convertToType(data['addressCity'], 'String');
            }
            if (data.hasOwnProperty('addressCountyOrProvince')) {
                obj['addressCountyOrProvince'] = ApiClient.convertToType(data['addressCountyOrProvince'], 'String');
            }
            if (data.hasOwnProperty('addressZipOrPostcode')) {
                obj['addressZipOrPostcode'] = ApiClient.convertToType(data['addressZipOrPostcode'], 'String');
            }
            if (data.hasOwnProperty('addressCountry')) {
                obj['addressCountry'] = ApiClient.convertToType(data['addressCountry'], 'String');
            }
            if (data.hasOwnProperty('individualNationalIdentification')) {
                obj['individualNationalIdentification'] = ApiClient.convertToType(data['individualNationalIdentification'], 'String');
            }
            if (data.hasOwnProperty('individualDateOfBirth')) {
                obj['individualDateOfBirth'] = ApiClient.convertToType(data['individualDateOfBirth'], 'Date');
            }
            if (data.hasOwnProperty('individualTitle')) {
                obj['individualTitle'] = ApiClient.convertToType(data['individualTitle'], 'String');
            }
            if (data.hasOwnProperty('individualFirstName')) {
                obj['individualFirstName'] = ApiClient.convertToType(data['individualFirstName'], 'String');
            }
            if (data.hasOwnProperty('individualOtherNames')) {
                obj['individualOtherNames'] = ApiClient.convertToType(data['individualOtherNames'], 'String');
            }
            if (data.hasOwnProperty('individualLastName')) {
                obj['individualLastName'] = ApiClient.convertToType(data['individualLastName'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('companyEIN')) {
                obj['companyEIN'] = ApiClient.convertToType(data['companyEIN'], 'String');
            }
            if (data.hasOwnProperty('companyOperatingName')) {
                obj['companyOperatingName'] = ApiClient.convertToType(data['companyOperatingName'], 'String');
            }
            if (data.hasOwnProperty('paymentChannelAccountNumber')) {
                obj['paymentChannelAccountNumber'] = ApiClient.convertToType(data['paymentChannelAccountNumber'], 'String');
            }
            if (data.hasOwnProperty('paymentChannelRoutingNumber')) {
                obj['paymentChannelRoutingNumber'] = ApiClient.convertToType(data['paymentChannelRoutingNumber'], 'String');
            }
            if (data.hasOwnProperty('paymentChannelAccountName')) {
                obj['paymentChannelAccountName'] = ApiClient.convertToType(data['paymentChannelAccountName'], 'String');
            }
            if (data.hasOwnProperty('paymentChannelIban')) {
                obj['paymentChannelIban'] = ApiClient.convertToType(data['paymentChannelIban'], 'String');
            }
            if (data.hasOwnProperty('paymentChannelCountryCode')) {
                obj['paymentChannelCountryCode'] = ApiClient.convertToType(data['paymentChannelCountryCode'], 'String');
            }
            if (data.hasOwnProperty('paymentChannelCurrency')) {
                obj['paymentChannelCurrency'] = ApiClient.convertToType(data['paymentChannelCurrency'], 'String');
            }
            if (data.hasOwnProperty('challengeDescription')) {
                obj['challengeDescription'] = ApiClient.convertToType(data['challengeDescription'], 'String');
            }
            if (data.hasOwnProperty('challengeValue')) {
                obj['challengeValue'] = ApiClient.convertToType(data['challengeValue'], 'String');
            }
            if (data.hasOwnProperty('payeeLanguage')) {
                obj['payeeLanguage'] = ApiClient.convertToType(data['payeeLanguage'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreatePayeesCSVRequestV3</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePayeesCSVRequestV3</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreatePayeesCSVRequestV3.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['remoteId'] && !(typeof data['remoteId'] === 'string' || data['remoteId'] instanceof String)) {
            throw new Error("Expected the field `remoteId` to be a primitive type in the JSON string but got " + data['remoteId']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['addressLine1'] && !(typeof data['addressLine1'] === 'string' || data['addressLine1'] instanceof String)) {
            throw new Error("Expected the field `addressLine1` to be a primitive type in the JSON string but got " + data['addressLine1']);
        }
        // ensure the json data is a string
        if (data['addressLine2'] && !(typeof data['addressLine2'] === 'string' || data['addressLine2'] instanceof String)) {
            throw new Error("Expected the field `addressLine2` to be a primitive type in the JSON string but got " + data['addressLine2']);
        }
        // ensure the json data is a string
        if (data['addressLine3'] && !(typeof data['addressLine3'] === 'string' || data['addressLine3'] instanceof String)) {
            throw new Error("Expected the field `addressLine3` to be a primitive type in the JSON string but got " + data['addressLine3']);
        }
        // ensure the json data is a string
        if (data['addressLine4'] && !(typeof data['addressLine4'] === 'string' || data['addressLine4'] instanceof String)) {
            throw new Error("Expected the field `addressLine4` to be a primitive type in the JSON string but got " + data['addressLine4']);
        }
        // ensure the json data is a string
        if (data['addressCity'] && !(typeof data['addressCity'] === 'string' || data['addressCity'] instanceof String)) {
            throw new Error("Expected the field `addressCity` to be a primitive type in the JSON string but got " + data['addressCity']);
        }
        // ensure the json data is a string
        if (data['addressCountyOrProvince'] && !(typeof data['addressCountyOrProvince'] === 'string' || data['addressCountyOrProvince'] instanceof String)) {
            throw new Error("Expected the field `addressCountyOrProvince` to be a primitive type in the JSON string but got " + data['addressCountyOrProvince']);
        }
        // ensure the json data is a string
        if (data['addressZipOrPostcode'] && !(typeof data['addressZipOrPostcode'] === 'string' || data['addressZipOrPostcode'] instanceof String)) {
            throw new Error("Expected the field `addressZipOrPostcode` to be a primitive type in the JSON string but got " + data['addressZipOrPostcode']);
        }
        // ensure the json data is a string
        if (data['addressCountry'] && !(typeof data['addressCountry'] === 'string' || data['addressCountry'] instanceof String)) {
            throw new Error("Expected the field `addressCountry` to be a primitive type in the JSON string but got " + data['addressCountry']);
        }
        // ensure the json data is a string
        if (data['individualNationalIdentification'] && !(typeof data['individualNationalIdentification'] === 'string' || data['individualNationalIdentification'] instanceof String)) {
            throw new Error("Expected the field `individualNationalIdentification` to be a primitive type in the JSON string but got " + data['individualNationalIdentification']);
        }
        // ensure the json data is a string
        if (data['individualTitle'] && !(typeof data['individualTitle'] === 'string' || data['individualTitle'] instanceof String)) {
            throw new Error("Expected the field `individualTitle` to be a primitive type in the JSON string but got " + data['individualTitle']);
        }
        // ensure the json data is a string
        if (data['individualFirstName'] && !(typeof data['individualFirstName'] === 'string' || data['individualFirstName'] instanceof String)) {
            throw new Error("Expected the field `individualFirstName` to be a primitive type in the JSON string but got " + data['individualFirstName']);
        }
        // ensure the json data is a string
        if (data['individualOtherNames'] && !(typeof data['individualOtherNames'] === 'string' || data['individualOtherNames'] instanceof String)) {
            throw new Error("Expected the field `individualOtherNames` to be a primitive type in the JSON string but got " + data['individualOtherNames']);
        }
        // ensure the json data is a string
        if (data['individualLastName'] && !(typeof data['individualLastName'] === 'string' || data['individualLastName'] instanceof String)) {
            throw new Error("Expected the field `individualLastName` to be a primitive type in the JSON string but got " + data['individualLastName']);
        }
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }
        // ensure the json data is a string
        if (data['companyEIN'] && !(typeof data['companyEIN'] === 'string' || data['companyEIN'] instanceof String)) {
            throw new Error("Expected the field `companyEIN` to be a primitive type in the JSON string but got " + data['companyEIN']);
        }
        // ensure the json data is a string
        if (data['companyOperatingName'] && !(typeof data['companyOperatingName'] === 'string' || data['companyOperatingName'] instanceof String)) {
            throw new Error("Expected the field `companyOperatingName` to be a primitive type in the JSON string but got " + data['companyOperatingName']);
        }
        // ensure the json data is a string
        if (data['paymentChannelAccountNumber'] && !(typeof data['paymentChannelAccountNumber'] === 'string' || data['paymentChannelAccountNumber'] instanceof String)) {
            throw new Error("Expected the field `paymentChannelAccountNumber` to be a primitive type in the JSON string but got " + data['paymentChannelAccountNumber']);
        }
        // ensure the json data is a string
        if (data['paymentChannelRoutingNumber'] && !(typeof data['paymentChannelRoutingNumber'] === 'string' || data['paymentChannelRoutingNumber'] instanceof String)) {
            throw new Error("Expected the field `paymentChannelRoutingNumber` to be a primitive type in the JSON string but got " + data['paymentChannelRoutingNumber']);
        }
        // ensure the json data is a string
        if (data['paymentChannelAccountName'] && !(typeof data['paymentChannelAccountName'] === 'string' || data['paymentChannelAccountName'] instanceof String)) {
            throw new Error("Expected the field `paymentChannelAccountName` to be a primitive type in the JSON string but got " + data['paymentChannelAccountName']);
        }
        // ensure the json data is a string
        if (data['paymentChannelIban'] && !(typeof data['paymentChannelIban'] === 'string' || data['paymentChannelIban'] instanceof String)) {
            throw new Error("Expected the field `paymentChannelIban` to be a primitive type in the JSON string but got " + data['paymentChannelIban']);
        }
        // ensure the json data is a string
        if (data['paymentChannelCountryCode'] && !(typeof data['paymentChannelCountryCode'] === 'string' || data['paymentChannelCountryCode'] instanceof String)) {
            throw new Error("Expected the field `paymentChannelCountryCode` to be a primitive type in the JSON string but got " + data['paymentChannelCountryCode']);
        }
        // ensure the json data is a string
        if (data['paymentChannelCurrency'] && !(typeof data['paymentChannelCurrency'] === 'string' || data['paymentChannelCurrency'] instanceof String)) {
            throw new Error("Expected the field `paymentChannelCurrency` to be a primitive type in the JSON string but got " + data['paymentChannelCurrency']);
        }
        // ensure the json data is a string
        if (data['challengeDescription'] && !(typeof data['challengeDescription'] === 'string' || data['challengeDescription'] instanceof String)) {
            throw new Error("Expected the field `challengeDescription` to be a primitive type in the JSON string but got " + data['challengeDescription']);
        }
        // ensure the json data is a string
        if (data['challengeValue'] && !(typeof data['challengeValue'] === 'string' || data['challengeValue'] instanceof String)) {
            throw new Error("Expected the field `challengeValue` to be a primitive type in the JSON string but got " + data['challengeValue']);
        }
        // ensure the json data is a string
        if (data['payeeLanguage'] && !(typeof data['payeeLanguage'] === 'string' || data['payeeLanguage'] instanceof String)) {
            throw new Error("Expected the field `payeeLanguage` to be a primitive type in the JSON string but got " + data['payeeLanguage']);
        }

        return true;
    }


}

CreatePayeesCSVRequestV3.RequiredProperties = ["type", "remoteId", "email", "addressLine1", "addressCity", "addressZipOrPostcode", "addressCountry"];

/**
 * @member {module:model/PayeeTypeEnum} type
 */
CreatePayeesCSVRequestV3.prototype['type'] = undefined;

/**
 * @member {String} remoteId
 */
CreatePayeesCSVRequestV3.prototype['remoteId'] = undefined;

/**
 * @member {String} email
 */
CreatePayeesCSVRequestV3.prototype['email'] = undefined;

/**
 * @member {String} addressLine1
 */
CreatePayeesCSVRequestV3.prototype['addressLine1'] = undefined;

/**
 * @member {String} addressLine2
 */
CreatePayeesCSVRequestV3.prototype['addressLine2'] = undefined;

/**
 * @member {String} addressLine3
 */
CreatePayeesCSVRequestV3.prototype['addressLine3'] = undefined;

/**
 * @member {String} addressLine4
 */
CreatePayeesCSVRequestV3.prototype['addressLine4'] = undefined;

/**
 * @member {String} addressCity
 */
CreatePayeesCSVRequestV3.prototype['addressCity'] = undefined;

/**
 * @member {String} addressCountyOrProvince
 */
CreatePayeesCSVRequestV3.prototype['addressCountyOrProvince'] = undefined;

/**
 * @member {String} addressZipOrPostcode
 */
CreatePayeesCSVRequestV3.prototype['addressZipOrPostcode'] = undefined;

/**
 * Valid ISO 3166 2 character country code. See the <a href=\"https://www.iso.org/iso-3166-country-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} addressCountry
 */
CreatePayeesCSVRequestV3.prototype['addressCountry'] = undefined;

/**
 * @member {String} individualNationalIdentification
 */
CreatePayeesCSVRequestV3.prototype['individualNationalIdentification'] = undefined;

/**
 * Must not be date in future. Example - 1970-05-20
 * @member {Date} individualDateOfBirth
 */
CreatePayeesCSVRequestV3.prototype['individualDateOfBirth'] = undefined;

/**
 * @member {String} individualTitle
 */
CreatePayeesCSVRequestV3.prototype['individualTitle'] = undefined;

/**
 * @member {String} individualFirstName
 */
CreatePayeesCSVRequestV3.prototype['individualFirstName'] = undefined;

/**
 * @member {String} individualOtherNames
 */
CreatePayeesCSVRequestV3.prototype['individualOtherNames'] = undefined;

/**
 * @member {String} individualLastName
 */
CreatePayeesCSVRequestV3.prototype['individualLastName'] = undefined;

/**
 * @member {String} companyName
 */
CreatePayeesCSVRequestV3.prototype['companyName'] = undefined;

/**
 * @member {String} companyEIN
 */
CreatePayeesCSVRequestV3.prototype['companyEIN'] = undefined;

/**
 * @member {String} companyOperatingName
 */
CreatePayeesCSVRequestV3.prototype['companyOperatingName'] = undefined;

/**
 * Either routing number and account number or only iban must be set
 * @member {String} paymentChannelAccountNumber
 */
CreatePayeesCSVRequestV3.prototype['paymentChannelAccountNumber'] = undefined;

/**
 * Either routing number and account number or only iban must be set
 * @member {String} paymentChannelRoutingNumber
 */
CreatePayeesCSVRequestV3.prototype['paymentChannelRoutingNumber'] = undefined;

/**
 * @member {String} paymentChannelAccountName
 */
CreatePayeesCSVRequestV3.prototype['paymentChannelAccountName'] = undefined;

/**
 * Must match the regular expression ```^[A-Za-z0-9]+$```.
 * @member {String} paymentChannelIban
 */
CreatePayeesCSVRequestV3.prototype['paymentChannelIban'] = undefined;

/**
 * Valid ISO 3166 2 character country code. See the <a href=\"https://www.iso.org/iso-3166-country-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} paymentChannelCountryCode
 */
CreatePayeesCSVRequestV3.prototype['paymentChannelCountryCode'] = undefined;

/**
 * @member {String} paymentChannelCurrency
 */
CreatePayeesCSVRequestV3.prototype['paymentChannelCurrency'] = undefined;

/**
 * @member {String} challengeDescription
 */
CreatePayeesCSVRequestV3.prototype['challengeDescription'] = undefined;

/**
 * @member {String} challengeValue
 */
CreatePayeesCSVRequestV3.prototype['challengeValue'] = undefined;

/**
 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR> See the /v1/supportedLanguages endpoint to list the available codes for an environment. 
 * @member {String} payeeLanguage
 */
CreatePayeesCSVRequestV3.prototype['payeeLanguage'] = undefined;






export default CreatePayeesCSVRequestV3;

