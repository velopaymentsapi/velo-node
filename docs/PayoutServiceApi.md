# VeloPayments.PayoutServiceApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createQuoteForPayoutV3**](PayoutServiceApi.md#createQuoteForPayoutV3) | **POST** /v3/payouts/{payoutId}/quote | Create a quote for the payout
[**getPaymentsForPayoutV3**](PayoutServiceApi.md#getPaymentsForPayoutV3) | **GET** /v3/payouts/{payoutId}/payments | Retrieve payments for a payout
[**getPayoutSummaryV3**](PayoutServiceApi.md#getPayoutSummaryV3) | **GET** /v3/payouts/{payoutId} | Get Payout Summary
[**instructPayoutV3**](PayoutServiceApi.md#instructPayoutV3) | **POST** /v3/payouts/{payoutId} | Instruct Payout
[**submitPayoutV3**](PayoutServiceApi.md#submitPayoutV3) | **POST** /v3/payouts | Submit Payout
[**withdrawPayment**](PayoutServiceApi.md#withdrawPayment) | **POST** /v1/payments/{paymentId}/withdraw | Withdraw a Payment
[**withdrawPayoutV3**](PayoutServiceApi.md#withdrawPayoutV3) | **DELETE** /v3/payouts/{payoutId} | Withdraw Payout



## createQuoteForPayoutV3

> QuoteResponseV3 createQuoteForPayoutV3(payoutId)

Create a quote for the payout

Create quote for a payout

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayoutServiceApi();
let payoutId = null; // String | Id of the payout
apiInstance.createQuoteForPayoutV3(payoutId, (error, data, response) => {
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

[**QuoteResponseV3**](QuoteResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentsForPayoutV3

> PagedPaymentsResponseV3 getPaymentsForPayoutV3(payoutId, opts)

Retrieve payments for a payout

Retrieve payments for a payout

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayoutServiceApi();
let payoutId = null; // String | Id of the payout
let opts = {
  'status': "status_example", // String | Payment Status * ACCEPTED: any payment which was accepted at submission time (status may have changed since) * REJECTED: any payment rejected by initial submission processing * WITHDRAWN: any payment which has been withdrawn * WITHDRAWABLE: any payment eligible for withdrawal 
  'remoteId': "remoteId_example", // String | The remote id of the payees.
  'payorPaymentId': "payorPaymentId_example", // String | Payor's Id of the Payment
  'sourceAccountName': "sourceAccountName_example", // String | Physical Account Name
  'transmissionType': "transmissionType_example", // String | Transmission Type * ACH * SAME_DAY_ACH * WIRE 
  'paymentMemo': "paymentMemo_example", // String | Payment Memo of the Payment
  'pageSize': 25, // Number | The number of results to return in a page
  'page': 1 // Number | Page number. Default is 1.
};
apiInstance.getPaymentsForPayoutV3(payoutId, opts, (error, data, response) => {
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
 **status** | **String**| Payment Status * ACCEPTED: any payment which was accepted at submission time (status may have changed since) * REJECTED: any payment rejected by initial submission processing * WITHDRAWN: any payment which has been withdrawn * WITHDRAWABLE: any payment eligible for withdrawal  | [optional] 
 **remoteId** | **String**| The remote id of the payees. | [optional] 
 **payorPaymentId** | **String**| Payor&#39;s Id of the Payment | [optional] 
 **sourceAccountName** | **String**| Physical Account Name | [optional] 
 **transmissionType** | **String**| Transmission Type * ACH * SAME_DAY_ACH * WIRE  | [optional] 
 **paymentMemo** | **String**| Payment Memo of the Payment | [optional] 
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]

### Return type

[**PagedPaymentsResponseV3**](PagedPaymentsResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPayoutSummaryV3

> PayoutSummaryResponseV3 getPayoutSummaryV3(payoutId)

Get Payout Summary

Get payout summary - returns the current state of the payout.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayoutServiceApi();
let payoutId = null; // String | Id of the payout
apiInstance.getPayoutSummaryV3(payoutId, (error, data, response) => {
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

[**PayoutSummaryResponseV3**](PayoutSummaryResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


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

let apiInstance = new VeloPayments.PayoutServiceApi();
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
- **Accept**: application/json


## submitPayoutV3

> submitPayoutV3(createPayoutRequestV3)

Submit Payout

&lt;p&gt;Create a new payout and return a location header with a link to get the payout.&lt;/p&gt; &lt;p&gt;Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously.&lt;/p&gt; &lt;p&gt;The results can be obtained by issuing a HTTP GET to the URL returned in the location header.&lt;/p&gt; &lt;p&gt;**NOTE:** amount values in payments must be in &#39;minor units&#39; format. E.g. cents for USD, pence for GBP etc.&lt;/p&gt;  with no decimal places. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayoutServiceApi();
let createPayoutRequestV3 = new VeloPayments.CreatePayoutRequestV3(); // CreatePayoutRequestV3 | Post amount to transfer using stored funding account details.
apiInstance.submitPayoutV3(createPayoutRequestV3, (error, data, response) => {
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
 **createPayoutRequestV3** | [**CreatePayoutRequestV3**](CreatePayoutRequestV3.md)| Post amount to transfer using stored funding account details. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## withdrawPayment

> withdrawPayment(paymentId, withdrawPaymentRequest)

Withdraw a Payment

&lt;p&gt;withdraw a payment &lt;/p&gt; &lt;p&gt;There are a variety of reasons why this can fail&lt;/p&gt; &lt;ul&gt;     &lt;li&gt;the payment must be in a state of &#39;accepted&#39; or &#39;unfunded&#39;&lt;/li&gt;     &lt;li&gt;the payout must not be in a state of &#39;instructed&#39;&lt;/li&gt; &lt;/ul&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayoutServiceApi();
let paymentId = null; // String | Id of the Payment
let withdrawPaymentRequest = new VeloPayments.WithdrawPaymentRequest(); // WithdrawPaymentRequest | details for withdrawal
apiInstance.withdrawPayment(paymentId, withdrawPaymentRequest, (error, data, response) => {
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
 **paymentId** | [**String**](.md)| Id of the Payment | 
 **withdrawPaymentRequest** | [**WithdrawPaymentRequest**](WithdrawPaymentRequest.md)| details for withdrawal | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


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

let apiInstance = new VeloPayments.PayoutServiceApi();
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
- **Accept**: application/json

