# VeloPayments.InviteUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | the email address of the invited user | 
**mfaType** | **String** | &lt;p&gt;The MFA type that the user will use&lt;/p&gt; &lt;p&gt;The type may be conditional on the role(s) the user has&lt;/p&gt;  | 
**smsNumber** | **String** | The phone number of a device that the user can receive sms messages on  | 
**primaryContactNumber** | **String** | The main contact number for the user  | 
**secondaryContactNumber** | **String** | The secondary contact number for the user  | [optional] 
**roles** | **[String]** | The role(s) for the user The role must exist The role can be a custom role or a system role but the invoker must have the permissions to assign the role System roles are: velo.backoffice.admin, velo.payor.master_admin, velo.payor.admin, velo.payor.support, velo.payee.admin, velo.payee.support  | 
**firstName** | **String** |  | [optional] 
**lastName** | **String** |  | [optional] 
**entityId** | **String** | The payorId or payeeId or null if the user is a backoffice admin  | [optional] 
**userType** | **String** | Will default to PAYOR if not provided but entityId is provided | [optional] 
**verificationCode** | **String** | Optional property that MUST be suppied when manually verifying a user The user&#39;s smsNumber is registered via a separate endpoint and an OTP sent to them  | [optional] 



## Enum: MfaTypeEnum


* `SMS` (value: `"SMS"`)

* `YUBIKEY` (value: `"YUBIKEY"`)

* `TOTP` (value: `"TOTP"`)





## Enum: UserTypeEnum


* `BACKOFFICE` (value: `"BACKOFFICE"`)

* `PAYOR` (value: `"PAYOR"`)

* `PAYEE` (value: `"PAYEE"`)




