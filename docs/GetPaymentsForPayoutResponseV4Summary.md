# VeloPayments.GetPaymentsForPayoutResponseV4Summary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payoutStatus** | [**PayoutStatus**](PayoutStatus.md) |  | [optional] 
**submittedDateTime** | **Date** | The date/time at which the payout was submitted. | [optional] 
**instructedDateTime** | **Date** | The date/time at which the payout was instructed. | [optional] 
**withdrawnDateTime** | **Date** |  | [optional] 
**quotedDateTime** | **Date** | The date/time at which the payout was quoted. | [optional] 
**payoutMemo** | **String** | The memo attached to the payout. | [optional] 
**totalPayments** | **Number** | The count of payments within the payout. | [optional] 
**confirmedPayments** | **Number** | The count of payments within the payout which have been confirmed. | [optional] 
**releasedPayments** | **Number** | The count of payments within the payout which have been released. | [optional] 
**incompletePayments** | **Number** | The count of payments within the payout which are incomplete. | [optional] 
**returnedPayments** | **Number** | The count of payments within the payout which have been returned. | [optional] 
**withdrawnPayments** | **Number** | The count of payments within the payout which have been withdrawn. | [optional] 
**payoutType** | [**PayoutType**](PayoutType.md) |  | [optional] 
**submitting** | [**PayoutPayor**](PayoutPayor.md) |  | [optional] 
**payoutFrom** | [**PayoutPayor**](PayoutPayor.md) |  | [optional] 
**payoutTo** | [**PayoutPayor**](PayoutPayor.md) |  | [optional] 
**quoted** | [**PayoutPrincipal**](PayoutPrincipal.md) |  | [optional] 
**instructed** | [**PayoutPrincipal**](PayoutPrincipal.md) |  | [optional] 
**withdrawn** | [**PayoutPrincipal**](PayoutPrincipal.md) |  | [optional] 


