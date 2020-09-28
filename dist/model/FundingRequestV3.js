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
 * The FundingRequestV3 model module.
 * @module model/FundingRequestV3
 * @version 2.23.78
 */
var FundingRequestV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FundingRequestV3</code>.
   * @alias module:model/FundingRequestV3
   * @param fundingAccountId {String} The funding account id
   * @param amount {Number} Amount to fund in minor units
   */
  function FundingRequestV3(fundingAccountId, amount) {
    _classCallCheck(this, FundingRequestV3);

    FundingRequestV3.initialize(this, fundingAccountId, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FundingRequestV3, null, [{
    key: "initialize",
    value: function initialize(obj, fundingAccountId, amount) {
      obj['fundingAccountId'] = fundingAccountId;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>FundingRequestV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundingRequestV3} obj Optional instance to populate.
     * @return {module:model/FundingRequestV3} The populated <code>FundingRequestV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FundingRequestV3();

        if (data.hasOwnProperty('fundingAccountId')) {
          obj['fundingAccountId'] = _ApiClient["default"].convertToType(data['fundingAccountId'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FundingRequestV3;
}();
/**
 * The funding account id
 * @member {String} fundingAccountId
 */


FundingRequestV3.prototype['fundingAccountId'] = undefined;
/**
 * Amount to fund in minor units
 * @member {Number} amount
 */

FundingRequestV3.prototype['amount'] = undefined;
var _default = FundingRequestV3;
exports["default"] = _default;