"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetPayoutsResponseV3Links = _interopRequireDefault(require("./GetPayoutsResponseV3Links"));

var _ListPaymentsResponseV3Page = _interopRequireDefault(require("./ListPaymentsResponseV3Page"));

var _PaymentResponseV = _interopRequireDefault(require("./PaymentResponseV3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListPaymentsResponseV3 model module.
 * @module model/ListPaymentsResponseV3
 * @version 2.26.127
 */
var ListPaymentsResponseV3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListPaymentsResponseV3</code>.
   * List Payments Response Object
   * @alias module:model/ListPaymentsResponseV3
   */
  function ListPaymentsResponseV3() {
    _classCallCheck(this, ListPaymentsResponseV3);

    ListPaymentsResponseV3.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListPaymentsResponseV3, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListPaymentsResponseV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPaymentsResponseV3} obj Optional instance to populate.
     * @return {module:model/ListPaymentsResponseV3} The populated <code>ListPaymentsResponseV3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListPaymentsResponseV3();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ListPaymentsResponseV3Page["default"].constructFromObject(data['page']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_GetPayoutsResponseV3Links["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_PaymentResponseV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListPaymentsResponseV3;
}();
/**
 * @member {module:model/ListPaymentsResponseV3Page} page
 */


ListPaymentsResponseV3.prototype['page'] = undefined;
/**
 * @member {Array.<module:model/GetPayoutsResponseV3Links>} links
 */

ListPaymentsResponseV3.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PaymentResponseV3>} content
 */

ListPaymentsResponseV3.prototype['content'] = undefined;
var _default = ListPaymentsResponseV3;
exports["default"] = _default;