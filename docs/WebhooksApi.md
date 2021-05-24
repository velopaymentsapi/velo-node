# VeloPayments.WebhooksApi

All URIs are relative to *https://api.sandbox.velopayments.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhookV1**](WebhooksApi.md#createWebhookV1) | **POST** /v1/webhooks | Create Webhook
[**getWebhookV1**](WebhooksApi.md#getWebhookV1) | **GET** /v1/webhooks/{webhookId} | Get details about the given webhook.
[**listWebhooksV1**](WebhooksApi.md#listWebhooksV1) | **GET** /v1/webhooks | List the details about the webhooks for the given payor.
[**updateWebhookV1**](WebhooksApi.md#updateWebhookV1) | **POST** /v1/webhooks/{webhookId} | Update Webhook



## createWebhookV1

> createWebhookV1(opts)

Create Webhook

Create Webhook

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.WebhooksApi();
let opts = {
  'createWebhookRequest': new VeloPayments.CreateWebhookRequest() // CreateWebhookRequest | 
};
apiInstance.createWebhookV1(opts, (error, data, response) => {
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
 **createWebhookRequest** | [**CreateWebhookRequest**](CreateWebhookRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getWebhookV1

> WebhookResponse getWebhookV1(webhookId)

Get details about the given webhook.

Get details about the given webhook.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.WebhooksApi();
let webhookId = null; // String | Webhook id
apiInstance.getWebhookV1(webhookId, (error, data, response) => {
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
 **webhookId** | [**String**](.md)| Webhook id | 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhooksV1

> WebhooksResponse listWebhooksV1(payorId, opts)

List the details about the webhooks for the given payor.

List the details about the webhooks for the given payor.

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.WebhooksApi();
let payorId = null; // String | The Payor ID
let opts = {
  'page': 1, // Number | Page number. Default is 1.
  'pageSize': 25 // Number | The number of results to return in a page
};
apiInstance.listWebhooksV1(payorId, opts, (error, data, response) => {
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
 **payorId** | [**String**](.md)| The Payor ID | 
 **page** | **Number**| Page number. Default is 1. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return in a page | [optional] [default to 25]

### Return type

[**WebhooksResponse**](WebhooksResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWebhookV1

> updateWebhookV1(webhookId, opts)

Update Webhook

Update Webhook

### Example

```javascript
import VeloPayments from 'velo-payments';
let defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new VeloPayments.WebhooksApi();
let webhookId = null; // String | Webhook id
let opts = {
  'updateWebhookRequest': new VeloPayments.UpdateWebhookRequest() // UpdateWebhookRequest | 
};
apiInstance.updateWebhookV1(webhookId, opts, (error, data, response) => {
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
 **webhookId** | [**String**](.md)| Webhook id | 
 **updateWebhookRequest** | [**UpdateWebhookRequest**](UpdateWebhookRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

