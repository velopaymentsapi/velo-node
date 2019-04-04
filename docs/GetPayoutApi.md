# VeloPaymentsApIs.GetPayoutApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3PayoutsPayoutIdGet**](GetPayoutApi.md#v3PayoutsPayoutIdGet) | **GET** /v3/payouts/{payoutId} | Get Payout Summary


<a name="v3PayoutsPayoutIdGet"></a>
# **v3PayoutsPayoutIdGet**
> PayoutSummaryResponse v3PayoutsPayoutIdGet(payoutId)

Get Payout Summary

Get payout summary - returns the current state of the payout.

### Example
```javascript
import VeloPaymentsApIs from 'velo';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.GetPayoutApi();
let payoutId = null; // String | Id of the payout
apiInstance.v3PayoutsPayoutIdGet(payoutId, (error, data, response) => {
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

[**PayoutSummaryResponse**](PayoutSummaryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

