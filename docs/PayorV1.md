# VeloPayments.PayorV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payorId** | **String** |  | [optional] [readonly] 
**payorName** | **String** | The name of the payor. | 
**address** | [**PayorAddress**](PayorAddress.md) |  | [optional] 
**primaryContactName** | **String** | Name of primary contact for the payor. | [optional] 
**primaryContactPhone** | **String** | Primary contact phone number for the payor. | [optional] 
**primaryContactEmail** | **String** | Primary contact email for the payor. | [optional] 
**fundingAccountRoutingNumber** | **String** | The funding account routing number to be used for the payor. | [optional] 
**fundingAccountAccountNumber** | **String** | The funding account number to be used for the payor. | [optional] 
**fundingAccountAccountName** | **String** | The funding account name to be used for the payor. | [optional] 
**kycState** | **String** | The kyc state of the payor. | [optional] [readonly] 
**manualLockout** | **Boolean** | Whether or not the payor has been manually locked by the backoffice. | [optional] 
**payeeGracePeriodProcessingEnabled** | **Boolean** | Whether grace period processing is enabled. | [optional] [readonly] 
**payeeGracePeriodDays** | **Number** | The grace period for paying payees in days. | [optional] [readonly] 
**collectiveAlias** | **String** | How the payor has chosen to refer to payees. | [optional] 
**supportContact** | **String** | The payor’s support contact email address. | [optional] 
**dbaName** | **String** | The payor’s &#39;Doing Business As&#39; name. | [optional] 
**allowsLanguageChoice** | **Boolean** | Whether or not the payor allows language choice in the UI. | [optional] 
**reminderEmailsOptOut** | **Boolean** | Whether or not the payor has opted-out of reminder emails being sent. | [optional] [readonly] 
**language** | **String** | The payor’s language preference. Must be one of [EN, FR]. | [optional] 
**includesReports** | **Boolean** |  | [optional] 
**maxMasterPayorAdmins** | **Number** |  | [optional] 



## Enum: KycStateEnum


* `FAILED_KYC` (value: `"FAILED_KYC"`)

* `PASSED_KYC` (value: `"PASSED_KYC"`)

* `REQUIRES_KYC` (value: `"REQUIRES_KYC"`)





## Enum: LanguageEnum


* `EN` (value: `"EN"`)

* `FR` (value: `"FR"`)




