# VeloPaymentsApIs.PayoutHistoryApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPaymentsForPayout**](PayoutHistoryApi.md#getPaymentsForPayout) | **GET** /v3/paymentaudit/payouts/{payoutId} | Get Payments for Payout


<a name="getPaymentsForPayout"></a>
# **getPaymentsForPayout**
> GetPaymentsForPayoutResponse getPaymentsForPayout(payoutId, opts)

Get Payments for Payout

Get List of payments for Payout 

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayoutHistoryApi();
let payoutId = null; // String | The id (UUID) of the payout.
let opts = {
  'remoteId': "remoteId_example", // String | The remote id of the payees.
  'status': "status_example", // String | Payment Status
  'sourceAmountFrom': 56, // Number | The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
  'sourceAmountTo': 56, // Number | The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
  'paymentAmountFrom': 56, // Number | The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
  'paymentAmountTo': 56, // Number | The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
  'submittedDateFrom': new Date("2013-10-20"), // Date | The submitted date from range filter. Format is yyyy-MM-dd.
  'submittedDateTo': new Date("2013-10-20"), // Date | The submitted date to range filter. Format is yyyy-MM-dd.
  'pageNumber': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
  'sort': "sort_example", // String | List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status 
  'sensitive': true // Boolean | Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
};
apiInstance.getPaymentsForPayout(payoutId, opts, (error, data, response) => {
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
 **payoutId** | [**String**](.md)| The id (UUID) of the payout. | 
 **remoteId** | **String**| The remote id of the payees. | [optional] 
 **status** | **String**| Payment Status | [optional] 
 **sourceAmountFrom** | **Number**| The source amount from range filter. Filters for sourceAmount &gt;&#x3D; sourceAmountFrom | [optional] 
 **sourceAmountTo** | **Number**| The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo | [optional] 
 **paymentAmountFrom** | **Number**| The payment amount from range filter. Filters for paymentAmount &gt;&#x3D; paymentAmountFrom | [optional] 
 **paymentAmountTo** | **Number**| The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo | [optional] 
 **submittedDateFrom** | **Date**| The submitted date from range filter. Format is yyyy-MM-dd. | [optional] 
 **submittedDateTo** | **Date**| The submitted date to range filter. Format is yyyy-MM-dd. | [optional] 
 **pageNumber** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;submittedDateTime:asc,status:asc). Default is sort by remoteId The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status  | [optional] 
 **sensitive** | **Boolean**| Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values.  | [optional] 

### Return type

[**GetPaymentsForPayoutResponse**](GetPaymentsForPayoutResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

