# VeloPayments.PayeeDetailResponse2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payeeId** | **String** |  | [optional] [readonly] 
**payorRefs** | [**[PayeePayorRef]**](PayeePayorRef.md) |  | [optional] [readonly] 
**email** | **String** |  | [optional] 
**onboardedStatus** | [**OnboardedStatus**](OnboardedStatus.md) |  | [optional] 
**watchlistStatus** | [**WatchlistStatus2**](WatchlistStatus2.md) |  | [optional] 
**watchlistOverrideExpiresAtTimestamp** | **Date** |  | [optional] 
**watchlistOverrideComment** | **String** |  | [optional] 
**language** | **String** | An IETF BCP 47 language code which has been configured for use within this Velo environment.&lt;BR&gt; See the /v1/supportedLanguages endpoint to list the available codes for an environment.  | [optional] 
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
**challenge** | [**Challenge2**](Challenge2.md) |  | [optional] 


