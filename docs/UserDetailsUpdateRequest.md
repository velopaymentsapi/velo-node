# VeloPayments.UserDetailsUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primaryContactNumber** | **String** | The main contact number for the user  | [optional] 
**secondaryContactNumber** | **String** | The secondary contact number for the user  | [optional] 
**firstName** | **String** |  | [optional] 
**lastName** | **String** |  | [optional] 
**email** | **String** | the email address of the user | [optional] 
**smsNumber** | **String** | The phone number of a device that the user can receive sms messages on  | [optional] 
**mfaType** | [**MFAType**](MFAType.md) |  | [optional] 
**verificationCode** | **String** | &lt;p&gt;Optional property that MUST be suppied when manually verifying a user&lt;/p&gt; &lt;p&gt;The user&#39;s smsNumber is registered via a separate endpoint and an OTP sent to them&lt;/p&gt;  | [optional] 


