# VeloPayments.FxSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quoteId** | **String** |  | 
**creationDateTime** | **Date** |  | 
**rate** | **Number** |  | 
**invertedRate** | **Number** |  | 
**totalCost** | **Number** |  | 
**totalPaymentAmount** | **Number** |  | 
**sourceCurrency** | [**PaymentAuditCurrency**](PaymentAuditCurrency.md) |  | [optional] 
**paymentCurrency** | [**PaymentAuditCurrency**](PaymentAuditCurrency.md) |  | [optional] 
**status** | **String** |  | 
**fundingStatus** | **String** |  | 



## Enum: StatusEnum


* `UNQUOTED` (value: `"UNQUOTED"`)

* `QUOTED` (value: `"QUOTED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `EXECUTED` (value: `"EXECUTED"`)





## Enum: FundingStatusEnum


* `FUNDED` (value: `"FUNDED"`)

* `INSTRUCTED` (value: `"INSTRUCTED"`)

* `UNFUNDED` (value: `"UNFUNDED"`)




