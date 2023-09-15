# VeloPayments.PayoutSummaryAudit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payoutId** | **String** |  | [optional] 
**payorId** | **String** |  | [optional] 
**status** | **String** | Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN | 
**dateTime** | **Date** |  | [optional] 
**submittedDateTime** | **String** |  | 
**instructedDateTime** | **String** |  | [optional] 
**withdrawnDateTime** | **Date** |  | [optional] 
**totalPayments** | **Number** |  | [optional] 
**totalIncompletePayments** | **Number** |  | [optional] 
**totalReturnedPayments** | **Number** |  | [optional] 
**totalWithdrawnPayments** | **Number** |  | [optional] 
**sourceAccountSummary** | [**[SourceAccountSummary]**](SourceAccountSummary.md) |  | [optional] 
**fxSummaries** | [**[FxSummary]**](FxSummary.md) |  | [optional] 
**payoutMemo** | **String** |  | [optional] 
**payoutType** | **String** | The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF | 
**payorName** | **String** |  | 
**schedule** | [**PayoutSchedule**](PayoutSchedule.md) |  | [optional] 


