# VeloPaymentsApIs.SubmitPayoutApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitPayout**](SubmitPayoutApi.md#submitPayout) | **POST** /v3/payouts | Submit Payout


<a name="submitPayout"></a>
# **submitPayout**
> submitPayout(createPayoutRequest)

Submit Payout

Create a new payout and return a location header with a link to get the payout. Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously, the results of which can be obtained by issuing a HTTP GET to the URL returned in the location header. **NOTE:** amount values in payments must be in &#39;minor units&#39; format. E.g. cents for USD, pence for GBP etc.  with no decimal places. 

### Example
```javascript
import VeloPaymentsApIs from 'velo';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.SubmitPayoutApi();
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

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: Not defined

