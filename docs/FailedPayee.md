# VeloPayments.FailedPayee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payeeId** | **String** |  | [optional] [readonly] 
**payorRefs** | [**[PayeePayorRefV3]**](PayeePayorRefV3.md) |  | [optional] [readonly] 
**email** | **String** |  | [optional] 
**remoteId** | **String** |  | [optional] 
**type** | [**PayeeType**](PayeeType.md) |  | [optional] 
**address** | [**CreatePayeeAddress**](CreatePayeeAddress.md) |  | [optional] 
**paymentChannel** | [**CreatePaymentChannel**](CreatePaymentChannel.md) |  | [optional] 
**challenge** | [**Challenge**](Challenge.md) |  | [optional] 
**language** | **String** | An IETF BCP 47 language code which has been configured for use within this Velo environment.&lt;BR&gt; See the /v1/supportedLanguages endpoint to list the available codes for an environment.  | [optional] 
**company** | [**Company**](Company.md) |  | [optional] 
**individual** | [**CreateIndividual**](CreateIndividual.md) |  | [optional] 


