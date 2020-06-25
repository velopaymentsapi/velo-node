# VeloPayments.CurrenciesApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSupportedCurrenciesV2**](CurrenciesApi.md#listSupportedCurrenciesV2) | **GET** /v2/currencies | List Supported Currencies



## listSupportedCurrenciesV2

> SupportedCurrencyResponseV2 listSupportedCurrenciesV2()

List Supported Currencies

List the supported currencies.

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.CurrenciesApi();
apiInstance.listSupportedCurrenciesV2((error, data, response) => {
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

[**SupportedCurrencyResponseV2**](SupportedCurrencyResponseV2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

