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
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse401 from '../model/InlineResponse401';
import InlineResponse403 from '../model/InlineResponse403';
import InlineResponse404 from '../model/InlineResponse404';
import InlineResponse409 from '../model/InlineResponse409';
import PagedPayeeResponseV3 from '../model/PagedPayeeResponseV3';
import PagedPayeeResponseV4 from '../model/PagedPayeeResponseV4';
import PayeeDeltaResponseV3 from '../model/PayeeDeltaResponseV3';
import PayeeDeltaResponseV4 from '../model/PayeeDeltaResponseV4';
import PayeeDetailResponseV3 from '../model/PayeeDetailResponseV3';
import PayeeDetailResponseV4 from '../model/PayeeDetailResponseV4';
import UpdatePayeeDetailsRequestV3 from '../model/UpdatePayeeDetailsRequestV3';
import UpdatePayeeDetailsRequestV4 from '../model/UpdatePayeeDetailsRequestV4';
import UpdateRemoteIdRequestV3 from '../model/UpdateRemoteIdRequestV3';
import UpdateRemoteIdRequestV4 from '../model/UpdateRemoteIdRequestV4';

/**
* Payees service.
* @module api/PayeesApi
* @version 2.37.150-beta.1
*/
export default class PayeesApi {

    /**
    * Constructs a new PayeesApi. 
    * @alias module:api/PayeesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deletePayeeByIdV3 operation.
     * @callback module:api/PayeesApi~deletePayeeByIdV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Payee by Id
     * <p>Use v4 instead</p> <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p> <p>* Payee ID is not found</p> <p>* If Payee has not been on-boarded</p> <p>* If Payee is in grace period</p> <p>* If Payee has existing payments</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:api/PayeesApi~deletePayeeByIdV3Callback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePayeeByIdV3(payeeId, callback) {
      let postBody = null;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling deletePayeeByIdV3");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/payees/{payeeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePayeeByIdV4 operation.
     * @callback module:api/PayeesApi~deletePayeeByIdV4Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Payee by Id
     * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p> <p>* Payee ID is not found</p> <p>* If Payee has not been on-boarded</p> <p>* If Payee is in grace period</p> <p>* If Payee has existing payments</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:api/PayeesApi~deletePayeeByIdV4Callback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePayeeByIdV4(payeeId, callback) {
      let postBody = null;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling deletePayeeByIdV4");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v4/payees/{payeeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayeeByIdV3 operation.
     * @callback module:api/PayeesApi~getPayeeByIdV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayeeDetailResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payee by Id
     * <p>Use v4 instead</p> <p>Get Payee by Id</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [sensitive] Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PayeesApi~getPayeeByIdV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayeeDetailResponseV3}
     */
    getPayeeByIdV3(payeeId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling getPayeeByIdV3");
      }

