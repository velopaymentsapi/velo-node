# VeloPayments.Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorMessage** | **String** | verbose message indicating the nature of the error Will be localised  | [optional] 
**location** | **String** | the property or object that caused the error | [optional] 
**locationType** | **String** | the location type in the request that was the cause of the error  | [optional] 
**reasonCode** | **String** | a camel-cased string that can be used by clients to localise client error messages | [optional] 



## Enum: LocationTypeEnum


* `requestBody` (value: `"requestBody"`)

* `queryParam` (value: `"queryParam"`)

* `requestParam` (value: `"requestParam"`)

* `header` (value: `"header"`)

* `pathParam` (value: `"pathParam"`)




