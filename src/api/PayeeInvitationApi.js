/**
 * Velo Payments APIs
 * ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  ```   curl -X POST \\   -H \"Content-Type: application/json\" \\   -H \"Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==\" \\   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials' ```  If successful, this call will result in a **200** HTTP status code and a response body such as:  ```   {     \"access_token\":\"19f6bafd-93fd-4747-b229-00507bbc991f\",     \"token_type\":\"bearer\",     \"expires_in\":1799,     \"scope\":\"...\"   } ``` ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  ```   -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \" ```  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response. 
 *
 * The version of the OpenAPI document: 2.20.118
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreatePayeesCSVResponse from '../model/CreatePayeesCSVResponse';
import CreatePayeesCSVResponse2 from '../model/CreatePayeesCSVResponse2';
import CreatePayeesRequest from '../model/CreatePayeesRequest';
import CreatePayeesRequest2 from '../model/CreatePayeesRequest2';
import ErrorResponse from '../model/ErrorResponse';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse401 from '../model/InlineResponse401';
import InlineResponse403 from '../model/InlineResponse403';
import InlineResponse409 from '../model/InlineResponse409';
import InvitationStatus from '../model/InvitationStatus';
import InvitationStatusResponse from '../model/InvitationStatusResponse';
import InvitePayeeRequest from '../model/InvitePayeeRequest';
import InvitePayeeRequest2 from '../model/InvitePayeeRequest2';
import PagedPayeeInvitationStatusResponse from '../model/PagedPayeeInvitationStatusResponse';
import PagedPayeeInvitationStatusResponse2 from '../model/PagedPayeeInvitationStatusResponse2';
import QueryBatchResponse from '../model/QueryBatchResponse';
import QueryBatchResponse2 from '../model/QueryBatchResponse2';

/**
* PayeeInvitation service.
* @module api/PayeeInvitationApi
* @version 2.20.118
*/
export default class PayeeInvitationApi {

    /**
    * Constructs a new PayeeInvitationApi. 
    * @alias module:api/PayeeInvitationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getPayeesInvitationStatusV1 operation.
     * @callback module:api/PayeeInvitationApi~getPayeesInvitationStatusV1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/InvitationStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payee Invitation Status
     * <p>Returns a list of payees associated with a payor, along with invitation status and grace period end date.</p> <p>Please use V3 instead</p> 
     * @param {String} payorId The account owner Payor ID
     * @param {module:api/PayeeInvitationApi~getPayeesInvitationStatusV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvitationStatusResponse}
     */
    getPayeesInvitationStatusV1(payorId, callback) {
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getPayeesInvitationStatusV1");
      }

