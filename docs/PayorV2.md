# VeloPayments.PayorV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payorId** | **String** |  | [readonly] 
**payorName** | **String** | The name of the payor. | 
**payorXid** | **String** | A unique identifier that an external system uses to reference the payor in their system | [optional] 
**provider** | **String** | The source of the payorXid, default is null which means Velo | [optional] 
**address** | [**PayorAddressV2**](PayorAddressV2.md) |  | [optional] 
**primaryContactName** | **String** | Name of primary contact for the payor. | [optional] 
**primaryContactPhone** | **String** | Primary contact phone number for the payor. | [optional] 
**primaryContactEmail** | **String** | Primary contact email for the payor. | [optional] 
**kycState** | [**KycState**](KycState.md) |  | [optional] 
**manualLockout** | **Boolean** | Whether or not the payor has been manually locked by the backoffice. | [optional] 
**openBankingEnabled** | **Boolean** | Is Open Banking supported for this payor | [optional] 
**payeeGracePeriodProcessingEnabled** | **Boolean** | Whether grace period processing is enabled. | [optional] [readonly] 
**payeeGracePeriodDays** | **Number** | The grace period for paying payees in days. | [optional] [readonly] 
**collectiveAlias** | **String** | How the payor has chosen to refer to payees. | [optional] 
**supportContact** | **String** | The payor’s support contact email address. | [optional] 
**dbaName** | **String** | The payor’s &#39;Doing Business As&#39; name. | [optional] 
**allowsLanguageChoice** | **Boolean** | Whether or not the payor allows language choice in the UI. | [optional] 
**reminderEmailsOptOut** | **Boolean** | Whether or not the payor has opted-out of reminder emails being sent. | [optional] [readonly] 
**language** | **String** | The payor’s language preference. Must be one of [EN, FR]. | [optional] 
**includesReports** | **Boolean** |  | [optional] 
**wuCustomerId** | **String** |  | [optional] 
**maxMasterPayorAdmins** | **Number** |  | [optional] 
**paymentRails** | [**PaymentRails**](PaymentRails.md) |  | [optional] 
**transmissionTypes** | [**TransmissionTypes2**](TransmissionTypes2.md) |  | [optional] 
**remoteSystemIds** | **[String]** | The payor’s supported remote systems by id | [optional] 
**usdTxnValueReportingThreshold** | **Number** | USD in minor units | [optional] 
**managingPayees** | **Boolean** |  | [optional] 



## Enum: LanguageEnum


* `EN` (value: `"EN"`)

* `FR` (value: `"FR"`)




