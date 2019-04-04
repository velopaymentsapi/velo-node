# VeloPaymentsApIs.PaymentResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentId** | **String** |  | 
**payeeId** | **String** |  | 
**payorId** | **String** |  | 
**payorName** | **String** |  | [optional] 
**quoteId** | **String** |  | 
**sourceAccountId** | **String** |  | 
**sourceAccountName** | **String** |  | [optional] 
**remoteId** | **String** |  | [optional] 
**sourceAmount** | **Number** |  | [optional] 
**sourceCurrency** | [**PaymentAuditCurrency**](PaymentAuditCurrency.md) |  | [optional] 
**paymentAmount** | **Number** |  | 
**paymentCurrency** | [**PaymentAuditCurrency**](PaymentAuditCurrency.md) |  | [optional] 
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
**events** | [**[PaymentEventResponse]**](PaymentEventResponse.md) |  | 
**returnCost** | **Number** |  | [optional] 
**returnReason** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ACCEPTED` (value: `"ACCEPTED"`)

* `AWAITING_FUNDS` (value: `"AWAITING_FUNDS"`)

* `FUNDED` (value: `"FUNDED"`)

* `UNFUNDED` (value: `"UNFUNDED"`)

* `BANK_PAYMENT_REQUESTED` (value: `"BANK_PAYMENT_REQUESTED"`)

* `REJECTED` (value: `"REJECTED"`)

* `ACCEPTED_BY_RAILS` (value: `"ACCEPTED_BY_RAILS"`)

* `CONFIRMED` (value: `"CONFIRMED"`)

* `FAILED` (value: `"FAILED"`)

* `WITHDRAWN` (value: `"WITHDRAWN"`)




<a name="FundingStatusEnum"></a>
## Enum: FundingStatusEnum


* `FUNDED` (value: `"FUNDED"`)

* `INSTRUCTED` (value: `"INSTRUCTED"`)

* `UNFUNDED` (value: `"UNFUNDED"`)




