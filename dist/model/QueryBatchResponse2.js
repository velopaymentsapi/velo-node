"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FailedSubmission = _interopRequireDefault(require("./FailedSubmission2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The QueryBatchResponse2 model module.
 * @module model/QueryBatchResponse2
 * @version 2.29.128
 */
var QueryBatchResponse2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QueryBatchResponse2</code>.
   * @alias module:model/QueryBatchResponse2
   */
  function QueryBatchResponse2() {
    _classCallCheck(this, QueryBatchResponse2);

    QueryBatchResponse2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(QueryBatchResponse2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>QueryBatchResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryBatchResponse2} obj Optional instance to populate.
     * @return {module:model/QueryBatchResponse2} The populated <code>QueryBatchResponse2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QueryBatchResponse2();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('failureCount')) {
          obj['failureCount'] = _ApiClient["default"].convertToType(data['failureCount'], 'Number');
        }

        if (data.hasOwnProperty('pendingCount')) {
          obj['pendingCount'] = _ApiClient["default"].convertToType(data['pendingCount'], 'Number');
        }

        if (data.hasOwnProperty('failures')) {
          obj['failures'] = _ApiClient["default"].convertToType(data['failures'], [_FailedSubmission["default"]]);
        }
      }

      return obj;
    }
  }]);

  return QueryBatchResponse2;
}();
/**
 * Batch Status
 * @member {module:model/QueryBatchResponse2.StatusEnum} status
 */


QueryBatchResponse2.prototype['status'] = undefined;
/**
 * @member {Number} failureCount
 */

QueryBatchResponse2.prototype['failureCount'] = undefined;
/**
 * @member {Number} pendingCount
 */

QueryBatchResponse2.prototype['pendingCount'] = undefined;
/**
 * @member {Array.<module:model/FailedSubmission2>} failures
 */

QueryBatchResponse2.prototype['failures'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

QueryBatchResponse2['StatusEnum'] = {
  /**
   * value: "SUBMITTED"
   * @const
   */
  "SUBMITTED": "SUBMITTED",

  /**
   * value: "ACCEPTED"
   * @const
   */
  "ACCEPTED": "ACCEPTED"
};
var _default = QueryBatchResponse2;
exports["default"] = _default;