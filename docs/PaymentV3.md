# VeloPayments.PaymentV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentId** | **String** |  | 
**remoteId** | **String** |  | [optional] 
**currency** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**sourceAccountName** | **String** |  | [optional] 
**payorPaymentId** | **String** |  | [optional] 
**paymentMemo** | **String** |  | [optional] 
**payee** | [**PayoutPayeeV3**](PayoutPayeeV3.md) |  | [optional] 
**withdrawable** | **Boolean** |  | [optional] 
**status** | **String** |  | [optional] 
**transmissionType** | [**TransmissionType**](TransmissionType.md) |  | [optional] 



## Enum: StatusEnum


* `SUBMITTED` (value: `"SUBMITTED"`)

* `ACCEPTED` (value: `"ACCEPTED"`)

* `REJECTED` (value: `"REJECTED"`)

* `WITHDRAWN` (value: `"WITHDRAWN"`)

* `RETURNED` (value: `"RETURNED"`)

* `AWAITING_FUNDS` (value: `"AWAITING_FUNDS"`)

* `FUNDED` (value: `"FUNDED"`)

* `UNFUNDED` (value: `"UNFUNDED"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `REQUESTED` (value: `"REQUESTED"`)




