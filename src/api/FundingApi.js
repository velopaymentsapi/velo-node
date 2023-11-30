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
import FundingAccountResponseV2 from '../model/FundingAccountResponseV2';
import FundingRequestV2 from '../model/FundingRequestV2';
import FundingRequestV3 from '../model/FundingRequestV3';
import FundingResponse from '../model/FundingResponse';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse401 from '../model/InlineResponse401';
import InlineResponse403 from '../model/InlineResponse403';
import InlineResponse404 from '../model/InlineResponse404';
import ListFundingAccountsResponseV2 from '../model/ListFundingAccountsResponseV2';
import PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse from '../model/PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse';

/**
* Funding service.
* @module api/FundingApi
* @version 2.37.150-beta.1
*/
export default class FundingApi {

    /**
    * Constructs a new FundingApi. 
    * @alias module:api/FundingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createFundingRequestV2 operation.
     * @callback module:api/FundingApi~createFundingRequestV2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Funding Request
     * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).
     * @param {String} sourceAccountId Source account id
     * @param {module:model/FundingRequestV2} fundingRequestV2 Body to included amount to be funded
     * @param {module:api/FundingApi~createFundingRequestV2Callback} callback The callback function, accepting three arguments: error, data, response
     */
    createFundingRequestV2(sourceAccountId, fundingRequestV2, callback) {
      let postBody = fundingRequestV2;
      // verify the required parameter 'sourceAccountId' is set
      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling createFundingRequestV2");
      }
      // verify the required parameter 'fundingRequestV2' is set
      if (fundingRequestV2 === undefined || fundingRequestV2 === null) {
        throw new Error("Missing the required parameter 'fundingRequestV2' when calling createFundingRequestV2");
      }

      let pathParams = {
        'sourceAccountId': sourceAccountId
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
        '/v2/sourceAccounts/{sourceAccountId}/fundingRequest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createFundingRequestV3 operation.
     * @callback module:api/FundingApi~createFundingRequestV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Funding Request
     * <p>Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo</p> 
     * @param {String} sourceAccountId Source account id
     * @param {module:model/FundingRequestV3} fundingRequestV3 Body to included amount to be funded
     * @param {module:api/FundingApi~createFundingRequestV3Callback} callback The callback function, accepting three arguments: error, data, response
     */
    createFundingRequestV3(sourceAccountId, fundingRequestV3, callback) {
      let postBody = fundingRequestV3;
      // verify the required parameter 'sourceAccountId' is set
      if (sourceAccountId === undefined || sourceAccountId === null) {
        throw new Error("Missing the required parameter 'sourceAccountId' when calling createFundingRequestV3");
      }
      // verify the required parameter 'fundingRequestV3' is set
      if (fundingRequestV3 === undefined || fundingRequestV3 === null) {
        throw new Error("Missing the required parameter 'fundingRequestV3' when calling createFundingRequestV3");
      }

      let pathParams = {
        'sourceAccountId': sourceAccountId
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
        '/v3/sourceAccounts/{sourceAccountId}/fundingRequest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFundingAccountV2 operation.
     * @callback module:api/FundingApi~getFundingAccountV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/FundingAccountResponseV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Funding Account
     * Get Funding Account by ID
     * @param {String} fundingAccountId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [sensitive = false)] 
     * @param {module:api/FundingApi~getFundingAccountV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FundingAccountResponseV2}
     */
    getFundingAccountV2(fundingAccountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fundingAccountId' is set
      if (fundingAccountId === undefined || fundingAccountId === null) {
        throw new Error("Missing the required parameter 'fundingAccountId' when calling getFundingAccountV2");
      }

      let pathParams = {
        'fundingAccountId': fundingAccountId
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
      let returnType = FundingAccountResponseV2;
      return this.apiClient.callApi(
        '/v2/fundingAccounts/{fundingAccountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFundingAccountsV2 operation.
     * @callback module:api/FundingApi~getFundingAccountsV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ListFundingAccountsResponseV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Funding Accounts
     * Get the funding accounts.
     * @param {Object} opts Optional parameters
     * @param {String} [payorId] 
     * @param {String} [name] The descriptive funding account name
     * @param {String} [countryCode] The 2 letter ISO 3166-1 country code (upper case)
     * @param {String} [currency] The ISO 4217 currency code
     * @param {String} [type] The type of funding account.
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 25)] The number of results to return in a page
     * @param {String} [sort = 'accountName:asc')] List of sort fields (e.g. ?sort=accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name.
     * @param {Boolean} [sensitive = false)] 
     * @param {module:api/FundingApi~getFundingAccountsV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListFundingAccountsResponseV2}
     */
    getFundingAccountsV2(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'payorId': opts['payorId'],
        'name': opts['name'],
        'countryCode': opts['countryCode'],
        'currency': opts['currency'],
        'type': opts['type'],
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
      let returnType = ListFundingAccountsResponseV2;
      return this.apiClient.callApi(
        '/v2/fundingAccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFundingByIdV1 operation.
     * @callback module:api/FundingApi~getFundingByIdV1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/FundingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Funding
     * Get Funding by Id
     * @param {String} fundingId 
     * @param {module:api/FundingApi~getFundingByIdV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FundingResponse}
     */
    getFundingByIdV1(fundingId, callback) {
      let postBody = null;
      // verify the required parameter 'fundingId' is set
      if (fundingId === undefined || fundingId === null) {
        throw new Error("Missing the required parameter 'fundingId' when calling getFundingByIdV1");
      }

      let pathParams = {
        'fundingId': fundingId
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
      let returnType = FundingResponse;
      return this.apiClient.callApi(
        '/v1/fundings/{fundingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listFundingAuditDeltas operation.
     * @callback module:api/FundingApi~listFundingAuditDeltasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Funding Audit Delta
     * Get funding audit deltas for a payor
     * @param {String} payorId 
     * @param {Date} updatedSince 
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 25)] The number of results to return in a page
     * @param {module:api/FundingApi~listFundingAuditDeltasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse}
     */
    listFundingAuditDeltas(payorId, updatedSince, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listFundingAuditDeltas");
      }
      // verify the required parameter 'updatedSince' is set
      if (updatedSince === undefined || updatedSince === null) {
        throw new Error("Missing the required parameter 'updatedSince' when calling listFundingAuditDeltas");
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
      let returnType = PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse;
      return this.apiClient.callApi(
        '/v1/deltas/fundings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}