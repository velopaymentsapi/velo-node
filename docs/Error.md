# VeloPayments.Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorMessage** | **String** | English language message indicating the nature of the error | [optional] 
**errorCode** | **String** | Unique numeric code that can be used for switching client behavior or to drive translated or customised error messages | [optional] 
**localisationDetails** | [**LocalisationDetails**](LocalisationDetails.md) |  | [optional] 
**location** | **String** | the property or object that caused the error | [optional] 
**locationType** | **String** | the location type in the request that was the cause of the error  | [optional] 
**reasonCode** | **String** | a camel-cased string that can be used by clients to localise client error messages (deprecated) | [optional] 
**errorData** | [**ErrorData**](ErrorData.md) |  | [optional] 



## Enum: LocationTypeEnum


* `requestBody` (value: `"requestBody"`)

* `queryParam` (value: `"queryParam"`)

* `requestParam` (value: `"requestParam"`)

* `header` (value: `"header"`)

* `pathParam` (value: `"pathParam"`)




