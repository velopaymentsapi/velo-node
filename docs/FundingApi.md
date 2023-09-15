# VeloPayments.FundingApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFundingRequestV2**](FundingApi.md#createFundingRequestV2) | **POST** /v2/sourceAccounts/{sourceAccountId}/fundingRequest | Create Funding Request
[**createFundingRequestV3**](FundingApi.md#createFundingRequestV3) | **POST** /v3/sourceAccounts/{sourceAccountId}/fundingRequest | Create Funding Request
[**getFundingAccountV2**](FundingApi.md#getFundingAccountV2) | **GET** /v2/fundingAccounts/{fundingAccountId} | Get Funding Account
[**getFundingAccountsV2**](FundingApi.md#getFundingAccountsV2) | **GET** /v2/fundingAccounts | Get Funding Accounts
[**getFundingByIdV1**](FundingApi.md#getFundingByIdV1) | **GET** /v1/fundings/{fundingId} | Get Funding
[**listFundingAuditDeltas**](FundingApi.md#listFundingAuditDeltas) | **GET** /v1/deltas/fundings | Get Funding Audit Delta



## createFundingRequestV2

> createFundingRequestV2(sourceAccountId, fundingRequestV2)

Create Funding Request

Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingApi();
let sourceAccountId = "sourceAccountId_example"; // String | Source account id
let fundingRequestV2 = new VeloPayments.FundingRequestV2(); // FundingRequestV2 | Body to included amount to be funded
apiInstance.createFundingRequestV2(sourceAccountId, fundingRequestV2, (error, data, response) => {
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
 **sourceAccountId** | **String**| Source account id | 
 **fundingRequestV2** | [**FundingRequestV2**](FundingRequestV2.md)| Body to included amount to be funded | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFundingRequestV3

> createFundingRequestV3(sourceAccountId, fundingRequestV3)

Create Funding Request

&lt;p&gt;Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingApi();
let sourceAccountId = "sourceAccountId_example"; // String | Source account id
let fundingRequestV3 = new VeloPayments.FundingRequestV3(); // FundingRequestV3 | Body to included amount to be funded
apiInstance.createFundingRequestV3(sourceAccountId, fundingRequestV3, (error, data, response) => {
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
 **sourceAccountId** | **String**| Source account id | 
 **fundingRequestV3** | [**FundingRequestV3**](FundingRequestV3.md)| Body to included amount to be funded | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFundingAccountV2

> FundingAccountResponseV2 getFundingAccountV2(fundingAccountId, opts)

Get Funding Account

Get Funding Account by ID

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingApi();
let fundingAccountId = "fundingAccountId_example"; // String | 
let opts = {
  'sensitive': false // Boolean | 
};
apiInstance.getFundingAccountV2(fundingAccountId, opts, (error, data, response) => {
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
 **fundingAccountId** | **String**|  | 
 **sensitive** | **Boolean**|  | [optional] [default to false]

### Return type

[**FundingAccountResponseV2**](FundingAccountResponseV2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFundingAccountsV2

> ListFundingAccountsResponseV2 getFundingAccountsV2(opts)

Get Funding Accounts

Get the funding accounts.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingApi();
let opts = {
  'payorId': "payorId_example", // String | 
  'name': "name_example", // String | The descriptive funding account name
  'country': US, // String | The 2 letter ISO 3166-1 country code (upper case)
  'currency': USD, // String | The ISO 4217 currency code
  'type': "type_example", // String | The type of funding account.
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "'accountName:asc'", // String | List of sort fields (e.g. ?sort=accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name.
  'sensitive': false // Boolean | 
};
apiInstance.getFundingAccountsV2(opts, (error, data, response) => {
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
 **name** | **String**| The descriptive funding account name | [optional] 
 **country** | **String**| The 2 letter ISO 3166-1 country code (upper case) | [optional] 
 **currency** | **String**| The ISO 4217 currency code | [optional] 
 **type** | **String**| The type of funding account. | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name. | [optional] [default to &#39;accountName:asc&#39;]
 **sensitive** | **Boolean**|  | [optional] [default to false]

### Return type

[**ListFundingAccountsResponseV2**](ListFundingAccountsResponseV2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFundingByIdV1

> FundingResponse getFundingByIdV1(fundingId)

Get Funding

Get Funding by Id

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingApi();
let fundingId = "fundingId_example"; // String | 
apiInstance.getFundingByIdV1(fundingId, (error, data, response) => {
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
 **fundingId** | **String**|  | 

### Return type

[**FundingResponse**](FundingResponse.md)

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

let apiInstance = new VeloPayments.FundingApi();
let payorId = "payorId_example"; // String | 
let updatedSince = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let opts = {
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25 // Number | The number of results to return in a page
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
 **payorId** | **String**|  | 
 **updatedSince** | **Date**|  | 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]

### Return type

[**PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse**](PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

