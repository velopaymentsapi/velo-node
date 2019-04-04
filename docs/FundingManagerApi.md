# VeloPaymentsApIs.FundingManagerApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFundingRequest**](FundingManagerApi.md#createFundingRequest) | **POST** /v2/sourceAccounts/{sourceAccountId}/fundingRequest | Create Funding Request
[**getSourceAccount**](FundingManagerApi.md#getSourceAccount) | **GET** /v1/sourceAccounts/{sourceAccountId} | Get details about given source account.
[**getSourceAccounts**](FundingManagerApi.md#getSourceAccounts) | **GET** /v1/sourceAccounts | Get list of source accounts
[**setPayorFundingBankDetails**](FundingManagerApi.md#setPayorFundingBankDetails) | **POST** /v1/payors/{payorId}/payorFundingBankDetailsUpdate | Set Funding Bank Details


<a name="createFundingRequest"></a>
# **createFundingRequest**
> createFundingRequest(sourceAccountId, fundingRequest)

Create Funding Request

Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).

### Example
```javascript
import VeloPaymentsApIs from 'velo';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.FundingManagerApi();
let sourceAccountId = null; // String | Source account id
let fundingRequest = new VeloPaymentsApIs.FundingRequest(); // FundingRequest | Body to included ammount to be funded
apiInstance.createFundingRequest(sourceAccountId, fundingRequest, (error, data, response) => {
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
 **fundingRequest** | [**FundingRequest**](FundingRequest.md)| Body to included ammount to be funded | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSourceAccount"></a>
# **getSourceAccount**
> SourceAccountResponse getSourceAccount(sourceAccountId)

Get details about given source account.

Get details about given source account.

### Example
```javascript
import VeloPaymentsApIs from 'velo';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.FundingManagerApi();
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
import VeloPaymentsApIs from 'velo';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.FundingManagerApi();
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

<a name="setPayorFundingBankDetails"></a>
# **setPayorFundingBankDetails**
> setPayorFundingBankDetails(payorId, payorFundingBankDetailsUpdate)

Set Funding Bank Details

This API allows you to set or update the funding details for the given Payor ID. 

### Example
```javascript
import VeloPaymentsApIs from 'velo';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.FundingManagerApi();
let payorId = null; // String | The account owner Payor ID
let payorFundingBankDetailsUpdate = new VeloPaymentsApIs.PayorFundingBankDetailsUpdate(); // PayorFundingBankDetailsUpdate | Update Funding bank details of given Payor Id
apiInstance.setPayorFundingBankDetails(payorId, payorFundingBankDetailsUpdate, (error, data, response) => {
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
 **payorId** | [**String**](.md)| The account owner Payor ID | 
 **payorFundingBankDetailsUpdate** | [**PayorFundingBankDetailsUpdate**](PayorFundingBankDetailsUpdate.md)| Update Funding bank details of given Payor Id | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

