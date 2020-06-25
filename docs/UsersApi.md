# VeloPayments.UsersApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserByIdV2**](UsersApi.md#deleteUserByIdV2) | **DELETE** /v2/users/{userId} | Delete a User
[**disableUserV2**](UsersApi.md#disableUserV2) | **POST** /v2/users/{userId}/disable | Disable a User
[**enableUserV2**](UsersApi.md#enableUserV2) | **POST** /v2/users/{userId}/enable | Enable a User
[**getSelf**](UsersApi.md#getSelf) | **GET** /v2/users/self | Get Self
[**getUserByIdV2**](UsersApi.md#getUserByIdV2) | **GET** /v2/users/{userId} | Get User
[**inviteUser**](UsersApi.md#inviteUser) | **POST** /v2/users/invite | Invite a User
[**listUsers**](UsersApi.md#listUsers) | **GET** /v2/users | List Users
[**registerSms**](UsersApi.md#registerSms) | **POST** /v2/users/registration/sms | Register SMS Number
[**resendToken**](UsersApi.md#resendToken) | **POST** /v2/users/{userId}/tokens | Resend a token
[**roleUpdate**](UsersApi.md#roleUpdate) | **POST** /v2/users/{userId}/roleUpdate | Update User Role
[**unlockUserV2**](UsersApi.md#unlockUserV2) | **POST** /v2/users/{userId}/unlock | Unlock a User
[**unregisterMFA**](UsersApi.md#unregisterMFA) | **POST** /v2/users/{userId}/mfa/unregister | Unregister MFA for the user
[**unregisterMFAForSelf**](UsersApi.md#unregisterMFAForSelf) | **POST** /v2/users/self/mfa/unregister | Unregister MFA for Self
[**updatePasswordSelf**](UsersApi.md#updatePasswordSelf) | **POST** /v2/users/self/password | Update Password for self
[**userDetailsUpdate**](UsersApi.md#userDetailsUpdate) | **POST** /v2/users/{userId}/userDetailsUpdate | Update User Details
[**userDetailsUpdateForSelf**](UsersApi.md#userDetailsUpdateForSelf) | **POST** /v2/users/self/userDetailsUpdate | Update User Details for self
[**validatePasswordSelf**](UsersApi.md#validatePasswordSelf) | **POST** /v2/users/self/password/validate | Validate the proposed password



## deleteUserByIdV2

> deleteUserByIdV2(userId)

Delete a User

Delete User by Id. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let userId = null; // String | The UUID of the User.
apiInstance.deleteUserByIdV2(userId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## disableUserV2

> disableUserV2(userId)

Disable a User

&lt;p&gt;If a user is enabled this endpoint will disable them &lt;/p&gt; &lt;p&gt;The invoker must have the appropriate permission &lt;/p&gt; &lt;p&gt;A user cannot disable themself &lt;/p&gt; &lt;p&gt;When a user is disabled any active access tokens will be revoked and the user will not be able to log in&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let userId = null; // String | The UUID of the User.
apiInstance.disableUserV2(userId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## enableUserV2

> enableUserV2(userId)

Enable a User

&lt;p&gt;If a user has been disabled this endpoints will enable them &lt;/p&gt; &lt;p&gt;The invoker must have the appropriate permission &lt;/p&gt; &lt;p&gt;A user cannot enable themself &lt;/p&gt; &lt;p&gt;If the user is a payor user and the payor is disabled this operation is not allowed&lt;/p&gt; &lt;p&gt;If enabling a payor user would breach the limit for master admin payor users the request will be rejected &lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let userId = null; // String | The UUID of the User.
apiInstance.enableUserV2(userId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSelf

> UserResponse getSelf()

Get Self

Get the user&#39;s details 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
apiInstance.getSelf((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserByIdV2

> UserResponse getUserByIdV2(userId)

Get User

Get a Single User by Id. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let userId = null; // String | The UUID of the User.
apiInstance.getUserByIdV2(userId, (error, data, response) => {
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
 **userId** | [**String**](.md)| The UUID of the User. | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inviteUser

> inviteUser(inviteUserRequest)

Invite a User

Create a User and invite them to the system 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let inviteUserRequest = new VeloPayments.InviteUserRequest(); // InviteUserRequest | Details of User to invite
apiInstance.inviteUser(inviteUserRequest, (error, data, response) => {
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
 **inviteUserRequest** | [**InviteUserRequest**](InviteUserRequest.md)| Details of User to invite | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listUsers

> PagedUserResponse listUsers(opts)

List Users

Get a paginated response listing the Users

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let opts = {
  'type': new VeloPayments.UserType(), // UserType | The Type of the User.
  'status': new VeloPayments.UserStatus(), // UserStatus | The status of the User.
  'entityId': null, // String | The entityId of the User.
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "'email:asc'" // String | List of sort fields (e.g. ?sort=email:asc,lastName:asc) Default is email:asc 'name' The supported sort fields are - email, lastNmae. 
};
apiInstance.listUsers(opts, (error, data, response) => {
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
 **type** | [**UserType**](.md)| The Type of the User. | [optional] 
 **status** | [**UserStatus**](.md)| The status of the User. | [optional] 
 **entityId** | [**String**](.md)| The entityId of the User. | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;email:asc,lastName:asc) Default is email:asc &#39;name&#39; The supported sort fields are - email, lastNmae.  | [optional] [default to &#39;email:asc&#39;]

### Return type

[**PagedUserResponse**](PagedUserResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerSms

> registerSms(registerSmsRequest)

Register SMS Number

&lt;p&gt;Register an Sms number and send an OTP to it &lt;/p&gt; &lt;p&gt;Used for manual verification of a user &lt;/p&gt; &lt;p&gt;The backoffice user initiates the request to send the OTP to the user&#39;s sms &lt;/p&gt; &lt;p&gt;The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let registerSmsRequest = new VeloPayments.RegisterSmsRequest(); // RegisterSmsRequest | a SMS Number to send an OTP to
apiInstance.registerSms(registerSmsRequest, (error, data, response) => {
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
 **registerSmsRequest** | [**RegisterSmsRequest**](RegisterSmsRequest.md)| a SMS Number to send an OTP to | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

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

let apiInstance = new VeloPayments.UsersApi();
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


## roleUpdate

> roleUpdate(userId, roleUpdateRequest)

Update User Role

&lt;p&gt;Update the user&#39;s Role&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let userId = null; // String | The UUID of the User.
let roleUpdateRequest = new VeloPayments.RoleUpdateRequest(); // RoleUpdateRequest | The Role to change to
apiInstance.roleUpdate(userId, roleUpdateRequest, (error, data, response) => {
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
 **roleUpdateRequest** | [**RoleUpdateRequest**](RoleUpdateRequest.md)| The Role to change to | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unlockUserV2

> unlockUserV2(userId)

Unlock a User

If a user is locked this endpoint will unlock them 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let userId = null; // String | The UUID of the User.
apiInstance.unlockUserV2(userId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unregisterMFA

> unregisterMFA(userId, unregisterMFARequest)

Unregister MFA for the user

&lt;p&gt;Unregister the MFA device for the user &lt;/p&gt; &lt;p&gt;If the user does not require further verification then a register new MFA device token will be sent to them via their email address&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let userId = null; // String | The UUID of the User.
let unregisterMFARequest = new VeloPayments.UnregisterMFARequest(); // UnregisterMFARequest | The MFA Type to unregister
apiInstance.unregisterMFA(userId, unregisterMFARequest, (error, data, response) => {
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
 **unregisterMFARequest** | [**UnregisterMFARequest**](UnregisterMFARequest.md)| The MFA Type to unregister | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unregisterMFAForSelf

> unregisterMFAForSelf(selfMFATypeUnregisterRequest)

Unregister MFA for Self

&lt;p&gt;Unregister the MFA device for the user &lt;/p&gt; &lt;p&gt;If the user does not require further verification then a register new MFA device token will be sent to them via their email address&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let selfMFATypeUnregisterRequest = new VeloPayments.SelfMFATypeUnregisterRequest(); // SelfMFATypeUnregisterRequest | The MFA Type to unregister
apiInstance.unregisterMFAForSelf(selfMFATypeUnregisterRequest, (error, data, response) => {
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
 **selfMFATypeUnregisterRequest** | [**SelfMFATypeUnregisterRequest**](SelfMFATypeUnregisterRequest.md)| The MFA Type to unregister | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePasswordSelf

> updatePasswordSelf(selfUpdatePasswordRequest)

Update Password for self

Update password for self 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let selfUpdatePasswordRequest = new VeloPayments.SelfUpdatePasswordRequest(); // SelfUpdatePasswordRequest | The password
apiInstance.updatePasswordSelf(selfUpdatePasswordRequest, (error, data, response) => {
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
 **selfUpdatePasswordRequest** | [**SelfUpdatePasswordRequest**](SelfUpdatePasswordRequest.md)| The password | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userDetailsUpdate

> userDetailsUpdate(userId, userDetailsUpdateRequest)

Update User Details

&lt;p&gt;Update the profile details for the given user&lt;/p&gt; &lt;p&gt;When updating Payor users with the role of payor.master_admin a verificationCode is required&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let userId = null; // String | The UUID of the User.
let userDetailsUpdateRequest = new VeloPayments.UserDetailsUpdateRequest(); // UserDetailsUpdateRequest | The details of the user to update
apiInstance.userDetailsUpdate(userId, userDetailsUpdateRequest, (error, data, response) => {
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
 **userDetailsUpdateRequest** | [**UserDetailsUpdateRequest**](UserDetailsUpdateRequest.md)| The details of the user to update | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userDetailsUpdateForSelf

> userDetailsUpdateForSelf(payeeUserSelfUpdateRequest)

Update User Details for self

&lt;p&gt;Update the profile details for the given user&lt;/p&gt; &lt;p&gt;Only Payee user types are supported&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let payeeUserSelfUpdateRequest = new VeloPayments.PayeeUserSelfUpdateRequest(); // PayeeUserSelfUpdateRequest | The details of the user to update
apiInstance.userDetailsUpdateForSelf(payeeUserSelfUpdateRequest, (error, data, response) => {
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
 **payeeUserSelfUpdateRequest** | [**PayeeUserSelfUpdateRequest**](PayeeUserSelfUpdateRequest.md)| The details of the user to update | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validatePasswordSelf

> ValidatePasswordResponse validatePasswordSelf(passwordRequest)

Validate the proposed password

validate the password and return a score 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.UsersApi();
let passwordRequest = new VeloPayments.PasswordRequest(); // PasswordRequest | The password
apiInstance.validatePasswordSelf(passwordRequest, (error, data, response) => {
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
 **passwordRequest** | [**PasswordRequest**](PasswordRequest.md)| The password | 

### Return type

[**ValidatePasswordResponse**](ValidatePasswordResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

