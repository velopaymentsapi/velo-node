# VeloPayments.PaymentStatusChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceType** | **String** | OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly | 
**eventId** | **String** | UUID id of the source event in the Velo platform | 
**createdAt** | **Date** | ISO8601 timestamp indicating when the source event was created | 
**paymentId** | **String** | ID of this payment within the Velo platform | 
**payoutPayorIds** | [**PayoutPayorIds**](PayoutPayorIds.md) |  | [optional] 
**payorPaymentId** | **String** | ID of this payment in the payors system | [optional] 
**status** | **String** | The new status of the payment. One of \&quot;SUBMITTED\&quot; \&quot;ACCEPTED\&quot; \&quot;REJECTED\&quot; \&quot;ACCEPTED_BY_RAILS\&quot; \&quot;CONFIRMED\&quot; \&quot;RETURNED\&quot; \&quot;WITHDRAWN\&quot; | 


