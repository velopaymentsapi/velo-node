# VeloPayments.PayeeInvitationApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayeesInvitationStatus**](PayeeInvitationApi.md#getPayeesInvitationStatus) | **GET** /v1/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
[**getPayeesInvitationStatusV2**](PayeeInvitationApi.md#getPayeesInvitationStatusV2) | **GET** /v2/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
[**resendPayeeInvite**](PayeeInvitationApi.md#resendPayeeInvite) | **POST** /v1/payees/{payeeId}/invite | Resend Payee Invite
[**v2CreatePayee**](PayeeInvitationApi.md#v2CreatePayee) | **POST** /v2/payees | Intiate Payee Creation
[**v2QueryBatchStatus**](PayeeInvitationApi.md#v2QueryBatchStatus) | **GET** /v2/payees/batch/{batchId} | Query Batch Status



## getPayeesInvitationStatus

> InvitationStatusResponse getPayeesInvitationStatus(payorId)

Get Payee Invitation Status

Returns a list of payees associated with a payor, along with invitation status and grace period end date. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let payorId = null; // String | The account owner Payor ID
apiInstance.getPayeesInvitationStatus(payorId, (error, data, response) => {
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


## getPayeesInvitationStatusV2

> PagedPayeeInvitationStatusResponse getPayeesInvitationStatusV2(payorId, opts)

Get Payee Invitation Status

Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let payorId = null; // String | The account owner Payor ID
let opts = {
  'payeeId': null, // String | The UUID of the payee.
  'invitationStatus': new VeloPayments.InvitationStatus(), // InvitationStatus | The invitation status of the payees.
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25 // Number | Page size. Default is 25. Max allowable is 100.
};
apiInstance.getPayeesInvitationStatusV2(payorId, opts, (error, data, response) => {
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
 **payeeId** | [**String**](.md)| The UUID of the payee. | [optional] 
 **invitationStatus** | [**InvitationStatus**](.md)| The invitation status of the payees. | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]

### Return type

[**PagedPayeeInvitationStatusResponse**](PagedPayeeInvitationStatusResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendPayeeInvite

> InvitationStatusResponse resendPayeeInvite(payeeId, invitePayeeRequest)

Resend Payee Invite

Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined Any previous invites to the payee by this Payor will be invalidated

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let payeeId = null; // String | The UUID of the payee.
let invitePayeeRequest = new VeloPayments.InvitePayeeRequest(); // InvitePayeeRequest | 
apiInstance.resendPayeeInvite(payeeId, invitePayeeRequest, (error, data, response) => {
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
 **invitePayeeRequest** | [**InvitePayeeRequest**](InvitePayeeRequest.md)|  | 

### Return type

[**InvitationStatusResponse**](InvitationStatusResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v2CreatePayee

> CreatePayeesCSVResponse v2CreatePayee(createPayeesRequest)

Intiate Payee Creation

Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query for status (201 - Created, 400 - invalid request body, 409 - if there is a duplicate remote id within the batch / if there is a duplicate email within the batch). 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let createPayeesRequest = new VeloPayments.CreatePayeesRequest(); // CreatePayeesRequest | Post payees to create.
apiInstance.v2CreatePayee(createPayeesRequest, (error, data, response) => {
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
 **createPayeesRequest** | [**CreatePayeesRequest**](CreatePayeesRequest.md)| Post payees to create. | 

### Return type

[**CreatePayeesCSVResponse**](CreatePayeesCSVResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2QueryBatchStatus

> QueryBatchResponse v2QueryBatchStatus(batchId)

Query Batch Status

Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ). 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let batchId = null; // String | Batch Id
apiInstance.v2QueryBatchStatus(batchId, (error, data, response) => {
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
 **batchId** | [**String**](.md)| Batch Id | 

### Return type

[**QueryBatchResponse**](QueryBatchResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

