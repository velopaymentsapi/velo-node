# VeloPayments.Payee2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**payeeId** | **String** |  | [optional] [readonly] 
**payorRefs** | [**[PayeePayorRefV2]**](PayeePayorRefV2.md) |  | [optional] [readonly] 
**email** | **String** |  | [optional] 
**address** | [**PayeeAddress**](PayeeAddress.md) |  | [optional] 
**country** | **String** |  | [optional] 
**displayName** | **String** |  | [optional] 
**paymentChannel** | [**PayeePaymentChannel2**](PayeePaymentChannel2.md) |  | [optional] 
**challenge** | [**Challenge**](Challenge.md) |  | [optional] 
**language** | [**Language2**](Language2.md) |  | [optional] 
**acceptTermsAndConditionsTimestamp** | **Date** | The timestamp when the payee last accepted T&amp;Cs | [optional] [readonly] 
**cellphoneNumber** | **String** |  | [optional] 
**payeeType** | [**PayeeType**](PayeeType.md) |  | [optional] 
**company** | [**CompanyV1**](CompanyV1.md) |  | [optional] 
**individual** | [**IndividualV1**](IndividualV1.md) |  | [optional] 
**created** | **Date** |  | [optional] 
**gracePeriodEndDate** | **Date** |  | [optional] [readonly] 
**watchlistStatusUpdatedTimestamp** | **String** |  | [optional] [readonly] 
**marketingOptIns** | [**[MarketingOptIn]**](MarketingOptIn.md) |  | [optional] 
**onboardedStatus** | [**OnboardedStatus**](OnboardedStatus.md) |  | [optional] 
**remoteId** | **String** | Remote Id must be between 1 and 100 characters long | [optional] 



## Enum: TypeEnum


* `Individual` (value: `"Individual"`)

* `Company` (value: `"Company"`)




