# VeloPayments.PayorFundingDetectedAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**railsId** | **String** | the identifier of the payment rail from which funding was received | [optional] 
**payorId** | **String** | ID of the payor within the Velo platform | 
**fundingRequestId** | **String** | ID of this funding transaction within the Velo platform | 
**fundingRef** | **String** | the external identity reference for this funding transaction | [optional] 
**currency** | **String** | the ISO-4217 code for the currency in which the funding was made | [optional] 
**amount** | **Number** | the received funding amount in currency minor units | [optional] 
**physicalAccountName** | **String** | the name of the account as registered with the payment rail | [optional] 
**sourceAccountName** | **String** | the name of the account as registered with the Velo platform | [optional] 
**sourceAccountId** | **String** | the ID of the account as registered with the Velo platform | [optional] 
**additionalInformation** | **String** | any additional information received from the payment rail | [optional] 
**transactionId** | **String** | The Id of the related transaction | [optional] 
**transactionReference** | **String** | The payors own reference for the related transaction | [optional] 


