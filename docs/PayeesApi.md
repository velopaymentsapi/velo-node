# VeloPayments.PayeesApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePayeeByIdV3**](PayeesApi.md#deletePayeeByIdV3) | **DELETE** /v3/payees/{payeeId} | Delete Payee by Id
[**deletePayeeByIdV4**](PayeesApi.md#deletePayeeByIdV4) | **DELETE** /v4/payees/{payeeId} | Delete Payee by Id
[**getPayeeByIdV3**](PayeesApi.md#getPayeeByIdV3) | **GET** /v3/payees/{payeeId} | Get Payee by Id
[**getPayeeByIdV4**](PayeesApi.md#getPayeeByIdV4) | **GET** /v4/payees/{payeeId} | Get Payee by Id
[**listPayeeChangesV3**](PayeesApi.md#listPayeeChangesV3) | **GET** /v3/payees/deltas | List Payee Changes
[**listPayeeChangesV4**](PayeesApi.md#listPayeeChangesV4) | **GET** /v4/payees/deltas | List Payee Changes
[**listPayeesV3**](PayeesApi.md#listPayeesV3) | **GET** /v3/payees | List Payees
[**listPayeesV4**](PayeesApi.md#listPayeesV4) | **GET** /v4/payees | List Payees
[**payeeDetailsUpdateV3**](PayeesApi.md#payeeDetailsUpdateV3) | **POST** /v3/payees/{payeeId}/payeeDetailsUpdate | Update Payee Details
[**payeeDetailsUpdateV4**](PayeesApi.md#payeeDetailsUpdateV4) | **POST** /v4/payees/{payeeId}/payeeDetailsUpdate | Update Payee Details
[**v3PayeesPayeeIdRemoteIdUpdatePost**](PayeesApi.md#v3PayeesPayeeIdRemoteIdUpdatePost) | **POST** /v3/payees/{payeeId}/remoteIdUpdate | Update Payee Remote Id
[**v4PayeesPayeeIdRemoteIdUpdatePost**](PayeesApi.md#v4PayeesPayeeIdRemoteIdUpdatePost) | **POST** /v4/payees/{payeeId}/remoteIdUpdate | Update Payee Remote Id



## deletePayeeByIdV3

> deletePayeeByIdV3(payeeId)

Delete Payee by Id

&lt;p&gt;Use v4 instead&lt;/p&gt; &lt;p&gt;This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:&lt;/p&gt; &lt;p&gt;* Payee ID is not found&lt;/p&gt; &lt;p&gt;* If Payee has not been on-boarded&lt;/p&gt; &lt;p&gt;* If Payee is in grace period&lt;/p&gt; &lt;p&gt;* If Payee has existing payments&lt;/p&gt; 

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
 **payeeId** | **String**| The UUID of the payee. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deletePayeeByIdV4

> deletePayeeByIdV4(payeeId)

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
apiInstance.deletePayeeByIdV4(payeeId, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getPayeeByIdV3

> PayeeDetailResponseV3 getPayeeByIdV3(payeeId, opts)

Get Payee by Id

&lt;p&gt;Use v4 instead&lt;/p&gt; &lt;p&gt;Get Payee by Id&lt;/p&gt; 

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
 **payeeId** | **String**| The UUID of the payee. | 
 **sensitive** | **Boolean**| Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values.  | [optional] 

### Return type

[**PayeeDetailResponseV3**](PayeeDetailResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPayeeByIdV4

> PayeeDetailResponseV4 getPayeeByIdV4(payeeId, opts)

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
apiInstance.getPayeeByIdV4(payeeId, opts, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **sensitive** | **Boolean**| Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked. If set to true, and you have permission, the PII values will be returned as their original unmasked values.  | [optional] 

### Return type

[**PayeeDetailResponseV4**](PayeeDetailResponseV4.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPayeeChangesV3

> PayeeDeltaResponseV3 listPayeeChangesV3(payorId, updatedSince, opts)

List Payee Changes

&lt;p&gt;Use v4 instead&lt;/p&gt; &lt;p&gt;Get a paginated response listing payee changes.&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payorId = "payorId_example"; // String | The Payor ID to find associated Payees
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
 **payorId** | **String**| The Payor ID to find associated Payees | 
 **updatedSince** | **Date**| The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm | 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 100. Max allowable is 1000. | [optional] [default to 100]

### Return type

[**PayeeDeltaResponseV3**](PayeeDeltaResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPayeeChangesV4

> PayeeDeltaResponseV4 listPayeeChangesV4(payorId, updatedSince, opts)

List Payee Changes

Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields: - dbaName - displayName - email - onboardedStatus - payeeCountry - payeeId - remoteId 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payorId = "payorId_example"; // String | The Payor ID to find associated Payees
let updatedSince = new Date("2013-10-20T19:20:30+01:00"); // Date | The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
let opts = {
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 100 // Number | Page size. Default is 100. Max allowable is 1000.
};
apiInstance.listPayeeChangesV4(payorId, updatedSince, opts, (error, data, response) => {
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
 **payorId** | **String**| The Payor ID to find associated Payees | 
 **updatedSince** | **Date**| The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm | 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 100. Max allowable is 1000. | [optional] [default to 100]

### Return type

[**PayeeDeltaResponseV4**](PayeeDeltaResponseV4.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPayeesV3

> PagedPayeeResponseV3 listPayeesV3(payorId, opts)

List Payees

&lt;p&gt;Use v4 instead&lt;/p&gt; Get a paginated response listing the payees for a payor. 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payorId = "payorId_example"; // String | The account owner Payor ID
let opts = {
  'watchlistStatus': new VeloPayments.WatchlistStatusV3(), // WatchlistStatusV3 | The watchlistStatus of the payees.
  'disabled': true, // Boolean | Payee disabled
  'onboardedStatus': new VeloPayments.OnboardedStatusV4(), // OnboardedStatusV4 | The onboarded status of the payees.
  'email': bob@example.com, // String | Email address
  'displayName': Bob Smith, // String | The display name of the payees.
  'remoteId': remoteId123, // String | The remote id of the payees.
  'payeeType': new VeloPayments.PayeeType2(), // PayeeType2 | The onboarded status of the payees.
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
 **payorId** | **String**| The account owner Payor ID | 
 **watchlistStatus** | [**WatchlistStatusV3**](.md)| The watchlistStatus of the payees. | [optional] 
 **disabled** | **Boolean**| Payee disabled | [optional] 
 **onboardedStatus** | [**OnboardedStatusV4**](.md)| The onboarded status of the payees. | [optional] 
 **email** | **String**| Email address | [optional] 
 **displayName** | **String**| The display name of the payees. | [optional] 
 **remoteId** | **String**| The remote id of the payees. | [optional] 
 **payeeType** | [**PayeeType2**](.md)| The onboarded status of the payees. | [optional] 
 **payeeCountry** | **String**| The country of the payee - 2 letter ISO 3166-1 country code (upper case) | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;onboardedStatus:asc,name:asc) Default is name:asc &#39;name&#39; is treated as company name for companies - last name + &#39;,&#39; + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.  | [optional] [default to &#39;displayName:asc&#39;]

### Return type

[**PagedPayeeResponseV3**](PagedPayeeResponseV3.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPayeesV4

> PagedPayeeResponseV4 listPayeesV4(payorId, opts)

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
let payorId = "payorId_example"; // String | The account owner Payor ID
let opts = {
  'watchlistStatus': new VeloPayments.WatchlistStatusV3(), // WatchlistStatusV3 | The watchlistStatus of the payees.
  'disabled': true, // Boolean | Payee disabled
  'onboardedStatus': new VeloPayments.OnboardedStatusV4(), // OnboardedStatusV4 | The onboarded status of the payees.
  'email': bob@example.com, // String | Email address
  'displayName': Bob Smith, // String | The display name of the payees.
  'remoteId': remoteId123, // String | The remote id of the payees.
  'payeeType': new VeloPayments.PayeeType2(), // PayeeType2 | The onboarded status of the payees.
  'payeeCountry': US, // String | The country of the payee - 2 letter ISO 3166-1 country code (upper case)
  'ofacStatus': new VeloPayments.OfacStatusV4(), // OfacStatusV4 | The ofacStatus of the payees.
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
  'sort': displayName:asc // String | List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus. 
};
apiInstance.listPayeesV4(payorId, opts, (error, data, response) => {
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
 **payorId** | **String**| The account owner Payor ID | 
 **watchlistStatus** | [**WatchlistStatusV3**](.md)| The watchlistStatus of the payees. | [optional] 
 **disabled** | **Boolean**| Payee disabled | [optional] 
 **onboardedStatus** | [**OnboardedStatusV4**](.md)| The onboarded status of the payees. | [optional] 
 **email** | **String**| Email address | [optional] 
 **displayName** | **String**| The display name of the payees. | [optional] 
 **remoteId** | **String**| The remote id of the payees. | [optional] 
 **payeeType** | [**PayeeType2**](.md)| The onboarded status of the payees. | [optional] 
 **payeeCountry** | **String**| The country of the payee - 2 letter ISO 3166-1 country code (upper case) | [optional] 
 **ofacStatus** | [**OfacStatusV4**](.md)| The ofacStatus of the payees. | [optional] 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| Page size. Default is 25. Max allowable is 100. | [optional] [default to 25]
 **sort** | **String**| List of sort fields (e.g. ?sort&#x3D;onboardedStatus:asc,name:asc) Default is name:asc &#39;name&#39; is treated as company name for companies - last name + &#39;,&#39; + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.  | [optional] [default to &#39;displayName:asc&#39;]

### Return type

[**PagedPayeeResponseV4**](PagedPayeeResponseV4.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payeeDetailsUpdateV3

> payeeDetailsUpdateV3(payeeId, updatePayeeDetailsRequestV3)

Update Payee Details

&lt;p&gt;Use v4 instead&lt;/p&gt; &lt;p&gt;Update payee details for the given Payee Id.&lt;p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let updatePayeeDetailsRequestV3 = new VeloPayments.UpdatePayeeDetailsRequestV3(); // UpdatePayeeDetailsRequestV3 | Request to update payee details
apiInstance.payeeDetailsUpdateV3(payeeId, updatePayeeDetailsRequestV3, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **updatePayeeDetailsRequestV3** | [**UpdatePayeeDetailsRequestV3**](UpdatePayeeDetailsRequestV3.md)| Request to update payee details | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## payeeDetailsUpdateV4

> payeeDetailsUpdateV4(payeeId, updatePayeeDetailsRequestV4)

Update Payee Details

&lt;p&gt;Update payee details for the given Payee Id.&lt;/p&gt; &lt;p&gt;Payors may only update the payee details if the payee has not yet onboarded&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let updatePayeeDetailsRequestV4 = new VeloPayments.UpdatePayeeDetailsRequestV4(); // UpdatePayeeDetailsRequestV4 | Request to update payee details
apiInstance.payeeDetailsUpdateV4(payeeId, updatePayeeDetailsRequestV4, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **updatePayeeDetailsRequestV4** | [**UpdatePayeeDetailsRequestV4**](UpdatePayeeDetailsRequestV4.md)| Request to update payee details | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v3PayeesPayeeIdRemoteIdUpdatePost

> v3PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequestV3)

Update Payee Remote Id

&lt;p&gt;Use v4 instead&lt;/p&gt; &lt;p&gt;Update the remote Id for the given Payee Id.&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayeesApi();
let payeeId = 2aa5d7e0-2ecb-403f-8494-1865ed0454e9; // String | The UUID of the payee.
let updateRemoteIdRequestV3 = new VeloPayments.UpdateRemoteIdRequestV3(); // UpdateRemoteIdRequestV3 | Request to update payee remote id v3
apiInstance.v3PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequestV3, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **updateRemoteIdRequestV3** | [**UpdateRemoteIdRequestV3**](UpdateRemoteIdRequestV3.md)| Request to update payee remote id v3 | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v4PayeesPayeeIdRemoteIdUpdatePost

> v4PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequestV4)

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
let updateRemoteIdRequestV4 = new VeloPayments.UpdateRemoteIdRequestV4(); // UpdateRemoteIdRequestV4 | Request to update payee remote id v4
apiInstance.v4PayeesPayeeIdRemoteIdUpdatePost(payeeId, updateRemoteIdRequestV4, (error, data, response) => {
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
 **payeeId** | **String**| The UUID of the payee. | 
 **updateRemoteIdRequestV4** | [**UpdateRemoteIdRequestV4**](UpdateRemoteIdRequestV4.md)| Request to update payee remote id v4 | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

