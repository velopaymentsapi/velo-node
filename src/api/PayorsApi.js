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


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse403 from '../model/InlineResponse403';
import InlineResponse404 from '../model/InlineResponse404';
import InlineResponse409 from '../model/InlineResponse409';
import PayorBrandingResponse from '../model/PayorBrandingResponse';
import PayorCreateApiKeyRequest from '../model/PayorCreateApiKeyRequest';
import PayorCreateApiKeyResponse from '../model/PayorCreateApiKeyResponse';
import PayorCreateApplicationRequest from '../model/PayorCreateApplicationRequest';
import PayorEmailOptOutRequest from '../model/PayorEmailOptOutRequest';
import PayorLinksResponse from '../model/PayorLinksResponse';
import PayorV1 from '../model/PayorV1';
import PayorV2 from '../model/PayorV2';

/**
* Payors service.
* @module api/PayorsApi
* @version 2.30.53
*/
export default class PayorsApi {

    /**
    * Constructs a new PayorsApi. 
    * @alias module:api/PayorsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getPayorById operation.
     * @callback module:api/PayorsApi~getPayorByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayorV1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payor
     * Get a Single Payor by Id. 
     * @param {String} payorId The Payor Id
     * @param {module:api/PayorsApi~getPayorByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayorV1}
     */
    getPayorById(payorId, callback) {
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getPayorById");
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
      let returnType = PayorV1;
      return this.apiClient.callApi(
        '/v1/payors/{payorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayorByIdV2 operation.
     * @callback module:api/PayorsApi~getPayorByIdV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PayorV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payor
     * Get a Single Payor by Id. 
     * @param {String} payorId The Payor Id
     * @param {module:api/PayorsApi~getPayorByIdV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayorV2}
     */
    getPayorByIdV2(payorId, callback) {
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling getPayorByIdV2");
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
      let returnType = PayorV2;
      return this.apiClient.callApi(
        '/v2/payors/{payorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payorAddPayorLogo operation.
     * @callback module:api/PayorsApi~payorAddPayorLogoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Logo
     * Add Payor Logo. Logo file is used in your branding, and emails sent to payees.
     * @param {String} payorId The Payor Id
     * @param {Object} opts Optional parameters
     * @param {File} opts.logo 
     * @param {module:api/PayorsApi~payorAddPayorLogoCallback} callback The callback function, accepting three arguments: error, data, response
     */
    payorAddPayorLogo(payorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling payorAddPayorLogo");
      }

      let pathParams = {
        'payorId': payorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'logo': opts['logo']
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/payors/{payorId}/branding/logos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payorCreateApiKeyRequest operation.
     * @callback module:api/PayorsApi~payorCreateApiKeyRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayorCreateApiKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create API Key
     * Create an an API key for the given payor Id and application Id
     * @param {String} payorId The Payor Id
     * @param {String} applicationId Application ID
     * @param {module:model/PayorCreateApiKeyRequest} payorCreateApiKeyRequest Details of application API key to create
     * @param {module:api/PayorsApi~payorCreateApiKeyRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayorCreateApiKeyResponse}
     */
    payorCreateApiKeyRequest(payorId, applicationId, payorCreateApiKeyRequest, callback) {
      let postBody = payorCreateApiKeyRequest;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling payorCreateApiKeyRequest");
      }
      // verify the required parameter 'applicationId' is set
      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling payorCreateApiKeyRequest");
      }
      // verify the required parameter 'payorCreateApiKeyRequest' is set
      if (payorCreateApiKeyRequest === undefined || payorCreateApiKeyRequest === null) {
        throw new Error("Missing the required parameter 'payorCreateApiKeyRequest' when calling payorCreateApiKeyRequest");
      }

      let pathParams = {
        'payorId': payorId,
        'applicationId': applicationId
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
      let returnType = PayorCreateApiKeyResponse;
      return this.apiClient.callApi(
        '/v1/payors/{payorId}/applications/{applicationId}/keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payorCreateApplicationRequest operation.
     * @callback module:api/PayorsApi~payorCreateApplicationRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Application
     * Create an application for the given Payor ID. Applications are programatic users which can be assigned unique keys.
     * @param {String} payorId The Payor Id
     * @param {module:model/PayorCreateApplicationRequest} payorCreateApplicationRequest Details of application to create
     * @param {module:api/PayorsApi~payorCreateApplicationRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    payorCreateApplicationRequest(payorId, payorCreateApplicationRequest, callback) {
      let postBody = payorCreateApplicationRequest;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling payorCreateApplicationRequest");
      }
      // verify the required parameter 'payorCreateApplicationRequest' is set
      if (payorCreateApplicationRequest === undefined || payorCreateApplicationRequest === null) {
        throw new Error("Missing the required parameter 'payorCreateApplicationRequest' when calling payorCreateApplicationRequest");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/payors/{payorId}/applications', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payorEmailOptOut operation.
     * @callback module:api/PayorsApi~payorEmailOptOutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reminder Email Opt-Out
     * Update the emailRemindersOptOut field for a Payor. This API can be used to opt out or opt into Payor Reminder emails. These emails are typically around payee events such as payees registering and onboarding. 
     * @param {String} payorId The Payor Id
     * @param {module:model/PayorEmailOptOutRequest} payorEmailOptOutRequest Reminder Emails Opt-Out Request
     * @param {module:api/PayorsApi~payorEmailOptOutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    payorEmailOptOut(payorId, payorEmailOptOutRequest, callback) {
      let postBody = payorEmailOptOutRequest;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling payorEmailOptOut");
      }
      // verify the required parameter 'payorEmailOptOutRequest' is set
      if (payorEmailOptOutRequest === undefined || payorEmailOptOutRequest === null) {
        throw new Error("Missing the required parameter 'payorEmailOptOutRequest' when calling payorEmailOptOut");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/payors/{payorId}/reminderEmailsUpdate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payorGetBranding operation.
     * @callback module:api/PayorsApi~payorGetBrandingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayorBrandingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Branding
     * Get the payor branding details.
     * @param {String} payorId The Payor Id
     * @param {module:api/PayorsApi~payorGetBrandingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayorBrandingResponse}
     */
    payorGetBranding(payorId, callback) {
      let postBody = null;
      // verify the required parameter 'payorId' is set
      if (payorId === undefined || payorId === null) {
        throw new Error("Missing the required parameter 'payorId' when calling payorGetBranding");
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
      let returnType = PayorBrandingResponse;
      return this.apiClient.callApi(
        '/v1/payors/{payorId}/branding', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payorLinks operation.
     * @callback module:api/PayorsApi~payorLinksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayorLinksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payor Links
     * This endpoint allows you to list payor links
     * @param {Object} opts Optional parameters
     * @param {String} opts.descendantsOfPayor The Payor ID from which to start the query to show all descendants
     * @param {String} opts.parentOfPayor Look for the parent payor details for this payor id
     * @param {String} opts.fields List of additional Payor fields to include in the response for each Payor. The values of payorId and payorName and always included for each Payor - 'fields' allows you to add to this. Example: ```fields=primaryContactEmail,kycState``` - will include payorId+payorName+primaryContactEmail+kycState for each Payor Default if not specified is to include only payorId and payorName. The supported fields are any combination of: primaryContactEmail,kycState 
     * @param {module:api/PayorsApi~payorLinksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayorLinksResponse}
     */
    payorLinks(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'descendantsOfPayor': opts['descendantsOfPayor'],
        'parentOfPayor': opts['parentOfPayor'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PayorLinksResponse;
      return this.apiClient.callApi(
        '/v1/payorLinks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
