# VeloPayments.PayeePayorRefV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payorId** | **String** |  | [optional] 
**remoteId** | **String** |  | [optional] 
**invitationStatus** | [**InvitationStatusV3**](InvitationStatusV3.md) |  | [optional] 
**invitationStatusTimestamp** | **Date** | The timestamp when the invitation status is updated | [optional] 
**paymentChannelId** | **String** |  | [optional] 
**payableStatus** | **Boolean** | Indicates if the payee is payable for this payor | [optional] 
**payableIssues** | [**[PayableIssueV3]**](PayableIssueV3.md) | Indicates any conditions which prevent the payee from being payable for this payor | [optional] 


