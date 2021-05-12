"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FailedSubmission = _interopRequireDefault(require("./FailedSubmission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The QueryBatchResponse model module.
 * @module model/QueryBatchResponse
 * @version 2.26.127
 */
var QueryBatchResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QueryBatchResponse</code>.
   * @alias module:model/QueryBatchResponse
   */
  function QueryBatchResponse() {
    _classCallCheck(this, QueryBatchResponse);

    QueryBatchResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(QueryBatchResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>QueryBatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryBatchResponse} obj Optional instance to populate.
     * @return {module:model/QueryBatchResponse} The populated <code>QueryBatchResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QueryBatchResponse();

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

  return QueryBatchResponse;
}();
/**
 * Batch Status
 * @member {module:model/QueryBatchResponse.StatusEnum} status
 */


QueryBatchResponse.prototype['status'] = undefined;
/**
 * @member {Number} failureCount
 */

QueryBatchResponse.prototype['failureCount'] = undefined;
/**
 * @member {Number} pendingCount
 */

QueryBatchResponse.prototype['pendingCount'] = undefined;
/**
 * @member {Array.<module:model/FailedSubmission>} failures
 */

QueryBatchResponse.prototype['failures'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

QueryBatchResponse['StatusEnum'] = {
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
var _default = QueryBatchResponse;
exports["default"] = _default;