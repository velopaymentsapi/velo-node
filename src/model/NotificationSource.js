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
import DebitStatusChanged from './DebitStatusChanged';
import OnboardingStatusChanged from './OnboardingStatusChanged';
import PayableStatusChanged from './PayableStatusChanged';
import PayeeDetailsChanged from './PayeeDetailsChanged';
import PayeeEventAllOfReasons from './PayeeEventAllOfReasons';
import PaymentRejectedOrReturned from './PaymentRejectedOrReturned';
import PaymentStatusChanged from './PaymentStatusChanged';
import PayorFundingDetected from './PayorFundingDetected';
import PayoutPayorIds from './PayoutPayorIds';
import Ping from './Ping';

/**
 * The NotificationSource model module.
 * @module model/NotificationSource
 * @version 2.37.150-beta.1
 */
class NotificationSource {
    /**
     * Constructs a new <code>NotificationSource</code>.
     * One of the available set of source event payloads
     * @alias module:model/NotificationSource
     * @param {(module:model/DebitStatusChanged|module:model/OnboardingStatusChanged|module:model/PayableStatusChanged|module:model/PayeeDetailsChanged|module:model/PaymentRejectedOrReturned|module:model/PaymentStatusChanged|module:model/PayorFundingDetected|module:model/Ping)} instance The actual instance to initialize NotificationSource.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "Ping") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Ping.validateJSON(instance); // throw an exception if no match
                // create Ping from JS object
                this.actualInstance = Ping.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Ping
            errorMessages.push("Failed to construct Ping: " + err)
        }

        try {
            if (typeof instance === "PaymentStatusChanged") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                PaymentStatusChanged.validateJSON(instance); // throw an exception if no match
                // create PaymentStatusChanged from JS object
                this.actualInstance = PaymentStatusChanged.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into PaymentStatusChanged
            errorMessages.push("Failed to construct PaymentStatusChanged: " + err)
        }

        try {
            if (typeof instance === "PaymentRejectedOrReturned") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                PaymentRejectedOrReturned.validateJSON(instance); // throw an exception if no match
                // create PaymentRejectedOrReturned from JS object
                this.actualInstance = PaymentRejectedOrReturned.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into PaymentRejectedOrReturned
            errorMessages.push("Failed to construct PaymentRejectedOrReturned: " + err)
        }

        try {
            if (typeof instance === "OnboardingStatusChanged") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                OnboardingStatusChanged.validateJSON(instance); // throw an exception if no match
                // create OnboardingStatusChanged from JS object
                this.actualInstance = OnboardingStatusChanged.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into OnboardingStatusChanged
            errorMessages.push("Failed to construct OnboardingStatusChanged: " + err)
        }

        try {
            if (typeof instance === "PayableStatusChanged") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                PayableStatusChanged.validateJSON(instance); // throw an exception if no match
                // create PayableStatusChanged from JS object
                this.actualInstance = PayableStatusChanged.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into PayableStatusChanged
            errorMessages.push("Failed to construct PayableStatusChanged: " + err)
        }

        try {
            if (typeof instance === "PayeeDetailsChanged") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                PayeeDetailsChanged.validateJSON(instance); // throw an exception if no match
                // create PayeeDetailsChanged from JS object
                this.actualInstance = PayeeDetailsChanged.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into PayeeDetailsChanged
            errorMessages.push("Failed to construct PayeeDetailsChanged: " + err)
        }

        try {
            if (typeof instance === "DebitStatusChanged") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                DebitStatusChanged.validateJSON(instance); // throw an exception if no match
                // create DebitStatusChanged from JS object
                this.actualInstance = DebitStatusChanged.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into DebitStatusChanged
            errorMessages.push("Failed to construct DebitStatusChanged: " + err)
        }

        try {
            if (typeof instance === "PayorFundingDetected") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                PayorFundingDetected.validateJSON(instance); // throw an exception if no match
                // create PayorFundingDetected from JS object
                this.actualInstance = PayorFundingDetected.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into PayorFundingDetected
            errorMessages.push("Failed to construct PayorFundingDetected: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `NotificationSource` with oneOf schemas DebitStatusChanged, OnboardingStatusChanged, PayableStatusChanged, PayeeDetailsChanged, PaymentRejectedOrReturned, PaymentStatusChanged, PayorFundingDetected, Ping. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `NotificationSource` with oneOf schemas DebitStatusChanged, OnboardingStatusChanged, PayableStatusChanged, PayeeDetailsChanged, PaymentRejectedOrReturned, PaymentStatusChanged, PayorFundingDetected, Ping. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>NotificationSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationSource} obj Optional instance to populate.
     * @return {module:model/NotificationSource} The populated <code>NotificationSource</code> instance.
     */
    static constructFromObject(data, obj) {
        return new NotificationSource(data);
    }

