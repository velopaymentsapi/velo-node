# VeloPayments.PayeePaymentChannelsApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentChannelV4**](PayeePaymentChannelsApi.md#createPaymentChannelV4) | **POST** /v4/payees/{payeeId}/paymentChannels/ | Create Payment Channel
[**deletePaymentChannelV4**](PayeePaymentChannelsApi.md#deletePaymentChannelV4) | **DELETE** /v4/payees/{payeeId}/paymentChannels/{paymentChannelId} | Delete Payment Channel
[**enablePaymentChannelV4**](PayeePaymentChannelsApi.md#enablePaymentChannelV4) | **POST** /v4/payees/{payeeId}/paymentChannels/{paymentChannelId}/enable | Enable Payment Channel
[**getPaymentChannelV4**](PayeePaymentChannelsApi.md#getPaymentChannelV4) | **GET** /v4/payees/{payeeId}/paymentChannels/{paymentChannelId} | Get Payment Channel Details
[**getPaymentChannelsV4**](PayeePaymentChannelsApi.md#getPaymentChannelsV4) | **GET** /v4/payees/{payeeId}/paymentChannels/ | Get All Payment Channels Details
[**updatePaymentChannelOrderV4**](PayeePaymentChannelsApi.md#updatePaymentChannelOrderV4) | **PUT** /v4/payees/{payeeId}/paymentChannels/order | Update Payees preferred Payment Channel order
[**updatePaymentChannelV4**](PayeePaymentChannelsApi.md#updatePaymentChannelV4) | **POST** /v4/payees/{payeeId}/paymentChannels/{paymentChannelId} | Update Payment Channel



## createPaymentChannelV4

> createPaymentChannelV4(payeeId, createPaymentChannelRequestV4)

Create Payment Channel

&lt;p&gt;Create a payment channel&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeePaymentChannelsApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let createPaymentChannelRequestV4 = new VeloPayments.CreatePaymentChannelRequestV4(); // CreatePaymentChannelRequestV4 | Post payment channel to update
apiInstance.createPaymentChannelV4(payeeId, createPaymentChannelRequestV4, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **createPaymentChannelRequestV4** | [**CreatePaymentChannelRequestV4**](CreatePaymentChannelRequestV4.md)| Post payment channel to update | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePaymentChannelV4

> deletePaymentChannelV4(payeeId, paymentChannelId)

Delete Payment Channel

&lt;p&gt;Delete a payees payment channel&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeePaymentChannelsApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let paymentChannelId = 70faaff7-2c32-4b44-b27f-f0b6c484e6f3; // String | The UUID of the payment channel.
apiInstance.deletePaymentChannelV4(payeeId, paymentChannelId, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **paymentChannelId** | **String**| The UUID of the payment channel. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## enablePaymentChannelV4

> enablePaymentChannelV4(payeeId, paymentChannelId)

Enable Payment Channel

&lt;p&gt;Enable a payment channel for a payee&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeePaymentChannelsApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let paymentChannelId = 70faaff7-2c32-4b44-b27f-f0b6c484e6f3; // String | The UUID of the payment channel.
apiInstance.enablePaymentChannelV4(payeeId, paymentChannelId, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **paymentChannelId** | **String**| The UUID of the payment channel. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentChannelV4

> PaymentChannelResponseV4 getPaymentChannelV4(payeeId, paymentChannelId, opts)

Get Payment Channel Details

&lt;p&gt;Get the payment channel details for the payee&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeePaymentChannelsApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let paymentChannelId = 70faaff7-2c32-4b44-b27f-f0b6c484e6f3; // String | The UUID of the payment channel.
let opts = {
  'payable': true, // Boolean | payable if true only return the payment channel if the payee is payable
  'sensitive': true // Boolean | <p>Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.</p> <p>If set to true, and you have permission, the PII values will be returned as their original unmasked values.</p> 
};
apiInstance.getPaymentChannelV4(payeeId, paymentChannelId, opts, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **paymentChannelId** | **String**| The UUID of the payment channel. | 
 **payable** | **Boolean**| payable if true only return the payment channel if the payee is payable | [optional] 
 **sensitive** | **Boolean**| &lt;p&gt;Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.&lt;/p&gt; &lt;p&gt;If set to true, and you have permission, the PII values will be returned as their original unmasked values.&lt;/p&gt;  | [optional] 

### Return type

[**PaymentChannelResponseV4**](PaymentChannelResponseV4.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentChannelsV4

> PaymentChannelsResponseV4 getPaymentChannelsV4(payeeId, opts)

Get All Payment Channels Details

&lt;p&gt;Get all payment channels details for a payee&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeePaymentChannelsApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let opts = {
  'payorId': "payorId_example", // String | <p>(UUID) the id of the Payor.</p> <p>If specified the payment channels are filtered to those mapped to this payor.</p> 
  'payable': true, // Boolean | payable if true only return the payment channel if the payee is payable
  'sensitive': true, // Boolean | <p>Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.</p> <p>If set to true, and you have permission, the PII values will be returned as their original unmasked values.</p> 
  'ignorePayorInviteStatus': true // Boolean | payable if true only return the payment channel if the payee is payable
};
apiInstance.getPaymentChannelsV4(payeeId, opts, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **payorId** | **String**| &lt;p&gt;(UUID) the id of the Payor.&lt;/p&gt; &lt;p&gt;If specified the payment channels are filtered to those mapped to this payor.&lt;/p&gt;  | [optional] 
 **payable** | **Boolean**| payable if true only return the payment channel if the payee is payable | [optional] 
 **sensitive** | **Boolean**| &lt;p&gt;Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.&lt;/p&gt; &lt;p&gt;If set to true, and you have permission, the PII values will be returned as their original unmasked values.&lt;/p&gt;  | [optional] 
 **ignorePayorInviteStatus** | **Boolean**| payable if true only return the payment channel if the payee is payable | [optional] 

### Return type

[**PaymentChannelsResponseV4**](PaymentChannelsResponseV4.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePaymentChannelOrderV4

> updatePaymentChannelOrderV4(payeeId, paymentChannelOrderRequestV4)

Update Payees preferred Payment Channel order

&lt;p&gt;Update the Payee&#39;s preferred order of payment channels by passing in just the payment channel ids. When payments are made to the payee then in the absence of any other rules (e.g. matching on currency) the first payment channel in this list will be chosen. &lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeePaymentChannelsApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let paymentChannelOrderRequestV4 = new VeloPayments.PaymentChannelOrderRequestV4(); // PaymentChannelOrderRequestV4 | Put the payment channel ids in the preferred order
apiInstance.updatePaymentChannelOrderV4(payeeId, paymentChannelOrderRequestV4, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **paymentChannelOrderRequestV4** | [**PaymentChannelOrderRequestV4**](PaymentChannelOrderRequestV4.md)| Put the payment channel ids in the preferred order | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePaymentChannelV4

> updatePaymentChannelV4(payeeId, paymentChannelId, updatePaymentChannelRequestV4)

Update Payment Channel

&lt;p&gt;Update the details of the payment channel. Note payment channels are immutable. The current payment channel will be logically deleted as part of this call and replaced with new one with the correct details; this endpoint will return a Location header with a link to the new payment channel upon success. Updating a currently disabled payment channel will result in a new, fully enabled, payment channel.&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeePaymentChannelsApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let paymentChannelId = 70faaff7-2c32-4b44-b27f-f0b6c484e6f3; // String | The UUID of the payment channel.
let updatePaymentChannelRequestV4 = new VeloPayments.UpdatePaymentChannelRequestV4(); // UpdatePaymentChannelRequestV4 | Post payment channel to update
apiInstance.updatePaymentChannelV4(payeeId, paymentChannelId, updatePaymentChannelRequestV4, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **paymentChannelId** | **String**| The UUID of the payment channel. | 
 **updatePaymentChannelRequestV4** | [**UpdatePaymentChannelRequestV4**](UpdatePaymentChannelRequestV4.md)| Post payment channel to update | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

