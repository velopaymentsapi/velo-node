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
 * The PagedPayeeResponse2Summary model module.
 * @module model/PagedPayeeResponse2Summary
 * @version 2.23.78
 */
var PagedPayeeResponse2Summary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PagedPayeeResponse2Summary</code>.
   * @alias module:model/PagedPayeeResponse2Summary
   */
  function PagedPayeeResponse2Summary() {
    _classCallCheck(this, PagedPayeeResponse2Summary);

    PagedPayeeResponse2Summary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PagedPayeeResponse2Summary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PagedPayeeResponse2Summary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagedPayeeResponse2Summary} obj Optional instance to populate.
     * @return {module:model/PagedPayeeResponse2Summary} The populated <code>PagedPayeeResponse2Summary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PagedPayeeResponse2Summary();

        if (data.hasOwnProperty('totalPayeesCount')) {
          obj['totalPayeesCount'] = _ApiClient["default"].convertToType(data['totalPayeesCount'], 'Number');
        }

        if (data.hasOwnProperty('totalInvitedCount')) {
          obj['totalInvitedCount'] = _ApiClient["default"].convertToType(data['totalInvitedCount'], 'Number');
        }

        if (data.hasOwnProperty('totalRegisteredCount')) {
          obj['totalRegisteredCount'] = _ApiClient["default"].convertToType(data['totalRegisteredCount'], 'Number');
        }

        if (data.hasOwnProperty('totalOnboardedCount')) {
          obj['totalOnboardedCount'] = _ApiClient["default"].convertToType(data['totalOnboardedCount'], 'Number');
        }

        if (data.hasOwnProperty('totalWatchlistFailedCount')) {
          obj['totalWatchlistFailedCount'] = _ApiClient["default"].convertToType(data['totalWatchlistFailedCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PagedPayeeResponse2Summary;
}();
/**
 * @member {Number} totalPayeesCount
 */


PagedPayeeResponse2Summary.prototype['totalPayeesCount'] = undefined;
/**
 * @member {Number} totalInvitedCount
 */

PagedPayeeResponse2Summary.prototype['totalInvitedCount'] = undefined;
/**
 * @member {Number} totalRegisteredCount
 */

PagedPayeeResponse2Summary.prototype['totalRegisteredCount'] = undefined;
/**
 * @member {Number} totalOnboardedCount
 */

PagedPayeeResponse2Summary.prototype['totalOnboardedCount'] = undefined;
/**
 * @member {Number} totalWatchlistFailedCount
 */

PagedPayeeResponse2Summary.prototype['totalWatchlistFailedCount'] = undefined;
var _default = PagedPayeeResponse2Summary;
exports["default"] = _default;