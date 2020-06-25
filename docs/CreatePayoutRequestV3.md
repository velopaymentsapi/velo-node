# VeloPayments.CreatePayoutRequestV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payorId** | **String** | Deprecated in v2.16. Any value supplied here will be ignored. | [optional] 
**payoutFromPayorId** | **String** | The id of the payor whose source account(s) will be debited. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted. | [optional] 
**payoutToPayorId** | **String** | The id of the payor whose payees will be paid. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted. | [optional] 
**payoutMemo** | **String** | Text applied to all payment memos unless specified explicitly on a payment. This should be the reference field on the statement seen by the payee (but not via ACH) | [optional] 
**payments** | [**[PaymentInstructionV3]**](PaymentInstructionV3.md) |  | 


