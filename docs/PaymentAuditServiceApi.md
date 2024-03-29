# VeloPayments.PaymentAuditServiceApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportTransactionsCSVV4**](PaymentAuditServiceApi.md#exportTransactionsCSVV4) | **GET** /v4/paymentaudit/transactions | Export Transactions
[**getFundingsV4**](PaymentAuditServiceApi.md#getFundingsV4) | **GET** /v4/paymentaudit/fundings | Get Fundings for Payor
[**getPaymentDetailsV4**](PaymentAuditServiceApi.md#getPaymentDetailsV4) | **GET** /v4/paymentaudit/payments/{paymentId} | Get Payment
[**getPaymentsForPayoutV4**](PaymentAuditServiceApi.md#getPaymentsForPayoutV4) | **GET** /v4/paymentaudit/payouts/{payoutId} | Get Payments for Payout
[**getPayoutStatsV4**](PaymentAuditServiceApi.md#getPayoutStatsV4) | **GET** /v4/paymentaudit/payoutStatistics | Get Payout Statistics
[**getPayoutsForPayorV4**](PaymentAuditServiceApi.md#getPayoutsForPayorV4) | **GET** /v4/paymentaudit/payouts | Get Payouts for Payor
[**listPaymentChangesV4**](PaymentAuditServiceApi.md#listPaymentChangesV4) | **GET** /v4/payments/deltas | List Payment Changes
[**listPaymentsAuditV4**](PaymentAuditServiceApi.md#listPaymentsAuditV4) | **GET** /v4/paymentaudit/payments | Get List of Payments



## exportTransactionsCSVV4

> PayorAmlTransaction exportTransactionsCSVV4(opts)

Export Transactions

Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceApi();
let opts = {
  'payorId': "payorId_example", // String | <p>The Payor ID for whom you wish to run the report.</p> <p>For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.</p> 
  'startDate': new Date("2013-10-20"), // Date | Start date, inclusive. Format is YYYY-MM-DD
  'endDate': new Date("2013-10-20"), // Date | End date, inclusive. Format is YYYY-MM-DD
  'include': "include_example" // String | <p>Mode to determine whether to include other Payor's data in the results.</p> <p>May only be used if payorId is specified.</p> <p>Can be omitted or set to 'payorOnly' or 'payorAndDescendants'.</p> <p>payorOnly: Only include results for the specified Payor. This is the default if 'include' is omitted.</p> <p>payorAndDescendants: Aggregate results for all descendant Payors of the specified Payor. Should only be used if the Payor with the specified payorId has at least one child Payor.</p> <p>Note when a Payor requests the report and include=payorAndDescendants is used, the following additional columns are included in the CSV: Payor Name, Payor Id</p> 
};
apiInstance.exportTransactionsCSVV4(opts, (error, data, response) => {
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
 **payorId** | **String**| &lt;p&gt;The Payor ID for whom you wish to run the report.&lt;/p&gt; &lt;p&gt;For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.&lt;/p&gt;  | [optional] 
 **startDate** | **Date**| Start date, inclusive. Format is YYYY-MM-DD | [optional] 
 **endDate** | **Date**| End date, inclusive. Format is YYYY-MM-DD | [optional] 
 **include** | **String**| &lt;p&gt;Mode to determine whether to include other Payor&#39;s data in the results.&lt;/p&gt; &lt;p&gt;May only be used if payorId is specified.&lt;/p&gt; &lt;p&gt;Can be omitted or set to &#39;payorOnly&#39; or &#39;payorAndDescendants&#39;.&lt;/p&gt; &lt;p&gt;payorOnly: Only include results for the specified Payor. This is the default if &#39;include&#39; is omitted.&lt;/p&gt; &lt;p&gt;payorAndDescendants: Aggregate results for all descendant Payors of the specified Payor. Should only be used if the Payor with the specified payorId has at least one child Payor.&lt;/p&gt; &lt;p&gt;Note when a Payor requests the report and include&#x3D;payorAndDescendants is used, the following additional columns are included in the CSV: Payor Name, Payor Id&lt;/p&gt;  | [optional] 

### Return type

[**PayorAmlTransaction**](PayorAmlTransaction.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv


## getFundingsV4

> GetFundingsResponse getFundingsV4(payorId, opts)

Get Fundings for Payor

&lt;p&gt;Get a list of Fundings for a payor.&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceApi();
let payorId = "payorId_example"; // String | The account owner Payor ID
let opts = {
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "sort_example" // String | List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc``` Default is no sort. The supported sort fields are: dateTime and amount. 
};
apiInstance.getFundingsV4(payorId, opts, (error, data, response) => {
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


## getPaymentDetailsV4

> PaymentResponseV4 getPaymentDetailsV4(paymentId, opts)

Get Payment

Get the payment with the given id. This contains the payment history. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceApi();
let paymentId = "paymentId_example"; // String | Payment Id
let opts = {
  'sensitive': true // Boolean | Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
};
apiInstance.getPaymentDetailsV4(paymentId, opts, (error, data, response) => {
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

[**PaymentResponseV4**](PaymentResponseV4.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentsForPayoutV4

> GetPaymentsForPayoutResponseV4 getPaymentsForPayoutV4(payoutId, opts)

Get Payments for Payout

Get List of payments for Payout, allowing for RETURNED status 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceApi();
let payoutId = "payoutId_example"; // String | The id (UUID) of the payout.
let opts = {
  'remoteId': "remoteId_example", // String | The remote id of the payees.
  'remoteSystemId': "remoteSystemId_example", // String | The id of the remote system that is orchestrating payments
  'status': "status_example", // String | Payment Status
  'sourceAmountFrom': 56, // Number | The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
  'sourceAmountTo': 56, // Number | The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
  'paymentAmountFrom': 56, // Number | The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
  'paymentAmountTo': 56, // Number | The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
  'submittedDateFrom': new Date("2013-10-20"), // Date | The submitted date from range filter. Format is yyyy-MM-dd.
  'submittedDateTo': new Date("2013-10-20"), // Date | The submitted date to range filter. Format is yyyy-MM-dd.
  'transmissionType': "transmissionType_example", // String | Transmission Type * ACH * SAME_DAY_ACH * WIRE 
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "sort_example", // String | List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status 
  'sensitive': true // Boolean | Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
};
apiInstance.getPaymentsForPayoutV4(payoutId, opts, (error, data, response) => {
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
 **remoteSystemId** | **String**| The id of the remote system that is orchestrating payments | [optional] 
 **status** | **String**| Payment Status | [optional] 
 **sourceAmountFrom** | **Number**| The source amount from range filter. Filters for sourceAmount &gt;&#x3D; sourceAmountFrom | [optional] 
 **sourceAmountTo** | **Number**| The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo | [optional] 
 **paymentAmountFrom** | **Number**| The payment amount from range filter. Filters for paymentAmount &gt;&#x3D; paymentAmountFrom | [optional] 
 **paymentAmountTo** | **Number**| The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo | [optional] 
 **submittedDateFrom** | **Date**| The submitted date from range filter. Format is yyyy-MM-dd. | [optional] 
 **submittedDateTo** | **Date**| The submitted date to range filter. Format is yyyy-MM-dd. | [optional] 
 **transmissionType** | **String**| Transmission Type * ACH * SAME_DAY_ACH * WIRE  | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;submittedDateTime:asc,status:asc). Default is sort by remoteId The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime and status  | [optional] 
 **sensitive** | **Boolean**| Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values.  | [optional] 

### Return type

[**GetPaymentsForPayoutResponseV4**](GetPaymentsForPayoutResponseV4.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPayoutStatsV4

> GetPayoutStatistics getPayoutStatsV4(opts)

Get Payout Statistics

&lt;p&gt;Get payout statistics for a payor.&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceApi();
let opts = {
  'payorId': "payorId_example" // String | The account owner Payor ID. Required for external users.
};
apiInstance.getPayoutStatsV4(opts, (error, data, response) => {
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


## getPayoutsForPayorV4

> GetPayoutsResponse getPayoutsForPayorV4(opts)

Get Payouts for Payor

Get List of payouts for payor 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceApi();
let opts = {
  'payorId': "payorId_example", // String | The id (UUID) of the payor funding the payout or the payor whose payees are being paid.
  'payoutMemo': "payoutMemo_example", // String | Payout Memo filter - case insensitive sub-string match
  'status': "status_example", // String | Payout Status
  'submittedDateFrom': new Date("2013-10-20"), // Date | The submitted date from range filter. Format is yyyy-MM-dd.
  'submittedDateTo': new Date("2013-10-20"), // Date | The submitted date to range filter. Format is yyyy-MM-dd.
  'fromPayorName': "fromPayorName_example", // String | The name of the payor whose payees are being paid. This filters via a case insensitive substring match.
  'scheduledForDateFrom': new Date("2013-10-20"), // Date | Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd.
  'scheduledForDateTo': new Date("2013-10-20"), // Date | Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd.
  'scheduleStatus': "scheduleStatus_example", // String | Payout Schedule Status
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "sort_example" // String | List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc) Default is submittedDateTime:asc The supported sort fields are: submittedDateTime, instructedDateTime, status, totalPayments, payoutId, scheduledFor 
};
apiInstance.getPayoutsForPayorV4(opts, (error, data, response) => {
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
 **payorId** | **String**| The id (UUID) of the payor funding the payout or the payor whose payees are being paid. | [optional] 
 **payoutMemo** | **String**| Payout Memo filter - case insensitive sub-string match | [optional] 
 **status** | **String**| Payout Status | [optional] 
 **submittedDateFrom** | **Date**| The submitted date from range filter. Format is yyyy-MM-dd. | [optional] 
 **submittedDateTo** | **Date**| The submitted date to range filter. Format is yyyy-MM-dd. | [optional] 
 **fromPayorName** | **String**| The name of the payor whose payees are being paid. This filters via a case insensitive substring match. | [optional] 
 **scheduledForDateFrom** | **Date**| Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd. | [optional] 
 **scheduledForDateTo** | **Date**| Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd. | [optional] 
 **scheduleStatus** | **String**| Payout Schedule Status | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;submittedDateTime:asc,instructedDateTime:asc,status:asc) Default is submittedDateTime:asc The supported sort fields are: submittedDateTime, instructedDateTime, status, totalPayments, payoutId, scheduledFor  | [optional] 

### Return type

[**GetPayoutsResponse**](GetPayoutsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPaymentChangesV4

> PaymentDeltaResponse listPaymentChangesV4(payorId, updatedSince, opts)

List Payment Changes

Get a paginated response listing payment changes.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceApi();
let payorId = "payorId_example"; // String | The Payor ID to find associated Payments
let updatedSince = new Date("2013-10-20T19:20:30+01:00"); // Date | The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
let opts = {
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 100 // Number | The number of results to return in a page
};
apiInstance.listPaymentChangesV4(payorId, updatedSince, opts, (error, data, response) => {
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

[**PaymentDeltaResponse**](PaymentDeltaResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPaymentsAuditV4

> ListPaymentsResponseV4 listPaymentsAuditV4(opts)

Get List of Payments

Get payments for the given payor Id

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PaymentAuditServiceApi();
let opts = {
  'payeeId': "payeeId_example", // String | The UUID of the payee.
  'payorId': "payorId_example", // String | The account owner Payor Id. Required for external users.
  'payorName': "payorName_example", // String | The payor’s name. This filters via a case insensitive substring match.
  'remoteId': "remoteId_example", // String | The remote id of the payees.
  'remoteSystemId': "remoteSystemId_example", // String | The id of the remote system that is orchestrating payments
  'status': "status_example", // String | Payment Status
  'transmissionType': "transmissionType_example", // String | Transmission Type * ACH * SAME_DAY_ACH * WIRE 
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
  'scheduledForDateFrom': new Date("2013-10-20"), // Date | Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd.
  'scheduledForDateTo': new Date("2013-10-20"), // Date | Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd.
  'scheduleStatus': "scheduleStatus_example", // String | Payout Schedule Status
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | The number of results to return in a page
  'sort': "sort_example", // String | List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by submittedDateTime:desc,paymentId:asc The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime, status and paymentId 
  'sensitive': true // Boolean | Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
};
apiInstance.listPaymentsAuditV4(opts, (error, data, response) => {
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
 **remoteSystemId** | **String**| The id of the remote system that is orchestrating payments | [optional] 
 **status** | **String**| Payment Status | [optional] 
 **transmissionType** | **String**| Transmission Type * ACH * SAME_DAY_ACH * WIRE  | [optional] 
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
 **scheduledForDateFrom** | **Date**| Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd. | [optional] 
 **scheduledForDateTo** | **Date**| Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd. | [optional] 
 **scheduleStatus** | **String**| Payout Schedule Status | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;submittedDateTime:asc,status:asc). Default is sort by submittedDateTime:desc,paymentId:asc The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency, routingNumber, accountNumber, remoteId, submittedDateTime, status and paymentId  | [optional] 
 **sensitive** | **Boolean**| Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values.  | [optional] 

### Return type

[**ListPaymentsResponseV4**](ListPaymentsResponseV4.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

