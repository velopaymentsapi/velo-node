# VeloPaymentsApIs.RejectedPayment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remoteId** | **String** |  | 
**currencyType** | **String** |  | 
**amount** | **Number** |  | 
**sourceAccountName** | **String** |  | 
**payorPaymentId** | **String** |  | 
**reason** | **String** |  | 
**lineNumber** | **Number** |  | 
**message** | **String** |  | 


<a name="ReasonEnum"></a>
## Enum: ReasonEnum


* `UNKNOWN_REMOTE_ID` (value: `"UNKNOWN_REMOTE_ID"`)

* `UNKNOWN_SOURCE_ACCOUNT` (value: `"UNKNOWN_SOURCE_ACCOUNT"`)

* `UNSUPPORTED_CURRENCY` (value: `"UNSUPPORTED_CURRENCY"`)

* `PAYMENT_VALUE_TOO_HIGH` (value: `"PAYMENT_VALUE_TOO_HIGH"`)

* `UNSUPPORTED_COUNTRY` (value: `"UNSUPPORTED_COUNTRY"`)

* `UNSUPPORTED_CURRENCY_FOR_COUNTRY` (value: `"UNSUPPORTED_CURRENCY_FOR_COUNTRY"`)

* `PAYEE_NOT_ONBOARDED` (value: `"PAYEE_NOT_ONBOARDED"`)

* `COMPLIANCE_ISSUE` (value: `"COMPLIANCE_ISSUE"`)

* `DUPLICATE_PAYOR_PAYMENT_ID` (value: `"DUPLICATE_PAYOR_PAYMENT_ID"`)

* `CURRENCY_MISMATCH` (value: `"CURRENCY_MISMATCH"`)

* `DECLINED_INVITE` (value: `"DECLINED_INVITE"`)

* `PENDING_INVITE` (value: `"PENDING_INVITE"`)

* `BADLY_FORMED_DATA_ROW` (value: `"BADLY_FORMED_DATA_ROW"`)

* `OTHER` (value: `"OTHER"`)




