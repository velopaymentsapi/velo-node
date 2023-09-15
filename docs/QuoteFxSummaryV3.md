# VeloPayments.QuoteFxSummaryV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **Number** | The conversion rate (from the source currency to the payment currency) | 
**invertedRate** | **Number** | The inverse conversion rate (from paymnent currency to source currency) | [optional] 
**creationTime** | **Date** | Timestamp of when the quote was created | 
**expiryTime** | **Date** | The timestamp for when the quote will expire | [optional] 
**quoteId** | **String** | The id of the created quote | 
**totalSourceAmount** | **Number** | The amount (in minor units) that will be paid from the source account | 
**totalPaymentAmount** | **Number** | The amount (in minor units) that the payee will receive | 
**sourceCurrency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**paymentCurrency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**fundingStatus** | **String** | Current status of the funding associated with this quote. One of the following values: UNFUNDED, INSTRUCTED, FUNDED | 
**status** | **String** | Current status of the fx quote. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED, REJECTED | 


