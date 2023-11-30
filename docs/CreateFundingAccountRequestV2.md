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
**countryCode** | **String** | ISO 3166-1 2 letter country code (upper case) | 



## Enum: TypeEnum


* `FBO` (value: `"FBO"`)

* `PRIVATE` (value: `"PRIVATE"`)




