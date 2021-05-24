# JavaScript client for Velo
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![npm version](https://badge.fury.io/js/velo-payments.svg)](https://badge.fury.io/js/velo-payments) [![CircleCI](https://circleci.com/gh/velopaymentsapi/velo-node.svg?style=svg)](https://circleci.com/gh/velopaymentsapi/velo-node)\
This library provides a JavaScript client that simplifies interactions with the Velo Payments API. For full details covering the API visit our docs at [Velo Payments APIs](https://apidocs.velopayments.com). Note: some of the Velo API calls which require authorization via an access token, see the full docs on how to configure.

Throughout this document and the Velo platform the following terms are used:

* **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout.
* **Payee.** The recipient of funds paid out by a payor.
* **Payment.** A single transfer of funds from a payor to a payee.
* **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee.
* **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.
* Maintain a collection of payees
* Query the payor’s current balance of funds within the platform and perform additional funding
* Issue payments to payees
* Query the platform for a history of those payments

This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.

```
## API access following authentication
Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.

This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:

```
  -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \"
```

If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.26.124
- Package version: 2.26.124
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install velo-payments --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your velo-payments from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

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
api.listPaymentChannelRulesV1(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.sandbox.velopayments.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*VeloPayments.CountriesApi* | [**listPaymentChannelRulesV1**](docs/CountriesApi.md#listPaymentChannelRulesV1) | **GET** /v1/paymentChannelRules | List Payment Channel Country Rules
*VeloPayments.CountriesApi* | [**listSupportedCountriesV1**](docs/CountriesApi.md#listSupportedCountriesV1) | **GET** /v1/supportedCountries | List Supported Countries
*VeloPayments.CountriesApi* | [**listSupportedCountriesV2**](docs/CountriesApi.md#listSupportedCountriesV2) | **GET** /v2/supportedCountries | List Supported Countries
*VeloPayments.CurrenciesApi* | [**listSupportedCurrenciesV2**](docs/CurrenciesApi.md#listSupportedCurrenciesV2) | **GET** /v2/currencies | List Supported Currencies
*VeloPayments.FundingManagerApi* | [**createAchFundingRequest**](docs/FundingManagerApi.md#createAchFundingRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/achFundingRequest | Create Funding Request
*VeloPayments.FundingManagerApi* | [**createFundingRequest**](docs/FundingManagerApi.md#createFundingRequest) | **POST** /v2/sourceAccounts/{sourceAccountId}/fundingRequest | Create Funding Request
*VeloPayments.FundingManagerApi* | [**createFundingRequestV3**](docs/FundingManagerApi.md#createFundingRequestV3) | **POST** /v3/sourceAccounts/{sourceAccountId}/fundingRequest | Create Funding Request
*VeloPayments.FundingManagerApi* | [**getFundingAccount**](docs/FundingManagerApi.md#getFundingAccount) | **GET** /v1/fundingAccounts/{fundingAccountId} | Get Funding Account
*VeloPayments.FundingManagerApi* | [**getFundingAccountV2**](docs/FundingManagerApi.md#getFundingAccountV2) | **GET** /v2/fundingAccounts/{fundingAccountId} | Get Funding Account
*VeloPayments.FundingManagerApi* | [**getFundingAccounts**](docs/FundingManagerApi.md#getFundingAccounts) | **GET** /v1/fundingAccounts | Get Funding Accounts
*VeloPayments.FundingManagerApi* | [**getFundingAccountsV2**](docs/FundingManagerApi.md#getFundingAccountsV2) | **GET** /v2/fundingAccounts | Get Funding Accounts
*VeloPayments.FundingManagerApi* | [**getSourceAccount**](docs/FundingManagerApi.md#getSourceAccount) | **GET** /v1/sourceAccounts/{sourceAccountId} | Get details about given source account.
*VeloPayments.FundingManagerApi* | [**getSourceAccountV2**](docs/FundingManagerApi.md#getSourceAccountV2) | **GET** /v2/sourceAccounts/{sourceAccountId} | Get details about given source account.
*VeloPayments.FundingManagerApi* | [**getSourceAccountV3**](docs/FundingManagerApi.md#getSourceAccountV3) | **GET** /v3/sourceAccounts/{sourceAccountId} | Get details about given source account.
*VeloPayments.FundingManagerApi* | [**getSourceAccounts**](docs/FundingManagerApi.md#getSourceAccounts) | **GET** /v1/sourceAccounts | Get list of source accounts
*VeloPayments.FundingManagerApi* | [**getSourceAccountsV2**](docs/FundingManagerApi.md#getSourceAccountsV2) | **GET** /v2/sourceAccounts | Get list of source accounts
*VeloPayments.FundingManagerApi* | [**getSourceAccountsV3**](docs/FundingManagerApi.md#getSourceAccountsV3) | **GET** /v3/sourceAccounts | Get list of source accounts
*VeloPayments.FundingManagerApi* | [**listFundingAuditDeltas**](docs/FundingManagerApi.md#listFundingAuditDeltas) | **GET** /v1/deltas/fundings | Get Funding Audit Delta
*VeloPayments.FundingManagerApi* | [**setNotificationsRequest**](docs/FundingManagerApi.md#setNotificationsRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/notifications | Set notifications
*VeloPayments.FundingManagerApi* | [**transferFunds**](docs/FundingManagerApi.md#transferFunds) | **POST** /v2/sourceAccounts/{sourceAccountId}/transfers | Transfer Funds between source accounts
*VeloPayments.FundingManagerApi* | [**transferFundsV3**](docs/FundingManagerApi.md#transferFundsV3) | **POST** /v3/sourceAccounts/{sourceAccountId}/transfers | Transfer Funds between source accounts
*VeloPayments.FundingManagerPrivateApi* | [**createFundingAccountV2**](docs/FundingManagerPrivateApi.md#createFundingAccountV2) | **POST** /v2/fundingAccounts | Create Funding Account
*VeloPayments.FundingManagerPrivateApi* | [**deleteSourceAccountV3**](docs/FundingManagerPrivateApi.md#deleteSourceAccountV3) | **DELETE** /v3/sourceAccounts/{sourceAccountId} | Delete a source account by ID
*VeloPayments.LoginApi* | [**logout**](docs/LoginApi.md#logout) | **POST** /v1/logout | Logout
*VeloPayments.LoginApi* | [**resetPassword**](docs/LoginApi.md#resetPassword) | **POST** /v1/password/reset | Reset password
*VeloPayments.LoginApi* | [**validateAccessToken**](docs/LoginApi.md#validateAccessToken) | **POST** /v1/validate | validate
*VeloPayments.LoginApi* | [**veloAuth**](docs/LoginApi.md#veloAuth) | **POST** /v1/authenticate | Authentication endpoint
*VeloPayments.PayeeInvitationApi* | [**getPayeesInvitationStatusV3**](docs/PayeeInvitationApi.md#getPayeesInvitationStatusV3) | **GET** /v3/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
*VeloPayments.PayeeInvitationApi* | [**getPayeesInvitationStatusV4**](docs/PayeeInvitationApi.md#getPayeesInvitationStatusV4) | **GET** /v4/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
*VeloPayments.PayeeInvitationApi* | [**queryBatchStatusV3**](docs/PayeeInvitationApi.md#queryBatchStatusV3) | **GET** /v3/payees/batch/{batchId} | Query Batch Status
*VeloPayments.PayeeInvitationApi* | [**queryBatchStatusV4**](docs/PayeeInvitationApi.md#queryBatchStatusV4) | **GET** /v4/payees/batch/{batchId} | Query Batch Status
*VeloPayments.PayeeInvitationApi* | [**resendPayeeInviteV3**](docs/PayeeInvitationApi.md#resendPayeeInviteV3) | **POST** /v3/payees/{payeeId}/invite | Resend Payee Invite
*VeloPayments.PayeeInvitationApi* | [**resendPayeeInviteV4**](docs/PayeeInvitationApi.md#resendPayeeInviteV4) | **POST** /v4/payees/{payeeId}/invite | Resend Payee Invite
*VeloPayments.PayeeInvitationApi* | [**v3CreatePayee**](docs/PayeeInvitationApi.md#v3CreatePayee) | **POST** /v3/payees | Initiate Payee Creation
*VeloPayments.PayeeInvitationApi* | [**v4CreatePayee**](docs/PayeeInvitationApi.md#v4CreatePayee) | **POST** /v4/payees | Initiate Payee Creation
*VeloPayments.PayeesApi* | [**deletePayeeByIdV3**](docs/PayeesApi.md#deletePayeeByIdV3) | **DELETE** /v3/payees/{payeeId} | Delete Payee by Id
*VeloPayments.PayeesApi* | [**deletePayeeByIdV4**](docs/PayeesApi.md#deletePayeeByIdV4) | **DELETE** /v4/payees/{payeeId} | Delete Payee by Id
*VeloPayments.PayeesApi* | [**getPayeeByIdV3**](docs/PayeesApi.md#getPayeeByIdV3) | **GET** /v3/payees/{payeeId} | Get Payee by Id
*VeloPayments.PayeesApi* | [**getPayeeByIdV4**](docs/PayeesApi.md#getPayeeByIdV4) | **GET** /v4/payees/{payeeId} | Get Payee by Id
*VeloPayments.PayeesApi* | [**listPayeeChangesV3**](docs/PayeesApi.md#listPayeeChangesV3) | **GET** /v3/payees/deltas | List Payee Changes
*VeloPayments.PayeesApi* | [**listPayeeChangesV4**](docs/PayeesApi.md#listPayeeChangesV4) | **GET** /v4/payees/deltas | List Payee Changes
*VeloPayments.PayeesApi* | [**listPayeesV3**](docs/PayeesApi.md#listPayeesV3) | **GET** /v3/payees | List Payees
*VeloPayments.PayeesApi* | [**listPayeesV4**](docs/PayeesApi.md#listPayeesV4) | **GET** /v4/payees | List Payees
*VeloPayments.PayeesApi* | [**payeeDetailsUpdateV3**](docs/PayeesApi.md#payeeDetailsUpdateV3) | **POST** /v3/payees/{payeeId}/payeeDetailsUpdate | Update Payee Details
*VeloPayments.PayeesApi* | [**payeeDetailsUpdateV4**](docs/PayeesApi.md#payeeDetailsUpdateV4) | **POST** /v4/payees/{payeeId}/payeeDetailsUpdate | Update Payee Details
*VeloPayments.PayeesApi* | [**v3PayeesPayeeIdRemoteIdUpdatePost**](docs/PayeesApi.md#v3PayeesPayeeIdRemoteIdUpdatePost) | **POST** /v3/payees/{payeeId}/remoteIdUpdate | Update Payee Remote Id
*VeloPayments.PayeesApi* | [**v4PayeesPayeeIdRemoteIdUpdatePost**](docs/PayeesApi.md#v4PayeesPayeeIdRemoteIdUpdatePost) | **POST** /v4/payees/{payeeId}/remoteIdUpdate | Update Payee Remote Id
*VeloPayments.PaymentAuditServiceApi* | [**exportTransactionsCSVV4**](docs/PaymentAuditServiceApi.md#exportTransactionsCSVV4) | **GET** /v4/paymentaudit/transactions | Export Transactions
*VeloPayments.PaymentAuditServiceApi* | [**getFundingsV4**](docs/PaymentAuditServiceApi.md#getFundingsV4) | **GET** /v4/paymentaudit/fundings | Get Fundings for Payor
*VeloPayments.PaymentAuditServiceApi* | [**getPaymentDetailsV4**](docs/PaymentAuditServiceApi.md#getPaymentDetailsV4) | **GET** /v4/paymentaudit/payments/{paymentId} | Get Payment
*VeloPayments.PaymentAuditServiceApi* | [**getPaymentsForPayoutV4**](docs/PaymentAuditServiceApi.md#getPaymentsForPayoutV4) | **GET** /v4/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPayments.PaymentAuditServiceApi* | [**getPayoutStatsV4**](docs/PaymentAuditServiceApi.md#getPayoutStatsV4) | **GET** /v4/paymentaudit/payoutStatistics | Get Payout Statistics
*VeloPayments.PaymentAuditServiceApi* | [**getPayoutsForPayorV4**](docs/PaymentAuditServiceApi.md#getPayoutsForPayorV4) | **GET** /v4/paymentaudit/payouts | Get Payouts for Payor
*VeloPayments.PaymentAuditServiceApi* | [**listPaymentChangesV4**](docs/PaymentAuditServiceApi.md#listPaymentChangesV4) | **GET** /v4/payments/deltas | List Payment Changes
*VeloPayments.PaymentAuditServiceApi* | [**listPaymentsAuditV4**](docs/PaymentAuditServiceApi.md#listPaymentsAuditV4) | **GET** /v4/paymentaudit/payments | Get List of Payments
*VeloPayments.PaymentAuditServiceDeprecatedApi* | [**exportTransactionsCSVV3**](docs/PaymentAuditServiceDeprecatedApi.md#exportTransactionsCSVV3) | **GET** /v3/paymentaudit/transactions | V3 Export Transactions
*VeloPayments.PaymentAuditServiceDeprecatedApi* | [**getFundingsV1**](docs/PaymentAuditServiceDeprecatedApi.md#getFundingsV1) | **GET** /v1/paymentaudit/fundings | V1 Get Fundings for Payor
*VeloPayments.PaymentAuditServiceDeprecatedApi* | [**getPaymentDetailsV3**](docs/PaymentAuditServiceDeprecatedApi.md#getPaymentDetailsV3) | **GET** /v3/paymentaudit/payments/{paymentId} | V3 Get Payment
*VeloPayments.PaymentAuditServiceDeprecatedApi* | [**getPaymentsForPayoutPAV3**](docs/PaymentAuditServiceDeprecatedApi.md#getPaymentsForPayoutPAV3) | **GET** /v3/paymentaudit/payouts/{payoutId} | V3 Get Payments for Payout
*VeloPayments.PaymentAuditServiceDeprecatedApi* | [**getPayoutStatsV1**](docs/PaymentAuditServiceDeprecatedApi.md#getPayoutStatsV1) | **GET** /v1/paymentaudit/payoutStatistics | V1 Get Payout Statistics
*VeloPayments.PaymentAuditServiceDeprecatedApi* | [**getPayoutsForPayorV3**](docs/PaymentAuditServiceDeprecatedApi.md#getPayoutsForPayorV3) | **GET** /v3/paymentaudit/payouts | V3 Get Payouts for Payor
*VeloPayments.PaymentAuditServiceDeprecatedApi* | [**listPaymentChanges**](docs/PaymentAuditServiceDeprecatedApi.md#listPaymentChanges) | **GET** /v1/deltas/payments | V1 List Payment Changes
*VeloPayments.PaymentAuditServiceDeprecatedApi* | [**listPaymentsAuditV3**](docs/PaymentAuditServiceDeprecatedApi.md#listPaymentsAuditV3) | **GET** /v3/paymentaudit/payments | V3 Get List of Payments
*VeloPayments.PayorsApi* | [**getPayorById**](docs/PayorsApi.md#getPayorById) | **GET** /v1/payors/{payorId} | Get Payor
*VeloPayments.PayorsApi* | [**getPayorByIdV2**](docs/PayorsApi.md#getPayorByIdV2) | **GET** /v2/payors/{payorId} | Get Payor
*VeloPayments.PayorsApi* | [**payorAddPayorLogo**](docs/PayorsApi.md#payorAddPayorLogo) | **POST** /v1/payors/{payorId}/branding/logos | Add Logo
*VeloPayments.PayorsApi* | [**payorCreateApiKeyRequest**](docs/PayorsApi.md#payorCreateApiKeyRequest) | **POST** /v1/payors/{payorId}/applications/{applicationId}/keys | Create API Key
*VeloPayments.PayorsApi* | [**payorCreateApplicationRequest**](docs/PayorsApi.md#payorCreateApplicationRequest) | **POST** /v1/payors/{payorId}/applications | Create Application
*VeloPayments.PayorsApi* | [**payorEmailOptOut**](docs/PayorsApi.md#payorEmailOptOut) | **POST** /v1/payors/{payorId}/reminderEmailsUpdate | Reminder Email Opt-Out
*VeloPayments.PayorsApi* | [**payorGetBranding**](docs/PayorsApi.md#payorGetBranding) | **GET** /v1/payors/{payorId}/branding | Get Branding
*VeloPayments.PayorsApi* | [**payorLinks**](docs/PayorsApi.md#payorLinks) | **GET** /v1/payorLinks | List Payor Links
*VeloPayments.PayorsPrivateApi* | [**createPayorLinks**](docs/PayorsPrivateApi.md#createPayorLinks) | **POST** /v1/payorLinks | Create a Payor Link
*VeloPayments.PayoutServiceApi* | [**createQuoteForPayoutV3**](docs/PayoutServiceApi.md#createQuoteForPayoutV3) | **POST** /v3/payouts/{payoutId}/quote | Create a quote for the payout
*VeloPayments.PayoutServiceApi* | [**getPaymentsForPayoutV3**](docs/PayoutServiceApi.md#getPaymentsForPayoutV3) | **GET** /v3/payouts/{payoutId}/payments | Retrieve payments for a payout
*VeloPayments.PayoutServiceApi* | [**getPayoutSummaryV3**](docs/PayoutServiceApi.md#getPayoutSummaryV3) | **GET** /v3/payouts/{payoutId} | Get Payout Summary
*VeloPayments.PayoutServiceApi* | [**instructPayoutV3**](docs/PayoutServiceApi.md#instructPayoutV3) | **POST** /v3/payouts/{payoutId} | Instruct Payout
*VeloPayments.PayoutServiceApi* | [**submitPayoutV3**](docs/PayoutServiceApi.md#submitPayoutV3) | **POST** /v3/payouts | Submit Payout
*VeloPayments.PayoutServiceApi* | [**withdrawPayment**](docs/PayoutServiceApi.md#withdrawPayment) | **POST** /v1/payments/{paymentId}/withdraw | Withdraw a Payment
*VeloPayments.PayoutServiceApi* | [**withdrawPayoutV3**](docs/PayoutServiceApi.md#withdrawPayoutV3) | **DELETE** /v3/payouts/{payoutId} | Withdraw Payout
*VeloPayments.TokensApi* | [**resendToken**](docs/TokensApi.md#resendToken) | **POST** /v2/users/{userId}/tokens | Resend a token
*VeloPayments.UsersApi* | [**deleteUserByIdV2**](docs/UsersApi.md#deleteUserByIdV2) | **DELETE** /v2/users/{userId} | Delete a User
*VeloPayments.UsersApi* | [**disableUserV2**](docs/UsersApi.md#disableUserV2) | **POST** /v2/users/{userId}/disable | Disable a User
*VeloPayments.UsersApi* | [**enableUserV2**](docs/UsersApi.md#enableUserV2) | **POST** /v2/users/{userId}/enable | Enable a User
*VeloPayments.UsersApi* | [**getSelf**](docs/UsersApi.md#getSelf) | **GET** /v2/users/self | Get Self
*VeloPayments.UsersApi* | [**getUserByIdV2**](docs/UsersApi.md#getUserByIdV2) | **GET** /v2/users/{userId} | Get User
*VeloPayments.UsersApi* | [**inviteUser**](docs/UsersApi.md#inviteUser) | **POST** /v2/users/invite | Invite a User
*VeloPayments.UsersApi* | [**listUsers**](docs/UsersApi.md#listUsers) | **GET** /v2/users | List Users
*VeloPayments.UsersApi* | [**registerSms**](docs/UsersApi.md#registerSms) | **POST** /v2/users/registration/sms | Register SMS Number
*VeloPayments.UsersApi* | [**resendToken**](docs/UsersApi.md#resendToken) | **POST** /v2/users/{userId}/tokens | Resend a token
*VeloPayments.UsersApi* | [**roleUpdate**](docs/UsersApi.md#roleUpdate) | **POST** /v2/users/{userId}/roleUpdate | Update User Role
*VeloPayments.UsersApi* | [**unlockUserV2**](docs/UsersApi.md#unlockUserV2) | **POST** /v2/users/{userId}/unlock | Unlock a User
*VeloPayments.UsersApi* | [**unregisterMFA**](docs/UsersApi.md#unregisterMFA) | **POST** /v2/users/{userId}/mfa/unregister | Unregister MFA for the user
*VeloPayments.UsersApi* | [**unregisterMFAForSelf**](docs/UsersApi.md#unregisterMFAForSelf) | **POST** /v2/users/self/mfa/unregister | Unregister MFA for Self
*VeloPayments.UsersApi* | [**updatePasswordSelf**](docs/UsersApi.md#updatePasswordSelf) | **POST** /v2/users/self/password | Update Password for self
*VeloPayments.UsersApi* | [**userDetailsUpdate**](docs/UsersApi.md#userDetailsUpdate) | **POST** /v2/users/{userId}/userDetailsUpdate | Update User Details
*VeloPayments.UsersApi* | [**userDetailsUpdateForSelf**](docs/UsersApi.md#userDetailsUpdateForSelf) | **POST** /v2/users/self/userDetailsUpdate | Update User Details for self
*VeloPayments.UsersApi* | [**validatePasswordSelf**](docs/UsersApi.md#validatePasswordSelf) | **POST** /v2/users/self/password/validate | Validate the proposed password
*VeloPayments.WebhooksApi* | [**createWebhookV1**](docs/WebhooksApi.md#createWebhookV1) | **POST** /v1/webhooks | Create Webhook
*VeloPayments.WebhooksApi* | [**getWebhookV1**](docs/WebhooksApi.md#getWebhookV1) | **GET** /v1/webhooks/{webhookId} | Get details about the given webhook.
*VeloPayments.WebhooksApi* | [**listWebhooksV1**](docs/WebhooksApi.md#listWebhooksV1) | **GET** /v1/webhooks | List the details about the webhooks for the given payor.
*VeloPayments.WebhooksApi* | [**updateWebhookV1**](docs/WebhooksApi.md#updateWebhookV1) | **POST** /v1/webhooks/{webhookId} | Update Webhook


## Documentation for Models

 - [VeloPayments.AcceptedPaymentV3](docs/AcceptedPaymentV3.md)
 - [VeloPayments.AccessTokenResponse](docs/AccessTokenResponse.md)
 - [VeloPayments.AccessTokenValidationRequest](docs/AccessTokenValidationRequest.md)
 - [VeloPayments.AuthResponse](docs/AuthResponse.md)
 - [VeloPayments.AutoTopUpConfig](docs/AutoTopUpConfig.md)
 - [VeloPayments.AutoTopUpConfig2](docs/AutoTopUpConfig2.md)
 - [VeloPayments.Category](docs/Category.md)
 - [VeloPayments.Challenge](docs/Challenge.md)
 - [VeloPayments.Challenge2](docs/Challenge2.md)
 - [VeloPayments.Company](docs/Company.md)
 - [VeloPayments.Company2](docs/Company2.md)
 - [VeloPayments.CreateFundingAccountRequestV2](docs/CreateFundingAccountRequestV2.md)
 - [VeloPayments.CreateIndividual](docs/CreateIndividual.md)
 - [VeloPayments.CreateIndividual2](docs/CreateIndividual2.md)
 - [VeloPayments.CreateIndividualName](docs/CreateIndividualName.md)
 - [VeloPayments.CreatePayee](docs/CreatePayee.md)
 - [VeloPayments.CreatePayee2](docs/CreatePayee2.md)
 - [VeloPayments.CreatePayeeAddress](docs/CreatePayeeAddress.md)
 - [VeloPayments.CreatePayeeAddress2](docs/CreatePayeeAddress2.md)
 - [VeloPayments.CreatePayeesCSVResponse](docs/CreatePayeesCSVResponse.md)
 - [VeloPayments.CreatePayeesCSVResponse2](docs/CreatePayeesCSVResponse2.md)
 - [VeloPayments.CreatePayeesCSVResponseRejectedCsvRows](docs/CreatePayeesCSVResponseRejectedCsvRows.md)
 - [VeloPayments.CreatePayeesRequest](docs/CreatePayeesRequest.md)
 - [VeloPayments.CreatePayeesRequest2](docs/CreatePayeesRequest2.md)
 - [VeloPayments.CreatePaymentChannel](docs/CreatePaymentChannel.md)
 - [VeloPayments.CreatePaymentChannel2](docs/CreatePaymentChannel2.md)
 - [VeloPayments.CreatePayorLinkRequest](docs/CreatePayorLinkRequest.md)
 - [VeloPayments.CreatePayoutRequestV3](docs/CreatePayoutRequestV3.md)
 - [VeloPayments.CreateWebhookRequest](docs/CreateWebhookRequest.md)
 - [VeloPayments.DebitEvent](docs/DebitEvent.md)
 - [VeloPayments.DebitEventAllOf](docs/DebitEventAllOf.md)
 - [VeloPayments.DebitStatusChanged](docs/DebitStatusChanged.md)
 - [VeloPayments.DebitStatusChangedAllOf](docs/DebitStatusChangedAllOf.md)
 - [VeloPayments.Error](docs/Error.md)
 - [VeloPayments.ErrorData](docs/ErrorData.md)
 - [VeloPayments.ErrorResponse](docs/ErrorResponse.md)
 - [VeloPayments.FailedPayee](docs/FailedPayee.md)
 - [VeloPayments.FailedPayee2](docs/FailedPayee2.md)
 - [VeloPayments.FailedSubmission](docs/FailedSubmission.md)
 - [VeloPayments.FailedSubmission2](docs/FailedSubmission2.md)
 - [VeloPayments.FundingAccountResponse](docs/FundingAccountResponse.md)
 - [VeloPayments.FundingAccountResponse2](docs/FundingAccountResponse2.md)
 - [VeloPayments.FundingAccountType](docs/FundingAccountType.md)
 - [VeloPayments.FundingAudit](docs/FundingAudit.md)
 - [VeloPayments.FundingEvent](docs/FundingEvent.md)
 - [VeloPayments.FundingEventType](docs/FundingEventType.md)
 - [VeloPayments.FundingPayorStatusAuditResponse](docs/FundingPayorStatusAuditResponse.md)
 - [VeloPayments.FundingRequestV1](docs/FundingRequestV1.md)
 - [VeloPayments.FundingRequestV2](docs/FundingRequestV2.md)
 - [VeloPayments.FundingRequestV3](docs/FundingRequestV3.md)
 - [VeloPayments.FxSummary](docs/FxSummary.md)
 - [VeloPayments.FxSummaryV3](docs/FxSummaryV3.md)
 - [VeloPayments.GetFundingsResponse](docs/GetFundingsResponse.md)
 - [VeloPayments.GetFundingsResponseLinks](docs/GetFundingsResponseLinks.md)
 - [VeloPayments.GetPayeeListResponse](docs/GetPayeeListResponse.md)
 - [VeloPayments.GetPayeeListResponse2](docs/GetPayeeListResponse2.md)
 - [VeloPayments.GetPayeeListResponseCompany](docs/GetPayeeListResponseCompany.md)
 - [VeloPayments.GetPayeeListResponseCompany2](docs/GetPayeeListResponseCompany2.md)
 - [VeloPayments.GetPayeeListResponseIndividual](docs/GetPayeeListResponseIndividual.md)
 - [VeloPayments.GetPayeeListResponseIndividual2](docs/GetPayeeListResponseIndividual2.md)
 - [VeloPayments.GetPaymentsForPayoutResponseV3](docs/GetPaymentsForPayoutResponseV3.md)
 - [VeloPayments.GetPaymentsForPayoutResponseV3Page](docs/GetPaymentsForPayoutResponseV3Page.md)
 - [VeloPayments.GetPaymentsForPayoutResponseV3Summary](docs/GetPaymentsForPayoutResponseV3Summary.md)
 - [VeloPayments.GetPaymentsForPayoutResponseV4](docs/GetPaymentsForPayoutResponseV4.md)
 - [VeloPayments.GetPaymentsForPayoutResponseV4Summary](docs/GetPaymentsForPayoutResponseV4Summary.md)
 - [VeloPayments.GetPayoutStatistics](docs/GetPayoutStatistics.md)
 - [VeloPayments.GetPayoutsResponse](docs/GetPayoutsResponse.md)
 - [VeloPayments.GetPayoutsResponseV3](docs/GetPayoutsResponseV3.md)
 - [VeloPayments.GetPayoutsResponseV3Links](docs/GetPayoutsResponseV3Links.md)
 - [VeloPayments.GetPayoutsResponseV3Page](docs/GetPayoutsResponseV3Page.md)
 - [VeloPayments.Individual](docs/Individual.md)
 - [VeloPayments.Individual2](docs/Individual2.md)
 - [VeloPayments.IndividualName](docs/IndividualName.md)
 - [VeloPayments.InlineResponse400](docs/InlineResponse400.md)
 - [VeloPayments.InlineResponse401](docs/InlineResponse401.md)
 - [VeloPayments.InlineResponse403](docs/InlineResponse403.md)
 - [VeloPayments.InlineResponse404](docs/InlineResponse404.md)
 - [VeloPayments.InlineResponse409](docs/InlineResponse409.md)
 - [VeloPayments.InlineResponse412](docs/InlineResponse412.md)
 - [VeloPayments.InvitationStatus](docs/InvitationStatus.md)
 - [VeloPayments.InvitationStatus2](docs/InvitationStatus2.md)
 - [VeloPayments.InvitePayeeRequest](docs/InvitePayeeRequest.md)
 - [VeloPayments.InvitePayeeRequest2](docs/InvitePayeeRequest2.md)
 - [VeloPayments.InviteUserRequest](docs/InviteUserRequest.md)
 - [VeloPayments.KycState](docs/KycState.md)
 - [VeloPayments.LinkForResponse](docs/LinkForResponse.md)
 - [VeloPayments.ListFundingAccountsResponse](docs/ListFundingAccountsResponse.md)
 - [VeloPayments.ListFundingAccountsResponse2](docs/ListFundingAccountsResponse2.md)
 - [VeloPayments.ListPaymentsResponseV3](docs/ListPaymentsResponseV3.md)
 - [VeloPayments.ListPaymentsResponseV3Page](docs/ListPaymentsResponseV3Page.md)
 - [VeloPayments.ListPaymentsResponseV4](docs/ListPaymentsResponseV4.md)
 - [VeloPayments.ListSourceAccountResponse](docs/ListSourceAccountResponse.md)
 - [VeloPayments.ListSourceAccountResponseLinks](docs/ListSourceAccountResponseLinks.md)
 - [VeloPayments.ListSourceAccountResponsePage](docs/ListSourceAccountResponsePage.md)
 - [VeloPayments.ListSourceAccountResponseV2](docs/ListSourceAccountResponseV2.md)
 - [VeloPayments.ListSourceAccountResponseV2Links](docs/ListSourceAccountResponseV2Links.md)
 - [VeloPayments.ListSourceAccountResponseV3](docs/ListSourceAccountResponseV3.md)
 - [VeloPayments.ListSourceAccountResponseV3Links](docs/ListSourceAccountResponseV3Links.md)
 - [VeloPayments.LocalisationDetails](docs/LocalisationDetails.md)
 - [VeloPayments.MFADetails](docs/MFADetails.md)
 - [VeloPayments.MFAType](docs/MFAType.md)
 - [VeloPayments.Name](docs/Name.md)
 - [VeloPayments.Name2](docs/Name2.md)
 - [VeloPayments.Notification](docs/Notification.md)
 - [VeloPayments.Notifications](docs/Notifications.md)
 - [VeloPayments.Notifications2](docs/Notifications2.md)
 - [VeloPayments.OfacStatus](docs/OfacStatus.md)
 - [VeloPayments.OnboardedStatus](docs/OnboardedStatus.md)
 - [VeloPayments.OnboardedStatus2](docs/OnboardedStatus2.md)
 - [VeloPayments.OnboardingStatusChanged](docs/OnboardingStatusChanged.md)
 - [VeloPayments.PageForResponse](docs/PageForResponse.md)
 - [VeloPayments.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse](docs/PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse.md)
 - [VeloPayments.PagedPayeeInvitationStatusResponse](docs/PagedPayeeInvitationStatusResponse.md)
 - [VeloPayments.PagedPayeeInvitationStatusResponse2](docs/PagedPayeeInvitationStatusResponse2.md)
 - [VeloPayments.PagedPayeeInvitationStatusResponsePage](docs/PagedPayeeInvitationStatusResponsePage.md)
 - [VeloPayments.PagedPayeeResponse](docs/PagedPayeeResponse.md)
 - [VeloPayments.PagedPayeeResponse2](docs/PagedPayeeResponse2.md)
 - [VeloPayments.PagedPayeeResponseLinks](docs/PagedPayeeResponseLinks.md)
 - [VeloPayments.PagedPayeeResponsePage](docs/PagedPayeeResponsePage.md)
 - [VeloPayments.PagedPayeeResponseSummary](docs/PagedPayeeResponseSummary.md)
 - [VeloPayments.PagedPaymentsResponseV3](docs/PagedPaymentsResponseV3.md)
 - [VeloPayments.PagedUserResponse](docs/PagedUserResponse.md)
 - [VeloPayments.PagedUserResponseLinks](docs/PagedUserResponseLinks.md)
 - [VeloPayments.PagedUserResponsePage](docs/PagedUserResponsePage.md)
 - [VeloPayments.PasswordRequest](docs/PasswordRequest.md)
 - [VeloPayments.PayableIssue](docs/PayableIssue.md)
 - [VeloPayments.PayableIssue2](docs/PayableIssue2.md)
 - [VeloPayments.PayableStatusChanged](docs/PayableStatusChanged.md)
 - [VeloPayments.PayeeAddress](docs/PayeeAddress.md)
 - [VeloPayments.PayeeAddress2](docs/PayeeAddress2.md)
 - [VeloPayments.PayeeDelta](docs/PayeeDelta.md)
 - [VeloPayments.PayeeDelta2](docs/PayeeDelta2.md)
 - [VeloPayments.PayeeDeltaResponse](docs/PayeeDeltaResponse.md)
 - [VeloPayments.PayeeDeltaResponse2](docs/PayeeDeltaResponse2.md)
 - [VeloPayments.PayeeDeltaResponse2Links](docs/PayeeDeltaResponse2Links.md)
 - [VeloPayments.PayeeDeltaResponseLinks](docs/PayeeDeltaResponseLinks.md)
 - [VeloPayments.PayeeDeltaResponsePage](docs/PayeeDeltaResponsePage.md)
 - [VeloPayments.PayeeDetailResponse](docs/PayeeDetailResponse.md)
 - [VeloPayments.PayeeDetailResponse2](docs/PayeeDetailResponse2.md)
 - [VeloPayments.PayeeDetailsChanged](docs/PayeeDetailsChanged.md)
 - [VeloPayments.PayeeEvent](docs/PayeeEvent.md)
 - [VeloPayments.PayeeEventAllOf](docs/PayeeEventAllOf.md)
 - [VeloPayments.PayeeEventAllOfReasons](docs/PayeeEventAllOfReasons.md)
 - [VeloPayments.PayeeInvitationStatusResponse](docs/PayeeInvitationStatusResponse.md)
 - [VeloPayments.PayeeInvitationStatusResponse2](docs/PayeeInvitationStatusResponse2.md)
 - [VeloPayments.PayeePayorRef](docs/PayeePayorRef.md)
 - [VeloPayments.PayeePayorRefV3](docs/PayeePayorRefV3.md)
 - [VeloPayments.PayeeType](docs/PayeeType.md)
 - [VeloPayments.PayeeUserSelfUpdateRequest](docs/PayeeUserSelfUpdateRequest.md)
 - [VeloPayments.PaymentAuditCurrency](docs/PaymentAuditCurrency.md)
 - [VeloPayments.PaymentAuditCurrencyV3](docs/PaymentAuditCurrencyV3.md)
 - [VeloPayments.PaymentChannelCountry](docs/PaymentChannelCountry.md)
 - [VeloPayments.PaymentChannelRule](docs/PaymentChannelRule.md)
 - [VeloPayments.PaymentChannelRulesResponse](docs/PaymentChannelRulesResponse.md)
 - [VeloPayments.PaymentDelta](docs/PaymentDelta.md)
 - [VeloPayments.PaymentDeltaResponse](docs/PaymentDeltaResponse.md)
 - [VeloPayments.PaymentDeltaResponseV1](docs/PaymentDeltaResponseV1.md)
 - [VeloPayments.PaymentDeltaV1](docs/PaymentDeltaV1.md)
 - [VeloPayments.PaymentEvent](docs/PaymentEvent.md)
 - [VeloPayments.PaymentEventAllOf](docs/PaymentEventAllOf.md)
 - [VeloPayments.PaymentEventResponse](docs/PaymentEventResponse.md)
 - [VeloPayments.PaymentEventResponseV3](docs/PaymentEventResponseV3.md)
 - [VeloPayments.PaymentInstructionV3](docs/PaymentInstructionV3.md)
 - [VeloPayments.PaymentRails](docs/PaymentRails.md)
 - [VeloPayments.PaymentRejectedOrReturned](docs/PaymentRejectedOrReturned.md)
 - [VeloPayments.PaymentRejectedOrReturnedAllOf](docs/PaymentRejectedOrReturnedAllOf.md)
 - [VeloPayments.PaymentResponseV3](docs/PaymentResponseV3.md)
 - [VeloPayments.PaymentResponseV4](docs/PaymentResponseV4.md)
 - [VeloPayments.PaymentResponseV4Payout](docs/PaymentResponseV4Payout.md)
 - [VeloPayments.PaymentStatusChanged](docs/PaymentStatusChanged.md)
 - [VeloPayments.PaymentStatusChangedAllOf](docs/PaymentStatusChangedAllOf.md)
 - [VeloPayments.PaymentV3](docs/PaymentV3.md)
 - [VeloPayments.PayorAddress](docs/PayorAddress.md)
 - [VeloPayments.PayorAddressV2](docs/PayorAddressV2.md)
 - [VeloPayments.PayorAmlTransaction](docs/PayorAmlTransaction.md)
 - [VeloPayments.PayorAmlTransactionV3](docs/PayorAmlTransactionV3.md)
 - [VeloPayments.PayorBrandingResponse](docs/PayorBrandingResponse.md)
 - [VeloPayments.PayorCreateApiKeyRequest](docs/PayorCreateApiKeyRequest.md)
 - [VeloPayments.PayorCreateApiKeyResponse](docs/PayorCreateApiKeyResponse.md)
 - [VeloPayments.PayorCreateApplicationRequest](docs/PayorCreateApplicationRequest.md)
 - [VeloPayments.PayorEmailOptOutRequest](docs/PayorEmailOptOutRequest.md)
 - [VeloPayments.PayorLinksResponse](docs/PayorLinksResponse.md)
 - [VeloPayments.PayorLinksResponseLinks](docs/PayorLinksResponseLinks.md)
 - [VeloPayments.PayorLinksResponsePayors](docs/PayorLinksResponsePayors.md)
 - [VeloPayments.PayorV1](docs/PayorV1.md)
 - [VeloPayments.PayorV2](docs/PayorV2.md)
 - [VeloPayments.PayoutCompanyV3](docs/PayoutCompanyV3.md)
 - [VeloPayments.PayoutIndividualV3](docs/PayoutIndividualV3.md)
 - [VeloPayments.PayoutNameV3](docs/PayoutNameV3.md)
 - [VeloPayments.PayoutPayeeV3](docs/PayoutPayeeV3.md)
 - [VeloPayments.PayoutPayor](docs/PayoutPayor.md)
 - [VeloPayments.PayoutPayorIds](docs/PayoutPayorIds.md)
 - [VeloPayments.PayoutPrincipal](docs/PayoutPrincipal.md)
 - [VeloPayments.PayoutStatus](docs/PayoutStatus.md)
 - [VeloPayments.PayoutStatusV3](docs/PayoutStatusV3.md)
 - [VeloPayments.PayoutSummaryAudit](docs/PayoutSummaryAudit.md)
 - [VeloPayments.PayoutSummaryAuditV3](docs/PayoutSummaryAuditV3.md)
 - [VeloPayments.PayoutSummaryResponseV3](docs/PayoutSummaryResponseV3.md)
 - [VeloPayments.PayoutType](docs/PayoutType.md)
 - [VeloPayments.Ping](docs/Ping.md)
 - [VeloPayments.QueryBatchResponse](docs/QueryBatchResponse.md)
 - [VeloPayments.QueryBatchResponse2](docs/QueryBatchResponse2.md)
 - [VeloPayments.QuoteFxSummaryV3](docs/QuoteFxSummaryV3.md)
 - [VeloPayments.QuoteResponseV3](docs/QuoteResponseV3.md)
 - [VeloPayments.RegionV2](docs/RegionV2.md)
 - [VeloPayments.RegisterSmsRequest](docs/RegisterSmsRequest.md)
 - [VeloPayments.RejectedPaymentV3](docs/RejectedPaymentV3.md)
 - [VeloPayments.ResendTokenRequest](docs/ResendTokenRequest.md)
 - [VeloPayments.ResetPasswordRequest](docs/ResetPasswordRequest.md)
 - [VeloPayments.Role](docs/Role.md)
 - [VeloPayments.RoleUpdateRequest](docs/RoleUpdateRequest.md)
 - [VeloPayments.SelfMFATypeUnregisterRequest](docs/SelfMFATypeUnregisterRequest.md)
 - [VeloPayments.SelfUpdatePasswordRequest](docs/SelfUpdatePasswordRequest.md)
 - [VeloPayments.SetNotificationsRequest](docs/SetNotificationsRequest.md)
 - [VeloPayments.SourceAccountResponse](docs/SourceAccountResponse.md)
 - [VeloPayments.SourceAccountResponseV2](docs/SourceAccountResponseV2.md)
 - [VeloPayments.SourceAccountResponseV3](docs/SourceAccountResponseV3.md)
 - [VeloPayments.SourceAccountSummary](docs/SourceAccountSummary.md)
 - [VeloPayments.SourceAccountSummaryV3](docs/SourceAccountSummaryV3.md)
 - [VeloPayments.SourceAccountType](docs/SourceAccountType.md)
 - [VeloPayments.SourceAccountV3](docs/SourceAccountV3.md)
 - [VeloPayments.SourceEvent](docs/SourceEvent.md)
 - [VeloPayments.SupportedCountriesResponse](docs/SupportedCountriesResponse.md)
 - [VeloPayments.SupportedCountriesResponseV2](docs/SupportedCountriesResponseV2.md)
 - [VeloPayments.SupportedCountry](docs/SupportedCountry.md)
 - [VeloPayments.SupportedCountryV2](docs/SupportedCountryV2.md)
 - [VeloPayments.SupportedCurrencyResponseV2](docs/SupportedCurrencyResponseV2.md)
 - [VeloPayments.SupportedCurrencyV2](docs/SupportedCurrencyV2.md)
 - [VeloPayments.TransferRequest](docs/TransferRequest.md)
 - [VeloPayments.TransferRequest2](docs/TransferRequest2.md)
 - [VeloPayments.TransmissionType](docs/TransmissionType.md)
 - [VeloPayments.TransmissionTypes](docs/TransmissionTypes.md)
 - [VeloPayments.TransmissionTypes2](docs/TransmissionTypes2.md)
 - [VeloPayments.UnregisterMFARequest](docs/UnregisterMFARequest.md)
 - [VeloPayments.UpdatePayeeDetailsRequest](docs/UpdatePayeeDetailsRequest.md)
 - [VeloPayments.UpdatePayeeDetailsRequest2](docs/UpdatePayeeDetailsRequest2.md)
 - [VeloPayments.UpdateRemoteIdRequest](docs/UpdateRemoteIdRequest.md)
 - [VeloPayments.UpdateRemoteIdRequest2](docs/UpdateRemoteIdRequest2.md)
 - [VeloPayments.UpdateWebhookRequest](docs/UpdateWebhookRequest.md)
 - [VeloPayments.UserDetailsUpdateRequest](docs/UserDetailsUpdateRequest.md)
 - [VeloPayments.UserInfo](docs/UserInfo.md)
 - [VeloPayments.UserResponse](docs/UserResponse.md)
 - [VeloPayments.UserStatus](docs/UserStatus.md)
 - [VeloPayments.UserType](docs/UserType.md)
 - [VeloPayments.UserType2](docs/UserType2.md)
 - [VeloPayments.ValidatePasswordResponse](docs/ValidatePasswordResponse.md)
 - [VeloPayments.WatchlistStatus](docs/WatchlistStatus.md)
 - [VeloPayments.WatchlistStatus2](docs/WatchlistStatus2.md)
 - [VeloPayments.WebhookResponse](docs/WebhookResponse.md)
 - [VeloPayments.WebhooksResponse](docs/WebhooksResponse.md)
 - [VeloPayments.WithdrawPaymentRequest](docs/WithdrawPaymentRequest.md)


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

