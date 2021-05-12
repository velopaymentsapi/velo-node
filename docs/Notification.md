# VeloPayments.Notification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | The API version of the notification schema | 
**sequenceNumber** | **Number** | This is a payor specific sequence number starting at 1 for the first notification sent | 
**category** | **String** | The category that the notification relates to. One of \&quot;payment\&quot;, \&quot;payee\&quot;, \&quot;debit\&quot; or \&quot;system\&quot; | 
**eventName** | **String** | The name of event that led to this notification | 
**source** | [**OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged**](OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged.md) | One of the available set of source event payloads | [optional] 


