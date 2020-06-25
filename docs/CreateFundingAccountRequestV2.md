# VeloPayments.CreateFundingAccountRequestV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**name** | **String** |  | 
**payorId** | **String** |  | 
**accountName** | **String** | Required if type is FBO | [optional] 
**accountNumber** | **String** | Required if type is FBO | [optional] 
**routingNumber** | **String** | Required if type is FBO | [optional] 
**currency** | **String** | ISO 4217 currency code, Required if type is WUBS_DECOUPLED | [optional] 



## Enum: TypeEnum


* `FBO` (value: `"FBO"`)

* `WUBS_DECOUPLED` (value: `"WUBS_DECOUPLED"`)




