# VeloPayments.SourceAccountResponseV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Source Account Id | 
**balance** | **Number** | Decimal implied | [optional] 
**currency** | **String** |  | [optional] 
**fundingRef** | **String** | The funding reference (will not be set for DECOUPLED accounts). | [optional] 
**physicalAccountName** | **String** | The physical account name (will not be set for DECOUPLED accounts). | [optional] 
**railsId** | **String** |  | 
**payorId** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**pooled** | **Boolean** | The pooled account flag (will not be set for DECOUPLED accounts). | [optional] 
**customerId** | **String** |  | [optional] 
**physicalAccountId** | **String** | The physical account id (will not be set for DECOUPLED accounts). | [optional] 
**notifications** | [**Notifications2**](Notifications2.md) |  | [optional] 
**autoTopUpConfig** | [**AutoTopUpConfig2**](AutoTopUpConfig2.md) |  | [optional] 
**type** | **String** |  | 
**country** | **String** | The two character ISO country code for the associated account | [optional] 
**archived** | **Boolean** | A flag for whether the source account has been archived.  Only present in the response if true. | [optional] 



## Enum: CurrencyEnum


* `USD` (value: `"USD"`)

* `EUR` (value: `"EUR"`)

* `GBP` (value: `"GBP"`)

* `CAD` (value: `"CAD"`)

* `HKD` (value: `"HKD"`)




