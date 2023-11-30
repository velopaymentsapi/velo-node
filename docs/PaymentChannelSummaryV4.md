# VeloPayments.PaymentChannelSummaryV4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentChannelId** | **String** |  | 
**name** | **String** | The payment channel name | 
**countryCode** | **String** | Valid ISO 3166 2 character country code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-3166-country-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**currency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**last4Digits** | **String** | The last 4 digits of the account number or IBAN | [optional] 
**enabled** | **Boolean** | Usually true. False if an associated payment is returned | 
**disabledReason** | **String** | Indicates why the payment channel was disabled | [optional] 
**disabledReasonCode** | **String** |  | [optional] 


