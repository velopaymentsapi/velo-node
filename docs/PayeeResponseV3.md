# VeloPayments.PayeeResponseV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payeeId** | **String** |  | [optional] [readonly] 
**payorRefs** | [**[PayeePayorRefV3]**](PayeePayorRefV3.md) |  | [optional] [readonly] 
**email** | **String** |  | [optional] 
**onboardedStatus** | [**OnboardedStatus2**](OnboardedStatus2.md) |  | [optional] 
**watchlistStatus** | [**WatchlistStatus**](WatchlistStatus.md) |  | [optional] 
**watchlistOverrideExpiresAtTimestamp** | **Date** |  | [optional] 
**watchlistOverrideComment** | **String** |  | [optional] 
**language** | [**Language2**](Language2.md) |  | [optional] 
**created** | **Date** |  | [optional] 
**country** | **String** |  | [optional] 
**displayName** | **String** |  | [optional] 
**payeeType** | [**PayeeType**](PayeeType.md) |  | [optional] 
**disabled** | **Boolean** |  | [optional] 
**disabledComment** | **String** |  | [optional] 
**disabledUpdatedTimestamp** | **Date** |  | [optional] 
**address** | [**PayeeAddress2**](PayeeAddress2.md) |  | [optional] 
**individual** | [**Individual2**](Individual2.md) |  | [optional] 
**company** | [**Company2**](Company2.md) |  | [optional] 
**cellphoneNumber** | **String** |  | [optional] 
**watchlistStatusUpdatedTimestamp** | **String** |  | [optional] [readonly] 
**gracePeriodEndDate** | **Date** |  | [optional] [readonly] 
**enhancedKycCompleted** | **Boolean** |  | [optional] 
**kycCompletedTimestamp** | **String** |  | [optional] 
**pausePayment** | **Boolean** |  | [optional] 
**pausePaymentTimestamp** | **String** |  | [optional] 
**marketingOptInDecision** | **Boolean** |  | [optional] 
**marketingOptInTimestamp** | **String** |  | [optional] 
**acceptTermsAndConditionsTimestamp** | **Date** | The timestamp when the payee last accepted T&amp;Cs | [optional] [readonly] 


