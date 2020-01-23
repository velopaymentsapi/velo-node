# VeloPayments.GetPaymentsForPayoutResponseV3Summary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payoutStatus** | **String** | The current status of the payout. | [optional] 
**submittedDateTime** | **Date** | The date/time at which the payout was submitted. | [optional] 
**instructedDateTime** | **Date** | The date/time at which the payout was instructed. | [optional] 
**withdrawnDateTime** | **Date** | The date/time at which the payout was withdrawn. | [optional] 
**payoutMemo** | **String** | The memo attached to the payout. | [optional] 
**totalPayments** | **Number** | The count of payments within the payout. | [optional] 
**confirmedPayments** | **Number** | The count of payments within the payout which have been confirmed. | [optional] 
**releasedPayments** | **Number** | The count of payments within the payout which have been released. | [optional] 
**incompletePayments** | **Number** | The count of payments within the payout which are incomplete. | [optional] 
**failedPayments** | **Number** | The count of payments within the payout which have failed or been returned. | [optional] 



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




