# VeloPayments.CreateTransactionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payorId** | **String** | Indicates the Payor creating the Transaction and which matches the payorId on the provided source account | 
**sourceAccountName** | **String** | The name of the source account that the new Transaction will be associated with and any funding containing the transactionShortCode will credit.  | 
**transactionReference** | **String** | The payors own reference for the transaction that can later be used for querying and retrieval.  | 
**transactionMetadata** | **{String: String}** | Optional metadata that will be attached to the created transaction and can that can be retrieved later.| The total length of all the keys and values provided in the metadata must be no more than 4000 chars.  | [optional] 