      let pathParams = {
        'payeeId': payeeId
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
      let returnType = PayeeDetailResponseV3;
      return this.apiClient.callApi(
        '/v3/payees/{payeeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayeeByIdV4 operation.
     * @callback module:api/PayeesApi~getPayeeByIdV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayeeDetailResponseV4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payee by Id
     * Get Payee by Id
     * @param {String} payeeId The UUID of the payee.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [sensitive] Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
     * @param {module:api/PayeesApi~getPayeeByIdV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayeeDetailResponseV4}
     */
    getPayeeByIdV4(payeeId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling getPayeeByIdV4");
      }

      let pathParams = {
        'payeeId': payeeId
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
      let returnType = PayeeDetailResponseV4;
      return this.apiClient.callApi(
        '/v4/payees/{payeeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPayeeChangesV3 operation.
     * @callback module:api/PayeesApi~listPayeeChangesV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayeeDeltaResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payee Changes
     * <p>Use v4 instead</p> <p>Get a paginated response listing payee changes.</p> 
     * @param {String} payorId The Payor ID to find associated Payees
     * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 100)] Page size. Default is 100. Max allowable is 1000.
     * @param {module:api/PayeesApi~listPayeeChangesV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayeeDeltaResponseV3}
     */
    listPayeeChangesV3(payorId, updatedSince, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPayeeChangesV3");
      }
      // verify the required parameter 'updatedSince' is set
      if (updatedSince === undefined || updatedSince === null) {
        throw new Error("Missing the required parameter 'updatedSince' when calling listPayeeChangesV3");
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
      let returnType = PayeeDeltaResponseV3;
      return this.apiClient.callApi(
        '/v3/payees/deltas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPayeeChangesV4 operation.
     * @callback module:api/PayeesApi~listPayeeChangesV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayeeDeltaResponseV4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payee Changes
     * Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields: - dbaName - displayName - email - onboardedStatus - payeeCountry - payeeId - remoteId 
     * @param {String} payorId The Payor ID to find associated Payees
     * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 100)] Page size. Default is 100. Max allowable is 1000.
     * @param {module:api/PayeesApi~listPayeeChangesV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayeeDeltaResponseV4}
     */
    listPayeeChangesV4(payorId, updatedSince, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPayeeChangesV4");
      }
      // verify the required parameter 'updatedSince' is set
      if (updatedSince === undefined || updatedSince === null) {
        throw new Error("Missing the required parameter 'updatedSince' when calling listPayeeChangesV4");
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
      let returnType = PayeeDeltaResponseV4;
      return this.apiClient.callApi(
        '/v4/payees/deltas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPayeesV3 operation.
     * @callback module:api/PayeesApi~listPayeesV3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedPayeeResponseV3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payees
     * <p>Use v4 instead</p> Get a paginated response listing the payees for a payor. 
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {String} [watchlistStatus] The watchlistStatus of the payees.
     * @param {Boolean} [disabled] Payee disabled
     * @param {String} [onboardedStatus] The onboarded status of the payees.
     * @param {String} [email] Email address
     * @param {String} [displayName] The display name of the payees.
     * @param {String} [remoteId] The remote id of the payees.
     * @param {String} [payeeType] The onboarded status of the payees.
     * @param {String} [payeeCountry] The country of the payee - 2 letter ISO 3166-1 country code (upper case)
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 25)] Page size. Default is 25. Max allowable is 100.
     * @param {String} [sort = 'displayName:asc')] List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus. 
     * @param {module:api/PayeesApi~listPayeesV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedPayeeResponseV3}
     */
    listPayeesV3(payorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPayeesV3");
      }

      let pathParams = {
      };
      let queryParams = {
        'payorId': payorId,
        'watchlistStatus': opts['watchlistStatus'],
        'disabled': opts['disabled'],
        'onboardedStatus': opts['onboardedStatus'],
        'email': opts['email'],
        'displayName': opts['displayName'],
        'remoteId': opts['remoteId'],
        'payeeType': opts['payeeType'],
        'payeeCountry': opts['payeeCountry'],
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
      let returnType = PagedPayeeResponseV3;
      return this.apiClient.callApi(
        '/v3/payees', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPayeesV4 operation.
     * @callback module:api/PayeesApi~listPayeesV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedPayeeResponseV4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payees
     * Get a paginated response listing the payees for a payor.
     * @param {String} payorId The account owner Payor ID
     * @param {Object} opts Optional parameters
     * @param {String} [watchlistStatus] The watchlistStatus of the payees.
     * @param {Boolean} [disabled] Payee disabled
     * @param {String} [onboardedStatus] The onboarded status of the payees.
     * @param {String} [email] Email address
     * @param {String} [displayName] The display name of the payees.
     * @param {String} [remoteId] The remote id of the payees.
     * @param {String} [payeeType] The onboarded status of the payees.
     * @param {String} [payeeCountry] The country of the payee - 2 letter ISO 3166-1 country code (upper case)
     * @param {String} [ofacStatus] The ofacStatus of the payees.
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 25)] Page size. Default is 25. Max allowable is 100.
     * @param {String} [sort = 'displayName:asc')] List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus. 
     * @param {module:api/PayeesApi~listPayeesV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedPayeeResponseV4}
     */
    listPayeesV4(payorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling listPayeesV4");
      }

