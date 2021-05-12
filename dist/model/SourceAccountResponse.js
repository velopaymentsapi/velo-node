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
 * The SourceAccountResponse model module.
 * @module model/SourceAccountResponse
 * @version 2.26.127
 */
var SourceAccountResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SourceAccountResponse</code>.
   * @alias module:model/SourceAccountResponse
   */
  function SourceAccountResponse() {
    _classCallCheck(this, SourceAccountResponse);

    SourceAccountResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SourceAccountResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SourceAccountResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceAccountResponse} obj Optional instance to populate.
     * @return {module:model/SourceAccountResponse} The populated <code>SourceAccountResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SourceAccountResponse();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _ApiClient["default"].convertToType(data['balance'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('fundingRef')) {
          obj['fundingRef'] = _ApiClient["default"].convertToType(data['fundingRef'], 'String');
        }

        if (data.hasOwnProperty('physicalAccountName')) {
          obj['physicalAccountName'] = _ApiClient["default"].convertToType(data['physicalAccountName'], 'String');
        }

        if (data.hasOwnProperty('railsId')) {
          obj['railsId'] = _ApiClient["default"].convertToType(data['railsId'], 'String');
        }

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('pooled')) {
          obj['pooled'] = _ApiClient["default"].convertToType(data['pooled'], 'Boolean');
        }

        if (data.hasOwnProperty('balanceVisible')) {
          obj['balanceVisible'] = _ApiClient["default"].convertToType(data['balanceVisible'], 'Boolean');
        }

        if (data.hasOwnProperty('customerId')) {
          obj['customerId'] = _ApiClient["default"].convertToType(data['customerId'], 'String');
        }

        if (data.hasOwnProperty('physicalAccountId')) {
          obj['physicalAccountId'] = _ApiClient["default"].convertToType(data['physicalAccountId'], 'String');
        }

        if (data.hasOwnProperty('fundingAccountId')) {
          obj['fundingAccountId'] = _ApiClient["default"].convertToType(data['fundingAccountId'], 'String');
        }

        if (data.hasOwnProperty('accountType')) {
          obj['accountType'] = _ApiClient["default"].convertToType(data['accountType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SourceAccountResponse;
}();
/**
 * Source Account Id
 * @member {String} id
 */


SourceAccountResponse.prototype['id'] = undefined;
/**
 * Decimal implied
 * @member {Number} balance
 */

SourceAccountResponse.prototype['balance'] = undefined;
/**
 * @member {module:model/SourceAccountResponse.CurrencyEnum} currency
 */

SourceAccountResponse.prototype['currency'] = undefined;
/**
 * @member {String} fundingRef
 */

SourceAccountResponse.prototype['fundingRef'] = undefined;
/**
 * @member {String} physicalAccountName
 */

SourceAccountResponse.prototype['physicalAccountName'] = undefined;
/**
 * @member {String} railsId
 */

SourceAccountResponse.prototype['railsId'] = undefined;
/**
 * @member {String} payorId
 */

SourceAccountResponse.prototype['payorId'] = undefined;
/**
 * @member {String} name
 */

SourceAccountResponse.prototype['name'] = undefined;
/**
 * @member {Boolean} pooled
 */

SourceAccountResponse.prototype['pooled'] = undefined;
/**
 * @member {Boolean} balanceVisible
 */

SourceAccountResponse.prototype['balanceVisible'] = undefined;
/**
 * @member {String} customerId
 */

SourceAccountResponse.prototype['customerId'] = undefined;
/**
 * @member {String} physicalAccountId
 */

SourceAccountResponse.prototype['physicalAccountId'] = undefined;
/**
 * @member {String} fundingAccountId
 */

SourceAccountResponse.prototype['fundingAccountId'] = undefined;
/**
 * @member {String} accountType
 */

SourceAccountResponse.prototype['accountType'] = undefined;
/**
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */

SourceAccountResponse['CurrencyEnum'] = {
  /**
   * value: "USD"
   * @const
   */
  "USD": "USD"
};
var _default = SourceAccountResponse;
exports["default"] = _default;