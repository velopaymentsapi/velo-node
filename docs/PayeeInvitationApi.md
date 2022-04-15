# VeloPayments.PayeeInvitationApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayeeV3**](PayeeInvitationApi.md#createPayeeV3) | **POST** /v3/payees | Initiate Payee Creation
[**getPayeesInvitationStatusV3**](PayeeInvitationApi.md#getPayeesInvitationStatusV3) | **GET** /v3/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
[**getPayeesInvitationStatusV4**](PayeeInvitationApi.md#getPayeesInvitationStatusV4) | **GET** /v4/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
[**queryBatchStatusV3**](PayeeInvitationApi.md#queryBatchStatusV3) | **GET** /v3/payees/batch/{batchId} | Query Batch Status
[**queryBatchStatusV4**](PayeeInvitationApi.md#queryBatchStatusV4) | **GET** /v4/payees/batch/{batchId} | Query Batch Status
[**resendPayeeInviteV3**](PayeeInvitationApi.md#resendPayeeInviteV3) | **POST** /v3/payees/{payeeId}/invite | Resend Payee Invite
[**resendPayeeInviteV4**](PayeeInvitationApi.md#resendPayeeInviteV4) | **POST** /v4/payees/{payeeId}/invite | Resend Payee Invite
[**v4CreatePayee**](PayeeInvitationApi.md#v4CreatePayee) | **POST** /v4/payees | Initiate Payee Creation



## createPayeeV3

> CreatePayeesCSVResponseV3 createPayeeV3(opts)

Initiate Payee Creation

&lt;p&gt;Use v4 instead&lt;/p&gt; Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a 400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and that provided for another payee within the same batch). The validation at this stage is intra-batch only. Validation against payees who have already been invited occurs subsequently during processing of the batch. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let opts = {
  'createPayeesRequestV3': new VeloPayments.CreatePayeesRequestV3() // CreatePayeesRequestV3 | Post payees to create.
};
apiInstance.createPayeeV3(opts, (error, data, response) => {
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
 **createPayeesRequestV3** | [**CreatePayeesRequestV3**](CreatePayeesRequestV3.md)| Post payees to create. | [optional] 

### Return type

[**CreatePayeesCSVResponseV3**](CreatePayeesCSVResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## getPayeesInvitationStatusV3

> PagedPayeeInvitationStatusResponseV3 getPayeesInvitationStatusV3(payorId, opts)

Get Payee Invitation Status

&lt;p&gt;Use v4 instead&lt;/p&gt; &lt;p&gt;Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.&lt;/p&gt; 

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
  'invitationStatus': new VeloPayments.InvitationStatusV4(), // InvitationStatusV4 | The invitation status of the payees.
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
 **payorId** | **String**| The account owner Payor ID | 
 **payeeId** | **String**| The UUID of the payee. | [optional] 
 **invitationStatus** | [**InvitationStatusV4**](.md)| The invitation status of the payees. | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]

### Return type

[**PagedPayeeInvitationStatusResponseV3**](PagedPayeeInvitationStatusResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPayeesInvitationStatusV4

> PagedPayeeInvitationStatusResponseV4 getPayeesInvitationStatusV4(payorId, opts)

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
  'invitationStatus': new VeloPayments.InvitationStatusV4(), // InvitationStatusV4 | The invitation status of the payees.
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25 // Number | Page size. Default is 25. Max allowable is 100.
};
apiInstance.getPayeesInvitationStatusV4(payorId, opts, (error, data, response) => {
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
 **payorId** | **String**| The account owner Payor ID | 
 **payeeId** | **String**| The UUID of the payee. | [optional] 
 **invitationStatus** | [**InvitationStatusV4**](.md)| The invitation status of the payees. | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]

### Return type

[**PagedPayeeInvitationStatusResponseV4**](PagedPayeeInvitationStatusResponseV4.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryBatchStatusV3

> QueryBatchResponseV3 queryBatchStatusV3(batchId)

Query Batch Status

&lt;p&gt;Use v4 instead&lt;/p&gt; Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ). 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let batchId = "batchId_example"; // String | Batch Id
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
 **batchId** | **String**| Batch Id | 

### Return type

[**QueryBatchResponseV3**](QueryBatchResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryBatchStatusV4

> QueryBatchResponseV4 queryBatchStatusV4(batchId)

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
let batchId = "batchId_example"; // String | Batch Id
apiInstance.queryBatchStatusV4(batchId, (error, data, response) => {
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
 **batchId** | **String**| Batch Id | 

### Return type

[**QueryBatchResponseV4**](QueryBatchResponseV4.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendPayeeInviteV3

> resendPayeeInviteV3(payeeId, invitePayeeRequestV3)

Resend Payee Invite

&lt;p&gt;Use v4 instead&lt;/p&gt; &lt;p&gt;Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined&lt;/p&gt; &lt;p&gt;Any previous invites to the payee by this Payor will be invalidated&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let invitePayeeRequestV3 = new VeloPayments.InvitePayeeRequestV3(); // InvitePayeeRequestV3 | Provide Payor Id in body of request
apiInstance.resendPayeeInviteV3(payeeId, invitePayeeRequestV3, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **invitePayeeRequestV3** | [**InvitePayeeRequestV3**](InvitePayeeRequestV3.md)| Provide Payor Id in body of request | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resendPayeeInviteV4

> resendPayeeInviteV4(payeeId, invitePayeeRequestV4)

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
let invitePayeeRequestV4 = new VeloPayments.InvitePayeeRequestV4(); // InvitePayeeRequestV4 | Provide Payor Id in body of request
apiInstance.resendPayeeInviteV4(payeeId, invitePayeeRequestV4, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **invitePayeeRequestV4** | [**InvitePayeeRequestV4**](InvitePayeeRequestV4.md)| Provide Payor Id in body of request | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v4CreatePayee

> CreatePayeesCSVResponseV4 v4CreatePayee(opts)

Initiate Payee Creation

Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a 400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and that provided for another payee within the same batch). The validation at this stage is intra-batch only. Validation against payees who have already been invited occurs subsequently during processing of the batch. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeeInvitationApi();
let opts = {
  'createPayeesRequestV4': new VeloPayments.CreatePayeesRequestV4() // CreatePayeesRequestV4 | Post payees to create.
};
apiInstance.v4CreatePayee(opts, (error, data, response) => {
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
 **createPayeesRequestV4** | [**CreatePayeesRequestV4**](CreatePayeesRequestV4.md)| Post payees to create. | [optional] 

### Return type

[**CreatePayeesCSVResponseV4**](CreatePayeesCSVResponseV4.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

