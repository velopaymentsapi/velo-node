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
import CreatePayoutRequestV3 from '../model/CreatePayoutRequestV3';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse401 from '../model/InlineResponse401';
import InlineResponse403 from '../model/InlineResponse403';
import InlineResponse404 from '../model/InlineResponse404';
import InlineResponse409 from '../model/InlineResponse409';
import InstructPayoutRequestV3 from '../model/InstructPayoutRequestV3';
import PagedPaymentsResponseV3 from '../model/PagedPaymentsResponseV3';
import PayoutSummaryResponseV3 from '../model/PayoutSummaryResponseV3';
import QuoteResponseV3 from '../model/QuoteResponseV3';
import SchedulePayoutRequestV3 from '../model/SchedulePayoutRequestV3';
import SubmitPayoutV3Request from '../model/SubmitPayoutV3Request';
import WithdrawPaymentRequest from '../model/WithdrawPaymentRequest';

/**
* Payouts service.
* @module api/PayoutsApi
* @version 2.37.150-beta.1
*/
export default class PayoutsApi {

    /**
    * Constructs a new PayoutsApi. 
    * @alias module:api/PayoutsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createQuoteForPayoutV3 operation.
     * @callback module:api/PayoutsApi~createQuoteForPayoutV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/QuoteResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a quote for the payout
     * Create quote for a payout
     * @param {String} payoutId Id of the payout
     * @param {module:api/PayoutsApi~createQuoteForPayoutV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuoteResponseV3}
     */
    createQuoteForPayoutV3(payoutId, callback) {
      let postBody = null;
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling createQuoteForPayoutV3");
      }

