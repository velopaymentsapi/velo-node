# VeloPayments.InviteUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | the email address of the invited user | 
**mfaType** | **String** | &lt;p&gt;The MFA type that the user will use&lt;/p&gt; &lt;p&gt;The type may be conditional on the role(s) the user has&lt;/p&gt;  | 
**smsNumber** | **String** | The phone number of a device that the user can receive sms messages on  | 
**primaryContactNumber** | **String** | The main contact number for the user  | 
**secondaryContactNumber** | **String** | The secondary contact number for the user  | [optional] 
**roles** | **[String]** | The role(s) for the user The role must exist The role can be a custom role or a system role but the invoker must have the permissions to assign the role System roles are: backoffice.admin, payor.master_admin, payor.admin, payor.support  | 
**firstName** | **String** |  | [optional] 
**lastName** | **String** |  | [optional] 
**entityId** | **String** | The payorId or null if the user is not a payor user  | [optional] 
**verificationCode** | **String** | Optional property that MUST be suppied when manually verifying a user The user&#39;s smsNumber is registered via a separate endpoint and an OTP sent to them  | [optional] 



## Enum: MfaTypeEnum


* `SMS` (value: `"SMS"`)

* `YUBIKEY` (value: `"YUBIKEY"`)

* `TOTP` (value: `"TOTP"`)




