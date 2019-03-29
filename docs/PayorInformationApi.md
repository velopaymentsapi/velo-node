# VeloPaymentsApIs.PayorInformationApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayorBalance**](PayorInformationApi.md#getPayorBalance) | **GET** /v1/payors/{payorId}/balance | Get Payor Balance
[**getPayorById**](PayorInformationApi.md#getPayorById) | **GET** /v1/payors/{payorId} | Get Payor
[**getSourceAccount**](PayorInformationApi.md#getSourceAccount) | **GET** /v1/sourceAccounts/{sourceAccountId} | Get details about given source account.
[**listSourceAccounts**](PayorInformationApi.md#listSourceAccounts) | **GET** /v1/sourceAccounts | Get list of source accounts


<a name="getPayorBalance"></a>
# **getPayorBalance**
> PayorBalance getPayorBalance(payorId)

Get Payor Balance

This API operation will allow you to query the system by Payor ID. The system will return a JSON response object with details about the given Payor. 

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorInformationApi();
let payorId = null; // String | Payor Id
apiInstance.getPayorBalance(payorId, (error, data, response) => {
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
 **payorId** | [**String**](.md)| Payor Id | 

### Return type

[**PayorBalance**](PayorBalance.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPayorById"></a>
# **getPayorById**
> Payor getPayorById(payorId)

Get Payor

Get a Single Payor by Id (200 - OK, 404 - payor not found). 

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorInformationApi();
let payorId = null; // String | The account owner Payor ID
apiInstance.getPayorById(payorId, (error, data, response) => {
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

[**Payor**](Payor.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSourceAccount"></a>
# **getSourceAccount**
> SourceAccountResponse getSourceAccount(sourceAccountId)

Get details about given source account.

Get details about given source account.

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorInformationApi();
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

<a name="listSourceAccounts"></a>
# **listSourceAccounts**
> ListSourceAccountResponse listSourceAccounts(payorId, opts)

Get list of source accounts

List source accounts.

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorInformationApi();
let payorId = null; // String | The account owner Payor ID
let opts = {
  'physicalAccountName': "physicalAccountName_example", // String | Physical Account Name
  'pageNumber': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
  'sort': "sort_example" // String | Sort String
};
apiInstance.listSourceAccounts(payorId, opts, (error, data, response) => {
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
 **physicalAccountName** | **String**| Physical Account Name | [optional] 
 **pageNumber** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]
 **sort** | **String**| Sort String | [optional] 

### Return type

[**ListSourceAccountResponse**](ListSourceAccountResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

