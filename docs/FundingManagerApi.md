# VeloPayments.FundingManagerApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAchFundingRequest**](FundingManagerApi.md#createAchFundingRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/achFundingRequest | Create Funding Request
[**createFundingRequest**](FundingManagerApi.md#createFundingRequest) | **POST** /v2/sourceAccounts/{sourceAccountId}/fundingRequest | Create Funding Request
[**getFundingAccount**](FundingManagerApi.md#getFundingAccount) | **GET** /v1/fundingAccounts/{fundingAccountId} | Get Funding Account
[**getFundingAccounts**](FundingManagerApi.md#getFundingAccounts) | **GET** /v1/fundingAccounts | Get Funding Accounts
[**getFundingsV1**](FundingManagerApi.md#getFundingsV1) | **GET** /v1/paymentaudit/fundings | Get Fundings for Payor
[**getSourceAccount**](FundingManagerApi.md#getSourceAccount) | **GET** /v1/sourceAccounts/{sourceAccountId} | Get details about given source account.
[**getSourceAccountV2**](FundingManagerApi.md#getSourceAccountV2) | **GET** /v2/sourceAccounts/{sourceAccountId} | Get details about given source account.
[**getSourceAccounts**](FundingManagerApi.md#getSourceAccounts) | **GET** /v1/sourceAccounts | Get list of source accounts
[**getSourceAccountsV2**](FundingManagerApi.md#getSourceAccountsV2) | **GET** /v2/sourceAccounts | Get list of source accounts
[**listFundingAuditDeltas**](FundingManagerApi.md#listFundingAuditDeltas) | **GET** /v1/deltas/fundings | Get Funding Audit Delta
[**setNotificationsRequest**](FundingManagerApi.md#setNotificationsRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/notifications | Set notifications
[**transferFunds**](FundingManagerApi.md#transferFunds) | **POST** /v2/sourceAccounts/{sourceAccountId}/transfers | Transfer Funds between source accounts



## createAchFundingRequest

> createAchFundingRequest(sourceAccountId, fundingRequestV1)

Create Funding Request

Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let sourceAccountId = null; // String | Source account id
let fundingRequestV1 = new VeloPayments.FundingRequestV1(); // FundingRequestV1 | Body to included ammount to be funded
apiInstance.createAchFundingRequest(sourceAccountId, fundingRequestV1, (error, data, response) => {
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
 **sourceAccountId** | [**String**](.md)| Source account id | 
 **fundingRequestV1** | [**FundingRequestV1**](FundingRequestV1.md)| Body to included ammount to be funded | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFundingRequest

> createFundingRequest(sourceAccountId, fundingRequestV2)

Create Funding Request

Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let sourceAccountId = null; // String | Source account id
let fundingRequestV2 = new VeloPayments.FundingRequestV2(); // FundingRequestV2 | Body to included ammount to be funded
apiInstance.createFundingRequest(sourceAccountId, fundingRequestV2, (error, data, response) => {
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
 **sourceAccountId** | [**String**](.md)| Source account id | 
 **fundingRequestV2** | [**FundingRequestV2**](FundingRequestV2.md)| Body to included ammount to be funded | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFundingAccount

> FundingAccountResponse getFundingAccount(fundingAccountId, opts)

Get Funding Account

Get Funding Account by ID

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let fundingAccountId = null; // String | 
let opts = {
  'sensitive': false // Boolean | 
};
apiInstance.getFundingAccount(fundingAccountId, opts, (error, data, response) => {
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
 **fundingAccountId** | [**String**](.md)|  | 
 **sensitive** | **Boolean**|  | [optional] [default to false]

### Return type

[**FundingAccountResponse**](FundingAccountResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFundingAccounts

> ListFundingAccountsResponse getFundingAccounts(opts)

Get Funding Accounts

Get the source accounts.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let opts = {
  'payorId': null, // String | 
  'sourceAccountId': null, // String | 
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
  'sort': "'accountName:asc'", // String | 
  'sensitive': false // Boolean | 
};
apiInstance.getFundingAccounts(opts, (error, data, response) => {
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
 **payorId** | [**String**](.md)|  | [optional] 
 **sourceAccountId** | [**String**](.md)|  | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]
 **sort** | **String**|  | [optional] [default to &#39;accountName:asc&#39;]
 **sensitive** | **Boolean**|  | [optional] [default to false]

### Return type

[**ListFundingAccountsResponse**](ListFundingAccountsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFundingsV1

> GetFundingsResponse getFundingsV1(opts)

Get Fundings for Payor

Get a list of Fundings for a payor. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let opts = {
  'payorId': null, // String | The account owner Payor ID
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
  'sort': "sort_example" // String | List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc``` Default is no sort. The supported sort fields are: dateTime and amount. 
};
apiInstance.getFundingsV1(opts, (error, data, response) => {
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
 **payorId** | [**String**](.md)| The account owner Payor ID | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]
 **sort** | **String**| List of sort fields. Example: &#x60;&#x60;&#x60;?sort&#x3D;destinationCurrency:asc,destinationAmount:asc&#x60;&#x60;&#x60; Default is no sort. The supported sort fields are: dateTime and amount.  | [optional] 

### Return type

[**GetFundingsResponse**](GetFundingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSourceAccount

> SourceAccountResponse getSourceAccount(sourceAccountId)

Get details about given source account.

Get details about given source account.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let sourceAccountId = null; // String | Source account id
apiInstance.getSourceAccount(sourceAccountId, (error, data, response) => {
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
 **sourceAccountId** | [**String**](.md)| Source account id | 

### Return type

[**SourceAccountResponse**](SourceAccountResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSourceAccountV2

> SourceAccountResponseV2 getSourceAccountV2(sourceAccountId)

Get details about given source account.

Get details about given source account.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let sourceAccountId = null; // String | Source account id
apiInstance.getSourceAccountV2(sourceAccountId, (error, data, response) => {
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
 **sourceAccountId** | [**String**](.md)| Source account id | 

### Return type

[**SourceAccountResponseV2**](SourceAccountResponseV2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSourceAccounts

> ListSourceAccountResponse getSourceAccounts(opts)

Get list of source accounts

List source accounts.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let opts = {
  'physicalAccountName': "physicalAccountName_example", // String | Physical Account Name
  'payorId': null, // String | The account owner Payor ID
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
  'sort': "sort_example" // String | Sort String
};
apiInstance.getSourceAccounts(opts, (error, data, response) => {
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
 **physicalAccountName** | **String**| Physical Account Name | [optional] 
 **payorId** | [**String**](.md)| The account owner Payor ID | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]
 **sort** | **String**| Sort String | [optional] 

### Return type

[**ListSourceAccountResponse**](ListSourceAccountResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSourceAccountsV2

> ListSourceAccountResponseV2 getSourceAccountsV2(opts)

Get list of source accounts

List source accounts.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let opts = {
  'physicalAccountName': "physicalAccountName_example", // String | Physical Account Name
  'payorId': null, // String | The account owner Payor ID
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
  'sort': "sort_example" // String | Sort String
};
apiInstance.getSourceAccountsV2(opts, (error, data, response) => {
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
 **physicalAccountName** | **String**| Physical Account Name | [optional] 
 **payorId** | [**String**](.md)| The account owner Payor ID | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]
 **sort** | **String**| Sort String | [optional] 

### Return type

[**ListSourceAccountResponseV2**](ListSourceAccountResponseV2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFundingAuditDeltas

> PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse listFundingAuditDeltas(payorId, updatedSince, opts)

Get Funding Audit Delta

Get funding audit deltas for a payor

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let payorId = null; // String | 
let updatedSince = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let opts = {
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25 // Number | Page size. Default is 25. Max allowable is 100.
};
apiInstance.listFundingAuditDeltas(payorId, updatedSince, opts, (error, data, response) => {
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
 **payorId** | [**String**](.md)|  | 
 **updatedSince** | **Date**|  | 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]

### Return type

[**PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse**](PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setNotificationsRequest

> setNotificationsRequest(sourceAccountId, setNotificationsRequest)

Set notifications

Set notifications for a given source account

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let sourceAccountId = null; // String | Source account id
let setNotificationsRequest = new VeloPayments.SetNotificationsRequest(); // SetNotificationsRequest | Body to included minimum balance to set
apiInstance.setNotificationsRequest(sourceAccountId, setNotificationsRequest, (error, data, response) => {
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
 **sourceAccountId** | [**String**](.md)| Source account id | 
 **setNotificationsRequest** | [**SetNotificationsRequest**](SetNotificationsRequest.md)| Body to included minimum balance to set | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transferFunds

> transferFunds(sourceAccountId, transferRequest)

Transfer Funds between source accounts

Transfer funds between source accounts for a Payor. The &#39;from&#39; source account is identified in the URL, and is the account which will be debited. The &#39;to&#39; (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the &#39;from&#39; source account, otherwise the transfer attempt will fail.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerApi();
let sourceAccountId = null; // String | The 'from' source account id, which will be debited
let transferRequest = new VeloPayments.TransferRequest(); // TransferRequest | Body
apiInstance.transferFunds(sourceAccountId, transferRequest, (error, data, response) => {
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
 **sourceAccountId** | [**String**](.md)| The &#39;from&#39; source account id, which will be debited | 
 **transferRequest** | [**TransferRequest**](TransferRequest.md)| Body | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

