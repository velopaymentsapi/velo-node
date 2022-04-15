# VeloPayments.CreatePayeeV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payeeId** | **String** |  | [optional] [readonly] 
**payorRefs** | [**[PayeePayorRefV3]**](PayeePayorRefV3.md) |  | [optional] [readonly] 
**email** | **String** |  | 
**remoteId** | **String** |  | 
**type** | [**PayeeType2**](PayeeType2.md) |  | 
**address** | [**CreatePayeeAddressV3**](CreatePayeeAddressV3.md) |  | 
**paymentChannel** | [**CreatePaymentChannelV3**](CreatePaymentChannelV3.md) |  | [optional] 
**challenge** | [**ChallengeV3**](ChallengeV3.md) |  | [optional] 
**language** | **String** | An IETF BCP 47 language code which has been configured for use within this Velo environment.&lt;BR&gt; See the /v1/supportedLanguages endpoint to list the available codes for an environment.  | [optional] 
**company** | [**CompanyV3**](CompanyV3.md) |  | [optional] 
**individual** | [**CreateIndividualV3**](CreateIndividualV3.md) |  | [optional] 


