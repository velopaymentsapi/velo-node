# VeloPaymentsApIs.PayorInformationApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSourceAccount**](PayorInformationApi.md#getSourceAccount) | **GET** /v1/sourceAccounts/{sourceAccountId} | Get details about given source account.
[**getSourceAccounts**](PayorInformationApi.md#getSourceAccounts) | **GET** /v1/sourceAccounts | Get list of source accounts


<a name="getSourceAccount"></a>
# **getSourceAccount**
> SourceAccountResponse getSourceAccount(sourceAccountId)

Get details about given source account.

Get details about given source account.

### Example
```javascript
import VeloPaymentsApIs from 'velo-payments';
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

<a name="getSourceAccounts"></a>
# **getSourceAccounts**
> ListSourceAccountResponse getSourceAccounts(opts)

Get list of source accounts

List source accounts.

### Example
```javascript
import VeloPaymentsApIs from 'velo-payments';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorInformationApi();
let opts = {
  'physicalAccountName': "physicalAccountName_example", // String | Physical Account Name
  'payorId': null, // String | The account owner Payor ID
  'pageNumber': 1, // Number | Page number. Default is 1.
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

