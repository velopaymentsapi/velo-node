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
 * The FundingRequestV1 model module.
 * @module model/FundingRequestV1
 * @version 2.26.127
 */
var FundingRequestV1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FundingRequestV1</code>.
   * @alias module:model/FundingRequestV1
   * @param amount {Number} Amount to fund, decimal implied
   */
  function FundingRequestV1(amount) {
    _classCallCheck(this, FundingRequestV1);

    FundingRequestV1.initialize(this, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FundingRequestV1, null, [{
    key: "initialize",
    value: function initialize(obj, amount) {
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>FundingRequestV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundingRequestV1} obj Optional instance to populate.
     * @return {module:model/FundingRequestV1} The populated <code>FundingRequestV1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FundingRequestV1();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FundingRequestV1;
}();
/**
 * Amount to fund, decimal implied
 * @member {Number} amount
 */


FundingRequestV1.prototype['amount'] = undefined;
var _default = FundingRequestV1;
exports["default"] = _default;