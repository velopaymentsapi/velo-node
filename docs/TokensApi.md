# VeloPayments.TokensApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateOTP**](TokensApi.md#generateOTP) | **POST** /v1/tokens/{tokenId}/otp | Generate an OTP
[**generateOTPForSMS**](TokensApi.md#generateOTPForSMS) | **POST** /v1/tokens/{tokenId}/otp/generate | Send an OTP to SMS Users
[**getQRCodeForMFA**](TokensApi.md#getQRCodeForMFA) | **GET** /v1/tokens/{tokenId}/mfa/qrcode | Get a QR Code image
[**getVerificationTokenById**](TokensApi.md#getVerificationTokenById) | **GET** /v1/tokens/{tokenId} | Get Token
[**registerMFA**](TokensApi.md#registerMFA) | **POST** /v1/tokens/{tokenId}/mfa/register | Register an MFA Device
[**resendToken**](TokensApi.md#resendToken) | **POST** /v2/users/{userId}/tokens | Resend a token
[**submitPassword**](TokensApi.md#submitPassword) | **POST** /v1/tokens/{tokenId}/password | Submit a password
[**unlockAccountWithToken**](TokensApi.md#unlockAccountWithToken) | **POST** /v1/tokens/{tokenId}/password/lockout | Unlock the user
[**validateMFA**](TokensApi.md#validateMFA) | **POST** /v1/tokens/{tokenId}/mfa/validate | Validate an MFA Device
[**validateOTP**](TokensApi.md#validateOTP) | **POST** /v1/tokens/{tokenId}/otp/validate | Validate an OTP
[**validatePassword**](TokensApi.md#validatePassword) | **POST** /v1/tokens/{tokenId}/password/validate | Validate the proposed password



## generateOTP

> generateOTP(tokenId, generateOTPRequest)

Generate an OTP

Generate an OTP and send to the MFA type specified in the request body 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.TokensApi();
let tokenId = null; // String | The UUID of the Token
let generateOTPRequest = new VeloPayments.GenerateOTPRequest(); // GenerateOTPRequest | The MFA type to send the generated OTP to
apiInstance.generateOTP(tokenId, generateOTPRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| The UUID of the Token | 
 **generateOTPRequest** | [**GenerateOTPRequest**](GenerateOTPRequest.md)| The MFA type to send the generated OTP to | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateOTPForSMS

> generateOTPForSMS(tokenId)

Send an OTP to SMS Users

&lt;p&gt;Generate an OTP and send to the SMS device if the user&lt;/p&gt; &lt;p&gt;Only users who have SMS as their registered MFA device will receive an OTP&lt;/p&gt; &lt;p&gt;Used in conjuction with endpoints that require the Velo-OTP header&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.TokensApi();
let tokenId = null; // String | The UUID of the Token
apiInstance.generateOTPForSMS(tokenId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| The UUID of the Token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getQRCodeForMFA

> File getQRCodeForMFA(tokenId, opts)

Get a QR Code image

&lt;p&gt;Get a QR Code for an MFA device that supports it &lt;/p&gt; &lt;p&gt;The device must have first been registered&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.TokensApi();
let tokenId = null; // String | The UUID of the Token
let opts = {
  'width': 56, // Number | The width of the image 
  'height': 56 // Number | The height of the image 
};
apiInstance.getQRCodeForMFA(tokenId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| The UUID of the Token | 
 **width** | **Number**| The width of the image  | [optional] 
 **height** | **Number**| The height of the image  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json


## getVerificationTokenById

> CheckTokenResponse getVerificationTokenById(tokenId)

Get Token

Get a Single Verification Token by Id. 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.TokensApi();
let tokenId = null; // String | The UUID of the Token
apiInstance.getVerificationTokenById(tokenId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| The UUID of the Token | 

### Return type

[**CheckTokenResponse**](CheckTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerMFA

> RegisterMFAResponse registerMFA(tokenId, registerMFARequest)

Register an MFA Device

&lt;p&gt;Some MFA Devices based on TOTP require a registration step (Authy, Authenticator) &lt;/p&gt; &lt;p&gt;Registering the device will create a shared secret that the MFA device uses to generate OTPs&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.TokensApi();
let tokenId = null; // String | The UUID of the Token
let registerMFARequest = new VeloPayments.RegisterMFARequest(); // RegisterMFARequest | The MFA Type to register
apiInstance.registerMFA(tokenId, registerMFARequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| The UUID of the Token | 
 **registerMFARequest** | [**RegisterMFARequest**](RegisterMFARequest.md)| The MFA Type to register | 

### Return type

[**RegisterMFAResponse**](RegisterMFAResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resendToken

> resendToken(userId, resendTokenRequest)

Resend a token

&lt;p&gt;Resend the specified token &lt;/p&gt; &lt;p&gt;The token to resend must already exist for the user &lt;/p&gt; &lt;p&gt;It will be revoked and a new one issued&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.TokensApi();
let userId = null; // String | The UUID of the User.
let resendTokenRequest = new VeloPayments.ResendTokenRequest(); // ResendTokenRequest | The type of token to resend
apiInstance.resendToken(userId, resendTokenRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**String**](.md)| The UUID of the User. | 
 **resendTokenRequest** | [**ResendTokenRequest**](ResendTokenRequest.md)| The type of token to resend | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitPassword

> AccessTokenResponse submitPassword(tokenId, passwordRequest, opts)

Submit a password

Submit a password 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.TokensApi();
let tokenId = null; // String | The UUID of the Token
let passwordRequest = new VeloPayments.PasswordRequest(); // PasswordRequest | The password
let opts = {
  'veloOTP': "veloOTP_example" // String | required when updating password using reset password <P> The OTP is supplied by the users MFA device 
};
apiInstance.submitPassword(tokenId, passwordRequest, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| The UUID of the Token | 
 **passwordRequest** | [**PasswordRequest**](PasswordRequest.md)| The password | 
 **veloOTP** | **String**| required when updating password using reset password &lt;P&gt; The OTP is supplied by the users MFA device  | [optional] 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unlockAccountWithToken

> unlockAccountWithToken(tokenId)

Unlock the user

&lt;p&gt;When a user is locked out of their account due to execeding the limit of login attempts&lt;/p&gt; &lt;p&gt;They can use a token to unlock their account &lt;/p&gt; &lt;p&gt;Submitting the token will unlock the account associated with the token&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.TokensApi();
let tokenId = null; // String | The UUID of the Token
apiInstance.unlockAccountWithToken(tokenId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| The UUID of the Token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## validateMFA

> AccessTokenResponse validateMFA(tokenId, validateMFARequest)

Validate an MFA Device

&lt;p&gt;Validate the user&#39;s registered MFA device with an OTP &lt;/p&gt; &lt;p&gt;The response will be different based on the token type against which the MFA is validated &lt;/p&gt; &lt;p&gt;For INVITE_MFA_USER tokens the response will be 200 and an access token will be returned i the response &lt;/p&gt; &lt;p&gt;For MFA_REGISTRATION tokens the response will be 204&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.TokensApi();
let tokenId = null; // String | The UUID of the Token
let validateMFARequest = new VeloPayments.ValidateMFARequest(); // ValidateMFARequest | The OTP generated or received by the device
apiInstance.validateMFA(tokenId, validateMFARequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| The UUID of the Token | 
 **validateMFARequest** | [**ValidateMFARequest**](ValidateMFARequest.md)| The OTP generated or received by the device | 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateOTP

> validateOTP(tokenId, validateOTPRequest)

Validate an OTP

&lt;p&gt;Validate the OTP &lt;/p&gt; &lt;p&gt;The token that was used in the request will be revoked and a new token issued &lt;/p&gt; &lt;p&gt;The new token link will be returned in a location header&lt;/p&gt; &lt;p&gt;If there are too many invalid OTP requests the token may be disabled&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.TokensApi();
let tokenId = null; // String | The UUID of the Token
let validateOTPRequest = new VeloPayments.ValidateOTPRequest(); // ValidateOTPRequest | The OTP generated and sent to the device
apiInstance.validateOTP(tokenId, validateOTPRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| The UUID of the Token | 
 **validateOTPRequest** | [**ValidateOTPRequest**](ValidateOTPRequest.md)| The OTP generated and sent to the device | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validatePassword

> ValidatePasswordResponse validatePassword(tokenId, passwordRequest)

Validate the proposed password

validate the password and return a score 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.TokensApi();
let tokenId = null; // String | The UUID of the Token
let passwordRequest = new VeloPayments.PasswordRequest(); // PasswordRequest | The password
apiInstance.validatePassword(tokenId, passwordRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**String**](.md)| The UUID of the Token | 
 **passwordRequest** | [**PasswordRequest**](PasswordRequest.md)| The password | 

### Return type

[**ValidatePasswordResponse**](ValidatePasswordResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

