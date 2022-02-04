# VeloPayments.GetPayeeListResponse2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payeeId** | **String** |  | [optional] [readonly] 
**payorRefs** | [**[PayeePayorRef]**](PayeePayorRef.md) |  | [optional] [readonly] 
**email** | **String** |  | [optional] 
**onboardedStatus** | [**OnboardedStatus**](OnboardedStatus.md) |  | [optional] 
**watchlistStatus** | [**WatchlistStatus2**](WatchlistStatus2.md) |  | [optional] 
**watchlistStatusUpdatedTimestamp** | **String** |  | [optional] [readonly] 
**watchlistOverrideComment** | **String** |  | [optional] 
**language** | **String** | An IETF BCP 47 language code which has been configured for use within this Velo environment.&lt;BR&gt; See the /v1/supportedLanguages endpoint to list the available codes for an environment.  | [optional] 
**created** | **Date** |  | [optional] 
**country** | **String** |  | [optional] 
**displayName** | **String** |  | [optional] 
**payeeType** | [**PayeeType2**](PayeeType2.md) |  | [optional] 
**disabled** | **Boolean** |  | [optional] 
**disabledComment** | **String** |  | [optional] 
**disabledUpdatedTimestamp** | **Date** |  | [optional] 
**individual** | [**GetPayeeListResponseIndividual2**](GetPayeeListResponseIndividual2.md) |  | [optional] 
**company** | [**GetPayeeListResponseCompany2**](GetPayeeListResponseCompany2.md) |  | [optional] 


