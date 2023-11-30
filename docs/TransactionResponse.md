# VeloPayments.TransactionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | The Id of the transaction  | 
**transactionShortCode** | **String** | The short code for the transaction that can be used when sending funds into the platform  | 
**payorId** | **String** | Indicates the Payor of the Transaction and which matches the payorId on the provided source account | [optional] 
**sourceAccountName** | **String** | The name of the source account associated with the Transaction  | [optional] 
**sourceAccountId** | **String** | The Id of the source account associated with the Transaction  | [optional] 
**transactionReference** | **String** | The payors own reference for the transaction  | [optional] 
**transactionMetadata** | **{String: String}** | Optional metadata attached to the transaction at creation time.  | [optional] 
**balance** | **Number** | The total amount of transaction in minor units  | [optional] 
**currency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | [optional] 
**createdAt** | **Date** | A timestamp when the transaction has been created. | [optional] 


