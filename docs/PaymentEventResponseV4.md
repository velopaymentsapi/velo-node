# VeloPayments.PaymentEventResponseV4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventId** | **String** | The id of the event. | 
**eventDateTime** | **Date** | The date/time at which the event occurred. | 
**eventType** | **String** | The type of the event. | 
**sourceCurrency** | [**PaymentAuditCurrencyV4**](PaymentAuditCurrencyV4.md) |  | [optional] 
**sourceAmount** | **Number** | The source amount exposed by the event. | [optional] 
**paymentCurrency** | [**PaymentAuditCurrencyV4**](PaymentAuditCurrencyV4.md) |  | [optional] 
**paymentAmount** | **Number** | The destination amount exposed by the event. | [optional] 
**accountNumber** | **String** | The account number attached to the event. | [optional] 
**routingNumber** | **String** | The routing number attached to the event. | [optional] 
**iban** | **String** |  | [optional] 
**accountName** | **String** |  | [optional] 
**principal** | **String** |  | [optional] 



## Enum: EventTypeEnum


* `PAYOUT_SUBMITTED` (value: `"PAYOUT_SUBMITTED"`)

* `PAYOUT_COMPLETED` (value: `"PAYOUT_COMPLETED"`)

* `PAYOUT_INSTRUCTED_V3` (value: `"PAYOUT_INSTRUCTED_V3"`)

* `BANK_PAYMENT_REQUESTED` (value: `"BANK_PAYMENT_REQUESTED"`)

* `SOURCE_AMOUNT_CONFIRMED` (value: `"SOURCE_AMOUNT_CONFIRMED"`)

* `PAYMENT_SUBMITTED` (value: `"PAYMENT_SUBMITTED"`)

* `PAYMENT_SUBMITTED_ACCEPTED` (value: `"PAYMENT_SUBMITTED_ACCEPTED"`)

* `PAYMENT_SUBMITTED_REJECTED` (value: `"PAYMENT_SUBMITTED_REJECTED"`)

* `PAYMENT_CONFIRMED` (value: `"PAYMENT_CONFIRMED"`)

* `PAYMENT_AWAITING_FUNDS` (value: `"PAYMENT_AWAITING_FUNDS"`)

* `PAYMENT_FUNDED` (value: `"PAYMENT_FUNDED"`)

* `PAYMENT_UNFUNDED` (value: `"PAYMENT_UNFUNDED"`)

* `PAYMENT_FAILED` (value: `"PAYMENT_FAILED"`)

* `ACH_SUBMITTED_TO_ODFI` (value: `"ACH_SUBMITTED_TO_ODFI"`)

* `PAYMENT_ACCEPTED_BY_RAILS` (value: `"PAYMENT_ACCEPTED_BY_RAILS"`)

* `ACH_RETURN_RECEIVED` (value: `"ACH_RETURN_RECEIVED"`)

* `RETURN_PAYMENT_FUNDING_REQUESTED` (value: `"RETURN_PAYMENT_FUNDING_REQUESTED"`)

* `PAYOUT_BATCH_EXECUTED` (value: `"PAYOUT_BATCH_EXECUTED"`)

* `PAYOUT_BATCH_QUOTE_EXPIRED` (value: `"PAYOUT_BATCH_QUOTE_EXPIRED"`)

* `PAYOUT_BATCH_FUNDED` (value: `"PAYOUT_BATCH_FUNDED"`)

* `PAYOUT_BATCH_FUNDS_RETURN_REQUEST` (value: `"PAYOUT_BATCH_FUNDS_RETURN_REQUEST"`)

* `PAYOUT_BATCH_FUNDS_RETURNED` (value: `"PAYOUT_BATCH_FUNDS_RETURNED"`)

* `PAYOUT_FUNDS_REQUEST` (value: `"PAYOUT_FUNDS_REQUEST"`)

* `PAYOUT_FUNDS_GRANTED` (value: `"PAYOUT_FUNDS_GRANTED"`)

* `PAYOUT_FUNDS_DENIED` (value: `"PAYOUT_FUNDS_DENIED"`)

* `PAYOUT_BATCH_QUOTED` (value: `"PAYOUT_BATCH_QUOTED"`)

* `PAYOUT_QUOTED` (value: `"PAYOUT_QUOTED"`)

* `ACH_PAYMENT_RETURN_CANCELLED` (value: `"ACH_PAYMENT_RETURN_CANCELLED"`)

* `RETURN_PAYMENT_CANCELLATION_REQUESTED` (value: `"RETURN_PAYMENT_CANCELLATION_REQUESTED"`)

* `PAYOUT_WITHDRAWN` (value: `"PAYOUT_WITHDRAWN"`)




