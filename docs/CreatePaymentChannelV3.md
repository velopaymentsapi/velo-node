# VeloPayments.CreatePaymentChannelV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentChannelName** | **String** |  | [optional] 
**iban** | **String** | Must match the regular expression &#x60;&#x60;&#x60;^[A-Za-z0-9]+$&#x60;&#x60;&#x60;. | [optional] 
**accountNumber** | **String** | Either routing number and account number or only iban must be set | [optional] 
**routingNumber** | **String** | Either routing number and account number or only iban must be set | [optional] 
**countryCode** | **String** | Valid ISO 3166 2 character country code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-3166-country-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**currency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**accountName** | **String** |  | 


