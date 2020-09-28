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
 * The SourceAccountV3 model module.
 * @module model/SourceAccountV3
 * @version 2.23.78
 */
var SourceAccountV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SourceAccountV3</code>.
   * @alias module:model/SourceAccountV3
   * @param sourceAccountName {String} 
   * @param sourceAccountId {String} 
   * @param currency {String} Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
   * @param totalPayoutCost {Number} 
   */
  function SourceAccountV3(sourceAccountName, sourceAccountId, currency, totalPayoutCost) {
    _classCallCheck(this, SourceAccountV3);

    SourceAccountV3.initialize(this, sourceAccountName, sourceAccountId, currency, totalPayoutCost);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SourceAccountV3, null, [{
    key: "initialize",
    value: function initialize(obj, sourceAccountName, sourceAccountId, currency, totalPayoutCost) {
      obj['sourceAccountName'] = sourceAccountName;
      obj['sourceAccountId'] = sourceAccountId;
      obj['currency'] = currency;
      obj['totalPayoutCost'] = totalPayoutCost;
    }
    /**
     * Constructs a <code>SourceAccountV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceAccountV3} obj Optional instance to populate.
     * @return {module:model/SourceAccountV3} The populated <code>SourceAccountV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SourceAccountV3();

        if (data.hasOwnProperty('sourceAccountName')) {
          obj['sourceAccountName'] = _ApiClient["default"].convertToType(data['sourceAccountName'], 'String');
        }

        if (data.hasOwnProperty('sourceAccountId')) {
          obj['sourceAccountId'] = _ApiClient["default"].convertToType(data['sourceAccountId'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('totalPayoutCost')) {
          obj['totalPayoutCost'] = _ApiClient["default"].convertToType(data['totalPayoutCost'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SourceAccountV3;
}();
/**
 * @member {String} sourceAccountName
 */


SourceAccountV3.prototype['sourceAccountName'] = undefined;
/**
 * @member {String} sourceAccountId
 */

SourceAccountV3.prototype['sourceAccountId'] = undefined;
/**
 * Valid ISO 4217 3 letter currency code. See the <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\" a>ISO specification</a> for details.
 * @member {String} currency
 */

SourceAccountV3.prototype['currency'] = undefined;
/**
 * @member {Number} totalPayoutCost
 */

SourceAccountV3.prototype['totalPayoutCost'] = undefined;
var _default = SourceAccountV3;
exports["default"] = _default;