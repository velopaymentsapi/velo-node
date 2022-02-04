# VeloPayments.PayeeDetailResponse

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
**language** | **String** | An IETF BCP 47 language code which has been configured for use within this Velo environment.&lt;BR&gt; See the /v1/supportedLanguages endpoint to list the available codes for an environment.  | [optional] 
**created** | **Date** |  | [optional] 
**country** | **String** |  | [optional] 
**displayName** | **String** |  | [optional] 
**payeeType** | [**PayeeType2**](PayeeType2.md) |  | [optional] 
**disabled** | **Boolean** |  | [optional] 
**disabledComment** | **String** |  | [optional] 
**disabledUpdatedTimestamp** | **Date** |  | [optional] 
**address** | [**PayeeAddress**](PayeeAddress.md) |  | [optional] 
**individual** | [**Individual**](Individual.md) |  | [optional] 
**company** | [**Company**](Company.md) |  | [optional] 
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
**challenge** | [**Challenge**](Challenge.md) |  | [optional] 


