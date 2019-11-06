# VeloPayments.QuotePayoutApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3PayoutsPayoutIdQuotePost**](QuotePayoutApi.md#v3PayoutsPayoutIdQuotePost) | **POST** /v3/payouts/{payoutId}/quote | Create a quote for the payout



## v3PayoutsPayoutIdQuotePost

> QuoteResponse v3PayoutsPayoutIdQuotePost(payoutId)

Create a quote for the payout

Create quote for a payout

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.QuotePayoutApi();
let payoutId = null; // String | Id of the payout
apiInstance.v3PayoutsPayoutIdQuotePost(payoutId, (error, data, response) => {
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
 **payoutId** | [**String**](.md)| Id of the payout | 

### Return type

[**QuoteResponse**](QuoteResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

