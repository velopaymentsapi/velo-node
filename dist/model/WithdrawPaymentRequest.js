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
 * The WithdrawPaymentRequest model module.
 * @module model/WithdrawPaymentRequest
 * @version 2.26.127
 */
var WithdrawPaymentRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WithdrawPaymentRequest</code>.
   * @alias module:model/WithdrawPaymentRequest
   * @param reason {String} Reason for withdrawal
   */
  function WithdrawPaymentRequest(reason) {
    _classCallCheck(this, WithdrawPaymentRequest);

    WithdrawPaymentRequest.initialize(this, reason);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WithdrawPaymentRequest, null, [{
    key: "initialize",
    value: function initialize(obj, reason) {
      obj['reason'] = reason;
    }
    /**
     * Constructs a <code>WithdrawPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WithdrawPaymentRequest} obj Optional instance to populate.
     * @return {module:model/WithdrawPaymentRequest} The populated <code>WithdrawPaymentRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WithdrawPaymentRequest();

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WithdrawPaymentRequest;
}();
/**
 * Reason for withdrawal
 * @member {String} reason
 */


WithdrawPaymentRequest.prototype['reason'] = undefined;
var _default = WithdrawPaymentRequest;
exports["default"] = _default;