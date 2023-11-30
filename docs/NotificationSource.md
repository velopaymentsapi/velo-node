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
**railsId** | **String** | the identifier of the payment rail from which funding was received | [optional] 
**payorId** | **String** | ID of the payor within the Velo platform | 
**fundingRequestId** | **String** | ID of this funding transaction within the Velo platform | 
**fundingRef** | **String** | the external identity reference for this funding transaction | [optional] 
**currency** | **String** | the ISO-4217 code for the currency in which the funding was made | [optional] 
**amount** | **Number** | the received funding amount in currency minor units | [optional] 
**physicalAccountName** | **String** | the name of the account as registered with the payment rail | [optional] 
**sourceAccountName** | **String** | the name of the account as registered with the Velo platform | [optional] 
**sourceAccountId** | **String** | the ID of the account as registered with the Velo platform | [optional] 
**additionalInformation** | **String** | any additional information received from the payment rail | [optional] 
**transactionId** | **String** | The Id of the related transaction | [optional] 
**transactionReference** | **String** | The payors own reference for the related transaction | [optional] 


