# VeloPayments.PayorsPrivateApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayorLinks**](PayorsPrivateApi.md#createPayorLinks) | **POST** /v1/payorLinks | Create a Payor Link



## createPayorLinks

> createPayorLinks(createPayorLinkRequest)

Create a Payor Link

This endpoint allows you to create a payor link.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuthVeloBackOffice
let oAuthVeloBackOffice = defaultClient.authentications['oAuthVeloBackOffice'];
oAuthVeloBackOffice.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayorsPrivateApi();
let createPayorLinkRequest = new VeloPayments.CreatePayorLinkRequest(); // CreatePayorLinkRequest | Request to create a payor link
apiInstance.createPayorLinks(createPayorLinkRequest, (error, data, response) => {
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
 **createPayorLinkRequest** | [**CreatePayorLinkRequest**](CreatePayorLinkRequest.md)| Request to create a payor link | 

### Return type

null (empty response body)

### Authorization

[oAuthVeloBackOffice](../README.md#oAuthVeloBackOffice)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

