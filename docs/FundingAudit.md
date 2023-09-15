# VeloPayments.FundingAudit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The amount funded | [optional] 
**currency** | **String** | The currency of the funding | [optional] 
**dateTime** | **Date** |  | [optional] 
**status** | **String** | Status of the funding. One of the following values: PENDING, FAILED, CREDIT, DEBIT | [optional] 
**sourceAccountName** | **String** |  | [optional] 
**fundingAccountName** | **String** |  | [optional] 
**fundingType** | **String** | Funding type. One of the following values: ACH, WIRE, EMBEDDED, BANK_TRANSFER | [optional] 
**events** | [**[FundingEvent]**](FundingEvent.md) |  | [optional] 
**topupType** | **String** | Type of top up. One of the following values: AUTOMATIC, MANUAL | [optional] 


