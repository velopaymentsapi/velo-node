# VeloPayments.PayeeDetailsChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceType** | **String** | OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly | 
**eventId** | **String** | UUID id of the source event in the Velo platform | 
**createdAt** | **Date** | ISO8601 timestamp indicating when the source event was created | 
**payeeId** | **String** | ID of this payee within the Velo platform | 
**reasons** | [**[PayeeEventAllOfReasons]**](PayeeEventAllOfReasons.md) | The reasons for the event notification. | [optional] 


