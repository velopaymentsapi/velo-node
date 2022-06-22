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
import KycState from './KycState';
import PaymentRails from './PaymentRails';
import PayorAddressV2 from './PayorAddressV2';
import TransmissionTypes2 from './TransmissionTypes2';

/**
 * The PayorV2 model module.
 * @module model/PayorV2
 * @version 2.30.53
 */
class PayorV2 {
    /**
     * Constructs a new <code>PayorV2</code>.
     * @alias module:model/PayorV2
     * @param payorId {String} 
     * @param payorName {String} The name of the payor.
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
                obj['kycState'] = KycState.constructFromObject(data['kycState']);
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
                obj['paymentRails'] = PaymentRails.constructFromObject(data['paymentRails']);
            }
            if (data.hasOwnProperty('transmissionTypes')) {
                obj['transmissionTypes'] = TransmissionTypes2.constructFromObject(data['transmissionTypes']);
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
        }
        return obj;
    }


}

/**
 * @member {String} payorId
 */
PayorV2.prototype['payorId'] = undefined;

/**
 * The name of the payor.
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
 * @member {module:model/KycState} kycState
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
 * The grace period for paying payees in days.
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
 * The payor’s language preference. Must be one of [EN, FR].
 * @member {module:model/PayorV2.LanguageEnum} language
 */
PayorV2.prototype['language'] = undefined;

/**
 * @member {Boolean} includesReports
 */
PayorV2.prototype['includesReports'] = undefined;

/**
 * @member {String} wuCustomerId
 */
PayorV2.prototype['wuCustomerId'] = undefined;

/**
 * @member {Number} maxMasterPayorAdmins
 */
PayorV2.prototype['maxMasterPayorAdmins'] = undefined;

/**
 * @member {module:model/PaymentRails} paymentRails
 */
PayorV2.prototype['paymentRails'] = undefined;

/**
 * @member {module:model/TransmissionTypes2} transmissionTypes
 */
PayorV2.prototype['transmissionTypes'] = undefined;

/**
 * The payor’s supported remote systems by id
 * @member {Array.<String>} remoteSystemIds
 */
PayorV2.prototype['remoteSystemIds'] = undefined;

/**
 * USD in minor units
 * @member {Number} usdTxnValueReportingThreshold
 */
PayorV2.prototype['usdTxnValueReportingThreshold'] = undefined;

/**
 * @member {Boolean} managingPayees
 */
PayorV2.prototype['managingPayees'] = undefined;





/**
 * Allowed values for the <code>language</code> property.
 * @enum {String}
 * @readonly
 */
PayorV2['LanguageEnum'] = {

    /**
     * value: "EN"
     * @const
     */
    "EN": "EN",

    /**
     * value: "FR"
     * @const
     */
    "FR": "FR"
};



export default PayorV2;

