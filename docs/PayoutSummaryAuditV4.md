# VeloPayments.PayoutSummaryAuditV4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payoutId** | **String** |  | 
**payorId** | **String** | Deprecated in v2.16. Will be populated with submitting payor ID until removed in a later release. | [optional] 
**status** | [**PayoutStatusV4**](PayoutStatusV4.md) |  | 
**dateTime** | **Date** |  | [optional] 
**submittedDateTime** | **String** |  | 
**instructedDateTime** | **String** |  | [optional] 
**withdrawnDateTime** | **Date** |  | [optional] 
**totalPayments** | **Number** |  | [optional] 
**totalIncompletePayments** | **Number** |  | [optional] 
**totalReturnedPayments** | **Number** |  | [optional] 
**sourceAccountSummary** | [**[SourceAccountSummaryV4]**](SourceAccountSummaryV4.md) |  | [optional] 
**fxSummaries** | [**[FxSummaryV4]**](FxSummaryV4.md) |  | [optional] 
**payoutMemo** | **String** |  | [optional] 
**payoutType** | [**PayoutTypeV4**](PayoutTypeV4.md) |  | 


