# VeloPayments.FundingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fundingId** | **String** |  | 
**payorId** | **String** |  | 
**allocationDate** | **Date** |  | 
**detectedFundingRef** | **String** |  | [optional] 
**amount** | **Number** |  | 
**currency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**text** | **String** |  | [optional] 
**physicalAccountName** | **String** |  | [optional] 
**sourceAccountId** | **String** |  | [optional] 
**allocationType** | **String** | Funding Allocation Type. One of the following values: AUTOMATIC, MANUAL | [optional] 
**reason** | **String** |  | [optional] 
**hiddenDate** | **Date** |  | [optional] 
**fundingAccountType** | **String** | Funding Account Type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE | 
**status** | **String** | Current status of the funding. One of the follwing values: PENDING, UNALLOCATED, ALLOCATED, HIDDEN, RETURNED, RETURNING, BULK_RETURN, OTHER | 


