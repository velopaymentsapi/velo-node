# VeloPayments.FundingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fundingId** | **String** |  | 
**payorId** | **String** |  | 
**createdAt** | **Date** | The date and time the funding was created | 
**detectedFundingRef** | **String** |  | [optional] 
**amount** | **Number** |  | 
**currency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**text** | **String** |  | [optional] 
**physicalAccountName** | **String** |  | [optional] 
**sourceAccountId** | **String** |  | [optional] 
**allocationType** | **String** | Funding Allocation Type. One of the following values: AUTOMATIC, MANUAL | [optional] 
**allocatedAt** | **Date** | Populated only if the funding has been allocated. The date and time the funding was allocated. | [optional] 
**allocationDate** | **Date** | Populated with allocatedAt if allocated otherwise createdAt. Deprecated in v2.36 - will be removed in the future. | [optional] 
**reason** | **String** |  | [optional] 
**hiddenDate** | **Date** |  | [optional] 
**fundingAccountType** | **String** | Funding Account Type. One of the following values: FBO, PRIVATE | 
**status** | **String** | Current status of the funding. One of the follwing values: PENDING, UNALLOCATED, ALLOCATED, HIDDEN, RETURNED, RETURNING, BULK_RETURN, OTHER | 


