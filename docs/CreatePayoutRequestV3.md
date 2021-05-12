# VeloPayments.CreatePayoutRequestV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payoutFromPayorId** | **String** | &lt;p&gt;The id of the payor whose source account(s) will be debited&lt;/p&gt; &lt;p&gt;payoutFromPayorId and payoutToPayorId must be both supplied or both omitted&lt;/p&gt;  | [optional] 
**payoutToPayorId** | **String** | &lt;p&gt;The id of the payor whose payees will be paid&lt;/p&gt; &lt;p&gt;payoutFromPayorId and payoutToPayorId must be both supplied or both omitted&lt;/p&gt;  | [optional] 
**payoutMemo** | **String** | &lt;p&gt;Text applied to all payment memos unless specified explicitly on a payment&lt;/p&gt; &lt;p&gt;This should be the reference field on the statement seen by the payee (but not via ACH)&lt;/p&gt;  | [optional] 
**payments** | [**[PaymentInstructionV3]**](PaymentInstructionV3.md) |  | 


