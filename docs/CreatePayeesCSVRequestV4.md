# VeloPayments.CreatePayeesCSVRequestV4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**PayeeTypeEnum**](PayeeTypeEnum.md) |  | 
**remoteId** | **String** |  | 
**email** | **String** |  | 
**addressLine1** | **String** |  | 
**addressLine2** | **String** |  | [optional] 
**addressLine3** | **String** |  | [optional] 
**addressLine4** | **String** |  | [optional] 
**addressCity** | **String** |  | 
**addressCountyOrProvince** | **String** |  | [optional] 
**addressZipOrPostcode** | **String** |  | 
**addressCountry** | **String** | Valid ISO 3166 2 character country code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-3166-country-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**individualNationalIdentification** | **String** |  | [optional] 
**individualDateOfBirth** | **Date** | Must not be date in future. Example - 1970-05-20 | [optional] 
**individualTitle** | **String** |  | [optional] 
**individualFirstName** | **String** |  | [optional] 
**individualOtherNames** | **String** |  | [optional] 
**individualLastName** | **String** |  | [optional] 
**companyName** | **String** |  | [optional] 
**companyEIN** | **String** |  | [optional] 
**companyOperatingName** | **String** |  | [optional] 
**paymentChannelAccountNumber** | **String** | Either routing number and account number or only iban must be set | [optional] 
**paymentChannelRoutingNumber** | **String** | Either routing number and account number or only iban must be set | [optional] 
**paymentChannelAccountName** | **String** |  | [optional] 
**paymentChannelIban** | **String** | Must match the regular expression &#x60;&#x60;&#x60;^[A-Za-z0-9]+$&#x60;&#x60;&#x60;. | [optional] 
**paymentChannelCountryCode** | **String** | Valid ISO 3166 2 character country code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-3166-country-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | [optional] 
**paymentChannelCurrency** | **String** |  | [optional] 
**challengeDescription** | **String** |  | [optional] 
**challengeValue** | **String** |  | [optional] 
**payeeLanguage** | **String** | An IETF BCP 47 language code which has been configured for use within this Velo environment.&lt;BR&gt; See the /v1/supportedLanguages endpoint to list the available codes for an environment.  | [optional] 


