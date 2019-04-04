# VeloPaymentsApIs.PayeeInvitationApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayor**](PayeeInvitationApi.md#getPayor) | **GET** /v1/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
[**sendPayeeInvite**](PayeeInvitationApi.md#sendPayeeInvite) | **POST** /v1/payees/{payeeId}/invite | Invite Payee


<a name="getPayor"></a>
# **getPayor**
> InvitationStatusResponse getPayor(payorId)

Get Payee Invitation Status

Returns a list of payees associated with a payor, along with invitation status and grace period end date. 

### Example
```javascript
import VeloPaymentsApIs from 'velo-payments';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayeeInvitationApi();
let payorId = null; // String | The account owner Payor ID
apiInstance.getPayor(payorId, (error, data, response) => {
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
 **payorId** | [**String**](.md)| The account owner Payor ID | 

### Return type

[**InvitationStatusResponse**](InvitationStatusResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sendPayeeInvite"></a>
# **sendPayeeInvite**
> InvitationStatusResponse sendPayeeInvite(payeeId, payeeInviteRequest)

Invite Payee

Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined Any previous invites to the payee by this Payor will be invalidated

### Example
```javascript
import VeloPaymentsApIs from 'velo-payments';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayeeInvitationApi();
let payeeId = null; // String | The UUID of the payee.
let payeeInviteRequest = new VeloPaymentsApIs.PayeeInviteRequest(); // PayeeInviteRequest | 
apiInstance.sendPayeeInvite(payeeId, payeeInviteRequest, (error, data, response) => {
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
 **payeeId** | [**String**](.md)| The UUID of the payee. | 
 **payeeInviteRequest** | [**PayeeInviteRequest**](PayeeInviteRequest.md)|  | 

### Return type

[**InvitationStatusResponse**](InvitationStatusResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

