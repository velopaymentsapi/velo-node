# VeloPayments.PayeeDetailResponseV4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payeeId** | **String** |  | [optional] [readonly] 
**payorRefs** | [**[PayeePayorRefV4]**](PayeePayorRefV4.md) |  | [optional] [readonly] 
**paymentChannels** | [**[PaymentChannelSummaryV4]**](PaymentChannelSummaryV4.md) | A list of the Payee&#39;s payment channels in their preferred order | [optional] [readonly] 
**email** | **String** |  | [optional] 
**onboardedStatus** | **String** | Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED | [optional] 
**watchlistStatus** | **String** | Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED | [optional] 
**watchlistOverrideExpiresAtTimestamp** | **Date** |  | [optional] 
**watchlistOverrideComment** | **String** |  | [optional] 
**language** | **String** | An IETF BCP 47 language code which has been configured for use within this Velo environment.&lt;BR&gt; See the /v1/supportedLanguages endpoint to list the available codes for an environment.  | [optional] 
**created** | **Date** |  | [optional] 
**country** | **String** |  | [optional] 
**displayName** | **String** |  | [optional] 
**payeeType** | **String** | Type of Payee. One of the following values: Individual, Company | [optional] 
**disabled** | **Boolean** |  | [optional] 
**disabledComment** | **String** |  | [optional] 
**disabledUpdatedTimestamp** | **Date** |  | [optional] 
**address** | [**PayeeAddressV4**](PayeeAddressV4.md) |  | [optional] 
**individual** | [**IndividualV4**](IndividualV4.md) |  | [optional] 
**company** | [**CompanyV4**](CompanyV4.md) |  | [optional] 
**cellphoneNumber** | **String** |  | [optional] 
**managedByPayorId** | **String** | The id of the payor if the payee is managed | [optional] 
**watchlistStatusUpdatedTimestamp** | **String** |  | [optional] [readonly] 
**gracePeriodEndDate** | **Date** |  | [optional] [readonly] 
**enhancedKycCompleted** | **Boolean** |  | [optional] 
**kycCompletedTimestamp** | **String** |  | [optional] 
**pausePayment** | **Boolean** |  | [optional] 
**pausePaymentTimestamp** | **String** |  | [optional] 
**marketingOptInDecision** | **Boolean** |  | [optional] 
**marketingOptInTimestamp** | **String** |  | [optional] 
**acceptTermsAndConditionsTimestamp** | **Date** | The timestamp when the payee last accepted T&amp;Cs | [optional] [readonly] 
**challenge** | [**ChallengeV4**](ChallengeV4.md) |  | [optional] 


