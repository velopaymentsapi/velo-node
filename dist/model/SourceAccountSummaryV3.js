"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentAuditCurrencyV = _interopRequireDefault(require("./PaymentAuditCurrencyV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SourceAccountSummaryV3 model module.
 * @module model/SourceAccountSummaryV3
 * @version 2.26.124
 */
var SourceAccountSummaryV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SourceAccountSummaryV3</code>.
   * @alias module:model/SourceAccountSummaryV3
   * @param sourceAccountId {String} 
   * @param totalCost {Number} 
   */
  function SourceAccountSummaryV3(sourceAccountId, totalCost) {
    _classCallCheck(this, SourceAccountSummaryV3);

    SourceAccountSummaryV3.initialize(this, sourceAccountId, totalCost);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SourceAccountSummaryV3, null, [{
    key: "initialize",
    value: function initialize(obj, sourceAccountId, totalCost) {
      obj['sourceAccountId'] = sourceAccountId;
      obj['totalCost'] = totalCost;
    }
    /**
     * Constructs a <code>SourceAccountSummaryV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceAccountSummaryV3} obj Optional instance to populate.
     * @return {module:model/SourceAccountSummaryV3} The populated <code>SourceAccountSummaryV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SourceAccountSummaryV3();

        if (data.hasOwnProperty('sourceAccountId')) {
          obj['sourceAccountId'] = _ApiClient["default"].convertToType(data['sourceAccountId'], 'String');
        }

        if (data.hasOwnProperty('totalCost')) {
          obj['totalCost'] = _ApiClient["default"].convertToType(data['totalCost'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _PaymentAuditCurrencyV["default"].constructFromObject(data['currency']);
        }
      }

      return obj;
    }
  }]);

  return SourceAccountSummaryV3;
}();
/**
 * @member {String} sourceAccountId
 */


SourceAccountSummaryV3.prototype['sourceAccountId'] = undefined;
/**
 * @member {Number} totalCost
 */

SourceAccountSummaryV3.prototype['totalCost'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrencyV3} currency
 */

SourceAccountSummaryV3.prototype['currency'] = undefined;
var _default = SourceAccountSummaryV3;
exports["default"] = _default;