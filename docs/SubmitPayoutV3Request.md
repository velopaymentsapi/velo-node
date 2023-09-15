# VeloPayments.SubmitPayoutV3Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payorId** | **String** | Deprecated in v2.16. Any value supplied here will be ignored. | [optional] 
**payoutFromPayorId** | **String** | The id of the payor whose source account(s) will be debited. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted. | [optional] 
**payoutToPayorId** | **String** | The id of the payor whose payees will be paid. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted. | [optional] 
**file** | [**[PaymentInstructionV3]**](PaymentInstructionV3.md) | Create a new payout from a CSV source file and return a location header with a link to get the payout | [optional] 


