# VeloPaymentsApIs.PayorBrandingApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payorAddPayorLogo**](PayorBrandingApi.md#payorAddPayorLogo) | **POST** /v1/payors/{payorId}/branding/logos | Add Logo
[**payorGetBranding**](PayorBrandingApi.md#payorGetBranding) | **POST** /v1/payors/{payorId}/branding | Get Branding


<a name="payorAddPayorLogo"></a>
# **payorAddPayorLogo**
> payorAddPayorLogo(payorId, opts)

Add Logo

Add Payor Logo

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorBrandingApi();
let payorId = null; // String | The account owner Payor ID
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
 **payorId** | [**String**](.md)| The account owner Payor ID | 
 **logo** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="payorGetBranding"></a>
# **payorGetBranding**
> InlineResponse2001 payorGetBranding(payorId)

Get Branding

Get the payor branding details.

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorBrandingApi();
let payorId = null; // String | The account owner Payor ID
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
 **payorId** | [**String**](.md)| The account owner Payor ID | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

