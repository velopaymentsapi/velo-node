# VeloPayments.PayorHierarchyApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payorLinksV1**](PayorHierarchyApi.md#payorLinksV1) | **GET** /v1/payorLinks | List Payor Links



## payorLinksV1

> PayorLinksResponse payorLinksV1(opts)

List Payor Links

&lt;p&gt;If the payor is set up as part of a hierarchy you can use this API to traverse the hierarchy&lt;/p&gt; 

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.PayorHierarchyApi();
let opts = {
  'descendantsOfPayor': "descendantsOfPayor_example", // String | The Payor ID from which to start the query to show all descendants
  'parentOfPayor': "parentOfPayor_example", // String | Query for the parent payor details for this payor id
  'fields': "fields_example" // String | <p>List of additional Payor fields to include in the response for each Payor</p> <p>The values of payorId and payorName are always included for each Payor by default</p> <p>You can add fields to the response for each payor by including them in the fields parameter separated by commas</p> <p>The supported fields are any combination of: primaryContactEmail,kycState</p> 
};
apiInstance.payorLinksV1(opts, (error, data, response) => {
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
 **descendantsOfPayor** | **String**| The Payor ID from which to start the query to show all descendants | [optional] 
 **parentOfPayor** | **String**| Query for the parent payor details for this payor id | [optional] 
 **fields** | **String**| &lt;p&gt;List of additional Payor fields to include in the response for each Payor&lt;/p&gt; &lt;p&gt;The values of payorId and payorName are always included for each Payor by default&lt;/p&gt; &lt;p&gt;You can add fields to the response for each payor by including them in the fields parameter separated by commas&lt;/p&gt; &lt;p&gt;The supported fields are any combination of: primaryContactEmail,kycState&lt;/p&gt;  | [optional] 

### Return type

[**PayorLinksResponse**](PayorLinksResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

