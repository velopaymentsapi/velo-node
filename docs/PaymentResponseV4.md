# VeloPayments.PaymentResponseV4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentId** | **String** | The id of the payment | 
**payeeId** | **String** | The id of the paymeee | 
**payorId** | **String** | The id of the payor | 
**payorName** | **String** | The name of the payor | [optional] 
**quoteId** | **String** | The quote Id used for the FX | 
**sourceAccountId** | **String** | The id of the source account from which the payment was taken | 
**sourceAccountName** | **String** | The name of the source account from which the payment was taken | [optional] 
**remoteId** | **String** | The remote id by which the payor refers to the payee. Only populated once payment is confirmed | [optional] 
**remoteSystemId** | **String** | The velo id of the remote system orchestrating the payment. Not populated for normal Velo payments. | [optional] 
**remoteSystemPaymentId** | **String** | The id of the payment in the remote system. Not populated for normal Velo payments. | [optional] 
**sourceAmount** | **Number** | The source amount for the payment (amount debited to make the payment) | [optional] 
**sourceCurrency** | [**PaymentAuditCurrency**](PaymentAuditCurrency.md) |  | [optional] 
**paymentAmount** | **Number** | The amount which the payee will receive | 
**paymentCurrency** | [**PaymentAuditCurrency**](PaymentAuditCurrency.md) |  | [optional] 
**rate** | **Number** | The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed | [optional] 
**invertedRate** | **Number** | The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed | [optional] 
**isPaymentCcyBaseCcy** | **Boolean** |  | [optional] 
**submittedDateTime** | **Date** |  | 
**status** | **String** |  | 
**fundingStatus** | **String** | The funding status of the payment | 
**routingNumber** | **String** | The routing number for the payment. | [optional] 
**accountNumber** | **String** | The account number for the account which will receive the payment. | [optional] 
**iban** | **String** | The iban for the payment. | [optional] 
**paymentMemo** | **String** | The payment memo set by the payor | [optional] 
**filenameReference** | **String** | ACH file payment was submitted in, if applicable | [optional] 
**individualIdentificationNumber** | **String** | Individual Identification Number assigned to the payment in the ACH file, if applicable | [optional] 
**traceNumber** | **String** | Trace Number assigned to the payment in the ACH file, if applicable | [optional] 
**payorPaymentId** | **String** |  | [optional] 
**paymentChannelId** | **String** |  | [optional] 
**paymentChannelName** | **String** |  | [optional] 
**accountName** | **String** |  | [optional] 
**railsId** | **String** | The rails ID. Default value is RAILS ID UNAVAILABLE when not populated. | [default to &#39;RAILS ID UNAVAILABLE&#39;]
**countryCode** | **String** | The country code of the payment channel. | [optional] 
**events** | [**[PaymentEventResponse]**](PaymentEventResponse.md) |  | 
**returnCost** | **Number** | The return cost if a returned payment. | [optional] 
**returnReason** | **String** |  | [optional] 
**railsPaymentId** | **String** |  | [optional] 
**railsBatchId** | **String** |  | [optional] 
**rejectionReason** | **String** |  | [optional] 
**withdrawnReason** | **String** |  | [optional] 
**withdrawable** | **Boolean** |  | [optional] 
**transmissionType** | **String** | The transmission type of the payment, e.g. ACH, SAME_DAY_ACH, WIRE | [optional] 
**paymentTrackingReference** | **String** |  | [optional] 
**paymentMetadata** | **String** | Metadata for the payment | [optional] 
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




