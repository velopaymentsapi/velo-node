# VeloPayments.PayeeResponseV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payeeId** | **String** |  | [optional] [readonly] 
**payorRefs** | [**[PayeePayorRefV2]**](PayeePayorRefV2.md) |  | [optional] [readonly] 
**email** | **String** |  | [optional] 
**onboardedStatus** | [**OnboardedStatus2**](OnboardedStatus2.md) |  | [optional] 
**ofacStatus** | [**OfacStatus2**](OfacStatus2.md) |  | [optional] 
**language** | [**Language2**](Language2.md) |  | [optional] 
**created** | **Date** |  | [optional] 
**country** | **String** |  | [optional] 
**displayName** | **String** |  | [optional] 
**payeeType** | [**PayeeType**](PayeeType.md) |  | [optional] 
**disabled** | **Boolean** |  | [optional] 
**disabledComment** | **String** |  | [optional] 
**disabledUpdatedTimestamp** | **Date** |  | [optional] 
**address** | [**PayeeAddress2**](PayeeAddress2.md) |  | [optional] 
**individual** | [**Individual**](Individual.md) |  | [optional] 
**company** | [**Company**](Company.md) |  | [optional] 
**cellphoneNumber** | **String** |  | [optional] 
**lastOfacCheckTimestamp** | **String** |  | [optional] [readonly] 
**ofacOverride** | **Boolean** |  | [optional] 
**ofacOverrideReason** | **String** |  | [optional] 
**ofacOverrideTimestamp** | **String** |  | [optional] 
**gracePeriodEndDate** | **Date** |  | [optional] [readonly] 
**enhancedKycCompleted** | **Boolean** |  | [optional] 
**kycCompletedTimestamp** | **String** |  | [optional] 
**pausePayment** | **Boolean** |  | [optional] 
**pausePaymentTimestamp** | **String** |  | [optional] 
**marketingOptInDecision** | **Boolean** |  | [optional] 
**marketingOptInTimestamp** | **String** |  | [optional] 
**acceptTermsAndConditionsTimestamp** | **Date** | The timestamp when the payee last accepted T&amp;Cs | [optional] [readonly] 


