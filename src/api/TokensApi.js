/**
 * Velo Payments APIs
 * ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  ```   curl -X POST \\   -H \"Content-Type: application/json\" \\   -H \"Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==\" \\   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials' ```  If successful, this call will result in a **200** HTTP status code and a response body such as:  ```   {     \"access_token\":\"19f6bafd-93fd-4747-b229-00507bbc991f\",     \"token_type\":\"bearer\",     \"expires_in\":1799,     \"scope\":\"...\"   } ``` ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  ```   -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \" ```  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response. 
 *
 * The version of the OpenAPI document: 2.18.113
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AccessTokenResponse from '../model/AccessTokenResponse';
import CheckTokenResponse from '../model/CheckTokenResponse';
import ErrorResponse from '../model/ErrorResponse';
import GenerateOTPRequest from '../model/GenerateOTPRequest';
import PasswordRequest from '../model/PasswordRequest';
import RegisterMFARequest from '../model/RegisterMFARequest';
import RegisterMFAResponse from '../model/RegisterMFAResponse';
import ResendTokenRequest from '../model/ResendTokenRequest';
import ValidateMFARequest from '../model/ValidateMFARequest';
import ValidateOTPRequest from '../model/ValidateOTPRequest';
import ValidatePasswordResponse from '../model/ValidatePasswordResponse';

/**
* Tokens service.
* @module api/TokensApi
* @version 2.18.113
*/
export default class TokensApi {

    /**
    * Constructs a new TokensApi. 
    * @alias module:api/TokensApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the generateOTP operation.
     * @callback module:api/TokensApi~generateOTPCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate an OTP
     * Generate an OTP and send to the MFA type specified in the request body 
     * @param {String} tokenId The UUID of the Token
     * @param {module:model/GenerateOTPRequest} generateOTPRequest The MFA type to send the generated OTP to
     * @param {module:api/TokensApi~generateOTPCallback} callback The callback function, accepting three arguments: error, data, response
     */
    generateOTP(tokenId, generateOTPRequest, callback) {
      let postBody = generateOTPRequest;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling generateOTP");
      }
      // verify the required parameter 'generateOTPRequest' is set
      if (generateOTPRequest === undefined || generateOTPRequest === null) {
        throw new Error("Missing the required parameter 'generateOTPRequest' when calling generateOTP");
      }

