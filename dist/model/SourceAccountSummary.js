"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentAuditCurrency = _interopRequireDefault(require("./PaymentAuditCurrency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SourceAccountSummary model module.
 * @module model/SourceAccountSummary
 * @version 2.29.128
 */
var SourceAccountSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SourceAccountSummary</code>.
   * @alias module:model/SourceAccountSummary
   * @param sourceAccountId {String} 
   * @param totalCost {Number} 
   */
  function SourceAccountSummary(sourceAccountId, totalCost) {
    _classCallCheck(this, SourceAccountSummary);

    SourceAccountSummary.initialize(this, sourceAccountId, totalCost);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SourceAccountSummary, null, [{
    key: "initialize",
    value: function initialize(obj, sourceAccountId, totalCost) {
      obj['sourceAccountId'] = sourceAccountId;
      obj['totalCost'] = totalCost;
    }
    /**
     * Constructs a <code>SourceAccountSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceAccountSummary} obj Optional instance to populate.
     * @return {module:model/SourceAccountSummary} The populated <code>SourceAccountSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SourceAccountSummary();

        if (data.hasOwnProperty('sourceAccountId')) {
          obj['sourceAccountId'] = _ApiClient["default"].convertToType(data['sourceAccountId'], 'String');
        }

        if (data.hasOwnProperty('totalCost')) {
          obj['totalCost'] = _ApiClient["default"].convertToType(data['totalCost'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _PaymentAuditCurrency["default"].constructFromObject(data['currency']);
        }
      }

      return obj;
    }
  }]);

  return SourceAccountSummary;
}();
/**
 * @member {String} sourceAccountId
 */


SourceAccountSummary.prototype['sourceAccountId'] = undefined;
/**
 * @member {Number} totalCost
 */

SourceAccountSummary.prototype['totalCost'] = undefined;
/**
 * @member {module:model/PaymentAuditCurrency} currency
 */

SourceAccountSummary.prototype['currency'] = undefined;
var _default = SourceAccountSummary;
exports["default"] = _default;