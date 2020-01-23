# VeloPayments.WithdrawPayoutApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**withdrawPayoutV3**](WithdrawPayoutApi.md#withdrawPayoutV3) | **DELETE** /v3/payouts/{payoutId} | Withdraw Payout



## withdrawPayoutV3

> withdrawPayoutV3(payoutId)

Withdraw Payout

Withdraw Payout will delete payout details from payout service and rails services but will just move the status of the payout to WITHDRAWN in payment audit.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.WithdrawPayoutApi();
let payoutId = null; // String | Id of the payout
apiInstance.withdrawPayoutV3(payoutId, (error, data, response) => {
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

