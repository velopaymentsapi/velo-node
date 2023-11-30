# VeloPayments.TransactionsApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTransactionV1**](TransactionsApi.md#createTransactionV1) | **POST** /v1/transactions | Create a Transaction
[**getTransactionByIdV1**](TransactionsApi.md#getTransactionByIdV1) | **GET** /v1/transactions/{transactionId} | Get Transaction
[**getTransactions**](TransactionsApi.md#getTransactions) | **GET** /v1/transactions | Get Transactions



## createTransactionV1

> CreateTransactionResponse createTransactionV1(opts)

Create a Transaction

Create a new Transaction that can be funded

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.TransactionsApi();
let opts = {
  'createTransactionRequest': new VeloPayments.CreateTransactionRequest() // CreateTransactionRequest | 
};
apiInstance.createTransactionV1(opts, (error, data, response) => {
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
 **createTransactionRequest** | [**CreateTransactionRequest**](CreateTransactionRequest.md)|  | [optional] 

### Return type

[**CreateTransactionResponse**](CreateTransactionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTransactionByIdV1

> TransactionResponse getTransactionByIdV1(transactionId)

Get Transaction

Get Transaction by Id

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.TransactionsApi();
let transactionId = "transactionId_example"; // String | 
apiInstance.getTransactionByIdV1(transactionId, (error, data, response) => {
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
 **transactionId** | **String**|  | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransactions

> PageResourceTransactions getTransactions(opts)

Get Transactions

&lt;P&gt;Get list of Transactions&lt;/P&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.TransactionsApi();
let opts = {
  'payorId': "payorId_example", // String | 
  'transactionReference': "transactionReference_example", // String | 
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "'createdAt:asc'" // String | 
};
apiInstance.getTransactions(opts, (error, data, response) => {
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
 **payorId** | **String**|  | [optional] 
 **transactionReference** | **String**|  | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**|  | [optional] [default to &#39;createdAt:asc&#39;]

### Return type

[**PageResourceTransactions**](PageResourceTransactions.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

