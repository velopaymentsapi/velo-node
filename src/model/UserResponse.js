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
import Role from './Role';

/**
 * The UserResponse model module.
 * @module model/UserResponse
 * @version 2.37.150-beta.1
 */
class UserResponse {
    /**
     * Constructs a new <code>UserResponse</code>.
     * @alias module:model/UserResponse
     */
    constructor() { 
        
        UserResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserResponse} obj Optional instance to populate.
     * @return {module:model/UserResponse} The populated <code>UserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('smsNumber')) {
                obj['smsNumber'] = ApiClient.convertToType(data['smsNumber'], 'String');
            }
            if (data.hasOwnProperty('primaryContactNumber')) {
                obj['primaryContactNumber'] = ApiClient.convertToType(data['primaryContactNumber'], 'String');
            }
            if (data.hasOwnProperty('secondaryContactNumber')) {
                obj['secondaryContactNumber'] = ApiClient.convertToType(data['secondaryContactNumber'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], [Role]);
            }
            if (data.hasOwnProperty('userType')) {
                obj['userType'] = ApiClient.convertToType(data['userType'], 'String');
            }
            if (data.hasOwnProperty('mfaType')) {
                obj['mfaType'] = ApiClient.convertToType(data['mfaType'], 'String');
            }
            if (data.hasOwnProperty('mfaStatus')) {
                obj['mfaStatus'] = ApiClient.convertToType(data['mfaStatus'], 'String');
            }
            if (data.hasOwnProperty('lockedOut')) {
                obj['lockedOut'] = ApiClient.convertToType(data['lockedOut'], 'Boolean');
            }
            if (data.hasOwnProperty('lockedOutTimestamp')) {
                obj['lockedOutTimestamp'] = ApiClient.convertToType(data['lockedOutTimestamp'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['smsNumber'] && !(typeof data['smsNumber'] === 'string' || data['smsNumber'] instanceof String)) {
            throw new Error("Expected the field `smsNumber` to be a primitive type in the JSON string but got " + data['smsNumber']);
        }
        // ensure the json data is a string
        if (data['primaryContactNumber'] && !(typeof data['primaryContactNumber'] === 'string' || data['primaryContactNumber'] instanceof String)) {
            throw new Error("Expected the field `primaryContactNumber` to be a primitive type in the JSON string but got " + data['primaryContactNumber']);
        }
        // ensure the json data is a string
        if (data['secondaryContactNumber'] && !(typeof data['secondaryContactNumber'] === 'string' || data['secondaryContactNumber'] instanceof String)) {
            throw new Error("Expected the field `secondaryContactNumber` to be a primitive type in the JSON string but got " + data['secondaryContactNumber']);
        }
        // ensure the json data is a string
        if (data['firstName'] && !(typeof data['firstName'] === 'string' || data['firstName'] instanceof String)) {
            throw new Error("Expected the field `firstName` to be a primitive type in the JSON string but got " + data['firstName']);
        }
        // ensure the json data is a string
        if (data['lastName'] && !(typeof data['lastName'] === 'string' || data['lastName'] instanceof String)) {
            throw new Error("Expected the field `lastName` to be a primitive type in the JSON string but got " + data['lastName']);
        }
        // ensure the json data is a string
        if (data['entityId'] && !(typeof data['entityId'] === 'string' || data['entityId'] instanceof String)) {
            throw new Error("Expected the field `entityId` to be a primitive type in the JSON string but got " + data['entityId']);
        }
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }
        if (data['roles']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['roles'])) {
                throw new Error("Expected the field `roles` to be an array in the JSON data but got " + data['roles']);
            }
            // validate the optional field `roles` (array)
            for (const item of data['roles']) {
                Role.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['userType'] && !(typeof data['userType'] === 'string' || data['userType'] instanceof String)) {
            throw new Error("Expected the field `userType` to be a primitive type in the JSON string but got " + data['userType']);
        }
        // ensure the json data is a string
        if (data['mfaType'] && !(typeof data['mfaType'] === 'string' || data['mfaType'] instanceof String)) {
            throw new Error("Expected the field `mfaType` to be a primitive type in the JSON string but got " + data['mfaType']);
        }
        // ensure the json data is a string
        if (data['mfaStatus'] && !(typeof data['mfaStatus'] === 'string' || data['mfaStatus'] instanceof String)) {
            throw new Error("Expected the field `mfaStatus` to be a primitive type in the JSON string but got " + data['mfaStatus']);
        }

        return true;
    }


}



