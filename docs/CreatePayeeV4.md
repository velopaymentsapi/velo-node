# VeloPayments.CreatePayeeV4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** |  | 
**remoteId** | **String** |  | 
**type** | [**PayeeTypeEnum**](PayeeTypeEnum.md) |  | 
**address** | [**CreatePayeeAddressV4**](CreatePayeeAddressV4.md) |  | 
**paymentChannel** | [**CreatePaymentChannelV4**](CreatePaymentChannelV4.md) |  | [optional] 
**challenge** | [**ChallengeV4**](ChallengeV4.md) |  | [optional] 
**language** | **String** | An IETF BCP 47 language code which has been configured for use within this Velo environment.&lt;BR&gt; See the /v1/supportedLanguages endpoint to list the available codes for an environment.  | [optional] 
**company** | [**CompanyV4**](CompanyV4.md) |  | [optional] 
**individual** | [**CreateIndividualV4**](CreateIndividualV4.md) |  | [optional] 


