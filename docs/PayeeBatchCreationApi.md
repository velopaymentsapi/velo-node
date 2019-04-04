# VeloPaymentsApIs.PayeeBatchCreationApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2CreatePayee**](PayeeBatchCreationApi.md#v2CreatePayee) | **POST** /v2/payees | Intiate Payee Creation
[**v2QueryBatchStatus**](PayeeBatchCreationApi.md#v2QueryBatchStatus) | **GET** /v2/payees/batch/{batchId} | Query Batch Status


<a name="v2CreatePayee"></a>
# **v2CreatePayee**
> CreatePayeesCSVResponse v2CreatePayee(createPayeesRequest)

Intiate Payee Creation

Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query for status (201 - Created, 400 - invalid request body, 409 - if there is a duplicate remote id within the batch / if there is a duplicate email within the batch). 

### Example
```javascript
import VeloPaymentsApIs from 'velo-payments';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayeeBatchCreationApi();
let createPayeesRequest = new VeloPaymentsApIs.CreatePayeesRequest(); // CreatePayeesRequest | Post payees to create.
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

<a name="v2QueryBatchStatus"></a>
# **v2QueryBatchStatus**
> QueryBatchResponse v2QueryBatchStatus(batchId)

Query Batch Status

Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ). 

### Example
```javascript
import VeloPaymentsApIs from 'velo-payments';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayeeBatchCreationApi();
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

