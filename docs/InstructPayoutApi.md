# VeloPayments.InstructPayoutApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instructPayoutV3**](InstructPayoutApi.md#instructPayoutV3) | **POST** /v3/payouts/{payoutId} | Instruct Payout



## instructPayoutV3

> instructPayoutV3(payoutId)

Instruct Payout

Instruct a payout to be made for the specified payoutId.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.InstructPayoutApi();
let payoutId = null; // String | Id of the payout
apiInstance.instructPayoutV3(payoutId, (error, data, response) => {
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
 **payoutId** | [**String**](.md)| Id of the payout | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

