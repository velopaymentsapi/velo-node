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
import CreatePaymentChannelRequestV4 from '../model/CreatePaymentChannelRequestV4';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse401 from '../model/InlineResponse401';
import InlineResponse403 from '../model/InlineResponse403';
import InlineResponse404 from '../model/InlineResponse404';
import InlineResponse409 from '../model/InlineResponse409';
import PaymentChannelOrderRequestV4 from '../model/PaymentChannelOrderRequestV4';
import PaymentChannelResponseV4 from '../model/PaymentChannelResponseV4';
import PaymentChannelsResponseV4 from '../model/PaymentChannelsResponseV4';
import UpdatePaymentChannelRequestV4 from '../model/UpdatePaymentChannelRequestV4';

/**
* PayeePaymentChannels service.
* @module api/PayeePaymentChannelsApi
* @version 2.37.150-beta.1
*/
export default class PayeePaymentChannelsApi {

    /**
    * Constructs a new PayeePaymentChannelsApi. 
    * @alias module:api/PayeePaymentChannelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createPaymentChannelV4 operation.
     * @callback module:api/PayeePaymentChannelsApi~createPaymentChannelV4Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Payment Channel
     * <p>Create a payment channel</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/CreatePaymentChannelRequestV4} createPaymentChannelRequestV4 Post payment channel to update
     * @param {module:api/PayeePaymentChannelsApi~createPaymentChannelV4Callback} callback The callback function, accepting three arguments: error, data, response
     */
    createPaymentChannelV4(payeeId, createPaymentChannelRequestV4, callback) {
      let postBody = createPaymentChannelRequestV4;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling createPaymentChannelV4");
      }
      // verify the required parameter 'createPaymentChannelRequestV4' is set
      if (createPaymentChannelRequestV4 === undefined || createPaymentChannelRequestV4 === null) {
        throw new Error("Missing the required parameter 'createPaymentChannelRequestV4' when calling createPaymentChannelV4");
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
        '/v4/payees/{payeeId}/paymentChannels/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePaymentChannelV4 operation.
     * @callback module:api/PayeePaymentChannelsApi~deletePaymentChannelV4Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Payment Channel
     * <p>Delete a payees payment channel</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {String} paymentChannelId The UUID of the payment channel.
     * @param {module:api/PayeePaymentChannelsApi~deletePaymentChannelV4Callback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePaymentChannelV4(payeeId, paymentChannelId, callback) {
      let postBody = null;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling deletePaymentChannelV4");
      }
      // verify the required parameter 'paymentChannelId' is set
      if (paymentChannelId === undefined || paymentChannelId === null) {
        throw new Error("Missing the required parameter 'paymentChannelId' when calling deletePaymentChannelV4");
      }

      let pathParams = {
        'payeeId': payeeId,
        'paymentChannelId': paymentChannelId
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
        '/v4/payees/{payeeId}/paymentChannels/{paymentChannelId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the enablePaymentChannelV4 operation.
     * @callback module:api/PayeePaymentChannelsApi~enablePaymentChannelV4Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable Payment Channel
     * <p>Enable a payment channel for a payee</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {String} paymentChannelId The UUID of the payment channel.
     * @param {module:api/PayeePaymentChannelsApi~enablePaymentChannelV4Callback} callback The callback function, accepting three arguments: error, data, response
     */
    enablePaymentChannelV4(payeeId, paymentChannelId, callback) {
      let postBody = null;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling enablePaymentChannelV4");
      }
      // verify the required parameter 'paymentChannelId' is set
      if (paymentChannelId === undefined || paymentChannelId === null) {
        throw new Error("Missing the required parameter 'paymentChannelId' when calling enablePaymentChannelV4");
      }

      let pathParams = {
        'payeeId': payeeId,
        'paymentChannelId': paymentChannelId
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
        '/v4/payees/{payeeId}/paymentChannels/{paymentChannelId}/enable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentChannelV4 operation.
     * @callback module:api/PayeePaymentChannelsApi~getPaymentChannelV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentChannelResponseV4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payment Channel Details
     * <p>Get the payment channel details for the payee</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {String} paymentChannelId The UUID of the payment channel.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [payable] payable if true only return the payment channel if the payee is payable
     * @param {Boolean} [sensitive] <p>Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.</p> <p>If set to true, and you have permission, the PII values will be returned as their original unmasked values.</p> 
     * @param {module:api/PayeePaymentChannelsApi~getPaymentChannelV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentChannelResponseV4}
     */
    getPaymentChannelV4(payeeId, paymentChannelId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling getPaymentChannelV4");
      }
      // verify the required parameter 'paymentChannelId' is set
      if (paymentChannelId === undefined || paymentChannelId === null) {
        throw new Error("Missing the required parameter 'paymentChannelId' when calling getPaymentChannelV4");
      }

      let pathParams = {
        'payeeId': payeeId,
        'paymentChannelId': paymentChannelId
      };
      let queryParams = {
        'payable': opts['payable'],
        'sensitive': opts['sensitive']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaymentChannelResponseV4;
      return this.apiClient.callApi(
        '/v4/payees/{payeeId}/paymentChannels/{paymentChannelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentChannelsV4 operation.
     * @callback module:api/PayeePaymentChannelsApi~getPaymentChannelsV4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentChannelsResponseV4} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Payment Channels Details
     * <p>Get all payment channels details for a payee</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {Object} opts Optional parameters
     * @param {String} [payorId] <p>(UUID) the id of the Payor.</p> <p>If specified the payment channels are filtered to those mapped to this payor.</p> 
     * @param {Boolean} [payable] payable if true only return the payment channel if the payee is payable
     * @param {Boolean} [sensitive] <p>Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.</p> <p>If set to true, and you have permission, the PII values will be returned as their original unmasked values.</p> 
     * @param {Boolean} [ignorePayorInviteStatus] payable if true only return the payment channel if the payee is payable
     * @param {module:api/PayeePaymentChannelsApi~getPaymentChannelsV4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentChannelsResponseV4}
     */
    getPaymentChannelsV4(payeeId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling getPaymentChannelsV4");
      }

      let pathParams = {
        'payeeId': payeeId
      };
      let queryParams = {
        'payorId': opts['payorId'],
        'payable': opts['payable'],
        'sensitive': opts['sensitive'],
        'ignorePayorInviteStatus': opts['ignorePayorInviteStatus']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaymentChannelsResponseV4;
      return this.apiClient.callApi(
        '/v4/payees/{payeeId}/paymentChannels/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePaymentChannelOrderV4 operation.
     * @callback module:api/PayeePaymentChannelsApi~updatePaymentChannelOrderV4Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Payees preferred Payment Channel order
     * <p>Update the Payee's preferred order of payment channels by passing in just the payment channel ids. When payments are made to the payee then in the absence of any other rules (e.g. matching on currency) the first payment channel in this list will be chosen. </p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {module:model/PaymentChannelOrderRequestV4} paymentChannelOrderRequestV4 Put the payment channel ids in the preferred order
     * @param {module:api/PayeePaymentChannelsApi~updatePaymentChannelOrderV4Callback} callback The callback function, accepting three arguments: error, data, response
     */
    updatePaymentChannelOrderV4(payeeId, paymentChannelOrderRequestV4, callback) {
      let postBody = paymentChannelOrderRequestV4;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling updatePaymentChannelOrderV4");
      }
      // verify the required parameter 'paymentChannelOrderRequestV4' is set
      if (paymentChannelOrderRequestV4 === undefined || paymentChannelOrderRequestV4 === null) {
        throw new Error("Missing the required parameter 'paymentChannelOrderRequestV4' when calling updatePaymentChannelOrderV4");
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
        '/v4/payees/{payeeId}/paymentChannels/order', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePaymentChannelV4 operation.
     * @callback module:api/PayeePaymentChannelsApi~updatePaymentChannelV4Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Payment Channel
     * <p>Update the details of the payment channel. Note payment channels are immutable. The current payment channel will be logically deleted as part of this call and replaced with new one with the correct details; this endpoint will return a Location header with a link to the new payment channel upon success. Updating a currently disabled payment channel will result in a new, fully enabled, payment channel.</p> 
     * @param {String} payeeId The UUID of the payee.
     * @param {String} paymentChannelId The UUID of the payment channel.
     * @param {module:model/UpdatePaymentChannelRequestV4} updatePaymentChannelRequestV4 Post payment channel to update
     * @param {module:api/PayeePaymentChannelsApi~updatePaymentChannelV4Callback} callback The callback function, accepting three arguments: error, data, response
     */
    updatePaymentChannelV4(payeeId, paymentChannelId, updatePaymentChannelRequestV4, callback) {
      let postBody = updatePaymentChannelRequestV4;
      // verify the required parameter 'payeeId' is set
      if (payeeId === undefined || payeeId === null) {
        throw new Error("Missing the required parameter 'payeeId' when calling updatePaymentChannelV4");
      }
      // verify the required parameter 'paymentChannelId' is set
      if (paymentChannelId === undefined || paymentChannelId === null) {
        throw new Error("Missing the required parameter 'paymentChannelId' when calling updatePaymentChannelV4");
      }
      // verify the required parameter 'updatePaymentChannelRequestV4' is set
      if (updatePaymentChannelRequestV4 === undefined || updatePaymentChannelRequestV4 === null) {
        throw new Error("Missing the required parameter 'updatePaymentChannelRequestV4' when calling updatePaymentChannelV4");
      }

      let pathParams = {
        'payeeId': payeeId,
        'paymentChannelId': paymentChannelId
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
        '/v4/payees/{payeeId}/paymentChannels/{paymentChannelId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
