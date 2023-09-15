# VeloPayments.PayoutSummaryAuditV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payoutId** | **String** |  | 
**payorId** | **String** |  | [optional] 
**status** | **String** | Current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN | 
**submittedDateTime** | **String** |  | 
**instructedDateTime** | **String** |  | [optional] 
**withdrawnDateTime** | **String** |  | [optional] 
**totalPayments** | **Number** |  | [optional] 
**totalIncompletePayments** | **Number** |  | [optional] 
**totalFailedPayments** | **Number** |  | [optional] 
**sourceAccountSummary** | [**[SourceAccountSummaryV3]**](SourceAccountSummaryV3.md) |  | [optional] 
**fxSummaries** | [**[FxSummaryV3]**](FxSummaryV3.md) |  | [optional] 
**payoutMemo** | **String** |  | [optional] 


