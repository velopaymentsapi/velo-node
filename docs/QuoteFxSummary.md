# VeloPayments.QuoteFxSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **Number** |  | 
**invertedRate** | **Number** |  | [optional] 
**creationTime** | **Date** |  | 
**expiryTime** | **Date** |  | [optional] 
**quoteId** | **String** |  | 
**totalSourceAmount** | **Number** |  | 
**totalPaymentAmount** | **Number** |  | 
**sourceCurrency** | **String** |  | 
**paymentCurrency** | **String** |  | 
**fundingStatus** | **String** |  | 
**status** | **String** |  | 



## Enum: FundingStatusEnum


* `UNFUNDED` (value: `"UNFUNDED"`)

* `INSTRUCTED` (value: `"INSTRUCTED"`)

* `FUNDED` (value: `"FUNDED"`)





## Enum: StatusEnum


* `UNQUOTED` (value: `"UNQUOTED"`)

* `QUOTED` (value: `"QUOTED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `EXECUTED` (value: `"EXECUTED"`)

* `REJECTED` (value: `"REJECTED"`)




