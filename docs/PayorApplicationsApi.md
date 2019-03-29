# VeloPaymentsApIs.PayorApplicationsApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payorCreateApiKeyRequest**](PayorApplicationsApi.md#payorCreateApiKeyRequest) | **POST** /v1/payors/{payorId}/applications/{applicationId}/keys | Create API Key
[**payorCreateApplicationRequest**](PayorApplicationsApi.md#payorCreateApplicationRequest) | **POST** /v1/payors/{payorId}/applications | Create Application


<a name="payorCreateApiKeyRequest"></a>
# **payorCreateApiKeyRequest**
> InlineResponse200 payorCreateApiKeyRequest(payorId, applicationId, payorCreateApiKeyRequest)

Create API Key

Create an an API key for the given payor Id and application Id

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorApplicationsApi();
let payorId = null; // String | The account owner Payor ID
let applicationId = null; // String | Application ID
let payorCreateApiKeyRequest = new VeloPaymentsApIs.PayorCreateApiKeyRequest(); // PayorCreateApiKeyRequest | Details of application API key to create
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
 **payorId** | [**String**](.md)| The account owner Payor ID | 
 **applicationId** | [**String**](.md)| Application ID | 
 **payorCreateApiKeyRequest** | [**PayorCreateApiKeyRequest**](PayorCreateApiKeyRequest.md)| Details of application API key to create | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="payorCreateApplicationRequest"></a>
# **payorCreateApplicationRequest**
> payorCreateApplicationRequest(payorId, payorCreateApplicationRequest)

Create Application

Create an application for the given Payor ID

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorApplicationsApi();
let payorId = null; // String | The account owner Payor ID
let payorCreateApplicationRequest = new VeloPaymentsApIs.PayorCreateApplicationRequest(); // PayorCreateApplicationRequest | Details of application to create
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
 **payorId** | [**String**](.md)| The account owner Payor ID | 
 **payorCreateApplicationRequest** | [**PayorCreateApplicationRequest**](PayorCreateApplicationRequest.md)| Details of application to create | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