      let pathParams = {
        'payoutId': payoutId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = QuoteResponseV3;
      return this.apiClient.callApi(
        '/v3/payouts/{payoutId}/quote', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deschedulePayout operation.
     * @callback module:api/PayoutsApi~deschedulePayoutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deschedule a payout
     * Remove the schedule for a scheduled payout
     * @param {String} payoutId Id of the payout
     * @param {module:api/PayoutsApi~deschedulePayoutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deschedulePayout(payoutId, callback) {
      let postBody = null;
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling deschedulePayout");
      }

      let pathParams = {
        'payoutId': payoutId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/payouts/{payoutId}/schedule', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentsForPayoutV3 operation.
     * @callback module:api/PayoutsApi~getPaymentsForPayoutV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedPaymentsResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve payments for a payout
     * Retrieve payments for a payout
     * @param {String} payoutId Id of the payout
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [status] Payment Status * ACCEPTED: any payment which was accepted at submission time (status may have changed since) * REJECTED: any payment rejected by initial submission processing * WITHDRAWN: any payment which has been withdrawn * WITHDRAWABLE: any payment eligible for withdrawal 
     * @param {String} [remoteId] The remote id of the payees.
     * @param {String} [payorPaymentId] Payor's Id of the Payment
     * @param {String} [sourceAccountName] Physical Account Name
     * @param {String} [transmissionType] Transmission Type * ACH * SAME_DAY_ACH * WIRE 
     * @param {String} [paymentMemo] Payment Memo of the Payment
     * @param {Number} [pageSize = 25)] The number of results to return in a page
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {module:api/PayoutsApi~getPaymentsForPayoutV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedPaymentsResponseV3}
     */
    getPaymentsForPayoutV3(payoutId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling getPaymentsForPayoutV3");
      }

      let pathParams = {
        'payoutId': payoutId
      };
      let queryParams = {
        'status': opts['status'],
        'remoteId': opts['remoteId'],
        'payorPaymentId': opts['payorPaymentId'],
        'sourceAccountName': opts['sourceAccountName'],
        'transmissionType': opts['transmissionType'],
        'paymentMemo': opts['paymentMemo'],
        'pageSize': opts['pageSize'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PagedPaymentsResponseV3;
      return this.apiClient.callApi(
        '/v3/payouts/{payoutId}/payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayoutSummaryV3 operation.
     * @callback module:api/PayoutsApi~getPayoutSummaryV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayoutSummaryResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payout Summary
     * Get payout summary - returns the current state of the payout.
     * @param {String} payoutId Id of the payout
     * @param {module:api/PayoutsApi~getPayoutSummaryV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayoutSummaryResponseV3}
     */
    getPayoutSummaryV3(payoutId, callback) {
      let postBody = null;
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling getPayoutSummaryV3");
      }

      let pathParams = {
        'payoutId': payoutId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PayoutSummaryResponseV3;
      return this.apiClient.callApi(
        '/v3/payouts/{payoutId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instructPayoutV3 operation.
     * @callback module:api/PayoutsApi~instructPayoutV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Instruct Payout
     * Instruct a payout to be made for the specified payoutId.
     * @param {String} payoutId Id of the payout
     * @param {Object} opts Optional parameters
     * @param {module:model/InstructPayoutRequestV3} [instructPayoutRequestV3] Additional instruct payout parameters
     * @param {module:api/PayoutsApi~instructPayoutV3Callback} callback The callback function, accepting three arguments: error, data, response
     */
    instructPayoutV3(payoutId, opts, callback) {
      opts = opts || {};
      let postBody = opts['instructPayoutRequestV3'];
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling instructPayoutV3");
      }

      let pathParams = {
        'payoutId': payoutId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/payouts/{payoutId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduleForPayout operation.
     * @callback module:api/PayoutsApi~scheduleForPayoutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Schedule a payout
     * <p>Schedule a payout for auto-instruction in the future or update existing payout schedule if the payout has been scheduled before.</p> 
     * @param {String} payoutId Id of the payout
     * @param {Object} opts Optional parameters
     * @param {module:model/SchedulePayoutRequestV3} [schedulePayoutRequestV3] schedule payout parameters
     * @param {module:api/PayoutsApi~scheduleForPayoutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    scheduleForPayout(payoutId, opts, callback) {
      opts = opts || {};
      let postBody = opts['schedulePayoutRequestV3'];
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling scheduleForPayout");
      }

      let pathParams = {
        'payoutId': payoutId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/payouts/{payoutId}/schedule', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitPayoutV3 operation.
     * @callback module:api/PayoutsApi~submitPayoutV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit Payout
     * <p>Create a new payout and return a location header with a link to the payout</p> <p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p> <p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p> <p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p> 
     * @param {module:model/CreatePayoutRequestV3} createPayoutRequestV3 Post amount to transfer using stored funding account details.
     * @param {module:api/PayoutsApi~submitPayoutV3Callback} callback The callback function, accepting three arguments: error, data, response
     */
    submitPayoutV3(createPayoutRequestV3, callback) {
      let postBody = createPayoutRequestV3;
      // verify the required parameter 'createPayoutRequestV3' is set
      if (createPayoutRequestV3 === undefined || createPayoutRequestV3 === null) {
        throw new Error("Missing the required parameter 'createPayoutRequestV3' when calling submitPayoutV3");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/payouts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the withdrawPayment operation.
     * @callback module:api/PayoutsApi~withdrawPaymentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Withdraw a Payment
     * <p>withdraw a payment </p> <p>There are a variety of reasons why this can fail</p> <ul>     <li>the payment must be in a state of 'accepted' or 'unfunded'</li>     <li>the payout must not be in a state of 'instructed'</li> </ul> 
     * @param {String} paymentId Id of the Payment
     * @param {module:model/WithdrawPaymentRequest} withdrawPaymentRequest details for withdrawal
     * @param {module:api/PayoutsApi~withdrawPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    withdrawPayment(paymentId, withdrawPaymentRequest, callback) {
      let postBody = withdrawPaymentRequest;
      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling withdrawPayment");
      }
      // verify the required parameter 'withdrawPaymentRequest' is set
      if (withdrawPaymentRequest === undefined || withdrawPaymentRequest === null) {
        throw new Error("Missing the required parameter 'withdrawPaymentRequest' when calling withdrawPayment");
      }

      let pathParams = {
        'paymentId': paymentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/payments/{paymentId}/withdraw', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the withdrawPayoutV3 operation.
     * @callback module:api/PayoutsApi~withdrawPayoutV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Withdraw Payout
     * Withdraw Payout will remove the payout details from the rails but the payout will still be accessible in payout service in WITHDRAWN status.
     * @param {String} payoutId Id of the payout
     * @param {module:api/PayoutsApi~withdrawPayoutV3Callback} callback The callback function, accepting three arguments: error, data, response
     */
    withdrawPayoutV3(payoutId, callback) {
      let postBody = null;
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling withdrawPayoutV3");
      }

      let pathParams = {
        'payoutId': payoutId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/payouts/{payoutId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}