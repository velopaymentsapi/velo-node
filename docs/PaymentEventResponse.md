# VeloPayments.PaymentEventResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventId** | **String** | The id of the event. | 
**eventDateTime** | **Date** | The date/time at which the event occurred. | 
**eventType** | **String** | One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, PAYMENT_TRACKING_DETAILS_UPDATED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN, ORCHESTRATED_PAYMENT_BATCH_REQUESTED, ORCHESTRATED_PAYMENT_BATCH_CONFIRMED, ORCHESTRATED_PAYMENT_REQUESTED | 
**sourceCurrency** | **String** | ISO-4217 3 character currency code | [optional] 
**sourceAmount** | **Number** | The source amount exposed by the event. | [optional] 
**paymentCurrency** | **String** | ISO-4217 3 character currency code | [optional] 
**paymentAmount** | **Number** | The destination amount exposed by the event. | [optional] 
**accountNumber** | **String** | The account number attached to the event. | [optional] 
**routingNumber** | **String** | The routing number attached to the event. | [optional] 
**iban** | **String** |  | [optional] 
**accountName** | **String** |  | [optional] 
**principal** | **String** |  | [optional] 
**scheduledAt** | **Date** |  | [optional] 
**scheduledFor** | **Date** |  | [optional] 
**scheduledBy** | **String** | Optional display name as a hint for who scheduled the payout. Not populated if payout was scheduled by an application. | [optional] 


