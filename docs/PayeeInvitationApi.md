# VeloPayments.PayeeInvitationApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayeesInvitationStatusV1**](PayeeInvitationApi.md#getPayeesInvitationStatusV1) | **GET** /v1/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
[**getPayeesInvitationStatusV2**](PayeeInvitationApi.md#getPayeesInvitationStatusV2) | **GET** /v2/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
[**getPayeesInvitationStatusV3**](PayeeInvitationApi.md#getPayeesInvitationStatusV3) | **GET** /v3/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
[**queryBatchStatusV2**](PayeeInvitationApi.md#queryBatchStatusV2) | **GET** /v2/payees/batch/{batchId} | Query Batch Status
[**queryBatchStatusV3**](PayeeInvitationApi.md#queryBatchStatusV3) | **GET** /v3/payees/batch/{batchId} | Query Batch Status
[**resendPayeeInviteV1**](PayeeInvitationApi.md#resendPayeeInviteV1) | **POST** /v1/payees/{payeeId}/invite | Resend Payee Invite
[**resendPayeeInviteV3**](PayeeInvitationApi.md#resendPayeeInviteV3) | **POST** /v3/payees/{payeeId}/invite | Resend Payee Invite
[**v2CreatePayee**](PayeeInvitationApi.md#v2CreatePayee) | **POST** /v2/payees | Initiate Payee Creation
[**v3CreatePayee**](PayeeInvitationApi.md#v3CreatePayee) | **POST** /v3/payees | Initiate Payee Creation



## getPayeesInvitationStatusV1

> InvitationStatusResponse getPayeesInvitationStatusV1(payorId)

Get Payee Invitation Status

&lt;p&gt;Returns a list of payees associated with a payor, along with invitation status and grace period end date.&lt;/p&gt; &lt;p&gt;Please use V3 instead&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let payorId = 9ac75325-5dcd-42d5-b992-175d7e0a035e; // String | The account owner Payor ID
apiInstance.getPayeesInvitationStatusV1(payorId, (error, data, response) => {
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

&lt;p&gt;Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.&lt;/p&gt; &lt;p&gt;Please use V3 instead&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let payorId = 9ac75325-5dcd-42d5-b992-175d7e0a035e; // String | The account owner Payor ID
let opts = {
  'payeeId': 2aa5d7e0-2ecb-403f-8494-1865ed0454e9, // String | The UUID of the payee.
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


## getPayeesInvitationStatusV3

> PagedPayeeInvitationStatusResponse2 getPayeesInvitationStatusV3(payorId, opts)

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
let payorId = 9ac75325-5dcd-42d5-b992-175d7e0a035e; // String | The account owner Payor ID
let opts = {
  'payeeId': 2aa5d7e0-2ecb-403f-8494-1865ed0454e9, // String | The UUID of the payee.
  'invitationStatus': new VeloPayments.InvitationStatus(), // InvitationStatus | The invitation status of the payees.
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25 // Number | Page size. Default is 25. Max allowable is 100.
};
apiInstance.getPayeesInvitationStatusV3(payorId, opts, (error, data, response) => {
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

[**PagedPayeeInvitationStatusResponse2**](PagedPayeeInvitationStatusResponse2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryBatchStatusV2

> QueryBatchResponse queryBatchStatusV2(batchId)

Query Batch Status

&lt;p&gt;Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).&lt;/p&gt; &lt;p&gt;Please use V3 instead&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let batchId = null; // String | Batch Id
apiInstance.queryBatchStatusV2(batchId, (error, data, response) => {
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


## queryBatchStatusV3

> QueryBatchResponse2 queryBatchStatusV3(batchId)

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
apiInstance.queryBatchStatusV3(batchId, (error, data, response) => {
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

[**QueryBatchResponse2**](QueryBatchResponse2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendPayeeInviteV1

> resendPayeeInviteV1(payeeId, invitePayeeRequest)

Resend Payee Invite

&lt;p&gt;Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined&lt;/p&gt; &lt;p&gt;Any previous invites to the payee by this Payor will be invalidated&lt;/p&gt; &lt;p&gt;Deprecated. Please use v3 instead&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let invitePayeeRequest = new VeloPayments.InvitePayeeRequest(); // InvitePayeeRequest | Provide Payor Id in body of request
apiInstance.resendPayeeInviteV1(payeeId, invitePayeeRequest, (error, data, response) => {
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
 **payeeId** | [**String**](.md)| The UUID of the payee. | 
 **invitePayeeRequest** | [**InvitePayeeRequest**](InvitePayeeRequest.md)| Provide Payor Id in body of request | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resendPayeeInviteV3

> resendPayeeInviteV3(payeeId, invitePayeeRequest2)

Resend Payee Invite

&lt;p&gt;Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined&lt;/p&gt; &lt;p&gt;Any previous invites to the payee by this Payor will be invalidated&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let invitePayeeRequest2 = new VeloPayments.InvitePayeeRequest2(); // InvitePayeeRequest2 | Provide Payor Id in body of request
apiInstance.resendPayeeInviteV3(payeeId, invitePayeeRequest2, (error, data, response) => {
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
 **payeeId** | [**String**](.md)| The UUID of the payee. | 
 **invitePayeeRequest2** | [**InvitePayeeRequest2**](InvitePayeeRequest2.md)| Provide Payor Id in body of request | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v2CreatePayee

> CreatePayeesCSVResponse v2CreatePayee(opts)

Initiate Payee Creation

Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query for status (201 - Created, 400 - invalid request body, 409 - if there is a duplicate remote id within the batch / if there is a duplicate email within the batch). 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let opts = {
  'createPayeesRequest': new VeloPayments.CreatePayeesRequest() // CreatePayeesRequest | Post payees to create.
};
apiInstance.v2CreatePayee(opts, (error, data, response) => {
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
 **createPayeesRequest** | [**CreatePayeesRequest**](CreatePayeesRequest.md)| Post payees to create. | [optional] 

### Return type

[**CreatePayeesCSVResponse**](CreatePayeesCSVResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v3CreatePayee

> CreatePayeesCSVResponse2 v3CreatePayee(opts)

Initiate Payee Creation

Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query for status (201 - Created, 400 - invalid request body, 409 - if there is a duplicate remote id within the batch / if there is a duplicate email within the batch). 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let opts = {
  'createPayeesRequest2': new VeloPayments.CreatePayeesRequest2() // CreatePayeesRequest2 | Post payees to create.
};
apiInstance.v3CreatePayee(opts, (error, data, response) => {
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
 **createPayeesRequest2** | [**CreatePayeesRequest2**](CreatePayeesRequest2.md)| Post payees to create. | [optional] 

### Return type

[**CreatePayeesCSVResponse2**](CreatePayeesCSVResponse2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

