# VeloPayments.FundingAccountResponseV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Funding Account Id | [optional] 
**payorId** | **String** |  | [optional] 
**accountName** | **String** | name on the bank account | [optional] 
**accountNumber** | **String** | bank account number | [optional] 
**routingNumber** | **String** | bank account routing number | [optional] 
**name** | **String** | name of funding account | [optional] 
**currency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | [optional] 
**countryCode** | **String** | ISO 3166-1 2 letter country code (upper case) | [optional] 
**type** | **String** | Funding account type. One of the following values: FBO, PRIVATE | [optional] 
**archived** | **Boolean** | A flag for whether the funding account has been archived.  Only present in the response if true. | [optional] 


