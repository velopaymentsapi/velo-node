# VeloPaymentsApIs.PayeesApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayeeById**](PayeesApi.md#getPayeeById) | **GET** /v1/payees/{payeeId} | Get Payee by Id
[**listPayees**](PayeesApi.md#listPayees) | **GET** /v1/payees | List Payees


<a name="getPayeeById"></a>
# **getPayeeById**
> Payee getPayeeById(payeeId, opts)

Get Payee by Id

Get Payee by Id

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayeesApi();
let payeeId = null; // String | The UUID of the payee.
let opts = {
  'sensitive': true // Boolean | Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
};
apiInstance.getPayeeById(payeeId, opts, (error, data, response) => {
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
 **payeeId** | [**String**](.md)| The UUID of the payee. | 
 **sensitive** | **Boolean**| Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values.  | [optional] 

### Return type

[**Payee**](Payee.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPayees"></a>
# **listPayees**
> PayeeResponse listPayees(payorId, opts)

List Payees

Get a paginated response listing the payees for a payor.

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayeesApi();
let payorId = null; // String | The account owner Payor ID
let opts = {
  'ofacStatus': null, // Object | The ofacStatus of the payees.
  'onboardedStatus': new VeloPaymentsApIs.OnboardedStatus(), // OnboardedStatus | The onboarded status of the payees.
  'email': null, // String | Email address
  'displayName': "displayName_example", // String | The display name of the payees.
  'remoteId': "remoteId_example", // String | The remote id of the payees.
  'payeeType': new VeloPaymentsApIs.PayeeType(), // PayeeType | The onboarded status of the payees.
  'payeeCountry': "payeeCountry_example", // String | The country of the payees.
  'pageNumber': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
  'sort': "'displayName:asc'" // String | List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus. 
};
apiInstance.listPayees(payorId, opts, (error, data, response) => {
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
 **ofacStatus** | [**Object**](.md)| The ofacStatus of the payees. | [optional] 
 **onboardedStatus** | [**OnboardedStatus**](.md)| The onboarded status of the payees. | [optional] 
 **email** | [**String**](.md)| Email address | [optional] 
 **displayName** | **String**| The display name of the payees. | [optional] 
 **remoteId** | **String**| The remote id of the payees. | [optional] 
 **payeeType** | [**PayeeType**](.md)| The onboarded status of the payees. | [optional] 
 **payeeCountry** | **String**| The country of the payees. | [optional] 
 **pageNumber** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;onboardedStatus:asc,name:asc) Default is name:asc &#39;name&#39; is treated as company name for companies - last name + &#39;,&#39; + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.  | [optional] [default to &#39;displayName:asc&#39;]

### Return type

[**PayeeResponse**](PayeeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

