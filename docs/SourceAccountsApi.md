# VeloPayments.SourceAccountsApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSourceAccountV2**](SourceAccountsApi.md#getSourceAccountV2) | **GET** /v2/sourceAccounts/{sourceAccountId} | Get Source Account
[**getSourceAccountV3**](SourceAccountsApi.md#getSourceAccountV3) | **GET** /v3/sourceAccounts/{sourceAccountId} | Get details about given source account.
[**getSourceAccountsV2**](SourceAccountsApi.md#getSourceAccountsV2) | **GET** /v2/sourceAccounts | Get list of source accounts
[**getSourceAccountsV3**](SourceAccountsApi.md#getSourceAccountsV3) | **GET** /v3/sourceAccounts | Get list of source accounts
[**setNotificationsRequest**](SourceAccountsApi.md#setNotificationsRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/notifications | Set notifications
[**setNotificationsRequestV3**](SourceAccountsApi.md#setNotificationsRequestV3) | **POST** /v3/sourceAccounts/{sourceAccountId}/notifications | Set notifications
[**transferFundsV2**](SourceAccountsApi.md#transferFundsV2) | **POST** /v2/sourceAccounts/{sourceAccountId}/transfers | Transfer Funds between source accounts
[**transferFundsV3**](SourceAccountsApi.md#transferFundsV3) | **POST** /v3/sourceAccounts/{sourceAccountId}/transfers | Transfer Funds between source accounts



## getSourceAccountV2

> SourceAccountResponseV2 getSourceAccountV2(sourceAccountId)

Get Source Account

Get details about given source account.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.SourceAccountsApi();
let sourceAccountId = "sourceAccountId_example"; // String | Source account id
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
 **sourceAccountId** | **String**| Source account id | 

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

let apiInstance = new VeloPayments.SourceAccountsApi();
let sourceAccountId = "sourceAccountId_example"; // String | Source account id
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
 **sourceAccountId** | **String**| Source account id | 

### Return type

[**SourceAccountResponseV3**](SourceAccountResponseV3.md)

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

let apiInstance = new VeloPayments.SourceAccountsApi();
let opts = {
  'physicalAccountName': "physicalAccountName_example", // String | Physical Account Name
  'physicalAccountId': "physicalAccountId_example", // String | The physical account ID
  'payorId': "payorId_example", // String | The account owner Payor ID
  'fundingAccountId': "fundingAccountId_example", // String | The funding account ID
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
 **physicalAccountId** | **String**| The physical account ID | [optional] 
 **payorId** | **String**| The account owner Payor ID | [optional] 
 **fundingAccountId** | **String**| The funding account ID | [optional] 
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

let apiInstance = new VeloPayments.SourceAccountsApi();
let opts = {
  'physicalAccountName': "physicalAccountName_example", // String | Physical Account Name
  'physicalAccountId': "physicalAccountId_example", // String | The physical account ID
  'payorId': "payorId_example", // String | The account owner Payor ID
  'fundingAccountId': "fundingAccountId_example", // String | The funding account ID
  'includeUserDeleted': "includeUserDeleted_example", // Boolean | A filter for retrieving both active accounts and user deleted ones
  'type': "type_example", // String | The type of source account.
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
 **physicalAccountId** | **String**| The physical account ID | [optional] 
 **payorId** | **String**| The account owner Payor ID | [optional] 
 **fundingAccountId** | **String**| The funding account ID | [optional] 
 **includeUserDeleted** | **Boolean**| A filter for retrieving both active accounts and user deleted ones | [optional] 
 **type** | **String**| The type of source account. | [optional] 
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


## setNotificationsRequest

> setNotificationsRequest(sourceAccountId, setNotificationsRequest)

Set notifications

&lt;p&gt;Set notifications for a given source account&lt;/p&gt; &lt;p&gt;deprecated since 2.34 (use v3 version)&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.SourceAccountsApi();
let sourceAccountId = "sourceAccountId_example"; // String | Source account id
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
 **sourceAccountId** | **String**| Source account id | 
 **setNotificationsRequest** | [**SetNotificationsRequest**](SetNotificationsRequest.md)| Body to included minimum balance to set | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setNotificationsRequestV3

> setNotificationsRequestV3(sourceAccountId, setNotificationsRequest2)

Set notifications

&lt;p&gt;Set notifications for a given source account&lt;/p&gt; &lt;p&gt;If the balance falls below the amount set in the request an email notification will be sent to the email address registered in the payor profile&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.SourceAccountsApi();
let sourceAccountId = "sourceAccountId_example"; // String | Source account id
let setNotificationsRequest2 = new VeloPayments.SetNotificationsRequest2(); // SetNotificationsRequest2 | Body to included minimum balance to set
apiInstance.setNotificationsRequestV3(sourceAccountId, setNotificationsRequest2, (error, data, response) => {
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
 **setNotificationsRequest2** | [**SetNotificationsRequest2**](SetNotificationsRequest2.md)| Body to included minimum balance to set | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transferFundsV2

> transferFundsV2(sourceAccountId, transferRequestV2)

Transfer Funds between source accounts

Transfer funds between source accounts for a Payor. The &#39;from&#39; source account is identified in the URL, and is the account which will be debited. The &#39;to&#39; (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the &#39;from&#39; source account, otherwise the transfer attempt will fail.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.SourceAccountsApi();
let sourceAccountId = "sourceAccountId_example"; // String | The 'from' source account id, which will be debited
let transferRequestV2 = new VeloPayments.TransferRequestV2(); // TransferRequestV2 | Body
apiInstance.transferFundsV2(sourceAccountId, transferRequestV2, (error, data, response) => {
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
 **sourceAccountId** | **String**| The &#39;from&#39; source account id, which will be debited | 
 **transferRequestV2** | [**TransferRequestV2**](TransferRequestV2.md)| Body | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transferFundsV3

> transferFundsV3(sourceAccountId, transferRequestV3)

Transfer Funds between source accounts

Transfer funds between source accounts for a Payor. The &#39;from&#39; source account is identified in the URL, and is the account which will be debited. The &#39;to&#39; (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the &#39;from&#39; source account, otherwise the transfer attempt will fail.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.SourceAccountsApi();
let sourceAccountId = "sourceAccountId_example"; // String | The 'from' source account id, which will be debited
let transferRequestV3 = new VeloPayments.TransferRequestV3(); // TransferRequestV3 | Body
apiInstance.transferFundsV3(sourceAccountId, transferRequestV3, (error, data, response) => {
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
 **sourceAccountId** | **String**| The &#39;from&#39; source account id, which will be debited | 
 **transferRequestV3** | [**TransferRequestV3**](TransferRequestV3.md)| Body | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

