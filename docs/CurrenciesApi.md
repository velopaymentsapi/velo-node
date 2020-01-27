# VeloPayments.CurrenciesApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSupportedCurrencies**](CurrenciesApi.md#listSupportedCurrencies) | **GET** /v2/currencies | List Supported Currencies



## listSupportedCurrencies

> SupportedCurrencyResponse listSupportedCurrencies()

List Supported Currencies

List the supported currencies.

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.CurrenciesApi();
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

[**SupportedCurrencyResponse**](SupportedCurrencyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

