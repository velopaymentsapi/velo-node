# VeloPaymentsApIs.CreatePaymentChannel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentChannelName** | **String** |  | [optional] 
**iban** | **String** | Must match the regular expression &#x60;&#x60;&#x60;^[A-Za-z0-9]+$&#x60;&#x60;&#x60;. Either routing number and account number or only iban must be set | [optional] 
**accountNumber** | **String** | Either routing number and account number or only iban must be set | [optional] 
**routingNumber** | **String** | Either routing number and account number or only iban must be set | [optional] 
**countryCode** | **String** | Two character country code | 
**currency** | **String** |  | 
**accountName** | **String** |  | 


<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `USD` (value: `"USD"`)

* `GBP` (value: `"GBP"`)

* `EUR` (value: `"EUR"`)




