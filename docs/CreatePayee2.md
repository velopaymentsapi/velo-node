# VeloPayments.CreatePayee2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payeeId** | **String** |  | [optional] [readonly] 
**payorRefs** | [**[PayeePayorRef]**](PayeePayorRef.md) |  | [optional] [readonly] 
**email** | **String** |  | 
**remoteId** | **String** |  | 
**type** | [**PayeeType2**](PayeeType2.md) |  | 
**address** | [**CreatePayeeAddress2**](CreatePayeeAddress2.md) |  | 
**paymentChannel** | [**CreatePaymentChannel2**](CreatePaymentChannel2.md) |  | [optional] 
**challenge** | [**Challenge2**](Challenge2.md) |  | [optional] 
**language** | **String** | An IETF BCP 47 language code which has been configured for use within this Velo environment.&lt;BR&gt; See the /v1/supportedLanguages endpoint to list the available codes for an environment.  | [optional] 
**company** | [**Company2**](Company2.md) |  | [optional] 
**individual** | [**CreateIndividual2**](CreateIndividual2.md) |  | [optional] 


