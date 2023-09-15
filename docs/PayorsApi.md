# VeloPayments.PayorsApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayorByIdV1**](PayorsApi.md#getPayorByIdV1) | **GET** /v1/payors/{payorId} | Get Payor
[**getPayorByIdV2**](PayorsApi.md#getPayorByIdV2) | **GET** /v2/payors/{payorId} | Get Payor
[**payorAddPayorLogoV1**](PayorsApi.md#payorAddPayorLogoV1) | **POST** /v1/payors/{payorId}/branding/logos | Add Logo
[**payorCreateApiKeyV1**](PayorsApi.md#payorCreateApiKeyV1) | **POST** /v1/payors/{payorId}/applications/{applicationId}/keys | Create API Key
[**payorCreateApplicationV1**](PayorsApi.md#payorCreateApplicationV1) | **POST** /v1/payors/{payorId}/applications | Create Application
[**payorEmailOptOut**](PayorsApi.md#payorEmailOptOut) | **POST** /v1/payors/{payorId}/reminderEmailsUpdate | Reminder Email Opt-Out
[**payorGetBranding**](PayorsApi.md#payorGetBranding) | **GET** /v1/payors/{payorId}/branding | Get Branding



## getPayorByIdV1

> PayorV1 getPayorByIdV1(payorId)

Get Payor

&lt;p&gt;Get a Single Payor by Id.&lt;/p&gt; &lt;p&gt;deprecated since v2.10 - Use /v2/payors 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayorsApi();
let payorId = "payorId_example"; // String | The Payor Id
apiInstance.getPayorByIdV1(payorId, (error, data, response) => {
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
 **payorId** | **String**| The Payor Id | 

### Return type

[**PayorV1**](PayorV1.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPayorByIdV2

> PayorV2 getPayorByIdV2(payorId)

Get Payor

Get a Single Payor by Id. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayorsApi();
let payorId = "payorId_example"; // String | The Payor Id
apiInstance.getPayorByIdV2(payorId, (error, data, response) => {
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
 **payorId** | **String**| The Payor Id | 

### Return type

[**PayorV2**](PayorV2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payorAddPayorLogoV1

> payorAddPayorLogoV1(payorId, opts)

Add Logo

&lt;p&gt;Add Payor Logo&lt;/p&gt; &lt;p&gt;Logo file is used in your branding and emails sent to payees&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayorsApi();
let payorId = "payorId_example"; // String | The Payor Id
let opts = {
  'logo': "/path/to/file" // File | 
};
apiInstance.payorAddPayorLogoV1(payorId, opts, (error, data, response) => {
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
 **payorId** | **String**| The Payor Id | 
 **logo** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## payorCreateApiKeyV1

> PayorCreateApiKeyResponse payorCreateApiKeyV1(payorId, applicationId, payorCreateApiKeyRequest)

Create API Key

&lt;p&gt;Create an an API key for the given payor Id and application Id&lt;/p&gt; &lt;p&gt;You can create multiple API Keys for a given application&lt;/p&gt; &lt;p&gt;API Keys are programmatic users for integrating your application with the Velo platform&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayorsApi();
let payorId = "payorId_example"; // String | The Payor Id
let applicationId = "applicationId_example"; // String | Application ID
let payorCreateApiKeyRequest = new VeloPayments.PayorCreateApiKeyRequest(); // PayorCreateApiKeyRequest | Details of application API key to create
apiInstance.payorCreateApiKeyV1(payorId, applicationId, payorCreateApiKeyRequest, (error, data, response) => {
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
 **payorId** | **String**| The Payor Id | 
 **applicationId** | **String**| Application ID | 
 **payorCreateApiKeyRequest** | [**PayorCreateApiKeyRequest**](PayorCreateApiKeyRequest.md)| Details of application API key to create | 

### Return type

[**PayorCreateApiKeyResponse**](PayorCreateApiKeyResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## payorCreateApplicationV1

> payorCreateApplicationV1(payorId, payorCreateApplicationRequest)

Create Application

&lt;p&gt;Create an application for the given Payor ID.&lt;/p&gt; &lt;p&gt;Applications provide a means to group your API Keys&lt;/p&gt; &lt;p&gt;For example you might have an SAP application that you wish to integrate with Velo&lt;/p&gt; &lt;p&gt;You can create an application and then create one or more API keys for the application&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayorsApi();
let payorId = "payorId_example"; // String | The Payor Id
let payorCreateApplicationRequest = new VeloPayments.PayorCreateApplicationRequest(); // PayorCreateApplicationRequest | Details of application to create
apiInstance.payorCreateApplicationV1(payorId, payorCreateApplicationRequest, (error, data, response) => {
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
 **payorId** | **String**| The Payor Id | 
 **payorCreateApplicationRequest** | [**PayorCreateApplicationRequest**](PayorCreateApplicationRequest.md)| Details of application to create | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## payorEmailOptOut

> payorEmailOptOut(payorId, payorEmailOptOutRequest)

Reminder Email Opt-Out

Update the emailRemindersOptOut field for a Payor. This API can be used to opt out or opt into Payor Reminder emails. These emails are typically around payee events such as payees registering and onboarding. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayorsApi();
let payorId = "payorId_example"; // String | The Payor Id
let payorEmailOptOutRequest = new VeloPayments.PayorEmailOptOutRequest(); // PayorEmailOptOutRequest | Reminder Emails Opt-Out Request
apiInstance.payorEmailOptOut(payorId, payorEmailOptOutRequest, (error, data, response) => {
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
 **payorId** | **String**| The Payor Id | 
 **payorEmailOptOutRequest** | [**PayorEmailOptOutRequest**](PayorEmailOptOutRequest.md)| Reminder Emails Opt-Out Request | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## payorGetBranding

> PayorBrandingResponse payorGetBranding(payorId)

Get Branding

Get the payor branding details.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayorsApi();
let payorId = "payorId_example"; // String | The Payor Id
apiInstance.payorGetBranding(payorId, (error, data, response) => {
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
 **payorId** | **String**| The Payor Id | 

### Return type

[**PayorBrandingResponse**](PayorBrandingResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

