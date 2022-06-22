# VeloPayments.PayorsApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayorById**](PayorsApi.md#getPayorById) | **GET** /v1/payors/{payorId} | Get Payor
[**getPayorByIdV2**](PayorsApi.md#getPayorByIdV2) | **GET** /v2/payors/{payorId} | Get Payor
[**payorAddPayorLogo**](PayorsApi.md#payorAddPayorLogo) | **POST** /v1/payors/{payorId}/branding/logos | Add Logo
[**payorCreateApiKeyRequest**](PayorsApi.md#payorCreateApiKeyRequest) | **POST** /v1/payors/{payorId}/applications/{applicationId}/keys | Create API Key
[**payorCreateApplicationRequest**](PayorsApi.md#payorCreateApplicationRequest) | **POST** /v1/payors/{payorId}/applications | Create Application
[**payorEmailOptOut**](PayorsApi.md#payorEmailOptOut) | **POST** /v1/payors/{payorId}/reminderEmailsUpdate | Reminder Email Opt-Out
[**payorGetBranding**](PayorsApi.md#payorGetBranding) | **GET** /v1/payors/{payorId}/branding | Get Branding
[**payorLinks**](PayorsApi.md#payorLinks) | **GET** /v1/payorLinks | List Payor Links



## getPayorById

> PayorV1 getPayorById(payorId)

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
apiInstance.getPayorById(payorId, (error, data, response) => {
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


## payorAddPayorLogo

> payorAddPayorLogo(payorId, opts)

Add Logo

Add Payor Logo. Logo file is used in your branding, and emails sent to payees.

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
apiInstance.payorAddPayorLogo(payorId, opts, (error, data, response) => {
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


## payorCreateApiKeyRequest

> PayorCreateApiKeyResponse payorCreateApiKeyRequest(payorId, applicationId, payorCreateApiKeyRequest)

Create API Key

Create an an API key for the given payor Id and application Id

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
apiInstance.payorCreateApiKeyRequest(payorId, applicationId, payorCreateApiKeyRequest, (error, data, response) => {
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


## payorCreateApplicationRequest

> payorCreateApplicationRequest(payorId, payorCreateApplicationRequest)

Create Application

Create an application for the given Payor ID. Applications are programatic users which can be assigned unique keys.

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
apiInstance.payorCreateApplicationRequest(payorId, payorCreateApplicationRequest, (error, data, response) => {
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


## payorLinks

> PayorLinksResponse payorLinks(opts)

List Payor Links

This endpoint allows you to list payor links

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayorsApi();
let opts = {
  'descendantsOfPayor': "descendantsOfPayor_example", // String | The Payor ID from which to start the query to show all descendants
  'parentOfPayor': "parentOfPayor_example", // String | Look for the parent payor details for this payor id
  'fields': "fields_example" // String | List of additional Payor fields to include in the response for each Payor. The values of payorId and payorName and always included for each Payor - 'fields' allows you to add to this. Example: ```fields=primaryContactEmail,kycState``` - will include payorId+payorName+primaryContactEmail+kycState for each Payor Default if not specified is to include only payorId and payorName. The supported fields are any combination of: primaryContactEmail,kycState 
};
apiInstance.payorLinks(opts, (error, data, response) => {
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
 **descendantsOfPayor** | **String**| The Payor ID from which to start the query to show all descendants | [optional] 
 **parentOfPayor** | **String**| Look for the parent payor details for this payor id | [optional] 
 **fields** | **String**| List of additional Payor fields to include in the response for each Payor. The values of payorId and payorName and always included for each Payor - &#39;fields&#39; allows you to add to this. Example: &#x60;&#x60;&#x60;fields&#x3D;primaryContactEmail,kycState&#x60;&#x60;&#x60; - will include payorId+payorName+primaryContactEmail+kycState for each Payor Default if not specified is to include only payorId and payorName. The supported fields are any combination of: primaryContactEmail,kycState  | [optional] 

### Return type

[**PayorLinksResponse**](PayorLinksResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

