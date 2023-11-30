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
import InlineResponse412 from '../model/InlineResponse412';
import InviteUserRequest from '../model/InviteUserRequest';
import PagedUserResponse from '../model/PagedUserResponse';
import PasswordRequest from '../model/PasswordRequest';
import PayeeType from '../model/PayeeType';
import PayeeUserSelfUpdateRequest from '../model/PayeeUserSelfUpdateRequest';
import RegisterSmsRequest from '../model/RegisterSmsRequest';
import ResendTokenRequest from '../model/ResendTokenRequest';
import RoleUpdateRequest from '../model/RoleUpdateRequest';
import SelfMFATypeUnregisterRequest from '../model/SelfMFATypeUnregisterRequest';
import SelfUpdatePasswordRequest from '../model/SelfUpdatePasswordRequest';
import UnregisterMFARequest from '../model/UnregisterMFARequest';
import UserDetailsUpdateRequest from '../model/UserDetailsUpdateRequest';
import UserResponse from '../model/UserResponse';
import UserStatus from '../model/UserStatus';
import UserType from '../model/UserType';
import ValidatePasswordResponse from '../model/ValidatePasswordResponse';

/**
* Users service.
* @module api/UsersApi
* @version 2.37.150-beta.1
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteUserByIdV2 operation.
     * @callback module:api/UsersApi~deleteUserByIdV2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a User
     * Delete User by Id. 
     * @param {String} userId The UUID of the User.
     * @param {module:api/UsersApi~deleteUserByIdV2Callback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUserByIdV2(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserByIdV2");
      }

      let pathParams = {
        'userId': userId
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
        '/v2/users/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the disableUserV2 operation.
     * @callback module:api/UsersApi~disableUserV2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable a User
     * <p>If a user is enabled this endpoint will disable them </p> <p>The invoker must have the appropriate permission </p> <p>A user cannot disable themself </p> <p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p> 
     * @param {String} userId The UUID of the User.
     * @param {module:api/UsersApi~disableUserV2Callback} callback The callback function, accepting three arguments: error, data, response
     */
    disableUserV2(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling disableUserV2");
      }

      let pathParams = {
        'userId': userId
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
        '/v2/users/{userId}/disable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the enableUserV2 operation.
     * @callback module:api/UsersApi~enableUserV2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable a User
     * <p>If a user has been disabled this endpoints will enable them </p> <p>The invoker must have the appropriate permission </p> <p>A user cannot enable themself </p> <p>If the user is a payor user and the payor is disabled this operation is not allowed</p> <p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p> 
     * @param {String} userId The UUID of the User.
     * @param {module:api/UsersApi~enableUserV2Callback} callback The callback function, accepting three arguments: error, data, response
     */
    enableUserV2(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling enableUserV2");
      }

      let pathParams = {
        'userId': userId
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
        '/v2/users/{userId}/enable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSelf operation.
     * @callback module:api/UsersApi~getSelfCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Self
     * Get the user's details 
     * @param {module:api/UsersApi~getSelfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponse}
     */
    getSelf(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/v2/users/self', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserByIdV2 operation.
     * @callback module:api/UsersApi~getUserByIdV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User
     * Get a Single User by Id. 
     * @param {String} userId The UUID of the User.
     * @param {module:api/UsersApi~getUserByIdV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponse}
     */
    getUserByIdV2(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserByIdV2");
      }

      let pathParams = {
        'userId': userId
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
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/v2/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the inviteUser operation.
     * @callback module:api/UsersApi~inviteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invite a User
     * Create a User and invite them to the system 
     * @param {module:model/InviteUserRequest} inviteUserRequest Details of User to invite
     * @param {module:api/UsersApi~inviteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    inviteUser(inviteUserRequest, callback) {
      let postBody = inviteUserRequest;
      // verify the required parameter 'inviteUserRequest' is set
      if (inviteUserRequest === undefined || inviteUserRequest === null) {
        throw new Error("Missing the required parameter 'inviteUserRequest' when calling inviteUser");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/users/invite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listUsers operation.
     * @callback module:api/UsersApi~listUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedUserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Users
     * Get a paginated response listing the Users
     * @param {Object} opts Optional parameters
     * @param {module:model/UserType} [type] The Type of the User.
     * @param {module:model/UserStatus} [status] The status of the User.
     * @param {String} [entityId] The entityId of the User.
     * @param {module:model/PayeeType} [payeeType] The Type of the Payee entity. Either COMPANY or INDIVIDUAL.
     * @param {Number} [page = 1)] Page number. Default is 1.
     * @param {Number} [pageSize = 25)] The number of results to return in a page
     * @param {String} [sort = 'email:asc')] List of sort fields (e.g. ?sort=email:asc,lastName:asc) Default is email:asc 'name' The supported sort fields are - email, lastNmae. 
     * @param {module:api/UsersApi~listUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedUserResponse}
     */
    listUsers(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'type': opts['type'],
        'status': opts['status'],
        'entityId': opts['entityId'],
        'payeeType': opts['payeeType'],
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
      let returnType = PagedUserResponse;
      return this.apiClient.callApi(
        '/v2/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerSms operation.
     * @callback module:api/UsersApi~registerSmsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register SMS Number
     * <p>Register an Sms number and send an OTP to it </p> <p>Used for manual verification of a user </p> <p>The backoffice user initiates the request to send the OTP to the user's sms </p> <p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p> 
     * @param {module:model/RegisterSmsRequest} registerSmsRequest a SMS Number to send an OTP to
     * @param {module:api/UsersApi~registerSmsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    registerSms(registerSmsRequest, callback) {
      let postBody = registerSmsRequest;
      // verify the required parameter 'registerSmsRequest' is set
      if (registerSmsRequest === undefined || registerSmsRequest === null) {
        throw new Error("Missing the required parameter 'registerSmsRequest' when calling registerSms");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/users/registration/sms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resendToken operation.
     * @callback module:api/UsersApi~resendTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend a token
     * <p>Resend the specified token </p> <p>The token to resend must already exist for the user </p> <p>It will be revoked and a new one issued</p> 
     * @param {String} userId The UUID of the User.
     * @param {module:model/ResendTokenRequest} resendTokenRequest The type of token to resend
     * @param {module:api/UsersApi~resendTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    resendToken(userId, resendTokenRequest, callback) {
      let postBody = resendTokenRequest;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling resendToken");
      }
      // verify the required parameter 'resendTokenRequest' is set
      if (resendTokenRequest === undefined || resendTokenRequest === null) {
        throw new Error("Missing the required parameter 'resendTokenRequest' when calling resendToken");
      }

      let pathParams = {
        'userId': userId
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
        '/v2/users/{userId}/tokens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the roleUpdate operation.
     * @callback module:api/UsersApi~roleUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Role
     * <p>Update the user's Role</p> 
     * @param {String} userId The UUID of the User.
     * @param {module:model/RoleUpdateRequest} roleUpdateRequest The Role to change to
     * @param {module:api/UsersApi~roleUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    roleUpdate(userId, roleUpdateRequest, callback) {
      let postBody = roleUpdateRequest;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling roleUpdate");
      }
      // verify the required parameter 'roleUpdateRequest' is set
      if (roleUpdateRequest === undefined || roleUpdateRequest === null) {
        throw new Error("Missing the required parameter 'roleUpdateRequest' when calling roleUpdate");
      }

      let pathParams = {
        'userId': userId
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
        '/v2/users/{userId}/roleUpdate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unlockUserV2 operation.
     * @callback module:api/UsersApi~unlockUserV2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlock a User
     * If a user is locked this endpoint will unlock them 
     * @param {String} userId The UUID of the User.
     * @param {module:api/UsersApi~unlockUserV2Callback} callback The callback function, accepting three arguments: error, data, response
     */
    unlockUserV2(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling unlockUserV2");
      }

      let pathParams = {
        'userId': userId
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
        '/v2/users/{userId}/unlock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unregisterMFA operation.
     * @callback module:api/UsersApi~unregisterMFACallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister MFA for the user
     * <p>Unregister the MFA device for the user </p> <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p> 
     * @param {String} userId The UUID of the User.
     * @param {module:model/UnregisterMFARequest} unregisterMFARequest The MFA Type to unregister
     * @param {module:api/UsersApi~unregisterMFACallback} callback The callback function, accepting three arguments: error, data, response
     */
    unregisterMFA(userId, unregisterMFARequest, callback) {
      let postBody = unregisterMFARequest;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling unregisterMFA");
      }
      // verify the required parameter 'unregisterMFARequest' is set
      if (unregisterMFARequest === undefined || unregisterMFARequest === null) {
        throw new Error("Missing the required parameter 'unregisterMFARequest' when calling unregisterMFA");
      }

      let pathParams = {
        'userId': userId
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
        '/v2/users/{userId}/mfa/unregister', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unregisterMFAForSelf operation.
     * @callback module:api/UsersApi~unregisterMFAForSelfCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister MFA for Self
     * <p>Unregister the MFA device for the user </p> <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p> 
     * @param {module:model/SelfMFATypeUnregisterRequest} selfMFATypeUnregisterRequest The MFA Type to unregister
     * @param {Object} opts Optional parameters
     * @param {String} [authorization] Bearer token authorization leg of validate
     * @param {module:api/UsersApi~unregisterMFAForSelfCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unregisterMFAForSelf(selfMFATypeUnregisterRequest, opts, callback) {
      opts = opts || {};
      let postBody = selfMFATypeUnregisterRequest;
      // verify the required parameter 'selfMFATypeUnregisterRequest' is set
      if (selfMFATypeUnregisterRequest === undefined || selfMFATypeUnregisterRequest === null) {
        throw new Error("Missing the required parameter 'selfMFATypeUnregisterRequest' when calling unregisterMFAForSelf");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/users/self/mfa/unregister', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePasswordSelf operation.
     * @callback module:api/UsersApi~updatePasswordSelfCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Password for self
     * Update password for self 
     * @param {module:model/SelfUpdatePasswordRequest} selfUpdatePasswordRequest The password
     * @param {module:api/UsersApi~updatePasswordSelfCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updatePasswordSelf(selfUpdatePasswordRequest, callback) {
      let postBody = selfUpdatePasswordRequest;
      // verify the required parameter 'selfUpdatePasswordRequest' is set
      if (selfUpdatePasswordRequest === undefined || selfUpdatePasswordRequest === null) {
        throw new Error("Missing the required parameter 'selfUpdatePasswordRequest' when calling updatePasswordSelf");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/users/self/password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the userDetailsUpdate operation.
     * @callback module:api/UsersApi~userDetailsUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Details
     * <p>Update the profile details for the given user</p> <p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p> 
     * @param {String} userId The UUID of the User.
     * @param {module:model/UserDetailsUpdateRequest} userDetailsUpdateRequest The details of the user to update
     * @param {module:api/UsersApi~userDetailsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    userDetailsUpdate(userId, userDetailsUpdateRequest, callback) {
      let postBody = userDetailsUpdateRequest;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userDetailsUpdate");
      }
      // verify the required parameter 'userDetailsUpdateRequest' is set
      if (userDetailsUpdateRequest === undefined || userDetailsUpdateRequest === null) {
        throw new Error("Missing the required parameter 'userDetailsUpdateRequest' when calling userDetailsUpdate");
      }

      let pathParams = {
        'userId': userId
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
        '/v2/users/{userId}/userDetailsUpdate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the userDetailsUpdateForSelf operation.
     * @callback module:api/UsersApi~userDetailsUpdateForSelfCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Details for self
     * <p>Update the profile details for the given user</p> <p>Only Payee user types are supported</p> 
     * @param {module:model/PayeeUserSelfUpdateRequest} payeeUserSelfUpdateRequest The details of the user to update
     * @param {module:api/UsersApi~userDetailsUpdateForSelfCallback} callback The callback function, accepting three arguments: error, data, response
     */
    userDetailsUpdateForSelf(payeeUserSelfUpdateRequest, callback) {
      let postBody = payeeUserSelfUpdateRequest;
      // verify the required parameter 'payeeUserSelfUpdateRequest' is set
      if (payeeUserSelfUpdateRequest === undefined || payeeUserSelfUpdateRequest === null) {
        throw new Error("Missing the required parameter 'payeeUserSelfUpdateRequest' when calling userDetailsUpdateForSelf");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/users/self/userDetailsUpdate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the validatePasswordSelf operation.
     * @callback module:api/UsersApi~validatePasswordSelfCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidatePasswordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate the proposed password
     * validate the password and return a score 
     * @param {module:model/PasswordRequest} passwordRequest The password
     * @param {module:api/UsersApi~validatePasswordSelfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidatePasswordResponse}
     */
    validatePasswordSelf(passwordRequest, callback) {
      let postBody = passwordRequest;
      // verify the required parameter 'passwordRequest' is set
      if (passwordRequest === undefined || passwordRequest === null) {
        throw new Error("Missing the required parameter 'passwordRequest' when calling validatePasswordSelf");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ValidatePasswordResponse;
      return this.apiClient.callApi(
        '/v2/users/self/password/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
