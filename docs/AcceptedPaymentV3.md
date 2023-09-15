# VeloPayments.AcceptedPaymentV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remoteId** | **String** | Your identifier for the payee | 
**currencyType** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**amount** | **Number** | The amount of the payment in minor units | 
**sourceAccountName** | **String** | The identifier of the source account to debit the payment from | 
**payorPaymentId** | **String** | A reference identifier for the payor for the given payee payment | 
**paymentMemo** | **String** | &lt;p&gt;Any value here will override the memo value in the parent payout&lt;/p&gt; &lt;p&gt;This should be the reference field on the statement seen by the payee (but not via ACH)&lt;/p&gt;  | [optional] 
**remoteSystemId** | **String** | &lt;p&gt;The identifier for the remote payments system if not Velo&lt;/p&gt;  | [optional] 
**paymentMetadata** | **String** | &lt;p&gt;Metadata about the payment that may be relevant to the specific rails or remote system making the payout&lt;/p&gt; &lt;p&gt;The structure of the data will be dictated by the requirements of the payment rails&lt;/p&gt;  | [optional] 
**railsId** | **String** | Indicates the 3rd party system involved in making this payment | 


