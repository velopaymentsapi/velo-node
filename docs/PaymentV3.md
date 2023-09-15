# VeloPayments.PaymentV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentId** | **String** | The id of the payment | 
**remoteId** | **String** | The remoteId supplied by the payor that identifies the payee | [optional] 
**currency** | **String** | The currency that the payment was made in | [optional] 
**amount** | **Number** | The amount of the payment in minor units | [optional] 
**sourceAccountName** | **String** | The identifier of the source account to debit the payment from | [optional] 
**payorPaymentId** | **String** | A reference identifier for the payor for the given payee payment | [optional] 
**paymentMemo** | **String** | &lt;p&gt;Any value here will override the memo value in the parent payout&lt;/p&gt; &lt;p&gt;This should be the reference field on the statement seen by the payee (but not via ACH)&lt;/p&gt;  | [optional] 
**payee** | [**PayoutPayeeV3**](PayoutPayeeV3.md) |  | [optional] 
**withdrawable** | **Boolean** | Can this paynent be withdrawn | [optional] 
**status** | **String** | Current status of payment. One of the following values: SUBMITTED, ACCEPTED, REJECTED, WITHDRAWN, RETURNED, AWAITING_FUNDS, FUNDED, UNFUNDED, CANCELLED, BANK_PAYMENT_REQUESTED | [optional] 
**transmissionType** | **String** | The transmission method of the payment. One of the following values: ACH, SAME_DAY_ACH, WIRE, LOCAL, SWIFT | [optional] 
**remoteSystemId** | **String** | &lt;p&gt;The identifier for the remote payments system if not Velo&lt;/p&gt;  | [optional] 
**paymentMetadata** | **String** | &lt;p&gt;Metadata about the payment that may be relevant to the specific rails or remote system making the payout&lt;/p&gt; &lt;p&gt;The structure of the data will be dictated by the requirements of the payment rails&lt;/p&gt;  | [optional] 
**autoWithdrawnReasonCode** | **String** | Populated only if the payment was automatically withdrawn during instruction for being invalid | [optional] 
**railsId** | **String** | Indicates the 3rd party system involved in making this payment | [optional] 


