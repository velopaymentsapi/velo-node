# VeloPayments.PaymentResponseV4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentId** | **String** |  | 
**payeeId** | **String** |  | 
**payorId** | **String** | Deprecated in v2.16. Will be populated with submitting payor ID until removed in a later release. | 
**payorName** | **String** |  | [optional] 
**quoteId** | **String** |  | 
**sourceAccountId** | **String** |  | 
**sourceAccountName** | **String** |  | [optional] 
**remoteId** | **String** |  | [optional] 
**sourceAmount** | **Number** |  | [optional] 
**sourceCurrency** | [**PaymentAuditCurrencyV4**](PaymentAuditCurrencyV4.md) |  | [optional] 
**paymentAmount** | **Number** |  | 
**paymentCurrency** | [**PaymentAuditCurrencyV4**](PaymentAuditCurrencyV4.md) |  | [optional] 
**rate** | **Number** |  | [optional] 
**invertedRate** | **Number** |  | [optional] 
**submittedDateTime** | **Date** |  | 
**status** | **String** |  | 
**fundingStatus** | **String** |  | 
**routingNumber** | **String** |  | [optional] 
**accountNumber** | **String** |  | [optional] 
**iban** | **String** |  | [optional] 
**paymentMemo** | **String** |  | [optional] 
**filenameReference** | **String** |  | [optional] 
**individualIdentificationNumber** | **String** |  | [optional] 
**traceNumber** | **String** |  | [optional] 
**payorPaymentId** | **String** |  | [optional] 
**paymentChannelId** | **String** |  | [optional] 
**paymentChannelName** | **String** |  | [optional] 
**accountName** | **String** |  | [optional] 
**railsId** | **String** |  | 
**countryCode** | **String** |  | [optional] 
**events** | [**[PaymentEventResponseV4]**](PaymentEventResponseV4.md) |  | 
**returnCost** | **Number** |  | [optional] 
**returnReason** | **String** |  | [optional] 
**payout** | [**PaymentResponseV4Payout**](PaymentResponseV4Payout.md) |  | [optional] 



## Enum: StatusEnum


* `ACCEPTED` (value: `"ACCEPTED"`)

* `AWAITING_FUNDS` (value: `"AWAITING_FUNDS"`)

* `FUNDED` (value: `"FUNDED"`)

* `UNFUNDED` (value: `"UNFUNDED"`)

* `BANK_PAYMENT_REQUESTED` (value: `"BANK_PAYMENT_REQUESTED"`)

* `REJECTED` (value: `"REJECTED"`)

* `ACCEPTED_BY_RAILS` (value: `"ACCEPTED_BY_RAILS"`)

* `CONFIRMED` (value: `"CONFIRMED"`)

* `RETURNED` (value: `"RETURNED"`)

* `WITHDRAWN` (value: `"WITHDRAWN"`)





## Enum: FundingStatusEnum


* `FUNDED` (value: `"FUNDED"`)

* `INSTRUCTED` (value: `"INSTRUCTED"`)

* `UNFUNDED` (value: `"UNFUNDED"`)




