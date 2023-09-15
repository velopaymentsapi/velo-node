# VeloPayments.AutoTopUpConfigV3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level. | 
**minBalance** | **Number** | When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units. | [optional] 
**targetBalance** | **Number** | When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units. | [optional] 
**fundingAccountId** | **String** | Id of funding account from which to pull funds when auto top-up is triggered.  Note - if this is not set then auto top-up is effectively disabled. | [optional] 