      let pathParams = {
        'payorId': payorId
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
      let returnType = InvitationStatusResponse;
      return this.apiClient.callApi(
        '/v1/payees/payors/{payorId}/invitationStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayeesInvitationStatusV2 operation.
     * @callback module:api/PayeeInvitationApi~getPayeesInvitationStatusV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedPayeeInvitationStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payee Invitation Status
     * <p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p> <p>Please use V3 instead</p> 
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.payeeId The UUID of the payee.
     * @param {module:model/InvitationStatus} opts.invitationStatus The invitation status of the payees.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize Page size. Default is 25. Max allowable is 100. (default to 25)
     * @param {module:api/PayeeInvitationApi~getPayeesInvitationStatusV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedPayeeInvitationStatusResponse}
     */
    getPayeesInvitationStatusV2(payorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getPayeesInvitationStatusV2");
      }

      let pathParams = {
        'payorId': payorId
      };
      let queryParams = {
        'payeeId': opts['payeeId'],
        'invitationStatus': opts['invitationStatus'],
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
      let returnType = PagedPayeeInvitationStatusResponse;
      return this.apiClient.callApi(
        '/v2/payees/payors/{payorId}/invitationStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayeesInvitationStatusV3 operation.
     * @callback module:api/PayeeInvitationApi~getPayeesInvitationStatusV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedPayeeInvitationStatusResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payee Invitation Status
     * Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date. 
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.payeeId The UUID of the payee.
     * @param {module:model/InvitationStatus} opts.invitationStatus The invitation status of the payees.
     * @param {Number} opts.page Page number. Default is 1. (default to 1)
     * @param {Number} opts.pageSize Page size. Default is 25. Max allowable is 100. (default to 25)
     * @param {module:api/PayeeInvitationApi~getPayeesInvitationStatusV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedPayeeInvitationStatusResponse2}
     */
    getPayeesInvitationStatusV3(payorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getPayeesInvitationStatusV3");
      }

      let pathParams = {
        'payorId': payorId
      };
      let queryParams = {
        'payeeId': opts['payeeId'],
        'invitationStatus': opts['invitationStatus'],
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
      let returnType = PagedPayeeInvitationStatusResponse2;
      return this.apiClient.callApi(
        '/v3/payees/payors/{payorId}/invitationStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the queryBatchStatusV2 operation.
     * @callback module:api/PayeeInvitationApi~queryBatchStatusV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/QueryBatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Batch Status
     * <p>Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).</p> <p>Please use V3 instead</p> 
     * @param {String} batchId Batch Id
     * @param {module:api/PayeeInvitationApi~queryBatchStatusV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QueryBatchResponse}
     */
    queryBatchStatusV2(batchId, callback) {
      let postBody = null;
      // verify the required parameter 'batchId' is set
      if (batchId === undefined || batchId === null) {
        throw new Error("Missing the required parameter 'batchId' when calling queryBatchStatusV2");
      }

      let pathParams = {
        'batchId': batchId
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
      let returnType = QueryBatchResponse;
      return this.apiClient.callApi(
        '/v2/payees/batch/{batchId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the queryBatchStatusV3 operation.
     * @callback module:api/PayeeInvitationApi~queryBatchStatusV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/QueryBatchResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Batch Status
     * Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ). 
     * @param {String} batchId Batch Id
     * @param {module:api/PayeeInvitationApi~queryBatchStatusV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QueryBatchResponse2}
     */
    queryBatchStatusV3(batchId, callback) {
      let postBody = null;
      // verify the required parameter 'batchId' is set
      if (batchId === undefined || batchId === null) {
        throw new Error("Missing the required parameter 'batchId' when calling queryBatchStatusV3");
      }

      let pathParams = {
        'batchId': batchId
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
      let returnType = QueryBatchResponse2;
      return this.apiClient.callApi(
        '/v3/payees/batch/{batchId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resendPayeeInviteV1 operation.
     * @callback module:api/PayeeInvitationApi~resendPayeeInviteV1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend Payee Invite
     * <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p> <p>Any previous invites to the payee by this Payor will be invalidated</p> <p>Deprecated. Please use v3 instead</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/InvitePayeeRequest} invitePayeeRequest Provide Payor Id in body of request
     * @param {module:api/PayeeInvitationApi~resendPayeeInviteV1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    resendPayeeInviteV1(payeeId, invitePayeeRequest, callback) {
      let postBody = invitePayeeRequest;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling resendPayeeInviteV1");
      }
      // verify the required parameter 'invitePayeeRequest' is set
      if (invitePayeeRequest === undefined || invitePayeeRequest === null) {
        throw new Error("Missing the required parameter 'invitePayeeRequest' when calling resendPayeeInviteV1");
      }

      let pathParams = {
        'payeeId': payeeId
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
        '/v1/payees/{payeeId}/invite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resendPayeeInviteV3 operation.
     * @callback module:api/PayeeInvitationApi~resendPayeeInviteV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend Payee Invite
     * <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p> <p>Any previous invites to the payee by this Payor will be invalidated</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/InvitePayeeRequest2} invitePayeeRequest2 Provide Payor Id in body of request
     * @param {module:api/PayeeInvitationApi~resendPayeeInviteV3Callback} callback The callback function, accepting three arguments: error, data, response
     */
    resendPayeeInviteV3(payeeId, invitePayeeRequest2, callback) {
      let postBody = invitePayeeRequest2;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling resendPayeeInviteV3");
      }
      // verify the required parameter 'invitePayeeRequest2' is set
      if (invitePayeeRequest2 === undefined || invitePayeeRequest2 === null) {
        throw new Error("Missing the required parameter 'invitePayeeRequest2' when calling resendPayeeInviteV3");
      }

      let pathParams = {
        'payeeId': payeeId
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
        '/v3/payees/{payeeId}/invite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v2CreatePayee operation.
     * @callback module:api/PayeeInvitationApi~v2CreatePayeeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatePayeesCSVResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate Payee Creation
     * Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query for status (201 - Created, 400 - invalid request body, 409 - if there is a duplicate remote id within the batch / if there is a duplicate email within the batch). 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePayeesRequest} opts.createPayeesRequest Post payees to create.
     * @param {module:api/PayeeInvitationApi~v2CreatePayeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatePayeesCSVResponse}
     */
    v2CreatePayee(opts, callback) {
      opts = opts || {};
      let postBody = opts['createPayeesRequest'];

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
      let returnType = CreatePayeesCSVResponse;
      return this.apiClient.callApi(
        '/v2/payees', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v3CreatePayee operation.
     * @callback module:api/PayeeInvitationApi~v3CreatePayeeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatePayeesCSVResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate Payee Creation
     * Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query for status (201 - Created, 400 - invalid request body, 409 - if there is a duplicate remote id within the batch / if there is a duplicate email within the batch). 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePayeesRequest2} opts.createPayeesRequest2 Post payees to create.
     * @param {module:api/PayeeInvitationApi~v3CreatePayeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatePayeesCSVResponse2}
     */
    v3CreatePayee(opts, callback) {
      opts = opts || {};
      let postBody = opts['createPayeesRequest2'];

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
      let returnType = CreatePayeesCSVResponse2;
      return this.apiClient.callApi(
        '/v3/payees', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
