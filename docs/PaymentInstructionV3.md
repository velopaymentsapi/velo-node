# VeloPayments.PaymentInstructionV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remoteId** | **String** | Your identifier for payee | 
**currency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**amount** | **Number** | &lt;p&gt;Amount to send to Payee&lt;/p&gt; &lt;p&gt;The maximum payment amount is dependent on the currency&lt;/p&gt;  | 
**paymentMemo** | **String** | &lt;p&gt;Any value here will override the memo value in the parent payout&lt;/p&gt; &lt;p&gt;This should be the reference field on the statement seen by the payee (but not via ACH)&lt;/p&gt;  | [optional] 
**sourceAccountName** | **String** | Must match a valid source account name belonging to the payor | 
**payorPaymentId** | **String** | A reference identifier for the payor for the given payee payment | [optional] 
**transmissionType** | [**TransmissionType**](TransmissionType.md) |  | [optional] 
**remoteSystemId** | **String** | &lt;p&gt;The identifier for the remote payments system if not Velo&lt;/p&gt; &lt;p&gt;Should only be used after consultation with Velo Payments&lt;/p&gt;  | [optional] 
**paymentMetadata** | **String** | &lt;p&gt;Metadata about the payment that may be relevant to the specific rails or remote system making the payout&lt;/p&gt; &lt;p&gt;The structure of the data will be dictated by the requirements of the payment rails&lt;/p&gt;  | [optional] 


