/**
 * Velo Payments APIs
 * ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  ```   curl -X POST \\   -H \"Content-Type: application/json\" \\   -H \"Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==\" \\   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials' ```  If successful, this call will result in a **200** HTTP status code and a response body such as:  ```   {     \"access_token\":\"19f6bafd-93fd-4747-b229-00507bbc991f\",     \"token_type\":\"bearer\",     \"expires_in\":1799,     \"scope\":\"...\"   } ``` ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  ```   -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \" ```  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response. 
 *
 * The version of the OpenAPI document: 2.26.124
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GetFundingsResponse from '../model/GetFundingsResponse';
import GetPaymentsForPayoutResponseV4 from '../model/GetPaymentsForPayoutResponseV4';
import GetPayoutStatistics from '../model/GetPayoutStatistics';
import GetPayoutsResponse from '../model/GetPayoutsResponse';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse401 from '../model/InlineResponse401';
import InlineResponse403 from '../model/InlineResponse403';
import InlineResponse404 from '../model/InlineResponse404';
import ListPaymentsResponseV4 from '../model/ListPaymentsResponseV4';
import PaymentDeltaResponse from '../model/PaymentDeltaResponse';
import PaymentResponseV4 from '../model/PaymentResponseV4';
import PayorAmlTransaction from '../model/PayorAmlTransaction';

/**
* PaymentAuditService service.
* @module api/PaymentAuditServiceApi
* @version 2.26.124
*/
export default class PaymentAuditServiceApi {

