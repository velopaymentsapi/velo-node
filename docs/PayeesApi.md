# VeloPayments.PayeesApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePayeeByIdV1**](PayeesApi.md#deletePayeeByIdV1) | **DELETE** /v1/payees/{payeeId} | Delete Payee by Id
[**deletePayeeByIdV3**](PayeesApi.md#deletePayeeByIdV3) | **DELETE** /v3/payees/{payeeId} | Delete Payee by Id
[**getPayeeByIdV1**](PayeesApi.md#getPayeeByIdV1) | **GET** /v1/payees/{payeeId} | Get Payee by Id
[**getPayeeByIdV2**](PayeesApi.md#getPayeeByIdV2) | **GET** /v2/payees/{payeeId} | Get Payee by Id
[**getPayeeByIdV3**](PayeesApi.md#getPayeeByIdV3) | **GET** /v3/payees/{payeeId} | Get Payee by Id
[**listPayeeChanges**](PayeesApi.md#listPayeeChanges) | **GET** /v1/deltas/payees | List Payee Changes
[**listPayeeChangesV3**](PayeesApi.md#listPayeeChangesV3) | **GET** /v3/payees/deltas | List Payee Changes
[**listPayeesV1**](PayeesApi.md#listPayeesV1) | **GET** /v1/payees | List Payees V1
[**listPayeesV3**](PayeesApi.md#listPayeesV3) | **GET** /v3/payees | List Payees
[**payeeDetailsUpdateV3**](PayeesApi.md#payeeDetailsUpdateV3) | **POST** /v3/payees/{payeeId}/payeeDetailsUpdate | Update Payee Details
[**v1PayeesPayeeIdRemoteIdUpdatePost**](PayeesApi.md#v1PayeesPayeeIdRemoteIdUpdatePost) | **POST** /v1/payees/{payeeId}/remoteIdUpdate | Update Payee Remote Id
[**v3PayeesPayeeIdRemoteIdUpdatePost**](PayeesApi.md#v3PayeesPayeeIdRemoteIdUpdatePost) | **POST** /v3/payees/{payeeId}/remoteIdUpdate | Update Payee Remote Id



## deletePayeeByIdV1

> deletePayeeByIdV1(payeeId)

Delete Payee by Id

&lt;p&gt;This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:&lt;/p&gt; &lt;p&gt;* Payee ID is not found&lt;/p&gt; &lt;p&gt;* If Payee has not been on-boarded&lt;/p&gt; &lt;p&gt;* If Payee is in grace period&lt;/p&gt; &lt;p&gt;* If Payee has existing payments&lt;/p&gt; &lt;p&gt;Please use V3 instead.&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
apiInstance.deletePayeeByIdV1(payeeId, (error, data, response) => {
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
 **payeeId** | [**String**](.md)| The UUID of the payee. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deletePayeeByIdV3

> deletePayeeByIdV3(payeeId)

Delete Payee by Id

&lt;p&gt;This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:&lt;/p&gt; &lt;p&gt;* Payee ID is not found&lt;/p&gt; &lt;p&gt;* If Payee has not been on-boarded&lt;/p&gt; &lt;p&gt;* If Payee is in grace period&lt;/p&gt; &lt;p&gt;* If Payee has existing payments&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
apiInstance.deletePayeeByIdV3(payeeId, (error, data, response) => {
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
 **payeeId** | [**String**](.md)| The UUID of the payee. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getPayeeByIdV1

> Payee getPayeeByIdV1(payeeId, opts)

Get Payee by Id

&lt;p&gt;Get Payee by Id&lt;/p&gt; &lt;p&gt;Please use V3 instead.&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let opts = {
  'sensitive': true // Boolean | Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
};
apiInstance.getPayeeByIdV1(payeeId, opts, (error, data, response) => {
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


## getPayeeByIdV2

> PayeeResponseV2 getPayeeByIdV2(payeeId, opts)

Get Payee by Id

&lt;p&gt;Get Payee by Id&lt;/p&gt; &lt;p&gt;Please use V3 instead.&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let opts = {
  'sensitive': true // Boolean | Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
};
apiInstance.getPayeeByIdV2(payeeId, opts, (error, data, response) => {
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

[**PayeeResponseV2**](PayeeResponseV2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPayeeByIdV3

> PayeeDetailResponse getPayeeByIdV3(payeeId, opts)

Get Payee by Id

Get Payee by Id

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let opts = {
  'sensitive': true // Boolean | Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values. 
};
apiInstance.getPayeeByIdV3(payeeId, opts, (error, data, response) => {
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

[**PayeeDetailResponse**](PayeeDetailResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPayeeChanges

> PayeeDeltaResponse listPayeeChanges(payorId, updatedSince, opts)

List Payee Changes

&lt;p&gt;Get a paginated response listing payee changes.&lt;/p&gt; &lt;p&gt;Please use V3 instead.&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payorId = null; // String | The Payor ID to find associated Payees
let updatedSince = new Date("2013-10-20T19:20:30+01:00"); // Date | The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
let opts = {
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 100 // Number | Page size. Default is 100. Max allowable is 1000.
};
apiInstance.listPayeeChanges(payorId, updatedSince, opts, (error, data, response) => {
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
 **payorId** | [**String**](.md)| The Payor ID to find associated Payees | 
 **updatedSince** | **Date**| The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm | 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 100. Max allowable is 1000. | [optional] [default to 100]

### Return type

[**PayeeDeltaResponse**](PayeeDeltaResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPayeeChangesV3

> PayeeDeltaResponse2 listPayeeChangesV3(payorId, updatedSince, opts)

List Payee Changes

Get a paginated response listing payee changes.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payorId = null; // String | The Payor ID to find associated Payees
let updatedSince = new Date("2013-10-20T19:20:30+01:00"); // Date | The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
let opts = {
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 100 // Number | Page size. Default is 100. Max allowable is 1000.
};
apiInstance.listPayeeChangesV3(payorId, updatedSince, opts, (error, data, response) => {
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
 **payorId** | [**String**](.md)| The Payor ID to find associated Payees | 
 **updatedSince** | **Date**| The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm | 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 100. Max allowable is 1000. | [optional] [default to 100]

### Return type

[**PayeeDeltaResponse2**](PayeeDeltaResponse2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPayeesV1

> PagedPayeeResponse listPayeesV1(payorId, opts)

List Payees V1

&lt;p&gt;Get a paginated response listing the payees for a payor.&lt;/p&gt; &lt;p&gt;Please use V3 instead.&lt;/&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payorId = null; // String | The account owner Payor ID
let opts = {
  'ofacStatus': new VeloPayments.OfacStatus(), // OfacStatus | The ofacStatus of the payees.
  'onboardedStatus': new VeloPayments.OnboardedStatus(), // OnboardedStatus | The onboarded status of the payees.
  'email': bob@example.com, // String | Email address
  'displayName': Bob Smith, // String | The display name of the payees.
  'remoteId': remoteId123, // String | The remote id of the payees.
  'payeeType': new VeloPayments.PayeeType(), // PayeeType | The onboarded status of the payees.
  'payeeCountry': US, // String | The country of the payee - 2 letter ISO 3166-1 country code (upper case)
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
  'sort': displayName:asc // String | List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus. 
};
apiInstance.listPayeesV1(payorId, opts, (error, data, response) => {
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
 **ofacStatus** | [**OfacStatus**](.md)| The ofacStatus of the payees. | [optional] 
 **onboardedStatus** | [**OnboardedStatus**](.md)| The onboarded status of the payees. | [optional] 
 **email** | [**String**](.md)| Email address | [optional] 
 **displayName** | **String**| The display name of the payees. | [optional] 
 **remoteId** | **String**| The remote id of the payees. | [optional] 
 **payeeType** | [**PayeeType**](.md)| The onboarded status of the payees. | [optional] 
 **payeeCountry** | **String**| The country of the payee - 2 letter ISO 3166-1 country code (upper case) | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;onboardedStatus:asc,name:asc) Default is name:asc &#39;name&#39; is treated as company name for companies - last name + &#39;,&#39; + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.  | [optional] [default to &#39;displayName:asc&#39;]

### Return type

[**PagedPayeeResponse**](PagedPayeeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPayeesV3

> PagedPayeeResponse2 listPayeesV3(payorId, opts)

List Payees

Get a paginated response listing the payees for a payor.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payorId = null; // String | The account owner Payor ID
let opts = {
  'watchlistStatus': new VeloPayments.WatchlistStatus(), // WatchlistStatus | The watchlistStatus of the payees.
  'disabled': true, // Boolean | Payee disabled
  'onboardedStatus': new VeloPayments.OnboardedStatus(), // OnboardedStatus | The onboarded status of the payees.
  'email': bob@example.com, // String | Email address
  'displayName': Bob Smith, // String | The display name of the payees.
  'remoteId': remoteId123, // String | The remote id of the payees.
  'payeeType': new VeloPayments.PayeeType(), // PayeeType | The onboarded status of the payees.
  'payeeCountry': US, // String | The country of the payee - 2 letter ISO 3166-1 country code (upper case)
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
  'sort': displayName:asc // String | List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus. 
};
apiInstance.listPayeesV3(payorId, opts, (error, data, response) => {
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
 **watchlistStatus** | [**WatchlistStatus**](.md)| The watchlistStatus of the payees. | [optional] 
 **disabled** | **Boolean**| Payee disabled | [optional] 
 **onboardedStatus** | [**OnboardedStatus**](.md)| The onboarded status of the payees. | [optional] 
 **email** | [**String**](.md)| Email address | [optional] 
 **displayName** | **String**| The display name of the payees. | [optional] 
 **remoteId** | **String**| The remote id of the payees. | [optional] 
 **payeeType** | [**PayeeType**](.md)| The onboarded status of the payees. | [optional] 
 **payeeCountry** | **String**| The country of the payee - 2 letter ISO 3166-1 country code (upper case) | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;onboardedStatus:asc,name:asc) Default is name:asc &#39;name&#39; is treated as company name for companies - last name + &#39;,&#39; + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.  | [optional] [default to &#39;displayName:asc&#39;]

### Return type

[**PagedPayeeResponse2**](PagedPayeeResponse2.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payeeDetailsUpdateV3

> payeeDetailsUpdateV3(payeeId, updatePayeeDetailsRequest)

Update Payee Details

&lt;p&gt;Update payee details for the given Payee Id.&lt;p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let updatePayeeDetailsRequest = new VeloPayments.UpdatePayeeDetailsRequest(); // UpdatePayeeDetailsRequest | Request to update payee details
apiInstance.payeeDetailsUpdateV3(payeeId, updatePayeeDetailsRequest, (error, data, response) => {
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
 **payeeId** | [**String**](.md)| The UUID of the payee. | 
 **updatePayeeDetailsRequest** | [**UpdatePayeeDetailsRequest**](UpdatePayeeDetailsRequest.md)| Request to update payee details | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PayeesPayeeIdRemoteIdUpdatePost

> v1PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequest)

Update Payee Remote Id

&lt;p&gt;Update the remote Id for the given Payee Id.&lt;/p&gt; &lt;p&gt;Please use V3 instead&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let updateRemoteIdRequest = new VeloPayments.UpdateRemoteIdRequest(); // UpdateRemoteIdRequest | Request to update payee remote id v1
apiInstance.v1PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequest, (error, data, response) => {
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
 **payeeId** | [**String**](.md)| The UUID of the payee. | 
 **updateRemoteIdRequest** | [**UpdateRemoteIdRequest**](UpdateRemoteIdRequest.md)| Request to update payee remote id v1 | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v3PayeesPayeeIdRemoteIdUpdatePost

> v3PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequest)

Update Payee Remote Id

&lt;p&gt;Update the remote Id for the given Payee Id.&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let updateRemoteIdRequest = new VeloPayments.UpdateRemoteIdRequest(); // UpdateRemoteIdRequest | Request to update payee remote id v3
apiInstance.v3PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequest, (error, data, response) => {
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
 **payeeId** | [**String**](.md)| The UUID of the payee. | 
 **updateRemoteIdRequest** | [**UpdateRemoteIdRequest**](UpdateRemoteIdRequest.md)| Request to update payee remote id v3 | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