    /**
     * Gets the actual instance, which can be <code>DebitStatusChanged</code>, <code>OnboardingStatusChanged</code>, <code>PayableStatusChanged</code>, <code>PayeeDetailsChanged</code>, <code>PaymentRejectedOrReturned</code>, <code>PaymentStatusChanged</code>, <code>PayorFundingDetected</code>, <code>Ping</code>.
     * @return {(module:model/DebitStatusChanged|module:model/OnboardingStatusChanged|module:model/PayableStatusChanged|module:model/PayeeDetailsChanged|module:model/PaymentRejectedOrReturned|module:model/PaymentStatusChanged|module:model/PayorFundingDetected|module:model/Ping)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>DebitStatusChanged</code>, <code>OnboardingStatusChanged</code>, <code>PayableStatusChanged</code>, <code>PayeeDetailsChanged</code>, <code>PaymentRejectedOrReturned</code>, <code>PaymentStatusChanged</code>, <code>PayorFundingDetected</code>, <code>Ping</code>.
     * @param {(module:model/DebitStatusChanged|module:model/OnboardingStatusChanged|module:model/PayableStatusChanged|module:model/PayeeDetailsChanged|module:model/PaymentRejectedOrReturned|module:model/PaymentStatusChanged|module:model/PayorFundingDetected|module:model/Ping)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = NotificationSource.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of NotificationSource from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/NotificationSource} An instance of NotificationSource.
     */
    static fromJSON = function(json_string){
        return NotificationSource.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */
NotificationSource.prototype['sourceType'] = undefined;

/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */
NotificationSource.prototype['eventId'] = undefined;

/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */
NotificationSource.prototype['createdAt'] = undefined;

/**
 * ID of this payment within the Velo platform
 * @member {String} paymentId
 */
NotificationSource.prototype['paymentId'] = undefined;

/**
 * @member {module:model/PayoutPayorIds} payoutPayorIds
 */
NotificationSource.prototype['payoutPayorIds'] = undefined;

/**
 * ID of this payment in the payors system
 * @member {String} payorPaymentId
 */
NotificationSource.prototype['payorPaymentId'] = undefined;

/**
 * The new status of the debit. One of \"PENDING\" \"PROCESSING\" \"REJECTED\" \"RELEASED\"
 * @member {String} status
 */
NotificationSource.prototype['status'] = undefined;

/**
 * The Velo code that indicates why the payment was rejected or returned
 * @member {String} reasonCode
 */
NotificationSource.prototype['reasonCode'] = undefined;

/**
 * The description of why the payment was rejected or returned
 * @member {String} reasonMessage
 */
NotificationSource.prototype['reasonMessage'] = undefined;

/**
 * ID of this payee within the Velo platform
 * @member {String} payeeId
 */
NotificationSource.prototype['payeeId'] = undefined;

/**
 * The reasons for the event notification.
 * @member {Array.<module:model/PayeeEventAllOfReasons>} reasons
 */
NotificationSource.prototype['reasons'] = undefined;

/**
 * ID of this debit transaction within the Velo platform
 * @member {String} debitTransactionId
 */
NotificationSource.prototype['debitTransactionId'] = undefined;

/**
 * the identifier of the payment rail from which funding was received
 * @member {String} railsId
 */
NotificationSource.prototype['railsId'] = undefined;

/**
 * ID of the payor within the Velo platform
 * @member {String} payorId
 */
NotificationSource.prototype['payorId'] = undefined;

/**
 * ID of this funding transaction within the Velo platform
 * @member {String} fundingRequestId
 */
NotificationSource.prototype['fundingRequestId'] = undefined;

/**
 * the external identity reference for this funding transaction
 * @member {String} fundingRef
 */
NotificationSource.prototype['fundingRef'] = undefined;

/**
 * the ISO-4217 code for the currency in which the funding was made
 * @member {String} currency
 */
NotificationSource.prototype['currency'] = undefined;

/**
 * the received funding amount in currency minor units
 * @member {Number} amount
 */
NotificationSource.prototype['amount'] = undefined;

/**
 * the name of the account as registered with the payment rail
 * @member {String} physicalAccountName
 */
NotificationSource.prototype['physicalAccountName'] = undefined;

/**
 * the name of the account as registered with the Velo platform
 * @member {String} sourceAccountName
 */
NotificationSource.prototype['sourceAccountName'] = undefined;

/**
 * the ID of the account as registered with the Velo platform
 * @member {String} sourceAccountId
 */
NotificationSource.prototype['sourceAccountId'] = undefined;

/**
 * any additional information received from the payment rail
 * @member {String} additionalInformation
 */
NotificationSource.prototype['additionalInformation'] = undefined;

/**
 * The Id of the related transaction
 * @member {String} transactionId
 */
NotificationSource.prototype['transactionId'] = undefined;

/**
 * The payors own reference for the related transaction
 * @member {String} transactionReference
 */
NotificationSource.prototype['transactionReference'] = undefined;


NotificationSource.OneOf = ["DebitStatusChanged", "OnboardingStatusChanged", "PayableStatusChanged", "PayeeDetailsChanged", "PaymentRejectedOrReturned", "PaymentStatusChanged", "PayorFundingDetected", "Ping"];

export default NotificationSource;
