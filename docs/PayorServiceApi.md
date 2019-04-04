# VeloPaymentsApIs.PayorServiceApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payorEmailOptOut**](PayorServiceApi.md#payorEmailOptOut) | **POST** /v1/payors/{payorId}/reminderEmailsUpdate | Reminder Email Opt-Out


<a name="payorEmailOptOut"></a>
# **payorEmailOptOut**
> payorEmailOptOut(payorId, payorEmailOptOutRequest)

Reminder Email Opt-Out

Update the emailRemindersOptOut field for a Payor. This API can be used to opt out or opt into Payor Reminder emails. These emails are typically around payee events such as payees registering and onboarding. 

### Example
```javascript
import VeloPaymentsApIs from 'velo';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorServiceApi();
let payorId = null; // String | The account owner Payor ID
let payorEmailOptOutRequest = new VeloPaymentsApIs.PayorEmailOptOutRequest(); // PayorEmailOptOutRequest | Details of application API key to create
apiInstance.payorEmailOptOut(payorId, payorEmailOptOutRequest, (error, data, response) => {
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
 **payorId** | [**String**](.md)| The account owner Payor ID | 
 **payorEmailOptOutRequest** | [**PayorEmailOptOutRequest**](PayorEmailOptOutRequest.md)| Details of application API key to create | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