/**
 * The id of the user
 * @member {String} id
 */
UserResponse.prototype['id'] = undefined;

/**
 * The status of the user when the user has been invited but not yet enrolled they will have a PENDING status 
 * @member {module:model/UserResponse.StatusEnum} status
 */
UserResponse.prototype['status'] = undefined;

/**
 * the email address of the user
 * @member {String} email
 */
UserResponse.prototype['email'] = undefined;

/**
 * The phone number of a device that the user can receive sms messages on 
 * @member {String} smsNumber
 */
UserResponse.prototype['smsNumber'] = undefined;

/**
 * The main contact number for the user 
 * @member {String} primaryContactNumber
 */
UserResponse.prototype['primaryContactNumber'] = undefined;

/**
 * The secondary contact number for the user 
 * @member {String} secondaryContactNumber
 */
UserResponse.prototype['secondaryContactNumber'] = undefined;

/**
 * @member {String} firstName
 */
UserResponse.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
UserResponse.prototype['lastName'] = undefined;

/**
 * The payorId or payeeId or null if the user is not a payor or payee user 
 * @member {String} entityId
 */
UserResponse.prototype['entityId'] = undefined;

/**
 * The payor or payee company name or null if the user is not a payor or payee user 
 * @member {String} companyName
 */
UserResponse.prototype['companyName'] = undefined;

/**
 * The role(s) for the user 
 * @member {Array.<module:model/Role>} roles
 */
UserResponse.prototype['roles'] = undefined;

/**
 * Indicates the type of user. Could be BACKOFFICE, PAYOR or PAYEE.
 * @member {module:model/UserResponse.UserTypeEnum} userType
 */
UserResponse.prototype['userType'] = undefined;

/**
 * The type of the MFA device
 * @member {module:model/UserResponse.MfaTypeEnum} mfaType
 */
UserResponse.prototype['mfaType'] = undefined;

/**
 * The status of the MFA device
 * @member {module:model/UserResponse.MfaStatusEnum} mfaStatus
 */
UserResponse.prototype['mfaStatus'] = undefined;

/**
 * If true the user is currently locked out and unable to log in
 * @member {Boolean} lockedOut
 */
UserResponse.prototype['lockedOut'] = undefined;

/**
 * A timestamp showing when the user was locked out If null then the user is not currently locked out 
 * @member {Date} lockedOutTimestamp
 */
UserResponse.prototype['lockedOutTimestamp'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
UserResponse['StatusEnum'] = {

    /**
     * value: "ENABLED"
     * @const
     */
    "ENABLED": "ENABLED",

    /**
     * value: "DISABLED"
     * @const
     */
    "DISABLED": "DISABLED",

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING"
};


/**
 * Allowed values for the <code>userType</code> property.
 * @enum {String}
 * @readonly
 */
UserResponse['UserTypeEnum'] = {

    /**
     * value: "BACKOFFICE"
     * @const
     */
    "BACKOFFICE": "BACKOFFICE",

    /**
     * value: "PAYOR"
     * @const
     */
    "PAYOR": "PAYOR",

    /**
     * value: "PAYEE"
     * @const
     */
    "PAYEE": "PAYEE"
};


/**
 * Allowed values for the <code>mfaType</code> property.
 * @enum {String}
 * @readonly
 */
UserResponse['MfaTypeEnum'] = {

    /**
     * value: "SMS"
     * @const
     */
    "SMS": "SMS",

    /**
     * value: "YUBIKEY"
     * @const
     */
    "YUBIKEY": "YUBIKEY",

    /**
     * value: "TOTP"
     * @const
     */
    "TOTP": "TOTP"
};


/**
 * Allowed values for the <code>mfaStatus</code> property.
 * @enum {String}
 * @readonly
 */
UserResponse['MfaStatusEnum'] = {

    /**
     * value: "REGISTERED"
     * @const
     */
    "REGISTERED": "REGISTERED",

    /**
     * value: "UNREGISTERED"
     * @const
     */
    "UNREGISTERED": "UNREGISTERED",

    /**
     * value: "VERIFIED"
     * @const
     */
    "VERIFIED": "VERIFIED"
};



export default UserResponse;

