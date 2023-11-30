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
import PayorAddressV2 from './PayorAddressV2';

/**
 * The PayorV2 model module.
 * @module model/PayorV2
 * @version 2.37.150-beta.1
 */
class PayorV2 {
    /**
     * Constructs a new <code>PayorV2</code>.
     * @alias module:model/PayorV2
     * @param payorId {String} The Payor Id
     * @param payorName {String} The name of the payor
     */
    constructor(payorId, payorName) { 
        
        PayorV2.initialize(this, payorId, payorName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, payorId, payorName) { 
        obj['payorId'] = payorId;
        obj['payorName'] = payorName;
    }

    /**
     * Constructs a <code>PayorV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorV2} obj Optional instance to populate.
     * @return {module:model/PayorV2} The populated <code>PayorV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayorV2();

            if (data.hasOwnProperty('payorId')) {
                obj['payorId'] = ApiClient.convertToType(data['payorId'], 'String');
            }
            if (data.hasOwnProperty('payorName')) {
                obj['payorName'] = ApiClient.convertToType(data['payorName'], 'String');
            }
            if (data.hasOwnProperty('payorXid')) {
                obj['payorXid'] = ApiClient.convertToType(data['payorXid'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = PayorAddressV2.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('primaryContactName')) {
                obj['primaryContactName'] = ApiClient.convertToType(data['primaryContactName'], 'String');
            }
            if (data.hasOwnProperty('primaryContactPhone')) {
                obj['primaryContactPhone'] = ApiClient.convertToType(data['primaryContactPhone'], 'String');
            }
            if (data.hasOwnProperty('primaryContactEmail')) {
                obj['primaryContactEmail'] = ApiClient.convertToType(data['primaryContactEmail'], 'String');
            }
            if (data.hasOwnProperty('kycState')) {
                obj['kycState'] = ApiClient.convertToType(data['kycState'], 'String');
            }
            if (data.hasOwnProperty('manualLockout')) {
                obj['manualLockout'] = ApiClient.convertToType(data['manualLockout'], 'Boolean');
            }
            if (data.hasOwnProperty('openBankingEnabled')) {
                obj['openBankingEnabled'] = ApiClient.convertToType(data['openBankingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('payeeGracePeriodProcessingEnabled')) {
                obj['payeeGracePeriodProcessingEnabled'] = ApiClient.convertToType(data['payeeGracePeriodProcessingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('payeeGracePeriodDays')) {
                obj['payeeGracePeriodDays'] = ApiClient.convertToType(data['payeeGracePeriodDays'], 'Number');
            }
            if (data.hasOwnProperty('collectiveAlias')) {
                obj['collectiveAlias'] = ApiClient.convertToType(data['collectiveAlias'], 'String');
            }
            if (data.hasOwnProperty('supportContact')) {
                obj['supportContact'] = ApiClient.convertToType(data['supportContact'], 'String');
            }
            if (data.hasOwnProperty('dbaName')) {
                obj['dbaName'] = ApiClient.convertToType(data['dbaName'], 'String');
            }
            if (data.hasOwnProperty('allowsLanguageChoice')) {
                obj['allowsLanguageChoice'] = ApiClient.convertToType(data['allowsLanguageChoice'], 'Boolean');
            }
            if (data.hasOwnProperty('reminderEmailsOptOut')) {
                obj['reminderEmailsOptOut'] = ApiClient.convertToType(data['reminderEmailsOptOut'], 'Boolean');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('includesReports')) {
                obj['includesReports'] = ApiClient.convertToType(data['includesReports'], 'Boolean');
            }
            if (data.hasOwnProperty('wuCustomerId')) {
                obj['wuCustomerId'] = ApiClient.convertToType(data['wuCustomerId'], 'String');
            }
            if (data.hasOwnProperty('maxMasterPayorAdmins')) {
                obj['maxMasterPayorAdmins'] = ApiClient.convertToType(data['maxMasterPayorAdmins'], 'Number');
            }
            if (data.hasOwnProperty('paymentRails')) {
                obj['paymentRails'] = ApiClient.convertToType(data['paymentRails'], 'String');
            }
            if (data.hasOwnProperty('remoteSystemIds')) {
                obj['remoteSystemIds'] = ApiClient.convertToType(data['remoteSystemIds'], ['String']);
            }
            if (data.hasOwnProperty('usdTxnValueReportingThreshold')) {
                obj['usdTxnValueReportingThreshold'] = ApiClient.convertToType(data['usdTxnValueReportingThreshold'], 'Number');
            }
            if (data.hasOwnProperty('managingPayees')) {
                obj['managingPayees'] = ApiClient.convertToType(data['managingPayees'], 'Boolean');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PayorV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PayorV2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PayorV2.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['payorId'] && !(typeof data['payorId'] === 'string' || data['payorId'] instanceof String)) {
            throw new Error("Expected the field `payorId` to be a primitive type in the JSON string but got " + data['payorId']);
        }
        // ensure the json data is a string
        if (data['payorName'] && !(typeof data['payorName'] === 'string' || data['payorName'] instanceof String)) {
            throw new Error("Expected the field `payorName` to be a primitive type in the JSON string but got " + data['payorName']);
        }
        // ensure the json data is a string
        if (data['payorXid'] && !(typeof data['payorXid'] === 'string' || data['payorXid'] instanceof String)) {
            throw new Error("Expected the field `payorXid` to be a primitive type in the JSON string but got " + data['payorXid']);
        }
        // ensure the json data is a string
        if (data['provider'] && !(typeof data['provider'] === 'string' || data['provider'] instanceof String)) {
            throw new Error("Expected the field `provider` to be a primitive type in the JSON string but got " + data['provider']);
        }
        // validate the optional field `address`
        if (data['address']) { // data not null
          PayorAddressV2.validateJSON(data['address']);
        }
        // ensure the json data is a string
        if (data['primaryContactName'] && !(typeof data['primaryContactName'] === 'string' || data['primaryContactName'] instanceof String)) {
            throw new Error("Expected the field `primaryContactName` to be a primitive type in the JSON string but got " + data['primaryContactName']);
        }
        // ensure the json data is a string
        if (data['primaryContactPhone'] && !(typeof data['primaryContactPhone'] === 'string' || data['primaryContactPhone'] instanceof String)) {
            throw new Error("Expected the field `primaryContactPhone` to be a primitive type in the JSON string but got " + data['primaryContactPhone']);
        }
        // ensure the json data is a string
        if (data['primaryContactEmail'] && !(typeof data['primaryContactEmail'] === 'string' || data['primaryContactEmail'] instanceof String)) {
            throw new Error("Expected the field `primaryContactEmail` to be a primitive type in the JSON string but got " + data['primaryContactEmail']);
        }
        // ensure the json data is a string
        if (data['kycState'] && !(typeof data['kycState'] === 'string' || data['kycState'] instanceof String)) {
            throw new Error("Expected the field `kycState` to be a primitive type in the JSON string but got " + data['kycState']);
        }
        // ensure the json data is a string
        if (data['collectiveAlias'] && !(typeof data['collectiveAlias'] === 'string' || data['collectiveAlias'] instanceof String)) {
            throw new Error("Expected the field `collectiveAlias` to be a primitive type in the JSON string but got " + data['collectiveAlias']);
        }
        // ensure the json data is a string
        if (data['supportContact'] && !(typeof data['supportContact'] === 'string' || data['supportContact'] instanceof String)) {
            throw new Error("Expected the field `supportContact` to be a primitive type in the JSON string but got " + data['supportContact']);
        }
        // ensure the json data is a string
        if (data['dbaName'] && !(typeof data['dbaName'] === 'string' || data['dbaName'] instanceof String)) {
            throw new Error("Expected the field `dbaName` to be a primitive type in the JSON string but got " + data['dbaName']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }
        // ensure the json data is a string
        if (data['wuCustomerId'] && !(typeof data['wuCustomerId'] === 'string' || data['wuCustomerId'] instanceof String)) {
            throw new Error("Expected the field `wuCustomerId` to be a primitive type in the JSON string but got " + data['wuCustomerId']);
        }
        // ensure the json data is a string
        if (data['paymentRails'] && !(typeof data['paymentRails'] === 'string' || data['paymentRails'] instanceof String)) {
            throw new Error("Expected the field `paymentRails` to be a primitive type in the JSON string but got " + data['paymentRails']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['remoteSystemIds'])) {
            throw new Error("Expected the field `remoteSystemIds` to be an array in the JSON data but got " + data['remoteSystemIds']);
        }

        return true;
    }


}

PayorV2.RequiredProperties = ["payorId", "payorName"];

/**
 * The Payor Id
 * @member {String} payorId
 */
PayorV2.prototype['payorId'] = undefined;

/**
 * The name of the payor
 * @member {String} payorName
 */
PayorV2.prototype['payorName'] = undefined;

/**
 * A unique identifier that an external system uses to reference the payor in their system
 * @member {String} payorXid
 */
PayorV2.prototype['payorXid'] = undefined;

/**
 * The source of the payorXid, default is null which means Velo
 * @member {String} provider
 */
PayorV2.prototype['provider'] = undefined;

/**
 * @member {module:model/PayorAddressV2} address
 */
PayorV2.prototype['address'] = undefined;

/**
 * Name of primary contact for the payor.
 * @member {String} primaryContactName
 */
PayorV2.prototype['primaryContactName'] = undefined;

/**
 * Primary contact phone number for the payor.
 * @member {String} primaryContactPhone
 */
PayorV2.prototype['primaryContactPhone'] = undefined;

/**
 * Primary contact email for the payor.
 * @member {String} primaryContactEmail
 */
PayorV2.prototype['primaryContactEmail'] = undefined;

/**
 * The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC
 * @member {String} kycState
 */
PayorV2.prototype['kycState'] = undefined;

/**
 * Whether or not the payor has been manually locked by the backoffice.
 * @member {Boolean} manualLockout
 */
PayorV2.prototype['manualLockout'] = undefined;

/**
 * Is Open Banking supported for this payor
 * @member {Boolean} openBankingEnabled
 */
PayorV2.prototype['openBankingEnabled'] = undefined;

/**
 * Whether grace period processing is enabled.
 * @member {Boolean} payeeGracePeriodProcessingEnabled
 */
PayorV2.prototype['payeeGracePeriodProcessingEnabled'] = undefined;

/**
 * The grace period for paying payees in days before the payee must be onboarded.
 * @member {Number} payeeGracePeriodDays
 */
PayorV2.prototype['payeeGracePeriodDays'] = undefined;

/**
 * How the payor has chosen to refer to payees.
 * @member {String} collectiveAlias
 */
PayorV2.prototype['collectiveAlias'] = undefined;

/**
 * The payor’s support contact email address.
 * @member {String} supportContact
 */
PayorV2.prototype['supportContact'] = undefined;

/**
 * The payor’s 'Doing Business As' name.
 * @member {String} dbaName
 */
PayorV2.prototype['dbaName'] = undefined;

/**
 * Whether or not the payor allows language choice in the UI.
 * @member {Boolean} allowsLanguageChoice
 */
PayorV2.prototype['allowsLanguageChoice'] = undefined;

/**
 * Whether or not the payor has opted-out of reminder emails being sent.
 * @member {Boolean} reminderEmailsOptOut
 */
PayorV2.prototype['reminderEmailsOptOut'] = undefined;

/**
 * The payor’s language preference. Must be one of [EN, FR]
 * @member {String} language
 */
PayorV2.prototype['language'] = undefined;

/**
 * For internal use only (will be removed in a later version)
 * @member {Boolean} includesReports
 */
PayorV2.prototype['includesReports'] = undefined;

/**
 * For internal use only (will be removed in a later version)
 * @member {String} wuCustomerId
 */
PayorV2.prototype['wuCustomerId'] = undefined;

/**
 * The maximum number of payor users with the master admin role
 * @member {Number} maxMasterPayorAdmins
 */
PayorV2.prototype['maxMasterPayorAdmins'] = undefined;

/**
 * For internal use only (will be removed in a later version)
 * @member {String} paymentRails
 */
PayorV2.prototype['paymentRails'] = undefined;

/**
 * For internal use only (will be removed in a later version)
 * @member {Array.<String>} remoteSystemIds
 */
PayorV2.prototype['remoteSystemIds'] = undefined;

/**
 * USD in minor units. For internal use only (will be removed in a later version)
 * @member {Number} usdTxnValueReportingThreshold
 */
PayorV2.prototype['usdTxnValueReportingThreshold'] = undefined;

/**
 * Does this payor manage their own payees (payees are not invited but managed by the payor)
 * @member {Boolean} managingPayees
 */
PayorV2.prototype['managingPayees'] = undefined;

/**
 * The date of creation of the payor
 * @member {Date} createdAt
 */
PayorV2.prototype['createdAt'] = undefined;






export default PayorV2;

