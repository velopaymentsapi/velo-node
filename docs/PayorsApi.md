# VeloPaymentsApIs.PayorsApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayorById**](PayorsApi.md#getPayorById) | **GET** /v1/payors/{payorId} | Get Payor


<a name="getPayorById"></a>
# **getPayorById**
> Payor getPayorById(payorId)

Get Payor

Get a Single Payor by Id (200 - OK, 404 - payor not found). 

### Example
```javascript
import VeloPaymentsApIs from 'velo';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorsApi();
let payorId = null; // String | The account owner Payor ID
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
 **payorId** | [**String**](.md)| The account owner Payor ID | 

### Return type

[**Payor**](Payor.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

