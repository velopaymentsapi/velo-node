# VeloPaymentsApIs.PayoutServiceApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitPayout**](PayoutServiceApi.md#submitPayout) | **POST** /v3/payouts | Submit Payout
[**v3PayoutsPayoutIdDelete**](PayoutServiceApi.md#v3PayoutsPayoutIdDelete) | **DELETE** /v3/payouts/{payoutId} | Withdraw Payout
[**v3PayoutsPayoutIdGet**](PayoutServiceApi.md#v3PayoutsPayoutIdGet) | **GET** /v3/payouts/{payoutId} | Get Payout Summary
[**v3PayoutsPayoutIdPost**](PayoutServiceApi.md#v3PayoutsPayoutIdPost) | **POST** /v3/payouts/{payoutId} | Instruct Payout
[**v3PayoutsPayoutIdQuotePost**](PayoutServiceApi.md#v3PayoutsPayoutIdQuotePost) | **POST** /v3/payouts/{payoutId}/quote | Create a quote for the payout


<a name="submitPayout"></a>
# **submitPayout**
> submitPayout(createPayoutRequest)

Submit Payout

Create a new payout and return a location header with a link to get the payout. Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously, the results of which can be obtained by issuing a HTTP GET to the URL returned in the location header. **NOTE:** amount values in payments must be in &#39;minor units&#39; format. E.g. cents for USD, pence for GBP etc.  with no decimal places. 

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayoutServiceApi();
let createPayoutRequest = new VeloPaymentsApIs.CreatePayoutRequest(); // CreatePayoutRequest | Post ammount to transfer via ACH using stored funding account details.
apiInstance.submitPayout(createPayoutRequest, (error, data, response) => {
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
 **createPayoutRequest** | [**CreatePayoutRequest**](CreatePayoutRequest.md)| Post ammount to transfer via ACH using stored funding account details. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/formdata
 - **Accept**: Not defined

<a name="v3PayoutsPayoutIdDelete"></a>
# **v3PayoutsPayoutIdDelete**
> v3PayoutsPayoutIdDelete(payoutId)

Withdraw Payout

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayoutServiceApi();
let payoutId = null; // String | Id of the payout
apiInstance.v3PayoutsPayoutIdDelete(payoutId, (error, data, response) => {
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

<a name="v3PayoutsPayoutIdGet"></a>
# **v3PayoutsPayoutIdGet**
> PayoutSummaryResponse v3PayoutsPayoutIdGet(payoutId)

Get Payout Summary

Get payout summary - returns the current state of the payout.

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayoutServiceApi();
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

<a name="v3PayoutsPayoutIdPost"></a>
# **v3PayoutsPayoutIdPost**
> v3PayoutsPayoutIdPost(payoutId)

Instruct Payout

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayoutServiceApi();
let payoutId = null; // String | Id of the payout
apiInstance.v3PayoutsPayoutIdPost(payoutId, (error, data, response) => {
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

<a name="v3PayoutsPayoutIdQuotePost"></a>
# **v3PayoutsPayoutIdQuotePost**
> QuoteResponse v3PayoutsPayoutIdQuotePost(payoutId)

Create a quote for the payout

Create quote for a payout

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayoutServiceApi();
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

