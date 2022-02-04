"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FailedPayee = _interopRequireDefault(require("./FailedPayee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The FailedSubmission model module.
 * @module model/FailedSubmission
 * @version 2.29.130
 */
var FailedSubmission = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FailedSubmission</code>.
   * @alias module:model/FailedSubmission
   */
  function FailedSubmission() {
    _classCallCheck(this, FailedSubmission);

    FailedSubmission.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FailedSubmission, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FailedSubmission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailedSubmission} obj Optional instance to populate.
     * @return {module:model/FailedSubmission} The populated <code>FailedSubmission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FailedSubmission();

        if (data.hasOwnProperty('failedSubmission')) {
          obj['failedSubmission'] = _FailedPayee["default"].constructFromObject(data['failedSubmission']);
        }

        if (data.hasOwnProperty('failureMessage')) {
          obj['failureMessage'] = _ApiClient["default"].convertToType(data['failureMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FailedSubmission;
}();
/**
 * @member {module:model/FailedPayee} failedSubmission
 */


FailedSubmission.prototype['failedSubmission'] = undefined;
/**
 * @member {String} failureMessage
 */

FailedSubmission.prototype['failureMessage'] = undefined;
var _default = FailedSubmission;
exports["default"] = _default;