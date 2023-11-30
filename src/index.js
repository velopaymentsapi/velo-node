/**
 * Velo Payments APIs
 * ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  ```   curl -X POST \\   -H \"Content-Type: application/json\" \\   -H \"Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==\" \\   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials' ```  If successful, this call will result in a **200** HTTP status code and a response body such as:  ```   {     \"access_token\":\"19f6bafd-93fd-4747-b229-00507bbc991f\",     \"token_type\":\"bearer\",     \"expires_in\":1799,     \"scope\":\"...\"   } ``` ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  ```   -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \" ```  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response.   ## Http Status Codes Following is a list of Http Status codes that could be returned by the platform      | Status Code            | Description                                                                          |     | -----------------------| -------------------------------------------------------------------------------------|     | 200 OK                 | The request was successfully processed and usually returns a json response           |     | 201 Created            | A resource was created and a Location header is returned linking to the new resource |     | 202 Accepted           | The request has been accepted for processing                                         |     | 204 No Content         | The request has been processed and there is no response (usually deletes and updates)|     | 400 Bad Request        | The request is invalid and should be fixed before retrying                           |     | 401 Unauthorized       | Authentication has failed, usually means the token has expired                       |     | 403 Forbidden          | The user does not have permissions for the request                                   |     | 404 Not Found          | The resource was not found                                                           |     | 409 Conflict           | The resource already exists and there is a conflict                                  |     | 429 Too Many Requests  | The user has submitted too many requests in a given amount of time                   |     | 5xx Server Error       | Platform internal error (should rarely happen)                                       | 
 *
 * The version of the OpenAPI document: 2.37.150
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AcceptedPaymentV3 from './model/AcceptedPaymentV3';
import AccessTokenResponse from './model/AccessTokenResponse';
import AccessTokenValidationRequest from './model/AccessTokenValidationRequest';
import AddressV4 from './model/AddressV4';
import AuthResponse from './model/AuthResponse';
import AutoTopUpConfigV2 from './model/AutoTopUpConfigV2';
import AutoTopUpConfigV3 from './model/AutoTopUpConfigV3';
import Category from './model/Category';
import ChallengeV3 from './model/ChallengeV3';
import ChallengeV4 from './model/ChallengeV4';
import CommonLinkObject from './model/CommonLinkObject';
import CommonPageObject from './model/CommonPageObject';
import CompanyV3 from './model/CompanyV3';
import CompanyV4 from './model/CompanyV4';
import CreateFundingAccountRequestV2 from './model/CreateFundingAccountRequestV2';
import CreateIndividualV3 from './model/CreateIndividualV3';
import CreateIndividualV3Name from './model/CreateIndividualV3Name';
import CreateIndividualV4 from './model/CreateIndividualV4';
import CreatePayeeAddressV3 from './model/CreatePayeeAddressV3';
import CreatePayeeAddressV4 from './model/CreatePayeeAddressV4';
import CreatePayeeV3 from './model/CreatePayeeV3';
import CreatePayeeV3Request from './model/CreatePayeeV3Request';
import CreatePayeeV4 from './model/CreatePayeeV4';
import CreatePayeesCSVRequestV3 from './model/CreatePayeesCSVRequestV3';
import CreatePayeesCSVRequestV4 from './model/CreatePayeesCSVRequestV4';
import CreatePayeesCSVResponseV3 from './model/CreatePayeesCSVResponseV3';
import CreatePayeesCSVResponseV3RejectedCsvRows from './model/CreatePayeesCSVResponseV3RejectedCsvRows';
import CreatePayeesCSVResponseV4 from './model/CreatePayeesCSVResponseV4';
import CreatePayeesRequestV3 from './model/CreatePayeesRequestV3';
import CreatePayeesRequestV4 from './model/CreatePayeesRequestV4';
import CreatePaymentChannelRequestV4 from './model/CreatePaymentChannelRequestV4';
import CreatePaymentChannelV3 from './model/CreatePaymentChannelV3';
import CreatePaymentChannelV4 from './model/CreatePaymentChannelV4';
import CreatePayorLinkRequest from './model/CreatePayorLinkRequest';
import CreatePayoutRequestV3 from './model/CreatePayoutRequestV3';
import CreateTransactionRequest from './model/CreateTransactionRequest';
import CreateTransactionResponse from './model/CreateTransactionResponse';
import CreateWebhookRequest from './model/CreateWebhookRequest';
import DebitEvent from './model/DebitEvent';
import DebitEventAllOf from './model/DebitEventAllOf';
import DebitStatusChanged from './model/DebitStatusChanged';
import DebitStatusChangedAllOf from './model/DebitStatusChangedAllOf';
import Error from './model/Error';
import ErrorData from './model/ErrorData';
import ErrorResponse from './model/ErrorResponse';
import FailedPayeeV3 from './model/FailedPayeeV3';
import FailedPayeeV4 from './model/FailedPayeeV4';
import FailedSubmissionV3 from './model/FailedSubmissionV3';
import FailedSubmissionV4 from './model/FailedSubmissionV4';
import FundingAccountResponseV2 from './model/FundingAccountResponseV2';
import FundingAudit from './model/FundingAudit';
import FundingEvent from './model/FundingEvent';
import FundingEvent2 from './model/FundingEvent2';
import FundingPayorStatusAuditResponse from './model/FundingPayorStatusAuditResponse';
import FundingRequestV2 from './model/FundingRequestV2';
import FundingRequestV3 from './model/FundingRequestV3';
import FundingResponse from './model/FundingResponse';
import FxSummary from './model/FxSummary';
import FxSummaryV3 from './model/FxSummaryV3';
import GetFundingsResponse from './model/GetFundingsResponse';
import GetFundingsResponseLinks from './model/GetFundingsResponseLinks';
import GetPayeeListResponseCompanyV3 from './model/GetPayeeListResponseCompanyV3';
import GetPayeeListResponseCompanyV4 from './model/GetPayeeListResponseCompanyV4';
import GetPayeeListResponseIndividualV3 from './model/GetPayeeListResponseIndividualV3';
import GetPayeeListResponseIndividualV4 from './model/GetPayeeListResponseIndividualV4';
import GetPayeeListResponseV3 from './model/GetPayeeListResponseV3';
import GetPayeeListResponseV4 from './model/GetPayeeListResponseV4';
import GetPaymentsForPayoutResponseV3 from './model/GetPaymentsForPayoutResponseV3';
import GetPaymentsForPayoutResponseV3Page from './model/GetPaymentsForPayoutResponseV3Page';
import GetPaymentsForPayoutResponseV3Summary from './model/GetPaymentsForPayoutResponseV3Summary';
import GetPaymentsForPayoutResponseV4 from './model/GetPaymentsForPayoutResponseV4';
import GetPaymentsForPayoutResponseV4Summary from './model/GetPaymentsForPayoutResponseV4Summary';
import GetPayoutStatistics from './model/GetPayoutStatistics';
import GetPayoutsResponse from './model/GetPayoutsResponse';
import GetPayoutsResponseV3 from './model/GetPayoutsResponseV3';
import GetPayoutsResponseV3Links from './model/GetPayoutsResponseV3Links';
import GetPayoutsResponseV3Page from './model/GetPayoutsResponseV3Page';
import IndividualV3 from './model/IndividualV3';
import IndividualV3Name from './model/IndividualV3Name';
import IndividualV4 from './model/IndividualV4';
import InlineResponse400 from './model/InlineResponse400';
import InlineResponse401 from './model/InlineResponse401';
import InlineResponse403 from './model/InlineResponse403';
import InlineResponse404 from './model/InlineResponse404';
import InlineResponse409 from './model/InlineResponse409';
import InlineResponse412 from './model/InlineResponse412';
import InstructPayoutRequestV3 from './model/InstructPayoutRequestV3';
import InvitePayeeRequestV3 from './model/InvitePayeeRequestV3';
import InvitePayeeRequestV4 from './model/InvitePayeeRequestV4';
import InviteUserRequest from './model/InviteUserRequest';
import LinkForResponse from './model/LinkForResponse';
import ListFundingAccountsResponseV2 from './model/ListFundingAccountsResponseV2';
import ListFundingAccountsResponseV2Page from './model/ListFundingAccountsResponseV2Page';
import ListPaymentsResponseV3 from './model/ListPaymentsResponseV3';
import ListPaymentsResponseV3Page from './model/ListPaymentsResponseV3Page';
import ListPaymentsResponseV4 from './model/ListPaymentsResponseV4';
import ListSourceAccountResponseV2 from './model/ListSourceAccountResponseV2';
import ListSourceAccountResponseV2Links from './model/ListSourceAccountResponseV2Links';
import ListSourceAccountResponseV3 from './model/ListSourceAccountResponseV3';
import ListSourceAccountResponseV3Links from './model/ListSourceAccountResponseV3Links';
import LocalisationDetails from './model/LocalisationDetails';
import MFADetails from './model/MFADetails';
import MFAType from './model/MFAType';
import NameV3 from './model/NameV3';
import NameV4 from './model/NameV4';
import Notification from './model/Notification';
import NotificationSource from './model/NotificationSource';
import NotificationsV2 from './model/NotificationsV2';
import NotificationsV3 from './model/NotificationsV3';
import OnboardingStatusChanged from './model/OnboardingStatusChanged';
import PageForResponse from './model/PageForResponse';
import PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse from './model/PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse';
import PageResourceTransactions from './model/PageResourceTransactions';
import PagedPayeeInvitationStatusResponseV3 from './model/PagedPayeeInvitationStatusResponseV3';
import PagedPayeeInvitationStatusResponseV3Page from './model/PagedPayeeInvitationStatusResponseV3Page';
import PagedPayeeInvitationStatusResponseV4 from './model/PagedPayeeInvitationStatusResponseV4';
import PagedPayeeResponseV3 from './model/PagedPayeeResponseV3';
import PagedPayeeResponseV3Links from './model/PagedPayeeResponseV3Links';
import PagedPayeeResponseV3Page from './model/PagedPayeeResponseV3Page';
import PagedPayeeResponseV3Summary from './model/PagedPayeeResponseV3Summary';
import PagedPayeeResponseV4 from './model/PagedPayeeResponseV4';
import PagedPaymentsResponseV3 from './model/PagedPaymentsResponseV3';
import PagedUserResponse from './model/PagedUserResponse';
import PagedUserResponseLinks from './model/PagedUserResponseLinks';
import PagedUserResponsePage from './model/PagedUserResponsePage';
import PasswordRequest from './model/PasswordRequest';
import PayableIssueV3 from './model/PayableIssueV3';
import PayableIssueV4 from './model/PayableIssueV4';
import PayableStatusChanged from './model/PayableStatusChanged';
import PayeeAddressV3 from './model/PayeeAddressV3';
import PayeeAddressV4 from './model/PayeeAddressV4';
import PayeeDeltaResponseV3 from './model/PayeeDeltaResponseV3';
import PayeeDeltaResponseV3Links from './model/PayeeDeltaResponseV3Links';
import PayeeDeltaResponseV3Page from './model/PayeeDeltaResponseV3Page';
import PayeeDeltaResponseV4 from './model/PayeeDeltaResponseV4';
import PayeeDeltaResponseV4Links from './model/PayeeDeltaResponseV4Links';
import PayeeDeltaV3 from './model/PayeeDeltaV3';
import PayeeDeltaV4 from './model/PayeeDeltaV4';
import PayeeDetailResponseV3 from './model/PayeeDetailResponseV3';
import PayeeDetailResponseV4 from './model/PayeeDetailResponseV4';
import PayeeDetailsChanged from './model/PayeeDetailsChanged';
import PayeeEvent from './model/PayeeEvent';
import PayeeEventAllOf from './model/PayeeEventAllOf';
import PayeeEventAllOfReasons from './model/PayeeEventAllOfReasons';
import PayeeInvitationStatusResponseV3 from './model/PayeeInvitationStatusResponseV3';
import PayeeInvitationStatusResponseV4 from './model/PayeeInvitationStatusResponseV4';
import PayeePayorRefV3 from './model/PayeePayorRefV3';
import PayeePayorRefV4 from './model/PayeePayorRefV4';
import PayeeType from './model/PayeeType';
import PayeeTypeEnum from './model/PayeeTypeEnum';
import PayeeUserSelfUpdateRequest from './model/PayeeUserSelfUpdateRequest';
import PaymentChannelCountry from './model/PaymentChannelCountry';
import PaymentChannelOrderRequestV4 from './model/PaymentChannelOrderRequestV4';
import PaymentChannelResponseV4 from './model/PaymentChannelResponseV4';
import PaymentChannelRule from './model/PaymentChannelRule';
import PaymentChannelRulesResponse from './model/PaymentChannelRulesResponse';
import PaymentChannelSummaryV4 from './model/PaymentChannelSummaryV4';
import PaymentChannelsResponseV4 from './model/PaymentChannelsResponseV4';
import PaymentDelta from './model/PaymentDelta';
import PaymentDeltaResponse from './model/PaymentDeltaResponse';
import PaymentDeltaResponseV1 from './model/PaymentDeltaResponseV1';
import PaymentDeltaV1 from './model/PaymentDeltaV1';
import PaymentEvent from './model/PaymentEvent';
import PaymentEventAllOf from './model/PaymentEventAllOf';
import PaymentEventResponse from './model/PaymentEventResponse';
import PaymentEventResponseV3 from './model/PaymentEventResponseV3';
import PaymentInstructionV3 from './model/PaymentInstructionV3';
import PaymentRejectedOrReturned from './model/PaymentRejectedOrReturned';
import PaymentRejectedOrReturnedAllOf from './model/PaymentRejectedOrReturnedAllOf';
import PaymentResponseV3 from './model/PaymentResponseV3';
import PaymentResponseV4 from './model/PaymentResponseV4';
import PaymentResponseV4Payout from './model/PaymentResponseV4Payout';
import PaymentStatusChanged from './model/PaymentStatusChanged';
import PaymentStatusChangedAllOf from './model/PaymentStatusChangedAllOf';
import PaymentV3 from './model/PaymentV3';
import PayorAddressV2 from './model/PayorAddressV2';
import PayorAmlTransaction from './model/PayorAmlTransaction';
import PayorAmlTransactionV3 from './model/PayorAmlTransactionV3';
import PayorBrandingResponse from './model/PayorBrandingResponse';
import PayorCreateApiKeyRequest from './model/PayorCreateApiKeyRequest';
import PayorCreateApiKeyResponse from './model/PayorCreateApiKeyResponse';
import PayorCreateApplicationRequest from './model/PayorCreateApplicationRequest';
import PayorEmailOptOutRequest from './model/PayorEmailOptOutRequest';
import PayorFundingDetected from './model/PayorFundingDetected';
import PayorFundingDetectedAllOf from './model/PayorFundingDetectedAllOf';
import PayorLinksResponse from './model/PayorLinksResponse';
import PayorLinksResponseLinks from './model/PayorLinksResponseLinks';
import PayorLinksResponsePayors from './model/PayorLinksResponsePayors';
import PayorLogoRequest from './model/PayorLogoRequest';
import PayorToPaymentChannelMappingV4 from './model/PayorToPaymentChannelMappingV4';
import PayorV2 from './model/PayorV2';
import PayoutCompanyV3 from './model/PayoutCompanyV3';
import PayoutIndividualV3 from './model/PayoutIndividualV3';
import PayoutNameV3 from './model/PayoutNameV3';
import PayoutPayeeV3 from './model/PayoutPayeeV3';
import PayoutPayor from './model/PayoutPayor';
import PayoutPayorIds from './model/PayoutPayorIds';
import PayoutPrincipal from './model/PayoutPrincipal';
import PayoutSchedule from './model/PayoutSchedule';
import PayoutScheduleV3 from './model/PayoutScheduleV3';
import PayoutSummaryAudit from './model/PayoutSummaryAudit';
import PayoutSummaryAuditV3 from './model/PayoutSummaryAuditV3';
import PayoutSummaryResponseV3 from './model/PayoutSummaryResponseV3';
import Ping from './model/Ping';
import PingResponse from './model/PingResponse';
import PostInstructFxInfo from './model/PostInstructFxInfo';
import QueryBatchResponseV3 from './model/QueryBatchResponseV3';
import QueryBatchResponseV4 from './model/QueryBatchResponseV4';
import QuoteFxSummaryV3 from './model/QuoteFxSummaryV3';
import QuoteResponseV3 from './model/QuoteResponseV3';
import RegionV2 from './model/RegionV2';
import RegisterSmsRequest from './model/RegisterSmsRequest';
import RejectedPaymentV3 from './model/RejectedPaymentV3';
import ResendTokenRequest from './model/ResendTokenRequest';
import ResetPasswordRequest from './model/ResetPasswordRequest';
import Role from './model/Role';
import RoleUpdateRequest from './model/RoleUpdateRequest';
import SchedulePayoutRequestV3 from './model/SchedulePayoutRequestV3';
import SelfMFATypeUnregisterRequest from './model/SelfMFATypeUnregisterRequest';
import SelfUpdatePasswordRequest from './model/SelfUpdatePasswordRequest';
import SetNotificationsRequest from './model/SetNotificationsRequest';
import SetNotificationsRequest2 from './model/SetNotificationsRequest2';
import SourceAccountResponseV2 from './model/SourceAccountResponseV2';
import SourceAccountResponseV3 from './model/SourceAccountResponseV3';
import SourceAccountSummary from './model/SourceAccountSummary';
import SourceAccountSummaryV3 from './model/SourceAccountSummaryV3';
import SourceAccountV3 from './model/SourceAccountV3';
import SourceEvent from './model/SourceEvent';
import SubmitPayoutV3Request from './model/SubmitPayoutV3Request';
import SupportedCountriesResponse from './model/SupportedCountriesResponse';
import SupportedCountriesResponseV2 from './model/SupportedCountriesResponseV2';
import SupportedCountry from './model/SupportedCountry';
import SupportedCountryV2 from './model/SupportedCountryV2';
import SupportedCurrencyResponseV2 from './model/SupportedCurrencyResponseV2';
import SupportedCurrencyV2 from './model/SupportedCurrencyV2';
import TransactionResponse from './model/TransactionResponse';
import TransferRequestV2 from './model/TransferRequestV2';
import TransferRequestV3 from './model/TransferRequestV3';
import UnregisterMFARequest from './model/UnregisterMFARequest';
import UpdatePayeeDetailsRequestV3 from './model/UpdatePayeeDetailsRequestV3';
import UpdatePayeeDetailsRequestV4 from './model/UpdatePayeeDetailsRequestV4';
import UpdatePaymentChannelRequestV4 from './model/UpdatePaymentChannelRequestV4';
import UpdateRemoteIdRequestV3 from './model/UpdateRemoteIdRequestV3';
import UpdateRemoteIdRequestV4 from './model/UpdateRemoteIdRequestV4';
import UpdateWebhookRequest from './model/UpdateWebhookRequest';
import UserDetailsUpdateRequest from './model/UserDetailsUpdateRequest';
import UserInfo from './model/UserInfo';
import UserResponse from './model/UserResponse';
import UserStatus from './model/UserStatus';
import UserType from './model/UserType';
import UserType2 from './model/UserType2';
import V4CreatePayeeRequest from './model/V4CreatePayeeRequest';
import ValidatePasswordResponse from './model/ValidatePasswordResponse';
import WebhookResponse from './model/WebhookResponse';
import WebhooksResponse from './model/WebhooksResponse';
import WithdrawPaymentRequest from './model/WithdrawPaymentRequest';
import CountriesApi from './api/CountriesApi';
import CurrenciesApi from './api/CurrenciesApi';
import FundingApi from './api/FundingApi';
import FundingManagerPrivateApi from './api/FundingManagerPrivateApi';
import LoginApi from './api/LoginApi';
import PayeeInvitationApi from './api/PayeeInvitationApi';
import PayeePaymentChannelsApi from './api/PayeePaymentChannelsApi';
import PayeesApi from './api/PayeesApi';
import PaymentAuditServiceApi from './api/PaymentAuditServiceApi';
import PaymentAuditServiceDeprecatedApi from './api/PaymentAuditServiceDeprecatedApi';
import PayorHierarchyApi from './api/PayorHierarchyApi';
import PayorsApi from './api/PayorsApi';
import PayorsPrivateApi from './api/PayorsPrivateApi';
import PayoutsApi from './api/PayoutsApi';
import SourceAccountsApi from './api/SourceAccountsApi';
import TokensApi from './api/TokensApi';
import TransactionsApi from './api/TransactionsApi';
import UsersApi from './api/UsersApi';
import WebhooksApi from './api/WebhooksApi';


/**
* ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ&#x3D;&#x3D;  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ&#x3D;&#x3D;  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  &#x60;&#x60;&#x60;   curl -X POST \\   -H \&quot;Content-Type: application/json\&quot; \\   -H \&quot;Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ&#x3D;&#x3D;\&quot; \\   &#39;https://api.sandbox.velopayments.com/v1/authenticate?grant_type&#x3D;client_credentials&#39; &#x60;&#x60;&#x60;  If successful, this call will result in a **200** HTTP status code and a response body such as:  &#x60;&#x60;&#x60;   {     \&quot;access_token\&quot;:\&quot;19f6bafd-93fd-4747-b229-00507bbc991f\&quot;,     \&quot;token_type\&quot;:\&quot;bearer\&quot;,     \&quot;expires_in\&quot;:1799,     \&quot;scope\&quot;:\&quot;...\&quot;   } &#x60;&#x60;&#x60; ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  &#x60;&#x60;&#x60;   -H \&quot;Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \&quot; &#x60;&#x60;&#x60;  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response.   ## Http Status Codes Following is a list of Http Status codes that could be returned by the platform      | Status Code            | Description                                                                          |     | -----------------------| -------------------------------------------------------------------------------------|     | 200 OK                 | The request was successfully processed and usually returns a json response           |     | 201 Created            | A resource was created and a Location header is returned linking to the new resource |     | 202 Accepted           | The request has been accepted for processing                                         |     | 204 No Content         | The request has been processed and there is no response (usually deletes and updates)|     | 400 Bad Request        | The request is invalid and should be fixed before retrying                           |     | 401 Unauthorized       | Authentication has failed, usually means the token has expired                       |     | 403 Forbidden          | The user does not have permissions for the request                                   |     | 404 Not Found          | The resource was not found                                                           |     | 409 Conflict           | The resource already exists and there is a conflict                                  |     | 429 Too Many Requests  | The user has submitted too many requests in a given amount of time                   |     | 5xx Server Error       | Platform internal error (should rarely happen)                                       | .<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var VeloPayments = require('index'); // See note below*.
* var xxxSvc = new VeloPayments.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new VeloPayments.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new VeloPayments.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new VeloPayments.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.37.150-beta.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AcceptedPaymentV3 model constructor.
     * @property {module:model/AcceptedPaymentV3}
     */
    AcceptedPaymentV3,

    /**
     * The AccessTokenResponse model constructor.
     * @property {module:model/AccessTokenResponse}
     */
    AccessTokenResponse,

    /**
     * The AccessTokenValidationRequest model constructor.
     * @property {module:model/AccessTokenValidationRequest}
     */
    AccessTokenValidationRequest,

    /**
     * The AddressV4 model constructor.
     * @property {module:model/AddressV4}
     */
    AddressV4,

    /**
     * The AuthResponse model constructor.
     * @property {module:model/AuthResponse}
     */
    AuthResponse,

    /**
     * The AutoTopUpConfigV2 model constructor.
     * @property {module:model/AutoTopUpConfigV2}
     */
    AutoTopUpConfigV2,

    /**
     * The AutoTopUpConfigV3 model constructor.
     * @property {module:model/AutoTopUpConfigV3}
     */
    AutoTopUpConfigV3,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The ChallengeV3 model constructor.
     * @property {module:model/ChallengeV3}
     */
    ChallengeV3,

    /**
     * The ChallengeV4 model constructor.
     * @property {module:model/ChallengeV4}
     */
    ChallengeV4,

    /**
     * The CommonLinkObject model constructor.
     * @property {module:model/CommonLinkObject}
     */
    CommonLinkObject,

    /**
     * The CommonPageObject model constructor.
     * @property {module:model/CommonPageObject}
     */
    CommonPageObject,

    /**
     * The CompanyV3 model constructor.
     * @property {module:model/CompanyV3}
     */
    CompanyV3,

    /**
     * The CompanyV4 model constructor.
     * @property {module:model/CompanyV4}
     */
    CompanyV4,

    /**
     * The CreateFundingAccountRequestV2 model constructor.
     * @property {module:model/CreateFundingAccountRequestV2}
     */
    CreateFundingAccountRequestV2,

    /**
     * The CreateIndividualV3 model constructor.
     * @property {module:model/CreateIndividualV3}
     */
    CreateIndividualV3,

    /**
     * The CreateIndividualV3Name model constructor.
     * @property {module:model/CreateIndividualV3Name}
     */
    CreateIndividualV3Name,

    /**
     * The CreateIndividualV4 model constructor.
     * @property {module:model/CreateIndividualV4}
     */
    CreateIndividualV4,

    /**
     * The CreatePayeeAddressV3 model constructor.
     * @property {module:model/CreatePayeeAddressV3}
     */
    CreatePayeeAddressV3,

    /**
     * The CreatePayeeAddressV4 model constructor.
     * @property {module:model/CreatePayeeAddressV4}
     */
    CreatePayeeAddressV4,

    /**
     * The CreatePayeeV3 model constructor.
     * @property {module:model/CreatePayeeV3}
     */
    CreatePayeeV3,

    /**
     * The CreatePayeeV3Request model constructor.
     * @property {module:model/CreatePayeeV3Request}
     */
    CreatePayeeV3Request,

    /**
     * The CreatePayeeV4 model constructor.
     * @property {module:model/CreatePayeeV4}
     */
    CreatePayeeV4,

    /**
     * The CreatePayeesCSVRequestV3 model constructor.
     * @property {module:model/CreatePayeesCSVRequestV3}
     */
    CreatePayeesCSVRequestV3,

    /**
     * The CreatePayeesCSVRequestV4 model constructor.
     * @property {module:model/CreatePayeesCSVRequestV4}
     */
    CreatePayeesCSVRequestV4,

    /**
     * The CreatePayeesCSVResponseV3 model constructor.
     * @property {module:model/CreatePayeesCSVResponseV3}
     */
    CreatePayeesCSVResponseV3,

    /**
     * The CreatePayeesCSVResponseV3RejectedCsvRows model constructor.
     * @property {module:model/CreatePayeesCSVResponseV3RejectedCsvRows}
     */
    CreatePayeesCSVResponseV3RejectedCsvRows,

    /**
     * The CreatePayeesCSVResponseV4 model constructor.
     * @property {module:model/CreatePayeesCSVResponseV4}
     */
    CreatePayeesCSVResponseV4,

    /**
     * The CreatePayeesRequestV3 model constructor.
     * @property {module:model/CreatePayeesRequestV3}
     */
    CreatePayeesRequestV3,

    /**
     * The CreatePayeesRequestV4 model constructor.
     * @property {module:model/CreatePayeesRequestV4}
     */
    CreatePayeesRequestV4,

    /**
     * The CreatePaymentChannelRequestV4 model constructor.
     * @property {module:model/CreatePaymentChannelRequestV4}
     */
    CreatePaymentChannelRequestV4,

    /**
     * The CreatePaymentChannelV3 model constructor.
     * @property {module:model/CreatePaymentChannelV3}
     */
    CreatePaymentChannelV3,

    /**
     * The CreatePaymentChannelV4 model constructor.
     * @property {module:model/CreatePaymentChannelV4}
     */
    CreatePaymentChannelV4,

    /**
     * The CreatePayorLinkRequest model constructor.
     * @property {module:model/CreatePayorLinkRequest}
     */
    CreatePayorLinkRequest,

    /**
     * The CreatePayoutRequestV3 model constructor.
     * @property {module:model/CreatePayoutRequestV3}
     */
    CreatePayoutRequestV3,

    /**
     * The CreateTransactionRequest model constructor.
     * @property {module:model/CreateTransactionRequest}
     */
    CreateTransactionRequest,

    /**
     * The CreateTransactionResponse model constructor.
     * @property {module:model/CreateTransactionResponse}
     */
    CreateTransactionResponse,

    /**
     * The CreateWebhookRequest model constructor.
     * @property {module:model/CreateWebhookRequest}
     */
    CreateWebhookRequest,

    /**
     * The DebitEvent model constructor.
     * @property {module:model/DebitEvent}
     */
    DebitEvent,

    /**
     * The DebitEventAllOf model constructor.
     * @property {module:model/DebitEventAllOf}
     */
    DebitEventAllOf,

    /**
     * The DebitStatusChanged model constructor.
     * @property {module:model/DebitStatusChanged}
     */
    DebitStatusChanged,

    /**
     * The DebitStatusChangedAllOf model constructor.
     * @property {module:model/DebitStatusChangedAllOf}
     */
    DebitStatusChangedAllOf,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The ErrorData model constructor.
     * @property {module:model/ErrorData}
     */
    ErrorData,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The FailedPayeeV3 model constructor.
     * @property {module:model/FailedPayeeV3}
     */
    FailedPayeeV3,

    /**
     * The FailedPayeeV4 model constructor.
     * @property {module:model/FailedPayeeV4}
     */
    FailedPayeeV4,

    /**
     * The FailedSubmissionV3 model constructor.
     * @property {module:model/FailedSubmissionV3}
     */
    FailedSubmissionV3,

    /**
     * The FailedSubmissionV4 model constructor.
     * @property {module:model/FailedSubmissionV4}
     */
    FailedSubmissionV4,

    /**
     * The FundingAccountResponseV2 model constructor.
     * @property {module:model/FundingAccountResponseV2}
     */
    FundingAccountResponseV2,

    /**
     * The FundingAudit model constructor.
     * @property {module:model/FundingAudit}
     */
    FundingAudit,

    /**
     * The FundingEvent model constructor.
     * @property {module:model/FundingEvent}
     */
    FundingEvent,

    /**
     * The FundingEvent2 model constructor.
     * @property {module:model/FundingEvent2}
     */
    FundingEvent2,

    /**
     * The FundingPayorStatusAuditResponse model constructor.
     * @property {module:model/FundingPayorStatusAuditResponse}
     */
    FundingPayorStatusAuditResponse,

    /**
     * The FundingRequestV2 model constructor.
     * @property {module:model/FundingRequestV2}
     */
    FundingRequestV2,

    /**
     * The FundingRequestV3 model constructor.
     * @property {module:model/FundingRequestV3}
     */
    FundingRequestV3,

    /**
     * The FundingResponse model constructor.
     * @property {module:model/FundingResponse}
     */
    FundingResponse,

    /**
     * The FxSummary model constructor.
     * @property {module:model/FxSummary}
     */
    FxSummary,

    /**
     * The FxSummaryV3 model constructor.
     * @property {module:model/FxSummaryV3}
     */
    FxSummaryV3,

    /**
     * The GetFundingsResponse model constructor.
     * @property {module:model/GetFundingsResponse}
     */
    GetFundingsResponse,

    /**
     * The GetFundingsResponseLinks model constructor.
     * @property {module:model/GetFundingsResponseLinks}
     */
    GetFundingsResponseLinks,

    /**
     * The GetPayeeListResponseCompanyV3 model constructor.
     * @property {module:model/GetPayeeListResponseCompanyV3}
     */
    GetPayeeListResponseCompanyV3,

    /**
     * The GetPayeeListResponseCompanyV4 model constructor.
     * @property {module:model/GetPayeeListResponseCompanyV4}
     */
    GetPayeeListResponseCompanyV4,

    /**
     * The GetPayeeListResponseIndividualV3 model constructor.
     * @property {module:model/GetPayeeListResponseIndividualV3}
     */
    GetPayeeListResponseIndividualV3,

    /**
     * The GetPayeeListResponseIndividualV4 model constructor.
     * @property {module:model/GetPayeeListResponseIndividualV4}
     */
    GetPayeeListResponseIndividualV4,

    /**
     * The GetPayeeListResponseV3 model constructor.
     * @property {module:model/GetPayeeListResponseV3}
     */
    GetPayeeListResponseV3,

    /**
     * The GetPayeeListResponseV4 model constructor.
     * @property {module:model/GetPayeeListResponseV4}
     */
    GetPayeeListResponseV4,

    /**
     * The GetPaymentsForPayoutResponseV3 model constructor.
     * @property {module:model/GetPaymentsForPayoutResponseV3}
     */
    GetPaymentsForPayoutResponseV3,

    /**
     * The GetPaymentsForPayoutResponseV3Page model constructor.
     * @property {module:model/GetPaymentsForPayoutResponseV3Page}
     */
    GetPaymentsForPayoutResponseV3Page,

    /**
     * The GetPaymentsForPayoutResponseV3Summary model constructor.
     * @property {module:model/GetPaymentsForPayoutResponseV3Summary}
     */
    GetPaymentsForPayoutResponseV3Summary,

    /**
     * The GetPaymentsForPayoutResponseV4 model constructor.
     * @property {module:model/GetPaymentsForPayoutResponseV4}
     */
    GetPaymentsForPayoutResponseV4,

    /**
     * The GetPaymentsForPayoutResponseV4Summary model constructor.
     * @property {module:model/GetPaymentsForPayoutResponseV4Summary}
     */
    GetPaymentsForPayoutResponseV4Summary,

    /**
     * The GetPayoutStatistics model constructor.
     * @property {module:model/GetPayoutStatistics}
     */
    GetPayoutStatistics,

    /**
     * The GetPayoutsResponse model constructor.
     * @property {module:model/GetPayoutsResponse}
     */
    GetPayoutsResponse,

    /**
     * The GetPayoutsResponseV3 model constructor.
     * @property {module:model/GetPayoutsResponseV3}
     */
    GetPayoutsResponseV3,

    /**
     * The GetPayoutsResponseV3Links model constructor.
     * @property {module:model/GetPayoutsResponseV3Links}
     */
    GetPayoutsResponseV3Links,

    /**
     * The GetPayoutsResponseV3Page model constructor.
     * @property {module:model/GetPayoutsResponseV3Page}
     */
    GetPayoutsResponseV3Page,

    /**
     * The IndividualV3 model constructor.
     * @property {module:model/IndividualV3}
     */
    IndividualV3,

    /**
     * The IndividualV3Name model constructor.
     * @property {module:model/IndividualV3Name}
     */
    IndividualV3Name,

    /**
     * The IndividualV4 model constructor.
     * @property {module:model/IndividualV4}
     */
    IndividualV4,

    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400,

    /**
     * The InlineResponse401 model constructor.
     * @property {module:model/InlineResponse401}
     */
    InlineResponse401,

    /**
     * The InlineResponse403 model constructor.
     * @property {module:model/InlineResponse403}
     */
    InlineResponse403,

    /**
     * The InlineResponse404 model constructor.
     * @property {module:model/InlineResponse404}
     */
    InlineResponse404,

    /**
     * The InlineResponse409 model constructor.
     * @property {module:model/InlineResponse409}
     */
    InlineResponse409,

    /**
     * The InlineResponse412 model constructor.
     * @property {module:model/InlineResponse412}
     */
    InlineResponse412,

    /**
     * The InstructPayoutRequestV3 model constructor.
     * @property {module:model/InstructPayoutRequestV3}
     */
    InstructPayoutRequestV3,

    /**
     * The InvitePayeeRequestV3 model constructor.
     * @property {module:model/InvitePayeeRequestV3}
     */
    InvitePayeeRequestV3,

    /**
     * The InvitePayeeRequestV4 model constructor.
     * @property {module:model/InvitePayeeRequestV4}
     */
    InvitePayeeRequestV4,

    /**
     * The InviteUserRequest model constructor.
     * @property {module:model/InviteUserRequest}
     */
    InviteUserRequest,

    /**
     * The LinkForResponse model constructor.
     * @property {module:model/LinkForResponse}
     */
    LinkForResponse,

    /**
     * The ListFundingAccountsResponseV2 model constructor.
     * @property {module:model/ListFundingAccountsResponseV2}
     */
    ListFundingAccountsResponseV2,

    /**
     * The ListFundingAccountsResponseV2Page model constructor.
     * @property {module:model/ListFundingAccountsResponseV2Page}
     */
    ListFundingAccountsResponseV2Page,

    /**
     * The ListPaymentsResponseV3 model constructor.
     * @property {module:model/ListPaymentsResponseV3}
     */
    ListPaymentsResponseV3,

    /**
     * The ListPaymentsResponseV3Page model constructor.
     * @property {module:model/ListPaymentsResponseV3Page}
     */
    ListPaymentsResponseV3Page,

    /**
     * The ListPaymentsResponseV4 model constructor.
     * @property {module:model/ListPaymentsResponseV4}
     */
    ListPaymentsResponseV4,

    /**
     * The ListSourceAccountResponseV2 model constructor.
     * @property {module:model/ListSourceAccountResponseV2}
     */
    ListSourceAccountResponseV2,

    /**
     * The ListSourceAccountResponseV2Links model constructor.
     * @property {module:model/ListSourceAccountResponseV2Links}
     */
    ListSourceAccountResponseV2Links,

    /**
     * The ListSourceAccountResponseV3 model constructor.
     * @property {module:model/ListSourceAccountResponseV3}
     */
    ListSourceAccountResponseV3,

    /**
     * The ListSourceAccountResponseV3Links model constructor.
     * @property {module:model/ListSourceAccountResponseV3Links}
     */
    ListSourceAccountResponseV3Links,

    /**
     * The LocalisationDetails model constructor.
     * @property {module:model/LocalisationDetails}
     */
    LocalisationDetails,

    /**
     * The MFADetails model constructor.
     * @property {module:model/MFADetails}
     */
    MFADetails,

    /**
     * The MFAType model constructor.
     * @property {module:model/MFAType}
     */
    MFAType,

    /**
     * The NameV3 model constructor.
     * @property {module:model/NameV3}
     */
    NameV3,

    /**
     * The NameV4 model constructor.
     * @property {module:model/NameV4}
     */
    NameV4,

    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification,

    /**
     * The NotificationSource model constructor.
     * @property {module:model/NotificationSource}
     */
    NotificationSource,

    /**
     * The NotificationsV2 model constructor.
     * @property {module:model/NotificationsV2}
     */
    NotificationsV2,

    /**
     * The NotificationsV3 model constructor.
     * @property {module:model/NotificationsV3}
     */
    NotificationsV3,

    /**
     * The OnboardingStatusChanged model constructor.
     * @property {module:model/OnboardingStatusChanged}
     */
    OnboardingStatusChanged,

    /**
     * The PageForResponse model constructor.
     * @property {module:model/PageForResponse}
     */
    PageForResponse,

    /**
     * The PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse model constructor.
     * @property {module:model/PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse}
     */
    PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse,

    /**
     * The PageResourceTransactions model constructor.
     * @property {module:model/PageResourceTransactions}
     */
    PageResourceTransactions,

    /**
     * The PagedPayeeInvitationStatusResponseV3 model constructor.
     * @property {module:model/PagedPayeeInvitationStatusResponseV3}
     */
    PagedPayeeInvitationStatusResponseV3,

    /**
     * The PagedPayeeInvitationStatusResponseV3Page model constructor.
     * @property {module:model/PagedPayeeInvitationStatusResponseV3Page}
     */
    PagedPayeeInvitationStatusResponseV3Page,

    /**
     * The PagedPayeeInvitationStatusResponseV4 model constructor.
     * @property {module:model/PagedPayeeInvitationStatusResponseV4}
     */
    PagedPayeeInvitationStatusResponseV4,

    /**
     * The PagedPayeeResponseV3 model constructor.
     * @property {module:model/PagedPayeeResponseV3}
     */
    PagedPayeeResponseV3,

    /**
     * The PagedPayeeResponseV3Links model constructor.
     * @property {module:model/PagedPayeeResponseV3Links}
     */
    PagedPayeeResponseV3Links,

    /**
     * The PagedPayeeResponseV3Page model constructor.
     * @property {module:model/PagedPayeeResponseV3Page}
     */
    PagedPayeeResponseV3Page,

    /**
     * The PagedPayeeResponseV3Summary model constructor.
     * @property {module:model/PagedPayeeResponseV3Summary}
     */
    PagedPayeeResponseV3Summary,

    /**
     * The PagedPayeeResponseV4 model constructor.
     * @property {module:model/PagedPayeeResponseV4}
     */
    PagedPayeeResponseV4,

    /**
     * The PagedPaymentsResponseV3 model constructor.
     * @property {module:model/PagedPaymentsResponseV3}
     */
    PagedPaymentsResponseV3,

    /**
     * The PagedUserResponse model constructor.
     * @property {module:model/PagedUserResponse}
     */
    PagedUserResponse,

    /**
     * The PagedUserResponseLinks model constructor.
     * @property {module:model/PagedUserResponseLinks}
     */
    PagedUserResponseLinks,

    /**
     * The PagedUserResponsePage model constructor.
     * @property {module:model/PagedUserResponsePage}
     */
    PagedUserResponsePage,

    /**
     * The PasswordRequest model constructor.
     * @property {module:model/PasswordRequest}
     */
    PasswordRequest,

    /**
     * The PayableIssueV3 model constructor.
     * @property {module:model/PayableIssueV3}
     */
    PayableIssueV3,

    /**
     * The PayableIssueV4 model constructor.
     * @property {module:model/PayableIssueV4}
     */
    PayableIssueV4,

    /**
     * The PayableStatusChanged model constructor.
     * @property {module:model/PayableStatusChanged}
     */
    PayableStatusChanged,

    /**
     * The PayeeAddressV3 model constructor.
     * @property {module:model/PayeeAddressV3}
     */
    PayeeAddressV3,

    /**
     * The PayeeAddressV4 model constructor.
     * @property {module:model/PayeeAddressV4}
     */
    PayeeAddressV4,

    /**
     * The PayeeDeltaResponseV3 model constructor.
     * @property {module:model/PayeeDeltaResponseV3}
     */
    PayeeDeltaResponseV3,

    /**
     * The PayeeDeltaResponseV3Links model constructor.
     * @property {module:model/PayeeDeltaResponseV3Links}
     */
    PayeeDeltaResponseV3Links,

    /**
     * The PayeeDeltaResponseV3Page model constructor.
     * @property {module:model/PayeeDeltaResponseV3Page}
     */
    PayeeDeltaResponseV3Page,

    /**
     * The PayeeDeltaResponseV4 model constructor.
     * @property {module:model/PayeeDeltaResponseV4}
     */
    PayeeDeltaResponseV4,

    /**
     * The PayeeDeltaResponseV4Links model constructor.
     * @property {module:model/PayeeDeltaResponseV4Links}
     */
    PayeeDeltaResponseV4Links,

    /**
     * The PayeeDeltaV3 model constructor.
     * @property {module:model/PayeeDeltaV3}
     */
    PayeeDeltaV3,

    /**
     * The PayeeDeltaV4 model constructor.
     * @property {module:model/PayeeDeltaV4}
     */
    PayeeDeltaV4,

    /**
     * The PayeeDetailResponseV3 model constructor.
     * @property {module:model/PayeeDetailResponseV3}
     */
    PayeeDetailResponseV3,

    /**
     * The PayeeDetailResponseV4 model constructor.
     * @property {module:model/PayeeDetailResponseV4}
     */
    PayeeDetailResponseV4,

    /**
     * The PayeeDetailsChanged model constructor.
     * @property {module:model/PayeeDetailsChanged}
     */
    PayeeDetailsChanged,

    /**
     * The PayeeEvent model constructor.
     * @property {module:model/PayeeEvent}
     */
    PayeeEvent,

    /**
     * The PayeeEventAllOf model constructor.
     * @property {module:model/PayeeEventAllOf}
     */
    PayeeEventAllOf,

    /**
     * The PayeeEventAllOfReasons model constructor.
     * @property {module:model/PayeeEventAllOfReasons}
     */
    PayeeEventAllOfReasons,

    /**
     * The PayeeInvitationStatusResponseV3 model constructor.
     * @property {module:model/PayeeInvitationStatusResponseV3}
     */
    PayeeInvitationStatusResponseV3,

    /**
     * The PayeeInvitationStatusResponseV4 model constructor.
     * @property {module:model/PayeeInvitationStatusResponseV4}
     */
    PayeeInvitationStatusResponseV4,

    /**
     * The PayeePayorRefV3 model constructor.
     * @property {module:model/PayeePayorRefV3}
     */
    PayeePayorRefV3,

    /**
     * The PayeePayorRefV4 model constructor.
     * @property {module:model/PayeePayorRefV4}
     */
    PayeePayorRefV4,

    /**
     * The PayeeType model constructor.
     * @property {module:model/PayeeType}
     */
    PayeeType,

    /**
     * The PayeeTypeEnum model constructor.
     * @property {module:model/PayeeTypeEnum}
     */
    PayeeTypeEnum,

    /**
     * The PayeeUserSelfUpdateRequest model constructor.
     * @property {module:model/PayeeUserSelfUpdateRequest}
     */
    PayeeUserSelfUpdateRequest,

    /**
     * The PaymentChannelCountry model constructor.
     * @property {module:model/PaymentChannelCountry}
     */
    PaymentChannelCountry,

    /**
     * The PaymentChannelOrderRequestV4 model constructor.
     * @property {module:model/PaymentChannelOrderRequestV4}
     */
    PaymentChannelOrderRequestV4,

    /**
     * The PaymentChannelResponseV4 model constructor.
     * @property {module:model/PaymentChannelResponseV4}
     */
    PaymentChannelResponseV4,

    /**
     * The PaymentChannelRule model constructor.
     * @property {module:model/PaymentChannelRule}
     */
    PaymentChannelRule,

    /**
     * The PaymentChannelRulesResponse model constructor.
     * @property {module:model/PaymentChannelRulesResponse}
     */
    PaymentChannelRulesResponse,

    /**
     * The PaymentChannelSummaryV4 model constructor.
     * @property {module:model/PaymentChannelSummaryV4}
     */
    PaymentChannelSummaryV4,

    /**
     * The PaymentChannelsResponseV4 model constructor.
     * @property {module:model/PaymentChannelsResponseV4}
     */
    PaymentChannelsResponseV4,

    /**
     * The PaymentDelta model constructor.
     * @property {module:model/PaymentDelta}
     */
    PaymentDelta,

    /**
     * The PaymentDeltaResponse model constructor.
     * @property {module:model/PaymentDeltaResponse}
     */
    PaymentDeltaResponse,

    /**
     * The PaymentDeltaResponseV1 model constructor.
     * @property {module:model/PaymentDeltaResponseV1}
     */
    PaymentDeltaResponseV1,

    /**
     * The PaymentDeltaV1 model constructor.
     * @property {module:model/PaymentDeltaV1}
     */
    PaymentDeltaV1,

    /**
     * The PaymentEvent model constructor.
     * @property {module:model/PaymentEvent}
     */
    PaymentEvent,

    /**
     * The PaymentEventAllOf model constructor.
     * @property {module:model/PaymentEventAllOf}
     */
    PaymentEventAllOf,

    /**
     * The PaymentEventResponse model constructor.
     * @property {module:model/PaymentEventResponse}
     */
    PaymentEventResponse,

    /**
     * The PaymentEventResponseV3 model constructor.
     * @property {module:model/PaymentEventResponseV3}
     */
    PaymentEventResponseV3,

    /**
     * The PaymentInstructionV3 model constructor.
     * @property {module:model/PaymentInstructionV3}
     */
    PaymentInstructionV3,

    /**
     * The PaymentRejectedOrReturned model constructor.
     * @property {module:model/PaymentRejectedOrReturned}
     */
    PaymentRejectedOrReturned,

    /**
     * The PaymentRejectedOrReturnedAllOf model constructor.
     * @property {module:model/PaymentRejectedOrReturnedAllOf}
     */
    PaymentRejectedOrReturnedAllOf,

    /**
     * The PaymentResponseV3 model constructor.
     * @property {module:model/PaymentResponseV3}
     */
    PaymentResponseV3,

    /**
     * The PaymentResponseV4 model constructor.
     * @property {module:model/PaymentResponseV4}
     */
    PaymentResponseV4,

    /**
     * The PaymentResponseV4Payout model constructor.
     * @property {module:model/PaymentResponseV4Payout}
     */
    PaymentResponseV4Payout,

    /**
     * The PaymentStatusChanged model constructor.
     * @property {module:model/PaymentStatusChanged}
     */
    PaymentStatusChanged,

    /**
     * The PaymentStatusChangedAllOf model constructor.
     * @property {module:model/PaymentStatusChangedAllOf}
     */
    PaymentStatusChangedAllOf,

    /**
     * The PaymentV3 model constructor.
     * @property {module:model/PaymentV3}
     */
    PaymentV3,

    /**
     * The PayorAddressV2 model constructor.
     * @property {module:model/PayorAddressV2}
     */
    PayorAddressV2,

    /**
     * The PayorAmlTransaction model constructor.
     * @property {module:model/PayorAmlTransaction}
     */
    PayorAmlTransaction,

    /**
     * The PayorAmlTransactionV3 model constructor.
     * @property {module:model/PayorAmlTransactionV3}
     */
    PayorAmlTransactionV3,

    /**
     * The PayorBrandingResponse model constructor.
     * @property {module:model/PayorBrandingResponse}
     */
    PayorBrandingResponse,

    /**
     * The PayorCreateApiKeyRequest model constructor.
     * @property {module:model/PayorCreateApiKeyRequest}
     */
    PayorCreateApiKeyRequest,

    /**
     * The PayorCreateApiKeyResponse model constructor.
     * @property {module:model/PayorCreateApiKeyResponse}
     */
    PayorCreateApiKeyResponse,

    /**
     * The PayorCreateApplicationRequest model constructor.
     * @property {module:model/PayorCreateApplicationRequest}
     */
    PayorCreateApplicationRequest,

    /**
     * The PayorEmailOptOutRequest model constructor.
     * @property {module:model/PayorEmailOptOutRequest}
     */
    PayorEmailOptOutRequest,

    /**
     * The PayorFundingDetected model constructor.
     * @property {module:model/PayorFundingDetected}
     */
    PayorFundingDetected,

    /**
     * The PayorFundingDetectedAllOf model constructor.
     * @property {module:model/PayorFundingDetectedAllOf}
     */
    PayorFundingDetectedAllOf,

    /**
     * The PayorLinksResponse model constructor.
     * @property {module:model/PayorLinksResponse}
     */
    PayorLinksResponse,

    /**
     * The PayorLinksResponseLinks model constructor.
     * @property {module:model/PayorLinksResponseLinks}
     */
    PayorLinksResponseLinks,

    /**
     * The PayorLinksResponsePayors model constructor.
     * @property {module:model/PayorLinksResponsePayors}
     */
    PayorLinksResponsePayors,

    /**
     * The PayorLogoRequest model constructor.
     * @property {module:model/PayorLogoRequest}
     */
    PayorLogoRequest,

    /**
     * The PayorToPaymentChannelMappingV4 model constructor.
     * @property {module:model/PayorToPaymentChannelMappingV4}
     */
    PayorToPaymentChannelMappingV4,

    /**
     * The PayorV2 model constructor.
     * @property {module:model/PayorV2}
     */
    PayorV2,

    /**
     * The PayoutCompanyV3 model constructor.
     * @property {module:model/PayoutCompanyV3}
     */
    PayoutCompanyV3,

    /**
     * The PayoutIndividualV3 model constructor.
     * @property {module:model/PayoutIndividualV3}
     */
    PayoutIndividualV3,

    /**
     * The PayoutNameV3 model constructor.
     * @property {module:model/PayoutNameV3}
     */
    PayoutNameV3,

    /**
     * The PayoutPayeeV3 model constructor.
     * @property {module:model/PayoutPayeeV3}
     */
    PayoutPayeeV3,

    /**
     * The PayoutPayor model constructor.
     * @property {module:model/PayoutPayor}
     */
    PayoutPayor,

    /**
     * The PayoutPayorIds model constructor.
     * @property {module:model/PayoutPayorIds}
     */
    PayoutPayorIds,

    /**
     * The PayoutPrincipal model constructor.
     * @property {module:model/PayoutPrincipal}
     */
    PayoutPrincipal,

    /**
     * The PayoutSchedule model constructor.
     * @property {module:model/PayoutSchedule}
     */
    PayoutSchedule,

    /**
     * The PayoutScheduleV3 model constructor.
     * @property {module:model/PayoutScheduleV3}
     */
    PayoutScheduleV3,

    /**
     * The PayoutSummaryAudit model constructor.
     * @property {module:model/PayoutSummaryAudit}
     */
    PayoutSummaryAudit,

    /**
     * The PayoutSummaryAuditV3 model constructor.
     * @property {module:model/PayoutSummaryAuditV3}
     */
    PayoutSummaryAuditV3,

    /**
     * The PayoutSummaryResponseV3 model constructor.
     * @property {module:model/PayoutSummaryResponseV3}
     */
    PayoutSummaryResponseV3,

    /**
     * The Ping model constructor.
     * @property {module:model/Ping}
     */
    Ping,

    /**
     * The PingResponse model constructor.
     * @property {module:model/PingResponse}
     */
    PingResponse,

    /**
     * The PostInstructFxInfo model constructor.
     * @property {module:model/PostInstructFxInfo}
     */
    PostInstructFxInfo,

    /**
     * The QueryBatchResponseV3 model constructor.
     * @property {module:model/QueryBatchResponseV3}
     */
    QueryBatchResponseV3,

    /**
     * The QueryBatchResponseV4 model constructor.
     * @property {module:model/QueryBatchResponseV4}
     */
    QueryBatchResponseV4,

    /**
     * The QuoteFxSummaryV3 model constructor.
     * @property {module:model/QuoteFxSummaryV3}
     */
    QuoteFxSummaryV3,

    /**
     * The QuoteResponseV3 model constructor.
     * @property {module:model/QuoteResponseV3}
     */
    QuoteResponseV3,

    /**
     * The RegionV2 model constructor.
     * @property {module:model/RegionV2}
     */
    RegionV2,

    /**
     * The RegisterSmsRequest model constructor.
     * @property {module:model/RegisterSmsRequest}
     */
    RegisterSmsRequest,

    /**
     * The RejectedPaymentV3 model constructor.
     * @property {module:model/RejectedPaymentV3}
     */
    RejectedPaymentV3,

    /**
     * The ResendTokenRequest model constructor.
     * @property {module:model/ResendTokenRequest}
     */
    ResendTokenRequest,

    /**
     * The ResetPasswordRequest model constructor.
     * @property {module:model/ResetPasswordRequest}
     */
    ResetPasswordRequest,

    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role,

    /**
     * The RoleUpdateRequest model constructor.
     * @property {module:model/RoleUpdateRequest}
     */
    RoleUpdateRequest,

    /**
     * The SchedulePayoutRequestV3 model constructor.
     * @property {module:model/SchedulePayoutRequestV3}
     */
    SchedulePayoutRequestV3,

    /**
     * The SelfMFATypeUnregisterRequest model constructor.
     * @property {module:model/SelfMFATypeUnregisterRequest}
     */
    SelfMFATypeUnregisterRequest,

    /**
     * The SelfUpdatePasswordRequest model constructor.
     * @property {module:model/SelfUpdatePasswordRequest}
     */
    SelfUpdatePasswordRequest,

    /**
     * The SetNotificationsRequest model constructor.
     * @property {module:model/SetNotificationsRequest}
     */
    SetNotificationsRequest,

    /**
     * The SetNotificationsRequest2 model constructor.
     * @property {module:model/SetNotificationsRequest2}
     */
    SetNotificationsRequest2,

    /**
     * The SourceAccountResponseV2 model constructor.
     * @property {module:model/SourceAccountResponseV2}
     */
    SourceAccountResponseV2,

    /**
     * The SourceAccountResponseV3 model constructor.
     * @property {module:model/SourceAccountResponseV3}
     */
    SourceAccountResponseV3,

    /**
     * The SourceAccountSummary model constructor.
     * @property {module:model/SourceAccountSummary}
     */
    SourceAccountSummary,

    /**
     * The SourceAccountSummaryV3 model constructor.
     * @property {module:model/SourceAccountSummaryV3}
     */
    SourceAccountSummaryV3,

    /**
     * The SourceAccountV3 model constructor.
     * @property {module:model/SourceAccountV3}
     */
    SourceAccountV3,

    /**
     * The SourceEvent model constructor.
     * @property {module:model/SourceEvent}
     */
    SourceEvent,

    /**
     * The SubmitPayoutV3Request model constructor.
     * @property {module:model/SubmitPayoutV3Request}
     */
    SubmitPayoutV3Request,

    /**
     * The SupportedCountriesResponse model constructor.
     * @property {module:model/SupportedCountriesResponse}
     */
    SupportedCountriesResponse,

    /**
     * The SupportedCountriesResponseV2 model constructor.
     * @property {module:model/SupportedCountriesResponseV2}
     */
    SupportedCountriesResponseV2,

    /**
     * The SupportedCountry model constructor.
     * @property {module:model/SupportedCountry}
     */
    SupportedCountry,

    /**
     * The SupportedCountryV2 model constructor.
     * @property {module:model/SupportedCountryV2}
     */
    SupportedCountryV2,

    /**
     * The SupportedCurrencyResponseV2 model constructor.
     * @property {module:model/SupportedCurrencyResponseV2}
     */
    SupportedCurrencyResponseV2,

    /**
     * The SupportedCurrencyV2 model constructor.
     * @property {module:model/SupportedCurrencyV2}
     */
    SupportedCurrencyV2,

    /**
     * The TransactionResponse model constructor.
     * @property {module:model/TransactionResponse}
     */
    TransactionResponse,

    /**
     * The TransferRequestV2 model constructor.
     * @property {module:model/TransferRequestV2}
     */
    TransferRequestV2,

    /**
     * The TransferRequestV3 model constructor.
     * @property {module:model/TransferRequestV3}
     */
    TransferRequestV3,

    /**
     * The UnregisterMFARequest model constructor.
     * @property {module:model/UnregisterMFARequest}
     */
    UnregisterMFARequest,

    /**
     * The UpdatePayeeDetailsRequestV3 model constructor.
     * @property {module:model/UpdatePayeeDetailsRequestV3}
     */
    UpdatePayeeDetailsRequestV3,

    /**
     * The UpdatePayeeDetailsRequestV4 model constructor.
     * @property {module:model/UpdatePayeeDetailsRequestV4}
     */
    UpdatePayeeDetailsRequestV4,

    /**
     * The UpdatePaymentChannelRequestV4 model constructor.
     * @property {module:model/UpdatePaymentChannelRequestV4}
     */
    UpdatePaymentChannelRequestV4,

    /**
     * The UpdateRemoteIdRequestV3 model constructor.
     * @property {module:model/UpdateRemoteIdRequestV3}
     */
    UpdateRemoteIdRequestV3,

    /**
     * The UpdateRemoteIdRequestV4 model constructor.
     * @property {module:model/UpdateRemoteIdRequestV4}
     */
    UpdateRemoteIdRequestV4,

    /**
     * The UpdateWebhookRequest model constructor.
     * @property {module:model/UpdateWebhookRequest}
     */
    UpdateWebhookRequest,

    /**
     * The UserDetailsUpdateRequest model constructor.
     * @property {module:model/UserDetailsUpdateRequest}
     */
    UserDetailsUpdateRequest,

    /**
     * The UserInfo model constructor.
     * @property {module:model/UserInfo}
     */
    UserInfo,

    /**
     * The UserResponse model constructor.
     * @property {module:model/UserResponse}
     */
    UserResponse,

    /**
     * The UserStatus model constructor.
     * @property {module:model/UserStatus}
     */
    UserStatus,

    /**
     * The UserType model constructor.
     * @property {module:model/UserType}
     */
    UserType,

    /**
     * The UserType2 model constructor.
     * @property {module:model/UserType2}
     */
    UserType2,

    /**
     * The V4CreatePayeeRequest model constructor.
     * @property {module:model/V4CreatePayeeRequest}
     */
    V4CreatePayeeRequest,

    /**
     * The ValidatePasswordResponse model constructor.
     * @property {module:model/ValidatePasswordResponse}
     */
    ValidatePasswordResponse,

    /**
     * The WebhookResponse model constructor.
     * @property {module:model/WebhookResponse}
     */
    WebhookResponse,

    /**
     * The WebhooksResponse model constructor.
     * @property {module:model/WebhooksResponse}
     */
    WebhooksResponse,

    /**
     * The WithdrawPaymentRequest model constructor.
     * @property {module:model/WithdrawPaymentRequest}
     */
    WithdrawPaymentRequest,

    /**
    * The CountriesApi service constructor.
    * @property {module:api/CountriesApi}
    */
    CountriesApi,

    /**
    * The CurrenciesApi service constructor.
    * @property {module:api/CurrenciesApi}
    */
    CurrenciesApi,

    /**
    * The FundingApi service constructor.
    * @property {module:api/FundingApi}
    */
    FundingApi,

    /**
    * The FundingManagerPrivateApi service constructor.
    * @property {module:api/FundingManagerPrivateApi}
    */
    FundingManagerPrivateApi,

    /**
    * The LoginApi service constructor.
    * @property {module:api/LoginApi}
    */
    LoginApi,

    /**
    * The PayeeInvitationApi service constructor.
    * @property {module:api/PayeeInvitationApi}
    */
    PayeeInvitationApi,

    /**
    * The PayeePaymentChannelsApi service constructor.
    * @property {module:api/PayeePaymentChannelsApi}
    */
    PayeePaymentChannelsApi,

    /**
    * The PayeesApi service constructor.
    * @property {module:api/PayeesApi}
    */
    PayeesApi,

    /**
    * The PaymentAuditServiceApi service constructor.
    * @property {module:api/PaymentAuditServiceApi}
    */
    PaymentAuditServiceApi,

    /**
    * The PaymentAuditServiceDeprecatedApi service constructor.
    * @property {module:api/PaymentAuditServiceDeprecatedApi}
    */
    PaymentAuditServiceDeprecatedApi,

    /**
    * The PayorHierarchyApi service constructor.
    * @property {module:api/PayorHierarchyApi}
    */
    PayorHierarchyApi,

    /**
    * The PayorsApi service constructor.
    * @property {module:api/PayorsApi}
    */
    PayorsApi,

    /**
    * The PayorsPrivateApi service constructor.
    * @property {module:api/PayorsPrivateApi}
    */
    PayorsPrivateApi,

    /**
    * The PayoutsApi service constructor.
    * @property {module:api/PayoutsApi}
    */
    PayoutsApi,

    /**
    * The SourceAccountsApi service constructor.
    * @property {module:api/SourceAccountsApi}
    */
    SourceAccountsApi,

    /**
    * The TokensApi service constructor.
    * @property {module:api/TokensApi}
    */
    TokensApi,

    /**
    * The TransactionsApi service constructor.
    * @property {module:api/TransactionsApi}
    */
    TransactionsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The WebhooksApi service constructor.
    * @property {module:api/WebhooksApi}
    */
    WebhooksApi
};
