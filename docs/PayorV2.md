# VeloPayments.PayorV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payorId** | **String** | The Payor Id | 
**payorName** | **String** | The name of the payor | 
**payorXid** | **String** | A unique identifier that an external system uses to reference the payor in their system | [optional] 
**provider** | **String** | The source of the payorXid, default is null which means Velo | [optional] 
**address** | [**PayorAddressV2**](PayorAddressV2.md) |  | [optional] 
**primaryContactName** | **String** | Name of primary contact for the payor. | [optional] 
**primaryContactPhone** | **String** | Primary contact phone number for the payor. | [optional] 
**primaryContactEmail** | **String** | Primary contact email for the payor. | [optional] 
**kycState** | **String** | The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC | [optional] 
**manualLockout** | **Boolean** | Whether or not the payor has been manually locked by the backoffice. | [optional] 
**openBankingEnabled** | **Boolean** | Is Open Banking supported for this payor | [optional] 
**payeeGracePeriodProcessingEnabled** | **Boolean** | Whether grace period processing is enabled. | [optional] 
**payeeGracePeriodDays** | **Number** | The grace period for paying payees in days before the payee must be onboarded. | [optional] 
**collectiveAlias** | **String** | How the payor has chosen to refer to payees. | [optional] 
**supportContact** | **String** | The payor’s support contact email address. | [optional] 
**dbaName** | **String** | The payor’s &#39;Doing Business As&#39; name. | [optional] 
**allowsLanguageChoice** | **Boolean** | Whether or not the payor allows language choice in the UI. | [optional] 
**reminderEmailsOptOut** | **Boolean** | Whether or not the payor has opted-out of reminder emails being sent. | [optional] 
**language** | **String** | The payor’s language preference. Must be one of [EN, FR] | [optional] 
**includesReports** | **Boolean** | For internal use only (will be removed in a later version) | [optional] 
**wuCustomerId** | **String** | For internal use only (will be removed in a later version) | [optional] 
**maxMasterPayorAdmins** | **Number** | The maximum number of payor users with the master admin role | [optional] 
**paymentRails** | **String** | For internal use only (will be removed in a later version) | [optional] 
**remoteSystemIds** | **[String]** | For internal use only (will be removed in a later version) | [optional] 
**usdTxnValueReportingThreshold** | **Number** | USD in minor units. For internal use only (will be removed in a later version) | [optional] 
**managingPayees** | **Boolean** | Does this payor manage their own payees (payees are not invited but managed by the payor) | [optional] 
**createdAt** | **Date** | The date of creation of the payor | [optional] 