      let pathParams = {
      };
      let queryParams = {
        'payorId': payorId,
        'watchlistStatus': opts['watchlistStatus'],
        'disabled': opts['disabled'],
        'onboardedStatus': opts['onboardedStatus'],
        'email': opts['email'],
        'displayName': opts['displayName'],
        'remoteId': opts['remoteId'],
        'payeeType': opts['payeeType'],
        'payeeCountry': opts['payeeCountry'],
        'ofacStatus': opts['ofacStatus'],
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
      let returnType = PagedPayeeResponseV4;
      return this.apiClient.callApi(
        '/v4/payees', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payeeDetailsUpdateV3 operation.
     * @callback module:api/PayeesApi~payeeDetailsUpdateV3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Payee Details
     * <p>Use v4 instead</p> <p>Update payee details for the given Payee Id.<p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/UpdatePayeeDetailsRequestV3} updatePayeeDetailsRequestV3 Request to update payee details
     * @param {module:api/PayeesApi~payeeDetailsUpdateV3Callback} callback The callback function, accepting three arguments: error, data, response
     */
    payeeDetailsUpdateV3(payeeId, updatePayeeDetailsRequestV3, callback) {
      let postBody = updatePayeeDetailsRequestV3;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling payeeDetailsUpdateV3");
      }
      // verify the required parameter 'updatePayeeDetailsRequestV3' is set
      if (updatePayeeDetailsRequestV3 === undefined || updatePayeeDetailsRequestV3 === null) {
        throw new Error("Missing the required parameter 'updatePayeeDetailsRequestV3' when calling payeeDetailsUpdateV3");
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
        '/v3/payees/{payeeId}/payeeDetailsUpdate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payeeDetailsUpdateV4 operation.
     * @callback module:api/PayeesApi~payeeDetailsUpdateV4Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Payee Details
     * <p>Update payee details for the given Payee Id.</p> <p>Payors may only update the payee details if the payee has not yet onboarded</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/UpdatePayeeDetailsRequestV4} updatePayeeDetailsRequestV4 Request to update payee details
     * @param {module:api/PayeesApi~payeeDetailsUpdateV4Callback} callback The callback function, accepting three arguments: error, data, response
     */
    payeeDetailsUpdateV4(payeeId, updatePayeeDetailsRequestV4, callback) {
      let postBody = updatePayeeDetailsRequestV4;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling payeeDetailsUpdateV4");
      }
      // verify the required parameter 'updatePayeeDetailsRequestV4' is set
      if (updatePayeeDetailsRequestV4 === undefined || updatePayeeDetailsRequestV4 === null) {
        throw new Error("Missing the required parameter 'updatePayeeDetailsRequestV4' when calling payeeDetailsUpdateV4");
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
        '/v4/payees/{payeeId}/payeeDetailsUpdate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v3PayeesPayeeIdRemoteIdUpdatePost operation.
     * @callback module:api/PayeesApi~v3PayeesPayeeIdRemoteIdUpdatePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Payee Remote Id
     * <p>Use v4 instead</p> <p>Update the remote Id for the given Payee Id.</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/UpdateRemoteIdRequestV3} updateRemoteIdRequestV3 Request to update payee remote id v3
     * @param {module:api/PayeesApi~v3PayeesPayeeIdRemoteIdUpdatePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v3PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequestV3, callback) {
      let postBody = updateRemoteIdRequestV3;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling v3PayeesPayeeIdRemoteIdUpdatePost");
      }
      // verify the required parameter 'updateRemoteIdRequestV3' is set
      if (updateRemoteIdRequestV3 === undefined || updateRemoteIdRequestV3 === null) {
        throw new Error("Missing the required parameter 'updateRemoteIdRequestV3' when calling v3PayeesPayeeIdRemoteIdUpdatePost");
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
        '/v3/payees/{payeeId}/remoteIdUpdate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v4PayeesPayeeIdRemoteIdUpdatePost operation.
     * @callback module:api/PayeesApi~v4PayeesPayeeIdRemoteIdUpdatePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Payee Remote Id
     * <p>Update the remote Id for the given Payee Id.</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/UpdateRemoteIdRequestV4} updateRemoteIdRequestV4 Request to update payee remote id v4
     * @param {module:api/PayeesApi~v4PayeesPayeeIdRemoteIdUpdatePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v4PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequestV4, callback) {
      let postBody = updateRemoteIdRequestV4;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling v4PayeesPayeeIdRemoteIdUpdatePost");
      }
      // verify the required parameter 'updateRemoteIdRequestV4' is set
      if (updateRemoteIdRequestV4 === undefined || updateRemoteIdRequestV4 === null) {
        throw new Error("Missing the required parameter 'updateRemoteIdRequestV4' when calling v4PayeesPayeeIdRemoteIdUpdatePost");
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
        '/v4/payees/{payeeId}/remoteIdUpdate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
