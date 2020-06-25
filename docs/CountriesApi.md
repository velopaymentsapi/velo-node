# VeloPayments.CountriesApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPaymentChannelRulesV1**](CountriesApi.md#listPaymentChannelRulesV1) | **GET** /v1/paymentChannelRules | List Payment Channel Country Rules
[**listSupportedCountriesV1**](CountriesApi.md#listSupportedCountriesV1) | **GET** /v1/supportedCountries | List Supported Countries
[**listSupportedCountriesV2**](CountriesApi.md#listSupportedCountriesV2) | **GET** /v2/supportedCountries | List Supported Countries



## listPaymentChannelRulesV1

> PaymentChannelRulesResponse listPaymentChannelRulesV1()

List Payment Channel Country Rules

List the country specific payment channel rules.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.CountriesApi();
apiInstance.listPaymentChannelRulesV1((error, data, response) => {
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

[**PaymentChannelRulesResponse**](PaymentChannelRulesResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSupportedCountriesV1

> SupportedCountriesResponse listSupportedCountriesV1()

List Supported Countries

&lt;p&gt;List the supported countries.&lt;/p&gt; &lt;p&gt;This version will be retired in March 2020. Use /v2/supportedCountries&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.CountriesApi();
apiInstance.listSupportedCountriesV1((error, data, response) => {
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

[**SupportedCountriesResponse**](SupportedCountriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSupportedCountriesV2

> SupportedCountriesResponseV2 listSupportedCountriesV2()

List Supported Countries

List the supported countries.

### Example

```javascript
import VeloPayments from 'velo-payments';

let apiInstance = new VeloPayments.CountriesApi();
apiInstance.listSupportedCountriesV2((error, data, response) => {
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

[**SupportedCountriesResponseV2**](SupportedCountriesResponseV2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

