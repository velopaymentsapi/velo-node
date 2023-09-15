# VeloPayments.PaymentResponseV3

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
**sourceAmount** | **Number** | The source amount for the payment (amount debited to make the payment) | [optional] 
**sourceCurrency** | **String** | ISO 3 character currency code | [optional] 
**paymentAmount** | **Number** | The amount which the payee will receive | 
**paymentCurrency** | **String** | ISO 3 character currency code | [optional] 
**rate** | **Number** | The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed | [optional] 
**invertedRate** | **Number** | The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed | [optional] 
**submittedDateTime** | **Date** |  | 
**status** | **String** | Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, WITHDRAWN | 
**fundingStatus** | **String** | The funding status of the payment. One of the following values: [FUNDED, INSTRUCTED, UNFUNDED | 
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
**events** | [**[PaymentEventResponseV3]**](PaymentEventResponseV3.md) |  | 
**returnCost** | **Number** | The return cost if a returned payment. | [optional] 
**returnReason** | **String** |  | [optional] 
**railsPaymentId** | **String** |  | [optional] 
**railsBatchId** | **String** |  | [optional] 
**paymentScheme** | **String** |  | [optional] 
**rejectionReason** | **String** |  | [optional] 


