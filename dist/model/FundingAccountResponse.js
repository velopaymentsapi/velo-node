"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The FundingAccountResponse model module.
 * @module model/FundingAccountResponse
 * @version 2.29.130
 */
var FundingAccountResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FundingAccountResponse</code>.
   * @alias module:model/FundingAccountResponse
   */
  function FundingAccountResponse() {
    _classCallCheck(this, FundingAccountResponse);

    FundingAccountResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FundingAccountResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FundingAccountResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundingAccountResponse} obj Optional instance to populate.
     * @return {module:model/FundingAccountResponse} The populated <code>FundingAccountResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FundingAccountResponse();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('accountName')) {
          obj['accountName'] = _ApiClient["default"].convertToType(data['accountName'], 'String');
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('routingNumber')) {
          obj['routingNumber'] = _ApiClient["default"].convertToType(data['routingNumber'], 'String');
        }

        if (data.hasOwnProperty('sourceAccountIds')) {
          obj['sourceAccountIds'] = _ApiClient["default"].convertToType(data['sourceAccountIds'], ['String']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FundingAccountResponse;
}();
/**
 * Funding Account Id
 * @member {String} id
 */


FundingAccountResponse.prototype['id'] = undefined;
/**
 * @member {String} payorId
 */

FundingAccountResponse.prototype['payorId'] = undefined;
/**
 * name on the bank account
 * @member {String} accountName
 */

FundingAccountResponse.prototype['accountName'] = undefined;
/**
 * bank account number
 * @member {String} accountNumber
 */

FundingAccountResponse.prototype['accountNumber'] = undefined;
/**
 * bank account routing number
 * @member {String} routingNumber
 */

FundingAccountResponse.prototype['routingNumber'] = undefined;
/**
 * @member {Array.<String>} sourceAccountIds
 */

FundingAccountResponse.prototype['sourceAccountIds'] = undefined;
/**
 * name of funding account
 * @member {String} name
 */

FundingAccountResponse.prototype['name'] = undefined;
/**
 * ISO 4217 currency code
 * @member {String} currency
 */

FundingAccountResponse.prototype['currency'] = undefined;
/**
 * ISO 3166-1 2 letter country code (upper case)
 * @member {String} country
 */

FundingAccountResponse.prototype['country'] = undefined;
/**
 * Funding account type
 * @member {String} type
 */

FundingAccountResponse.prototype['type'] = undefined;
var _default = FundingAccountResponse;
exports["default"] = _default;