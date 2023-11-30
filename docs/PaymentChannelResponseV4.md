# VeloPayments.PaymentChannelResponseV4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**payeeId** | **String** |  | [optional] 
**paymentChannelName** | **String** |  | 
**accountName** | **String** |  | 
**channelType** | **String** | Payment channel type. One of the following values: CHANNEL_BANK | 
**countryCode** | **String** | Valid ISO 3166 2 character country code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-3166-country-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**routingNumber** | **String** |  | [optional] 
**accountNumber** | **String** |  | [optional] 
**iban** | **String** | Must match the regular expression &#x60;&#x60;&#x60;^[A-Za-z0-9]+$&#x60;&#x60;&#x60;. | [optional] 
**currency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**payorIds** | **[String]** |  | [optional] 
**payeeName** | **String** |  | [optional] 
**bankName** | **String** |  | [optional] 
**bankSwiftBic** | **String** |  | [optional] 
**bankAddress** | [**AddressV4**](AddressV4.md) |  | [optional] 
**deleted** | **Boolean** |  | [optional] 
**enabled** | **Boolean** |  | [optional] 
**disabledReasonCode** | **String** |  | [optional] 
**disabledReason** | **String** |  | [optional] 
**payable** | **Boolean** | Whether this payment channel is payable | [optional] 


