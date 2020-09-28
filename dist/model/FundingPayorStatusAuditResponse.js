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
 * The FundingPayorStatusAuditResponse model module.
 * @module model/FundingPayorStatusAuditResponse
 * @version 2.23.78
 */
var FundingPayorStatusAuditResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FundingPayorStatusAuditResponse</code>.
   * @alias module:model/FundingPayorStatusAuditResponse
   */
  function FundingPayorStatusAuditResponse() {
    _classCallCheck(this, FundingPayorStatusAuditResponse);

    FundingPayorStatusAuditResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FundingPayorStatusAuditResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FundingPayorStatusAuditResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundingPayorStatusAuditResponse} obj Optional instance to populate.
     * @return {module:model/FundingPayorStatusAuditResponse} The populated <code>FundingPayorStatusAuditResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FundingPayorStatusAuditResponse();

        if (data.hasOwnProperty('fundingId')) {
          obj['fundingId'] = _ApiClient["default"].convertToType(data['fundingId'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FundingPayorStatusAuditResponse;
}();
/**
 * @member {String} fundingId
 */


FundingPayorStatusAuditResponse.prototype['fundingId'] = undefined;
/**
 * @member {Number} amount
 */

FundingPayorStatusAuditResponse.prototype['amount'] = undefined;
/**
 * Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} currency
 */

FundingPayorStatusAuditResponse.prototype['currency'] = undefined;
/**
 * @member {String} status
 */

FundingPayorStatusAuditResponse.prototype['status'] = undefined;
var _default = FundingPayorStatusAuditResponse;
exports["default"] = _default;