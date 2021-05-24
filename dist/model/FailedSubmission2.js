"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FailedPayee = _interopRequireDefault(require("./FailedPayee2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FailedSubmission2 model module.
 * @module model/FailedSubmission2
 * @version 2.26.124
 */
var FailedSubmission2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FailedSubmission2</code>.
   * @alias module:model/FailedSubmission2
   */
  function FailedSubmission2() {
    _classCallCheck(this, FailedSubmission2);

    FailedSubmission2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FailedSubmission2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FailedSubmission2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailedSubmission2} obj Optional instance to populate.
     * @return {module:model/FailedSubmission2} The populated <code>FailedSubmission2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FailedSubmission2();

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

  return FailedSubmission2;
}();
/**
 * @member {module:model/FailedPayee2} failedSubmission
 */


FailedSubmission2.prototype['failedSubmission'] = undefined;
/**
 * @member {String} failureMessage
 */

FailedSubmission2.prototype['failureMessage'] = undefined;
var _default = FailedSubmission2;
exports["default"] = _default;