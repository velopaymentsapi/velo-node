# VeloPayments.NotificationSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceType** | **String** | OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly | 
**eventId** | **String** | UUID id of the source event in the Velo platform | 
**createdAt** | **Date** | ISO8601 timestamp indicating when the source event was created | 
**paymentId** | **String** | ID of this payment within the Velo platform | 
**payoutPayorIds** | [**PayoutPayorIds**](PayoutPayorIds.md) |  | [optional] 
**payorPaymentId** | **String** | ID of this payment in the payors system | [optional] 
**status** | **String** | The new status of the debit. One of \&quot;PENDING\&quot; \&quot;PROCESSING\&quot; \&quot;REJECTED\&quot; \&quot;RELEASED\&quot; | 
**reasonCode** | **String** | The Velo code that indicates why the payment was rejected or returned | 
**reasonMessage** | **String** | The description of why the payment was rejected or returned | 
**payeeId** | **String** | ID of this payee within the Velo platform | 
**reasons** | [**[PayeeEventAllOfReasons]**](PayeeEventAllOfReasons.md) | The reasons for the event notification. | [optional] 
**debitTransactionId** | **String** | ID of this debit transaction within the Velo platform | 


