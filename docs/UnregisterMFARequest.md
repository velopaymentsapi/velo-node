# VeloPayments.UnregisterMFARequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mfaType** | **String** | The type of the MFA device | 
**verificationCode** | **String** | Optional property that MUST be suppied when manually verifying a user The user&#39;s smsNumber is registered via a separate endpoint and an OTP sent to them  | [optional] 



## Enum: MfaTypeEnum


* `SMS` (value: `"SMS"`)

* `YUBIKEY` (value: `"YUBIKEY"`)

* `TOTP` (value: `"TOTP"`)




