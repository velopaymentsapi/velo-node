# JavaScript client for Velo
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![npm version](https://badge.fury.io/js/velo-payments.svg)](https://badge.fury.io/js/velo-payments) [![CircleCI](https://circleci.com/gh/velopaymentsapi/velo-node.svg?style=svg)](https://circleci.com/gh/velopaymentsapi/velo-node)\
This library provides a JavaScript client that simplifies interactions with the Velo Payments API. For full details covering the API visit our docs at [Velo Payments APIs](https://apidocs.velopayments.com). Note: some of the Velo API calls which require authorization via an access token, see the full docs on how to configure.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.18.31
- Package version: 2.18.31
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

Then install it via:

```shell
npm install velo-payments --save
```

Finally, you need to build the module:
### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var VeloPayments = require('velo-payments');

var defaultClient = VeloPayments.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = "YOUR ACCESS TOKEN"

var api = new VeloPayments.CountriesApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listSupportedCountries(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.sandbox.velopayments.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*VeloPayments.CountriesApi* | [**listSupportedCountries**](docs/CountriesApi.md#listSupportedCountries) | **GET** /v2/supportedCountries | List Supported Countries
*VeloPayments.CountriesApi* | [**listSupportedCountriesV1**](docs/CountriesApi.md#listSupportedCountriesV1) | **GET** /v1/supportedCountries | List Supported Countries
*VeloPayments.CountriesApi* | [**v1PaymentChannelRulesGet**](docs/CountriesApi.md#v1PaymentChannelRulesGet) | **GET** /v1/paymentChannelRules | List Payment Channel Country Rules
*VeloPayments.CurrenciesApi* | [**listSupportedCurrencies**](docs/CurrenciesApi.md#listSupportedCurrencies) | **GET** /v2/currencies | List Supported Currencies
*VeloPayments.DefaultApi* | [**createFundingAccount**](docs/DefaultApi.md#createFundingAccount) | **POST** /v1/fundingAccounts | Create Funding Account
*VeloPayments.FundingManagerApi* | [**createAchFundingRequest**](docs/FundingManagerApi.md#createAchFundingRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/achFundingRequest | Create Funding Request
*VeloPayments.FundingManagerApi* | [**createFundingRequest**](docs/FundingManagerApi.md#createFundingRequest) | **POST** /v2/sourceAccounts/{sourceAccountId}/fundingRequest | Create Funding Request
*VeloPayments.FundingManagerApi* | [**getFundingAccount**](docs/FundingManagerApi.md#getFundingAccount) | **GET** /v1/fundingAccounts/{fundingAccountId} | Get Funding Account
*VeloPayments.FundingManagerApi* | [**getFundingAccounts**](docs/FundingManagerApi.md#getFundingAccounts) | **GET** /v1/fundingAccounts | Get Funding Accounts
*VeloPayments.FundingManagerApi* | [**getFundingsV1**](docs/FundingManagerApi.md#getFundingsV1) | **GET** /v1/paymentaudit/fundings | Get Fundings for Payor
*VeloPayments.FundingManagerApi* | [**getSourceAccount**](docs/FundingManagerApi.md#getSourceAccount) | **GET** /v1/sourceAccounts/{sourceAccountId} | Get details about given source account.
*VeloPayments.FundingManagerApi* | [**getSourceAccountV2**](docs/FundingManagerApi.md#getSourceAccountV2) | **GET** /v2/sourceAccounts/{sourceAccountId} | Get details about given source account.
*VeloPayments.FundingManagerApi* | [**getSourceAccounts**](docs/FundingManagerApi.md#getSourceAccounts) | **GET** /v1/sourceAccounts | Get list of source accounts
*VeloPayments.FundingManagerApi* | [**getSourceAccountsV2**](docs/FundingManagerApi.md#getSourceAccountsV2) | **GET** /v2/sourceAccounts | Get list of source accounts
*VeloPayments.FundingManagerApi* | [**listFundingAuditDeltas**](docs/FundingManagerApi.md#listFundingAuditDeltas) | **GET** /v1/deltas/fundings | Get Funding Audit Delta
*VeloPayments.FundingManagerApi* | [**setNotificationsRequest**](docs/FundingManagerApi.md#setNotificationsRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/notifications | Set notifications
*VeloPayments.FundingManagerApi* | [**transferFunds**](docs/FundingManagerApi.md#transferFunds) | **POST** /v2/sourceAccounts/{sourceAccountId}/transfers | Transfer Funds between source accounts
*VeloPayments.GetPayoutApi* | [**getPayoutSummaryV3**](docs/GetPayoutApi.md#getPayoutSummaryV3) | **GET** /v3/payouts/{payoutId} | Get Payout Summary
*VeloPayments.InstructPayoutApi* | [**instructPayoutV3**](docs/InstructPayoutApi.md#instructPayoutV3) | **POST** /v3/payouts/{payoutId} | Instruct Payout
*VeloPayments.LoginApi* | [**logout**](docs/LoginApi.md#logout) | **POST** /v1/logout | Logout
*VeloPayments.LoginApi* | [**resetPassword**](docs/LoginApi.md#resetPassword) | **POST** /v1/password/reset | Reset password
*VeloPayments.LoginApi* | [**validateAccessToken**](docs/LoginApi.md#validateAccessToken) | **POST** /v1/validate | validate
*VeloPayments.LoginApi* | [**veloAuth**](docs/LoginApi.md#veloAuth) | **POST** /v1/authenticate | Authentication endpoint
*VeloPayments.PayeeInvitationApi* | [**getPayeesInvitationStatus**](docs/PayeeInvitationApi.md#getPayeesInvitationStatus) | **GET** /v1/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
*VeloPayments.PayeeInvitationApi* | [**getPayeesInvitationStatusV2**](docs/PayeeInvitationApi.md#getPayeesInvitationStatusV2) | **GET** /v2/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
*VeloPayments.PayeeInvitationApi* | [**resendPayeeInvite**](docs/PayeeInvitationApi.md#resendPayeeInvite) | **POST** /v1/payees/{payeeId}/invite | Resend Payee Invite
*VeloPayments.PayeeInvitationApi* | [**v2CreatePayee**](docs/PayeeInvitationApi.md#v2CreatePayee) | **POST** /v2/payees | Intiate Payee Creation V2
*VeloPayments.PayeeInvitationApi* | [**v2QueryBatchStatus**](docs/PayeeInvitationApi.md#v2QueryBatchStatus) | **GET** /v2/payees/batch/{batchId} | Query Batch Status
*VeloPayments.PayeeInvitationApi* | [**v3CreatePayee**](docs/PayeeInvitationApi.md#v3CreatePayee) | **POST** /v3/payees | Intiate Payee Creation V3
*VeloPayments.PayeeInvitationApi* | [**v3QueryBatchStatus**](docs/PayeeInvitationApi.md#v3QueryBatchStatus) | **GET** /v3/payees/batch/{batchId} | Query Batch Status
*VeloPayments.PayeesApi* | [**deletePayeeById**](docs/PayeesApi.md#deletePayeeById) | **DELETE** /v1/payees/{payeeId} | Delete Payee by Id
*VeloPayments.PayeesApi* | [**getPayeeById**](docs/PayeesApi.md#getPayeeById) | **GET** /v1/payees/{payeeId} | Get Payee by Id
*VeloPayments.PayeesApi* | [**listPayeeChanges**](docs/PayeesApi.md#listPayeeChanges) | **GET** /v1/deltas/payees | List Payee Changes
*VeloPayments.PayeesApi* | [**listPayees**](docs/PayeesApi.md#listPayees) | **GET** /v1/payees | List Payees
*VeloPayments.PayeesApi* | [**listPayeesV3**](docs/PayeesApi.md#listPayeesV3) | **GET** /v3/payees | List Payees
*VeloPayments.PayeesApi* | [**v1PayeesPayeeIdRemoteIdUpdatePost**](docs/PayeesApi.md#v1PayeesPayeeIdRemoteIdUpdatePost) | **POST** /v1/payees/{payeeId}/remoteIdUpdate | Update Payee Remote Id
*VeloPayments.PaymentAuditServiceApi* | [**exportTransactionsCSVV3**](docs/PaymentAuditServiceApi.md#exportTransactionsCSVV3) | **GET** /v3/paymentaudit/transactions | Export Transactions
*VeloPayments.PaymentAuditServiceApi* | [**exportTransactionsCSVV4**](docs/PaymentAuditServiceApi.md#exportTransactionsCSVV4) | **GET** /v4/paymentaudit/transactions | Export Transactions
*VeloPayments.PaymentAuditServiceApi* | [**getFundingsV1**](docs/PaymentAuditServiceApi.md#getFundingsV1) | **GET** /v1/paymentaudit/fundings | Get Fundings for Payor
*VeloPayments.PaymentAuditServiceApi* | [**getPaymentDetails**](docs/PaymentAuditServiceApi.md#getPaymentDetails) | **GET** /v3/paymentaudit/payments/{paymentId} | Get Payment
*VeloPayments.PaymentAuditServiceApi* | [**getPaymentDetailsV4**](docs/PaymentAuditServiceApi.md#getPaymentDetailsV4) | **GET** /v4/paymentaudit/payments/{paymentId} | Get Payment
*VeloPayments.PaymentAuditServiceApi* | [**getPaymentsForPayout**](docs/PaymentAuditServiceApi.md#getPaymentsForPayout) | **GET** /v3/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPayments.PaymentAuditServiceApi* | [**getPaymentsForPayoutV4**](docs/PaymentAuditServiceApi.md#getPaymentsForPayoutV4) | **GET** /v4/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPayments.PaymentAuditServiceApi* | [**getPayoutsForPayorV3**](docs/PaymentAuditServiceApi.md#getPayoutsForPayorV3) | **GET** /v3/paymentaudit/payouts | Get Payouts for Payor
*VeloPayments.PaymentAuditServiceApi* | [**getPayoutsForPayorV4**](docs/PaymentAuditServiceApi.md#getPayoutsForPayorV4) | **GET** /v4/paymentaudit/payouts | Get Payouts for Payor
*VeloPayments.PaymentAuditServiceApi* | [**listPaymentChanges**](docs/PaymentAuditServiceApi.md#listPaymentChanges) | **GET** /v1/deltas/payments | List Payment Changes
*VeloPayments.PaymentAuditServiceApi* | [**listPaymentsAudit**](docs/PaymentAuditServiceApi.md#listPaymentsAudit) | **GET** /v3/paymentaudit/payments | Get List of Payments
*VeloPayments.PaymentAuditServiceApi* | [**listPaymentsAuditV4**](docs/PaymentAuditServiceApi.md#listPaymentsAuditV4) | **GET** /v4/paymentaudit/payments | Get List of Payments
*VeloPayments.PayorsApi* | [**getPayorById**](docs/PayorsApi.md#getPayorById) | **GET** /v1/payors/{payorId} | Get Payor
*VeloPayments.PayorsApi* | [**getPayorByIdV2**](docs/PayorsApi.md#getPayorByIdV2) | **GET** /v2/payors/{payorId} | Get Payor
*VeloPayments.PayorsApi* | [**payorAddPayorLogo**](docs/PayorsApi.md#payorAddPayorLogo) | **POST** /v1/payors/{payorId}/branding/logos | Add Logo
*VeloPayments.PayorsApi* | [**payorCreateApiKeyRequest**](docs/PayorsApi.md#payorCreateApiKeyRequest) | **POST** /v1/payors/{payorId}/applications/{applicationId}/keys | Create API Key
*VeloPayments.PayorsApi* | [**payorCreateApplicationRequest**](docs/PayorsApi.md#payorCreateApplicationRequest) | **POST** /v1/payors/{payorId}/applications | Create Application
*VeloPayments.PayorsApi* | [**payorEmailOptOut**](docs/PayorsApi.md#payorEmailOptOut) | **POST** /v1/payors/{payorId}/reminderEmailsUpdate | Reminder Email Opt-Out
*VeloPayments.PayorsApi* | [**payorGetBranding**](docs/PayorsApi.md#payorGetBranding) | **GET** /v1/payors/{payorId}/branding | Get Branding
*VeloPayments.PayorsApi* | [**payorLinks**](docs/PayorsApi.md#payorLinks) | **GET** /v1/payorLinks | List Payor Links
*VeloPayments.PayorsPrivateApi* | [**createPayorLinks**](docs/PayorsPrivateApi.md#createPayorLinks) | **POST** /v1/payorLinks | Create a Payor Link
*VeloPayments.PayoutHistoryApi* | [**getPaymentsForPayout**](docs/PayoutHistoryApi.md#getPaymentsForPayout) | **GET** /v3/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPayments.PayoutHistoryApi* | [**getPaymentsForPayoutV4**](docs/PayoutHistoryApi.md#getPaymentsForPayoutV4) | **GET** /v4/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPayments.PayoutHistoryApi* | [**getPayoutStatsV1**](docs/PayoutHistoryApi.md#getPayoutStatsV1) | **GET** /v1/paymentaudit/payoutStatistics | Get Payout Statistics
*VeloPayments.QuotePayoutApi* | [**v3PayoutsPayoutIdQuotePost**](docs/QuotePayoutApi.md#v3PayoutsPayoutIdQuotePost) | **POST** /v3/payouts/{payoutId}/quote | Create a quote for the payout
*VeloPayments.SubmitPayoutApi* | [**submitPayout**](docs/SubmitPayoutApi.md#submitPayout) | **POST** /v3/payouts | Submit Payout
*VeloPayments.TokensApi* | [**generateOTP**](docs/TokensApi.md#generateOTP) | **POST** /v1/tokens/{tokenId}/otp | Generate an OTP
*VeloPayments.TokensApi* | [**generateOTPForSMS**](docs/TokensApi.md#generateOTPForSMS) | **POST** /v1/tokens/{tokenId}/otp/generate | Send an OTP to SMS Users
*VeloPayments.TokensApi* | [**getQRCodeForMFA**](docs/TokensApi.md#getQRCodeForMFA) | **GET** /v1/tokens/{tokenId}/mfa/qrcode | Get a QR Code image
*VeloPayments.TokensApi* | [**getVerificationTokenById**](docs/TokensApi.md#getVerificationTokenById) | **GET** /v1/tokens/{tokenId} | Get Token
*VeloPayments.TokensApi* | [**registerMFA**](docs/TokensApi.md#registerMFA) | **POST** /v1/tokens/{tokenId}/mfa/register | Register an MFA Device
*VeloPayments.TokensApi* | [**resendToken**](docs/TokensApi.md#resendToken) | **POST** /v2/users/{userId}/tokens | Resend a token
*VeloPayments.TokensApi* | [**submitPassword**](docs/TokensApi.md#submitPassword) | **POST** /v1/tokens/{tokenId}/password | Submit a password
*VeloPayments.TokensApi* | [**unlockAccountWithToken**](docs/TokensApi.md#unlockAccountWithToken) | **POST** /v1/tokens/{tokenId}/password/lockout | Unlock the user
*VeloPayments.TokensApi* | [**validateMFA**](docs/TokensApi.md#validateMFA) | **POST** /v1/tokens/{tokenId}/mfa/validate | Validate an MFA Device
*VeloPayments.TokensApi* | [**validateOTP**](docs/TokensApi.md#validateOTP) | **POST** /v1/tokens/{tokenId}/otp/validate | Validate an OTP
*VeloPayments.TokensApi* | [**validatePassword**](docs/TokensApi.md#validatePassword) | **POST** /v1/tokens/{tokenId}/password/validate | Validate the proposed password
*VeloPayments.UsersApi* | [**deleteUserByIdV2**](docs/UsersApi.md#deleteUserByIdV2) | **DELETE** /v2/users/{userId} | Delete a User
*VeloPayments.UsersApi* | [**disableUserV2**](docs/UsersApi.md#disableUserV2) | **POST** /v2/users/{userId}/disable | Disable a User
*VeloPayments.UsersApi* | [**emailUpdate**](docs/UsersApi.md#emailUpdate) | **POST** /v2/users/{userId}/emailUpdate | Update Email Address
*VeloPayments.UsersApi* | [**enableUserV2**](docs/UsersApi.md#enableUserV2) | **POST** /v2/users/{userId}/enable | Enable a User
*VeloPayments.UsersApi* | [**getSelf**](docs/UsersApi.md#getSelf) | **GET** /v2/users/self | Get Self
*VeloPayments.UsersApi* | [**getUserByIdV2**](docs/UsersApi.md#getUserByIdV2) | **GET** /v2/users/{userId} | Get User
*VeloPayments.UsersApi* | [**inviteUser**](docs/UsersApi.md#inviteUser) | **POST** /v2/users/invite | Invite a User
*VeloPayments.UsersApi* | [**listUsers**](docs/UsersApi.md#listUsers) | **GET** /v2/users | List Users
*VeloPayments.UsersApi* | [**registerSms**](docs/UsersApi.md#registerSms) | **POST** /v2/users/registration/sms | Register SMS Number
*VeloPayments.UsersApi* | [**resendToken**](docs/UsersApi.md#resendToken) | **POST** /v2/users/{userId}/tokens | Resend a token
*VeloPayments.UsersApi* | [**unlockUserV2**](docs/UsersApi.md#unlockUserV2) | **POST** /v2/users/{userId}/unlock | Unlock a User
*VeloPayments.UsersApi* | [**unregisterMFA**](docs/UsersApi.md#unregisterMFA) | **POST** /v2/users/{userId}/mfa/unregister | Unregister MFA for the user
*VeloPayments.UsersApi* | [**unregisterMFAForSelf**](docs/UsersApi.md#unregisterMFAForSelf) | **POST** /v2/users/self/mfa/unregister | Unregister MFA for Self
*VeloPayments.UsersApi* | [**updatePasswordSelf**](docs/UsersApi.md#updatePasswordSelf) | **POST** /v2/users/self/password | Update Password for self
*VeloPayments.UsersApi* | [**validatePasswordSelf**](docs/UsersApi.md#validatePasswordSelf) | **POST** /v2/users/self/password/validate | Validate the proposed password
*VeloPayments.WithdrawPayoutApi* | [**withdrawPayoutV3**](docs/WithdrawPayoutApi.md#withdrawPayoutV3) | **DELETE** /v3/payouts/{payoutId} | Withdraw Payout


## Documentation for Models

 - [VeloPayments.AcceptedPayment](docs/AcceptedPayment.md)
 - [VeloPayments.AccessTokenResponse](docs/AccessTokenResponse.md)
 - [VeloPayments.AccessTokenValidationRequest](docs/AccessTokenValidationRequest.md)
 - [VeloPayments.AuthResponse](docs/AuthResponse.md)
 - [VeloPayments.AutoTopUpConfig](docs/AutoTopUpConfig.md)
 - [VeloPayments.Challenge](docs/Challenge.md)
 - [VeloPayments.CheckTokenResponse](docs/CheckTokenResponse.md)
 - [VeloPayments.CompanyResponse](docs/CompanyResponse.md)
 - [VeloPayments.CompanyV1](docs/CompanyV1.md)
 - [VeloPayments.CreateFundingAccountRequest](docs/CreateFundingAccountRequest.md)
 - [VeloPayments.CreateIndividual](docs/CreateIndividual.md)
 - [VeloPayments.CreateIndividual2](docs/CreateIndividual2.md)
 - [VeloPayments.CreatePayee](docs/CreatePayee.md)
 - [VeloPayments.CreatePayee2](docs/CreatePayee2.md)
 - [VeloPayments.CreatePayeeAddress](docs/CreatePayeeAddress.md)
 - [VeloPayments.CreatePayeeAddress2](docs/CreatePayeeAddress2.md)
 - [VeloPayments.CreatePayeesCSVRequest](docs/CreatePayeesCSVRequest.md)
 - [VeloPayments.CreatePayeesCSVRequest2](docs/CreatePayeesCSVRequest2.md)
 - [VeloPayments.CreatePayeesCSVResponse](docs/CreatePayeesCSVResponse.md)
 - [VeloPayments.CreatePayeesCSVResponse2](docs/CreatePayeesCSVResponse2.md)
 - [VeloPayments.CreatePayeesRequest](docs/CreatePayeesRequest.md)
 - [VeloPayments.CreatePayeesRequest2](docs/CreatePayeesRequest2.md)
 - [VeloPayments.CreatePaymentChannel](docs/CreatePaymentChannel.md)
 - [VeloPayments.CreatePaymentChannel2](docs/CreatePaymentChannel2.md)
 - [VeloPayments.CreatePayorLinkRequest](docs/CreatePayorLinkRequest.md)
 - [VeloPayments.CreatePayoutRequest](docs/CreatePayoutRequest.md)
 - [VeloPayments.CurrencyType](docs/CurrencyType.md)
 - [VeloPayments.EmailUpdateRequest](docs/EmailUpdateRequest.md)
 - [VeloPayments.Error](docs/Error.md)
 - [VeloPayments.ErrorResponse](docs/ErrorResponse.md)
 - [VeloPayments.FailedSubmission](docs/FailedSubmission.md)
 - [VeloPayments.FundingAccountResponse](docs/FundingAccountResponse.md)
 - [VeloPayments.FundingAudit](docs/FundingAudit.md)
 - [VeloPayments.FundingEvent](docs/FundingEvent.md)
 - [VeloPayments.FundingEventType](docs/FundingEventType.md)
 - [VeloPayments.FundingPayorStatusAuditResponse](docs/FundingPayorStatusAuditResponse.md)
 - [VeloPayments.FundingRequestV1](docs/FundingRequestV1.md)
 - [VeloPayments.FundingRequestV2](docs/FundingRequestV2.md)
 - [VeloPayments.FxSummaryV3](docs/FxSummaryV3.md)
 - [VeloPayments.FxSummaryV4](docs/FxSummaryV4.md)
 - [VeloPayments.GenerateOTPRequest](docs/GenerateOTPRequest.md)
 - [VeloPayments.GetFundingsResponse](docs/GetFundingsResponse.md)
 - [VeloPayments.GetFundingsResponseAllOf](docs/GetFundingsResponseAllOf.md)
 - [VeloPayments.GetPaymentsForPayoutResponseV3](docs/GetPaymentsForPayoutResponseV3.md)
 - [VeloPayments.GetPaymentsForPayoutResponseV3Page](docs/GetPaymentsForPayoutResponseV3Page.md)
 - [VeloPayments.GetPaymentsForPayoutResponseV3Summary](docs/GetPaymentsForPayoutResponseV3Summary.md)
 - [VeloPayments.GetPaymentsForPayoutResponseV4](docs/GetPaymentsForPayoutResponseV4.md)
 - [VeloPayments.GetPaymentsForPayoutResponseV4Summary](docs/GetPaymentsForPayoutResponseV4Summary.md)
 - [VeloPayments.GetPayoutStatistics](docs/GetPayoutStatistics.md)
 - [VeloPayments.GetPayoutsResponseV3](docs/GetPayoutsResponseV3.md)
 - [VeloPayments.GetPayoutsResponseV3Links](docs/GetPayoutsResponseV3Links.md)
 - [VeloPayments.GetPayoutsResponseV3Page](docs/GetPayoutsResponseV3Page.md)
 - [VeloPayments.GetPayoutsResponseV4](docs/GetPayoutsResponseV4.md)
 - [VeloPayments.IndividualResponse](docs/IndividualResponse.md)
 - [VeloPayments.IndividualV1](docs/IndividualV1.md)
 - [VeloPayments.IndividualV1Name](docs/IndividualV1Name.md)
 - [VeloPayments.InvitationStatus](docs/InvitationStatus.md)
 - [VeloPayments.InvitationStatusResponse](docs/InvitationStatusResponse.md)
 - [VeloPayments.InvitePayeeRequest](docs/InvitePayeeRequest.md)
 - [VeloPayments.InviteUserRequest](docs/InviteUserRequest.md)
 - [VeloPayments.KycState](docs/KycState.md)
 - [VeloPayments.Language](docs/Language.md)
 - [VeloPayments.LinkForResponse](docs/LinkForResponse.md)
 - [VeloPayments.ListFundingAccountsResponse](docs/ListFundingAccountsResponse.md)
 - [VeloPayments.ListPaymentsResponse](docs/ListPaymentsResponse.md)
 - [VeloPayments.ListPaymentsResponsePage](docs/ListPaymentsResponsePage.md)
 - [VeloPayments.ListPaymentsResponseV4](docs/ListPaymentsResponseV4.md)
 - [VeloPayments.ListSourceAccountResponse](docs/ListSourceAccountResponse.md)
 - [VeloPayments.ListSourceAccountResponseLinks](docs/ListSourceAccountResponseLinks.md)
 - [VeloPayments.ListSourceAccountResponsePage](docs/ListSourceAccountResponsePage.md)
 - [VeloPayments.ListSourceAccountResponseV2](docs/ListSourceAccountResponseV2.md)
 - [VeloPayments.MFADetails](docs/MFADetails.md)
 - [VeloPayments.MFAStatus](docs/MFAStatus.md)
 - [VeloPayments.MFAType](docs/MFAType.md)
 - [VeloPayments.MarketingOptIn](docs/MarketingOptIn.md)
 - [VeloPayments.Notifications](docs/Notifications.md)
 - [VeloPayments.OTPType](docs/OTPType.md)
 - [VeloPayments.OfacStatus](docs/OfacStatus.md)
 - [VeloPayments.OnboardedStatus](docs/OnboardedStatus.md)
 - [VeloPayments.PageForResponse](docs/PageForResponse.md)
 - [VeloPayments.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse](docs/PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse.md)
 - [VeloPayments.PagedPayeeInvitationStatusResponse](docs/PagedPayeeInvitationStatusResponse.md)
 - [VeloPayments.PagedPayeeResponse](docs/PagedPayeeResponse.md)
 - [VeloPayments.PagedPayeeResponse2](docs/PagedPayeeResponse2.md)
 - [VeloPayments.PagedPayeeResponse2Summary](docs/PagedPayeeResponse2Summary.md)
 - [VeloPayments.PagedPayeeResponseLinks](docs/PagedPayeeResponseLinks.md)
 - [VeloPayments.PagedPayeeResponsePage](docs/PagedPayeeResponsePage.md)
 - [VeloPayments.PagedPayeeResponseSummary](docs/PagedPayeeResponseSummary.md)
 - [VeloPayments.PagedResponse](docs/PagedResponse.md)
 - [VeloPayments.PagedResponsePage](docs/PagedResponsePage.md)
 - [VeloPayments.PagedUserResponse](docs/PagedUserResponse.md)
 - [VeloPayments.PagedUserResponseLinks](docs/PagedUserResponseLinks.md)
 - [VeloPayments.PagedUserResponsePage](docs/PagedUserResponsePage.md)
 - [VeloPayments.PasswordRequest](docs/PasswordRequest.md)
 - [VeloPayments.Payee](docs/Payee.md)
 - [VeloPayments.PayeeAddress](docs/PayeeAddress.md)
 - [VeloPayments.PayeeDelta](docs/PayeeDelta.md)
 - [VeloPayments.PayeeDeltaResponse](docs/PayeeDeltaResponse.md)
 - [VeloPayments.PayeeDeltaResponseLinks](docs/PayeeDeltaResponseLinks.md)
 - [VeloPayments.PayeeDeltaResponsePage](docs/PayeeDeltaResponsePage.md)
 - [VeloPayments.PayeeInvitationStatus](docs/PayeeInvitationStatus.md)
 - [VeloPayments.PayeeInvitationStatusResponse](docs/PayeeInvitationStatusResponse.md)
 - [VeloPayments.PayeePaymentChannel](docs/PayeePaymentChannel.md)
 - [VeloPayments.PayeePayorRef](docs/PayeePayorRef.md)
 - [VeloPayments.PayeePayorRef2](docs/PayeePayorRef2.md)
 - [VeloPayments.PayeeResponse](docs/PayeeResponse.md)
 - [VeloPayments.PayeeResponse2](docs/PayeeResponse2.md)
 - [VeloPayments.PayeeType](docs/PayeeType.md)
 - [VeloPayments.PaymentAuditCurrencyV3](docs/PaymentAuditCurrencyV3.md)
 - [VeloPayments.PaymentAuditCurrencyV4](docs/PaymentAuditCurrencyV4.md)
 - [VeloPayments.PaymentChannelCountry](docs/PaymentChannelCountry.md)
 - [VeloPayments.PaymentChannelRule](docs/PaymentChannelRule.md)
 - [VeloPayments.PaymentChannelRulesResponse](docs/PaymentChannelRulesResponse.md)
 - [VeloPayments.PaymentDelta](docs/PaymentDelta.md)
 - [VeloPayments.PaymentDeltaResponse](docs/PaymentDeltaResponse.md)
 - [VeloPayments.PaymentEventResponseV3](docs/PaymentEventResponseV3.md)
 - [VeloPayments.PaymentEventResponseV4](docs/PaymentEventResponseV4.md)
 - [VeloPayments.PaymentInstruction](docs/PaymentInstruction.md)
 - [VeloPayments.PaymentRails](docs/PaymentRails.md)
 - [VeloPayments.PaymentResponseV3](docs/PaymentResponseV3.md)
 - [VeloPayments.PaymentResponseV4](docs/PaymentResponseV4.md)
 - [VeloPayments.PaymentResponseV4Payout](docs/PaymentResponseV4Payout.md)
 - [VeloPayments.PaymentStatus](docs/PaymentStatus.md)
 - [VeloPayments.PayorAddress](docs/PayorAddress.md)
 - [VeloPayments.PayorAddressV2](docs/PayorAddressV2.md)
 - [VeloPayments.PayorAmlTransactionV3](docs/PayorAmlTransactionV3.md)
 - [VeloPayments.PayorAmlTransactionV4](docs/PayorAmlTransactionV4.md)
 - [VeloPayments.PayorBrandingResponse](docs/PayorBrandingResponse.md)
 - [VeloPayments.PayorCreateApiKeyRequest](docs/PayorCreateApiKeyRequest.md)
 - [VeloPayments.PayorCreateApiKeyResponse](docs/PayorCreateApiKeyResponse.md)
 - [VeloPayments.PayorCreateApplicationRequest](docs/PayorCreateApplicationRequest.md)
 - [VeloPayments.PayorEmailOptOutRequest](docs/PayorEmailOptOutRequest.md)
 - [VeloPayments.PayorLinksResponse](docs/PayorLinksResponse.md)
 - [VeloPayments.PayorLinksResponseLinks](docs/PayorLinksResponseLinks.md)
 - [VeloPayments.PayorLinksResponsePayors](docs/PayorLinksResponsePayors.md)
 - [VeloPayments.PayorLogoRequest](docs/PayorLogoRequest.md)
 - [VeloPayments.PayorV1](docs/PayorV1.md)
 - [VeloPayments.PayorV2](docs/PayorV2.md)
 - [VeloPayments.PayoutPayorV4](docs/PayoutPayorV4.md)
 - [VeloPayments.PayoutPrincipalV4](docs/PayoutPrincipalV4.md)
 - [VeloPayments.PayoutStatusV3](docs/PayoutStatusV3.md)
 - [VeloPayments.PayoutStatusV4](docs/PayoutStatusV4.md)
 - [VeloPayments.PayoutSummaryAuditV3](docs/PayoutSummaryAuditV3.md)
 - [VeloPayments.PayoutSummaryAuditV4](docs/PayoutSummaryAuditV4.md)
 - [VeloPayments.PayoutSummaryResponse](docs/PayoutSummaryResponse.md)
 - [VeloPayments.PayoutTypeV4](docs/PayoutTypeV4.md)
 - [VeloPayments.QueryBatchResponse](docs/QueryBatchResponse.md)
 - [VeloPayments.QuoteFxSummary](docs/QuoteFxSummary.md)
 - [VeloPayments.QuoteResponse](docs/QuoteResponse.md)
 - [VeloPayments.Region](docs/Region.md)
 - [VeloPayments.RegisterMFARequest](docs/RegisterMFARequest.md)
 - [VeloPayments.RegisterMFAResponse](docs/RegisterMFAResponse.md)
 - [VeloPayments.RegisterSmsRequest](docs/RegisterSmsRequest.md)
 - [VeloPayments.RejectedPayment](docs/RejectedPayment.md)
 - [VeloPayments.ResendTokenRequest](docs/ResendTokenRequest.md)
 - [VeloPayments.ResetPasswordRequest](docs/ResetPasswordRequest.md)
 - [VeloPayments.Role](docs/Role.md)
 - [VeloPayments.SelfMFATypeUnregisterRequest](docs/SelfMFATypeUnregisterRequest.md)
 - [VeloPayments.SelfUpdatePasswordRequest](docs/SelfUpdatePasswordRequest.md)
 - [VeloPayments.SetNotificationsRequest](docs/SetNotificationsRequest.md)
 - [VeloPayments.SourceAccount](docs/SourceAccount.md)
 - [VeloPayments.SourceAccountResponse](docs/SourceAccountResponse.md)
 - [VeloPayments.SourceAccountResponseV2](docs/SourceAccountResponseV2.md)
 - [VeloPayments.SourceAccountSummaryV3](docs/SourceAccountSummaryV3.md)
 - [VeloPayments.SourceAccountSummaryV4](docs/SourceAccountSummaryV4.md)
 - [VeloPayments.SupportedCountriesResponse](docs/SupportedCountriesResponse.md)
 - [VeloPayments.SupportedCountriesResponse2](docs/SupportedCountriesResponse2.md)
 - [VeloPayments.SupportedCountry](docs/SupportedCountry.md)
 - [VeloPayments.SupportedCountry2](docs/SupportedCountry2.md)
 - [VeloPayments.SupportedCurrency](docs/SupportedCurrency.md)
 - [VeloPayments.SupportedCurrencyResponse](docs/SupportedCurrencyResponse.md)
 - [VeloPayments.TokenType](docs/TokenType.md)
 - [VeloPayments.TransferRequest](docs/TransferRequest.md)
 - [VeloPayments.UnregisterMFARequest](docs/UnregisterMFARequest.md)
 - [VeloPayments.UpdateRemoteIdRequest](docs/UpdateRemoteIdRequest.md)
 - [VeloPayments.UserInfo](docs/UserInfo.md)
 - [VeloPayments.UserResponse](docs/UserResponse.md)
 - [VeloPayments.UserResponse2](docs/UserResponse2.md)
 - [VeloPayments.UserResponse2Roles](docs/UserResponse2Roles.md)
 - [VeloPayments.UserStatus](docs/UserStatus.md)
 - [VeloPayments.UserType](docs/UserType.md)
 - [VeloPayments.UserType2](docs/UserType2.md)
 - [VeloPayments.ValidateMFARequest](docs/ValidateMFARequest.md)
 - [VeloPayments.ValidateOTPRequest](docs/ValidateOTPRequest.md)
 - [VeloPayments.ValidatePasswordResponse](docs/ValidatePasswordResponse.md)
 - [VeloPayments.WatchlistStatus](docs/WatchlistStatus.md)


## Documentation for Authorization



### OAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  -  : Scopes not required



### basicAuth

- **Type**: HTTP basic authentication



### oAuthVeloBackOffice


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  -  : Scopes not required

