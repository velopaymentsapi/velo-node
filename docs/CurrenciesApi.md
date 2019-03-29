# VeloPaymentsApIs.CurrenciesApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSupportedCurrencies**](CurrenciesApi.md#listSupportedCurrencies) | **GET** /v2/currencies | List Supported Currencies


<a name="listSupportedCurrencies"></a>
# **listSupportedCurrencies**
> InlineResponse2004 listSupportedCurrencies()

List Supported Currencies

List the supported currencies.

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.CurrenciesApi();
apiInstance.listSupportedCurrencies((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

