/**
 * Velo Payments APIs
 * ## Terms and Definitions  Throughout this document and the Velo platform the following terms are used:  * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout. * **Payee.** The recipient of funds paid out by a payor. * **Payment.** A single transfer of funds from a payor to a payee. * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee. * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.  ## Overview  The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:  * Authenticate with the Velo platform * Maintain a collection of payees * Query the payor’s current balance of funds within the platform and perform additional funding * Issue payments to payees * Query the platform for a history of those payments  This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.  ## API Considerations  The Velo Payments API is REST based and uses the JSON format for requests and responses.  Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.  Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).  Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.  ## Authenticating with the Velo Platform  Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.  You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:  create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529  base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==  perform the Velo authentication REST call using the HTTP header created above e.g. via curl:  ```   curl -X POST \\   -H \"Content-Type: application/json\" \\   -H \"Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==\" \\   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials' ```  If successful, this call will result in a **200** HTTP status code and a response body such as:  ```   {     \"access_token\":\"19f6bafd-93fd-4747-b229-00507bbc991f\",     \"token_type\":\"bearer\",     \"expires_in\":1799,     \"scope\":\"...\"   } ``` ## API access following authentication Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.  This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:  ```   -H \"Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f \" ```  If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response. 
 *
 * The version of the OpenAPI document: 2.22.122
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VeloPayments);
  }
}(this, function(expect, VeloPayments) {
  'use strict';

  var instance;

  beforeEach(function(done) {
    instance = new VeloPayments.PayeesApi();

    if (process.env.APITOKEN == "") {
      let defaultClient = VeloPayments.ApiClient.instance;
      let basicAuth = defaultClient.authentications['basicAuth'];
      basicAuth.username = process.env.KEY;
      basicAuth.password = process.env.SECRET;

      let apiInstance = new VeloPayments.LoginApi();
      let opts = {
        'grantType': "client_credentials"
      };

      apiInstance.veloAuth(opts, (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          process.env.APITOKEN = data.access_token;
          done();
        }
      });
    } else {
      done();
    }
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PayeesApi', function() {
    describe('deletePayeeByIdV1', function() {
      it.skip('skipping test', function (done) {
      // it('should call deletePayeeByIdV1 successfully', function(done) {
        //uncomment below and update the code to test deletePayeeByIdV1
        //instance.deletePayeeByIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePayeeByIdV3', function() {
      it.skip('skipping test', function (done) {
      // it('should call deletePayeeByIdV3 successfully', function(done) {
        //uncomment below and update the code to test deletePayeeByIdV3
        //instance.deletePayeeByIdV3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPayeeByIdV1', function() {
      it.skip('skipping test', function (done) {
      // it('should call getPayeeByIdV1 successfully', function(done) {
        //uncomment below and update the code to test getPayeeByIdV1
        //instance.getPayeeByIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPayeeByIdV2', function() {
      it.skip('skipping test', function (done) {
      // it('should call getPayeeByIdV2 successfully', function(done) {
        //uncomment below and update the code to test getPayeeByIdV2
        //instance.getPayeeByIdV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPayeeByIdV3', function() {
      it.skip('skipping test', function (done) {
      // it('should call getPayeeByIdV3 successfully', function(done) {
        //uncomment below and update the code to test getPayeeByIdV3
        //instance.getPayeeByIdV3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPayeeChanges', function() {
      it('should call listPayeesV1 successfully', function(done) {
        let defaultClient = VeloPayments.ApiClient.instance;
        let OAuth2 = defaultClient.authentications['OAuth2'];
        OAuth2.accessToken = process.env.APITOKEN;
        defaultClient.basePath = process.env.APIURL;

        let payorId = process.env.PAYOR; // String | 
        let opts = {
          'ofacStatus': null, // new VeloPayments.OfacStatus(), // OfacStatus | The ofacStatus of the payees.
          'onboardedStatus': null, // new VeloPayments.OnboardedStatus(), // OnboardedStatus | The onboarded status of the payees.
          'email': null, // String | Email address
          'displayName': null, // String | The display name of the payees.
          'remoteId': null, // String | The remote id of the payees.
          'payeeType': null, // PayeeType | The onboarded status of the payees.
          'payeeCountry': 'US', // String | The country of the payee - 2 letter ISO 3166-1 country code (upper case)
          'page': 1, // Number | Page number. Default is 1.
          'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
          'sort': 'displayName:asc' // String | List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus. 
        };
        instance.listPayeesV1(payorId, opts, (error, data, response) => {
         if (error) throw error;
         expect(response.statusCode).to.be(200);
          });
        done();
      });
    });
    describe('listPayeeChangesV3', function() {
      it('should call listPayeesV3 successfully', function(done) {
        let defaultClient = VeloPayments.ApiClient.instance;
        let OAuth2 = defaultClient.authentications['OAuth2'];
        OAuth2.accessToken = process.env.APITOKEN;
        defaultClient.basePath = process.env.APIURL;

        let payorId = process.env.PAYOR; // String | 
        let opts = {
          'watchlistStatus': null, // new VeloPayments.WatchlistStatus(), // WatchlistStatus | The watchlistStatus of the payees.
          'disabled': true, // Boolean | Payee disabled
          'onboardedStatus': null, // new VeloPayments.OnboardedStatus(), // OnboardedStatus | The onboarded status of the payees.
          'email': null, //  String | Email address
          'displayName': null, // String | The display name of the payees.
          'remoteId': null, //  String | The remote id of the payees.
          'payeeType': null, // new VeloPayments.PayeeType(), // PayeeType | The onboarded status of the payees.
          'payeeCountry': 'US', // String | The country of the payee - 2 letter ISO 3166-1 country code (upper case)
          'page': 1, // Number | Page number. Default is 1.
          'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
          'sort': 'displayName:asc' // String | List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus. 
        };
        instance.listPayeesV3(payorId, opts, (error, data, response) => {
         if (error) throw error;
         expect(response.statusCode).to.be(200);
          });
        done();
      });
    });
    describe('listPayeesV1', function() {
      it('should call listPayeesV1 successfully', function(done) {
        let defaultClient = VeloPayments.ApiClient.instance;
        let OAuth2 = defaultClient.authentications['OAuth2'];
        OAuth2.accessToken = process.env.APITOKEN;
        defaultClient.basePath = process.env.APIURL;

        let payorId = process.env.PAYOR; // String | 
        let opts = {
          'ofacStatus': null, // new VeloPayments.OfacStatus(), // OfacStatus | The ofacStatus of the payees.
          'onboardedStatus': null, // new VeloPayments.OnboardedStatus(), // OnboardedStatus | The onboarded status of the payees.
          'email': null, //  String | Email address
          'displayName': null, //  String | The display name of the payees.
          'remoteId': null, //  String | The remote id of the payees.
          'payeeType': null, // new VeloPayments.PayeeType(), // PayeeType | The onboarded status of the payees.
          'payeeCountry': 'US', // String | The country of the payee - 2 letter ISO 3166-1 country code (upper case)
          'page': 1, // Number | Page number. Default is 1.
          'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
          'sort': 'displayName:asc' // String | List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus. 
        };
        instance.listPayeesV1(payorId, opts, (error, data, response) => {
         if (error) throw error;
         expect(response.statusCode).to.be(200);
          });
        done();
      });
    });
    describe('listPayeesV3', function() {
      it('should call listPayeesV3 successfully', function(done) {
        let defaultClient = VeloPayments.ApiClient.instance;
        let OAuth2 = defaultClient.authentications['OAuth2'];
        OAuth2.accessToken = process.env.APITOKEN;
        defaultClient.basePath = process.env.APIURL;

        let payorId = process.env.PAYOR; // String | 
        let opts = {
          'watchlistStatus': null, // new VeloPayments.WatchlistStatus(), // WatchlistStatus | The watchlistStatus of the payees.
          'disabled': true, // Boolean | Payee disabled
          'onboardedStatus': null, // new VeloPayments.OnboardedStatus(), // OnboardedStatus | The onboarded status of the payees.
          'email': null, //  String | Email address
          'displayName': null, //  String | The display name of the payees.
          'remoteId': null, //  String | The remote id of the payees.
          'payeeType': null, // new VeloPayments.PayeeType(), // PayeeType | The onboarded status of the payees.
          'payeeCountry': 'US', // String | The country of the payee - 2 letter ISO 3166-1 country code (upper case)
          'page': 1, // Number | Page number. Default is 1.
          'pageSize': 25, // Number | Page size. Default is 25. Max allowable is 100.
          'sort': 'displayName:asc' // String | List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus. 
        };
        instance.listPayeesV3(payorId, opts, (error, data, response) => {
         if (error) throw error;
         expect(response.statusCode).to.be(200);
          });
        done();
      });
    });
    describe('payeeDetailsUpdateV3', function() {
      it.skip('skipping test', function (done) {
      // it('should call payeeDetailsUpdateV3 successfully', function(done) {
        //uncomment below and update the code to test payeeDetailsUpdateV3
        //instance.payeeDetailsUpdateV3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1PayeesPayeeIdRemoteIdUpdatePost', function() {
      it.skip('skipping test', function (done) {
      // it('should call v1PayeesPayeeIdRemoteIdUpdatePost successfully', function(done) {
        //uncomment below and update the code to test v1PayeesPayeeIdRemoteIdUpdatePost
        //instance.v1PayeesPayeeIdRemoteIdUpdatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v3PayeesPayeeIdRemoteIdUpdatePost', function() {
      it.skip('skipping test', function (done) {
      // it('should call v3PayeesPayeeIdRemoteIdUpdatePost successfully', function(done) {
        //uncomment below and update the code to test v3PayeesPayeeIdRemoteIdUpdatePost
        //instance.v3PayeesPayeeIdRemoteIdUpdatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
