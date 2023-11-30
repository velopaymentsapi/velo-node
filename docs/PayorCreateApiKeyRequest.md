# VeloPayments.PayorCreateApiKeyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the key. | 
**description** | **String** | Description of the key. | [optional] 
**roles** | **[String]** | &lt;p&gt;A role to assign to the key.&lt;/p&gt; &lt;p&gt;If you want your API key to have write access then assign the role velo.payor.admin&lt;/p&gt; &lt;p&gt;A later version will change this property from a list to string&lt;/p&gt;  | 



## Enum: [RolesEnum]


* `admin` (value: `"payor.admin"`)

* `support` (value: `"payor.support"`)




