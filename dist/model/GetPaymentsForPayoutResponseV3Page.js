"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetPaymentsForPayoutResponseV3Page model module.
 * @module model/GetPaymentsForPayoutResponseV3Page
 * @version 2.29.128
 */
var GetPaymentsForPayoutResponseV3Page = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPaymentsForPayoutResponseV3Page</code>.
   * @alias module:model/GetPaymentsForPayoutResponseV3Page
   */
  function GetPaymentsForPayoutResponseV3Page() {
    _classCallCheck(this, GetPaymentsForPayoutResponseV3Page);

    GetPaymentsForPayoutResponseV3Page.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPaymentsForPayoutResponseV3Page, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPaymentsForPayoutResponseV3Page</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPaymentsForPayoutResponseV3Page} obj Optional instance to populate.
     * @return {module:model/GetPaymentsForPayoutResponseV3Page} The populated <code>GetPaymentsForPayoutResponseV3Page</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPaymentsForPayoutResponseV3Page();

        if (data.hasOwnProperty('numberOfElements')) {
          obj['numberOfElements'] = _ApiClient["default"].convertToType(data['numberOfElements'], 'Number');
        }

        if (data.hasOwnProperty('totalElements')) {
          obj['totalElements'] = _ApiClient["default"].convertToType(data['totalElements'], 'Number');
        }

        if (data.hasOwnProperty('totalPages')) {
          obj['totalPages'] = _ApiClient["default"].convertToType(data['totalPages'], 'Number');
        }

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'Number');
        }

        if (data.hasOwnProperty('pageSize')) {
          obj['pageSize'] = _ApiClient["default"].convertToType(data['pageSize'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetPaymentsForPayoutResponseV3Page;
}();
/**
 * @member {Number} numberOfElements
 */


GetPaymentsForPayoutResponseV3Page.prototype['numberOfElements'] = undefined;
/**
 * @member {Number} totalElements
 */

GetPaymentsForPayoutResponseV3Page.prototype['totalElements'] = undefined;
/**
 * @member {Number} totalPages
 */

GetPaymentsForPayoutResponseV3Page.prototype['totalPages'] = undefined;
/**
 * @member {Number} page
 */

GetPaymentsForPayoutResponseV3Page.prototype['page'] = undefined;
/**
 * @member {Number} pageSize
 */

GetPaymentsForPayoutResponseV3Page.prototype['pageSize'] = undefined;
var _default = GetPaymentsForPayoutResponseV3Page;
exports["default"] = _default;