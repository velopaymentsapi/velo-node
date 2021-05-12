"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FundingAccountResponse2 model module.
 * @module model/FundingAccountResponse2
 * @version 2.26.127
 */
var FundingAccountResponse2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FundingAccountResponse2</code>.
   * @alias module:model/FundingAccountResponse2
   */
  function FundingAccountResponse2() {
    _classCallCheck(this, FundingAccountResponse2);

    FundingAccountResponse2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FundingAccountResponse2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FundingAccountResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundingAccountResponse2} obj Optional instance to populate.
     * @return {module:model/FundingAccountResponse2} The populated <code>FundingAccountResponse2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FundingAccountResponse2();

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

        if (data.hasOwnProperty('archived')) {
          obj['archived'] = _ApiClient["default"].convertToType(data['archived'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return FundingAccountResponse2;
}();
/**
 * Funding Account Id
 * @member {String} id
 */


FundingAccountResponse2.prototype['id'] = undefined;
/**
 * @member {String} payorId
 */

FundingAccountResponse2.prototype['payorId'] = undefined;
/**
 * name on the bank account
 * @member {String} accountName
 */

FundingAccountResponse2.prototype['accountName'] = undefined;
/**
 * bank account number
 * @member {String} accountNumber
 */

FundingAccountResponse2.prototype['accountNumber'] = undefined;
/**
 * bank account routing number
 * @member {String} routingNumber
 */

FundingAccountResponse2.prototype['routingNumber'] = undefined;
/**
 * name of funding account
 * @member {String} name
 */

FundingAccountResponse2.prototype['name'] = undefined;
/**
 * ISO 4217 currency code
 * @member {String} currency
 */

FundingAccountResponse2.prototype['currency'] = undefined;
/**
 * ISO 3166-1 2 letter country code (upper case)
 * @member {String} country
 */

FundingAccountResponse2.prototype['country'] = undefined;
/**
 * Funding account type
 * @member {String} type
 */

FundingAccountResponse2.prototype['type'] = undefined;
/**
 * A flag for whether the funding account has been archived.  Only present in the response if true.
 * @member {Boolean} archived
 */

FundingAccountResponse2.prototype['archived'] = undefined;
var _default = FundingAccountResponse2;
exports["default"] = _default;