    /**
    * Constructs a new PaymentAuditServiceApi. 
    * @alias module:api/PaymentAuditServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the exportTransactionsCSVV4 operation.
     * @callback module:api/PaymentAuditServiceApi~exportTransactionsCSVV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayorAmlTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export Transactions
     * Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.
     * @param {Object} opts Optional parameters
     * @param {String} opts.payorId <p>The Payor ID for whom you wish to run the report.</p> <p>For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.</p> 
     * @param {Date} opts.startDate Start date, inclusive. Format is YYYY-MM-DD
     * @param {Date} opts.endDate End date, inclusive. Format is YYYY-MM-DD
     * @param {module:model/String} opts.include <p>Mode to determine whether to include other Payor's data in the results.</p> <p>May only be used if payorId is specified.</p> <p>Can be omitted or set to 'payorOnly' or 'payorAndDescendants'.</p> <p>payorOnly: Only include results for the specified Payor. This is the default if 'include' is omitted.</p> <p>payorAndDescendants: Aggregate results for all descendant Payors of the specified Payor. Should only be used if the Payor with the specified payorId has at least one child Payor.</p> <p>Note when a Payor requests the report and include=payorAndDescendants is used, the following additional columns are included in the CSV: Payor Name, Payor Id</p> 
     * @param {module:api/PaymentAuditServiceApi~exportTransactionsCSVV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayorAmlTransaction}
     */
    exportTransactionsCSVV4(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'payorId': opts['payorId'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/csv'];
      let returnType = PayorAmlTransaction;
      return this.apiClient.callApi(
        '/v4/paymentaudit/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFundingsV4 operation.
     * @callback module:api/PaymentAuditServiceApi~getFundingsV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFundingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Fundings for Payor
     * <p>Get a list of Fundings for a payor.</p> 
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc``` Default is no sort. The supported sort fields are: dateTime and amount. 
     * @param {module:api/PaymentAuditServiceApi~getFundingsV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFundingsResponse}
     */
    getFundingsV4(payorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getFundingsV4");
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
        '/v4/paymentaudit/fundings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentDetailsV4 operation.
     * @callback module:api/PaymentAuditServiceApi~getPaymentDetailsV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentResponseV4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payment
     * Get the payment with the given id. This contains the payment history. 
     * @param {String} paymentId Payment Id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceApi~getPaymentDetailsV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentResponseV4}
     */
    getPaymentDetailsV4(paymentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling getPaymentDetailsV4");
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
      let returnType = PaymentResponseV4;
      return this.apiClient.callApi(
        '/v4/paymentaudit/payments/{paymentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentsForPayoutV4 operation.
     * @callback module:api/PaymentAuditServiceApi~getPaymentsForPayoutV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPaymentsForPayoutResponseV4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payments for Payout
     * Get List of payments for Payout, allowing for RETURNED status 
     * @param {String} payoutId The id (UUID) of the payout.
     * @param {Object} opts Optional parameters
     * @param {String} opts.remoteId The remote id of the payees.
     * @param {String} opts.remoteSystemId The id of the remote system that is orchestrating payments
     * @param {module:model/String} opts.status Payment Status
     * @param {Number} opts.sourceAmountFrom The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
     * @param {Number} opts.sourceAmountTo The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
     * @param {Number} opts.paymentAmountFrom The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
     * @param {Number} opts.paymentAmountTo The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
     * @param {Date} opts.submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
     * @param {Date} opts.submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
     * @param {module:model/String} opts.transmissionType Transmission Type * ACH * SAME_DAY_ACH * WIRE 
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status 
     * @param {Boolean} opts.sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceApi~getPaymentsForPayoutV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPaymentsForPayoutResponseV4}
     */
    getPaymentsForPayoutV4(payoutId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling getPaymentsForPayoutV4");
      }

      let pathParams = {
        'payoutId': payoutId
      };
      let queryParams = {
        'remoteId': opts['remoteId'],
        'remoteSystemId': opts['remoteSystemId'],
        'status': opts['status'],
        'sourceAmountFrom': opts['sourceAmountFrom'],
        'sourceAmountTo': opts['sourceAmountTo'],
        'paymentAmountFrom': opts['paymentAmountFrom'],
        'paymentAmountTo': opts['paymentAmountTo'],
        'submittedDateFrom': opts['submittedDateFrom'],
        'submittedDateTo': opts['submittedDateTo'],
        'transmissionType': opts['transmissionType'],
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
      let returnType = GetPaymentsForPayoutResponseV4;
      return this.apiClient.callApi(
        '/v4/paymentaudit/payouts/{payoutId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayoutStatsV4 operation.
     * @callback module:api/PaymentAuditServiceApi~getPayoutStatsV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPayoutStatistics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payout Statistics
     * <p>Get payout statistics for a payor.</p> 
     * @param {Object} opts Optional parameters
     * @param {String} opts.payorId The account owner Payor ID. Required for external users.
     * @param {module:api/PaymentAuditServiceApi~getPayoutStatsV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPayoutStatistics}
     */
    getPayoutStatsV4(opts, callback) {
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
        '/v4/paymentaudit/payoutStatistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayoutsForPayorV4 operation.
     * @callback module:api/PaymentAuditServiceApi~getPayoutsForPayorV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPayoutsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payouts for Payor
     * Get List of payouts for payor 
     * @param {Object} opts Optional parameters
     * @param {String} opts.payorId The id (UUID) of the payor funding the payout or the payor whose payees are being paid.
     * @param {String} opts.payoutMemo Payout Memo filter - case insensitive sub-string match
     * @param {module:model/String} opts.status Payout Status
     * @param {Date} opts.submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
     * @param {Date} opts.submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
     * @param {String} opts.fromPayorName The name of the payor whose payees are being paid. This filters via a case insensitive substring match.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc) Default is submittedDateTime:asc The supported sort fields are: submittedDateTime, instructedDateTime, status, totalPayments, payoutId 
     * @param {module:api/PaymentAuditServiceApi~getPayoutsForPayorV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPayoutsResponse}
     */
    getPayoutsForPayorV4(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'payorId': opts['payorId'],
        'payoutMemo': opts['payoutMemo'],
        'status': opts['status'],
        'submittedDateFrom': opts['submittedDateFrom'],
        'submittedDateTo': opts['submittedDateTo'],
        'fromPayorName': opts['fromPayorName'],
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
      let returnType = GetPayoutsResponse;
      return this.apiClient.callApi(
        '/v4/paymentaudit/payouts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPaymentChangesV4 operation.
     * @callback module:api/PaymentAuditServiceApi~listPaymentChangesV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentDeltaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payment Changes
     * Get a paginated response listing payment changes.
     * @param {String} payorId The Payor ID to find associated Payments
     * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 100)
     * @param {module:api/PaymentAuditServiceApi~listPaymentChangesV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentDeltaResponse}
     */
    listPaymentChangesV4(payorId, updatedSince, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPaymentChangesV4");
      }
      // verify the required parameter 'updatedSince' is set
      if (updatedSince === undefined || updatedSince === null) {
        throw new Error("Missing the required parameter 'updatedSince' when calling listPaymentChangesV4");
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
      let returnType = PaymentDeltaResponse;
      return this.apiClient.callApi(
        '/v4/payments/deltas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPaymentsAuditV4 operation.
     * @callback module:api/PaymentAuditServiceApi~listPaymentsAuditV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ListPaymentsResponseV4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get List of Payments
     * Get payments for the given payor Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.payeeId The UUID of the payee.
     * @param {String} opts.payorId The account owner Payor Id. Required for external users.
     * @param {String} opts.payorName The payor’s name. This filters via a case insensitive substring match.
     * @param {String} opts.remoteId The remote id of the payees.
     * @param {String} opts.remoteSystemId The id of the remote system that is orchestrating payments
     * @param {module:model/String} opts.status Payment Status
     * @param {module:model/String} opts.transmissionType Transmission Type * ACH * SAME_DAY_ACH * WIRE 
     * @param {String} opts.sourceAccountName The source account name filter. This filters via a case insensitive substring match.
     * @param {Number} opts.sourceAmountFrom The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
     * @param {Number} opts.sourceAmountTo The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
     * @param {String} opts.sourceCurrency The source currency filter. Filters based on an exact match on the currency.
     * @param {Number} opts.paymentAmountFrom The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
     * @param {Number} opts.paymentAmountTo The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
     * @param {String} opts.paymentCurrency The payment currency filter. Filters based on an exact match on the currency.
     * @param {Date} opts.submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
     * @param {Date} opts.submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
     * @param {String} opts.paymentMemo The payment memo filter. This filters via a case insensitive substring match.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize The number of results to return in a page (default to 25)
     * @param {String} opts.sort List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by submittedDateTime:desc,paymentId:asc The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime, status and paymentId 
     * @param {Boolean} opts.sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PaymentAuditServiceApi~listPaymentsAuditV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListPaymentsResponseV4}
     */
    listPaymentsAuditV4(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'payeeId': opts['payeeId'],
        'payorId': opts['payorId'],
        'payorName': opts['payorName'],
        'remoteId': opts['remoteId'],
        'remoteSystemId': opts['remoteSystemId'],
        'status': opts['status'],
        'transmissionType': opts['transmissionType'],
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
      let returnType = ListPaymentsResponseV4;
      return this.apiClient.callApi(
        '/v4/paymentaudit/payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
