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

/**
 * The AddressV4 model module.
 * @module model/AddressV4
 * @version 2.37.150-beta.1
 */
class AddressV4 {
    /**
     * Constructs a new <code>AddressV4</code>.
     * @alias module:model/AddressV4
     * @param line1 {String} 
     * @param city {String} 
     * @param country {String} Valid ISO 3166 2 character country code. See the <a href=\"https://www.iso.org/iso-3166-country-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
     */
    constructor(line1, city, country) { 
        
        AddressV4.initialize(this, line1, city, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, line1, city, country) { 
        obj['line1'] = line1;
        obj['city'] = city;
        obj['country'] = country;
    }

    /**
     * Constructs a <code>AddressV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressV4} obj Optional instance to populate.
     * @return {module:model/AddressV4} The populated <code>AddressV4</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressV4();

            if (data.hasOwnProperty('line1')) {
                obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
            }
            if (data.hasOwnProperty('line2')) {
                obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
            }
            if (data.hasOwnProperty('line3')) {
                obj['line3'] = ApiClient.convertToType(data['line3'], 'String');
            }
            if (data.hasOwnProperty('line4')) {
                obj['line4'] = ApiClient.convertToType(data['line4'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('countyOrProvince')) {
                obj['countyOrProvince'] = ApiClient.convertToType(data['countyOrProvince'], 'String');
            }
            if (data.hasOwnProperty('zipOrPostcode')) {
                obj['zipOrPostcode'] = ApiClient.convertToType(data['zipOrPostcode'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddressV4</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddressV4</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AddressV4.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['line1'] && !(typeof data['line1'] === 'string' || data['line1'] instanceof String)) {
            throw new Error("Expected the field `line1` to be a primitive type in the JSON string but got " + data['line1']);
        }
        // ensure the json data is a string
        if (data['line2'] && !(typeof data['line2'] === 'string' || data['line2'] instanceof String)) {
            throw new Error("Expected the field `line2` to be a primitive type in the JSON string but got " + data['line2']);
        }
        // ensure the json data is a string
        if (data['line3'] && !(typeof data['line3'] === 'string' || data['line3'] instanceof String)) {
            throw new Error("Expected the field `line3` to be a primitive type in the JSON string but got " + data['line3']);
        }
        // ensure the json data is a string
        if (data['line4'] && !(typeof data['line4'] === 'string' || data['line4'] instanceof String)) {
            throw new Error("Expected the field `line4` to be a primitive type in the JSON string but got " + data['line4']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['countyOrProvince'] && !(typeof data['countyOrProvince'] === 'string' || data['countyOrProvince'] instanceof String)) {
            throw new Error("Expected the field `countyOrProvince` to be a primitive type in the JSON string but got " + data['countyOrProvince']);
        }
        // ensure the json data is a string
        if (data['zipOrPostcode'] && !(typeof data['zipOrPostcode'] === 'string' || data['zipOrPostcode'] instanceof String)) {
            throw new Error("Expected the field `zipOrPostcode` to be a primitive type in the JSON string but got " + data['zipOrPostcode']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }

        return true;
    }


}

AddressV4.RequiredProperties = ["line1", "city", "country"];

/**
 * @member {String} line1
 */
AddressV4.prototype['line1'] = undefined;

/**
 * @member {String} line2
 */
AddressV4.prototype['line2'] = undefined;

/**
 * @member {String} line3
 */
AddressV4.prototype['line3'] = undefined;

/**
 * @member {String} line4
 */
AddressV4.prototype['line4'] = undefined;

/**
 * @member {String} city
 */
AddressV4.prototype['city'] = undefined;

/**
 * @member {String} countyOrProvince
 */
AddressV4.prototype['countyOrProvince'] = undefined;

/**
 * @member {String} zipOrPostcode
 */
AddressV4.prototype['zipOrPostcode'] = undefined;

/**
 * Valid ISO 3166 2 character country code. See the <a href=\"https://www.iso.org/iso-3166-country-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} country
 */
AddressV4.prototype['country'] = undefined;






export default AddressV4;
