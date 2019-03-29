# VeloPaymentsApIs.PayorFundingApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setPayorFundingBankDetails**](PayorFundingApi.md#setPayorFundingBankDetails) | **POST** /v1/payors/{payorId}/payorFundingBankDetailsUpdate | Set Funding Bank Details


<a name="setPayorFundingBankDetails"></a>
# **setPayorFundingBankDetails**
> setPayorFundingBankDetails(payorId, payorFundingBankDetailsUpdate)

Set Funding Bank Details

This API allows you to set or update the funding deteils for the given Payor ID. 

### Example
```javascript
import VeloPaymentsApIs from 'velo_payments_ap_is';
let defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPaymentsApIs.PayorFundingApi();
let payorId = null; // String | The account owner Payor ID
let payorFundingBankDetailsUpdate = new VeloPaymentsApIs.PayorFundingBankDetailsUpdate(); // PayorFundingBankDetailsUpdate | Update Funding bank details of given Payor Id
apiInstance.setPayorFundingBankDetails(payorId, payorFundingBankDetailsUpdate, (error, data, response) => {
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
 **payorFundingBankDetailsUpdate** | [**PayorFundingBankDetailsUpdate**](PayorFundingBankDetailsUpdate.md)| Update Funding bank details of given Payor Id | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

