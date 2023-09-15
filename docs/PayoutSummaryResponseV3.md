# VeloPayments.PayoutSummaryResponseV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payoutId** | **String** | The id of the payout | [optional] 
**status** | **String** | The status of the payout (one of SUBMITTED, ACCEPTED, REJECTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, WITHDRAWN) | [optional] 
**paymentsSubmitted** | **Number** | The number of payments that were submitted in the payout | [optional] 
**paymentsAccepted** | **Number** | The number of payments that were accepted in the payout | [optional] 
**paymentsRejected** | **Number** | The number of payments that were rejected in the payout | [optional] 
**paymentsWithdrawn** | **Number** | The number of payments that were withdrawn in the payout | 
**fxSummaries** | [**[QuoteFxSummaryV3]**](QuoteFxSummaryV3.md) |  | 
**accounts** | [**[SourceAccountV3]**](SourceAccountV3.md) |  | 
**acceptedPayments** | [**[AcceptedPaymentV3]**](AcceptedPaymentV3.md) |  | 
**rejectedPayments** | [**[RejectedPaymentV3]**](RejectedPaymentV3.md) |  | 
**schedule** | [**PayoutScheduleV3**](PayoutScheduleV3.md) |  | [optional] 


