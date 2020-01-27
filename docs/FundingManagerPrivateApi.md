# VeloPayments.FundingManagerPrivateApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFundingAccount**](FundingManagerPrivateApi.md#createFundingAccount) | **POST** /v1/fundingAccounts | Create Funding Account



## createFundingAccount

> createFundingAccount(opts)

Create Funding Account

Create Funding Account

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.FundingManagerPrivateApi();
let opts = {
  'createFundingAccountRequest': new VeloPayments.CreateFundingAccountRequest() // CreateFundingAccountRequest | 
};
apiInstance.createFundingAccount(opts, (error, data, response) => {
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
 **createFundingAccountRequest** | [**CreateFundingAccountRequest**](CreateFundingAccountRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

