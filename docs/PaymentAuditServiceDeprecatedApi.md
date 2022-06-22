# VeloPayments.PaymentAuditServiceDeprecatedApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportTransactionsCSVV3**](PaymentAuditServiceDeprecatedApi.md#exportTransactionsCSVV3) | **GET** /v3/paymentaudit/transactions | V3 Export Transactions
[**getFundingsV1**](PaymentAuditServiceDeprecatedApi.md#getFundingsV1) | **GET** /v1/paymentaudit/fundings | V1 Get Fundings for Payor
[**getPaymentDetailsV3**](PaymentAuditServiceDeprecatedApi.md#getPaymentDetailsV3) | **GET** /v3/paymentaudit/payments/{paymentId} | V3 Get Payment
[**getPaymentsForPayoutPAV3**](PaymentAuditServiceDeprecatedApi.md#getPaymentsForPayoutPAV3) | **GET** /v3/paymentaudit/payouts/{payoutId} | V3 Get Payments for Payout
[**getPayoutStatsV1**](PaymentAuditServiceDeprecatedApi.md#getPayoutStatsV1) | **GET** /v1/paymentaudit/payoutStatistics | V1 Get Payout Statistics
[**getPayoutsForPayorV3**](PaymentAuditServiceDeprecatedApi.md#getPayoutsForPayorV3) | **GET** /v3/paymentaudit/payouts | V3 Get Payouts for Payor
[**listPaymentChanges**](PaymentAuditServiceDeprecatedApi.md#listPaymentChanges) | **GET** /v1/deltas/payments | V1 List Payment Changes
[**listPaymentsAuditV3**](PaymentAuditServiceDeprecatedApi.md#listPaymentsAuditV3) | **GET** /v3/paymentaudit/payments | V3 Get List of Payments



## exportTransactionsCSVV3

> PayorAmlTransactionV3 exportTransactionsCSVV3(opts)

V3 Export Transactions

Deprecated (use /v4/paymentaudit/transactions instead)

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceDeprecatedApi();
let opts = {
  'payorId': "payorId_example", // String | The Payor ID for whom you wish to run the report. For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor. 
  'startDate': new Date("2013-10-20"), // Date | Start date, inclusive. Format is YYYY-MM-DD
  'endDate': new Date("2013-10-20") // Date | End date, inclusive. Format is YYYY-MM-DD
};
apiInstance.exportTransactionsCSVV3(opts, (error, data, response) => {
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
 **payorId** | **String**| The Payor ID for whom you wish to run the report. For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.  | [optional] 
 **startDate** | **Date**| Start date, inclusive. Format is YYYY-MM-DD | [optional] 
 **endDate** | **Date**| End date, inclusive. Format is YYYY-MM-DD | [optional] 

### Return type

[**PayorAmlTransactionV3**](PayorAmlTransactionV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv, application/json


## getFundingsV1

> GetFundingsResponse getFundingsV1(payorId, opts)

V1 Get Fundings for Payor

Deprecated (use /v4/paymentaudit/fundings)

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceDeprecatedApi();
let payorId = "payorId_example"; // String | The account owner Payor ID
let opts = {
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "sort_example" // String | List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc``` Default is no sort. The supported sort fields are: dateTime and amount. 
};
apiInstance.getFundingsV1(payorId, opts, (error, data, response) => {
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
 **payorId** | **String**| The account owner Payor ID | 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields. Example: &#x60;&#x60;&#x60;?sort&#x3D;destinationCurrency:asc,destinationAmount:asc&#x60;&#x60;&#x60; Default is no sort. The supported sort fields are: dateTime and amount.  | [optional] 

### Return type

[**GetFundingsResponse**](GetFundingsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentDetailsV3

> PaymentResponseV3 getPaymentDetailsV3(paymentId, opts)

V3 Get Payment

Deprecated (use /v4/paymentaudit/payments/&lt;paymentId&gt; instead)

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceDeprecatedApi();
let paymentId = "paymentId_example"; // String | Payment Id
let opts = {
  'sensitive': true // Boolean | Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
};
apiInstance.getPaymentDetailsV3(paymentId, opts, (error, data, response) => {
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
 **paymentId** | **String**| Payment Id | 
 **sensitive** | **Boolean**| Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values.  | [optional] 

### Return type

[**PaymentResponseV3**](PaymentResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentsForPayoutPAV3

> GetPaymentsForPayoutResponseV3 getPaymentsForPayoutPAV3(payoutId, opts)

V3 Get Payments for Payout

Deprecated (use /v4/paymentaudit/payouts/&lt;payoutId&gt; instead)

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceDeprecatedApi();
let payoutId = "payoutId_example"; // String | The id (UUID) of the payout.
let opts = {
  'remoteId': "remoteId_example", // String | The remote id of the payees.
  'status': "status_example", // String | Payment Status
  'sourceAmountFrom': 56, // Number | The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
  'sourceAmountTo': 56, // Number | The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
  'paymentAmountFrom': 56, // Number | The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
  'paymentAmountTo': 56, // Number | The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
  'submittedDateFrom': new Date("2013-10-20"), // Date | The submitted date from range filter. Format is yyyy-MM-dd.
  'submittedDateTo': new Date("2013-10-20"), // Date | The submitted date to range filter. Format is yyyy-MM-dd.
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "sort_example", // String | <p>List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId</p> <p>The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status</p> 
  'sensitive': true // Boolean | Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
};
apiInstance.getPaymentsForPayoutPAV3(payoutId, opts, (error, data, response) => {
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
 **payoutId** | **String**| The id (UUID) of the payout. | 
 **remoteId** | **String**| The remote id of the payees. | [optional] 
 **status** | **String**| Payment Status | [optional] 
 **sourceAmountFrom** | **Number**| The source amount from range filter. Filters for sourceAmount &gt;&#x3D; sourceAmountFrom | [optional] 
 **sourceAmountTo** | **Number**| The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo | [optional] 
 **paymentAmountFrom** | **Number**| The payment amount from range filter. Filters for paymentAmount &gt;&#x3D; paymentAmountFrom | [optional] 
 **paymentAmountTo** | **Number**| The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo | [optional] 
 **submittedDateFrom** | **Date**| The submitted date from range filter. Format is yyyy-MM-dd. | [optional] 
 **submittedDateTo** | **Date**| The submitted date to range filter. Format is yyyy-MM-dd. | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| &lt;p&gt;List of sort fields (e.g. ?sort&#x3D;submittedDateTime:asc,status:asc). Default is sort by remoteId&lt;/p&gt; &lt;p&gt;The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status&lt;/p&gt;  | [optional] 
 **sensitive** | **Boolean**| Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values.  | [optional] 

### Return type

[**GetPaymentsForPayoutResponseV3**](GetPaymentsForPayoutResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPayoutStatsV1

> GetPayoutStatistics getPayoutStatsV1(opts)

V1 Get Payout Statistics

Deprecated (Use /v4/paymentaudit/payoutStatistics)

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceDeprecatedApi();
let opts = {
  'payorId': "payorId_example" // String | The account owner Payor ID. Required for external users.
};
apiInstance.getPayoutStatsV1(opts, (error, data, response) => {
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
 **payorId** | **String**| The account owner Payor ID. Required for external users. | [optional] 

### Return type

[**GetPayoutStatistics**](GetPayoutStatistics.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPayoutsForPayorV3

> GetPayoutsResponseV3 getPayoutsForPayorV3(payorId, opts)

V3 Get Payouts for Payor

Deprecated (use /v4/paymentaudit/payouts instead)

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceDeprecatedApi();
let payorId = "payorId_example"; // String | The account owner Payor ID
let opts = {
  'payoutMemo': "payoutMemo_example", // String | Payout Memo filter - case insensitive sub-string match
  'status': "status_example", // String | Payout Status
  'submittedDateFrom': new Date("2013-10-20"), // Date | The submitted date from range filter. Format is yyyy-MM-dd.
  'submittedDateTo': new Date("2013-10-20"), // Date | The submitted date to range filter. Format is yyyy-MM-dd.
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "sort_example" // String | List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc) Default is submittedDateTime:asc The supported sort fields are: submittedDateTime, instructedDateTime, status. 
};
apiInstance.getPayoutsForPayorV3(payorId, opts, (error, data, response) => {
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
 **payorId** | **String**| The account owner Payor ID | 
 **payoutMemo** | **String**| Payout Memo filter - case insensitive sub-string match | [optional] 
 **status** | **String**| Payout Status | [optional] 
 **submittedDateFrom** | **Date**| The submitted date from range filter. Format is yyyy-MM-dd. | [optional] 
 **submittedDateTo** | **Date**| The submitted date to range filter. Format is yyyy-MM-dd. | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;submittedDateTime:asc,instructedDateTime:asc,status:asc) Default is submittedDateTime:asc The supported sort fields are: submittedDateTime, instructedDateTime, status.  | [optional] 

### Return type

[**GetPayoutsResponseV3**](GetPayoutsResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPaymentChanges

> PaymentDeltaResponseV1 listPaymentChanges(payorId, updatedSince, opts)

V1 List Payment Changes

Deprecated (use /v4/payments/deltas instead)

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceDeprecatedApi();
let payorId = "payorId_example"; // String | The Payor ID to find associated Payments
let updatedSince = new Date("2013-10-20T19:20:30+01:00"); // Date | The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
let opts = {
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 100 // Number | The number of results to return in a page
};
apiInstance.listPaymentChanges(payorId, updatedSince, opts, (error, data, response) => {
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
 **payorId** | **String**| The Payor ID to find associated Payments | 
 **updatedSince** | **Date**| The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm | 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 100]

### Return type

[**PaymentDeltaResponseV1**](PaymentDeltaResponseV1.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPaymentsAuditV3

> ListPaymentsResponseV3 listPaymentsAuditV3(opts)

V3 Get List of Payments

Deprecated (use /v4/paymentaudit/payments instead)

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceDeprecatedApi();
let opts = {
  'payeeId': "payeeId_example", // String | The UUID of the payee.
  'payorId': "payorId_example", // String | The account owner Payor Id. Required for external users.
  'payorName': "payorName_example", // String | The payor’s name. This filters via a case insensitive substring match.
  'remoteId': "remoteId_example", // String | The remote id of the payees.
  'status': "status_example", // String | Payment Status
  'sourceAccountName': "sourceAccountName_example", // String | The source account name filter. This filters via a case insensitive substring match.
  'sourceAmountFrom': 56, // Number | The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
  'sourceAmountTo': 56, // Number | The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
  'sourceCurrency': "sourceCurrency_example", // String | The source currency filter. Filters based on an exact match on the currency.
  'paymentAmountFrom': 56, // Number | The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
  'paymentAmountTo': 56, // Number | The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
  'paymentCurrency': "paymentCurrency_example", // String | The payment currency filter. Filters based on an exact match on the currency.
  'submittedDateFrom': new Date("2013-10-20"), // Date | The submitted date from range filter. Format is yyyy-MM-dd.
  'submittedDateTo': new Date("2013-10-20"), // Date | The submitted date to range filter. Format is yyyy-MM-dd.
  'paymentMemo': "paymentMemo_example", // String | The payment memo filter. This filters via a case insensitive substring match.
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "sort_example", // String | List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status 
  'sensitive': true // Boolean | Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
};
apiInstance.listPaymentsAuditV3(opts, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | [optional] 
 **payorId** | **String**| The account owner Payor Id. Required for external users. | [optional] 
 **payorName** | **String**| The payor’s name. This filters via a case insensitive substring match. | [optional] 
 **remoteId** | **String**| The remote id of the payees. | [optional] 
 **status** | **String**| Payment Status | [optional] 
 **sourceAccountName** | **String**| The source account name filter. This filters via a case insensitive substring match. | [optional] 
 **sourceAmountFrom** | **Number**| The source amount from range filter. Filters for sourceAmount &gt;&#x3D; sourceAmountFrom | [optional] 
 **sourceAmountTo** | **Number**| The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo | [optional] 
 **sourceCurrency** | **String**| The source currency filter. Filters based on an exact match on the currency. | [optional] 
 **paymentAmountFrom** | **Number**| The payment amount from range filter. Filters for paymentAmount &gt;&#x3D; paymentAmountFrom | [optional] 
 **paymentAmountTo** | **Number**| The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo | [optional] 
 **paymentCurrency** | **String**| The payment currency filter. Filters based on an exact match on the currency. | [optional] 
 **submittedDateFrom** | **Date**| The submitted date from range filter. Format is yyyy-MM-dd. | [optional] 
 **submittedDateTo** | **Date**| The submitted date to range filter. Format is yyyy-MM-dd. | [optional] 
 **paymentMemo** | **String**| The payment memo filter. This filters via a case insensitive substring match. | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;submittedDateTime:asc,status:asc). Default is sort by remoteId The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status  | [optional] 
 **sensitive** | **Boolean**| Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values.  | [optional] 

### Return type

[**ListPaymentsResponseV3**](ListPaymentsResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

