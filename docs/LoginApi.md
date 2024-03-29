# VeloPayments.LoginApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logout**](LoginApi.md#logout) | **POST** /v1/logout | Logout
[**resetPassword**](LoginApi.md#resetPassword) | **POST** /v1/password/reset | Reset password
[**validateAccessToken**](LoginApi.md#validateAccessToken) | **POST** /v1/validate | validate
[**veloAuth**](LoginApi.md#veloAuth) | **POST** /v1/authenticate | Authentication endpoint



## logout

> logout()

Logout

&lt;p&gt;Given a valid access token in the header then log out the authenticated user or client &lt;/p&gt; &lt;p&gt;Will revoke the token&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.LoginApi();
apiInstance.logout((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetPassword

> resetPassword(resetPasswordRequest)

Reset password

&lt;p&gt;Reset password &lt;/p&gt; &lt;p&gt;An email with an embedded link will be sent to the receipient of the email address &lt;/p&gt; &lt;p&gt;The link will contain a token to be used for resetting the password &lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.LoginApi();
let resetPasswordRequest = new VeloPayments.ResetPasswordRequest(); // ResetPasswordRequest | An Email address to send the reset password link to
apiInstance.resetPassword(resetPasswordRequest, (error, data, response) => {
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
 **resetPasswordRequest** | [**ResetPasswordRequest**](ResetPasswordRequest.md)| An Email address to send the reset password link to | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateAccessToken

> AccessTokenResponse validateAccessToken(accessTokenValidationRequest, opts)

validate

&lt;p&gt;The second part of login involves validating using an MFA device&lt;/p&gt; &lt;p&gt;An access token with PRE_AUTH authorities is required&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.LoginApi();
let accessTokenValidationRequest = new VeloPayments.AccessTokenValidationRequest(); // AccessTokenValidationRequest | An OTP from the user's registered MFA Device 
let opts = {
  'authorization': "authorization_example" // String | Bearer token authorization leg of validate
};
apiInstance.validateAccessToken(accessTokenValidationRequest, opts, (error, data, response) => {
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
 **accessTokenValidationRequest** | [**AccessTokenValidationRequest**](AccessTokenValidationRequest.md)| An OTP from the user&#39;s registered MFA Device  | 
 **authorization** | **String**| Bearer token authorization leg of validate | [optional] 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## veloAuth

> AuthResponse veloAuth(opts)

Authentication endpoint

&lt;p&gt;Use this endpoint to obtain an access token for calling Velo Payments APIs. &lt;/p&gt; &lt;p&gt;You need your API key and API secret issued by Velo&lt;/p&gt; &lt;p&gt;To login and get an access token the API key and API secret must be Base64 encoded by concatenating them with a colon between them&lt;/p&gt; &lt;p&gt;e.g. Given an ApiKey: 44a9537d-d55d-4b47-8082-14061c2bcdd8 and ApiSecret: c396b26b-137a-44fd-87f5-34631f8fd529&lt;/p&gt; &lt;p&gt;Using a Base64 encode function Base64Encoder().encode(\&quot;44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529\&quot;)&lt;/p&gt; &lt;p&gt;Included as a Basic Authorization header: -H \&quot;Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ&#x3D;&#x3D;\&quot; &lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new VeloPayments.LoginApi();
let opts = {
  'grantType': "'client_credentials'" // String | OAuth grant type. Should use 'client_credentials'
};
apiInstance.veloAuth(opts, (error, data, response) => {
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
 **grantType** | **String**| OAuth grant type. Should use &#39;client_credentials&#39; | [optional] [default to &#39;client_credentials&#39;]

### Return type

[**AuthResponse**](AuthResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

