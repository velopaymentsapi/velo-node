# VeloPayments.QuoteFxSummaryV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **Number** |  | 
**invertedRate** | **Number** |  | [optional] 
**creationTime** | **Date** |  | 
**expiryTime** | **Date** |  | [optional] 
**quoteId** | **String** |  | 
**totalSourceAmount** | **Number** |  | 
**totalPaymentAmount** | **Number** |  | 
**sourceCurrency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**paymentCurrency** | **String** | Valid ISO 4217 3 letter currency code. See the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; target&#x3D;\&quot;_blank\&quot; a&gt;ISO specification&lt;/a&gt; for details. | 
**fundingStatus** | **String** |  | 
**status** | **String** |  | 



## Enum: FundingStatusEnum


* `UNFUNDED` (value: `"UNFUNDED"`)

* `INSTRUCTED` (value: `"INSTRUCTED"`)

* `FUNDED` (value: `"FUNDED"`)





## Enum: StatusEnum


* `UNQUOTED` (value: `"UNQUOTED"`)

* `QUOTED` (value: `"QUOTED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `EXECUTED` (value: `"EXECUTED"`)

* `REJECTED` (value: `"REJECTED"`)




