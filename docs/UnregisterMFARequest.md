# VeloPayments.UnregisterMFARequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mfaType** | **String** | The type of the MFA device | 
**verificationCode** | **String** | &lt;p&gt;Optional property that MUST be suppied when manually verifying a user&lt;/p&gt; &lt;p&gt;The user&#39;s smsNumber is registered via a separate endpoint and an OTP sent to them&lt;/p&gt;  | [optional] 



## Enum: MfaTypeEnum


* `YUBIKEY` (value: `"YUBIKEY"`)

* `TOTP` (value: `"TOTP"`)




