# VeloPaymentsApIs.CreatePayeesCSVRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**PayeeType**](PayeeType.md) |  | 
**remoteId** | **String** |  | 
**email** | **String** |  | 
**addressLine1** | **String** |  | 
**addressLine2** | **String** |  | [optional] 
**addressLine3** | **String** |  | [optional] 
**addressLine4** | **String** |  | [optional] 
**addressCity** | **String** |  | 
**addressCountyOrProvince** | **String** |  | [optional] 
**addressZipOrPostcode** | **String** |  | 
**addressCountry** | **String** |  | 
**individualTitle** | **String** |  | [optional] 
**individualFirstName** | **String** |  | [optional] 
**individualOtherNames** | **String** |  | [optional] 
**individualLastName** | **String** |  | [optional] 
**individualNationalIdentification** | **String** |  | [optional] 
**individualDateOfBirth** | **Date** | example - 1970-05-20 | [optional] 
**companyName** | **String** |  | [optional] 
**companyTaxId** | **String** | Company Tax Id (EIN) must be 9 numeric characters. Must match the regular expression &#x60;&#x60;&#x60;[\\d]{9}&#x60;&#x60;&#x60;. | [optional] 
**paymentChannelIban** | **String** | Must match the regular expression &#x60;&#x60;&#x60;^[A-Za-z0-9]+$&#x60;&#x60;&#x60;. | [optional] 
**paymentChannelAccountNumber** | **String** |  | [optional] 
**paymentChannelRoutingNo** | **String** |  | [optional] 
**paymentChannelCountryCode** | **String** | Must be a 3 character currency code. ISO 4217 | [optional] 
**paymentChannelCurrency** | **String** |  | [optional] 
**paymentChannelAccountName** | **String** |  | [optional] 
**challengeValue** | **String** |  | [optional] 
**challengeDescription** | **String** |  | [optional] 
**payeeLanguage** | **String** |  | [optional] 


<a name="PaymentChannelCurrencyEnum"></a>
## Enum: PaymentChannelCurrencyEnum


* `USD` (value: `"USD"`)

* `GBP` (value: `"GBP"`)

* `EUR` (value: `"EUR"`)




<a name="PayeeLanguageEnum"></a>
## Enum: PayeeLanguageEnum


* `AR` (value: `"AR"`)

* `EN` (value: `"EN"`)

* `ES` (value: `"ES"`)

* `FR` (value: `"FR"`)

* `HE` (value: `"HE"`)

* `HI` (value: `"HI"`)

* `JA` (value: `"JA"`)

* `PT` (value: `"PT"`)

* `RU` (value: `"RU"`)

* `UR` (value: `"UR"`)

* `ZH` (value: `"ZH"`)




