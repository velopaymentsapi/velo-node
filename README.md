# JavaScript client for Velo
This library provides a JavaScript client that simplifies interactions with the Velo Payments API. For full details covering the API visit our docs at [Velo Payments APIs](https://apidocs.velopayments.com). Note: some of the Velo API calls which require authorization via an access token, see the full docs on how to configure.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.16.18
- Package version: 2.16.18
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
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new VeloPayments.AuthApi()
var opts = {
  'grantType': "'client_credentials'" // {String} OAuth grant type. Should use 'client_credentials'
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.veloAuth(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.sandbox.velopayments.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*VeloPayments.AuthApi* | [**veloAuth**](docs/AuthApi.md#veloAuth) | **POST** /v1/authenticate | Authentication endpoint
*VeloPayments.CountriesApi* | [**listSupportedCountries**](docs/CountriesApi.md#listSupportedCountries) | **GET** /v1/supportedCountries | List Supported Countries
*VeloPayments.CountriesApi* | [**v1PaymentChannelRulesGet**](docs/CountriesApi.md#v1PaymentChannelRulesGet) | **GET** /v1/paymentChannelRules | List Payment Channel Country Rules
*VeloPayments.CurrenciesApi* | [**listSupportedCurrencies**](docs/CurrenciesApi.md#listSupportedCurrencies) | **GET** /v2/currencies | List Supported Currencies
*VeloPayments.FundingManagerApi* | [**createAchFundingRequest**](docs/FundingManagerApi.md#createAchFundingRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/achFundingRequest | Create Funding Request
*VeloPayments.FundingManagerApi* | [**createFundingRequest**](docs/FundingManagerApi.md#createFundingRequest) | **POST** /v2/sourceAccounts/{sourceAccountId}/fundingRequest | Create Funding Request
*VeloPayments.FundingManagerApi* | [**getFundings**](docs/FundingManagerApi.md#getFundings) | **GET** /v1/paymentaudit/fundings | Get Fundings for Payor
*VeloPayments.FundingManagerApi* | [**getSourceAccount**](docs/FundingManagerApi.md#getSourceAccount) | **GET** /v1/sourceAccounts/{sourceAccountId} | Get details about given source account.
*VeloPayments.FundingManagerApi* | [**getSourceAccountV2**](docs/FundingManagerApi.md#getSourceAccountV2) | **GET** /v2/sourceAccounts/{sourceAccountId} | Get details about given source account.
*VeloPayments.FundingManagerApi* | [**getSourceAccounts**](docs/FundingManagerApi.md#getSourceAccounts) | **GET** /v1/sourceAccounts | Get list of source accounts
*VeloPayments.FundingManagerApi* | [**getSourceAccountsV2**](docs/FundingManagerApi.md#getSourceAccountsV2) | **GET** /v2/sourceAccounts | Get list of source accounts
*VeloPayments.FundingManagerApi* | [**listFundingAuditDeltas**](docs/FundingManagerApi.md#listFundingAuditDeltas) | **GET** /v1/deltas/fundings | List Funding changes
*VeloPayments.FundingManagerApi* | [**setNotificationsRequest**](docs/FundingManagerApi.md#setNotificationsRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/notifications | Set notifications
*VeloPayments.GetPayoutApi* | [**v3PayoutsPayoutIdGet**](docs/GetPayoutApi.md#v3PayoutsPayoutIdGet) | **GET** /v3/payouts/{payoutId} | Get Payout Summary
*VeloPayments.InstructPayoutApi* | [**v3PayoutsPayoutIdPost**](docs/InstructPayoutApi.md#v3PayoutsPayoutIdPost) | **POST** /v3/payouts/{payoutId} | Instruct Payout
*VeloPayments.PayeeInvitationApi* | [**getPayeesInvitationStatus**](docs/PayeeInvitationApi.md#getPayeesInvitationStatus) | **GET** /v1/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
*VeloPayments.PayeeInvitationApi* | [**getPayeesInvitationStatusV2**](docs/PayeeInvitationApi.md#getPayeesInvitationStatusV2) | **GET** /v2/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
*VeloPayments.PayeeInvitationApi* | [**resendPayeeInvite**](docs/PayeeInvitationApi.md#resendPayeeInvite) | **POST** /v1/payees/{payeeId}/invite | Resend Payee Invite
*VeloPayments.PayeeInvitationApi* | [**v2CreatePayee**](docs/PayeeInvitationApi.md#v2CreatePayee) | **POST** /v2/payees | Intiate Payee Creation
*VeloPayments.PayeeInvitationApi* | [**v2QueryBatchStatus**](docs/PayeeInvitationApi.md#v2QueryBatchStatus) | **GET** /v2/payees/batch/{batchId} | Query Batch Status
*VeloPayments.PayeesApi* | [**deletePayeeById**](docs/PayeesApi.md#deletePayeeById) | **DELETE** /v1/payees/{payeeId} | Delete Payee by Id
*VeloPayments.PayeesApi* | [**getPayeeById**](docs/PayeesApi.md#getPayeeById) | **GET** /v1/payees/{payeeId} | Get Payee by Id
*VeloPayments.PayeesApi* | [**listPayeeChanges**](docs/PayeesApi.md#listPayeeChanges) | **GET** /v1/deltas/payees | List Payee Changes
*VeloPayments.PayeesApi* | [**listPayees**](docs/PayeesApi.md#listPayees) | **GET** /v1/payees | List Payees
*VeloPayments.PaymentAuditServiceApi* | [**exportTransactionsCSV**](docs/PaymentAuditServiceApi.md#exportTransactionsCSV) | **GET** /v4/paymentaudit/transactions | Export Transactions
*VeloPayments.PaymentAuditServiceApi* | [**getFundings**](docs/PaymentAuditServiceApi.md#getFundings) | **GET** /v1/paymentaudit/fundings | Get Fundings for Payor
*VeloPayments.PaymentAuditServiceApi* | [**getPaymentDetails**](docs/PaymentAuditServiceApi.md#getPaymentDetails) | **GET** /v3/paymentaudit/payments/{paymentId} | Get Payment
*VeloPayments.PaymentAuditServiceApi* | [**getPaymentDetailsV4**](docs/PaymentAuditServiceApi.md#getPaymentDetailsV4) | **GET** /v4/paymentaudit/payments/{paymentId} | Get Payment
*VeloPayments.PaymentAuditServiceApi* | [**getPaymentsForPayout**](docs/PaymentAuditServiceApi.md#getPaymentsForPayout) | **GET** /v3/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPayments.PaymentAuditServiceApi* | [**getPaymentsForPayoutV4**](docs/PaymentAuditServiceApi.md#getPaymentsForPayoutV4) | **GET** /v4/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPayments.PaymentAuditServiceApi* | [**getPayoutsForPayor**](docs/PaymentAuditServiceApi.md#getPayoutsForPayor) | **GET** /v3/paymentaudit/payouts | Get Payouts for Payor
*VeloPayments.PaymentAuditServiceApi* | [**getPayoutsForPayorV4**](docs/PaymentAuditServiceApi.md#getPayoutsForPayorV4) | **GET** /v4/paymentaudit/payouts | Get Payouts for Payor
*VeloPayments.PaymentAuditServiceApi* | [**listPaymentChanges**](docs/PaymentAuditServiceApi.md#listPaymentChanges) | **GET** /v1/deltas/payments | List Payment Changes
*VeloPayments.PaymentAuditServiceApi* | [**listPaymentsAudit**](docs/PaymentAuditServiceApi.md#listPaymentsAudit) | **GET** /v3/paymentaudit/payments | Get List of Payments
*VeloPayments.PaymentAuditServiceApi* | [**listPaymentsAuditV4**](docs/PaymentAuditServiceApi.md#listPaymentsAuditV4) | **GET** /v4/paymentaudit/payments | Get List of Payments
*VeloPayments.PayorApplicationsApi* | [**payorCreateApiKeyRequest**](docs/PayorApplicationsApi.md#payorCreateApiKeyRequest) | **POST** /v1/payors/{payorId}/applications/{applicationId}/keys | Create API Key
*VeloPayments.PayorApplicationsApi* | [**payorCreateApplicationRequest**](docs/PayorApplicationsApi.md#payorCreateApplicationRequest) | **POST** /v1/payors/{payorId}/applications | Create Application
*VeloPayments.PayorsApi* | [**getPayorById**](docs/PayorsApi.md#getPayorById) | **GET** /v1/payors/{payorId} | Get Payor
*VeloPayments.PayorsApi* | [**getPayorByIdV2**](docs/PayorsApi.md#getPayorByIdV2) | **GET** /v2/payors/{payorId} | Get Payor
*VeloPayments.PayorsApi* | [**payorAddPayorLogo**](docs/PayorsApi.md#payorAddPayorLogo) | **POST** /v1/payors/{payorId}/branding/logos | Add Logo
*VeloPayments.PayorsApi* | [**payorEmailOptOut**](docs/PayorsApi.md#payorEmailOptOut) | **POST** /v1/payors/{payorId}/reminderEmailsUpdate | Reminder Email Opt-Out
*VeloPayments.PayorsApi* | [**payorGetBranding**](docs/PayorsApi.md#payorGetBranding) | **GET** /v1/payors/{payorId}/branding | Get Branding
*VeloPayments.PayorsApi* | [**payorLinks**](docs/PayorsApi.md#payorLinks) | **GET** /v1/payorLinks | List Payor Links
*VeloPayments.PayoutHistoryApi* | [**getPaymentsForPayout**](docs/PayoutHistoryApi.md#getPaymentsForPayout) | **GET** /v3/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPayments.PayoutHistoryApi* | [**getPaymentsForPayoutV4**](docs/PayoutHistoryApi.md#getPaymentsForPayoutV4) | **GET** /v4/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPayments.PayoutHistoryApi* | [**getPayoutStats**](docs/PayoutHistoryApi.md#getPayoutStats) | **GET** /v1/paymentaudit/payoutStatistics | Get Payout Statistics
*VeloPayments.QuotePayoutApi* | [**v3PayoutsPayoutIdQuotePost**](docs/QuotePayoutApi.md#v3PayoutsPayoutIdQuotePost) | **POST** /v3/payouts/{payoutId}/quote | Create a quote for the payout
*VeloPayments.SubmitPayoutApi* | [**submitPayout**](docs/SubmitPayoutApi.md#submitPayout) | **POST** /v3/payouts | Submit Payout
*VeloPayments.WithdrawPayoutApi* | [**v3PayoutsPayoutIdDelete**](docs/WithdrawPayoutApi.md#v3PayoutsPayoutIdDelete) | **DELETE** /v3/payouts/{payoutId} | Withdraw Payout


## Documentation for Models

 - [VeloPayments.AuthResponse](docs/AuthResponse.md)
 - [VeloPayments.AutoTopUpConfig](docs/AutoTopUpConfig.md)
 - [VeloPayments.Challenge](docs/Challenge.md)
 - [VeloPayments.CompanyResponse](docs/CompanyResponse.md)
 - [VeloPayments.CompanyV1](docs/CompanyV1.md)
 - [VeloPayments.CreateIndividual](docs/CreateIndividual.md)
 - [VeloPayments.CreatePayee](docs/CreatePayee.md)
 - [VeloPayments.CreatePayeeAddress](docs/CreatePayeeAddress.md)
 - [VeloPayments.CreatePayeesCSVRequest](docs/CreatePayeesCSVRequest.md)
 - [VeloPayments.CreatePayeesCSVResponse](docs/CreatePayeesCSVResponse.md)
 - [VeloPayments.CreatePayeesRequest](docs/CreatePayeesRequest.md)
 - [VeloPayments.CreatePaymentChannel](docs/CreatePaymentChannel.md)
 - [VeloPayments.CreatePayoutRequest](docs/CreatePayoutRequest.md)
 - [VeloPayments.FailedSubmission](docs/FailedSubmission.md)
 - [VeloPayments.FundingAudit](docs/FundingAudit.md)
 - [VeloPayments.FundingDelta](docs/FundingDelta.md)
 - [VeloPayments.FundingDeltaResponse](docs/FundingDeltaResponse.md)
 - [VeloPayments.FundingDeltaResponseLinks](docs/FundingDeltaResponseLinks.md)
 - [VeloPayments.FundingEvent](docs/FundingEvent.md)
 - [VeloPayments.FundingEventType](docs/FundingEventType.md)
 - [VeloPayments.FundingRequestV1](docs/FundingRequestV1.md)
 - [VeloPayments.FundingRequestV2](docs/FundingRequestV2.md)
 - [VeloPayments.FxSummaryV3](docs/FxSummaryV3.md)
 - [VeloPayments.FxSummaryV4](docs/FxSummaryV4.md)
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
 - [VeloPayments.GetPayoutsResponseV3Summary](docs/GetPayoutsResponseV3Summary.md)
 - [VeloPayments.GetPayoutsResponseV4](docs/GetPayoutsResponseV4.md)
 - [VeloPayments.IndividualResponse](docs/IndividualResponse.md)
 - [VeloPayments.IndividualV1](docs/IndividualV1.md)
 - [VeloPayments.IndividualV1Name](docs/IndividualV1Name.md)
 - [VeloPayments.InvitationStatus](docs/InvitationStatus.md)
 - [VeloPayments.InvitationStatusResponse](docs/InvitationStatusResponse.md)
 - [VeloPayments.InvitePayeeRequest](docs/InvitePayeeRequest.md)
 - [VeloPayments.Language](docs/Language.md)
 - [VeloPayments.ListPaymentsResponse](docs/ListPaymentsResponse.md)
 - [VeloPayments.ListPaymentsResponsePage](docs/ListPaymentsResponsePage.md)
 - [VeloPayments.ListPaymentsResponseSummary](docs/ListPaymentsResponseSummary.md)
 - [VeloPayments.ListSourceAccountResponse](docs/ListSourceAccountResponse.md)
 - [VeloPayments.ListSourceAccountResponseLinks](docs/ListSourceAccountResponseLinks.md)
 - [VeloPayments.ListSourceAccountResponsePage](docs/ListSourceAccountResponsePage.md)
 - [VeloPayments.ListSourceAccountResponseV2](docs/ListSourceAccountResponseV2.md)
 - [VeloPayments.ListSourceAccountResponseV2Page](docs/ListSourceAccountResponseV2Page.md)
 - [VeloPayments.MarketingOptIn](docs/MarketingOptIn.md)
 - [VeloPayments.Notifications](docs/Notifications.md)
 - [VeloPayments.OfacStatus](docs/OfacStatus.md)
 - [VeloPayments.OnboardedStatus](docs/OnboardedStatus.md)
 - [VeloPayments.PagedPayeeInvitationStatusResponse](docs/PagedPayeeInvitationStatusResponse.md)
 - [VeloPayments.PagedPayeeResponse](docs/PagedPayeeResponse.md)
 - [VeloPayments.PagedPayeeResponseLinks](docs/PagedPayeeResponseLinks.md)
 - [VeloPayments.PagedPayeeResponsePage](docs/PagedPayeeResponsePage.md)
 - [VeloPayments.PagedPayeeResponseSummary](docs/PagedPayeeResponseSummary.md)
 - [VeloPayments.PagedResponse](docs/PagedResponse.md)
 - [VeloPayments.PagedResponsePage](docs/PagedResponsePage.md)
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
 - [VeloPayments.PayeePayorRefV2](docs/PayeePayorRefV2.md)
 - [VeloPayments.PayeeResponse](docs/PayeeResponse.md)
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
 - [VeloPayments.PaymentResponseV3](docs/PaymentResponseV3.md)
 - [VeloPayments.PaymentResponseV4](docs/PaymentResponseV4.md)
 - [VeloPayments.PaymentResponseV4Payout](docs/PaymentResponseV4Payout.md)
 - [VeloPayments.PaymentStatus](docs/PaymentStatus.md)
 - [VeloPayments.PayorAddress](docs/PayorAddress.md)
 - [VeloPayments.PayorAddressV2](docs/PayorAddressV2.md)
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
 - [VeloPayments.RejectedPayment](docs/RejectedPayment.md)
 - [VeloPayments.SetNotificationsRequest](docs/SetNotificationsRequest.md)
 - [VeloPayments.SourceAccount](docs/SourceAccount.md)
 - [VeloPayments.SourceAccountResponse](docs/SourceAccountResponse.md)
 - [VeloPayments.SourceAccountResponseV2](docs/SourceAccountResponseV2.md)
 - [VeloPayments.SourceAccountSummaryV3](docs/SourceAccountSummaryV3.md)
 - [VeloPayments.SourceAccountSummaryV4](docs/SourceAccountSummaryV4.md)
 - [VeloPayments.SupportedCountriesResponse](docs/SupportedCountriesResponse.md)
 - [VeloPayments.SupportedCountry](docs/SupportedCountry.md)
 - [VeloPayments.SupportedCurrency](docs/SupportedCurrency.md)
 - [VeloPayments.SupportedCurrencyResponse](docs/SupportedCurrencyResponse.md)


## Documentation for Authorization



### OAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  -  : Scopes not required



### basicAuth

- **Type**: HTTP basic authentication