      let pathParams = {
        'tokenId': tokenId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/tokens/{tokenId}/otp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateOTPForSMS operation.
     * @callback module:api/TokensApi~generateOTPForSMSCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send an OTP to SMS Users
     * <p>Generate an OTP and send to the SMS device if the user</p> <p>Only users who have SMS as their registered MFA device will receive an OTP</p> <p>Used in conjuction with endpoints that require the Velo-OTP header</p> 
     * @param {String} tokenId The UUID of the Token
     * @param {module:api/TokensApi~generateOTPForSMSCallback} callback The callback function, accepting three arguments: error, data, response
     */
    generateOTPForSMS(tokenId, callback) {
      let postBody = null;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling generateOTPForSMS");
      }

      let pathParams = {
        'tokenId': tokenId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/tokens/{tokenId}/otp/generate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getQRCodeForMFA operation.
     * @callback module:api/TokensApi~getQRCodeForMFACallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a QR Code image
     * <p>Get a QR Code for an MFA device that supports it </p> <p>The device must have first been registered</p> 
     * @param {String} tokenId The UUID of the Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.width The width of the image 
     * @param {Number} opts.height The height of the image 
     * @param {module:api/TokensApi~getQRCodeForMFACallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getQRCodeForMFA(tokenId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling getQRCodeForMFA");
      }

      let pathParams = {
        'tokenId': tokenId
      };
      let queryParams = {
        'width': opts['width'],
        'height': opts['height']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['image/png', 'application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/v1/tokens/{tokenId}/mfa/qrcode', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVerificationTokenById operation.
     * @callback module:api/TokensApi~getVerificationTokenByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Token
     * Get a Single Verification Token by Id. 
     * @param {String} tokenId The UUID of the Token
     * @param {module:api/TokensApi~getVerificationTokenByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckTokenResponse}
     */
    getVerificationTokenById(tokenId, callback) {
      let postBody = null;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling getVerificationTokenById");
      }

      let pathParams = {
        'tokenId': tokenId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CheckTokenResponse;
      return this.apiClient.callApi(
        '/v1/tokens/{tokenId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerMFA operation.
     * @callback module:api/TokensApi~registerMFACallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegisterMFAResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register an MFA Device
     * <p>Some MFA Devices based on TOTP require a registration step (Authy, Authenticator) </p> <p>Registering the device will create a shared secret that the MFA device uses to generate OTPs</p> 
     * @param {String} tokenId The UUID of the Token
     * @param {module:model/RegisterMFARequest} registerMFARequest The MFA Type to register
     * @param {module:api/TokensApi~registerMFACallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RegisterMFAResponse}
     */
    registerMFA(tokenId, registerMFARequest, callback) {
      let postBody = registerMFARequest;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling registerMFA");
      }
      // verify the required parameter 'registerMFARequest' is set
      if (registerMFARequest === undefined || registerMFARequest === null) {
        throw new Error("Missing the required parameter 'registerMFARequest' when calling registerMFA");
      }

      let pathParams = {
        'tokenId': tokenId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RegisterMFAResponse;
      return this.apiClient.callApi(
        '/v1/tokens/{tokenId}/mfa/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resendToken operation.
     * @callback module:api/TokensApi~resendTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend a token
     * <p>Resend the specified token </p> <p>The token to resend must already exist for the user </p> <p>It will be revoked and a new one issued</p> 
     * @param {String} userId The UUID of the User.
     * @param {module:model/ResendTokenRequest} resendTokenRequest The type of token to resend
     * @param {module:api/TokensApi~resendTokenCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the submitPassword operation.
     * @callback module:api/TokensApi~submitPasswordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit a password
     * Submit a password 
     * @param {String} tokenId The UUID of the Token
     * @param {module:model/PasswordRequest} passwordRequest The password
     * @param {Object} opts Optional parameters
     * @param {String} opts.veloOTP required when updating password using reset password <P> The OTP is supplied by the users MFA device 
     * @param {module:api/TokensApi~submitPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccessTokenResponse}
     */
    submitPassword(tokenId, passwordRequest, opts, callback) {
      opts = opts || {};
      let postBody = passwordRequest;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling submitPassword");
      }
      // verify the required parameter 'passwordRequest' is set
      if (passwordRequest === undefined || passwordRequest === null) {
        throw new Error("Missing the required parameter 'passwordRequest' when calling submitPassword");
      }

      let pathParams = {
        'tokenId': tokenId
      };
      let queryParams = {
      };
      let headerParams = {
        'Velo-OTP': opts['veloOTP']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AccessTokenResponse;
      return this.apiClient.callApi(
        '/v1/tokens/{tokenId}/password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unlockAccountWithToken operation.
     * @callback module:api/TokensApi~unlockAccountWithTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlock the user
     * <p>When a user is locked out of their account due to execeding the limit of login attempts</p> <p>They can use a token to unlock their account </p> <p>Submitting the token will unlock the account associated with the token</p> 
     * @param {String} tokenId The UUID of the Token
     * @param {module:api/TokensApi~unlockAccountWithTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unlockAccountWithToken(tokenId, callback) {
      let postBody = null;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling unlockAccountWithToken");
      }

      let pathParams = {
        'tokenId': tokenId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/tokens/{tokenId}/password/lockout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the validateMFA operation.
     * @callback module:api/TokensApi~validateMFACallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate an MFA Device
     * <p>Validate the user's registered MFA device with an OTP </p> <p>The response will be different based on the token type against which the MFA is validated </p> <p>For INVITE_MFA_USER tokens the response will be 200 and an access token will be returned i the response </p> <p>For MFA_REGISTRATION tokens the response will be 204</p> 
     * @param {String} tokenId The UUID of the Token
     * @param {module:model/ValidateMFARequest} validateMFARequest The OTP generated or received by the device
     * @param {module:api/TokensApi~validateMFACallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccessTokenResponse}
     */
    validateMFA(tokenId, validateMFARequest, callback) {
      let postBody = validateMFARequest;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling validateMFA");
      }
      // verify the required parameter 'validateMFARequest' is set
      if (validateMFARequest === undefined || validateMFARequest === null) {
        throw new Error("Missing the required parameter 'validateMFARequest' when calling validateMFA");
      }

      let pathParams = {
        'tokenId': tokenId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AccessTokenResponse;
      return this.apiClient.callApi(
        '/v1/tokens/{tokenId}/mfa/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the validateOTP operation.
     * @callback module:api/TokensApi~validateOTPCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate an OTP
     * <p>Validate the OTP </p> <p>The token that was used in the request will be revoked and a new token issued </p> <p>The new token link will be returned in a location header</p> <p>If there are too many invalid OTP requests the token may be disabled</p> 
     * @param {String} tokenId The UUID of the Token
     * @param {module:model/ValidateOTPRequest} validateOTPRequest The OTP generated and sent to the device
     * @param {module:api/TokensApi~validateOTPCallback} callback The callback function, accepting three arguments: error, data, response
     */
    validateOTP(tokenId, validateOTPRequest, callback) {
      let postBody = validateOTPRequest;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling validateOTP");
      }
      // verify the required parameter 'validateOTPRequest' is set
      if (validateOTPRequest === undefined || validateOTPRequest === null) {
        throw new Error("Missing the required parameter 'validateOTPRequest' when calling validateOTP");
      }

      let pathParams = {
        'tokenId': tokenId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/tokens/{tokenId}/otp/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the validatePassword operation.
     * @callback module:api/TokensApi~validatePasswordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidatePasswordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate the proposed password
     * validate the password and return a score 
     * @param {String} tokenId The UUID of the Token
     * @param {module:model/PasswordRequest} passwordRequest The password
     * @param {module:api/TokensApi~validatePasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidatePasswordResponse}
     */
    validatePassword(tokenId, passwordRequest, callback) {
      let postBody = passwordRequest;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling validatePassword");
      }
      // verify the required parameter 'passwordRequest' is set
      if (passwordRequest === undefined || passwordRequest === null) {
        throw new Error("Missing the required parameter 'passwordRequest' when calling validatePassword");
      }

      let pathParams = {
        'tokenId': tokenId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ValidatePasswordResponse;
      return this.apiClient.callApi(
        '/v1/tokens/{tokenId}/password/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
