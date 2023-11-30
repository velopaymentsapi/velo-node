# VeloPayments.FundingAudit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payorId** | **String** | The id of the payor associated with the funding. | [optional] 
**amount** | **Number** | The amount funded | [optional] 
**currency** | **String** | The currency of the funding | [optional] 
**dateTime** | **Date** |  | [optional] 
**status** | **String** | Status of the funding. One of the following values: PENDING, FAILED, CREDIT, DEBIT | [optional] 
**sourceAccountName** | **String** |  | [optional] 
**fundingAccountName** | **String** |  | [optional] 
**fundingType** | **String** | Funding type. One of the following values: ACH, WIRE, EMBEDDED, BANK_TRANSFER | [optional] 
**events** | [**[FundingEvent2]**](FundingEvent2.md) |  | [optional] 
**topupType** | **String** | Type of top up. One of the following values: AUTOMATIC, MANUAL | [optional] 
**transactionId** | **String** | The id of the transaction associated with the funding if there was one | [optional] 
**transactionReference** | **String** | The payors reference for the transaction associated with the funding if there was one | [optional] 


