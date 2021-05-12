# VeloPayments.FundingManagerApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAchFundingRequest**](FundingManagerApi.md#createAchFundingRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/achFundingRequest | Create Funding Request
[**createFundingRequest**](FundingManagerApi.md#createFundingRequest) | **POST** /v2/sourceAccounts/{sourceAccountId}/fundingRequest | Create Funding Request
[**createFundingRequestV3**](FundingManagerApi.md#createFundingRequestV3) | **POST** /v3/sourceAccounts/{sourceAccountId}/fundingRequest | Create Funding Request
[**getFundingAccount**](FundingManagerApi.md#getFundingAccount) | **GET** /v1/fundingAccounts/{fundingAccountId} | Get Funding Account
[**getFundingAccountV2**](FundingManagerApi.md#getFundingAccountV2) | **GET** /v2/fundingAccounts/{fundingAccountId} | Get Funding Account
[**getFundingAccounts**](FundingManagerApi.md#getFundingAccounts) | **GET** /v1/fundingAccounts | Get Funding Accounts
[**getFundingAccountsV2**](FundingManagerApi.md#getFundingAccountsV2) | **GET** /v2/fundingAccounts | Get Funding Accounts
[**getSourceAccount**](FundingManagerApi.md#getSourceAccount) | **GET** /v1/sourceAccounts/{sourceAccountId} | Get details about given source account.
[**getSourceAccountV2**](FundingManagerApi.md#getSourceAccountV2) | **GET** /v2/sourceAccounts/{sourceAccountId} | Get details about given source account.
[**getSourceAccountV3**](FundingManagerApi.md#getSourceAccountV3) | **GET** /v3/sourceAccounts/{sourceAccountId} | Get details about given source account.
[**getSourceAccounts**](FundingManagerApi.md#getSourceAccounts) | **GET** /v1/sourceAccounts | Get list of source accounts
[**getSourceAccountsV2**](FundingManagerApi.md#getSourceAccountsV2) | **GET** /v2/sourceAccounts | Get list of source accounts
[**getSourceAccountsV3**](FundingManagerApi.md#getSourceAccountsV3) | **GET** /v3/sourceAccounts | Get list of source accounts
[**listFundingAuditDeltas**](FundingManagerApi.md#listFundingAuditDeltas) | **GET** /v1/deltas/fundings | Get Funding Audit Delta
[**setNotificationsRequest**](FundingManagerApi.md#setNotificationsRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/notifications | Set notifications
[**transferFunds**](FundingManagerApi.md#transferFunds) | **POST** /v2/sourceAccounts/{sourceAccountId}/transfers | Transfer Funds between source accounts
[**transferFundsV3**](FundingManagerApi.md#transferFundsV3) | **POST** /v3/sourceAccounts/{sourceAccountId}/transfers | Transfer Funds between source accounts



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
let fundingRequestV1 = new VeloPayments.FundingRequestV1(); // FundingRequestV1 | Body to included amount to be funded
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
 **fundingRequestV1** | [**FundingRequestV1**](FundingRequestV1.md)| Body to included amount to be funded | 

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
let fundingRequestV2 = new VeloPayments.FundingRequestV2(); // FundingRequestV2 | Body to included amount to be funded
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
 **sourceAccountId** | [**String**](.md)| Source account id | 
 **fundingRequestV3** | [**FundingRequestV3**](FundingRequestV3.md)| Body to included amount to be funded | 

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


## getFundingAccountV2

> FundingAccountResponse2 getFundingAccountV2(fundingAccountId, opts)

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
 **fundingAccountId** | [**String**](.md)|  | 
 **sensitive** | **Boolean**|  | [optional] [default to false]

### Return type

[**FundingAccountResponse2**](FundingAccountResponse2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFundingAccounts

> ListFundingAccountsResponse getFundingAccounts(opts)

Get Funding Accounts

Get the funding accounts.

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
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "'accountName:asc'", // String | List of sort fields (e.g. ?sort=accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name and currency.
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
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name and currency. | [optional] [default to &#39;accountName:asc&#39;]
 **sensitive** | **Boolean**|  | [optional] [default to false]

### Return type

[**ListFundingAccountsResponse**](ListFundingAccountsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFundingAccountsV2

> ListFundingAccountsResponse2 getFundingAccountsV2(opts)

Get Funding Accounts

Get the funding accounts.

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
  'name': "name_example", // String | The descriptive funding account name
  'country': US, // String | The 2 letter ISO 3166-1 country code (upper case)
  'currency': USD, // String | The ISO 4217 currency code
  'type': new VeloPayments.FundingAccountType(), // FundingAccountType | The type of funding account.
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
 **payorId** | [**String**](.md)|  | [optional] 
 **name** | **String**| The descriptive funding account name | [optional] 
 **country** | **String**| The 2 letter ISO 3166-1 country code (upper case) | [optional] 
 **currency** | **String**| The ISO 4217 currency code | [optional] 
 **type** | [**FundingAccountType**](.md)| The type of funding account. | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name. | [optional] [default to &#39;accountName:asc&#39;]
 **sensitive** | **Boolean**|  | [optional] [default to false]

### Return type

[**ListFundingAccountsResponse2**](ListFundingAccountsResponse2.md)

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


## getSourceAccountV3

> SourceAccountResponseV3 getSourceAccountV3(sourceAccountId)

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
apiInstance.getSourceAccountV3(sourceAccountId, (error, data, response) => {
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

[**SourceAccountResponseV3**](SourceAccountResponseV3.md)

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
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "'fundingRef:asc'" // String | List of sort fields e.g. ?sort=name:asc Default is name:asc The supported sort fields are - fundingRef 
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
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields e.g. ?sort&#x3D;name:asc Default is name:asc The supported sort fields are - fundingRef  | [optional] [default to &#39;fundingRef:asc&#39;]

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
  'physicalAccountId': null, // String | The physical account ID
  'payorId': null, // String | The account owner Payor ID
  'fundingAccountId': null, // String | The funding account ID
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "'fundingRef:asc'" // String | List of sort fields e.g. ?sort=name:asc Default is name:asc The supported sort fields are - fundingRef, name, balance 
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
 **physicalAccountId** | [**String**](.md)| The physical account ID | [optional] 
 **payorId** | [**String**](.md)| The account owner Payor ID | [optional] 
 **fundingAccountId** | [**String**](.md)| The funding account ID | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields e.g. ?sort&#x3D;name:asc Default is name:asc The supported sort fields are - fundingRef, name, balance  | [optional] [default to &#39;fundingRef:asc&#39;]

### Return type

[**ListSourceAccountResponseV2**](ListSourceAccountResponseV2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSourceAccountsV3

> ListSourceAccountResponseV3 getSourceAccountsV3(opts)

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
  'physicalAccountId': null, // String | The physical account ID
  'payorId': null, // String | The account owner Payor ID
  'fundingAccountId': null, // String | The funding account ID
  'includeUserDeleted': "includeUserDeleted_example", // Boolean | A filter for retrieving both active accounts and user deleted ones
  'type': new VeloPayments.SourceAccountType(), // SourceAccountType | The type of source account.
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "'fundingRef:asc'" // String | List of sort fields e.g. ?sort=name:asc Default is name:asc The supported sort fields are - fundingRef, name, balance 
};
apiInstance.getSourceAccountsV3(opts, (error, data, response) => {
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
 **physicalAccountId** | [**String**](.md)| The physical account ID | [optional] 
 **payorId** | [**String**](.md)| The account owner Payor ID | [optional] 
 **fundingAccountId** | [**String**](.md)| The funding account ID | [optional] 
 **includeUserDeleted** | **Boolean**| A filter for retrieving both active accounts and user deleted ones | [optional] 
 **type** | [**SourceAccountType**](.md)| The type of source account. | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields e.g. ?sort&#x3D;name:asc Default is name:asc The supported sort fields are - fundingRef, name, balance  | [optional] [default to &#39;fundingRef:asc&#39;]

### Return type

[**ListSourceAccountResponseV3**](ListSourceAccountResponseV3.md)

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
 **payorId** | [**String**](.md)|  | 
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


## transferFundsV3

> transferFundsV3(sourceAccountId, transferRequest2)

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
let transferRequest2 = new VeloPayments.TransferRequest2(); // TransferRequest2 | Body
apiInstance.transferFundsV3(sourceAccountId, transferRequest2, (error, data, response) => {
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
 **transferRequest2** | [**TransferRequest2**](TransferRequest2.md)| Body | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

