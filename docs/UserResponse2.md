# VeloPayments.UserResponse2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id of the user | [optional] 
**status** | **String** | The status of the user when the user has been invited but not yet enrolled they will have a PENDING status  | [optional] 
**email** | **String** | the email address of the user | [optional] 
**smsNumber** | **String** | The phone number of a device that the user can receive sms messages on  | [optional] 
**primaryContactNumber** | **String** | The main contact number for the user  | [optional] 
**secondaryContactNumber** | **String** | The secondary contact number for the user  | [optional] 
**firstName** | **String** |  | [optional] 
**lastName** | **String** |  | [optional] 
**entityId** | **String** | The payorId or payeeId or null if the user is not a payor or payee user  | [optional] 
**roles** | [**[UserResponse2Roles]**](UserResponse2Roles.md) | The role(s) for the user  | [optional] 
**mfaType** | **String** | The type of the MFA device | [optional] 
**mfaVerified** | **Boolean** | Will be true if the user has logged in successfully using the MFA Device  | [optional] 
**mfaStatus** | **String** | The status of the MFA device | [optional] 
**lockedOut** | **Boolean** | If true the user is currently locked out and unable to log in | [optional] 
**lockedOutTimestamp** | **Date** | A timestamp showing when the user was locked out If null then the user is not currently locked out  | [optional] 



## Enum: StatusEnum


* `ENABLED` (value: `"ENABLED"`)

* `DISABLED` (value: `"DISABLED"`)

* `PENDING` (value: `"PENDING"`)





## Enum: MfaTypeEnum


* `SMS` (value: `"SMS"`)

* `YUBIKEY` (value: `"YUBIKEY"`)

* `TOTP` (value: `"TOTP"`)





## Enum: MfaStatusEnum


* `REGISTERED` (value: `"REGISTERED"`)

* `UNREGISTERED` (value: `"UNREGISTERED"`)




