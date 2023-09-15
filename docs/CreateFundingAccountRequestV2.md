# VeloPayments.CreateFundingAccountRequestV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**name** | **String** |  | 
**payorId** | **String** |  | 
**accountName** | **String** | Required if type is either FBO or PRIVATE | [optional] 
**accountNumber** | **String** | Required if type is either FBO or PRIVATE | [optional] 
**routingNumber** | **String** | Required if type is either FBO or PRIVATE | [optional] 
**currency** | **String** | ISO 4217 currency code, Required if type is either WUBS_DECOUPLED or PRIVATE | [optional] 



## Enum: TypeEnum


* `FBO` (value: `"FBO"`)

* `WUBS_DECOUPLED` (value: `"WUBS_DECOUPLED"`)

* `PRIVATE` (value: `"PRIVATE"`)




