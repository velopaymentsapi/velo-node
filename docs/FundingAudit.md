# VeloPayments.FundingAudit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** |  | [optional] 
**dateTime** | **Date** |  | [optional] 
**status** | **String** |  | [optional] 
**currency** | **String** |  | [optional] 
**sourceAccountName** | **String** |  | [optional] 
**fundingAccountName** | **String** |  | [optional] 
**fundingType** | **String** |  | [optional] 
**events** | [**[FundingEvent]**](FundingEvent.md) |  | [optional] 
**topupType** | **String** |  | [optional] 



## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `FAILED` (value: `"FAILED"`)

* `CREDIT` (value: `"CREDIT"`)

* `DEBIT` (value: `"DEBIT"`)





## Enum: FundingTypeEnum


* `ACH` (value: `"ACH"`)

* `WIRE` (value: `"WIRE"`)

* `EMBEDDED` (value: `"EMBEDDED"`)





## Enum: TopupTypeEnum


* `AUTOMATIC` (value: `"AUTOMATIC"`)

* `MANUAL` (value: `"MANUAL"`)




