# VeloPayments.FundingManagerPrivateApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFundingAccountV2**](FundingManagerPrivateApi.md#createFundingAccountV2) | **POST** /v2/fundingAccounts | Create Funding Account



## createFundingAccountV2

> createFundingAccountV2(opts)

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
  'createFundingAccountRequestV2': {"type":"FBO","name":"My FBO Account","payorId":"ee53e01d-c078-43fd-abd4-47e92f4a06cf","accountName":"My Account Name","accountNumber":1231231234556,"routingNumber":123456789} // CreateFundingAccountRequestV2 | 
};
apiInstance.createFundingAccountV2(opts, (error, data, response) => {
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
 **createFundingAccountRequestV2** | [**CreateFundingAccountRequestV2**](CreateFundingAccountRequestV2.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

