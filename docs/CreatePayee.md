# VeloPaymentsApIs.CreatePayee

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payeeId** | **String** |  | [optional] 
**payorRefs** | [**[PayorRef]**](PayorRef.md) |  | [optional] 
**email** | **String** |  | 
**remoteId** | **String** |  | 
**type** | **String** |  | [optional] 
**displayName** | **String** |  | [optional] 
**country** | **String** |  | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**paymentChannel** | [**CreatePaymentChannel**](CreatePaymentChannel.md) |  | [optional] 
**challenge** | [**Challenge**](Challenge.md) |  | [optional] 
**language** | [**Language**](Language.md) |  | [optional] 
**acceptTermsAndConditionsTimestamp** | **Date** | The timestamp when the payee last accepted T&amp;Cs | [optional] 
**cellphoneNumber** | **String** |  | [optional] 
**payeeType** | [**PayeeType**](PayeeType.md) |  | [optional] 
**company** | [**Company**](Company.md) |  | [optional] 
**individual** | [**Individual**](Individual.md) |  | [optional] 
**created** | **Date** |  | [optional] 
**gracePeriodEndDate** | **Date** |  | [optional] 
**lastOfacCheckTimestamp** | **String** |  | [optional] 
**marketingOptIns** | [**[MarketingOptIn]**](MarketingOptIn.md) |  | [optional] 
**ofacStatus** | [**OfacStatus**](OfacStatus.md) |  | [optional] 
**onboardedStatus** | [**OnboardedStatus**](OnboardedStatus.md) |  | [optional] 
**social** | [**Social**](Social.md) |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `Individual` (value: `"Individual"`)

* `Company` (value: `"Company"`)




