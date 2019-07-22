# JavaScript client for Velo-payments
This library provides a JavaScript client that simplifies interactions with the Velo Payments API. For full details covering the API visit our docs at [Velo Payments APIs](https://apidocs.velopayments.com). Note: some of the Velo API calls which require authorization via an access token, see the full docs on how to configure.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.14.90
- Package version: 2.14.90
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
var VeloPaymentsApIs = require('velo-payments');

var defaultClient = VeloPaymentsApIs.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = "YOUR ACCESS TOKEN"

var api = new VeloPaymentsApIs.AuthApi()
var authorization = "authorization_example"; // {String} String value of Basic and a Base64 endcoded string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret  (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them.  E.g. Basic 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529 
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
api.veloAuth(authorization, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.sandbox.velopayments.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*VeloPaymentsApIs.AuthApi* | [**veloAuth**](docs/AuthApi.md#veloAuth) | **POST** /v1/authenticate/ | Authentication endpoint
*VeloPaymentsApIs.CountriesApi* | [**listSupportedCountries**](docs/CountriesApi.md#listSupportedCountries) | **GET** /v1/supportedCountries | List Supported Countries
*VeloPaymentsApIs.CountriesApi* | [**v1PaymentChannelRulesGet**](docs/CountriesApi.md#v1PaymentChannelRulesGet) | **GET** /v1/paymentChannelRules | List Payment Channel Country Rules
*VeloPaymentsApIs.CurrenciesApi* | [**listSupportedCurrencies**](docs/CurrenciesApi.md#listSupportedCurrencies) | **GET** /v2/currencies | List Supported Currencies
*VeloPaymentsApIs.FundingManagerApi* | [**createAchFundingRequest**](docs/FundingManagerApi.md#createAchFundingRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/achFundingRequest | Create Funding Request
*VeloPaymentsApIs.FundingManagerApi* | [**createFundingRequest**](docs/FundingManagerApi.md#createFundingRequest) | **POST** /v2/sourceAccounts/{sourceAccountId}/fundingRequest | Create Funding Request
*VeloPaymentsApIs.FundingManagerApi* | [**getFundings**](docs/FundingManagerApi.md#getFundings) | **GET** /v1/paymentaudit/fundings | Get Fundings for Payor
*VeloPaymentsApIs.FundingManagerApi* | [**getSourceAccount**](docs/FundingManagerApi.md#getSourceAccount) | **GET** /v1/sourceAccounts/{sourceAccountId} | Get details about given source account.
*VeloPaymentsApIs.FundingManagerApi* | [**getSourceAccountV2**](docs/FundingManagerApi.md#getSourceAccountV2) | **GET** /v2/sourceAccounts/{sourceAccountId} | Get details about given source account.
*VeloPaymentsApIs.FundingManagerApi* | [**getSourceAccounts**](docs/FundingManagerApi.md#getSourceAccounts) | **GET** /v1/sourceAccounts | Get list of source accounts
*VeloPaymentsApIs.FundingManagerApi* | [**getSourceAccountsV2**](docs/FundingManagerApi.md#getSourceAccountsV2) | **GET** /v2/sourceAccounts | Get list of source accounts
*VeloPaymentsApIs.FundingManagerApi* | [**setNotificationsRequest**](docs/FundingManagerApi.md#setNotificationsRequest) | **POST** /v1/sourceAccounts/{sourceAccountId}/notifications | Set notifications
*VeloPaymentsApIs.FundingManagerApi* | [**setPayorFundingBankDetails**](docs/FundingManagerApi.md#setPayorFundingBankDetails) | **POST** /v1/payors/{payorId}/payorFundingBankDetailsUpdate | Set Funding Bank Details
*VeloPaymentsApIs.GetPayoutApi* | [**v3PayoutsPayoutIdGet**](docs/GetPayoutApi.md#v3PayoutsPayoutIdGet) | **GET** /v3/payouts/{payoutId} | Get Payout Summary
*VeloPaymentsApIs.InstructPayoutApi* | [**v3PayoutsPayoutIdPost**](docs/InstructPayoutApi.md#v3PayoutsPayoutIdPost) | **POST** /v3/payouts/{payoutId} | Instruct Payout
*VeloPaymentsApIs.PayeeInvitationApi* | [**getPayeesInvitationStatus**](docs/PayeeInvitationApi.md#getPayeesInvitationStatus) | **GET** /v1/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
*VeloPaymentsApIs.PayeeInvitationApi* | [**getPayeesInvitationStatusV2**](docs/PayeeInvitationApi.md#getPayeesInvitationStatusV2) | **GET** /v2/payees/payors/{payorId}/invitationStatus | Get Payee Invitation Status
*VeloPaymentsApIs.PayeeInvitationApi* | [**resendPayeeInvite**](docs/PayeeInvitationApi.md#resendPayeeInvite) | **POST** /v1/payees/{payeeId}/invite | Resend Payee Invite
*VeloPaymentsApIs.PayeeInvitationApi* | [**v2CreatePayee**](docs/PayeeInvitationApi.md#v2CreatePayee) | **POST** /v2/payees | Intiate Payee Creation
*VeloPaymentsApIs.PayeeInvitationApi* | [**v2QueryBatchStatus**](docs/PayeeInvitationApi.md#v2QueryBatchStatus) | **GET** /v2/payees/batch/{batchId} | Query Batch Status
*VeloPaymentsApIs.PayeesApi* | [**deletePayeeById**](docs/PayeesApi.md#deletePayeeById) | **DELETE** /v1/payees/{payeeId} | Delete Payee by Id
*VeloPaymentsApIs.PayeesApi* | [**getPayeeById**](docs/PayeesApi.md#getPayeeById) | **GET** /v1/payees/{payeeId} | Get Payee by Id
*VeloPaymentsApIs.PayeesApi* | [**listPayeeChanges**](docs/PayeesApi.md#listPayeeChanges) | **GET** /v1/deltas/payees | List Payee Changes
*VeloPaymentsApIs.PayeesApi* | [**listPayees**](docs/PayeesApi.md#listPayees) | **GET** /v1/payees | List Payees
*VeloPaymentsApIs.PaymentAuditServiceApi* | [**exportTransactionsCSV**](docs/PaymentAuditServiceApi.md#exportTransactionsCSV) | **GET** /v4/paymentaudit/transactions | Export Transactions
*VeloPaymentsApIs.PaymentAuditServiceApi* | [**getFundings**](docs/PaymentAuditServiceApi.md#getFundings) | **GET** /v1/paymentaudit/fundings | Get Fundings for Payor
*VeloPaymentsApIs.PaymentAuditServiceApi* | [**getPaymentDetails**](docs/PaymentAuditServiceApi.md#getPaymentDetails) | **GET** /v3/paymentaudit/payments/{paymentId} | Get Payment
*VeloPaymentsApIs.PaymentAuditServiceApi* | [**getPaymentDetailsV4**](docs/PaymentAuditServiceApi.md#getPaymentDetailsV4) | **GET** /v4/paymentaudit/payments/{paymentId} | Get Payment
*VeloPaymentsApIs.PaymentAuditServiceApi* | [**getPaymentsForPayout**](docs/PaymentAuditServiceApi.md#getPaymentsForPayout) | **GET** /v3/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPaymentsApIs.PaymentAuditServiceApi* | [**getPaymentsForPayoutV4**](docs/PaymentAuditServiceApi.md#getPaymentsForPayoutV4) | **GET** /v4/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPaymentsApIs.PaymentAuditServiceApi* | [**getPayoutsForPayor**](docs/PaymentAuditServiceApi.md#getPayoutsForPayor) | **GET** /v3/paymentaudit/payouts | Get Payouts for Payor
*VeloPaymentsApIs.PaymentAuditServiceApi* | [**getPayoutsForPayorV4**](docs/PaymentAuditServiceApi.md#getPayoutsForPayorV4) | **GET** /v4/paymentaudit/payouts | Get Payouts for Payor
*VeloPaymentsApIs.PaymentAuditServiceApi* | [**listPaymentsAudit**](docs/PaymentAuditServiceApi.md#listPaymentsAudit) | **GET** /v3/paymentaudit/payments | Get List of Payments
*VeloPaymentsApIs.PaymentAuditServiceApi* | [**listPaymentsAuditV4**](docs/PaymentAuditServiceApi.md#listPaymentsAuditV4) | **GET** /v4/paymentaudit/payments | Get List of Payments
*VeloPaymentsApIs.PayorApplicationsApi* | [**payorCreateApiKeyRequest**](docs/PayorApplicationsApi.md#payorCreateApiKeyRequest) | **POST** /v1/payors/{payorId}/applications/{applicationId}/keys | Create API Key
*VeloPaymentsApIs.PayorApplicationsApi* | [**payorCreateApplicationRequest**](docs/PayorApplicationsApi.md#payorCreateApplicationRequest) | **POST** /v1/payors/{payorId}/applications | Create Application
*VeloPaymentsApIs.PayorsApi* | [**getPayorById**](docs/PayorsApi.md#getPayorById) | **GET** /v1/payors/{payorId} | Get Payor
*VeloPaymentsApIs.PayorsApi* | [**getPayorByIdV2**](docs/PayorsApi.md#getPayorByIdV2) | **GET** /v2/payors/{payorId} | Get Payor
*VeloPaymentsApIs.PayorsApi* | [**payorAddPayorLogo**](docs/PayorsApi.md#payorAddPayorLogo) | **POST** /v1/payors/{payorId}/branding/logos | Add Logo
*VeloPaymentsApIs.PayorsApi* | [**payorEmailOptOut**](docs/PayorsApi.md#payorEmailOptOut) | **POST** /v1/payors/{payorId}/reminderEmailsUpdate | Reminder Email Opt-Out
*VeloPaymentsApIs.PayorsApi* | [**payorGetBranding**](docs/PayorsApi.md#payorGetBranding) | **GET** /v1/payors/{payorId}/branding | Get Branding
*VeloPaymentsApIs.PayorsApi* | [**payorLinks**](docs/PayorsApi.md#payorLinks) | **GET** /v1/payorLinks | List Payor Links
*VeloPaymentsApIs.PayoutHistoryApi* | [**getPaymentsForPayout**](docs/PayoutHistoryApi.md#getPaymentsForPayout) | **GET** /v3/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPaymentsApIs.PayoutHistoryApi* | [**getPaymentsForPayoutV4**](docs/PayoutHistoryApi.md#getPaymentsForPayoutV4) | **GET** /v4/paymentaudit/payouts/{payoutId} | Get Payments for Payout
*VeloPaymentsApIs.PayoutHistoryApi* | [**getPayoutStats**](docs/PayoutHistoryApi.md#getPayoutStats) | **GET** /v1/paymentaudit/payoutStatistics | Get Payout Statistics
*VeloPaymentsApIs.QuotePayoutApi* | [**v3PayoutsPayoutIdQuotePost**](docs/QuotePayoutApi.md#v3PayoutsPayoutIdQuotePost) | **POST** /v3/payouts/{payoutId}/quote | Create a quote for the payout
*VeloPaymentsApIs.SubmitPayoutApi* | [**submitPayout**](docs/SubmitPayoutApi.md#submitPayout) | **POST** /v3/payouts | Submit Payout
*VeloPaymentsApIs.WithdrawPayoutApi* | [**v3PayoutsPayoutIdDelete**](docs/WithdrawPayoutApi.md#v3PayoutsPayoutIdDelete) | **DELETE** /v3/payouts/{payoutId} | Withdraw Payout


## Documentation for Models

 - [VeloPaymentsApIs.Address](docs/Address.md)
 - [VeloPaymentsApIs.AuthResponse](docs/AuthResponse.md)
 - [VeloPaymentsApIs.AutoTopUpConfig](docs/AutoTopUpConfig.md)
 - [VeloPaymentsApIs.Challenge](docs/Challenge.md)
 - [VeloPaymentsApIs.Company](docs/Company.md)
 - [VeloPaymentsApIs.CreateIndividual](docs/CreateIndividual.md)
 - [VeloPaymentsApIs.CreatePayee](docs/CreatePayee.md)
 - [VeloPaymentsApIs.CreatePayeeAddress](docs/CreatePayeeAddress.md)
 - [VeloPaymentsApIs.CreatePayeesCSVRequest](docs/CreatePayeesCSVRequest.md)
 - [VeloPaymentsApIs.CreatePayeesCSVResponse](docs/CreatePayeesCSVResponse.md)
 - [VeloPaymentsApIs.CreatePayeesRequest](docs/CreatePayeesRequest.md)
 - [VeloPaymentsApIs.CreatePaymentChannel](docs/CreatePaymentChannel.md)
 - [VeloPaymentsApIs.CreatePayoutRequest](docs/CreatePayoutRequest.md)
 - [VeloPaymentsApIs.FailedSubmission](docs/FailedSubmission.md)
 - [VeloPaymentsApIs.FundingAudit](docs/FundingAudit.md)
 - [VeloPaymentsApIs.FundingEvent](docs/FundingEvent.md)
 - [VeloPaymentsApIs.FundingEventType](docs/FundingEventType.md)
 - [VeloPaymentsApIs.FundingRequestV1](docs/FundingRequestV1.md)
 - [VeloPaymentsApIs.FundingRequestV2](docs/FundingRequestV2.md)
 - [VeloPaymentsApIs.FxSummaryV3](docs/FxSummaryV3.md)
 - [VeloPaymentsApIs.FxSummaryV4](docs/FxSummaryV4.md)
 - [VeloPaymentsApIs.GetFundingsResponse](docs/GetFundingsResponse.md)
 - [VeloPaymentsApIs.GetFundingsResponseAllOf](docs/GetFundingsResponseAllOf.md)
 - [VeloPaymentsApIs.GetPaymentsForPayoutResponseV3](docs/GetPaymentsForPayoutResponseV3.md)
 - [VeloPaymentsApIs.GetPaymentsForPayoutResponseV3Page](docs/GetPaymentsForPayoutResponseV3Page.md)
 - [VeloPaymentsApIs.GetPaymentsForPayoutResponseV3Summary](docs/GetPaymentsForPayoutResponseV3Summary.md)
 - [VeloPaymentsApIs.GetPaymentsForPayoutResponseV4](docs/GetPaymentsForPayoutResponseV4.md)
 - [VeloPaymentsApIs.GetPaymentsForPayoutResponseV4Summary](docs/GetPaymentsForPayoutResponseV4Summary.md)
 - [VeloPaymentsApIs.GetPayoutStatistics](docs/GetPayoutStatistics.md)
 - [VeloPaymentsApIs.GetPayoutsResponseV3](docs/GetPayoutsResponseV3.md)
 - [VeloPaymentsApIs.GetPayoutsResponseV3Links](docs/GetPayoutsResponseV3Links.md)
 - [VeloPaymentsApIs.GetPayoutsResponseV3Page](docs/GetPayoutsResponseV3Page.md)
 - [VeloPaymentsApIs.GetPayoutsResponseV3Summary](docs/GetPayoutsResponseV3Summary.md)
 - [VeloPaymentsApIs.GetPayoutsResponseV4](docs/GetPayoutsResponseV4.md)
 - [VeloPaymentsApIs.Individual](docs/Individual.md)
 - [VeloPaymentsApIs.IndividualName](docs/IndividualName.md)
 - [VeloPaymentsApIs.InvitationStatus](docs/InvitationStatus.md)
 - [VeloPaymentsApIs.InvitationStatusResponse](docs/InvitationStatusResponse.md)
 - [VeloPaymentsApIs.InvitePayeeRequest](docs/InvitePayeeRequest.md)
 - [VeloPaymentsApIs.Language](docs/Language.md)
 - [VeloPaymentsApIs.ListPaymentsResponse](docs/ListPaymentsResponse.md)
 - [VeloPaymentsApIs.ListPaymentsResponsePage](docs/ListPaymentsResponsePage.md)
 - [VeloPaymentsApIs.ListPaymentsResponseSummary](docs/ListPaymentsResponseSummary.md)
 - [VeloPaymentsApIs.ListSourceAccountResponse](docs/ListSourceAccountResponse.md)
 - [VeloPaymentsApIs.ListSourceAccountResponseLinks](docs/ListSourceAccountResponseLinks.md)
 - [VeloPaymentsApIs.ListSourceAccountResponsePage](docs/ListSourceAccountResponsePage.md)
 - [VeloPaymentsApIs.ListSourceAccountResponseV2](docs/ListSourceAccountResponseV2.md)
 - [VeloPaymentsApIs.ListSourceAccountResponseV2Page](docs/ListSourceAccountResponseV2Page.md)
 - [VeloPaymentsApIs.MarketingOptIn](docs/MarketingOptIn.md)
 - [VeloPaymentsApIs.Notifications](docs/Notifications.md)
 - [VeloPaymentsApIs.OfacStatus](docs/OfacStatus.md)
 - [VeloPaymentsApIs.OnboardedStatus](docs/OnboardedStatus.md)
 - [VeloPaymentsApIs.PagedPayeeInvitationStatusResponse](docs/PagedPayeeInvitationStatusResponse.md)
 - [VeloPaymentsApIs.PagedResponse](docs/PagedResponse.md)
 - [VeloPaymentsApIs.PagedResponsePage](docs/PagedResponsePage.md)
 - [VeloPaymentsApIs.Payee](docs/Payee.md)
 - [VeloPaymentsApIs.PayeeDelta](docs/PayeeDelta.md)
 - [VeloPaymentsApIs.PayeeDeltaResponse](docs/PayeeDeltaResponse.md)
 - [VeloPaymentsApIs.PayeeDeltaResponseLinks](docs/PayeeDeltaResponseLinks.md)
 - [VeloPaymentsApIs.PayeeDeltaResponsePage](docs/PayeeDeltaResponsePage.md)
 - [VeloPaymentsApIs.PayeeInvitationStatus](docs/PayeeInvitationStatus.md)
 - [VeloPaymentsApIs.PayeeInvitationStatusResponse](docs/PayeeInvitationStatusResponse.md)
 - [VeloPaymentsApIs.PayeeResponse](docs/PayeeResponse.md)
 - [VeloPaymentsApIs.PayeeResponseLinks](docs/PayeeResponseLinks.md)
 - [VeloPaymentsApIs.PayeeResponsePage](docs/PayeeResponsePage.md)
 - [VeloPaymentsApIs.PayeeResponseSummary](docs/PayeeResponseSummary.md)
 - [VeloPaymentsApIs.PayeeType](docs/PayeeType.md)
 - [VeloPaymentsApIs.PaymentAuditCurrencyV3](docs/PaymentAuditCurrencyV3.md)
 - [VeloPaymentsApIs.PaymentAuditCurrencyV4](docs/PaymentAuditCurrencyV4.md)
 - [VeloPaymentsApIs.PaymentChannel](docs/PaymentChannel.md)
 - [VeloPaymentsApIs.PaymentChannelCountry](docs/PaymentChannelCountry.md)
 - [VeloPaymentsApIs.PaymentChannelRule](docs/PaymentChannelRule.md)
 - [VeloPaymentsApIs.PaymentChannelRulesResponse](docs/PaymentChannelRulesResponse.md)
 - [VeloPaymentsApIs.PaymentEventResponseV3](docs/PaymentEventResponseV3.md)
 - [VeloPaymentsApIs.PaymentEventResponseV4](docs/PaymentEventResponseV4.md)
 - [VeloPaymentsApIs.PaymentInstruction](docs/PaymentInstruction.md)
 - [VeloPaymentsApIs.PaymentResponseV3](docs/PaymentResponseV3.md)
 - [VeloPaymentsApIs.PaymentResponseV4](docs/PaymentResponseV4.md)
 - [VeloPaymentsApIs.PayorBrandingResponse](docs/PayorBrandingResponse.md)
 - [VeloPaymentsApIs.PayorCreateApiKeyRequest](docs/PayorCreateApiKeyRequest.md)
 - [VeloPaymentsApIs.PayorCreateApiKeyResponse](docs/PayorCreateApiKeyResponse.md)
 - [VeloPaymentsApIs.PayorCreateApplicationRequest](docs/PayorCreateApplicationRequest.md)
 - [VeloPaymentsApIs.PayorEmailOptOutRequest](docs/PayorEmailOptOutRequest.md)
 - [VeloPaymentsApIs.PayorFundingBankDetailsUpdate](docs/PayorFundingBankDetailsUpdate.md)
 - [VeloPaymentsApIs.PayorLinksResponse](docs/PayorLinksResponse.md)
 - [VeloPaymentsApIs.PayorLinksResponseLinks](docs/PayorLinksResponseLinks.md)
 - [VeloPaymentsApIs.PayorLinksResponsePayors](docs/PayorLinksResponsePayors.md)
 - [VeloPaymentsApIs.PayorLogoRequest](docs/PayorLogoRequest.md)
 - [VeloPaymentsApIs.PayorRef](docs/PayorRef.md)
 - [VeloPaymentsApIs.PayorV1](docs/PayorV1.md)
 - [VeloPaymentsApIs.PayorV2](docs/PayorV2.md)
 - [VeloPaymentsApIs.PayoutStatusV3](docs/PayoutStatusV3.md)
 - [VeloPaymentsApIs.PayoutStatusV4](docs/PayoutStatusV4.md)
 - [VeloPaymentsApIs.PayoutSummaryAuditV3](docs/PayoutSummaryAuditV3.md)
 - [VeloPaymentsApIs.PayoutSummaryAuditV4](docs/PayoutSummaryAuditV4.md)
 - [VeloPaymentsApIs.PayoutSummaryResponse](docs/PayoutSummaryResponse.md)
 - [VeloPaymentsApIs.QueryBatchResponse](docs/QueryBatchResponse.md)
 - [VeloPaymentsApIs.QuoteFxSummary](docs/QuoteFxSummary.md)
 - [VeloPaymentsApIs.QuoteResponse](docs/QuoteResponse.md)
 - [VeloPaymentsApIs.RejectedPayment](docs/RejectedPayment.md)
 - [VeloPaymentsApIs.SetNotificationsRequest](docs/SetNotificationsRequest.md)
 - [VeloPaymentsApIs.SourceAccount](docs/SourceAccount.md)
 - [VeloPaymentsApIs.SourceAccountResponse](docs/SourceAccountResponse.md)
 - [VeloPaymentsApIs.SourceAccountResponseV2](docs/SourceAccountResponseV2.md)
 - [VeloPaymentsApIs.SourceAccountSummaryV3](docs/SourceAccountSummaryV3.md)
 - [VeloPaymentsApIs.SourceAccountSummaryV4](docs/SourceAccountSummaryV4.md)
 - [VeloPaymentsApIs.SupportedCountriesResponse](docs/SupportedCountriesResponse.md)
 - [VeloPaymentsApIs.SupportedCountry](docs/SupportedCountry.md)
 - [VeloPaymentsApIs.SupportedCurrency](docs/SupportedCurrency.md)
 - [VeloPaymentsApIs.SupportedCurrencyResponse](docs/SupportedCurrencyResponse.md)


## Documentation for Authorization



### OAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  -  : Scopes not required

