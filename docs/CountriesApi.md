# VeloPaymentsApIs.CountriesApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSupportedCountries**](CountriesApi.md#listSupportedCountries) | **GET** /v1/supportedCountries | List Supported Countries
[**v1PaymentChannelRulesGet**](CountriesApi.md#v1PaymentChannelRulesGet) | **GET** /v1/paymentChannelRules | List Payment Channel Country Rules


<a name="listSupportedCountries"></a>
# **listSupportedCountries**
> InlineResponse2003 listSupportedCountries(payorCreateApiKeyRequest)

List Supported Countries

List the supported countries.

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.CountriesApi();
let payorCreateApiKeyRequest = new VeloPaymentsApIs.PayorCreateApiKeyRequest(); // PayorCreateApiKeyRequest | Details of application API key to create
apiInstance.listSupportedCountries(payorCreateApiKeyRequest, (error, data, response) => {
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
 **payorCreateApiKeyRequest** | [**PayorCreateApiKeyRequest**](PayorCreateApiKeyRequest.md)| Details of application API key to create | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1PaymentChannelRulesGet"></a>
# **v1PaymentChannelRulesGet**
> InlineResponse2002 v1PaymentChannelRulesGet()

List Payment Channel Country Rules

List the country specific payment channel rules.

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.CountriesApi();
apiInstance.v1PaymentChannelRulesGet((error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

