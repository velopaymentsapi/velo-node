# VeloPayments.AccessTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **String** | Bearer token used in headers to access secure endpoints  | [optional] 
**tokenType** | **String** | the type of the token | [optional] [default to &#39;bearer&#39;]
**refreshToken** | **String** | can be used to obtain a new access token | [optional] 
**expiresIn** | **Number** | The lifetime in seconds of the access token | [optional] 
**scope** | **String** | the scope of the access token | [optional] 
**userInfo** | [**UserInfo**](UserInfo.md) |  | [optional] 
**entityIds** | **[String]** | If the user is a payee then the payeeId&lt;P&gt; If the user is a payor then the payorId  | [optional] 


