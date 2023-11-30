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


import ApiClient from "../ApiClient";
import GetFundingsResponse from '../model/GetFundingsResponse';
import GetPaymentsForPayoutResponseV3 from '../model/GetPaymentsForPayoutResponseV3';
import GetPayoutStatistics from '../model/GetPayoutStatistics';
import GetPayoutsResponseV3 from '../model/GetPayoutsResponseV3';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse401 from '../model/InlineResponse401';
import InlineResponse403 from '../model/InlineResponse403';
import InlineResponse404 from '../model/InlineResponse404';
import ListPaymentsResponseV3 from '../model/ListPaymentsResponseV3';
import PaymentDeltaResponseV1 from '../model/PaymentDeltaResponseV1';
import PaymentResponseV3 from '../model/PaymentResponseV3';
import PayorAmlTransactionV3 from '../model/PayorAmlTransactionV3';

/**
* PaymentAuditServiceDeprecated service.
* @module api/PaymentAuditServiceDeprecatedApi
* @version 2.37.150-beta.1
*/
export default class PaymentAuditServiceDeprecatedApi {

    /**
    * Constructs a new PaymentAuditServiceDeprecatedApi. 
    * @alias module:api/PaymentAuditServiceDeprecatedApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the exportTransactionsCSVV3 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~exportTransactionsCSVV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayorAmlTransactionV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V3 Export Transactions
     * Deprecated (use /v4/paymentaudit/transactions instead)
     * @param {Object} opts Optional parameters
     * @param {String} [payorId] The Payor ID for whom you wish to run the report. For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor. 
     * @param {Date} [startDate] Start date, inclusive. Format is YYYY-MM-DD
     * @param {Date} [endDate] End date, inclusive. Format is YYYY-MM-DD
     * @param {module:api/PaymentAuditServiceDeprecatedApi~exportTransactionsCSVV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayorAmlTransactionV3}
     */
    exportTransactionsCSVV3(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'payorId': opts['payorId'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/csv', 'application/json'];
      let returnType = PayorAmlTransactionV3;
      return this.apiClient.callApi(
        '/v3/paymentaudit/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFundingsV1 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~getFundingsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFundingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V1 Get Fundings for Payor
     * Deprecated (use /v4/paymentaudit/fundings)
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 25)] The number of results to return in a page
     * @param {String} [sort] List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc``` Default is no sort. The supported sort fields are: dateTime and amount. 
     * @param {module:api/PaymentAuditServiceDeprecatedApi~getFundingsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFundingsResponse}
     */
    getFundingsV1(payorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getFundingsV1");
      }

      let pathParams = {
      };
      let queryParams = {
        'payorId': payorId,
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetFundingsResponse;
      return this.apiClient.callApi(
        '/v1/paymentaudit/fundings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentDetailsV3 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~getPaymentDetailsV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V3 Get Payment
     * Deprecated (use /v4/paymentaudit/payments/<paymentId> instead)
     * @param {String} paymentId Payment Id
     * @param {Object} opts Optional parameters
     * @param {Boolean} [sensitive] Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceDeprecatedApi~getPaymentDetailsV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentResponseV3}
     */
    getPaymentDetailsV3(paymentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling getPaymentDetailsV3");
      }

      let pathParams = {
        'paymentId': paymentId
      };
      let queryParams = {
        'sensitive': opts['sensitive']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaymentResponseV3;
      return this.apiClient.callApi(
        '/v3/paymentaudit/payments/{paymentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentsForPayoutPAV3 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~getPaymentsForPayoutPAV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPaymentsForPayoutResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V3 Get Payments for Payout
     * Deprecated (use /v4/paymentaudit/payouts/<payoutId> instead)
     * @param {String} payoutId The id (UUID) of the payout.
     * @param {Object} opts Optional parameters
     * @param {String} [remoteId] The remote id of the payees.
     * @param {module:model/String} [status] Payment Status
     * @param {Number} [sourceAmountFrom] The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
     * @param {Number} [sourceAmountTo] The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
     * @param {Number} [paymentAmountFrom] The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
     * @param {Number} [paymentAmountTo] The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
     * @param {Date} [submittedDateFrom] The submitted date from range filter. Format is yyyy-MM-dd.
     * @param {Date} [submittedDateTo] The submitted date to range filter. Format is yyyy-MM-dd.
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 25)] The number of results to return in a page
     * @param {String} [sort] <p>List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId</p> <p>The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status</p> 
     * @param {Boolean} [sensitive] Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceDeprecatedApi~getPaymentsForPayoutPAV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPaymentsForPayoutResponseV3}
     */
    getPaymentsForPayoutPAV3(payoutId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling getPaymentsForPayoutPAV3");
      }

      let pathParams = {
        'payoutId': payoutId
      };
      let queryParams = {
        'remoteId': opts['remoteId'],
        'status': opts['status'],
        'sourceAmountFrom': opts['sourceAmountFrom'],
        'sourceAmountTo': opts['sourceAmountTo'],
        'paymentAmountFrom': opts['paymentAmountFrom'],
        'paymentAmountTo': opts['paymentAmountTo'],
        'submittedDateFrom': opts['submittedDateFrom'],
        'submittedDateTo': opts['submittedDateTo'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort'],
        'sensitive': opts['sensitive']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetPaymentsForPayoutResponseV3;
      return this.apiClient.callApi(
        '/v3/paymentaudit/payouts/{payoutId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayoutStatsV1 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~getPayoutStatsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPayoutStatistics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V1 Get Payout Statistics
     * Deprecated (Use /v4/paymentaudit/payoutStatistics)
     * @param {Object} opts Optional parameters
     * @param {String} [payorId] The account owner Payor ID. Required for external users.
     * @param {module:api/PaymentAuditServiceDeprecatedApi~getPayoutStatsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPayoutStatistics}
     */
    getPayoutStatsV1(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'payorId': opts['payorId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetPayoutStatistics;
      return this.apiClient.callApi(
        '/v1/paymentaudit/payoutStatistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayoutsForPayorV3 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~getPayoutsForPayorV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPayoutsResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V3 Get Payouts for Payor
     * Deprecated (use /v4/paymentaudit/payouts instead)
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {String} [payoutMemo] Payout Memo filter - case insensitive sub-string match
     * @param {module:model/String} [status] Payout Status
     * @param {Date} [submittedDateFrom] The submitted date from range filter. Format is yyyy-MM-dd.
     * @param {Date} [submittedDateTo] The submitted date to range filter. Format is yyyy-MM-dd.
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 25)] The number of results to return in a page
     * @param {String} [sort] List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc) Default is submittedDateTime:asc The supported sort fields are: submittedDateTime, instructedDateTime, status. 
     * @param {module:api/PaymentAuditServiceDeprecatedApi~getPayoutsForPayorV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPayoutsResponseV3}
     */
    getPayoutsForPayorV3(payorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getPayoutsForPayorV3");
      }

      let pathParams = {
      };
      let queryParams = {
        'payorId': payorId,
        'payoutMemo': opts['payoutMemo'],
        'status': opts['status'],
        'submittedDateFrom': opts['submittedDateFrom'],
        'submittedDateTo': opts['submittedDateTo'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetPayoutsResponseV3;
      return this.apiClient.callApi(
        '/v3/paymentaudit/payouts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPaymentChanges operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~listPaymentChangesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentDeltaResponseV1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V1 List Payment Changes
     * Deprecated (use /v4/payments/deltas instead)
     * @param {String} payorId The Payor ID to find associated Payments
     * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 100)] The number of results to return in a page
     * @param {module:api/PaymentAuditServiceDeprecatedApi~listPaymentChangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentDeltaResponseV1}
     */
    listPaymentChanges(payorId, updatedSince, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPaymentChanges");
      }
      // verify the required parameter 'updatedSince' is set
      if (updatedSince === undefined || updatedSince === null) {
        throw new Error("Missing the required parameter 'updatedSince' when calling listPaymentChanges");
      }

      let pathParams = {
      };
      let queryParams = {
        'payorId': payorId,
        'updatedSince': updatedSince,
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaymentDeltaResponseV1;
      return this.apiClient.callApi(
        '/v1/deltas/payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPaymentsAuditV3 operation.
     * @callback module:api/PaymentAuditServiceDeprecatedApi~listPaymentsAuditV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ListPaymentsResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * V3 Get List of Payments
     * Deprecated (use /v4/paymentaudit/payments instead)
     * @param {Object} opts Optional parameters
     * @param {String} [payeeId] The UUID of the payee.
     * @param {String} [payorId] The account owner Payor Id. Required for external users.
     * @param {String} [payorName] The payor’s name. This filters via a case insensitive substring match.
     * @param {String} [remoteId] The remote id of the payees.
     * @param {module:model/String} [status] Payment Status
     * @param {String} [sourceAccountName] The source account name filter. This filters via a case insensitive substring match.
     * @param {Number} [sourceAmountFrom] The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
     * @param {Number} [sourceAmountTo] The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
     * @param {String} [sourceCurrency] The source currency filter. Filters based on an exact match on the currency.
     * @param {Number} [paymentAmountFrom] The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
     * @param {Number} [paymentAmountTo] The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
     * @param {String} [paymentCurrency] The payment currency filter. Filters based on an exact match on the currency.
     * @param {Date} [submittedDateFrom] The submitted date from range filter. Format is yyyy-MM-dd.
     * @param {Date} [submittedDateTo] The submitted date to range filter. Format is yyyy-MM-dd.
     * @param {String} [paymentMemo] The payment memo filter. This filters via a case insensitive substring match.
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 25)] The number of results to return in a page
     * @param {String} [sort] List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status 
     * @param {Boolean} [sensitive] Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceDeprecatedApi~listPaymentsAuditV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListPaymentsResponseV3}
     */
    listPaymentsAuditV3(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'payeeId': opts['payeeId'],
        'payorId': opts['payorId'],
        'payorName': opts['payorName'],
        'remoteId': opts['remoteId'],
        'status': opts['status'],
        'sourceAccountName': opts['sourceAccountName'],
        'sourceAmountFrom': opts['sourceAmountFrom'],
        'sourceAmountTo': opts['sourceAmountTo'],
        'sourceCurrency': opts['sourceCurrency'],
        'paymentAmountFrom': opts['paymentAmountFrom'],
        'paymentAmountTo': opts['paymentAmountTo'],
        'paymentCurrency': opts['paymentCurrency'],
        'submittedDateFrom': opts['submittedDateFrom'],
        'submittedDateTo': opts['submittedDateTo'],
        'paymentMemo': opts['paymentMemo'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sort': opts['sort'],
        'sensitive': opts['sensitive']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListPaymentsResponseV3;
      return this.apiClient.callApi(
        '/v3/paymentaudit/payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
