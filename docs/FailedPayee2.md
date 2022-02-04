# VeloPayments.FailedPayee2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payeeId** | **String** |  | [optional] [readonly] 
**payorRefs** | [**[PayeePayorRef]**](PayeePayorRef.md) |  | [optional] [readonly] 
**email** | **String** |  | [optional] 
**remoteId** | **String** |  | [optional] 
**type** | [**PayeeType2**](PayeeType2.md) |  | [optional] 
**address** | [**CreatePayeeAddress2**](CreatePayeeAddress2.md) |  | [optional] 
**paymentChannel** | [**CreatePaymentChannel2**](CreatePaymentChannel2.md) |  | [optional] 
**challenge** | [**Challenge2**](Challenge2.md) |  | [optional] 
**language** | **String** | An IETF BCP 47 language code which has been configured for use within this Velo environment.&lt;BR&gt; See the /v1/supportedLanguages endpoint to list the available codes for an environment.  | [optional] 
**company** | [**Company2**](Company2.md) |  | [optional] 
**individual** | [**CreateIndividual2**](CreateIndividual2.md) |  | [optional] 


