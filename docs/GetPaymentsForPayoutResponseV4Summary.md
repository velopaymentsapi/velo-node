# VeloPayments.GetPaymentsForPayoutResponseV4Summary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payoutStatus** | **String** | The current status of the payout. | [optional] 
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
**payoutType** | [**PayoutTypeV4**](PayoutTypeV4.md) |  | [optional] 
**submitting** | [**PayoutPayorV4**](PayoutPayorV4.md) |  | [optional] 
**payoutFrom** | [**PayoutPayorV4**](PayoutPayorV4.md) |  | [optional] 
**payoutTo** | [**PayoutPayorV4**](PayoutPayorV4.md) |  | [optional] 
**quoted** | [**PayoutPrincipalV4**](PayoutPrincipalV4.md) |  | [optional] 
**instructed** | [**PayoutPrincipalV4**](PayoutPrincipalV4.md) |  | [optional] 
**withdrawn** | [**PayoutPrincipalV4**](PayoutPrincipalV4.md) |  | [optional] 



## Enum: PayoutStatusEnum


* `ACCEPTED` (value: `"ACCEPTED"`)

* `REJECTED` (value: `"REJECTED"`)

* `SUBMITTED` (value: `"SUBMITTED"`)

* `QUOTED` (value: `"QUOTED"`)

* `INSTRUCTED` (value: `"INSTRUCTED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `INCOMPLETE` (value: `"INCOMPLETE"`)

* `CONFIRMED` (value: `"CONFIRMED"`)

* `WITHDRAWN` (value: `"WITHDRAWN"`)




