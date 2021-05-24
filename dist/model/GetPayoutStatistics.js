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
 * The GetPayoutStatistics model module.
 * @module model/GetPayoutStatistics
 * @version 2.26.124
 */
var GetPayoutStatistics = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPayoutStatistics</code>.
   * @alias module:model/GetPayoutStatistics
   * @param thisMonthPayoutsCount {Number} 
   * @param thisMonthFailedPaymentsCount {Number} 
   */
  function GetPayoutStatistics(thisMonthPayoutsCount, thisMonthFailedPaymentsCount) {
    _classCallCheck(this, GetPayoutStatistics);

    GetPayoutStatistics.initialize(this, thisMonthPayoutsCount, thisMonthFailedPaymentsCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPayoutStatistics, null, [{
    key: "initialize",
    value: function initialize(obj, thisMonthPayoutsCount, thisMonthFailedPaymentsCount) {
      obj['thisMonthPayoutsCount'] = thisMonthPayoutsCount;
      obj['thisMonthFailedPaymentsCount'] = thisMonthFailedPaymentsCount;
    }
    /**
     * Constructs a <code>GetPayoutStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPayoutStatistics} obj Optional instance to populate.
     * @return {module:model/GetPayoutStatistics} The populated <code>GetPayoutStatistics</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPayoutStatistics();

        if (data.hasOwnProperty('thisMonthPayoutsCount')) {
          obj['thisMonthPayoutsCount'] = _ApiClient["default"].convertToType(data['thisMonthPayoutsCount'], 'Number');
        }

        if (data.hasOwnProperty('thisMonthFailedPaymentsCount')) {
          obj['thisMonthFailedPaymentsCount'] = _ApiClient["default"].convertToType(data['thisMonthFailedPaymentsCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetPayoutStatistics;
}();
/**
 * @member {Number} thisMonthPayoutsCount
 */


GetPayoutStatistics.prototype['thisMonthPayoutsCount'] = undefined;
/**
 * @member {Number} thisMonthFailedPaymentsCount
 */

GetPayoutStatistics.prototype['thisMonthFailedPaymentsCount'] = undefined;
var _default = GetPayoutStatistics;
exports["default"] = _default;